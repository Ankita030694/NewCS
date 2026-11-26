/**
 * /sitemap.xml: sitemap INDEX pointing at one child sitemap per section (/sitemaps/<section>.xml),
 * so Search Console reports indexing per template (issuer pages, issuer×state pages, services,
 * lenders, resources, new lane pages, other pages).
 *
 * The URL list itself is built in src/lib/sitemap/collectSitemapUrls.ts (deduplicated, dead URLs
 * removed, lastmod from git via src/data/sitemapLastmod.json or from Firestore for blogs).
 * Regenerate route dates before deploying: `npm run sitemap:lastmod`.
 */
import { NextResponse } from 'next/server';
import { collectSitemapUrls, SITEMAP_SECTIONS } from '@/lib/sitemap/collectSitemapUrls';

export const revalidate = 300;

const baseUrl = 'https://www.credsettle.com';

export async function GET() {
  const urls = await collectSitemapUrls();

  const entries = SITEMAP_SECTIONS.map((section) => {
    const inSection = urls.filter((url) => url.section === section);
    if (inSection.length === 0) return '';
    const lastmod = inSection.reduce<string>((max, url) => (url.lastmod && url.lastmod > max ? url.lastmod : max), '');
    return `  <sitemap>
    <loc>${baseUrl}/sitemaps/${section}.xml</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}
  </sitemap>`;
  }).filter(Boolean);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</sitemapindex>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
