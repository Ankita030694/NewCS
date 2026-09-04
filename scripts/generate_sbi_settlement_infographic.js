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
    sub: 'RACPC STATEMENT AUDIT',
    points: ['SBI Xpress / Quick loan ledger', 'Penal interest separation', 'Compounded GST extraction', 'True principal calculation'],
    badge: 'STAGE 1: AUDIT'
  },
  {
    num: '02',
    name: 'Hardship Dossier',
    color: '#3b82f6',
    sub: 'INSOLVENCY EVIDENCE',
    points: ['Job loss / salary reduction proof', 'Medical emergency records', 'Bank statements verification', 'Bona fide hardship memo'],
    badge: 'STAGE 2: DOSSIER'
  },
  {
    num: '03',
    name: 'SARB Transfer',
    color: '#8b5cf6',
    sub: 'COMMITTEE ENGAGEMENT',
    points: ['Stressed Assets Recovery Branch', 'AGM / DGM authority limits', 'Bypassing agency harassment', 'Direct institutional petition'],
    badge: 'STAGE 3: FILING'
  },
  {
    num: '04',
    name: 'OTS Negotiation',
    color: '#f59e0b',
    sub: '40%-60% WAIVER MATH',
    points: ['SBI Rinn Samadhan OTS scheme', '100% penal interest waiver', 'National Lok Adalat concession', '40% to 60% principal haircut'],
    badge: 'STAGE 4: NEGOTIATION'
  },
  {
    num: '05',
    name: 'Sanction Vetting',
    color: '#10b981',
    sub: 'LEGAL TERMS AUDIT',
    points: ['Official SBI letterhead check', 'Zero residual liability clause', 'Cheque / NACH return clause', 'Tranche deadline validation'],
    badge: 'STAGE 5: VETTING'
  },
  {
    num: '06',
    name: 'NDC &amp; Closure',
    color: '#14b8a6',
    sub: 'CBS &amp; CIBIL UPDATE',
    points: ['Direct SBI loan account remittance', 'Official SBI No Dues Certificate', 'CBS ledger zeroing confirmation', 'Credit bureau CIBIL update'],
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
      <path d="M4 28H34V32H0V0H4V28ZM105 32H101V4H71V0H105V32ZM15.7402 8.54395C16.9361 8.54397 17.9677 8.70131 18.834 9.01562C19.7076 9.32987 20.3243 9.64069 20.6846 9.94727L19.2129 12.8682C18.9292 12.6612 18.4958 12.4581 17.9131 12.2588C17.3382 12.0519 16.6983 11.9483 15.9932 11.9482C15.2112 11.9482 14.5289 12.0711 13.9463 12.3164C13.3637 12.5541 12.8763 12.8831 12.4854 13.3047C12.0944 13.7264 11.803 14.2024 11.6113 14.7314C11.4198 15.2603 11.3242 15.816 11.3242 16.3984C11.3242 16.9887 11.4197 17.5523 11.6113 18.0889C11.803 18.6178 12.0945 19.093 12.4854 19.5146C12.8764 19.9363 13.3636 20.2703 13.9463 20.5156C14.5289 20.7532 15.2113 20.8721 15.9932 20.8721C16.6983 20.8721 17.3382 20.7684 17.9131 20.5615C18.4957 20.3546 18.9292 20.1514 19.2129 19.9521L20.6846 22.873C20.3242 23.1796 19.7076 23.4905 18.834 23.8047C17.9677 24.119 16.9361 24.2763 15.7402 24.2764C14.6209 24.2764 13.5702 24.0805 12.5889 23.6895C11.6076 23.2985 10.7415 22.7502 9.99023 22.0449C9.24663 21.332 8.65979 20.5004 8.23047 19.5498C7.8088 18.5915 7.59766 17.552 7.59766 16.4326C7.5977 15.3134 7.80885 14.2746 8.23047 13.3164C8.65213 12.3504 9.23487 11.5108 9.97852 10.7979C10.7298 10.0849 11.5959 9.53258 12.5771 9.1416C13.5661 8.74293 14.6209 8.54395 15.7402 8.54395ZM49.1084 22.2129L50.5947 19.7109C50.6868 19.7799 50.8629 19.8909 51.123 20.0439C51.3913 20.1972 51.7174 20.3587 52.1006 20.5273C52.4839 20.6883 52.891 20.8264 53.3203 20.9414C53.7572 21.0563 54.1869 21.1133 54.6084 21.1133C55.3135 21.1132 55.8427 20.9792 56.1953 20.7109C56.5478 20.435 56.7236 20.0745 56.7236 19.6299C56.7236 19.3003 56.6129 19.0048 56.3906 18.7441C56.1683 18.4835 55.8342 18.2387 55.3896 18.0088C54.945 17.7712 54.3896 17.5214 53.7227 17.2607C53.0557 16.9924 52.4303 16.6665 51.8477 16.2832C51.2728 15.8999 50.8056 15.4206 50.4453 14.8457C50.085 14.2707 49.9043 13.558 49.9043 12.707C49.9043 11.8561 50.1419 11.12 50.6172 10.499C51.1001 9.87042 51.7328 9.38713 52.5146 9.0498C53.3043 8.71248 54.148 8.54396 55.0449 8.54395C55.9879 8.54395 56.8122 8.64749 57.5176 8.85449C58.2229 9.06149 58.7904 9.27977 59.2197 9.50977C59.649 9.73975 59.91 9.89306 60.002 9.96973L58.3457 12.7412C58.223 12.6492 58.0119 12.5152 57.7129 12.3389C57.4217 12.1626 57.0731 12.0051 56.667 11.8672C56.2683 11.7292 55.8501 11.6602 55.4131 11.6602C54.8228 11.6602 54.3436 11.7678 53.9756 11.9824C53.6153 12.1894 53.4346 12.5001 53.4346 12.9141C53.4346 13.1977 53.531 13.4546 53.7227 13.6846C53.9219 13.9068 54.2208 14.1212 54.6191 14.3281C55.0254 14.5274 55.5392 14.7467 56.1602 14.9844C56.7274 15.1913 57.2605 15.4361 57.7588 15.7197C58.2571 16.0034 58.6946 16.3414 59.0703 16.7324C59.4535 17.1157 59.7563 17.5606 59.9785 18.0664C60.1219 18.3928 60.2177 18.748 60.2686 19.1318C60.2756 18.2317 60.4738 17.42 60.8652 16.6973C61.2715 15.9537 61.8585 15.3678 62.625 14.9385C63.3916 14.5015 64.3156 14.2822 65.3965 14.2822C66.4237 14.2822 67.3132 14.4701 68.0645 14.8457C68.8235 15.2214 69.4062 15.7817 69.8125 16.5254C69.817 16.5334 69.8208 16.5418 69.8252 16.5498V14.5586H71.4355V10.6826H74.8965V14.5586H78.0684V10.6826H81.5303V14.5586H83.6455V17.4336H81.5303V20.0674C81.5303 20.4582 81.5872 20.7762 81.7021 21.0215C81.8171 21.2592 82.0283 21.3779 82.335 21.3779C82.5419 21.3779 82.7186 21.3322 82.8643 21.2402C83.0097 21.1484 83.0972 21.0863 83.1279 21.0557L83.9971 22.8604V8.17578H87.5049V24H83.9971V23.7109C83.9434 23.7354 83.8846 23.7643 83.8184 23.793C83.5424 23.9156 83.19 24.0273 82.7607 24.127C82.3315 24.2266 81.8521 24.2763 81.3232 24.2764C80.3802 24.2764 79.6016 24.0114 78.9883 23.4824C78.375 22.9458 78.0684 22.1214 78.0684 21.0098V17.4336H74.8965V20.0674C74.8965 20.4582 74.9544 20.7762 75.0693 21.0215C75.1843 21.2591 75.3955 21.3779 75.7021 21.3779C75.9088 21.3779 76.085 21.3321 76.2305 21.2402C76.3761 21.1482 76.4645 21.0863 76.4951 21.0557L77.6914 23.54C77.6378 23.586 77.469 23.6704 77.1855 23.793C76.9095 23.9156 76.5563 24.0273 76.127 24.127C75.6977 24.2266 75.2183 24.2764 74.6895 24.2764C73.7466 24.2763 72.9687 24.0113 72.3555 23.4824C71.7421 22.9458 71.4355 22.1214 71.4355 21.0098V17.4336H70.1924C70.3535 17.9791 70.4336 18.5965 70.4336 19.2852C70.4219 19.6533 70.4219 19.8371 70.3994 20.0215H63.5684C63.5914 20.3586 63.6991 20.6574 63.8906 20.918C64.0823 21.1785 64.3464 21.3858 64.6836 21.5391C65.0285 21.6847 65.4348 21.7578 65.9023 21.7578C66.347 21.7578 66.746 21.7111 67.0986 21.6191C67.4589 21.5271 67.7696 21.4124 68.0303 21.2744C68.2985 21.1364 68.5057 20.9943 68.6514 20.8486L70.0078 23.0107C69.8161 23.2177 69.5441 23.4208 69.1914 23.6201C68.8464 23.8118 68.3905 23.9691 67.8232 24.0918C67.256 24.2145 66.5391 24.2764 65.6729 24.2764C64.6302 24.2764 63.7023 24.0805 62.8896 23.6895C62.077 23.2985 61.4364 22.7238 60.9688 21.9648C60.6124 21.3865 60.3924 20.7098 60.3076 19.9355C60.289 20.6417 60.1352 21.2607 59.8408 21.792C59.5265 22.3516 59.097 22.8156 58.5527 23.1836C58.0162 23.5515 57.4028 23.8237 56.7129 24C56.0306 24.184 55.321 24.2764 54.585 24.2764C53.5425 24.2764 52.6072 24.1575 51.7793 23.9199C50.959 23.6823 50.2951 23.4254 49.7891 23.1494C49.4915 22.9871 49.2654 22.8545 49.1084 22.7559V24H45.6475V22.4707C45.5018 22.7543 45.2641 23.0377 44.9346 23.3213C44.6049 23.5973 44.2171 23.8237 43.7725 24C43.3279 24.1839 42.8485 24.2764 42.335 24.2764C41.4229 24.2763 40.6296 24.0538 39.9551 23.6094C39.2804 23.157 38.7546 22.555 38.3789 21.8037C38.1115 21.2523 37.9432 20.6579 37.8701 20.0215H31.2256C31.2487 20.3585 31.3554 20.6575 31.5469 20.918C31.7385 21.1786 32.0035 21.3857 32.3408 21.5391C32.6858 21.6847 33.092 21.7578 33.5596 21.7578C34.0042 21.7578 34.4032 21.7111 34.7559 21.6191C35.1161 21.5271 35.4269 21.4124 35.6875 21.2744C35.9557 21.1364 36.163 20.9943 36.3086 20.8486L37.665 23.0107C37.4734 23.2177 37.2013 23.4208 36.8486 23.6201C36.5037 23.8118 36.0477 23.9691 35.4805 24.0918C34.9132 24.2144 34.1963 24.2764 33.3301 24.2764C32.2874 24.2764 31.3595 24.0804 30.5469 23.6895C29.7342 23.2985 29.0936 22.7238 28.626 21.9648C28.1583 21.2059 27.9248 20.2779 27.9248 19.1816C27.9248 18.2616 28.1238 17.4333 28.5225 16.6973C28.9287 15.9537 29.5157 15.3678 30.2822 14.9385C31.0489 14.5015 31.9727 14.2822 33.0537 14.2822C34.081 14.2822 34.9704 14.4701 35.7217 14.8457C36.4807 15.2214 37.0634 15.7817 37.4697 16.5254C37.7034 16.9409 37.868 17.4155 37.9697 17.9482C38.0617 17.5379 38.198 17.1479 38.3789 16.7783C38.7546 16.0193 39.2804 15.4133 39.9551 14.9609C40.6296 14.5087 41.4229 14.2823 42.335 14.2822C42.9406 14.2822 43.4776 14.3786 43.9453 14.5703C44.413 14.7543 44.7927 14.9766 45.084 15.2373C45.3752 15.4902 45.552 15.7239 45.6133 15.9385V8.17578H49.1084V22.2129ZM92.7607 14.2822C93.7879 14.2823 94.6775 14.4701 95.4287 14.8457C96.1876 15.2214 96.7705 15.7818 97.1768 16.5254C97.5906 17.2613 97.7969 18.1814 97.7969 19.2852C97.7861 19.6533 97.7861 19.8371 97.7627 20.0215H90.9316C90.9547 20.3586 91.0623 20.6574 91.2539 20.918C91.4455 21.1785 91.7097 21.3857 92.0469 21.5391C92.3919 21.6847 92.7989 21.7578 93.2666 21.7578C93.711 21.7578 94.1094 21.7111 94.4619 21.6191C94.8222 21.5272 95.1329 21.4124 95.3936 21.2744C95.6619 21.1364 95.869 20.9943 96.0146 20.8486L97.3721 23.0107C97.1805 23.2177 96.9081 23.4209 96.5557 23.6201C96.2107 23.8118 95.7539 23.9691 95.1865 24.0918C94.6192 24.2144 93.9023 24.2764 93.0361 24.2764C91.9936 24.2763 91.0655 24.0804 90.2529 23.6895C89.4405 23.2985 88.8006 22.7236 88.333 21.9648C87.8654 21.2059 87.6319 20.2779 87.6318 19.1816C87.6318 18.2616 87.8308 17.4333 88.2295 16.6973C88.6358 15.9537 89.2227 15.3678 89.9893 14.9385C90.7559 14.5015 91.6798 14.2822 92.7607 14.2822ZM27.3438 14.2822C27.7807 14.2822 28.1838 14.3513 28.5518 14.4893C28.9197 14.6196 29.1878 14.7465 29.3564 14.8691L28 17.71C27.8927 17.5796 27.7008 17.4446 27.4248 17.3066C27.1566 17.161 26.8192 17.0889 26.4131 17.0889C25.9454 17.0889 25.5576 17.2076 25.251 17.4453C24.9521 17.6829 24.7296 17.9704 24.584 18.3076C24.4461 18.6448 24.377 18.9629 24.377 19.2617V24H20.8809V14.5586H24.377V15.8887C24.4555 15.7369 24.5861 15.5575 24.7686 15.3516C25.0062 15.0758 25.3395 14.8307 25.7686 14.6162C26.1978 14.3939 26.723 14.2823 27.3438 14.2822ZM43.4053 17.0312C42.9989 17.0312 42.6304 17.1307 42.3008 17.3301C41.9789 17.5217 41.7219 17.7899 41.5303 18.1348C41.3463 18.4721 41.2539 18.8558 41.2539 19.2852C41.2539 19.7143 41.3464 20.1014 41.5303 20.4463C41.7219 20.7836 41.9788 21.0486 42.3008 21.2402C42.6304 21.4319 42.999 21.5273 43.4053 21.5273C43.8268 21.5273 44.2027 21.4318 44.5322 21.2402C44.8695 21.0486 45.1336 20.7836 45.3252 20.4463C45.5168 20.1014 45.6133 19.7144 45.6133 19.2852C45.6133 18.8558 45.5169 18.4721 45.3252 18.1348C45.1336 17.79 44.8693 17.5217 44.5322 17.3301C44.2027 17.1308 43.8268 17.0313 43.4053 17.0312ZM33.1113 16.6289C32.728 16.6289 32.4021 16.7051 32.1338 16.8584C31.8732 17.004 31.6741 17.196 31.5361 17.4336C31.3982 17.6712 31.321 17.9241 31.3057 18.1924H34.8018C34.7941 17.9471 34.7291 17.7054 34.6064 17.4678C34.4838 17.2226 34.2998 17.0234 34.0547 16.8701C33.8094 16.7091 33.4946 16.6289 33.1113 16.6289ZM65.4541 16.6289C65.0708 16.6289 64.7449 16.7051 64.4766 16.8584C64.2159 17.0041 64.0169 17.196 63.8789 17.4336C63.7409 17.6712 63.6638 17.9241 63.6484 18.1924H67.1445C67.1368 17.9471 67.0719 17.7054 66.9492 17.4678C66.8266 17.2226 66.6426 17.0234 66.3975 16.8701C66.1521 16.7091 65.8374 16.6289 65.4541 16.6289ZM92.8174 16.6289C92.4344 16.629 92.109 16.7053 91.8408 16.8584C91.5802 17.0041 91.3802 17.1959 91.2422 17.4336C91.1043 17.6712 91.028 17.9242 91.0127 18.1924H94.5088C94.5011 17.9471 94.4351 17.7054 94.3125 17.4678C94.1898 17.2226 94.006 17.0234 93.7607 16.8701C93.5154 16.7091 93.2007 16.6289 92.8174 16.6289Z" fill="white"/>
    </g>
    <text x="175" y="27" fill="#93c5fd" font-size="13" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" letter-spacing="1.5">INSTITUTIONAL SBI DEBT RESOLUTION &amp; LEGAL RECOVERY FRAMEWORK</text>
  </g>

  <!-- Main H1 Title -->
  <text x="110" y="160" fill="#ffffff" font-size="42" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" letter-spacing="-0.5">SBI PERSONAL LOAN SETTLEMENT PROCESS</text>

  <!-- Subtitle -->
  <text x="110" y="202" fill="#94a3b8" font-size="19" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="500">SARB Recovery Escalation, Rinn Samadhan OTS Schemes, Lok Adalat Concessions &amp; Authentic NDC</text>

  <!-- Header Accent Line -->
  <line x1="110" y1="228" x2="1810" y2="228" stroke="url(#lineGrad)" stroke-width="2" />

  <!-- Key Highlight Value Strip -->
  <g transform="translate(110, 255)">
    <!-- Pill 1: Interest & Penal Waiver -->
    <g transform="translate(0, 0)">
      <rect width="395" height="60" rx="14" fill="#0f2348" stroke="#3b82f6" stroke-width="1.2" />
      <circle cx="32" cy="30" r="14" fill="#1886ff" fill-opacity="0.2" />
      <text x="32" y="35" text-anchor="middle" fill="#38bdf8" font-size="16" font-weight="900">✓</text>
      <text x="60" y="26" fill="#94a3b8" font-size="11" font-weight="800" letter-spacing="1">PENAL &amp; COMPOUND INTEREST</text>
      <text x="60" y="47" fill="#ffffff" font-size="17" font-weight="800">100% Complete Charge Waiver</text>
    </g>

    <!-- Pill 2: Principal Haircut -->
    <g transform="translate(435, 0)">
      <rect width="395" height="60" rx="14" fill="#0f2348" stroke="#10b981" stroke-width="1.2" />
      <circle cx="32" cy="30" r="14" fill="#10b981" fill-opacity="0.2" />
      <text x="32" y="35" text-anchor="middle" fill="#34d399" font-size="16" font-weight="900">✓</text>
      <text x="60" y="26" fill="#94a3b8" font-size="11" font-weight="800" letter-spacing="1">PRINCIPAL SETTLEMENT TARGET</text>
      <text x="60" y="47" fill="#34d399" font-size="17" font-weight="800">40% to 60% Haircut Concession</text>
    </g>

    <!-- Pill 3: SARB Resolution -->
    <g transform="translate(870, 0)">
      <rect width="395" height="60" rx="14" fill="#0f2348" stroke="#8b5cf6" stroke-width="1.2" />
      <circle cx="32" cy="30" r="14" fill="#8b5cf6" fill-opacity="0.2" />
      <text x="32" y="35" text-anchor="middle" fill="#a78bfa" font-size="16" font-weight="900">✓</text>
      <text x="60" y="26" fill="#94a3b8" font-size="11" font-weight="800" letter-spacing="1">RECOVERY FORUM ESCALATION</text>
      <text x="60" y="47" fill="#ffffff" font-size="17" font-weight="800">SARB / SARC Committee Direct</text>
    </g>

    <!-- Pill 4: Official NDC Certificate -->
    <g transform="translate(1305, 0)">
      <rect width="395" height="60" rx="14" fill="#0f2348" stroke="#f59e0b" stroke-width="1.2" />
      <circle cx="32" cy="30" r="14" fill="#f59e0b" fill-opacity="0.2" />
      <text x="32" y="35" text-anchor="middle" fill="#fbbf24" font-size="16" font-weight="900">✓</text>
      <text x="60" y="26" fill="#94a3b8" font-size="11" font-weight="800" letter-spacing="1">STATUTORY LEGAL CLOSURE</text>
      <text x="60" y="47" fill="#ffffff" font-size="17" font-weight="800">Official SBI No Dues Certificate</text>
    </g>
  </g>

  <!-- Process Cards -->
  ${cardsSvg}

  <!-- Bottom Regulatory Footer -->
  <g transform="translate(110, 920)">
    <rect width="1700" height="75" rx="18" fill="#0b1730" stroke="rgba(255,255,255,0.12)" stroke-width="1.2" />
    
    <g transform="translate(30, 24)">
      <text x="0" y="18" fill="#60a5fa" font-size="12" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" letter-spacing="1.2">STATUTORY AUTHORITIES &amp; GOVERNING FRAMEWORKS:</text>
      <text x="0" y="38" fill="#cbd5e1" font-size="13.5" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="500">SBI Stressed Assets Resolution Policy • RBI Master Circular on Prudential Norms on Advances • Section 21 Legal Services Authorities Act, 1987 • Section 21 CICRA 2005</text>
    </g>

    <g transform="translate(1480, 24)">
      <rect width="185" height="42" rx="10" fill="#1886ff" fill-opacity="0.2" stroke="#1886ff" stroke-width="1.2" />
      <text x="92" y="26" text-anchor="middle" fill="#ffffff" font-size="14" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" letter-spacing="0.5">credsettle.com</text>
    </g>
  </g>

</svg>
`;

const outputPath = path.join(__dirname, '../public/images/infographics/sbi-personal-loan-settlement-process.jpg');

sharp(Buffer.from(svg))
  .jpeg({ quality: 95, chromaSubsampling: '4:4:4' })
  .toFile(outputPath)
  .then(() => {
    console.log('SBI personal loan settlement infographic generated successfully at:', outputPath);
  })
  .catch(err => {
    console.error('Error generating image:', err);
  });
