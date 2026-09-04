const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const width = 1920;
const height = 1080;

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradients -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#040814" />
      <stop offset="35%" stop-color="#08142c" />
      <stop offset="70%" stop-color="#0b1b38" />
      <stop offset="100%" stop-color="#050a17" />
    </linearGradient>

    <!-- Radial Glows -->
    <radialGradient id="topGlow" cx="50%" cy="15%" r="50%">
      <stop offset="0%" stop-color="#1886ff" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#040814" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="redGlow" cx="20%" cy="50%" r="40%">
      <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.12" />
      <stop offset="100%" stop-color="#040814" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="greenGlow" cx="80%" cy="50%" r="40%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.12" />
      <stop offset="100%" stop-color="#040814" stop-opacity="0" />
    </radialGradient>

    <!-- Panel Gradients -->
    <linearGradient id="panelRedGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1f0f18" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#120910" stop-opacity="0.98" />
    </linearGradient>

    <linearGradient id="panelBlueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0e2246" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#08142b" stop-opacity="0.98" />
    </linearGradient>

    <linearGradient id="panelGreenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0a231c" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#061511" stop-opacity="0.98" />
    </linearGradient>

    <!-- Header Accent Line -->
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.8" />
      <stop offset="50%" stop-color="#1886ff" stop-opacity="1" />
      <stop offset="100%" stop-color="#10b981" stop-opacity="0.8" />
    </linearGradient>

    <!-- Inner Card Highlights -->
    <linearGradient id="cardHighlightRed" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#f43f5e" stop-opacity="0.05" />
    </linearGradient>

    <linearGradient id="cardHighlightBlue" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1886ff" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.08" />
    </linearGradient>

    <linearGradient id="cardHighlightGreen" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#10b981" stop-opacity="0.05" />
    </linearGradient>
  </defs>

  <!-- Background Layer -->
  <rect width="${width}" height="${height}" fill="url(#bgGrad)" />
  <rect width="${width}" height="${height}" fill="url(#topGlow)" />
  <rect width="${width}" height="${height}" fill="url(#redGlow)" />
  <rect width="${width}" height="${height}" fill="url(#greenGlow)" />

  <!-- Subtle Blueprint Tech Grid -->
  <g opacity="0.04" stroke="#ffffff" stroke-width="1">
    <path d="M 0 120 L ${width} 120 M 0 240 L ${width} 240 M 0 360 L ${width} 360 M 0 480 L ${width} 480 M 0 600 L ${width} 600 M 0 720 L ${width} 720 M 0 840 L ${width} 840 M 0 960 L ${width} 960" />
    <path d="M 120 0 L 120 ${height} M 240 0 L 240 ${height} M 360 0 L 360 ${height} M 480 0 L 480 ${height} M 600 0 L 600 ${height} M 720 0 L 720 ${height} M 840 0 L 840 ${height} M 960 0 L 960 ${height} M 1080 0 L 1080 ${height} M 1200 0 L 1200 ${height} M 1320 0 L 1320 ${height} M 1440 0 L 1440 ${height} M 1560 0 L 1560 ${height} M 1680 0 L 1680 ${height} M 1800 0 L 1800 ${height}" />
  </g>

  <!-- Decorative Modern Frame Corner Brackets -->
  <g stroke="#1886ff" stroke-width="3" fill="none" opacity="0.6">
    <path d="M 45 80 L 45 45 L 80 45" />
    <path d="M ${width - 80} 45 L ${width - 45} 45 L ${width - 45} 80" />
    <path d="M 45 ${height - 80} L 45 ${height - 45} L 80 ${height - 45}" />
    <path d="M ${width - 80} ${height - 45} L ${width - 45} ${height - 45} L ${width - 45} ${height - 80}" />
  </g>

  <!-- ================= TOP HEADER BAR ================= -->
  <g transform="translate(85, 45)">
    <!-- Official CredSettle Vector Wordmark -->
    <g transform="scale(1.4)">
      <path d="M4.99048 35H42.419V40H0V0H4.99048V35ZM131 40H126.01V5H88.5809V0H131V40ZM19.6378 10.6799C21.1298 10.68 22.4168 10.8766 23.4977 11.2695C24.5876 11.6623 25.357 12.0509 25.8065 12.4341L23.9704 16.0853C23.6164 15.8265 23.0757 15.5726 22.3487 15.3235C21.6315 15.0649 20.8331 14.9354 19.9534 14.9353C18.9778 14.9353 18.1265 15.0889 17.3997 15.3955C16.6728 15.6926 16.0647 16.1039 15.577 16.6309C15.0892 17.158 14.7256 17.753 14.4865 18.4142C14.2476 19.0754 14.1283 19.77 14.1283 20.498C14.1283 21.2359 14.2474 21.9404 14.4865 22.6111C14.7256 23.2722 15.0893 23.8663 15.577 24.3933C16.0648 24.9204 16.6727 25.3379 17.3997 25.6445C18.1265 25.9415 18.9779 26.0901 19.9534 26.0901C20.8331 26.0901 21.6315 25.9605 22.3487 25.7019C23.0756 25.4433 23.6164 25.1893 23.9704 24.9401L25.8065 28.5912C25.3569 28.9745 24.5876 29.3631 23.4977 29.7559C22.4168 30.1488 21.1298 30.3454 19.6378 30.3455C18.2413 30.3455 16.9304 30.1006 15.7062 29.6119C14.4819 29.1231 13.4013 28.4378 12.464 27.5561C11.5363 26.665 10.8041 25.6255 10.2685 24.4373C9.74241 23.2394 9.47898 21.94 9.47898 20.5408C9.47904 19.1418 9.74247 17.8433 10.2685 16.6455C10.7946 15.438 11.5216 14.3885 12.4494 13.4974C13.3867 12.6061 14.4673 11.9157 15.6914 11.427C16.9253 10.9287 18.2413 10.6799 19.6378 10.6799ZM61.2686 27.7661L63.1229 24.6386C63.2378 24.7249 63.4575 24.8636 63.782 25.0549C64.1168 25.2465 64.5236 25.4484 65.0017 25.6591C65.4799 25.8604 65.9878 26.033 66.5234 26.1768C67.0685 26.3204 67.6046 26.3916 68.1305 26.3916C69.0102 26.3915 69.6704 26.224 70.1103 25.8886C70.5501 25.5437 70.7694 25.0931 70.7694 24.5374C70.7694 24.1254 70.6313 23.756 70.354 23.4301C70.0766 23.1044 69.6598 22.7984 69.1051 22.511C68.5504 22.214 67.8575 21.9018 67.0255 21.5759C66.1933 21.2405 65.413 20.8331 64.6862 20.354C63.9689 19.8749 63.386 19.2758 62.9365 18.5571C62.487 17.8384 62.2616 16.9475 62.2616 15.8837C62.2616 14.8201 62.558 13.9 63.151 13.1237C63.7535 12.338 64.5428 11.7339 65.5182 11.3123C66.5035 10.8906 67.5561 10.6799 68.6751 10.6799C69.8516 10.6799 70.88 10.8094 71.7601 11.0681C72.64 11.3269 73.348 11.5997 73.8836 11.8872C74.4192 12.1747 74.7449 12.3663 74.8596 12.4622L72.7932 15.9265C72.6401 15.8115 72.3767 15.644 72.0037 15.4236C71.6404 15.2032 71.2055 15.0064 70.6988 14.834C70.2014 14.6615 69.6796 14.5753 69.1344 14.5753C68.398 14.5753 67.8001 14.7098 67.341 14.978C66.8915 15.2367 66.666 15.6251 66.666 16.1426C66.666 16.4971 66.7863 16.8183 67.0255 17.1057C67.274 17.3835 67.6469 17.6515 68.1438 17.9101C68.6507 18.1593 69.2918 18.4334 70.0665 18.7305C70.7742 18.9891 71.4393 19.2951 72.061 19.6496C72.6827 20.0042 73.2285 20.4268 73.6972 20.9155C74.1753 21.3946 74.5531 21.9508 74.8303 22.583C75.0092 22.991 75.1287 23.435 75.1923 23.9147C75.201 22.7896 75.4483 21.775 75.9366 20.8716C76.4435 19.9421 77.1758 19.2098 78.1321 18.6731C79.0886 18.1269 80.2414 17.8527 81.5899 17.8527C82.8715 17.8527 83.9812 18.0876 84.9186 18.5571C85.8655 19.0268 86.5925 19.7271 87.0994 20.6567C87.105 20.6667 87.1098 20.6773 87.1152 20.6873V18.1982H89.1243V13.3533H93.4423V18.1982H97.3996V13.3533H101.719V18.1982H104.358V21.792H101.719V25.0842C101.719 25.5728 101.79 25.9702 101.933 26.2769C102.077 26.574 102.34 26.7224 102.723 26.7224C102.981 26.7224 103.201 26.6653 103.383 26.5503C103.564 26.4355 103.674 26.3579 103.712 26.3196L104.796 28.5755V10.2197H109.173V30H104.796V29.6386C104.729 29.6692 104.656 29.7054 104.573 29.7412C104.229 29.8945 103.789 30.0341 103.254 30.1588C102.718 30.2833 102.12 30.3454 101.46 30.3455C100.284 30.3455 99.3125 30.0143 98.5473 29.353C97.7821 28.6823 97.3996 27.6518 97.3996 26.2622V21.792H93.4423V25.0842C93.4423 25.5728 93.5145 25.9702 93.6579 26.2769C93.8014 26.5739 94.0649 26.7224 94.4474 26.7224C94.7053 26.7224 94.9251 26.6651 95.1066 26.5503C95.2883 26.4352 95.3986 26.3579 95.4367 26.3196L96.9293 29.425C96.8624 29.4825 96.6518 29.588 96.2981 29.7412C95.9538 29.8945 95.5131 30.0341 94.9775 30.1588C94.4419 30.2833 93.8438 30.3455 93.184 30.3455C92.0077 30.3454 91.0371 30.0141 90.2721 29.353C89.5068 28.6823 89.1243 27.6518 89.1243 26.2622V21.792H87.5734C87.7744 22.4739 87.8743 23.2456 87.8743 24.1065C87.8743 24.1831 87.8692 24.3369 87.8597 24.5666C87.8597 24.7964 87.8507 24.9502 87.8316 25.0269H79.3092C79.3378 25.4482 79.4722 25.8217 79.7111 26.1475C79.9503 26.4731 80.2798 26.7323 80.7005 26.9239C81.1308 27.1059 81.6377 27.1972 82.221 27.1972C82.7758 27.1972 83.2736 27.1389 83.7135 27.0239C84.163 26.9089 84.5506 26.7655 84.8759 26.593C85.2105 26.4205 85.469 26.2429 85.6508 26.0608L87.3431 28.7634C87.1039 29.0221 86.7645 29.276 86.3245 29.5251C85.8941 29.7647 85.3253 29.9614 84.6175 30.1147C83.9099 30.2681 83.0154 30.3455 81.9348 30.3455C80.6339 30.3455 79.4762 30.1006 78.4623 29.6119C77.4484 29.1231 76.6492 28.4047 76.0658 27.456C75.6212 26.7331 75.3467 25.8872 75.2409 24.9194C75.2177 25.8021 75.0258 26.5759 74.6585 27.24C74.2664 27.9395 73.7305 28.5195 73.0515 28.9795C72.3821 29.4394 71.6168 29.7796 70.7561 30C69.9048 30.23 69.0195 30.3455 68.1013 30.3455C66.8006 30.3455 65.6337 30.1969 64.6008 29.8999C63.5774 29.6029 62.7491 29.2818 62.1178 28.9368C61.7465 28.7339 61.4644 28.5681 61.2686 28.4449V30H56.9507V28.0884C56.7689 28.4429 56.4724 28.7971 56.0613 29.1516C55.6499 29.4966 55.1661 29.7796 54.6114 30C54.0567 30.2299 53.4586 30.3455 52.818 30.3455C51.68 30.3454 50.6903 30.0672 49.8487 29.5117C49.007 28.9462 48.351 28.1937 47.8822 27.2546C47.5486 26.5654 47.3387 25.8224 47.2475 25.0269H38.9577C38.9865 25.4481 39.1196 25.8219 39.3585 26.1475C39.5976 26.4732 39.9282 26.7321 40.349 26.9239C40.7794 27.1059 41.2862 27.1972 41.8696 27.1972C42.4243 27.1972 42.9221 27.1389 43.3621 27.0239C43.8115 26.9089 44.1993 26.7655 44.5244 26.593C44.859 26.4205 45.1176 26.2429 45.2993 26.0608L46.9916 28.7634C46.7525 29.0221 46.413 29.276 45.973 29.5251C45.5427 29.7647 44.9738 29.9614 44.2661 30.1147C43.5584 30.268 42.664 30.3455 41.5833 30.3455C40.2824 30.3455 39.1247 30.1005 38.1109 29.6119C37.097 29.1231 36.2977 28.4047 35.7143 27.456C35.1308 26.5074 34.8395 25.3474 34.8395 23.977C34.8395 22.827 35.0878 21.7916 35.5852 20.8716C36.092 19.9421 36.8243 19.2098 37.7806 18.6731C38.7372 18.1269 39.8897 17.8527 41.2384 17.8527C42.5201 17.8527 43.6297 18.0876 44.5671 18.5571C45.514 19.0268 46.241 19.7271 46.7479 20.6567C47.0395 21.1761 47.2448 21.7694 47.3717 22.4352C47.4865 21.9224 47.6566 21.4349 47.8822 20.9729C48.351 20.0241 49.007 19.2666 49.8487 18.7011C50.6903 18.1359 51.68 17.8529 52.818 17.8527C53.5735 17.8527 54.2435 17.9732 54.827 18.2129C55.4105 18.4429 55.8842 18.7208 56.2477 19.0466C56.611 19.3627 56.8315 19.6549 56.908 19.9231V10.2197H61.2686V27.7661ZM115.73 17.8527C117.012 17.8529 118.121 18.0876 119.059 18.5571C120.005 19.0268 120.733 19.7273 121.24 20.6567C121.756 21.5766 122.013 22.7267 122.013 24.1065C122.013 24.1831 122.009 24.3369 122 24.5666C122 24.7964 121.99 24.9502 121.971 25.0269H113.448C113.477 25.4482 113.611 25.8217 113.85 26.1475C114.089 26.4731 114.419 26.7321 114.839 26.9239C115.27 27.1059 115.778 27.1972 116.361 27.1972C116.916 27.1972 117.413 27.1389 117.852 27.0239C118.302 26.909 118.69 26.7655 119.015 26.593C119.35 26.4205 119.608 26.2429 119.79 26.0608L121.483 28.7634C121.244 29.0221 120.904 29.2761 120.465 29.5251C120.034 29.7647 119.464 29.9614 118.756 30.1147C118.049 30.268 117.154 30.3455 116.074 30.3455C114.773 30.3454 113.615 30.1005 112.601 29.6119C111.588 29.1231 110.789 28.4045 110.206 27.456C109.623 26.5074 109.331 25.3474 109.331 23.977C109.331 22.827 109.579 21.7916 110.077 20.8716C110.584 19.9421 111.316 19.2098 112.272 18.6731C113.229 18.1269 114.381 17.8527 115.73 17.8527ZM34.1146 17.8527C34.6597 17.8527 35.1626 17.9391 35.6218 18.1116C36.0808 18.2745 36.4153 18.4331 36.6256 18.5864L34.9333 22.1375C34.7995 21.9745 34.56 21.8057 34.2157 21.6333C33.8811 21.4513 33.4601 21.3611 32.9535 21.3611C32.37 21.3611 31.8861 21.5095 31.5036 21.8066C31.1307 22.1036 30.8531 22.463 30.6715 22.8845C30.4994 23.306 30.4132 23.7036 30.4132 24.0771V30H26.0514V18.1982H30.4132V19.8609C30.5111 19.6711 30.6741 19.4469 30.9018 19.1895C31.1982 18.8447 31.614 18.5384 32.1494 18.2703C32.6849 17.9924 33.3401 17.8529 34.1146 17.8527ZM54.1533 21.289C53.6462 21.289 53.1865 21.4134 52.7753 21.6626C52.3737 21.9021 52.053 22.2374 51.814 22.6685C51.5844 23.0901 51.4692 23.5697 51.4692 24.1065C51.4692 24.6429 51.5846 25.1268 51.814 25.5579C52.053 25.9795 52.3736 26.3108 52.7753 26.5503C53.1865 26.7899 53.6464 26.9091 54.1533 26.9091C54.6791 26.9091 55.1481 26.7897 55.5592 26.5503C55.98 26.3108 56.3095 25.9795 56.5486 25.5579C56.7876 25.1268 56.908 24.643 56.908 24.1065C56.908 23.5697 56.7878 23.0901 56.5486 22.6685C56.3095 22.2375 55.9798 21.9021 55.5592 21.6626C55.1481 21.4135 54.6791 21.2891 54.1533 21.289ZM41.3103 20.7861C40.8321 20.7861 40.4255 20.8814 40.0907 21.073C39.7656 21.255 39.5172 21.495 39.345 21.792C39.173 22.089 39.0767 22.4051 39.0576 22.7405H43.4194C43.4098 22.4339 43.3287 22.1318 43.1756 21.8348C43.0226 21.5282 42.7931 21.2792 42.4873 21.0876C42.1812 20.8864 41.7885 20.7861 41.3103 20.7861ZM81.6618 20.7861C81.1836 20.7861 80.777 20.8814 80.4422 21.073C80.117 21.2551 79.8687 21.495 79.6965 21.792C79.5244 22.089 79.4282 22.4051 79.409 22.7405H83.7708C83.7612 22.4339 83.6802 22.1318 83.5271 21.8348C83.3741 21.5282 83.1446 21.2792 82.8388 21.0876C82.5326 20.8864 82.14 20.7861 81.6618 20.7861ZM115.801 20.7861C115.323 20.7863 114.917 20.8816 114.582 21.073C114.257 21.2551 114.008 21.4949 113.836 21.792C113.663 22.089 113.568 22.4053 113.549 22.7405H117.911C117.901 22.4339 117.819 22.1318 117.666 21.8348C117.513 21.5282 117.284 21.2792 116.978 21.0876C116.672 20.8864 116.279 20.7861 115.801 20.7861Z" fill="white"/>
    </g>

    <!-- Header Divider Line -->
    <line x1="205" y1="5" x2="205" y2="52" stroke="rgba(255,255,255,0.25)" stroke-width="1.5" />

    <!-- Sub-brand context -->
    <g transform="translate(225, 12)">
      <text x="0" y="15" fill="#38bdf8" font-size="13" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" letter-spacing="1.5">INDUSIND BANK STRESSED ASSET RESOLUTION ARCHITECTURE</text>
      <text x="0" y="34" fill="#94a3b8" font-size="12" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="500">Unsecured Retail Credit Facilities • Personal Loans • High-Limit Credit Cards • Reserve Bank of India Framework</text>
    </g>

    <!-- Verified Pill Badge Right -->
    <g transform="translate(1330, 8)">
      <rect width="420" height="42" rx="21" fill="#081b3d" stroke="#38bdf8" stroke-width="1.2" />
      <circle cx="24" cy="21" r="6" fill="#10b981" />
      <text x="42" y="26" fill="#ffffff" font-size="12.5" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" letter-spacing="0.8">OFFICIAL INSTITUTIONAL RESOLUTION BLUEPRINT</text>
    </g>
  </g>

  <!-- Big Hero Title & Explainer -->
  <g transform="translate(85, 128)">
    <text x="0" y="32" fill="#ffffff" font-size="34" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" letter-spacing="-0.5">INDUSIND BANK LOAN SETTLEMENT &amp; LEGAL DEFENSE MATRIX</text>
    <text x="0" y="60" fill="#94a3b8" font-size="16" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="500">How Delinquent Personal Loans &amp; Credit Cards Transition from Escalation to Full Legal Discharge</text>
  </g>

  <!-- Divider Accent Line -->
  <line x1="85" y1="205" x2="1835" y2="205" stroke="url(#accentGrad)" stroke-width="2.5" stroke-linecap="round" />

  <!-- ================= 3 STRATEGIC PANELS ================= -->

  <!-- PANEL 1: THE ACCELERATION TRAP (PRE-SETTLEMENT) -->
  <g transform="translate(85, 230)">
    <!-- Panel Container -->
    <rect width="520" height="675" rx="22" fill="url(#panelRedGrad)" stroke="#f43f5e" stroke-width="1.8" />
    <path d="M 22 0 L 498 0" stroke="#f43f5e" stroke-width="4" stroke-linecap="round" />

    <!-- Panel Header Badge -->
    <g transform="translate(25, 25)">
      <rect width="210" height="32" rx="8" fill="#f43f5e" fill-opacity="0.18" stroke="#f43f5e" stroke-width="1.2" />
      <text x="105" y="21" text-anchor="middle" fill="#fb7185" font-size="12" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" letter-spacing="1">PHASE 1 • DEFAULT TRAP</text>
    </g>
    <text x="25" y="90" fill="#ffffff" font-size="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800">The Delinquency Spiral</text>
    <text x="25" y="112" fill="#fda4af" font-size="13" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">Unmanaged NPA compounding &amp; escalation</text>

    <!-- Highlight Metric Card -->
    <g transform="translate(25, 130)">
      <rect width="470" height="85" rx="14" fill="url(#cardHighlightRed)" stroke="#f43f5e" stroke-width="1" />
      <text x="25" y="38" fill="#fb7185" font-size="12" font-weight="800" letter-spacing="1">COMPOUNDING PENAL RATE</text>
      <text x="25" y="70" fill="#ffffff" font-size="28" font-weight="900">24% to 36% APR</text>
      <text x="270" y="55" fill="#fca5a5" font-size="13" font-weight="600">+ ₹500/NACH Bounce</text>
      <text x="270" y="72" fill="#94a3b8" font-size="11">+ 18% Compounding GST</text>
    </g>

    <!-- 4 Problem Blocks -->
    <g transform="translate(25, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect width="470" height="82" rx="12" fill="#130810" stroke="rgba(244,63,94,0.3)" stroke-width="1" />
        <circle cx="28" cy="28" r="14" fill="#f43f5e" fill-opacity="0.2" />
        <text x="28" y="34" text-anchor="middle" fill="#fb7185" font-size="14" font-weight="900">✕</text>
        <text x="54" y="28" fill="#ffffff" font-size="15" font-weight="700">Artificial Ledger Inflation</text>
        <text x="54" y="48" fill="#cbd5e1" font-size="12" font-weight="400">Total claim spikes 30% to 45% above initial principal</text>
        <text x="54" y="65" fill="#94a3b8" font-size="11">Automated late charges and unbundled interest compounding</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 95)">
        <rect width="470" height="82" rx="12" fill="#130810" stroke="rgba(244,63,94,0.3)" stroke-width="1" />
        <circle cx="28" cy="28" r="14" fill="#f43f5e" fill-opacity="0.2" />
        <text x="28" y="34" text-anchor="middle" fill="#fb7185" font-size="14" font-weight="900">✕</text>
        <text x="54" y="28" fill="#ffffff" font-size="15" font-weight="700">Section 25 PSSA NACH Notices</text>
        <text x="54" y="48" fill="#cbd5e1" font-size="12" font-weight="400">Advocate demand letters alleging electronic mandate dishonor</text>
        <text x="54" y="65" fill="#94a3b8" font-size="11">Pre-litigation threats under Negotiable Instruments Section 138</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 190)">
        <rect width="470" height="82" rx="12" fill="#130810" stroke="rgba(244,63,94,0.3)" stroke-width="1" />
        <circle cx="28" cy="28" r="14" fill="#f43f5e" fill-opacity="0.2" />
        <text x="28" y="34" text-anchor="middle" fill="#fb7185" font-size="14" font-weight="900">✕</text>
        <text x="54" y="28" fill="#ffffff" font-size="15" font-weight="700">Aggressive Third-Party Recovery</text>
        <text x="54" y="48" fill="#cbd5e1" font-size="12" font-weight="400">Relentless telecaller harassment &amp; unauthorized field visits</text>
        <text x="54" y="65" fill="#94a3b8" font-size="11">Invasion of personal privacy violating RBI Fair Practices Code</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(0, 285)">
        <rect width="470" height="82" rx="12" fill="#130810" stroke="rgba(244,63,94,0.3)" stroke-width="1" />
        <circle cx="28" cy="28" r="14" fill="#f43f5e" fill-opacity="0.2" />
        <text x="28" y="34" text-anchor="middle" fill="#fb7185" font-size="14" font-weight="900">✕</text>
        <text x="54" y="28" fill="#ffffff" font-size="15" font-weight="700">CIBIL Score Freefall (-150 Points)</text>
        <text x="54" y="48" fill="#cbd5e1" font-size="12" font-weight="400">30, 60, 90+ DPD reporting destroys institutional credibility</text>
        <text x="54" y="65" fill="#94a3b8" font-size="11">Blacklisting across TransUnion CIBIL, Experian &amp; Equifax</text>
      </g>
    </g>

    <!-- Bottom Status Strip -->
    <g transform="translate(25, 620)">
      <rect width="470" height="34" rx="8" fill="#f43f5e" fill-opacity="0.12" />
      <text x="235" y="22" text-anchor="middle" fill="#fb7185" font-size="11.5" font-weight="700" letter-spacing="0.5">VULNERABILITY: UNSECURED NPA • ZERO COLLATERAL SEIZURE</text>
    </g>
  </g>

  <!-- Dynamic Direction Arrow 1 -->
  <g transform="translate(615, 540)">
    <circle cx="18" cy="18" r="18" fill="#0f254e" stroke="#1886ff" stroke-width="2" />
    <path d="M 14 10 L 22 18 L 14 26" fill="none" stroke="#38bdf8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </g>

  <!-- PANEL 2: INSTITUTIONAL OTS RESOLUTION (CENTER HIGHLIGHT) -->
  <g transform="translate(660, 230)">
    <!-- Panel Container with Bright Blue Accent -->
    <rect width="600" height="675" rx="22" fill="url(#panelBlueGrad)" stroke="#1886ff" stroke-width="2.2" />
    <path d="M 22 0 L 578 0" stroke="#38bdf8" stroke-width="4.5" stroke-linecap="round" />

    <!-- Panel Header Badge -->
    <g transform="translate(30, 25)">
      <rect width="260" height="32" rx="8" fill="#1886ff" fill-opacity="0.22" stroke="#38bdf8" stroke-width="1.2" />
      <text x="130" y="21" text-anchor="middle" fill="#38bdf8" font-size="12" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" letter-spacing="1">PHASE 2 • BILATERAL OTS RESOLUTION</text>
    </g>
    <text x="30" y="90" fill="#ffffff" font-size="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800">CredSettle Institutional Intervention</text>
    <text x="30" y="112" fill="#93c5fd" font-size="13" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">Direct negotiation with IndusInd Stressed Asset Desk</text>

    <!-- Highlight Settlement Math Card -->
    <g transform="translate(30, 130)">
      <rect width="540" height="175" rx="14" fill="url(#cardHighlightBlue)" stroke="#38bdf8" stroke-width="1.2" />
      
      <!-- Top Row -->
      <text x="25" y="32" fill="#93c5fd" font-size="12" font-weight="800" letter-spacing="1">REPRESENTATIVE ₹10 LAKH DEFAULT RESOLUTION MATH</text>
      
      <!-- Math Breakdown Grid -->
      <g transform="translate(25, 45)">
        <rect width="235" height="42" rx="8" fill="#081938" stroke="rgba(255,255,255,0.1)" />
        <text x="15" y="26" fill="#94a3b8" font-size="12">Pre-Settlement Claim:</text>
        <text x="220" y="26" text-anchor="end" fill="#f43f5e" font-size="13" font-weight="800">₹10,00,000</text>

        <rect x="255" width="235" height="42" rx="8" fill="#081938" stroke="rgba(255,255,255,0.1)" />
        <text x="270" y="26" fill="#94a3b8" font-size="12">100% Penal Fee Waiver:</text>
        <text x="475" y="26" text-anchor="end" fill="#34d399" font-size="13" font-weight="800">-₹3,00,000</text>
      </g>

      <g transform="translate(25, 95)">
        <rect width="235" height="42" rx="8" fill="#081938" stroke="rgba(255,255,255,0.1)" />
        <text x="15" y="26" fill="#94a3b8" font-size="12">Principal Haircut (45%):</text>
        <text x="220" y="26" text-anchor="end" fill="#34d399" font-size="13" font-weight="800">-₹3,15,000</text>

        <rect x="255" width="235" height="42" rx="8" fill="#0f2b5c" stroke="#38bdf8" stroke-width="1.2" />
        <text x="270" y="26" fill="#ffffff" font-size="12" font-weight="700">Final Sanctioned OTS:</text>
        <text x="475" y="26" text-anchor="end" fill="#fbbf24" font-size="15" font-weight="900">₹3,85,000</text>
      </g>

      <!-- Summary Pill Inside Card -->
      <g transform="translate(25, 145)">
        <text x="245" y="16" text-anchor="middle" fill="#34d399" font-size="13" font-weight="800" letter-spacing="0.5">NET BORROWER SAVINGS: ₹6,15,000 (61.5% TOTAL RELIEF)</text>
      </g>
    </g>

    <!-- 4-Stage Operational Workflow -->
    <g transform="translate(30, 325)">
      <!-- Stage 1 -->
      <g transform="translate(0, 0)">
        <rect width="540" height="66" rx="12" fill="#081938" stroke="rgba(56,189,248,0.25)" stroke-width="1" />
        <circle cx="28" cy="33" r="14" fill="#0284c7" />
        <text x="28" y="38" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="900">1</text>
        <text x="54" y="28" fill="#ffffff" font-size="14" font-weight="700">Forensic Statement &amp; Loan Audit</text>
        <text x="54" y="48" fill="#94a3b8" font-size="11.5">Extract compounding penal interest, unbundle bounce fees &amp; isolate core principal</text>
      </g>

      <!-- Stage 2 -->
      <g transform="translate(0, 74)">
        <rect width="540" height="66" rx="12" fill="#081938" stroke="rgba(56,189,248,0.25)" stroke-width="1" />
        <circle cx="28" cy="33" r="14" fill="#2563eb" />
        <text x="28" y="38" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="900">2</text>
        <text x="54" y="28" fill="#ffffff" font-size="14" font-weight="700">Hardship Dossier &amp; PNO Legal Petition</text>
        <text x="54" y="48" fill="#94a3b8" font-size="11.5">Document corporate layoff, medical crises or business cashflow losses to prove non-wilful default</text>
      </g>

      <!-- Stage 3 -->
      <g transform="translate(0, 148)">
        <rect width="540" height="66" rx="12" fill="#081938" stroke="rgba(56,189,248,0.25)" stroke-width="1" />
        <circle cx="28" cy="33" r="14" fill="#7c3aed" />
        <text x="28" y="38" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="900">3</text>
        <text x="54" y="28" fill="#ffffff" font-size="14" font-weight="700">Credit Committee Compromise Negotiations</text>
        <text x="54" y="48" fill="#94a3b8" font-size="11.5">Direct bilateral representation to Stressed Asset Group leveraging Tier-1 capital provisioning</text>
      </g>

      <!-- Stage 4 -->
      <g transform="translate(0, 222)">
        <rect width="540" height="66" rx="12" fill="#081938" stroke="rgba(56,189,248,0.25)" stroke-width="1" />
        <circle cx="28" cy="33" r="14" fill="#059669" />
        <text x="28" y="38" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="900">4</text>
        <text x="54" y="28" fill="#ffffff" font-size="14" font-weight="700">Sanction Letter Legal Audit &amp; Vetting</text>
        <text x="54" y="48" fill="#94a3b8" font-size="11.5">Verify official letterhead, @indusind.com source, tranche timelines &amp; full notice withdrawal</text>
      </g>
    </g>

    <!-- Bottom Status Strip -->
    <g transform="translate(30, 620)">
      <rect width="540" height="34" rx="8" fill="#1886ff" fill-opacity="0.15" />
      <text x="270" y="22" text-anchor="middle" fill="#38bdf8" font-size="11.5" font-weight="700" letter-spacing="0.5">DIRECT BANK SETTLEMENT • ZERO MIDDLEMAN ACCOUNT REMITTANCE</text>
    </g>
  </g>

  <!-- Dynamic Direction Arrow 2 -->
  <g transform="translate(1265, 540)">
    <circle cx="18" cy="18" r="18" fill="#06231c" stroke="#10b981" stroke-width="2" />
    <path d="M 14 10 L 22 18 L 14 26" fill="none" stroke="#34d399" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </g>

  <!-- PANEL 3: COMPLETE LEGAL CLOSURE (POST-SETTLEMENT) -->
  <g transform="translate(1300, 230)">
    <!-- Panel Container -->
    <rect width="535" height="675" rx="22" fill="url(#panelGreenGrad)" stroke="#10b981" stroke-width="1.8" />
    <path d="M 22 0 L 513 0" stroke="#10b981" stroke-width="4" stroke-linecap="round" />

    <!-- Panel Header Badge -->
    <g transform="translate(25, 25)">
      <rect width="210" height="32" rx="8" fill="#10b981" fill-opacity="0.18" stroke="#10b981" stroke-width="1.2" />
      <text x="105" y="21" text-anchor="middle" fill="#34d399" font-size="12" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" letter-spacing="1">PHASE 3 • LEGAL FREEDOM</text>
    </g>
    <text x="25" y="90" fill="#ffffff" font-size="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800">Total Legal &amp; Financial Discharge</text>
    <text x="25" y="112" fill="#a7f3d0" font-size="13" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">Permanent closure &amp; credit rehabilitation</text>

    <!-- Highlight Metric Card -->
    <g transform="translate(25, 130)">
      <rect width="485" height="85" rx="14" fill="url(#cardHighlightGreen)" stroke="#10b981" stroke-width="1" />
      <text x="25" y="38" fill="#34d399" font-size="12" font-weight="800" letter-spacing="1">DEBT DISCHARGE GUARANTEE</text>
      <text x="25" y="70" fill="#ffffff" font-size="28" font-weight="900">100% Final Closure</text>
      <text x="270" y="55" fill="#a7f3d0" font-size="13" font-weight="600">Zero Outstanding Dues</text>
      <text x="270" y="72" fill="#94a3b8" font-size="11">Authentic IndusInd Bank NOC</text>
    </g>

    <!-- 4 Deliverable Blocks -->
    <g transform="translate(25, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect width="485" height="82" rx="12" fill="#081a15" stroke="rgba(16,185,129,0.3)" stroke-width="1" />
        <circle cx="28" cy="28" r="14" fill="#10b981" fill-opacity="0.2" />
        <text x="28" y="35" text-anchor="middle" fill="#34d399" font-size="15" font-weight="900">✓</text>
        <text x="54" y="28" fill="#ffffff" font-size="15" font-weight="700">Official No Objection Certificate</text>
        <text x="54" y="48" fill="#cbd5e1" font-size="12" font-weight="400">Authentic IndusInd letterhead closure confirming zero liability</text>
        <text x="54" y="65" fill="#94a3b8" font-size="11">Issued under regulatory compliance within 30 to 45 business days</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 95)">
        <rect width="485" height="82" rx="12" fill="#081a15" stroke="rgba(16,185,129,0.3)" stroke-width="1" />
        <circle cx="28" cy="28" r="14" fill="#10b981" fill-opacity="0.2" />
        <text x="28" y="35" text-anchor="middle" fill="#34d399" font-size="15" font-weight="900">✓</text>
        <text x="54" y="28" fill="#ffffff" font-size="15" font-weight="700">Permanent Notice Withdrawal</text>
        <text x="54" y="48" fill="#cbd5e1" font-size="12" font-weight="400">Complete dismissal of Section 25 PSSA &amp; arbitration claims</text>
        <text x="54" y="65" fill="#94a3b8" font-size="11">Non-appealable Lok Adalat judicial award under Section 21</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 190)">
        <rect width="485" height="82" rx="12" fill="#081a15" stroke="rgba(16,185,129,0.3)" stroke-width="1" />
        <circle cx="28" cy="28" r="14" fill="#10b981" fill-opacity="0.2" />
        <text x="28" y="35" text-anchor="middle" fill="#34d399" font-size="15" font-weight="900">✓</text>
        <text x="54" y="28" fill="#ffffff" font-size="15" font-weight="700">Core Banking Ledger Zeroing</text>
        <text x="54" y="48" fill="#cbd5e1" font-size="12" font-weight="400">Total liability reset to ₹0 in IndusInd Core Banking System</text>
        <text x="54" y="65" fill="#94a3b8" font-size="11">Complete shield against future Asset Reconstruction Company sale</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(0, 285)">
        <rect width="485" height="82" rx="12" fill="#081a15" stroke="rgba(16,185,129,0.3)" stroke-width="1" />
        <circle cx="28" cy="28" r="14" fill="#10b981" fill-opacity="0.2" />
        <text x="28" y="35" text-anchor="middle" fill="#34d399" font-size="15" font-weight="900">✓</text>
        <text x="54" y="28" fill="#ffffff" font-size="15" font-weight="700">CIBIL Bureau Reset to 'Settled'</text>
        <text x="54" y="48" fill="#cbd5e1" font-size="12" font-weight="400">Halts recurring DPD erosion; zero balance reported to bureaus</text>
        <text x="54" y="65" fill="#94a3b8" font-size="11">Path to 750+ score &amp; Section 21 CICRA conversion to 'Closed'</text>
      </g>
    </g>

    <!-- Bottom Status Strip -->
    <g transform="translate(25, 620)">
      <rect width="485" height="34" rx="8" fill="#10b981" fill-opacity="0.12" />
      <text x="242" y="22" text-anchor="middle" fill="#34d399" font-size="11.5" font-weight="700" letter-spacing="0.5">FINALITY: COMPLETE IMMUNITY FROM FUTURE RECOVERY AGENTS</text>
    </g>
  </g>

  <!-- ================= BOTTOM REGULATORY CITATIONS FOOTER ================= -->
  <g transform="translate(85, 935)">
    <rect width="1750" height="75" rx="16" fill="#091428" stroke="rgba(255,255,255,0.12)" stroke-width="1.2" />
    
    <g transform="translate(30, 22)">
      <text x="0" y="16" fill="#38bdf8" font-size="11.5" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" letter-spacing="1.2">STATUTORY AUTHORITIES &amp; GOVERNING FRAMEWORKS:</text>
      <text x="0" y="38" fill="#cbd5e1" font-size="13" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="500">RBI Master Direction on Stressed Assets • Payment &amp; Settlement Systems Act Sec 25 • Legal Services Authorities Act Sec 21 • CICRA 2005 Sec 21</text>
    </g>

    <g transform="translate(1520, 18)">
      <rect width="200" height="40" rx="10" fill="#1886ff" fill-opacity="0.18" stroke="#1886ff" stroke-width="1.2" />
      <text x="100" y="25" text-anchor="middle" fill="#ffffff" font-size="14" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" letter-spacing="0.5">credsettle.com</text>
    </g>
  </g>

</svg>
`;

const outputPath = path.join(__dirname, '../public/images/infographics/indusind-bank-personal-loan-settlement.jpg');

sharp(Buffer.from(svg))
  .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
  .toFile(outputPath)
  .then(() => {
    console.log('Successfully generated new modern infographic at:', outputPath);
  })
  .catch((err) => {
    console.error('Error generating infographic:', err);
    process.exit(1);
  });
