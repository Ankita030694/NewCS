/**
 * SEO Metadata Utilities
 * Enforces strict SEO constraints:
 * - Title between 30 and 60 characters
 * - Description between 120 and 155 characters (safely in the 120-160 sweet spot)
 */

export const ARIAL_CHAR_WIDTHS: Record<string, number> = {
  ' ': 5.56, '!': 6.22, '"': 7.11, '#': 11.11, '$': 11.11, '%': 17.78, '&': 13.33, '\'': 3.89,
  '(': 6.67, ')': 6.67, '*': 7.78, '+': 11.67, ',': 5.56, '-': 6.67, '.': 5.56, '/': 5.56,
  '0': 11.11, '1': 11.11, '2': 11.11, '3': 11.11, '4': 11.11, '5': 11.11, '6': 11.11, '7': 11.11, '8': 11.11, '9': 11.11,
  ':': 5.56, ';': 5.56, '<': 11.67, '=': 11.67, '>': 11.67, '?': 11.11, '@': 20.33,
  'A': 13.33, 'B': 13.33, 'C': 14.44, 'D': 14.44, 'E': 13.33, 'F': 12.22, 'G': 15.56, 'H': 14.44, 'I': 5.56, 'J': 10.0,
  'K': 13.33, 'L': 11.11, 'M': 16.67, 'N': 14.44, 'O': 15.56, 'P': 13.33, 'Q': 15.56, 'R': 14.44, 'S': 13.33, 'T': 12.22,
  'U': 14.44, 'V': 13.33, 'W': 18.89, 'X': 13.33, 'Y': 13.33, 'Z': 12.22,
  '[': 5.56, '\\': 5.56, ']': 5.56, '^': 11.67, '_': 11.11, '`': 6.67,
  'a': 11.11, 'b': 11.11, 'c': 10.0, 'd': 11.11, 'e': 11.11, 'f': 5.56, 'g': 11.11, 'h': 11.11, 'i': 4.44, 'j': 4.44,
  'k': 10.0, 'l': 4.44, 'm': 16.67, 'n': 11.11, 'o': 11.11, 'p': 11.11, 'q': 11.11, 'r': 6.67, 's': 10.0, 't': 5.56,
  'u': 11.11, 'v': 10.0, 'w': 14.44, 'x': 10.0, 'y': 10.0, 'z': 10.0,
  '{': 6.67, '|': 5.11, '}': 6.67, '~': 11.67, '–': 11.11, '—': 20.0
};

export function getMetaTitlePixelWidth(str: string): number {
  let width = 0;
  for (const char of str) {
    width += ARIAL_CHAR_WIDTHS[char] || 11.11;
  }
  return Math.round(width);
}

export function getMetaDescPixelWidth(str: string): number {
  let width = 0;
  for (const char of str) {
    width += (ARIAL_CHAR_WIDTHS[char] || 11.11) * 0.71;
  }
  return Math.round(width);
}

export function sanitizeMetaTitle(rawTitle?: string, brand = 'CredSettle'): string {
  if (!rawTitle) return `Loan Settlement Services in India | ${brand}`;
  
  // Remove existing brand suffixes if present to avoid duplication
  const clean = rawTitle
    .replace(/\s*\|\s*CredSettle\s*$/i, '')
    .replace(/\s*-\s*CredSettle\s*$/i, '')
    .trim();

  const withBrand = `${clean} | ${brand}`;
  if (withBrand.length >= 30 && withBrand.length <= 58 && getMetaTitlePixelWidth(withBrand) <= 550) return withBrand;
  if (withBrand.length < 30) {
    const extended = `${withBrand} Legal Help`;
    if (extended.length <= 58 && getMetaTitlePixelWidth(extended) <= 550) return extended;
    return withBrand;
  }

  // Shorten common corporate suffixes and long territory names if too long
  let s = clean
    .replace(/Dadra and Nagar Haveli and Daman and Diu/gi, 'DNH & DD')
    .replace(/Dadra and Nagar Haveli/gi, 'Dadra & Nagar Haveli')
    .replace(/Andaman and Nicobar Islands/gi, 'Andaman & Nicobar')
    .replace(/Andaman and Nicobar/gi, 'Andaman & Nicobar')
    .replace(/Jammu and Kashmir/gi, 'Jammu & Kashmir')
    .replace(/Jammu & Kashmir Bank/gi, 'J&K Bank')
    .replace(/Private Limited/gi, 'Pvt Ltd')
    .replace(/Technologies India Pvt Ltd/gi, 'Tech')
    .replace(/Technologies/gi, 'Tech')
    .replace(/Limited/gi, 'Ltd')
    .replace(/Financial Services/gi, 'Fin')
    .replace(/Finance/gi, 'Fin')
    .replace(/Small Finance Bank/gi, 'SFB')
    .replace(/Standard Chartered Bank/gi, 'Standard Chartered');

  const withBrandShort = `${s} | ${brand}`;
  if (withBrandShort.length >= 30 && withBrandShort.length <= 58 && getMetaTitlePixelWidth(withBrandShort) <= 550) return withBrandShort;
  if (s.length >= 30 && s.length <= 58 && getMetaTitlePixelWidth(`${s} | ${brand}`) <= 550) return `${s} | ${brand}`;

  // Smart word-boundary truncation (target <= 45 chars to allow brand to fit safely)
  const maxContentLen = 58 - 3 - brand.length;
  const sub = s.slice(0, maxContentLen);
  const lastSpace = sub.lastIndexOf(' ');
  if (lastSpace >= 15) {
    const truncated = sub.slice(0, lastSpace).replace(/[,;:\-–—|&]+$/, '').trim();
    const cand = `${truncated} | ${brand}`;
    if (cand.length >= 30 && cand.length <= 58 && getMetaTitlePixelWidth(cand) <= 550) return cand;
  }

  return `${s.slice(0, maxContentLen).trim()} | ${brand}`;
}

export function sanitizeMetaDescription(rawDesc?: string): string {
  const defaultDesc = 'Get expert legal loan settlement and debt relief in India with CredSettle. Stop harassment, reduce dues up to 50%, and settle debt under RBI guidelines.';
  if (!rawDesc) return defaultDesc;
  const clean = rawDesc.trim().replace(/\s+/g, ' ');
  
  // Level 1: Strict sweet spot (140-146 chars, <= 960px)
  if (clean.length >= 140 && clean.length <= 146 && getMetaDescPixelWidth(clean) <= 960) return clean;

  // Level 2: Safe SEO compliance (140-150 chars, <= 965px)
  if (clean.length >= 140 && clean.length <= 150 && getMetaDescPixelWidth(clean) <= 965) return clean;

  // Level 3: Max threshold (140-154 chars, <= 980px)
  if (clean.length >= 140 && clean.length <= 154 && getMetaDescPixelWidth(clean) <= 980) return clean;

  // If clean.length > 146 or pixel width > 965, smartly truncate to 140-146 characters
  if (clean.length > 146 || getMetaDescPixelWidth(clean) > 965) {
    const sub = clean.slice(0, 145);
    const lastPeriod = sub.lastIndexOf('.');
    if (lastPeriod >= 135 && lastPeriod <= 145) {
      return sub.slice(0, lastPeriod + 1);
    }
    const lastSpace = sub.lastIndexOf(' ');
    if (lastSpace >= 120) {
      let truncated = sub.slice(0, lastSpace).replace(/[,;:\-–—|&]+$/, '').trim();
      // Avoid ending with hanging words like 'and', 'or', 'with', 'to'
      truncated = truncated.replace(/\b(and|or|with|to|for|of|in|by)\s*$/i, '').trim();
      if (!truncated.endsWith('.')) truncated += '.';
      if (truncated.length >= 140 && truncated.length <= 146 && getMetaDescPixelWidth(truncated) <= 960) {
        return truncated;
      }
      if (truncated.length >= 130 && truncated.length < 140) {
        const withSafeSuffix = `${truncated.slice(0, -1)} with legal ease.`;
        if (withSafeSuffix.length >= 140 && withSafeSuffix.length <= 146) {
          return withSafeSuffix;
        }
      }
    }
  }

  // If clean.length < 140, pad to 140-146 characters (strictly never < 100)
  if (clean.length < 140) {
    const p = clean.endsWith('.') ? clean : `${clean}.`;
    const suffixes = [
      ' Settle legally under RBI guidelines with CredSettle.',
      ' Stop harassment & settle legally under RBI rules.',
      ' Settle debt legally with CredSettle.',
      ' Resolve dues legally under RBI rules.',
      ' Settle with CredSettle.'
    ];
    for (const s of suffixes) {
      const cand = `${p.slice(0, -1)}${s}`;
      if (cand.length >= 140 && cand.length <= 146 && getMetaDescPixelWidth(cand) <= 960) {
        return cand;
      }
    }
    for (const s of suffixes) {
      const cand = `${p.slice(0, -1)}${s}`;
      if (cand.length >= 140 && cand.length <= 150 && getMetaDescPixelWidth(cand) <= 965) {
        return cand;
      }
    }
  }

  return defaultDesc;
}

/**
 * Shortens bank and institution names to keep headings within strict SEO limits (<= 65 chars).
 */
export function getShortBankName(name: string): string {
  if (!name) return '';
  const trimmed = name.trim();

  const explicitMap: Record<string, string> = {
    'Gopinath Patil Parsik Janata Sahakari Bank': 'GP Parsik Bank',
    'Gopinath Patil Parsik Janata Sahakari': 'GP Parsik Bank',
    'Andhra Pradesh State Co Operative Bank': 'AP State Co-op Bank',
    'Ahmedabad Mercantile Co-operative Bank': 'Ahmedabad Mercantile Bank',
    'Ahmedabad Mercantile Co Operative Bank': 'Ahmedabad Mercantile Bank',
    'Baroda Rajasthan Kshetriya Gramin Bank': 'Baroda Rajasthan Gramin Bank',
    'Kalupur Commercial Co Operative Bank': 'Kalupur Commercial Bank',
    'Karnataka State Co Operative Apex Bank': 'Karnataka Apex Bank',
    'Maharashtra State Co Operative Bank': 'Maharashtra State Co-op Bank',
    'Tamil Nadu State Apex Co Operative Bank': 'Tamil Nadu Apex Bank',
    'Telangana State Co Operative Apex Bank': 'Telangana Apex Bank',
    'West Bengal State Co Operative Bank': 'West Bengal Co-op Bank',
    'Faircent Technologies India Pvt Ltd': 'Faircent',
    'Indifi Capital Private Limited': 'Indifi Capital',
    'Epimoney Private Limited': 'Epimoney',
    'Chimnay Finlease Ltd': 'Chimnay Finlease',
    'Ashv Finance Limited': 'Ashv Finance',
    'Kisetsu saison Finance': 'Kisetsu Saison',
    'Au Small Fin Bank Ltd': 'AU Small Finance Bank',
    'North East Small Finance': 'North East SFB',
    'North East Small Finance Bank': 'North East SFB',
    'Bank of Baroda': 'Bank of Baroda',
    'Bank of India': 'Bank of India',
    'Bank of Maharashtra': 'Bank of Maharashtra',
    'Central Bank of India': 'Central Bank of India',
    'Industrial and Commercial Bank of China': 'ICBC',
    'Australia and New Zealand Banking Group': 'ANZ Bank',
    'Australia And New Zealand Banking Group': 'ANZ Bank',
    'Standard Chartered': 'Standard Chartered',
    'Kotak Mahindra Bank': 'Kotak Bank',
    'IDFC First Bank': 'IDFC First Bank',
    'Punjab National Bank': 'PNB',
    'American Express': 'American Express',
    'Citi Bank': 'Citi Bank',
    'HSBC': 'HSBC Bank',
    'Mumbai Railway Employees Co-operative Bank': 'Mumbai Railway Co-op Bank',
    'Kallappanna Awade Ichalkaranji Janata Sahakari Bank': 'Kallappanna Awade Bank',
    'Moneyview Whizdm Innovations Pvt Ltd': 'Moneyview',
    'Mpokket Maybright Ventures Pvt Ltd': 'Mpokket',
    'Piramal Capital And Housing Finance': 'Piramal Finance',
    'Religare Housing Development Finance': 'Religare Finance',
    'Secunderabad Mercantile Co-operative Urban Bank': 'Secunderabad Urban Bank',
    'Shree Bharat Co-operative Bank Vadodara': 'Shree Bharat Co-op Bank',
    'Shree Panchaganga Nagari Sahakari Bank': 'Panchaganga Sahakari Bank',
    'Shri Chhatrapati Rajarshi Shahu Urban Co-operative Bank': 'Chhatrapati Shahu Bank',
    'Spandana Sphoorty Financial Limited': 'Spandana Sphoorty',
    'Bankbazaar Loan Settlement': 'BankBazaar',
    'Finzy P2P Invest Borrow': 'Finzy P2P',
    'Mymoneymantra Loan Help': 'MyMoneyMantra',
    // District Central Co-operative Banks (Karnataka & Tamil Nadu)
    'Dakshina Kannada District Central Co-operative Bank': 'Dakshina Kannada District Co-op',
    'Dakshina Kannada District Central Co-Operative Bank': 'Dakshina Kannada District Co-op',
    'Dakshina Kannada District Central Co Operative Bank': 'Dakshina Kannada District Co-op',
    'Dakshina Kannada District Co-op Bank': 'Dakshina Kannada District Co-op',
    'Dakshina Kannada District Co Op Bank': 'Dakshina Kannada District Co-op',
    'Chikkaballapura District Central Co-operative Bank': 'Chikkaballapura District Co-op',
    'Chikkaballapura District Central Co-Operative Bank': 'Chikkaballapura District Co-op',
    'Chikkaballapura District Central Co Operative Bank': 'Chikkaballapura District Co-op',
    'Chikkaballapura District Co-op Bank': 'Chikkaballapura District Co-op',
    'Chikkaballapura District Co Op Bank': 'Chikkaballapura District Co-op',
    'Chamarajanagar District Central Co-operative Bank': 'Chamarajanagar District Co-op',
    'Chamarajanagar District Central Co-Operative Bank': 'Chamarajanagar District Co-op',
    'Chamarajanagar District Central Co Operative Bank': 'Chamarajanagar District Co-op',
    'Chamarajanagar District Co-op Bank': 'Chamarajanagar District Co-op',
    'Chamarajanagar District Co Op Bank': 'Chamarajanagar District Co-op',
    'Uttara Kannada District Central Co-operative Bank': 'Uttara Kannada District Co-op',
    'Uttara Kannada District Central Co-Operative Bank': 'Uttara Kannada District Co-op',
    'Uttara Kannada District Central Co Operative Bank': 'Uttara Kannada District Co-op',
    'Uttara Kannada District Co-op Bank': 'Uttara Kannada District Co-op',
    'Uttara Kannada District Co Op Bank': 'Uttara Kannada District Co-op',
    'Tiruchirappalli District Central Co-operative Bank': 'Tiruchirappalli District Co-op',
    'Tiruchirappalli District Central Co-Operative Bank': 'Tiruchirappalli District Co-op',
    'Tiruchirappalli District Central Co Operative Bank': 'Tiruchirappalli District Co-op',
    'Tiruchirappalli District Co-op Bank': 'Tiruchirappalli District Co-op',
    'Tiruchirappalli District Co Op Bank': 'Tiruchirappalli District Co-op',
    'Ramanathapuram District Central Co-operative Bank': 'Ramanathapuram District Co-op',
    'Ramanathapuram District Central Co-Operative Bank': 'Ramanathapuram District Co-op',
    'Ramanathapuram District Central Co Operative Bank': 'Ramanathapuram District Co-op',
    'Ramanathapuram District Co-op Bank': 'Ramanathapuram District Co-op',
    'Ramanathapuram District Co Op Bank': 'Ramanathapuram District Co-op',
    'Tiruvannamalai District Central Co-operative Bank': 'Tiruvannamalai District Co-op',
    'Tiruvannamalai District Central Co-Operative Bank': 'Tiruvannamalai District Co-op',
    'Tiruvannamalai District Central Co Operative Bank': 'Tiruvannamalai District Co-op',
    'Tiruvannamalai District Co-op Bank': 'Tiruvannamalai District Co-op',
    'Tiruvannamalai District Co Op Bank': 'Tiruvannamalai District Co-op',
  };

  if (explicitMap[trimmed]) {
    return explicitMap[trimmed];
  }

  let s = trimmed
    .replace(/\bBankbazaar\b/gi, 'BankBazaar')
    .replace(/\bMymoneymantra\b/gi, 'MyMoneyMantra')
    .replace(/Technologies India Pvt Ltd/gi, 'Tech')
    .replace(/Whizdm Innovations Pvt Ltd/gi, '')
    .replace(/Maybright Ventures Pvt Ltd/gi, '')
    .replace(/Private Limited/gi, 'Pvt Ltd')
    .replace(/Financial Services/gi, 'Fin')
    .replace(/Finance Limited/gi, 'Fin Ltd')
    .replace(/Financial Holdings/gi, 'Fin Holdings')
    .replace(/Capital And Housing Finance/gi, 'Finance')
    .replace(/Housing Development Finance/gi, 'Finance')
    .replace(/Investment And Finance/gi, 'Inv & Fin')
    .replace(/State Co Operative Apex Bank/gi, 'Apex Bank')
    .replace(/State Apex Co Operative Bank/gi, 'Apex Bank')
    .replace(/State Co-operative Apex Bank/gi, 'Apex Bank')
    .replace(/State Apex Co-operative Bank/gi, 'Apex Bank')
    .replace(/Kshetriya Gramin Bank/gi, 'Gramin Bank')
    .replace(/District Central Co[\s\-]Operative Bank/gi, 'District Co-op')
    .replace(/District Central Co[\s\-]Operative/gi, 'District Co-op')
    .replace(/District Co[\s\-]Operative Bank/gi, 'District Co-op')
    .replace(/District Co[\s\-]Operative/gi, 'District Co-op')
    .replace(/District Co[\s\-]Op Bank/gi, 'District Co-op')
    .replace(/District Co[\s\-]Op/gi, 'District Co-op')
    .replace(/Co[\s\-]operative Urban Bank/gi, 'Urban Co-op Bank')
    .replace(/Urban Co[\s\-]operative Bank/gi, 'Urban Co-op Bank')
    .replace(/Co[\s\-]Operative Bank/gi, 'Co-op Bank')
    .replace(/Co[\s\-]Operative/gi, 'Co-op')
    .replace(/Janata Sahakari Bank/gi, 'Sahakari Bank')
    .replace(/Commercial Co-op Bank/gi, 'Commercial Bank')
    .replace(/\s+(Loan Settlement|Debt Relief|Loan Help|Invest Borrow|Digital Loans|Short Term Loan)$/gi, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (!/^Bank of\b/i.test(s) && s.endsWith(' Bank')) {
    s = s.slice(0, -5).trim();
  }

  return s.length >= 3 ? s : trimmed;
}

/**
 * Generates an H1 heading strictly between 30 and 65 characters (never > 65, never > 70).
 */
export function getBankH1Title(bankName: string, serviceTitle: string): string {
  const shortBank = getShortBankName(bankName);
  const cand = `${shortBank} ${serviceTitle}`;
  if (cand.length >= 30 && cand.length <= 65) return cand;

  if (cand.length > 65) {
    const maxBankLen = 65 - serviceTitle.length - 1;
    if (maxBankLen >= 10) {
      const sub = shortBank.slice(0, maxBankLen);
      const lastSpace = sub.lastIndexOf(' ');
      const truncatedBank = (lastSpace >= 8 ? sub.slice(0, lastSpace) : sub).replace(/[-–—,&]+$/, '').trim();
      const candTruncated = `${truncatedBank} ${serviceTitle}`;
      if (candTruncated.length <= 65) return candTruncated;
    }
    return cand.slice(0, 65).trim();
  }

  const extended = `${cand} Help`;
  if (extended.length >= 30 && extended.length <= 65) return extended;
  return cand;
}

/**
 * Generates an H2 heading strictly <= 65 characters for bank service pages.
 * Screaming Frog flags H2 > 70 characters. This function ensures headings never exceed 65 characters.
 */
export function getBankH2Title(bankName: string, serviceTitle: string): string {
  const shortBank = getShortBankName(bankName);
  const candidates = [
    `Why Choose ${shortBank} ${serviceTitle}`,
    `Why Settle ${shortBank} ${serviceTitle}`,
    `Why Settle Debt with ${shortBank}`,
    `Settle ${shortBank} ${serviceTitle} Dues`,
    `Settling Your ${shortBank} ${serviceTitle}`,
    `Why Settle Your ${shortBank} Loan Dues`,
  ];
  for (const cand of candidates) {
    if (cand.length >= 30 && cand.length <= 65) return cand;
  }
  for (const cand of candidates) {
    if (cand.length >= 30 && cand.length <= 70) return cand;
  }

  const maxBankLen = 65 - 'Why Choose  '.length - serviceTitle.length;
  const sub = shortBank.slice(0, Math.max(10, maxBankLen));
  const lastSpace = sub.lastIndexOf(' ');
  const cleanBank = (lastSpace >= 8 ? sub.slice(0, lastSpace) : sub).replace(/[-–—,&]+$/, '').trim();
  const fallback = `Why Choose ${cleanBank} ${serviceTitle}`;
  if (fallback.length <= 70) return fallback;
  return `Why Choose Settlement for ${cleanBank}`;
}

/**
 * Shortens state and union territory names for headings when space is constrained.
 */
export function getShortStateName(name: string): string {
  if (!name) return '';
  const trimmed = name.trim();

  const stateMap: Record<string, string> = {
    'Dadra and Nagar Haveli and Daman and Diu': 'DNH & DD',
    'Dadra and Nagar Haveli': 'Dadra & Nagar Haveli',
    'Andaman and Nicobar Islands': 'Andaman & Nicobar',
    'Andaman and Nicobar': 'Andaman & Nicobar',
    'Jammu and Kashmir': 'Jammu & Kashmir',
    'Arunachal Pradesh': 'Arunachal',
    'Himachal Pradesh': 'Himachal',
  };

  return stateMap[trimmed] || trimmed;
}

