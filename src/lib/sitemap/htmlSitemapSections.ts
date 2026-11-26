/**
 * Grouped link lists for the HTML /sitemap page, built from the same deduplicated URL list as the
 * XML sitemap so they only ever contain live URLs. Covers the sections that had no crawlable path
 * from the homepage (claude-seo audit 2026-11-26): credit-card issuer pages, credit-card and NBFC
 * service lender/state pages, and /resources articles.
 */
import { creditCardBanks } from '@/data/creditCardBanks';
import { statesData } from '@/data/statesData';
import { getBankContentWithFallback as getCreditCardBankContent } from '@/app/services/credit-card-settlement/banks-content';
import { getBankContentWithFallback as getNbfcBankContent } from '@/app/services/nbfc-loan-settlement/banks-content';
import { collectSitemapUrls, getBlogTitle } from './collectSitemapUrls';

export interface HtmlSitemapLink {
  title: string;
  href: string;
}

export interface HtmlSitemapSection {
  id: string;
  heading: string;
  links: HtmlSitemapLink[];
}

const STATE_NAMES = new Map(statesData.map((state) => [state.slug, state.name]));
STATE_NAMES.set('dadra-and-nagar-haveli-and-daman-and-diu', 'Dadra and Nagar Haveli and Daman and Diu');
const ISSUER_NAMES = new Map(creditCardBanks.map((bank) => [bank.slug, bank.name]));

function titleCase(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function byTitle(a: HtmlSitemapLink, b: HtmlSitemapLink): number {
  return a.title.localeCompare(b.title);
}

export async function getHtmlSitemapSections(): Promise<HtmlSitemapSection[]> {
  const paths = (await collectSitemapUrls()).map((url) => new URL(url.loc).pathname);
  const under = (prefix: string, depth: number) =>
    paths.filter((path) => path.startsWith(prefix) && path.split('/').filter(Boolean).length === depth);

  const issuerLinks: HtmlSitemapLink[] = [
    { title: 'Credit Card Settlement: All Issuers', href: '/credit-card-settlement' },
    { title: 'Credit Card Settlement by Bank: Issuer Directory', href: '/credit-card-settlement-by-bank' },
    ...under('/credit-card-settlement/', 2)
      .map((path) => {
        const slug = path.split('/')[2];
        return { title: `${ISSUER_NAMES.get(slug) ?? titleCase(slug)} Credit Card Settlement`, href: path };
      })
      .sort(byTitle),
  ];

  const serviceLinks = (service: string, label: string, getName: (slug: string) => string): HtmlSitemapLink[] => [
    ...under(`/services/${service}/banks/`, 4)
      .map((path) => ({ title: `${getName(path.split('/')[4])} ${label}`, href: path }))
      .sort(byTitle),
    ...under(`/services/${service}/`, 3)
      .filter((path) => STATE_NAMES.has(path.split('/')[3]))
      .map((path) => ({ title: `${label} in ${STATE_NAMES.get(path.split('/')[3])}`, href: path }))
      .sort(byTitle),
  ];

  const resourceLinks = under('/resources/', 2)
    .map((path) => {
      const slug = path.split('/')[2];
      return { title: getBlogTitle(slug) ?? titleCase(slug), href: path };
    })
    .sort(byTitle);

  return [
    { id: 'credit-card-issuers', heading: 'Credit Card Settlement by Issuer', links: issuerLinks },
    {
      id: 'credit-card-services',
      heading: 'Credit Card Settlement Help by Lender and State',
      links: serviceLinks('credit-card-settlement', 'Credit Card Settlement', (slug) => getCreditCardBankContent(slug).bankName),
    },
    {
      id: 'nbfc-services',
      heading: 'NBFC Loan Settlement Help by Lender and State',
      links: serviceLinks('nbfc-loan-settlement', 'NBFC Loan Settlement', (slug) => getNbfcBankContent(slug).bankName),
    },
    { id: 'resources', heading: 'Debt Settlement Guides and Resources', links: resourceLinks },
  ].filter((section) => section.links.length > 0);
}
