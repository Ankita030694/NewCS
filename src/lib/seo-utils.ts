/**
 * SEO Metadata Utilities
 * Enforces strict SEO constraints:
 * - Title <= 60 characters
 * - Description <= 155 characters (safely under the 160-character ceiling)
 */

export function sanitizeMetaTitle(rawTitle?: string, brand = 'CredSettle'): string {
  if (!rawTitle) return `Loan Settlement Services | ${brand}`;
  
  // Remove existing brand suffixes if present to avoid duplication
  const clean = rawTitle
    .replace(/\s*\|\s*CredSettle\s*$/i, '')
    .replace(/\s*-\s*CredSettle\s*$/i, '')
    .trim();

  const withBrand = `${clean} | ${brand}`;
  if (withBrand.length <= 60) return withBrand;
  if (clean.length <= 60) return clean;
  return clean.slice(0, 57).trim() + '...';
}

export function sanitizeMetaDescription(rawDesc?: string): string {
  if (!rawDesc) {
    return 'Get expert legal loan settlement and debt relief services in India with CredSettle. Stop bank harassment & resolve debt legally. Free consultation.';
  }
  const clean = rawDesc.trim();
  if (clean.length <= 155) return clean;
  return clean.slice(0, 152).trim() + '...';
}
