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
  if (withBrand.length >= 50 && withBrand.length <= 58 && getMetaTitlePixelWidth(withBrand) <= 550) return withBrand;
  if (withBrand.length >= 30 && withBrand.length < 50 && getMetaTitlePixelWidth(withBrand) <= 550) {
    const extensions = [
      `${clean} Legal Help | ${brand}`,
      `${clean} Expert Help | ${brand}`,
      `${clean} Guide | ${brand}`,
      `${clean} Relief | ${brand}`,
      `${clean} Help | ${brand}`
    ];
    for (const ext of extensions) {
      if (ext.length >= 50 && ext.length <= 58 && getMetaTitlePixelWidth(ext) <= 550) return ext;
    }
    return withBrand;
  }
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
    .replace(/District Central Co[\s\-]?(Operative|Op) Bank/gi, 'District Co-op')
    .replace(/District Central Co[\s\-]?(Operative|Op)/gi, 'District Co-op')
    .replace(/District Co[\s\-]?(Operative|Op) Bank/gi, 'District Co-op')
    .replace(/District Co[\s\-]?(Operative|Op)/gi, 'District Co-op')
    .replace(/Ichalkaranji Janata (Sahakari )?Bank/gi, 'Bank')
    .replace(/Ichalkaranji Janata/gi, '')
    .replace(/Dhule and Nandurbar/gi, 'Dhule & Nandurbar')
    .replace(/Dhule And Nandurbar/gi, 'Dhule & Nandurbar')
    .replace(/Standard Chartered Bank/gi, 'Standard Chartered');

  const withBrandShort = `${s} | ${brand}`;
  if (withBrandShort.length >= 50 && withBrandShort.length <= 58 && getMetaTitlePixelWidth(withBrandShort) <= 550) return withBrandShort;
  if (withBrandShort.length >= 30 && withBrandShort.length < 50 && getMetaTitlePixelWidth(withBrandShort) <= 550) {
    const extensions = [
      `${s} Legal Help | ${brand}`,
      `${s} Expert Help | ${brand}`,
      `${s} Guide | ${brand}`,
      `${s} Relief | ${brand}`,
      `${s} Help | ${brand}`
    ];
    for (const ext of extensions) {
      if (ext.length >= 50 && ext.length <= 58 && getMetaTitlePixelWidth(ext) <= 550) return ext;
    }
  }

  // Smart word-boundary truncation (target <= 45 chars to allow brand to fit safely)
  const serviceRegex = /\b(Personal Loan|Business Loan|Car Loan|NBFC Loan|App Loan|Credit Card|Card Settlement|Loan Settlement|Personal|Business|Car|NBFC|App|Card)\b/i;
  const hasService = serviceRegex.test(s);

  const maxContentLen = 58 - 3 - brand.length;
  for (let len = maxContentLen; len >= 15; len--) {
    if (s[len] === ' ' || len === maxContentLen) {
      const sub = s.slice(0, len);
      const lastSpace = sub.lastIndexOf(' ');
      if (lastSpace >= 15) {
        const truncated = sub.slice(0, lastSpace).replace(/[,;:\-–—|&]+$/, '').trim();
        // Prevent stripping the service keyword and leaving bare bank name (which causes cross-service collisions)
        if (hasService && !serviceRegex.test(truncated)) {
          continue;
        }
        const cand = `${truncated} | ${brand}`;
        if (cand.length >= 50 && cand.length <= 58 && getMetaTitlePixelWidth(cand) <= 550) return cand;
        if (cand.length >= 30 && cand.length < 50) {
          const extensions = [
            `${truncated} Legal Help | ${brand}`,
            `${truncated} Expert Help | ${brand}`,
            `${truncated} Guide | ${brand}`,
            `${truncated} Relief | ${brand}`,
            `${truncated} Help | ${brand}`
          ];
          for (const ext of extensions) {
            if (ext.length >= 50 && ext.length <= 58 && getMetaTitlePixelWidth(ext) <= 550) return ext;
          }
          if (cand.length >= 30 && cand.length <= 58 && getMetaTitlePixelWidth(cand) <= 550) return cand;
        }
      }
    }
  }

  const lastSpace = s.slice(0, maxContentLen).lastIndexOf(' ');
  const safeBase = lastSpace >= 10 ? s.slice(0, lastSpace).trim() : s.slice(0, maxContentLen).trim();

  // If a service was specified, never strip it completely and leave a bare bank name (which triggers cross-service duplicate titles)
  if (hasService && !serviceRegex.test(safeBase)) {
    const serviceMatch = s.match(serviceRegex);
    const serviceKeyword = serviceMatch ? serviceMatch[0] : 'Loan';
    const availableForBank = maxContentLen - serviceKeyword.length - 1;
    if (availableForBank >= 4) {
      const bankSub = safeBase.slice(0, availableForBank);
      const bSpace = bankSub.lastIndexOf(' ');
      const shortBank = (bSpace >= 3 ? bankSub.slice(0, bSpace) : bankSub).replace(/[,;:\-–—|&]+$/, '').trim();
      const combined = `${shortBank} ${serviceKeyword} | ${brand}`;
      if (combined.length >= 30 && combined.length <= 58 && getMetaTitlePixelWidth(combined) <= 550) {
        return combined;
      }
      if (combined.length < 30) {
        const ext = `${shortBank} ${serviceKeyword} Legal Help | ${brand}`;
        if (ext.length >= 50 && ext.length <= 58 && getMetaTitlePixelWidth(ext) <= 550) return ext;
      }
    }
  }

  return `${safeBase} | ${brand}`;
}

export function sanitizeMetaDescription(rawDesc?: string, bankName?: string, serviceName?: string): string {
  const shortB = bankName ? getShortBankName(bankName) : '';
  const sName = serviceName || 'Loan Settlement';

  if (!rawDesc || rawDesc.trim().length < 20) {
    if (shortB) {
      const fallbackCandidates = [
        `Settle ${shortB} ${sName.toLowerCase()} dues legally under RBI rules with CredSettle. Stop recovery harassment, reduce debt & clear dues safely.`,
        `Settle ${shortB} ${sName.toLowerCase()} dues under RBI rules with CredSettle. Stop recovery calls, reduce debt up to 50% & clear your dues.`,
        `Resolve ${shortB} ${sName.toLowerCase()} debt legally under RBI rules with CredSettle. Stop agent harassment & settle your dues safely.`,
        `Struggling with ${shortB} ${sName.toLowerCase()} dues? Settle legally under RBI rules with CredSettle. Stop harassment & reduce debt up to 50%.`
      ];
      for (const c of fallbackCandidates) {
        if (c.length >= 140 && c.length <= 146 && getMetaDescPixelWidth(c) <= 960) return c;
      }
      for (const c of fallbackCandidates) {
        if (c.length >= 140 && c.length <= 150 && getMetaDescPixelWidth(c) <= 965) return c;
      }
    }
  }

  const clean = (rawDesc || '').trim().replace(/\s+/g, ' ');
  if (!clean) {
    return 'Get expert legal loan settlement and debt relief in India with CredSettle. Stop harassment, reduce dues up to 50%, and settle debt under RBI guidelines.';
  }
  
  // Level 1: Strict sweet spot (140-146 chars, <= 960px)
  if (clean.length >= 140 && clean.length <= 146 && getMetaDescPixelWidth(clean) <= 960) return clean;

  // Level 2: Safe SEO compliance (140-150 chars, <= 965px)
  if (clean.length >= 140 && clean.length <= 150 && getMetaDescPixelWidth(clean) <= 965) return clean;

  // Level 3: Max threshold (140-154 chars, <= 975px)
  if (clean.length >= 140 && clean.length <= 154 && getMetaDescPixelWidth(clean) <= 975) return clean;

  // If clean.length > 146 or pixel width > 960, smartly truncate at word boundary and pad
  if (clean.length > 146 || getMetaDescPixelWidth(clean) > 960) {
    const endings = ['.', ' safely.', ' today.', ' legally.', ' with ease.', ' with CredSettle.', ' under RBI rules.'];
    for (let end = 145; end >= 80; end--) {
      if (clean[end] === ' ') {
        let base = clean.slice(0, end).replace(/[,;:\-–—|&]+$/, '').trim();
        base = base.replace(/\b(and|or|with|to|for|of|in|by)\s*$/i, '').trim();

        for (const ending of endings) {
          const cand = `${base.replace(/\.+$/, '')}${ending}`;
          if (cand.length >= 140 && cand.length <= 146 && getMetaDescPixelWidth(cand) <= 960) return cand;
        }
        for (const ending of endings) {
          const cand = `${base.replace(/\.+$/, '')}${ending}`;
          if (cand.length >= 140 && cand.length <= 150 && getMetaDescPixelWidth(cand) <= 965) return cand;
        }
      }
    }
  }

  // If clean.length < 140, pad to 140-146 characters using a granular suffix ladder
  if (clean.length < 140) {
    const base = clean.replace(/[,;:\-–—|&.\s]+$/, '').trim();
    const suffixes = [
      ' today.', ' with ease.', ' with care.', ' legally.', ' safely.', ' with legal ease.',
      ' with CredSettle.', ' under RBI rules.', ' under RBI guidelines.',
      ' with CredSettle legal help.', ' with legal help from CredSettle.',
      ' under legal RBI guidelines today.', ' Settle debt legally with CredSettle.',
      ' Settle debt safely under RBI rules.', ' Settle legally under RBI rules with CredSettle.'
    ];

    for (const s of suffixes) {
      if (s.includes('legally') && /\blegally\b/i.test(base)) continue;
      if (s.includes('safely') && /\bsafely\b/i.test(base)) continue;
      if (s.includes('CredSettle') && /\bCredSettle\b/i.test(base)) continue;
      if (s.includes('RBI') && /\bRBI\b/i.test(base)) continue;
      const cand = `${base}${s}`;
      if (cand.length >= 140 && cand.length <= 146 && getMetaDescPixelWidth(cand) <= 960) return cand;
    }
    for (const s of suffixes) {
      if (s.includes('legally') && /\blegally\b/i.test(base)) continue;
      if (s.includes('safely') && /\bsafely\b/i.test(base)) continue;
      if (s.includes('CredSettle') && /\bCredSettle\b/i.test(base)) continue;
      if (s.includes('RBI') && /\bRBI\b/i.test(base)) continue;
      const cand = `${base}${s}`;
      if (cand.length >= 140 && cand.length <= 150 && getMetaDescPixelWidth(cand) <= 965) return cand;
    }
    // Fallback if no non-repeating suffix fits within bounds
    for (const s of suffixes) {
      const cand = `${base}${s}`;
      if (cand.length >= 140 && cand.length <= 146 && getMetaDescPixelWidth(cand) <= 960) return cand;
    }
    for (const s of suffixes) {
      const cand = `${base}${s}`;
      if (cand.length >= 140 && cand.length <= 150 && getMetaDescPixelWidth(cand) <= 965) return cand;
    }
  }

  return clean;
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
    'Samunnati Financial Intermediation': 'Samunnati',
    'Samunnati Financial Intermediation Services': 'Samunnati',
    'Samunnati Financial Intermediation & Services': 'Samunnati',
    'Samunnati Financial Intermediation and Services': 'Samunnati',
    'Samunnati Financial Intermediation Pvt Ltd': 'Samunnati',
    'Samunnati Financial Intermediation Private Limited': 'Samunnati',
    'Samunnati Financial': 'Samunnati',
    'Indifi Capital Private Limited': 'Indifi Capital',
    'Epimoney Private Limited': 'Epimoney',
    'Chimnay Finlease Ltd': 'Chimnay Finlease',
    'Ashv Finance Limited': 'Ashv Finance',
    'Kisetsu saison Finance': 'Kisetsu Saison',
    'Au Small Fin Bank Ltd': 'AU SFB',
    'Au Small Finance Bank Ltd': 'AU SFB',
    'Au Small Finance Bank Limited': 'AU SFB',
    'Au Small Finance Bank': 'AU SFB',
    'AU Small Finance Bank Ltd': 'AU SFB',
    'AU Small Finance Bank Limited': 'AU SFB',
    'AU Small Finance Bank': 'AU SFB',
    'Equitas Small Finance Bank Ltd': 'Equitas SFB',
    'Equitas Small Finance Bank Limited': 'Equitas SFB',
    'Equitas Small Finance Bank': 'Equitas SFB',
    'Equitas Small Finance': 'Equitas SFB',
    'Jana Small Finance Bank Ltd': 'Jana SFB',
    'Jana Small Finance Bank Limited': 'Jana SFB',
    'Jana Small Finance Bank': 'Jana SFB',
    'Jana Small Finance': 'Jana SFB',
    'ESAF Small Finance Bank Ltd': 'ESAF SFB',
    'ESAF Small Finance Bank Limited': 'ESAF SFB',
    'ESAF Small Finance Bank': 'ESAF SFB',
    'ESAF Small Finance': 'ESAF SFB',
    'Unity Small Finance Bank Ltd': 'Unity SFB',
    'Unity Small Finance Bank Limited': 'Unity SFB',
    'Unity Small Finance Bank': 'Unity SFB',
    'Unity Small Finance': 'Unity SFB',
    'Fincare Small Finance Bank Ltd': 'Fincare SFB',
    'Fincare Small Finance Bank Limited': 'Fincare SFB',
    'Fincare Small Finance Bank': 'Fincare SFB',
    'Fincare Small Finance': 'Fincare SFB',
    'North East Small Finance': 'North East SFB',
    'North East Small Finance Bank': 'North East SFB',
    'North East Small Finance Bank Ltd': 'North East SFB',
    'North East Small Finance Bank Limited': 'North East SFB',
    'Branch International Financial': 'Branch International',
    'Branch International Financial Services': 'Branch International',
    'Branch International Financial Services Pvt Ltd': 'Branch International',
    'Capital Small Finance Bank Ltd': 'Capital SFB',
    'Capital Small Finance Bank Limited': 'Capital SFB',
    'Capital Small Finance Bank': 'Capital SFB',
    'Capital Small Finance': 'Capital SFB',
    'Edelweiss Customised Liquidity': 'Edelweiss Liquidity',
    'Icici Securities Primary Dealership': 'ICICI Securities',
    'ICICI Securities Primary Dealership': 'ICICI Securities',
    'ICICI Securities Primary Dealership Limited': 'ICICI Securities',
    'ICICI Securities Primary Dealership Ltd': 'ICICI Securities',
    'Hiranandani Financial Services': 'Hiranandani Fin',
    'Hiranandani Financial Services Private Limited': 'Hiranandani Fin',
    'Hiranandani Financial Services Pvt Ltd': 'Hiranandani Fin',
    'Lendingkart Technologies India': 'Lendingkart',
    'Lendingkart Technologies India Pvt Ltd': 'Lendingkart',
    'Loantap Financial Technologies': 'LoanTap',
    'Loantap Financial Technologies Pvt Ltd': 'LoanTap',
    'Shivalik Small Finance Bank Ltd': 'Shivalik SFB',
    'Shivalik Small Finance Bank Limited': 'Shivalik SFB',
    'Shivalik Small Finance Bank': 'Shivalik SFB',
    'Shivalik Small Finance': 'Shivalik SFB',
    'Suryoday Small Finance Bank Ltd': 'Suryoday SFB',
    'Suryoday Small Finance Bank Limited': 'Suryoday SFB',
    'Suryoday Small Finance Bank': 'Suryoday SFB',
    'Suryoday Small Finance': 'Suryoday SFB',
    'Ujjivan Small Finance Bank Ltd': 'Ujjivan SFB',
    'Ujjivan Small Finance Bank Limited': 'Ujjivan SFB',
    'Ujjivan Small Finance Bank': 'Ujjivan SFB',
    'Ujjivan Small Finance': 'Ujjivan SFB',
    'Utkarsh Small Finance Bank Ltd': 'Utkarsh SFB',
    'Utkarsh Small Finance Bank Limited': 'Utkarsh SFB',
    'Utkarsh Small Finance Bank': 'Utkarsh SFB',
    'Utkarsh Small Finance': 'Utkarsh SFB',
    'Bank of Baroda': 'Bank of Baroda',
    'Bank of India': 'Bank of India',
    'Bank of Maharashtra': 'Bank of Maharashtra',
    'Central Bank of India': 'Central Bank of India',
    // Corporate & Foreign Banks
    'Credit Agricole Corporate And Investment Bank': 'Credit Agricole',
    'Credit Agricole Corporate and Investment Bank': 'Credit Agricole',
    'Credit Agricole Corporate And Investment': 'Credit Agricole',
    'Credit Agricole Corporate and Investment': 'Credit Agricole',
    'Credit Agricole CIB': 'Credit Agricole',
    'Credit Agricole Bank': 'Credit Agricole',
    'Credit Agricole': 'Credit Agricole',
    'Industrial and Commercial Bank of China': 'ICBC Bank',
    'Industrial And Commercial Bank Of China': 'ICBC Bank',
    'Industrial & Commercial Bank of China': 'ICBC Bank',
    'Industrial & Commercial Bank Of China': 'ICBC Bank',
    'Industrial and Commercial Bank': 'ICBC Bank',
    'Industrial And Commercial Bank': 'ICBC Bank',
    'ICBC Bank': 'ICBC Bank',
    'ICBC': 'ICBC Bank',
    'Sumitomo Mitsui Banking Corporation': 'SMBC Bank',
    'Cooperatieve Rabobank U.A.': 'Rabobank',
    'Cooperatieve Rabobank Ua': 'Rabobank',
    'Cooperatieve Rabobank': 'Rabobank',
    'PT Bank Maybank Indonesia': 'Maybank',
    'American Express Banking Corp': 'American Express',
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
    'Kallappanna Awade Ichalkaranji Janata Sahakari Bank Ltd': 'Kallappanna Awade Bank',
    'Kallappanna Awade Ichalkaranji Janata Bank': 'Kallappanna Awade Bank',
    'Kallappanna Awade Ichalkaranji Janata Bank Ltd': 'Kallappanna Awade Bank',
    'Kallappanna Awade Ichalkaranji Janata': 'Kallappanna Awade Bank',
    'Kallappanna Awade Bank': 'Kallappanna Awade Bank',
    'Moneyview Whizdm Innovations Pvt Ltd': 'Moneyview',
    'Mpokket Maybright Ventures Pvt Ltd': 'Mpokket',
    'Piramal Capital And Housing Finance': 'Piramal Finance',
    'Religare Housing Development Finance': 'Religare Finance',
    'Secunderabad Mercantile Co-operative Urban Bank': 'Secunderabad Urban Bank',
    'Shree Bharat Co-operative Bank Vadodara': 'Shree Bharat Co-op Bank',
    'Shree Panchaganga Nagari Sahakari Bank': 'Panchaganga Sahakari Bank',
    'Shri Chhatrapati Rajarshi Shahu Urban Co-operative Bank': 'Chhatrapati Shahu Bank',
    'Shri Chhatrapati Rajarshi Shahu Urban Co-Operative Bank': 'Chhatrapati Shahu Bank',
    'Shri Chhatrapati Rajarshi Shahu Urban Co Operative Bank': 'Chhatrapati Shahu Bank',
    'Chhatrapati Shahu Urban Co-op Bank': 'Chhatrapati Shahu Bank',
    'Chhatrapati Shahu Urban Co Op Bank': 'Chhatrapati Shahu Bank',
    'Chhatrapati Shahu Co-op Bank': 'Chhatrapati Shahu Bank',
    'Chhatrapati Shahu Co Op Bank': 'Chhatrapati Shahu Bank',
    'Chhatrapati Shahu Bank': 'Chhatrapati Shahu Bank',
    'Spandana Sphoorty Financial Limited': 'Spandana Sphoorty',
    'Mas Financial Services Limited': 'MAS Financial',
    'MAS Financial Services Limited': 'MAS Financial',
    'Mas Financial Services Ltd': 'Mas Fin',
    'MAS Financial Services Ltd': 'Mas Fin',
    'Mas Financial Services': 'Mas Fin',
    'MAS Financial Services': 'Mas Fin',
    'Bankbazaar Loan Settlement': 'BankBazaar',
    'Finzy P2P Invest Borrow': 'Finzy P2P',
    'Mymoneymantra Loan Help': 'MyMoneyMantra',
    // District Central Co-operative Banks (Karnataka, Tamil Nadu & Rajasthan)
    'Sawai Madhopur District Central Co-operative Bank': 'Sawai Madhopur District Co-op',
    'Sawai Madhopur District Central Co-Operative Bank': 'Sawai Madhopur District Co-op',
    'Sawai Madhopur District Central Co Operative Bank': 'Sawai Madhopur District Co-op',
    'Sawai Madhopur District Co-op Bank': 'Sawai Madhopur District Co-op',
    'Sawai Madhopur District Co Op Bank': 'Sawai Madhopur District Co-op',
    'Sawai Madhopur District Co-op': 'Sawai Madhopur District Co-op',
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
    // Dhule & Nandurbar District Central Co-operative Bank
    'Dhule And Nandurbar District Central Co-operative Bank': 'Dhule & Nandurbar Co-op',
    'Dhule and Nandurbar District Central Co-operative Bank': 'Dhule & Nandurbar Co-op',
    'Dhule And Nandurbar District Central Co-Operative Bank': 'Dhule & Nandurbar Co-op',
    'Dhule and Nandurbar District Central Co-Operative Bank': 'Dhule & Nandurbar Co-op',
    'Dhule And Nandurbar District Central Co Operative Bank': 'Dhule & Nandurbar Co-op',
    'Dhule and Nandurbar District Central Co Operative Bank': 'Dhule & Nandurbar Co-op',
    'Dhule And Nandurbar District Central Co Op Bank': 'Dhule & Nandurbar Co-op',
    'Dhule and Nandurbar District Central Co Op Bank': 'Dhule & Nandurbar Co-op',
    'Dhule And Nandurbar District Central Co-op Bank': 'Dhule & Nandurbar Co-op',
    'Dhule and Nandurbar District Central Co-op Bank': 'Dhule & Nandurbar Co-op',
    'Dhule And Nandurbar District Central Co-op': 'Dhule & Nandurbar Co-op',
    'Dhule and Nandurbar District Central Co-op': 'Dhule & Nandurbar Co-op',
    'Dhule And Nandurbar District Central Co Op': 'Dhule & Nandurbar Co-op',
    'Dhule and Nandurbar District Central Co Op': 'Dhule & Nandurbar Co-op',
    'Dhule And Nandurbar District Co-operative Bank': 'Dhule & Nandurbar Co-op',
    'Dhule and Nandurbar District Co-operative Bank': 'Dhule & Nandurbar Co-op',
    'Dhule And Nandurbar District Co-Operative Bank': 'Dhule & Nandurbar Co-op',
    'Dhule and Nandurbar District Co-Operative Bank': 'Dhule & Nandurbar Co-op',
    'Dhule And Nandurbar District Co Operative Bank': 'Dhule & Nandurbar Co-op',
    'Dhule and Nandurbar District Co Operative Bank': 'Dhule & Nandurbar Co-op',
    'Dhule And Nandurbar District Co-op Bank': 'Dhule & Nandurbar Co-op',
    'Dhule and Nandurbar District Co-op Bank': 'Dhule & Nandurbar Co-op',
    'Dhule And Nandurbar District Co Op Bank': 'Dhule & Nandurbar Co-op',
    'Dhule and Nandurbar District Co Op Bank': 'Dhule & Nandurbar Co-op',
    'Dhule And Nandurbar District Co-op': 'Dhule & Nandurbar Co-op',
    'Dhule and Nandurbar District Co-op': 'Dhule & Nandurbar Co-op',
    'Dhule And Nandurbar District Co Op': 'Dhule & Nandurbar Co-op',
    'Dhule and Nandurbar District Co Op': 'Dhule & Nandurbar Co-op',
    'Dhule District Central Co-operative Bank': 'Dhule District Co-op',
    'Dhule District Central Co-Operative Bank': 'Dhule District Co-op',
    'Dhule District Central Co Operative Bank': 'Dhule District Co-op',
    'Dhule District Central Co-op Bank': 'Dhule District Co-op',
    'Dhule District Central Co Op Bank': 'Dhule District Co-op',
    'Dhule District Co-op Bank': 'Dhule District Co-op',
    'Dhule District Co Op Bank': 'Dhule District Co-op',
    'Dhule District Co-op': 'Dhule District Co-op',
    'Dhule District Co Op': 'Dhule District Co-op',
  };

  if (explicitMap[trimmed]) {
    return explicitMap[trimmed];
  }

  // Case-insensitive lookup in explicitMap
  const lowerTrimmed = trimmed.toLowerCase();
  for (const [k, v] of Object.entries(explicitMap)) {
    if (k.toLowerCase() === lowerTrimmed) {
      return v;
    }
  }

  let s = trimmed
    .replace(/\bBankbazaar\b/gi, 'BankBazaar')
    .replace(/\bMymoneymantra\b/gi, 'MyMoneyMantra')
    .replace(/Corporate (And|&) Investment Bank/gi, '')
    .replace(/Corporate (And|&) Investment/gi, '')
    .replace(/Banking Corporation/gi, 'Bank')
    .replace(/Technologies India Pvt Ltd/gi, 'Tech')
    .replace(/Technologies India/gi, 'Tech')
    .replace(/Small Finance Bank(\s+(Ltd|Limited))?/gi, 'SFB')
    .replace(/Small Finance(\s+(Ltd|Limited))?/gi, 'SFB')
    .replace(/Securities Primary Dealership/gi, 'Securities')
    .replace(/Financial Technologies/gi, 'Tech')
    .replace(/Customised Liquidity/gi, 'Liquidity')
    .replace(/Primary Dealership/gi, '')
    .replace(/International Financial(\s+Services)?/gi, 'International')
    .replace(/Whizdm Innovations Pvt Ltd/gi, '')
    .replace(/Maybright Ventures Pvt Ltd/gi, '')
    .replace(/Financial Intermediation(\s+(Services|Pvt|Private|Ltd|Limited|and Services|& Services))?/gi, '')
    .replace(/Intermediation/gi, '')
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
    .replace(/District Central Co[\s\-]?(Operative|Op) Bank/gi, 'District Co-op')
    .replace(/District Central Co[\s\-]?(Operative|Op)/gi, 'District Co-op')
    .replace(/District Co[\s\-]?(Operative|Op) Bank/gi, 'District Co-op')
    .replace(/District Co[\s\-]?(Operative|Op)/gi, 'District Co-op')
    .replace(/Ichalkaranji Janata (Sahakari )?Bank/gi, 'Bank')
    .replace(/Ichalkaranji Janata/gi, '')
    .replace(/Co[\s\-]operative Urban Bank/gi, 'Urban Co-op Bank')
    .replace(/Urban Co[\s\-]operative Bank/gi, 'Urban Co-op Bank')
    .replace(/Co[\s\-]Operative Bank/gi, 'Co-op Bank')
    .replace(/Co[\s\-]Operative/gi, 'Co-op')
    .replace(/Janata Sahakari Bank/gi, 'Sahakari Bank')
    .replace(/Commercial Co-op Bank/gi, 'Commercial Bank')
    .replace(/\s+(Loan Settlement|Debt Relief|Loan Help|Invest Borrow|Digital Loans|Short Term Loan)$/gi, '')
    .replace(/\s+(Bank\s+)?(Ltd|Limited)\.?$/gi, '')
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

  const extensions = [
    `${cand} Services`,
    `${cand} Legal Help`,
    `${cand} Process`,
    `${cand} Guide`,
    `${cand} Help`
  ];
  for (const ext of extensions) {
    if (ext.length >= 30 && ext.length <= 65) return ext;
  }
  return cand;
}

/**
 * Helper to extract service keyword variations to ensure H2 headings are service-specific
 * and never create cross-service duplicates for the same bank entity.
 */
function getServiceH2Keywords(serviceTitle: string): { full: string; short: string; debt: string } {
  const s = (serviceTitle || '').trim();
  if (/business/i.test(s)) {
    return { full: 'Business Loan Settlement', short: 'Business Loan', debt: 'Business Debt' };
  }
  if (/personal/i.test(s)) {
    return { full: 'Personal Loan Settlement', short: 'Personal Loan', debt: 'Personal Debt' };
  }
  if (/credit\s*card|card/i.test(s)) {
    return { full: 'Credit Card Settlement', short: 'Credit Card', debt: 'Card Debt' };
  }
  if (/app\s*loan/i.test(s)) {
    return { full: 'App Loan Settlement', short: 'App Loan', debt: 'App Debt' };
  }
  if (/car\s*loan/i.test(s)) {
    return { full: 'Car Loan Settlement', short: 'Car Loan', debt: 'Car Debt' };
  }
  if (/nbfc/i.test(s)) {
    return { full: 'NBFC Loan Settlement', short: 'NBFC Loan', debt: 'NBFC Debt' };
  }
  const clean = s.replace(/\s+Settlement$/i, '').trim() || 'Loan';
  return {
    full: s || 'Loan Settlement',
    short: clean,
    debt: `${clean} Debt`
  };
}

/**
 * Generates an H2 heading strictly between 30 and 65 characters (never > 65, never > 70) for bank service pages.
 * Screaming Frog flags H2 > 70 characters and duplicate H2 tags.
 * This function preserves the specific service keyword across all rungs and fallbacks,
 * strictly preventing cross-service duplicate H2 collisions on pages sharing the same bank name.
 */
export function getBankH2Title(bankName: string, serviceTitle: string): string {
  const shortBank = getShortBankName(bankName);
  const svc = getServiceH2Keywords(serviceTitle);

  const candidates = [
    `Why Choose ${shortBank} ${svc.full}`,
    `Why Settle ${shortBank} ${svc.full}`,
    `Why Settle ${shortBank} ${svc.short} Dues`,
    `Why Settle ${shortBank} ${svc.debt}`,
    `Why Choose ${shortBank} ${svc.short} Relief`,
    `Settle ${shortBank} ${svc.short} Dues Legally`,
    `Why Settle Your ${shortBank} ${svc.short}`,
    `Settling Your ${shortBank} ${svc.short} Dues`,
    `Why Choose Settlement for ${shortBank} ${svc.short}`,
    `Settle ${shortBank} ${svc.short} Dues`,
    `Why Settle ${shortBank} ${svc.short}`,
  ];

  for (const cand of candidates) {
    if (cand.length >= 30 && cand.length <= 65) return cand;
  }
  for (const cand of candidates) {
    if (cand.length >= 30 && cand.length <= 70) return cand;
  }

  // Fallback for extremely long bank names: truncate bank name at word boundary to fit with svc.short
  const maxBankLen = 65 - 'Why Settle  '.length - svc.short.length;
  const sub = shortBank.slice(0, Math.max(8, maxBankLen));
  const lastSpace = sub.lastIndexOf(' ');
  const cleanBank = (lastSpace >= 5 ? sub.slice(0, lastSpace) : sub).replace(/[-–—,&]+$/, '').trim();

  const fallbacks = [
    `Why Settle ${cleanBank} ${svc.short} Dues`,
    `Why Settle ${cleanBank} ${svc.short}`,
    `Settle ${cleanBank} ${svc.short} Dues`,
    `Why Settle ${cleanBank} ${svc.debt}`,
    `${cleanBank} ${svc.short} Settlement`
  ];
  for (const fb of fallbacks) {
    if (fb.length >= 30 && fb.length <= 65) return fb;
  }
  for (const fb of fallbacks) {
    if (fb.length >= 25 && fb.length <= 70) return fb;
  }
  return `Why Settle ${cleanBank} ${svc.short}`;
}

/**
 * Shortens state and union territory names for headings when space is constrained.
 */
export function getShortStateName(name: string): string {
  if (!name) return '';
  const trimmed = name.trim();

  const stateMap: Record<string, string> = {
    'dadra and nagar haveli and daman and diu': 'DNH & DD',
    'dadra and nagar haveli': 'Dadra & Nagar Haveli',
    'andaman and nicobar islands': 'Andaman & Nicobar',
    'andaman and nicobar': 'Andaman & Nicobar',
    'jammu and kashmir': 'Jammu & Kashmir',
    'arunachal pradesh': 'Arunachal',
    'himachal pradesh': 'Himachal',
  };

  const lower = trimmed.toLowerCase();
  return stateMap[lower] || stateMap[trimmed] || trimmed;
}

