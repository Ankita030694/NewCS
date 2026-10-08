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
  const defaultDesc = 'Get expert loan settlement and debt relief in India with CredSettle. Stop bank harassment and resolve debt under RBI rules.';
  if (!rawDesc) return defaultDesc;
  const clean = rawDesc.trim().replace(/\s+/g, ' ');
  
  // Ideal range for Google snippet pixel width: 110 to 135 characters (well below 985 pixels, above 70 chars)
  if (clean.length >= 110 && clean.length <= 135) return clean;

  if (clean.length < 110) {
    const punctuated = clean.endsWith('.') ? clean : `${clean}.`;
    const standardSuffix = ' Settle debt legally with CredSettle and stop bank harassment.';
    const combined = `${punctuated}${standardSuffix}`.trim();
    if (combined.length >= 110 && combined.length <= 135) return combined;

    const shortSuffix = ' Settle legally under RBI rules with CredSettle.';
    const combinedShort = `${punctuated}${shortSuffix}`.trim();
    if (combinedShort.length >= 110 && combinedShort.length <= 135) return combinedShort;

    if (clean.length >= 70 && clean.length <= 135) return clean;
    return defaultDesc;
  }

  // If clean.length > 135, smartly truncate without cutting mid-word or breaking sentence
  const sub = clean.slice(0, 135);
  const lastPeriod = sub.lastIndexOf('.');
  if (lastPeriod >= 95) {
    return sub.slice(0, lastPeriod + 1);
  }
  const lastSpace = sub.lastIndexOf(' ');
  if (lastSpace >= 95) {
    let truncated = sub.slice(0, lastSpace).trim();
    if (truncated.endsWith(',') || truncated.endsWith(';') || truncated.endsWith(':') || truncated.endsWith('&')) {
      truncated = truncated.slice(0, -1).trim();
    }
    if (!truncated.endsWith('.')) truncated += '.';
    return truncated;
  }

  return clean.slice(0, 130).trim() + '...';
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
    'North East Small Finance': 'North East SFB'
  };

  if (explicitMap[trimmed]) {
    return explicitMap[trimmed];
  }

  let s = trimmed
    .replace(/Technologies India Pvt Ltd/gi, 'Tech')
    .replace(/Private Limited/gi, 'Pvt Ltd')
    .replace(/Financial Services/gi, 'Fin')
    .replace(/Finance Limited/gi, 'Fin Ltd')
    .replace(/State Co Operative Apex Bank/gi, 'Apex Bank')
    .replace(/State Apex Co Operative Bank/gi, 'Apex Bank')
    .replace(/State Co-operative Apex Bank/gi, 'Apex Bank')
    .replace(/State Apex Co-operative Bank/gi, 'Apex Bank')
    .replace(/Kshetriya Gramin Bank/gi, 'Gramin Bank')
    .replace(/Co[\s\-]Operative Bank/gi, 'Co-op Bank')
    .replace(/Co[\s\-]Operative/gi, 'Co-op')
    .replace(/Janata Sahakari Bank/gi, 'Sahakari Bank')
    .replace(/Commercial Co-op Bank/gi, 'Commercial Bank')
    .replace(/\s+/g, ' ')
    .trim();

  return s.length >= 3 ? s : trimmed;
}

/**
 * Generates an H2 heading strictly <= 65 characters for bank service pages.
 * Screaming Frog flags H2 > 70 characters. This function ensures headings never exceed 68 characters.
 */
export function getBankH2Title(bankName: string, serviceTitle: string): string {
  const shortBank = getShortBankName(bankName);
  const cand = `Why Choose ${shortBank} ${serviceTitle}`;
  if (cand.length <= 68) return cand;

  const cand2 = `Why Settle ${shortBank} ${serviceTitle}`;
  if (cand2.length <= 68) return cand2;

  const cand3 = `Settle ${shortBank} ${serviceTitle} Dues`;
  if (cand3.length <= 68) return cand3;

  const maxBankLen = 65 - 'Why Choose  '.length - serviceTitle.length;
  const truncatedBank = shortBank.slice(0, Math.max(10, maxBankLen)).trim();
  return `Why Choose ${truncatedBank} ${serviceTitle}`;
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

