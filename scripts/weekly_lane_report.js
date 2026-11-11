#!/usr/bin/env node
/**
 * CredSettle Weekly Lead Differentiation KPI Reporter (Read-Only)
 *
 * Computes the 3 weekly KPIs defined in `issues/LEAD_DIFFERENTIATION_PLAN_2026-11.md`:
 *   (a) Unique >= ₹3,00,000 leads in Firestore `Form` this week vs last week,
 *       deduplicated by normalized 10-digit phone against AMA `form` (and
 *       SettleLoans `ContactPageForm` when credentials are present), deriving
 *       brand from `submissionUrl` with ZERO schema changes.
 *   (b) Organic GSC clicks on new differentiation-lane URLs (`sc-domain:credsettle.com`),
 *       split by whether AMA (`sc-domain:amalegalsolutions.com`) ranks in the top 10
 *       for the same query (overlap target < 20%).
 *   (c) Converted / paid leads (`payment === 'paid'` or `paymentStatus === 'paid'`).
 *
 * Usage:
 *   node scripts/weekly_lane_report.js              # Live read-only report (last 7 days)
 *   node scripts/weekly_lane_report.js --dry-run    # Offline parser + config self-test
 *   node scripts/weekly_lane_report.js --days=14    # Custom window length
 *   node scripts/weekly_lane_report.js --json       # Emit JSON output alongside summary
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const admin = require('firebase-admin');

const CS_ROOT = path.resolve(__dirname, '..');
const DEFAULT_AMA_ENV = '/Users/amalegalsolutions/Desktop/AMAWORK/AMA/ama/.env';
const DEFAULT_SL_ENV = '/Users/amalegalsolutions/Desktop/AMAWORK/sl-new/settleloans/.env';

function parseArgs(argv) {
  const args = { dryRun: false, days: 7, json: false };
  for (const arg of argv.slice(2)) {
    if (arg === '--dry-run') args.dryRun = true;
    else if (arg === '--json') args.json = true;
    else if (arg.startsWith('--days=')) {
      const n = Number(arg.split('=')[1]);
      if (Number.isFinite(n) && n > 0) args.days = n;
    }
  }
  return args;
}

function loadEnvFile(filePath) {
  const vars = {};
  if (!filePath || !fs.existsSync(filePath)) return vars;
  const content = fs.readFileSync(filePath, 'utf8');
  for (const line of content.split('\n')) {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (!match) continue;
    const key = match[1].trim();
    let val = match[2].trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    vars[key] = val.replace(/\\n/g, '\n');
  }
  return vars;
}

function normalizePrivateKey(raw) {
  if (!raw) return '';
  return raw.replace(/"/g, '').replace(/\\n/g, '\n').trim();
}

function normalizePhone(raw) {
  if (raw === undefined || raw === null) return '';
  const digits = String(raw).replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) return digits.slice(2);
  if (digits.length === 11 && digits.startsWith('0')) return digits.slice(1);
  if (digits.length > 10) return digits.slice(-10);
  return digits;
}

function deriveBrandFromUrl(submissionUrl, fallbackBrand) {
  if (!submissionUrl || typeof submissionUrl !== 'string') return fallbackBrand;
  const lower = submissionUrl.toLowerCase();
  if (lower.includes('amalegalsolutions.com')) return 'AMA';
  if (lower.includes('settleloans.in')) return 'SettleLoans';
  if (lower.includes('credsettle.com')) return 'CredSettle';
  return fallbackBrand;
}

/**
 * Determines whether a CredSettle `Form` doc meets the >= ₹3,00,000 debt floor.
 * Supports:
 *  - Funnel brackets in `queries`/`message`: e.g. "₹3 Lakhs - ₹15 Lakhs", "₹15 Lakhs - ₹30 Lakhs", "Above ₹50 Lakhs"
 *  - Explicit sub-₹3L brackets: e.g. "Below ₹1 Lakh", "₹1 Lakh - ₹3 Lakhs", "< 3 Lakh" -> false
 *  - Numeric fields: `creditCardDues` + `personalLoanDues` + `totalDebt` >= 300000
 */
function parseDebtFloorQualification(doc) {
  const text = `${doc.debtBracket || ''} ${doc.queries || ''} ${doc.message || ''}`;

  // Explicit sub-3L indicators
  if (/below\s*₹?\s*[123]\s*lakh/i.test(text) || /₹?\s*1\s*lakh\s*-\s*₹?\s*[23]\s*lakh/i.test(text) || /under\s*₹?\s*3\s*lakh/i.test(text)) {
    return { qualifies: false, bracket: 'sub-3L-bracket' };
  }

  // InteractiveLeadFunnel / Modal >= 3L brackets
  const bracketMatch = text.match(/(?:Total Debt|Debt Bracket)\s*:\s*([^\n|]+)/i);
  if (bracketMatch) {
    const bracket = bracketMatch[1].trim();
    if (
      /₹?\s*(3|4|5|10|15|20|25|30|50)\s*lakh/i.test(bracket) ||
      /above\s*₹?\s*\d+\s*lakh/i.test(bracket) ||
      /crore/i.test(bracket)
    ) {
      return { qualifies: true, bracket };
    }
  }

  // Check numeric dues fields if present
  const parseRupees = (val) => {
    if (val === undefined || val === null || val === '') return 0;
    const str = String(val).trim();
    const lakhMatch = str.match(/(\d+(?:\.\d+)?)\s*lakh/i);
    if (lakhMatch) return Number(lakhMatch[1]) * 100000;
    const crMatch = str.match(/(\d+(?:\.\d+)?)\s*(?:cr|crore)/i);
    if (crMatch) return Number(crMatch[1]) * 10000000;
    const cleaned = Number(str.replace(/[^0-9.]/g, ''));
    return Number.isFinite(cleaned) ? cleaned : 0;
  };

  const numericTotal =
    parseRupees(doc.totalDebt) ||
    parseRupees(doc.creditCardDues) + parseRupees(doc.personalLoanDues);

  if (numericTotal >= 300000) {
    return { qualifies: true, bracket: `numeric:${numericTotal}` };
  }

  // Free-text mention of >= 3 lakh / 3,00,000+
  const lakhInText = text.match(/₹?\s*(\d+(?:\.\d+)?)\s*(?:lakh|lac|lakhs)/i);
  if (lakhInText && Number(lakhInText[1]) >= 3) {
    return { qualifies: true, bracket: `text:${lakhInText[0].trim()}` };
  }

  return { qualifies: false, bracket: 'unspecified-or-below-3L' };
}

function getDocTimestampMs(doc) {
  if (typeof doc.created === 'number' && doc.created > 1e11) return doc.created;
  if (doc.timestamp && typeof doc.timestamp.toMillis === 'function') return doc.timestamp.toMillis();
  if (doc.createdAt && typeof doc.createdAt.toMillis === 'function') return doc.createdAt.toMillis();
  if (typeof doc.createdAt === 'string') {
    const t = Date.parse(doc.createdAt);
    if (!Number.isNaN(t)) return t;
  }
  if (typeof doc.date === 'string' && /^\d{2}-\d{2}-\d{4}$/.test(doc.date)) {
    const [dd, mm, yyyy] = doc.date.split('-').map(Number);
    return Date.UTC(yyyy, mm - 1, dd);
  }
  return null;
}

/**
 * Extracts shipped differentiation-lane paths from `issues/seo_change_log.md`.
 */
function loadShippedLanePaths() {
  const logPath = path.join(CS_ROOT, 'issues', 'seo_change_log.md');
  const paths = new Set();
  if (!fs.existsSync(logPath)) return [];

  const lines = fs.readFileSync(logPath, 'utf8').split('\n');
  for (const line of lines) {
    if (!line.startsWith('|')) continue;
    const cols = line.split('|').map((c) => c.trim());
    if (cols.length < 5) continue;
    const urlCol = cols[2] || '';
    const changeCol = cols[3] || '';
    // Match routes logged as new page / new tool (not hub internal-link edits or sitemap/doc commits)
    if (!/^(?:shipped|created|added\s+new)\b/i.test(changeCol)) {
      continue;
    }
    const routeMatches = urlCol.match(/\/[a-z0-9/-]+/g) || [];
    for (const r of routeMatches) {
      if (
        r.startsWith('/src/') ||
        r.startsWith('/issues/') ||
        r.startsWith('/scripts/') ||
        r === '/sitemap.xml' ||
        r === '/sitemap'
      ) {
        continue;
      }
      paths.add(r.replace(/\/+$/, '') || '/');
    }
  }
  return Array.from(paths);
}

function base64url(input) {
  return Buffer.from(input)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

async function getGoogleAccessToken(clientEmail, privateKey, scope) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const payload = {
    iss: clientEmail,
    scope,
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  };
  const unsigned = `${base64url(JSON.stringify(header))}.${base64url(JSON.stringify(payload))}`;
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(unsigned);
  const sig = signer
    .sign(privateKey, 'base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${unsigned}.${sig}`,
    }),
  });
  if (!res.ok) {
    throw new Error(`OAuth token failed (${res.status}): ${await res.text()}`);
  }
  const data = await res.json();
  return data.access_token;
}

async function queryGsc(token, siteUrl, body) {
  const endpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`;
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error(`GSC query failed for ${siteUrl} (${res.status}): ${await res.text()}`);
  }
  return res.json();
}

function runDryRunChecks(csEnv, amaEnv, slEnv, shippedPaths) {
  const sampleQualified = parseDebtFloorQualification({
    queries: '[Assessment Funnel - SBI Card] Issue: Credit Card Settlement | Total Debt: ₹3 Lakhs - ₹15 Lakhs',
  });
  const sampleBelow = parseDebtFloorQualification({
    queries: 'Need help with ₹45,000 single app loan',
    creditCardDues: '45000',
  });
  const phoneCheck = normalizePhone('+91 98765-43210');
  const brandCheck = deriveBrandFromUrl('https://www.amalegalsolutions.com/credit-card-settlement', 'CredSettle');

  if (!sampleQualified.qualifies || sampleBelow.qualifies || phoneCheck !== '9876543210' || brandCheck !== 'AMA') {
    throw new Error('Self-test assertion failed in dry-run');
  }

  console.log('=== CredSettle Weekly Lane Report (DRY RUN) ===');
  console.log(`CredSettle .env credentials present : ${Boolean(csEnv.FIREBASE_PROJECT_ID && csEnv.FIREBASE_CLIENT_EMAIL && csEnv.FIREBASE_SERVICE_ACCOUNT)}`);
  console.log(`AMA .env credentials present        : ${Boolean(amaEnv.FIREBASE_ADMIN_PROJECT_ID && amaEnv.FIREBASE_ADMIN_CLIENT_EMAIL && amaEnv.FIREBASE_ADMIN_PRIVATE_KEY)}`);
  console.log(`SettleLoans .env credentials present: ${Boolean(slEnv.FIREBASE_PROJECT_ID && slEnv.FIREBASE_CLIENT_EMAIL && (slEnv.FIREBASE_PRIVATE_KEY || slEnv.FIREBASE_SERVICE_ACCOUNT))}`);
  console.log(`Shipped new-lane URLs in change log : ${shippedPaths.length}`);
  console.log('Parser self-tests                   : PASSED (>= ₹3L bracket, sub-₹3L filter, phone normalization, URL brand derivation)');
}

async function main() {
  const args = parseArgs(process.argv);
  const csEnv = loadEnvFile(path.join(CS_ROOT, '.env'));
  const amaEnv = loadEnvFile(process.env.AMA_ENV_PATH || DEFAULT_AMA_ENV);
  const slEnv = loadEnvFile(process.env.SL_ENV_PATH || DEFAULT_SL_ENV);
  const shippedPaths = loadShippedLanePaths();

  if (args.dryRun) {
    runDryRunChecks(csEnv, amaEnv, slEnv, shippedPaths);
    return;
  }

  if (!csEnv.FIREBASE_PROJECT_ID || !csEnv.FIREBASE_CLIENT_EMAIL || !csEnv.FIREBASE_SERVICE_ACCOUNT) {
    console.error('Missing FIREBASE_PROJECT_ID / FIREBASE_CLIENT_EMAIL / FIREBASE_SERVICE_ACCOUNT in CredSettle .env');
    process.exit(1);
  }

  const nowMs = Date.now();
  const windowMs = args.days * 24 * 60 * 60 * 1000;
  const thisWeekStartMs = nowMs - windowMs;
  const prevWeekStartMs = thisWeekStartMs - windowMs;

  // 1. Initialize CredSettle Firebase Admin (read-only)
  const csPrivateKey = normalizePrivateKey(csEnv.FIREBASE_SERVICE_ACCOUNT);
  const csApp = admin.initializeApp(
    {
      credential: admin.credential.cert({
        projectId: csEnv.FIREBASE_PROJECT_ID,
        clientEmail: csEnv.FIREBASE_CLIENT_EMAIL,
        privateKey: csPrivateKey,
      }),
    },
    'credsettle-readonly'
  );
  const csDb = csApp.firestore();

  // 2. Load cross-brand phones + earliest seen timestamps from AMA `form` (and SettleLoans if configured)
  const otherBrandEarliestByPhone = new Map(); // phone -> { tsMs, brand }
  const crossBrandSources = [];

  const recordOtherBrandLead = (phone, tsMs, brand) => {
    if (!phone || phone.length < 10) return;
    const effectiveTs = tsMs ?? 0;
    const prev = otherBrandEarliestByPhone.get(phone);
    if (!prev || effectiveTs < prev.tsMs) {
      otherBrandEarliestByPhone.set(phone, { tsMs: effectiveTs, brand });
    }
  };

  if (amaEnv.FIREBASE_ADMIN_PROJECT_ID && amaEnv.FIREBASE_ADMIN_CLIENT_EMAIL && amaEnv.FIREBASE_ADMIN_PRIVATE_KEY) {
    try {
      const amaApp = admin.initializeApp(
        {
          credential: admin.credential.cert({
            projectId: amaEnv.FIREBASE_ADMIN_PROJECT_ID,
            clientEmail: amaEnv.FIREBASE_ADMIN_CLIENT_EMAIL,
            privateKey: normalizePrivateKey(amaEnv.FIREBASE_ADMIN_PRIVATE_KEY),
          }),
        },
        'ama-readonly'
      );
      const amaSnap = await amaApp.firestore().collection('form').get();
      amaSnap.forEach((d) => {
        const data = d.data();
        const phone = normalizePhone(data.phone || data.number);
        const brand = deriveBrandFromUrl(data.submissionUrl, 'AMA');
        if (brand !== 'CredSettle') {
          recordOtherBrandLead(phone, getDocTimestampMs(data), brand);
        }
      });
      crossBrandSources.push(`AMA form (${amaSnap.size} docs)`);
    } catch (err) {
      crossBrandSources.push(`AMA form unavailable (${err.message})`);
    }
  } else {
    crossBrandSources.push('AMA .env not present');
  }

  const slPrivateKey = normalizePrivateKey(slEnv.FIREBASE_PRIVATE_KEY || slEnv.FIREBASE_SERVICE_ACCOUNT);
  if (slEnv.FIREBASE_PROJECT_ID && slEnv.FIREBASE_CLIENT_EMAIL && slPrivateKey) {
    try {
      const slApp = admin.initializeApp(
        {
          credential: admin.credential.cert({
            projectId: slEnv.FIREBASE_PROJECT_ID,
            clientEmail: slEnv.FIREBASE_CLIENT_EMAIL,
            privateKey: slPrivateKey,
          }),
        },
        'sl-readonly'
      );
      const slSnap = await slApp.firestore().collection('ContactPageForm').get();
      slSnap.forEach((d) => {
        const data = d.data();
        const phone = normalizePhone(data.phone || data.number || data.mobile);
        const brand = deriveBrandFromUrl(data.submissionUrl || data.pageUrl, 'SettleLoans');
        if (brand !== 'CredSettle') {
          recordOtherBrandLead(phone, getDocTimestampMs(data), brand);
        }
      });
      crossBrandSources.push(`SettleLoans ContactPageForm (${slSnap.size} docs)`);
    } catch (err) {
      crossBrandSources.push(`SettleLoans unavailable (${err.message})`);
    }
  } else {
    crossBrandSources.push('SettleLoans Firebase credentials not configured locally');
  }

  // 3. Query CredSettle `Form` leads for last 2 windows + paid conversions
  const csSnap = await csDb
    .collection('Form')
    .where('created', '>=', prevWeekStartMs)
    .get();

  const seenThisWeekPhones = new Set();
  const seenPrevWeekPhones = new Set();
  let unique3LThisWeek = 0;
  let unique3LPrevWeek = 0;
  let overlapWithOtherBrandsThisWeek = 0;
  let totalCsLeadsThisWeek = 0;
  let paidThisWeek = 0;
  let newLaneLeadsThisWeek = 0;

  const shippedPathSet = new Set(shippedPaths);

  csSnap.forEach((docSnap) => {
    const data = docSnap.data();
    const tsMs = getDocTimestampMs(data) || 0;
    const phone = normalizePhone(data.number || data.phone);
    const brand = deriveBrandFromUrl(data.submissionUrl, 'CredSettle');
    if (brand !== 'CredSettle') return;

    const isPaid = data.payment === 'paid' || data.paymentStatus === 'paid';
    const { qualifies } = parseDebtFloorQualification(data);

    let urlPath = '';
    if (data.submissionUrl) {
      try {
        urlPath = new URL(data.submissionUrl).pathname.replace(/\/+$/, '') || '/';
      } catch {
        urlPath = String(data.submissionUrl);
      }
    }

    if (tsMs >= thisWeekStartMs) {
      totalCsLeadsThisWeek++;
      if (isPaid) paidThisWeek++;
      if (shippedPathSet.has(urlPath)) newLaneLeadsThisWeek++;

      if (qualifies && phone && !seenThisWeekPhones.has(phone)) {
        seenThisWeekPhones.add(phone);
        const priorOther = otherBrandEarliestByPhone.get(phone);
        if (priorOther && priorOther.tsMs <= tsMs) {
          overlapWithOtherBrandsThisWeek++;
        } else {
          unique3LThisWeek++;
        }
      }
    } else if (tsMs >= prevWeekStartMs && tsMs < thisWeekStartMs) {
      if (qualifies && phone && !seenPrevWeekPhones.has(phone)) {
        seenPrevWeekPhones.add(phone);
        const priorOther = otherBrandEarliestByPhone.get(phone);
        if (!priorOther || priorOther.tsMs > tsMs) {
          unique3LPrevWeek++;
        }
      }
    }
  });

  // Also count any leads marked paid this week via paymentUpdatedAt even if created earlier
  const paidUpdatedIso = new Date(thisWeekStartMs).toISOString();
  try {
    const paidSnap = await csDb.collection('Form').where('payment', '==', 'paid').get();
    let paidTotalAllTime = 0;
    let paidUpdatedRecently = 0;
    paidSnap.forEach((d) => {
      paidTotalAllTime++;
      const data = d.data();
      if (data.paymentUpdatedAt && data.paymentUpdatedAt >= paidUpdatedIso) {
        paidUpdatedRecently++;
      }
    });
    if (paidUpdatedRecently > paidThisWeek) {
      paidThisWeek = paidUpdatedRecently;
    }
    var allTimePaidCount = paidTotalAllTime;
  } catch {
    var allTimePaidCount = paidThisWeek;
  }

  // 4. GSC Clicks on New-Lane URLs & AMA Top-10 Query Overlap
  // GSC has a ~2-3 day lag, so use [today - (days + 3)d, today - 3d]
  const gscEndObj = new Date(nowMs - 3 * 24 * 60 * 60 * 1000);
  const gscStartObj = new Date(gscEndObj.getTime() - (args.days - 1) * 24 * 60 * 60 * 1000);
  const gscStart = gscStartObj.toISOString().slice(0, 10);
  const gscEnd = gscEndObj.toISOString().slice(0, 10);

  let nonAmaTop10Clicks = 0;
  let amaTop10Clicks = 0;
  let totalNewPageClicks = 0;
  let indexedNewPages = 0;

  try {
    const csGscToken = await getGoogleAccessToken(
      csEnv.FIREBASE_CLIENT_EMAIL,
      csPrivateKey,
      'https://www.googleapis.com/auth/webmasters.readonly'
    );

    const amaTop10Queries = new Set();
    if (amaEnv.FIREBASE_ADMIN_CLIENT_EMAIL && amaEnv.FIREBASE_ADMIN_PRIVATE_KEY) {
      try {
        const amaGscToken = await getGoogleAccessToken(
          amaEnv.FIREBASE_ADMIN_CLIENT_EMAIL,
          normalizePrivateKey(amaEnv.FIREBASE_ADMIN_PRIVATE_KEY),
          'https://www.googleapis.com/auth/webmasters.readonly'
        );
        const amaGscRes = await queryGsc(amaGscToken, 'sc-domain:amalegalsolutions.com', {
          startDate: gscStart,
          endDate: gscEnd,
          dimensions: ['query'],
          rowLimit: 25000,
        });
        for (const r of amaGscRes.rows || []) {
          if (r.position <= 10) {
            amaTop10Queries.add(r.keys[0].toLowerCase().trim());
          }
        }
      } catch (err) {
        console.warn('Note: Could not query AMA GSC top-10 queries:', err.message);
      }
    }

    if (shippedPaths.length > 0) {
      const csPageQueryRes = await queryGsc(csGscToken, 'sc-domain:credsettle.com', {
        startDate: gscStart,
        endDate: gscEnd,
        dimensions: ['page', 'query'],
        rowLimit: 25000,
      });

      const pagesWithImpressions = new Set();
      for (const r of csPageQueryRes.rows || []) {
        let p = '';
        try {
          p = new URL(r.keys[0]).pathname.replace(/\/+$/, '') || '/';
        } catch {
          p = r.keys[0];
        }
        if (!shippedPathSet.has(p)) continue;
        if (r.impressions > 0) pagesWithImpressions.add(p);
        totalNewPageClicks += r.clicks;
        const q = (r.keys[1] || '').toLowerCase().trim();
        if (amaTop10Queries.has(q)) {
          amaTop10Clicks += r.clicks;
        } else {
          nonAmaTop10Clicks += r.clicks;
        }
      }
      indexedNewPages = pagesWithImpressions.size;
    }
  } catch (err) {
    console.warn('Warning: GSC query error:', err.message);
  }

  const overlapPct =
    totalNewPageClicks > 0 ? Number(((amaTop10Clicks / totalNewPageClicks) * 100).toFixed(1)) : 0;
  const weekOfStr = new Date(thisWeekStartMs).toISOString().slice(0, 10);
  const deltaSign = unique3LThisWeek - unique3LPrevWeek >= 0 ? '+' : '';

  console.log(`Week of ${weekOfStr} (${args.days}d) | CredSettle`);
  console.log(`New pages shipped: ${shippedPaths.length}      With GSC impressions (${gscStart}..${gscEnd}): ${indexedNewPages}/${shippedPaths.length}`);
  console.log(`(a) Unique ₹3L+ leads not in CRM from other brands: ${unique3LThisWeek} (${deltaSign}${unique3LThisWeek - unique3LPrevWeek} vs prior ${args.days}d: ${unique3LPrevWeek}; cross-brand dupes excluded: ${overlapWithOtherBrandsThisWeek}; total CS form leads: ${totalCsLeadsThisWeek}; from new-lane URLs: ${newLaneLeadsThisWeek})`);
  console.log(`(b) Clicks on new pages from non-AMA-top-10 queries: ${nonAmaTop10Clicks} (total new-page clicks: ${totalNewPageClicks})`);
  console.log(`(c) Converted clients (payment=='paid'): ${paidThisWeek} this window (${allTimePaidCount} all-time paid in Form)`);
  console.log(`Overlap check: ${overlapPct}% of new-page clicks from queries where AMA is top-10 (target < 20%)`);
  console.log(`Cross-brand dedup sources: ${crossBrandSources.join(' | ')}`);

  if (args.json) {
    console.log(
      JSON.stringify(
        {
          weekOf: weekOfStr,
          days: args.days,
          gscWindow: { start: gscStart, end: gscEnd },
          shippedNewPagesCount: shippedPaths.length,
          shippedNewPages: shippedPaths,
          pagesWithImpressions: indexedNewPages,
          kpiA_unique3LPlusLeads: unique3LThisWeek,
          kpiA_prevWindow: unique3LPrevWeek,
          kpiA_crossBrandDuplicatesExcluded: overlapWithOtherBrandsThisWeek,
          kpiB_nonAmaTop10Clicks: nonAmaTop10Clicks,
          kpiB_totalNewPageClicks: totalNewPageClicks,
          kpiB_amaTop10OverlapPct: overlapPct,
          kpiC_paidThisWindow: paidThisWeek,
          kpiC_paidAllTime: allTimePaidCount,
          crossBrandSources,
        },
        null,
        2
      )
    );
  }

  process.exit(0);
}

main().catch((err) => {
  console.error('Fatal error in weekly_lane_report.js:', err);
  process.exit(1);
});
