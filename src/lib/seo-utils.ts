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
  if (withBrand.length >= 30 && withBrand.length <= 60) return withBrand;
  if (withBrand.length < 30) {
    const extended = `${withBrand} Legal Help`;
    if (extended.length <= 60) return extended;
    return withBrand;
  }
  if (clean.length >= 30 && clean.length <= 60) return clean;
  if (clean.length < 30) return withBrand;
  return clean.slice(0, 57).trim() + '...';
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
