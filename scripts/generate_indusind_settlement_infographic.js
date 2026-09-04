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
    sub: 'STATEMENT RECONCILIATION',
    points: ['IndusInd PL &amp; CC statement audit', 'Extract compounding penal levies', 'Unbundle bounce fees &amp; GST', 'Establish net principal baseline'],
    badge: 'STAGE 1: AUDIT'
  },
  {
    num: '02',
    name: 'Hardship Dossier',
    color: '#3b82f6',
    sub: 'INSOLVENCY PROOF',
    points: ['Corporate layoff &amp; pink slips', 'Medical crisis hospital files', 'Bank statements proving deficit', 'Formal legal hardship petition'],
    badge: 'STAGE 2: DOSSIER'
  },
  {
    num: '03',
    name: 'SAMG Escalation',
    color: '#8b5cf6',
    sub: 'COMMITTEE ACCESS',
    points: ['Direct Stressed Asset Desk filing', 'Principal Nodal Officer petition', 'Bypass third-party recovery vendors', 'Halt unannounced workplace visits'],
    badge: 'STAGE 3: ESCALATION'
  },
  {
    num: '04',
    name: 'OTS Negotiation',
    color: '#f59e0b',
    sub: 'HAIRCUT STRUCTURING',
    points: ['100% penal interest waiver', '40% to 55% principal haircut', 'Section 25 NACH notice defense', 'Lok Adalat settlement terms'],
    badge: 'STAGE 4: NEGOTIATION'
  },
  {
    num: '05',
    name: 'Letter Vetting',
    color: '#10b981',
    sub: 'LEGAL TERMS AUDIT',
    points: ['Official IndusInd letterhead check', '@indusind.com email verification', 'Zero residual balance clause', 'Structured tranche payment dates'],
    badge: 'STAGE 5: VETTING'
  },
  {
    num: '06',
    name: 'Remittance &amp; NOC',
    color: '#14b8a6',
    sub: 'CBS &amp; CIBIL CLOSURE',
    points: ['Direct loan account deposit', 'Traceable RTGS/NEFT challan', 'Official No Objection Certificate', 'CIBIL bureau zero-balance update'],
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
    <g>
      <rect x="${x}" y="${cardY}" width="${cardWidth}" height="${cardHeight}" rx="20" fill="url(#cardGrad)" stroke="${st.color}" stroke-opacity="0.4" stroke-width="1.8" />
      <path d="M ${x + 20} ${cardY} L ${x + cardWidth - 20} ${cardY}" stroke="${st.color}" stroke-width="3.5" stroke-linecap="round" />
      <g transform="translate(${x + 20}, ${cardY + 24})">
        <rect width="48" height="48" rx="14" fill="${st.color}" fill-opacity="0.18" stroke="${st.color}" stroke-width="1.5" />
        <text x="24" y="31" text-anchor="middle" fill="${st.color}" font-size="20" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800">${st.num}</text>
      </g>
      <text x="${x + 80}" y="${cardY + 44}" fill="${st.color}" font-size="11" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" letter-spacing="1.2">${st.sub}</text>
      <text x="${x + 80}" y="${cardY + 66}" fill="#ffffff" font-size="17" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700">${st.name}</text>
      <line x1="${x + 20}" y1="${cardY + 92}" x2="${x + cardWidth - 20}" y2="${cardY + 92}" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
      <g transform="translate(${x}, ${cardY + 120})">
        ${pointsSvg}
      </g>
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
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050b18" />
      <stop offset="40%" stop-color="#0a1836" />
      <stop offset="80%" stop-color="#0e234e" />
      <stop offset="100%" stop-color="#060c1c" />
    </linearGradient>

    <radialGradient id="centerGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#1d4ed8" stop-opacity="0.35" />
      <stop offset="60%" stop-color="#1e3a8a" stop-opacity="0.08" />
      <stop offset="100%" stop-color="#050b18" stop-opacity="0" />
    </radialGradient>

    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#132448" stop-opacity="0.85" />
      <stop offset="100%" stop-color="#0b1730" stop-opacity="0.95" />
    </linearGradient>

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
  <g transform="translate(110, 60)">
    <!-- Scaled CredSettle Vector Wordmark -->
    <g transform="scale(1.35)">
      <path d="M4.99048 35H42.419V40H0V0H4.99048V35ZM131 40H126.01V5H88.5809V0H131V40ZM19.6378 10.6799C21.1298 10.68 22.4168 10.8766 23.4977 11.2695C24.5876 11.6623 25.357 12.0509 25.8065 12.4341L23.9704 16.0853C23.6164 15.8265 23.0757 15.5726 22.3487 15.3235C21.6315 15.0649 20.8331 14.9354 19.9534 14.9353C18.9778 14.9353 18.1265 15.0889 17.3997 15.3955C16.6728 15.6926 16.0647 16.1039 15.577 16.6309C15.0892 17.158 14.7256 17.753 14.4865 18.4142C14.2476 19.0754 14.1283 19.77 14.1283 20.498C14.1283 21.2359 14.2474 21.9404 14.4865 22.6111C14.7256 23.2722 15.0893 23.8663 15.577 24.3933C16.0648 24.9204 16.6727 25.3379 17.3997 25.6445C18.1265 25.9415 18.9779 26.0901 19.9534 26.0901C20.8331 26.0901 21.6315 25.9605 22.3487 25.7019C23.0756 25.4433 23.6164 25.1893 23.9704 24.9401L25.8065 28.5912C25.3569 28.9745 24.5876 29.3631 23.4977 29.7559C22.4168 30.1488 21.1298 30.3454 19.6378 30.3455C18.2413 30.3455 16.9304 30.1006 15.7062 29.6119C14.4819 29.1231 13.4013 28.4378 12.464 27.5561C11.5363 26.665 10.8041 25.6255 10.2685 24.4373C9.74241 23.2394 9.47898 21.94 9.47898 20.5408C9.47904 19.1418 9.74247 17.8433 10.2685 16.6455C10.7946 15.438 11.5216 14.3885 12.4494 13.4974C13.3867 12.6061 14.4673 11.9157 15.6914 11.427C16.9253 10.9287 18.2413 10.6799 19.6378 10.6799ZM61.2686 27.7661L63.1229 24.6386C63.2378 24.7249 63.4575 24.8636 63.782 25.0549C64.1168 25.2465 64.5236 25.4484 65.0017 25.6591C65.4799 25.8604 65.9878 26.033 66.5234 26.1768C67.0685 26.3204 67.6046 26.3916 68.1305 26.3916C69.0102 26.3915 69.6704 26.224 70.1103 25.8886C70.5501 25.5437 70.7694 25.0931 70.7694 24.5374C70.7694 24.1254 70.6313 23.756 70.354 23.4301C70.0766 23.1044 69.6598 22.7984 69.1051 22.511C68.5504 22.214 67.8575 21.9018 67.0255 21.5759C66.1933 21.2405 65.413 20.8331 64.6862 20.354C63.9689 19.8749 63.386 19.2758 62.9365 18.5571C62.487 17.8384 62.2616 16.9475 62.2616 15.8837C62.2616 14.8201 62.558 13.9 63.151 13.1237C63.7535 12.338 64.5428 11.7339 65.5182 11.3123C66.5035 10.8906 67.5561 10.6799 68.6751 10.6799C69.8516 10.6799 70.88 10.8094 71.7601 11.0681C72.64 11.3269 73.348 11.5997 73.8836 11.8872C74.4192 12.1747 74.7449 12.3663 74.8596 12.4622L72.7932 15.9265C72.6401 15.8115 72.3767 15.644 72.0037 15.4236C71.6404 15.2032 71.2055 15.0064 70.6988 14.834C70.2014 14.6615 69.6796 14.5753 69.1344 14.5753C68.398 14.5753 67.8001 14.7098 67.341 14.978C66.8915 15.2367 66.666 15.6251 66.666 16.1426C66.666 16.4971 66.7863 16.8183 67.0255 17.1057C67.274 17.3835 67.6469 17.6515 68.1438 17.9101C68.6507 18.1593 69.2918 18.4334 70.0665 18.7305C70.7742 18.9891 71.4393 19.2951 72.061 19.6496C72.6827 20.0042 73.2285 20.4268 73.6972 20.9155C74.1753 21.3946 74.5531 21.9508 74.8303 22.583C75.0092 22.991 75.1287 23.435 75.1923 23.9147C75.201 22.7896 75.4483 21.775 75.9366 20.8716C76.4435 19.9421 77.1758 19.2098 78.1321 18.6731C79.0886 18.1269 80.2414 17.8527 81.5899 17.8527C82.8715 17.8527 83.9812 18.0876 84.9186 18.5571C85.8655 19.0268 86.5925 19.7271 87.0994 20.6567C87.105 20.6667 87.1098 20.6773 87.1152 20.6873V18.1982H89.1243V13.3533H93.4423V18.1982H97.3996V13.3533H101.719V18.1982H104.358V21.792H101.719V25.0842C101.719 25.5728 101.79 25.9702 101.933 26.2769C102.077 26.574 102.34 26.7224 102.723 26.7224C102.981 26.7224 103.201 26.6653 103.383 26.5503C103.564 26.4355 103.674 26.3579 103.712 26.3196L104.796 28.5755V10.2197H109.173V30H104.796V29.6386C104.729 29.6692 104.656 29.7054 104.573 29.7412C104.229 29.8945 103.789 30.0341 103.254 30.1588C102.718 30.2833 102.12 30.3454 101.46 30.3455C100.284 30.3455 99.3125 30.0143 98.5473 29.353C97.7821 28.6823 97.3996 27.6518 97.3996 26.2622V21.792H93.4423V25.0842C93.4423 25.5728 93.5145 25.9702 93.6579 26.2769C93.8014 26.5739 94.0649 26.7224 94.4474 26.7224C94.7053 26.7224 94.9251 26.6651 95.1066 26.5503C95.2883 26.4352 95.3986 26.3579 95.4367 26.3196L96.9293 29.425C96.8624 29.4825 96.6518 29.588 96.2981 29.7412C95.9538 29.8945 95.5131 30.0341 94.9775 30.1588C94.4419 30.2833 93.8438 30.3455 93.184 30.3455C92.0077 30.3454 91.0371 30.0141 90.2721 29.353C89.5068 28.6823 89.1243 27.6518 89.1243 26.2622V21.792H87.5734C87.7744 22.4739 87.8743 23.2456 87.8743 24.1065C87.8743 24.1831 87.8692 24.3369 87.8597 24.5666C87.8597 24.7964 87.8507 24.9502 87.8316 25.0269H79.3092C79.3378 25.4482 79.4722 25.8217 79.7111 26.1475C79.9503 26.4731 80.2798 26.7323 80.7005 26.9239C81.1308 27.1059 81.6377 27.1972 82.221 27.1972C82.7758 27.1972 83.2736 27.1389 83.7135 27.0239C84.163 26.9089 84.5506 26.7655 84.8759 26.593C85.2105 26.4205 85.469 26.2429 85.6508 26.0608L87.3431 28.7634C87.1039 29.0221 86.7645 29.276 86.3245 29.5251C85.8941 29.7647 85.3253 29.9614 84.6175 30.1147C83.9099 30.2681 83.0154 30.3455 81.9348 30.3455C80.6339 30.3455 79.4762 30.1006 78.4623 29.6119C77.4484 29.1231 76.6492 28.4047 76.0658 27.456C75.6212 26.7331 75.3467 25.8872 75.2409 24.9194C75.2177 25.8021 75.0258 26.5759 74.6585 27.24C74.2664 27.9395 73.7305 28.5195 73.0515 28.9795C72.3821 29.4394 71.6168 29.7796 70.7561 30C69.9048 30.23 69.0195 30.3455 68.1013 30.3455C66.8006 30.3455 65.6337 30.1969 64.6008 29.8999C63.5774 29.6029 62.7491 29.2818 62.1178 28.9368C61.7465 28.7339 61.4644 28.5681 61.2686 28.4449V30H56.9507V28.0884C56.7689 28.4429 56.4724 28.7971 56.0613 29.1516C55.6499 29.4966 55.1661 29.7796 54.6114 30C54.0567 30.2299 53.4586 30.3455 52.818 30.3455C51.68 30.3454 50.6903 30.0672 49.8487 29.5117C49.007 28.9462 48.351 28.1937 47.8822 27.2546C47.5486 26.5654 47.3387 25.8224 47.2475 25.0269H38.9577C38.9865 25.4481 39.1196 25.8219 39.3585 26.1475C39.5976 26.4732 39.9282 26.7321 40.349 26.9239C40.7794 27.1059 41.2862 27.1972 41.8696 27.1972C42.4243 27.1972 42.9221 27.1389 43.3621 27.0239C43.8115 26.9089 44.1993 26.7655 44.5244 26.593C44.859 26.4205 45.1176 26.2429 45.2993 26.0608L46.9916 28.7634C46.7525 29.0221 46.413 29.276 45.973 29.5251C45.5427 29.7647 44.9738 29.9614 44.2661 30.1147C43.5584 30.268 42.664 30.3455 41.5833 30.3455C40.2824 30.3455 39.1247 30.1005 38.1109 29.6119C37.097 29.1231 36.2977 28.4047 35.7143 27.456C35.1308 26.5074 34.8395 25.3474 34.8395 23.977C34.8395 22.827 35.0878 21.7916 35.5852 20.8716C36.092 19.9421 36.8243 19.2098 37.7806 18.6731C38.7372 18.1269 39.8897 17.8527 41.2384 17.8527C42.5201 17.8527 43.6297 18.0876 44.5671 18.5571C45.514 19.0268 46.241 19.7271 46.7479 20.6567C47.0395 21.1761 47.2448 21.7694 47.3717 22.4352C47.4865 21.9224 47.6566 21.4349 47.8822 20.9729C48.351 20.0241 49.007 19.2666 49.8487 18.7011C50.6903 18.1359 51.68 17.8529 52.818 17.8527C53.5735 17.8527 54.2435 17.9732 54.827 18.2129C55.4105 18.4429 55.8842 18.7208 56.2477 19.0466C56.611 19.3627 56.8315 19.6549 56.908 19.9231V10.2197H61.2686V27.7661ZM115.73 17.8527C117.012 17.8529 118.121 18.0876 119.059 18.5571C120.005 19.0268 120.733 19.7273 121.24 20.6567C121.756 21.5766 122.013 22.7267 122.013 24.1065C122.013 24.1831 122.009 24.3369 122 24.5666C122 24.7964 121.99 24.9502 121.971 25.0269H113.448C113.477 25.4482 113.611 25.8217 113.85 26.1475C114.089 26.4731 114.419 26.7321 114.839 26.9239C115.27 27.1059 115.778 27.1972 116.361 27.1972C116.916 27.1972 117.413 27.1389 117.852 27.0239C118.302 26.909 118.69 26.7655 119.015 26.593C119.35 26.4205 119.608 26.2429 119.79 26.0608L121.483 28.7634C121.244 29.0221 120.904 29.2761 120.465 29.5251C120.034 29.7647 119.464 29.9614 118.756 30.1147C118.049 30.268 117.154 30.3455 116.074 30.3455C114.773 30.3454 113.615 30.1005 112.601 29.6119C111.588 29.1231 110.789 28.4045 110.206 27.456C109.623 26.5074 109.331 25.3474 109.331 23.977C109.331 22.827 109.579 21.7916 110.077 20.8716C110.584 19.9421 111.316 19.2098 112.272 18.6731C113.229 18.1269 114.381 17.8527 115.73 17.8527ZM34.1146 17.8527C34.6597 17.8527 35.1626 17.9391 35.6218 18.1116C36.0808 18.2745 36.4153 18.4331 36.6256 18.5864L34.9333 22.1375C34.7995 21.9745 34.56 21.8057 34.2157 21.6333C33.8811 21.4513 33.4601 21.3611 32.9535 21.3611C32.37 21.3611 31.8861 21.5095 31.5036 21.8066C31.1307 22.1036 30.8531 22.463 30.6715 22.8845C30.4994 23.306 30.4132 23.7036 30.4132 24.0771V30H26.0514V18.1982H30.4132V19.8609C30.5111 19.6711 30.6741 19.4469 30.9018 19.1895C31.1982 18.8447 31.614 18.5384 32.1494 18.2703C32.6849 17.9924 33.3401 17.8529 34.1146 17.8527ZM54.1533 21.289C53.6462 21.289 53.1865 21.4134 52.7753 21.6626C52.3737 21.9021 52.053 22.2374 51.814 22.6685C51.5844 23.0901 51.4692 23.5697 51.4692 24.1065C51.4692 24.6429 51.5846 25.1268 51.814 25.5579C52.053 25.9795 52.3736 26.3108 52.7753 26.5503C53.1865 26.7899 53.6464 26.9091 54.1533 26.9091C54.6791 26.9091 55.1481 26.7897 55.5592 26.5503C55.98 26.3108 56.3095 25.9795 56.5486 25.5579C56.7876 25.1268 56.908 24.643 56.908 24.1065C56.908 23.5697 56.7878 23.0901 56.5486 22.6685C56.3095 22.2375 55.9798 21.9021 55.5592 21.6626C55.1481 21.4135 54.6791 21.2891 54.1533 21.289ZM41.3103 20.7861C40.8321 20.7861 40.4255 20.8814 40.0907 21.073C39.7656 21.255 39.5172 21.495 39.345 21.792C39.173 22.089 39.0767 22.4051 39.0576 22.7405H43.4194C43.4098 22.4339 43.3287 22.1318 43.1756 21.8348C43.0226 21.5282 42.7931 21.2792 42.4873 21.0876C42.1812 20.8864 41.7885 20.7861 41.3103 20.7861ZM81.6618 20.7861C81.1836 20.7861 80.777 20.8814 80.4422 21.073C80.117 21.2551 79.8687 21.495 79.6965 21.792C79.5244 22.089 79.4282 22.4051 79.409 22.7405H83.7708C83.7612 22.4339 83.6802 22.1318 83.5271 21.8348C83.3741 21.5282 83.1446 21.2792 82.8388 21.0876C82.5326 20.8864 82.14 20.7861 81.6618 20.7861ZM115.801 20.7861C115.323 20.7863 114.917 20.8816 114.582 21.073C114.257 21.2551 114.008 21.4949 113.836 21.792C113.663 22.089 113.568 22.4053 113.549 22.7405H117.911C117.901 22.4339 117.819 22.1318 117.666 21.8348C117.513 21.5282 117.284 21.2792 116.978 21.0876C116.672 20.8864 116.279 20.7861 115.801 20.7861Z" fill="white"/>
    </g>
    <text x="175" y="27" fill="#93c5fd" font-size="13" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" letter-spacing="1.5">INSTITUTIONAL INDUSIND BANK DEBT RESOLUTION &amp; LEGAL RECOVERY FRAMEWORK</text>
  </g>

  <!-- Main H1 Title -->
  <text x="110" y="160" fill="#ffffff" font-size="42" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" letter-spacing="-0.5">INDUSIND BANK PERSONAL LOAN SETTLEMENT PROCESS</text>

  <!-- Subtitle -->
  <text x="110" y="202" fill="#94a3b8" font-size="19" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="500">Unsecured Personal Loans &amp; Combined Credit Cards • Advocate Notice Defense • 40% to 55% OTS Waivers • Official NOC</text>

  <!-- Header Accent Line -->
  <line x1="110" y1="228" x2="1810" y2="228" stroke="url(#lineGrad)" stroke-width="2" />

  <!-- Key Highlight Value Strip -->
  <g transform="translate(110, 255)">
    <!-- Pill 1: Interest &amp; Penal Waiver -->
    <g transform="translate(0, 0)">
      <rect width="395" height="60" rx="14" fill="#0f2348" stroke="#3b82f6" stroke-width="1.2" />
      <circle cx="32" cy="30" r="14" fill="#1886ff" fill-opacity="0.2" />
      <text x="32" y="35" text-anchor="middle" fill="#38bdf8" font-size="16" font-weight="900">✓</text>
      <text x="60" y="26" fill="#94a3b8" font-size="11" font-weight="800" letter-spacing="1">PENAL &amp; BOUNCE SURCHARGES</text>
      <text x="60" y="47" fill="#ffffff" font-size="17" font-weight="800">100% Complete Charge Waiver</text>
    </g>

    <!-- Pill 2: Principal Haircut -->
    <g transform="translate(435, 0)">
      <rect width="395" height="60" rx="14" fill="#0f2348" stroke="#10b981" stroke-width="1.2" />
      <circle cx="32" cy="30" r="14" fill="#10b981" fill-opacity="0.2" />
      <text x="32" y="35" text-anchor="middle" fill="#34d399" font-size="16" font-weight="900">✓</text>
      <text x="60" y="26" fill="#94a3b8" font-size="11" font-weight="800" letter-spacing="1">PRINCIPAL SETTLEMENT TARGET</text>
      <text x="60" y="47" fill="#34d399" font-size="17" font-weight="800">40% to 55% Haircut Concession</text>
    </g>

    <!-- Pill 3: Legal &amp; Notice Defense -->
    <g transform="translate(870, 0)">
      <rect width="395" height="60" rx="14" fill="#0f2348" stroke="#8b5cf6" stroke-width="1.2" />
      <circle cx="32" cy="30" r="14" fill="#8b5cf6" fill-opacity="0.2" />
      <text x="32" y="35" text-anchor="middle" fill="#a78bfa" font-size="16" font-weight="900">✓</text>
      <text x="60" y="26" fill="#94a3b8" font-size="11" font-weight="800" letter-spacing="1">STATUTORY LEGAL DEFENSE</text>
      <text x="60" y="47" fill="#ffffff" font-size="17" font-weight="800">Sec 25 PSSA &amp; Lok Adalat Shield</text>
    </g>

    <!-- Pill 4: Official NOC Certificate -->
    <g transform="translate(1305, 0)">
      <rect width="395" height="60" rx="14" fill="#0f2348" stroke="#f59e0b" stroke-width="1.2" />
      <circle cx="32" cy="30" r="14" fill="#f59e0b" fill-opacity="0.2" />
      <text x="32" y="35" text-anchor="middle" fill="#fbbf24" font-size="16" font-weight="900">✓</text>
      <text x="60" y="26" fill="#94a3b8" font-size="11" font-weight="800" letter-spacing="1">STATUTORY LEGAL CLOSURE</text>
      <text x="60" y="47" fill="#ffffff" font-size="17" font-weight="800">Authentic IndusInd Bank NOC</text>
    </g>
  </g>

  <!-- Process Cards -->
  ${cardsSvg}

  <!-- Bottom Regulatory Footer -->
  <g transform="translate(110, 920)">
    <rect width="1700" height="75" rx="18" fill="#0b1730" stroke="rgba(255,255,255,0.12)" stroke-width="1.2" />
    
    <g transform="translate(30, 24)">
      <text x="0" y="18" fill="#60a5fa" font-size="12" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" letter-spacing="1.2">STATUTORY AUTHORITIES &amp; GOVERNING FRAMEWORKS:</text>
      <text x="0" y="38" fill="#cbd5e1" font-size="13.5" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="500">IndusInd Bank Stressed Asset Management • RBI Master Directions on Stressed Assets • Payment &amp; Settlement Systems Act Sec 25 • Section 21 CICRA 2005</text>
    </g>

    <g transform="translate(1480, 24)">
      <rect width="185" height="42" rx="10" fill="#1886ff" fill-opacity="0.2" stroke="#1886ff" stroke-width="1.2" />
      <text x="92" y="26" text-anchor="middle" fill="#ffffff" font-size="14" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" letter-spacing="0.5">credsettle.com</text>
    </g>
  </g>

</svg>
`;

const outputPath = path.join(__dirname, '../public/images/infographics/indusind-bank-personal-loan-settlement.jpg');

sharp(Buffer.from(svg))
  .jpeg({ quality: 95, chromaSubsampling: '4:4:4' })
  .toFile(outputPath)
  .then(() => {
    console.log('Successfully generated infographic at:', outputPath);
  })
  .catch((err) => {
    console.error('Error generating infographic:', err);
    process.exit(1);
  });
