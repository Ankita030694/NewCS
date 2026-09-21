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
  const defaultDesc = 'Get expert legal loan settlement and debt relief services in India with CredSettle. Stop bank harassment & resolve debt legally. Free consultation.';
  if (!rawDesc) return defaultDesc;
  const clean = rawDesc.trim();
  
  if (clean.length >= 120 && clean.length <= 155) return clean;

  if (clean.length < 120) {
    const punctuated = clean.endsWith('.') ? clean : `${clean}.`;
    const standardSuffix = ' Settle your debt legally with CredSettle and stop bank harassment.';
    const combined = (punctuated + standardSuffix).trim();
    if (combined.length >= 120 && combined.length <= 155) return combined;

    const fullSuffix = ' CredSettle provides legal debt resolution to stop recovery harassment and settle bank loans with waivers.';
    const combinedFull = (punctuated + fullSuffix).trim();
    if (combinedFull.length >= 120 && combinedFull.length <= 155) return combinedFull;

    if (combinedFull.length > 155) return combinedFull.slice(0, 152).trim() + '...';
    return defaultDesc;
  }

  return clean.slice(0, 152).trim() + '...';
}
