/**
 * /sitemaps/<section>.xml: one child sitemap per section, listed by the /sitemap.xml index.
 */
import { NextResponse } from 'next/server';
import { collectSitemapUrls, SITEMAP_SECTIONS, type SitemapSection } from '@/lib/sitemap/collectSitemapUrls';

export const revalidate = 300;
export const dynamicParams = false;

export function generateStaticParams() {
  return SITEMAP_SECTIONS.map((section) => ({ file: `${section}.xml` }));
}

function escapeXml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export async function GET(_request: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const section = file.replace(/\.xml$/, '') as SitemapSection;
  if (!file.endsWith('.xml') || !SITEMAP_SECTIONS.includes(section)) {
    return new NextResponse('Not found', { status: 404 });
  }

  const urls = (await collectSitemapUrls()).filter((url) => url.section === section);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${escapeXml(url.loc)}</loc>${url.lastmod ? `\n    <lastmod>${url.lastmod}</lastmod>` : ''}
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
