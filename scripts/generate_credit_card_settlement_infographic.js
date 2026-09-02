const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const width = 1920;
const height = 1080;

const stages = [
  {
    num: '01',
    name: 'Forensic Audit',
    color: '#06b6d4',
    bgGrad: 'rgba(6, 182, 212, 0.12)',
    border: 'rgba(6, 182, 212, 0.4)',
    sub: 'STATEMENT &amp; APR AUDIT',
    points: ['Card statement analysis', 'Finance charge recalculation', 'Penal fee &amp; GST isolation', 'True principal extraction'],
    badge: 'STAGE 1: AUDIT'
  },
  {
    num: '02',
    name: 'Hardship Dossier',
    color: '#3b82f6',
    bgGrad: 'rgba(59, 130, 246, 0.12)',
    border: 'rgba(59, 130, 246, 0.4)',
    sub: 'INSOLVENCY EVIDENCE',
    points: ['Job loss / income loss proof', 'Medical emergency records', 'Bank account statement audit', 'Bona fide hardship memo'],
    badge: 'STAGE 2: DOSSIER'
  },
  {
    num: '03',
    name: 'Retention Desk',
    color: '#8b5cf6',
    bgGrad: 'rgba(139, 92, 246, 0.12)',
    border: 'rgba(139, 92, 246, 0.4)',
    sub: 'CREDIT COMMITTEE FILING',
    points: ['Direct nodal officer filing', 'Stop recovery harassment', 'RBI Fair Practices invocation', 'Bypass aggressive agencies'],
    badge: 'STAGE 3: FILING'
  },
  {
    num: '04',
    name: 'OTS Negotiation',
    color: '#f59e0b',
    bgGrad: 'rgba(245, 158, 11, 0.12)',
    border: 'rgba(245, 158, 11, 0.4)',
    sub: '50%-75% WAIVER MATH',
    points: ['100% penal charges waiver', '50% to 75% interest cut', 'Single or tranche payment', 'Principal settlement terms'],
    badge: 'STAGE 4: NEGOTIATION'
  },
  {
    num: '05',
    name: 'Sanction Vetting',
    color: '#10b981',
    bgGrad: 'rgba(16, 185, 129, 0.12)',
    border: 'rgba(16, 185, 129, 0.4)',
    sub: 'LEGAL TERMS AUDIT',
    points: ['Issuer letter authenticity', 'Zero future liability clause', 'Cheque return confirmation', 'Payment deadline validation'],
    badge: 'STAGE 5: VETTING'
  },
  {
    num: '06',
    name: 'NDC &amp; Closure',
    color: '#14b8a6',
    bgGrad: 'rgba(20, 184, 166, 0.12)',
    border: 'rgba(20, 184, 166, 0.4)',
    sub: 'DISCHARGE &amp; CIBIL',
    points: ['Direct bank card payment', 'Official No Dues Certificate', 'Credit bureau reporting', 'CIBIL Settled / Closed path'],
    badge: 'STAGE 6: CLOSURE'
  }
];

const cardWidth = 265;
const cardHeight = 490;
const startX = 110;
const gapX = 35;
const cardY = 380;

const cardsSvg = stages.map((st, i) => {
  const x = startX + i * (cardWidth + gapX);
  
  // Arrow connector
  const arrowSvg = i < 5 ? `
    <g transform="translate(${x + cardWidth + 7}, ${cardY + 230})">
      <circle cx="10" cy="10" r="14" fill="#0f2148" stroke="${stages[i+1].color}" stroke-width="1.5" />
      <path d="M7 6 L13 10 L7 14" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
    </g>
  ` : '';

  const pointsSvg = st.points.map((pt, idx) => `
    <g transform="translate(0, ${idx * 46})">
      <circle cx="26" cy="7" r="4.5" fill="${st.color}" opacity="0.9" />
      <text x="42" y="11" fill="#e2e8f0" font-size="14.5" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="500">${pt}</text>
    </g>
  `).join('');

  return `
    <!-- Card ${i + 1} -->
    <g>
      <!-- Drop Shadow & Card Background -->
      <rect x="${x}" y="${cardY}" width="${cardWidth}" height="${cardHeight}" rx="20" fill="url(#cardGrad)" stroke="${st.border}" stroke-width="1.8" />
      
      <!-- Top Color Accent Bar -->
      <path d="M ${x + 20} ${cardY} L ${x + cardWidth - 20} ${cardY}" stroke="${st.color}" stroke-width="3.5" stroke-linecap="round" />

      <!-- Step Number Badge -->
      <g transform="translate(${x + 20}, ${cardY + 24})">
        <rect width="48" height="48" rx="14" fill="${st.color}" fill-opacity="0.18" stroke="${st.color}" stroke-width="1.5" />
        <text x="24" y="31" text-anchor="middle" fill="${st.color}" font-size="20" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800">${st.num}</text>
      </g>

      <!-- Stage Subtitle & Name -->
      <text x="${x + 80}" y="${cardY + 44}" fill="${st.color}" font-size="11" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" letter-spacing="1.2">${st.sub}</text>
      <text x="${x + 80}" y="${cardY + 66}" fill="#ffffff" font-size="17" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700">${st.name}</text>

      <!-- Divider line -->
      <line x1="${x + 20}" y1="${cardY + 92}" x2="${x + cardWidth - 20}" y2="${cardY + 92}" stroke="rgba(255,255,255,0.08)" stroke-width="1" />

      <!-- Points List -->
      <g transform="translate(${x}, ${cardY + 120})">
        ${pointsSvg}
      </g>

      <!-- Bottom Pill Badge -->
      <g transform="translate(${x + 20}, ${cardY + cardHeight - 60})">
        <rect width="${cardWidth - 40}" height="38" rx="10" fill="${st.color}" fill-opacity="0.15" stroke="${st.color}" stroke-width="1.2" />
        <text x="${(cardWidth - 40) / 2}" y="24" text-anchor="middle" fill="${st.color}" font-size="12" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" letter-spacing="0.8">${st.badge}</text>
      </g>
    </g>
    ${arrowSvg}
  `;
}).join('');

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050b18" />
      <stop offset="40%" stop-color="#0a1836" />
      <stop offset="80%" stop-color="#0e234e" />
      <stop offset="100%" stop-color="#060c1c" />
    </linearGradient>

    <!-- Radial Glow in Center -->
    <radialGradient id="centerGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#1d4ed8" stop-opacity="0.35" />
      <stop offset="60%" stop-color="#1e3a8a" stop-opacity="0.08" />
      <stop offset="100%" stop-color="#050b18" stop-opacity="0" />
    </radialGradient>

    <!-- Card Background Gradient (Glassmorphism look) -->
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#132448" stop-opacity="0.85" />
      <stop offset="100%" stop-color="#0b1730" stop-opacity="0.95" />
    </linearGradient>

    <!-- Top Badge Gradient -->
    <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1886ff" />
      <stop offset="100%" stop-color="#0056cc" />
    </linearGradient>

    <!-- Header Underline Gradient -->
    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1886ff" stop-opacity="0" />
      <stop offset="30%" stop-color="#06b6d4" stop-opacity="0.9" />
      <stop offset="70%" stop-color="#3b82f6" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#1886ff" stop-opacity="0" />
    </linearGradient>
  </defs>

  <!-- Base Background -->
  <rect width="${width}" height="${height}" fill="url(#bgGrad)" />
  <rect width="${width}" height="${height}" fill="url(#centerGlow)" />

  <!-- Subtle Modern Tech Grid -->
  <g opacity="0.07">
    <path d="M 0 100 L ${width} 100 M 0 200 L ${width} 200 M 0 300 L ${width} 300 M 0 400 L ${width} 400 M 0 500 L ${width} 500 M 0 600 L ${width} 600 M 0 700 L ${width} 700 M 0 800 L ${width} 800 M 0 900 L ${width} 900 M 0 1000 L ${width} 1000" stroke="#ffffff" stroke-width="1" stroke-dasharray="6,6" />
    <path d="M 160 0 L 160 ${height} M 320 0 L 320 ${height} M 480 0 L 480 ${height} M 640 0 L 640 ${height} M 800 0 L 800 ${height} M 960 0 L 960 ${height} M 1120 0 L 1120 ${height} M 1280 0 L 1280 ${height} M 1440 0 L 1440 ${height} M 1600 0 L 1600 ${height} M 1760 0 L 1760 ${height}" stroke="#ffffff" stroke-width="1" stroke-dasharray="6,6" />
  </g>

  <!-- Open Corner Decorative L-Brackets -->
  <g stroke="#1886ff" stroke-width="3.5" fill="none" opacity="0.85">
    <path d="M 55 95 L 55 55 L 95 55" />
    <path d="M ${width - 95} 55 L ${width - 55} 55 L ${width - 55} 95" />
    <path d="M 55 ${height - 95} L 55 ${height - 55} L 95 ${height - 55}" />
    <path d="M ${width - 95} ${height - 55} L ${width - 55} ${height - 55} L ${width - 55} ${height - 95}" />
  </g>

  <!-- ================= TOP HEADER ================= -->
  <!-- Brand Pill + Framework Tag -->
  <g transform="translate(110, 65)">
    <rect width="135" height="34" rx="8" fill="url(#brandGrad)" />
    <text x="67" y="23" text-anchor="middle" fill="#ffffff" font-size="14" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" letter-spacing="1">CREDSETTLE</text>

    <text x="155" y="23" fill="#93c5fd" font-size="13" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" letter-spacing="1.5">LEGAL &amp; COMMERCIAL CREDIT CARD DEBT RESOLUTION FRAMEWORK</text>
  </g>

  <!-- Main H1 Title -->
  <text x="110" y="160" fill="#ffffff" font-size="44" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" letter-spacing="-0.5">CREDIT CARD SETTLEMENT PROCESS IN INDIA</text>

  <!-- Subtitle -->
  <text x="110" y="202" fill="#94a3b8" font-size="20" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="500">6-Stage Legal Blueprint: Halting Penal Escalation, Negotiating 50%-75% Waivers &amp; Securing Authentic NDCs</text>

  <!-- Header Accent Line -->
  <line x1="110" y1="228" x2="1810" y2="228" stroke="url(#lineGrad)" stroke-width="2" />

  <!-- ================= KEY HIGHLIGHT VALUE STRIP ================= -->
  <g transform="translate(110, 255)">
    <!-- Pill 1: Interest & Penal Waiver -->
    <g transform="translate(0, 0)">
      <rect width="395" height="60" rx="14" fill="#0f2348" stroke="#3b82f6" stroke-width="1.2" />
      <circle cx="32" cy="30" r="14" fill="#1886ff" fill-opacity="0.2" />
      <text x="32" y="35" text-anchor="middle" fill="#38bdf8" font-size="16" font-weight="900">✓</text>
      <text x="60" y="26" fill="#94a3b8" font-size="11" font-weight="800" letter-spacing="1">OVERDUE INTEREST WAIVER</text>
      <text x="60" y="47" fill="#ffffff" font-size="17" font-weight="800">50% to 75% Overall Reduction</text>
    </g>

    <!-- Pill 2: Penal Fees & GST -->
    <g transform="translate(435, 0)">
      <rect width="395" height="60" rx="14" fill="#0f2348" stroke="#10b981" stroke-width="1.2" />
      <circle cx="32" cy="30" r="14" fill="#10b981" fill-opacity="0.2" />
      <text x="32" y="35" text-anchor="middle" fill="#34d399" font-size="16" font-weight="900">✓</text>
      <text x="60" y="26" fill="#94a3b8" font-size="11" font-weight="800" letter-spacing="1">LATE PAYMENT CHARGES</text>
      <text x="60" y="47" fill="#34d399" font-size="17" font-weight="800">100% Full Penalty Waiver</text>
    </g>

    <!-- Pill 3: Legal Protection -->
    <g transform="translate(870, 0)">
      <rect width="395" height="60" rx="14" fill="#0f2348" stroke="#8b5cf6" stroke-width="1.2" />
      <circle cx="32" cy="30" r="14" fill="#8b5cf6" fill-opacity="0.2" />
      <text x="32" y="35" text-anchor="middle" fill="#a78bfa" font-size="16" font-weight="900">✓</text>
      <text x="60" y="26" fill="#94a3b8" font-size="11" font-weight="800" letter-spacing="1">RECOVERY AGENT HARASSMENT</text>
      <text x="60" y="47" fill="#ffffff" font-size="17" font-weight="800">Protected under RBI FPC Code</text>
    </g>

    <!-- Pill 4: Official NDC Certificate -->
    <g transform="translate(1305, 0)">
      <rect width="395" height="60" rx="14" fill="#0f2348" stroke="#f59e0b" stroke-width="1.2" />
      <circle cx="32" cy="30" r="14" fill="#f59e0b" fill-opacity="0.2" />
      <text x="32" y="35" text-anchor="middle" fill="#fbbf24" font-size="16" font-weight="900">✓</text>
      <text x="60" y="26" fill="#94a3b8" font-size="11" font-weight="800" letter-spacing="1">LEGAL CLOSURE &amp; NOC</text>
      <text x="60" y="47" fill="#ffffff" font-size="17" font-weight="800">Direct Bank No Dues Certificate</text>
    </g>
  </g>

  <!-- ================= 6 PROCESS CARDS ================= -->
  ${cardsSvg}

  <!-- ================= BOTTOM REGULATORY FOOTER ================= -->
  <g transform="translate(110, 920)">
    <rect width="1700" height="75" rx="18" fill="#0b1730" stroke="rgba(255,255,255,0.12)" stroke-width="1.2" />
    
    <g transform="translate(30, 24)">
      <text x="0" y="18" fill="#60a5fa" font-size="12" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" letter-spacing="1.2">STATUTORY AUTHORITIES &amp; GOVERNING FRAMEWORKS:</text>
      <text x="0" y="38" fill="#cbd5e1" font-size="13.5" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="500">RBI Master Direction on Credit Card Operations 2022 • RBI Fair Practices Code • Banking Ombudsman Scheme 2021 • Section 21 CICRA 2005</text>
    </g>

    <g transform="translate(1480, 24)">
      <rect width="185" height="42" rx="10" fill="#1886ff" fill-opacity="0.2" stroke="#1886ff" stroke-width="1.2" />
      <text x="92" y="26" text-anchor="middle" fill="#ffffff" font-size="14" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" letter-spacing="0.5">credsettle.com</text>
    </g>
  </g>

</svg>
`;

const outputPath = path.join(__dirname, '../public/images/infographics/credit-card-settlement-process.jpg');

sharp(Buffer.from(svg))
  .jpeg({ quality: 95, chromaSubsampling: '4:4:4' })
  .toFile(outputPath)
  .then(() => {
    console.log('Credit card settlement infographic generated successfully at:', outputPath);
  })
  .catch(err => {
    console.error('Error generating image:', err);
  });
