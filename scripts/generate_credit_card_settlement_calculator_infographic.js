const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const width = 1920;
const height = 1080;

const stages = [
  {
    num: '01',
    name: 'Principal Audit',
    sub: 'UNBUNDLING 42% APR',
    color: '#06b6d4',
    bg: '#081c36',
    border: '#0ea5e9',
    points: [
      'Isolate core swipe principal',
      'Unmask 42%-48% APR finance drag',
      'Audit 18% GST on penal charges',
      'Strip compounding late penalties'
    ],
    badge: 'STAGE 1: AUDIT'
  },
  {
    num: '02',
    name: 'NPA Valuation',
    sub: 'PROVISIONING DYNAMICS',
    color: '#3b82f6',
    bg: '#081c36',
    border: '#3b82f6',
    points: [
      'Track 90-180+ DPD aging cycle',
      'Evaluate 100% bank provisioning',
      'Unsecured zero-SARFAESI status',
      'Estimate commercial OTS leverage'
    ],
    badge: 'STAGE 2: VALUATION'
  },
  {
    num: '03',
    name: 'Hardship Dossier',
    sub: 'INSOLVENCY EVIDENCE',
    color: '#8b5cf6',
    bg: '#081c36',
    border: '#8b5cf6',
    points: [
      'Document income disruption',
      'Medical &amp; business loss proofs',
      'Bank statement cashflow audit',
      'Bona fide distress presentation'
    ],
    badge: 'STAGE 3: HARDSHIP'
  },
  {
    num: '04',
    name: 'OTS Negotiation',
    sub: 'PRINCIPAL HAIRCUT',
    color: '#f59e0b',
    bg: '#081c36',
    border: '#f59e0b',
    points: [
      'Target 45%-65% total reduction',
      '100% waiver of penal interest',
      'Lump-sum vs installment math',
      'Credit committee approval'
    ],
    badge: 'STAGE 4: OTS MATH'
  },
  {
    num: '05',
    name: 'Sanction Vetting',
    sub: 'LEGAL COVENANT CHECK',
    color: '#10b981',
    bg: '#081c36',
    border: '#10b981',
    points: [
      'Bank letterhead authenticity',
      'Zero residual liability clause',
      'ARC assignment block covenant',
      'Defined tranche payment dates'
    ],
    badge: 'STAGE 5: VETTING'
  },
  {
    num: '06',
    name: 'Closure &amp; NDC',
    sub: 'DEBT DISCHARGE &amp; CIBIL',
    color: '#14b8a6',
    bg: '#081c36',
    border: '#14b8a6',
    points: [
      'Direct branch account deposit',
      'Formal No Dues Certificate',
      'Permanent card cancellation',
      'Section 21 CICRA reporting'
    ],
    badge: 'STAGE 6: CLOSURE'
  }
];

const cardWidth = 270;
const cardHeight = 445;
const startX = 85;
const gapX = 30;
const cardY = 475;

const cardsSvg = stages.map((st, i) => {
  const x = startX + i * (cardWidth + gapX);
  
  const arrowSvg = i < 5 ? `
    <g transform="translate(${x + cardWidth + 5}, ${cardY + 205})">
      <circle cx="10" cy="10" r="13" fill="#0c1d3c" stroke="${stages[i+1].color}" stroke-width="1.5" />
      <path d="M7 6 L13 10 L7 14" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
    </g>
  ` : '';

  const pointsSvg = st.points.map((pt, idx) => `
    <g transform="translate(0, ${idx * 44})">
      <circle cx="24" cy="7" r="4.5" fill="${st.color}" opacity="0.95" />
      <text x="38" y="12" fill="#e2e8f0" font-size="14" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="500">${pt}</text>
    </g>
  `).join('');

  return `
    <!-- Card ${i + 1} -->
    <g>
      <rect x="${x}" y="${cardY}" width="${cardWidth}" height="${cardHeight}" rx="18" fill="url(#cardGrad)" stroke="${st.border}" stroke-width="1.8" />
      <path d="M ${x + 18} ${cardY} L ${x + cardWidth - 18} ${cardY}" stroke="${st.color}" stroke-width="4" stroke-linecap="round" />

      <!-- Number Badge -->
      <g transform="translate(${x + 18}, ${cardY + 20})">
        <rect width="44" height="44" rx="12" fill="${st.color}" fill-opacity="0.2" stroke="${st.color}" stroke-width="1.5" />
        <text x="22" y="28" text-anchor="middle" fill="${st.color}" font-size="18" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900">${st.num}</text>
      </g>

      <!-- Card Title & Subtitle -->
      <text x="${x + 72}" y="${cardY + 38}" fill="${st.color}" font-size="10.5" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" letter-spacing="1">${st.sub}</text>
      <text x="${x + 72}" y="${cardY + 58}" fill="#ffffff" font-size="16" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700">${st.name}</text>

      <line x1="${x + 18}" y1="${cardY + 78}" x2="${x + cardWidth - 18}" y2="${cardY + 78}" stroke="rgba(255,255,255,0.1)" stroke-width="1" />

      <g transform="translate(${x}, ${cardY + 104})">
        ${pointsSvg}
      </g>

      <g transform="translate(${x + 16}, ${cardY + cardHeight - 54})">
        <rect width="${cardWidth - 32}" height="36" rx="10" fill="${st.color}" fill-opacity="0.16" stroke="${st.color}" stroke-width="1.2" />
        <text x="${(cardWidth - 32) / 2}" y="23" text-anchor="middle" fill="${st.color}" font-size="11.5" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" letter-spacing="0.6">${st.badge}</text>
      </g>
    </g>
    ${arrowSvg}
  `;
}).join('');

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#040915" />
      <stop offset="35%" stop-color="#08152e" />
      <stop offset="70%" stop-color="#0d214a" />
      <stop offset="100%" stop-color="#040817" />
    </linearGradient>

    <radialGradient id="centerGlow" cx="50%" cy="25%" r="65%">
      <stop offset="0%" stop-color="#1e40af" stop-opacity="0.4" />
      <stop offset="50%" stop-color="#1e3a8a" stop-opacity="0.1" />
      <stop offset="100%" stop-color="#040915" stop-opacity="0" />
    </radialGradient>

    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#102244" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#08152c" stop-opacity="0.98" />
    </linearGradient>

    <linearGradient id="trapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3b1116" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#1e0b10" stop-opacity="0.9" />
    </linearGradient>

    <linearGradient id="solutionGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#063228" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#08201a" stop-opacity="0.9" />
    </linearGradient>

    <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1886ff" />
      <stop offset="100%" stop-color="#0056cc" />
    </linearGradient>

    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1886ff" stop-opacity="0" />
      <stop offset="30%" stop-color="#06b6d4" stop-opacity="0.9" />
      <stop offset="70%" stop-color="#3b82f6" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#1886ff" stop-opacity="0" />
    </linearGradient>
  </defs>

  <!-- Base Canvas Background -->
  <rect width="${width}" height="${height}" fill="url(#bgGrad)" />
  <rect width="${width}" height="${height}" fill="url(#centerGlow)" />

  <!-- Subtle Blueprint Grid -->
  <g opacity="0.06">
    <path d="M 0 80 L ${width} 80 M 0 160 L ${width} 160 M 0 240 L ${width} 240 M 0 320 L ${width} 320 M 0 400 L ${width} 400 M 0 480 L ${width} 480 M 0 560 L ${width} 560 M 0 640 L ${width} 640 M 0 720 L ${width} 720 M 0 800 L ${width} 800 M 0 880 L ${width} 880 M 0 960 L ${width} 960 M 0 1040 L ${width} 1040" stroke="#ffffff" stroke-width="1" stroke-dasharray="4,4" />
    <path d="M 120 0 L 120 ${height} M 240 0 L 240 ${height} M 360 0 L 360 ${height} M 480 0 L 480 ${height} M 600 0 L 600 ${height} M 720 0 L 720 ${height} M 840 0 L 840 ${height} M 960 0 L 960 ${height} M 1080 0 L 1080 ${height} M 1200 0 L 1200 ${height} M 1320 0 L 1320 ${height} M 1440 0 L 1440 ${height} M 1560 0 L 1560 ${height} M 1680 0 L 1680 ${height} M 1800 0 L 1800 ${height}" stroke="#ffffff" stroke-width="1" stroke-dasharray="4,4" />
  </g>

  <!-- Corner Decorative L-Brackets -->
  <g stroke="#1886ff" stroke-width="3" fill="none" opacity="0.85">
    <path d="M 45 85 L 45 45 L 85 45" />
    <path d="M ${width - 85} 45 L ${width - 45} 45 L ${width - 45} 85" />
    <path d="M 45 ${height - 85} L 45 ${height - 45} L 85 ${height - 45}" />
    <path d="M ${width - 85} ${height - 45} L ${width - 45} ${height - 45} L ${width - 45} ${height - 85}" />
  </g>

  <!-- ================= TOP HEADER ================= -->
  <g transform="translate(85, 52)">
    <!-- Brand Pill -->
    <rect width="130" height="32" rx="8" fill="url(#brandGrad)" />
    <text x="65" y="21" text-anchor="middle" fill="#ffffff" font-size="13.5" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" letter-spacing="1">CREDSETTLE</text>

    <text x="148" y="22" fill="#93c5fd" font-size="12.5" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" letter-spacing="1.5">CREDIT CARD SETTLEMENT CALCULATOR &amp; FINANCIAL WAIVER MODEL</text>
  </g>

  <text x="85" y="132" fill="#ffffff" font-size="38" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" letter-spacing="-0.5">CREDIT CARD SETTLEMENT ESTIMATION &amp; WAIVER ARCHITECTURE</text>
  <text x="85" y="168" fill="#94a3b8" font-size="17" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="500">Unmasking 42%-48% APR Compounding Traps vs. Structured Principal-Only One-Time Settlement (OTS) Payouts</text>

  <line x1="85" y1="190" x2="1835" y2="190" stroke="url(#lineGrad)" stroke-width="1.8" />

  <!-- ================= DUAL COMPARATIVE CALLOUT BOXES (TRAP VS SETTLEMENT) ================= -->
  <g transform="translate(85, 212)">
    
    <!-- LEFT BOX: Compounding Penalty Growth -->
    <g transform="translate(0, 0)">
      <rect width="860" height="120" rx="16" fill="url(#trapGrad)" stroke="#ef4444" stroke-width="1.4" />
      <rect x="18" y="16" width="140" height="26" rx="6" fill="#ef4444" fill-opacity="0.25" stroke="#ef4444" stroke-width="1" />
      <text x="88" y="33" text-anchor="middle" fill="#fca5a5" font-size="11" font-weight="800" letter-spacing="0.8">INFLATED DUES TRAP</text>
      
      <text x="170" y="34" fill="#ffffff" font-size="15" font-weight="700">&#8377;5,00,000 Total Card Claim Breakdown</text>
      
      <!-- 3 Metrics -->
      <g transform="translate(20, 56)">
        <text x="0" y="16" fill="#fca5a5" font-size="20" font-weight="900">&#8377;2.60 Lakh</text>
        <text x="0" y="36" fill="#cbd5e1" font-size="12" font-weight="500">Core swipe spend principal (52%)</text>

        <text x="270" y="16" fill="#fca5a5" font-size="20" font-weight="900">&#8377;2.40 Lakh</text>
        <text x="270" y="36" fill="#cbd5e1" font-size="12" font-weight="500">42% APR + GST + late penalties (48%)</text>

        <text x="540" y="16" fill="#ef4444" font-size="20" font-weight="900">42%-48% APR</text>
        <text x="540" y="36" fill="#cbd5e1" font-size="12" font-weight="500">Compounding monthly finance drag</text>
      </g>
    </g>

    <!-- RIGHT BOX: CredSettle Calculated OTS Payout -->
    <g transform="translate(890, 0)">
      <rect width="860" height="120" rx="16" fill="url(#solutionGrad)" stroke="#10b981" stroke-width="1.4" />
      <rect x="18" y="16" width="160" height="26" rx="6" fill="#10b981" fill-opacity="0.25" stroke="#10b981" stroke-width="1" />
      <text x="98" y="33" text-anchor="middle" fill="#6ee7b7" font-size="11" font-weight="800" letter-spacing="0.8">CALCULATED OTS TARGET</text>
      
      <text x="190" y="34" fill="#ffffff" font-size="15" font-weight="700">Negotiated Compromise Settlement Payout</text>

      <!-- 3 Metrics -->
      <g transform="translate(20, 56)">
        <text x="0" y="16" fill="#34d399" font-size="20" font-weight="900">&#8377;1.50L-&#8377;2.00L</text>
        <text x="0" y="36" fill="#cbd5e1" font-size="12" font-weight="500">Projected lump-sum settlement payout</text>

        <text x="280" y="16" fill="#34d399" font-size="20" font-weight="900">60%-70% Waiver</text>
        <text x="280" y="36" fill="#cbd5e1" font-size="12" font-weight="500">Net savings off inflated gross dues</text>

        <text x="540" y="16" fill="#10b981" font-size="20" font-weight="900">100% NDC</text>
        <text x="540" y="36" fill="#cbd5e1" font-size="12" font-weight="500">Permanent legal liability discharge</text>
      </g>
    </g>

  </g>

  <!-- ================= 4 STATUTORY HIGHLIGHT PILLS ================= -->
  <g transform="translate(85, 356)">
    <!-- Pill 1: Mandate Protection -->
    <g transform="translate(0, 0)">
      <rect width="405" height="54" rx="12" fill="#0c1d3c" stroke="#3b82f6" stroke-width="1.2" />
      <circle cx="28" cy="27" r="12" fill="#1886ff" fill-opacity="0.25" />
      <text x="28" y="32" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="900">✓</text>
      <text x="50" y="23" fill="#94a3b8" font-size="10" font-weight="800" letter-spacing="0.8">AUTO-DEBIT NACH MANDATE</text>
      <text x="50" y="42" fill="#ffffff" font-size="15" font-weight="800">Lawful Revocation (RBI Rules)</text>
    </g>

    <!-- Pill 2: Penal Fee Waiver -->
    <g transform="translate(448, 0)">
      <rect width="405" height="54" rx="12" fill="#0c1d3c" stroke="#10b981" stroke-width="1.2" />
      <circle cx="28" cy="27" r="12" fill="#10b981" fill-opacity="0.25" />
      <text x="28" y="32" text-anchor="middle" fill="#34d399" font-size="14" font-weight="900">✓</text>
      <text x="50" y="23" fill="#94a3b8" font-size="10" font-weight="800" letter-spacing="0.8">FINANCE CHARGES &amp; LATE FEES</text>
      <text x="50" y="42" fill="#34d399" font-size="15" font-weight="800">100% Complete Waiver</text>
    </g>

    <!-- Pill 3: Unsecured Protection -->
    <g transform="translate(896, 0)">
      <rect width="405" height="54" rx="12" fill="#0c1d3c" stroke="#8b5cf6" stroke-width="1.2" />
      <circle cx="28" cy="27" r="12" fill="#8b5cf6" fill-opacity="0.25" />
      <text x="28" y="32" text-anchor="middle" fill="#a78bfa" font-size="14" font-weight="900">✓</text>
      <text x="50" y="23" fill="#94a3b8" font-size="10" font-weight="800" letter-spacing="0.8">ASSET &amp; COLLATERAL SHIELD</text>
      <text x="50" y="42" fill="#ffffff" font-size="15" font-weight="800">Zero SARFAESI Attachment Risk</text>
    </g>

    <!-- Pill 4: Anti-Harassment -->
    <g transform="translate(1344, 0)">
      <rect width="406" height="54" rx="12" fill="#0c1d3c" stroke="#f59e0b" stroke-width="1.2" />
      <circle cx="28" cy="27" r="12" fill="#f59e0b" fill-opacity="0.25" />
      <text x="28" y="32" text-anchor="middle" fill="#fbbf24" font-size="14" font-weight="900">✓</text>
      <text x="50" y="23" fill="#94a3b8" font-size="10" font-weight="800" letter-spacing="0.8">RECOVERY HARASSMENT SHIELD</text>
      <text x="50" y="42" fill="#ffffff" font-size="15" font-weight="800">Protected under RBI Fair Code</text>
    </g>
  </g>

  <!-- ================= 6 PROCESS CARDS ================= -->
  ${cardsSvg}

  <!-- ================= BOTTOM REGULATORY FOOTER ================= -->
  <g transform="translate(85, 940)">
    <rect width="1750" height="70" rx="16" fill="#09142b" stroke="rgba(255,255,255,0.12)" stroke-width="1.2" />
    
    <g transform="translate(28, 22)">
      <text x="0" y="16" fill="#60a5fa" font-size="11.5" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" letter-spacing="1.2">STATUTORY AUTHORITIES &amp; REGULATORY FRAMEWORKS:</text>
      <text x="0" y="35" fill="#cbd5e1" font-size="13" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="500">RBI Master Direction on Credit Card Operations 2022 • Section 25 PSSA 2007 • Section 138 NI Act • Section 21 CICRA 2005 • RBI Integrated Ombudsman 2021</text>
    </g>

    <g transform="translate(1530, 16)">
      <rect width="190" height="38" rx="10" fill="#1886ff" fill-opacity="0.2" stroke="#1886ff" stroke-width="1.2" />
      <text x="95" y="24" text-anchor="middle" fill="#ffffff" font-size="14" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" letter-spacing="0.5">credsettle.com</text>
    </g>
  </g>

</svg>
`;

const outputPath = path.join(__dirname, '../public/images/infographics/credit-card-settlement-calculator.jpg');

sharp(Buffer.from(svg))
  .jpeg({ quality: 95, chromaSubsampling: '4:4:4' })
  .toFile(outputPath)
  .then(() => {
    console.log('Credit card settlement calculator 16:9 infographic generated successfully at:', outputPath);
  })
  .catch(err => {
    console.error('Error generating image:', err);
  });
