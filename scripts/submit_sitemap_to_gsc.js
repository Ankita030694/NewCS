const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// 1. Parse .env in credsettle root
const envPath = path.resolve(__dirname, '..', '.env');
if (!fs.existsSync(envPath)) {
  console.error('❌ .env file not found at', envPath);
  process.exit(1);
}

const envVars = {};
fs.readFileSync(envPath, 'utf8').split('\n').forEach(line => {
  const match = line.match(/^([^#=]+)=(.*)$/);
  if (match) {
    let key = match[1].trim();
    let val = match[2].trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    envVars[key] = val.replace(/\\n/g, '\n');
  }
});

const clientEmail = envVars.FIREBASE_CLIENT_EMAIL || envVars.SEARCH_CONSOLE_CLIENT_EMAIL;
let privateKey = envVars.FIREBASE_SERVICE_ACCOUNT || envVars.SEARCH_CONSOLE_PRIVATE_KEY;

if (!clientEmail || !privateKey) {
  console.error('❌ Missing FIREBASE_CLIENT_EMAIL or FIREBASE_SERVICE_ACCOUNT in .env');
  process.exit(1);
}
privateKey = privateKey.replace(/"/g, '').replace(/\\n/g, '\n');

function base64url(input) {
  return Buffer.from(input)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

async function getAccessToken() {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const payload = {
    iss: clientEmail,
    scope: 'https://www.googleapis.com/auth/webmasters',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600
  };

  const unsignedJwt = `${base64url(JSON.stringify(header))}.${base64url(JSON.stringify(payload))}`;
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(unsignedJwt);
  const signature = signer
    .sign(privateKey, 'base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  const assertion = `${unsignedJwt}.${signature}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion
    })
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`OAuth token exchange failed (${res.status}): ${errText}`);
  }
  const data = await res.json();
  return data.access_token;
}

async function submitCredSettleSitemaps() {
  try {
    const token = await getAccessToken();
    const siteUrl = 'sc-domain:credsettle.com';
    const canonicalSitemap = 'https://www.credsettle.com/sitemap.xml';
    const nonWwwDuplicate = 'https://credsettle.com/sitemap.xml';

    console.log(`📡 Submitting canonical www sitemap to Google Search Console for property: "${siteUrl}"...`);

    const putEndpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(canonicalSitemap)}`;
    const putRes = await fetch(putEndpoint, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Length': '0'
      }
    });

    if (putRes.ok || putRes.status === 204) {
      console.log(`✅ Successfully submitted: ${canonicalSitemap} (HTTP ${putRes.status})`);
    } else {
      const errBody = await putRes.text();
      console.error(`❌ Failed to submit ${canonicalSitemap} (HTTP ${putRes.status}):`, errBody);
    }

    // Remove legacy non-www duplicate sitemap if present (Mistake 37)
    const listCheckRes = await fetch(
      `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (listCheckRes.ok) {
      const checkData = await listCheckRes.json();
      const hasNonWww = (checkData.sitemap || []).some(sm => sm.path === nonWwwDuplicate);
      if (hasNonWww) {
        const delEndpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(nonWwwDuplicate)}`;
        const delRes = await fetch(delEndpoint, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` }
        });
        if (delRes.ok || delRes.status === 204) {
          console.log(`🧹 Removed legacy non-www duplicate sitemap: ${nonWwwDuplicate} (HTTP ${delRes.status})`);
        } else {
          console.warn(`⚠️ Could not delete ${nonWwwDuplicate} (HTTP ${delRes.status})`);
        }
      }
    }

    const listEndpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps`;
    const listRes = await fetch(listEndpoint, {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (listRes.ok) {
      const listData = await listRes.json();
      if (listData.sitemap) {
        console.log('\n📊 Current Sitemap Status in Google Search Console (sc-domain:credsettle.com):');
        listData.sitemap.forEach(sm => {
          console.log(`  - ${sm.path}`);
          console.log(`    Last Submitted: ${sm.lastSubmitted || 'N/A'} | Last Downloaded: ${sm.lastDownloaded || 'N/A'} | Pending: ${sm.isPending} | Errors: ${sm.errors} | Warnings: ${sm.warnings}`);
          if (Array.isArray(sm.contents)) {
            sm.contents.forEach(c => {
              console.log(`    Content [${c.type}]: submitted=${c.submitted}, indexed=${c.indexed ?? 'N/A'}`);
            });
          }
        });
      }
    }
  } catch (error) {
    console.error('❌ Error initializing Search Console API:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  submitCredSettleSitemaps();
}

module.exports = { submitCredSettleSitemaps };
