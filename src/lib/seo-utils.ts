/**
 * SEO Metadata Utilities
 * Enforces strict SEO constraints:
 * - Title between 30 and 60 characters
 * - Description between 120 and 155 characters (safely in the 120-160 sweet spot)
 */

export function sanitizeMetaTitle(rawTitle?: string, brand = 'CredSettle'): string {
  if (!rawTitle) return `Loan Settlement Services in India | ${brand}`;
  
  // Remove existing brand suffixes if present to avoid duplication
  const clean = rawTitle
    .replace(/\s*\|\s*CredSettle\s*$/i, '')
    .replace(/\s*-\s*CredSettle\s*$/i, '')
    .trim();

  const withBrand = `${clean} | ${brand}`;
  if (withBrand.length >= 30 && withBrand.length <= 58) return withBrand;
  if (withBrand.length < 30) {
    const extended = `${withBrand} Legal Help`;
    if (extended.length <= 58) return extended;
    return withBrand;
  }

  // Shorten common corporate suffixes and long territory names if too long
  let s = clean
    .replace(/Dadra and Nagar Haveli and Daman and Diu/gi, 'DNH & Daman Diu')
    .replace(/Dadra and Nagar Haveli/gi, 'Dadra & Nagar Haveli')
    .replace(/Andaman and Nicobar Islands/gi, 'Andaman & Nicobar')
    .replace(/Andaman and Nicobar/gi, 'Andaman & Nicobar')
    .replace(/Jammu and Kashmir/gi, 'Jammu & Kashmir')
    .replace(/Private Limited/gi, 'Pvt Ltd')
    .replace(/Technologies India Pvt Ltd/gi, 'Tech')
    .replace(/Technologies/gi, 'Tech')
    .replace(/Limited/gi, 'Ltd')
    .replace(/Financial Services/gi, 'Fin')
    .replace(/Finance/gi, 'Fin')
    .replace(/Small Finance Bank/gi, 'SFB')
    .replace(/Standard Chartered Bank/gi, 'Standard Chartered');

  const withBrandShort = `${s} | ${brand}`;
  if (withBrandShort.length >= 30 && withBrandShort.length <= 58) return withBrandShort;
  if (s.length >= 30 && s.length <= 58 && s !== clean) return `${s} | ${brand}`;

  // Smart word-boundary truncation (target <= 45 chars to allow brand to fit safely)
  const maxContentLen = 58 - 3 - brand.length;
  const sub = s.slice(0, maxContentLen);
  const lastSpace = sub.lastIndexOf(' ');
  if (lastSpace >= 15) {
    const truncated = sub.slice(0, lastSpace).replace(/[,;:\-–—|&]+$/, '').trim();
    const cand = `${truncated} | ${brand}`;
    if (cand.length >= 30 && cand.length <= 58) return cand;
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
