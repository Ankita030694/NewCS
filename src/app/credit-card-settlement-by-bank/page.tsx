import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';
import { creditCardBanks } from '@/data/creditCardBanks';
import { serializeJsonLd } from '@/lib/json-ld';
import { ArrowRight, BookOpen, Building2, CreditCard, ExternalLink, FileCheck2, Landmark, Phone, ShieldCheck } from 'lucide-react';

const PAGE_URL = 'https://www.credsettle.com/credit-card-settlement-by-bank';
const TITLE = 'Credit Card Settlement by Bank: All Issuers | CredSettle';
const H1 = 'Credit Card Settlement by Bank: Find Your Card Issuer';
const DESCRIPTION =
  'Pick your card issuer from HDFC, SBI Card, ICICI, Axis, PSU, foreign and small finance banks to see its settlement process, letter and NOC steps for ₹3L+.';
const PUBLISHED = '2026-11-26T10:00:00+05:30';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: PAGE_URL,
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

type IssuerGroup = { id: string; heading: string; intro: string; slugs: string[] };

// Grouped by who actually holds the card debt; settlement goes to that entity.
const ISSUER_GROUPS: IssuerGroup[] = [
  {
    id: 'private-banks',
    heading: 'Private Sector Bank Credit Cards',
    intro:
      'The bank itself holds the card debt. If your salary or savings account is with the same bank, it may use its right of set-off (general lien) on that account, so plan where your income lands before you default or negotiate.',
    slugs: ['hdfc', 'icici', 'axis', 'kotak', 'yes-bank', 'indusind', 'idfc-first', 'rbl', 'bandhan-bank', 'city-union-bank', 'dcb-bank', 'dhanlaxmi-bank', 'jammu-kashmir-bank', 'karnataka-bank', 'karur-vysya-bank', 'nainital-bank', 'tamilnad-mercantile-bank', 'csb-bank'],
  },
  {
    id: 'card-companies-and-psu',
    heading: 'SBI Card and Public Sector Bank Cards',
    intro:
      'SBI Card is run by SBI Cards and Payment Services Ltd, a separate company from State Bank of India, so SBI branch OTS schemes do not cover SBI Card dues. Bank of Baroda cards are issued through its card subsidiary BOBCARD. Other PSU bank cards sit with the bank and may fall under that bank’s own OTS policy.',
    slugs: ['sbi', 'bob', 'pnb', 'canara-bank', 'bank-of-india', 'bank-of-maharashtra', 'central-bank-of-india', 'indian-overseas-bank', 'punjab-sind-bank', 'uco-bank'],
  },
  {
    id: 'foreign-banks',
    heading: 'Foreign Bank Credit Cards in India',
    intro:
      'Foreign banks run their Indian card books through local collections and nodal desks. Citibank’s India consumer business, including credit cards, was acquired by Axis Bank (completed 1 March 2023), so Citi-branded card dues now sit with Axis Bank.',
    slugs: ['standard-chartered', 'hsbc', 'amex', 'citi'],
  },
  {
    id: 'small-finance-banks',
    heading: 'Small Finance Bank and Other Card Issuers',
    intro:
      'Small finance banks are newer card issuers with smaller collection teams. Ask for the settlement offer on the bank’s letterhead and pay only into the bank’s own account.',
    slugs: ['equitas-small-finance-bank', 'ujjivan-small-finance-bank', 'jana-small-finance-bank', 'capital-small-finance-bank', 'esaf-small-finance-bank', 'suryoday-small-finance-bank', 'utkarsh-small-finance-bank', 'north-east-small-finance-bank', 'shivalik-small-finance-bank', 'unity-small-finance-bank', 'finova-capital'],
  },
];

// Issuer-specific CredSettle guides that go deeper than the issuer page.
const ISSUER_GUIDES: Record<string, { label: string; href: string }[]> = {
  hdfc: [
    { label: 'HDFC card blocked for non-payment', href: '/hdfc-credit-card-blocked-due-to-non-payment' },
    { label: 'HDFC credit card settlement guide', href: '/credit-card-settlement-hdfc' },
  ],
  sbi: [
    { label: 'SBI Card blocked for non-payment', href: '/sbi-credit-card-blocked-due-to-non-payment' },
    { label: 'SBI Card settlement email and helpline', href: '/sbi-credit-card-settlement-email-id-and-number' },
  ],
  icici: [
    { label: 'ICICI card blocked for non-payment', href: '/icici-credit-card-blocked-due-to-non-payment' },
    { label: 'ICICI credit card settlement guide', href: '/icici-credit-card-settlement' },
  ],
  kotak: [{ label: 'Kotak card settlement percentage', href: '/kotak-credit-card-settlement-percentage' }],
  rbl: [{ label: 'RBL settlement letter format', href: '/rbl-credit-card-settlement-letter-format' }],
  bob: [{ label: 'BOBCARD settlement percentage', href: '/bank-of-baroda-credit-card-settlement-percentage' }],
  pnb: [{ label: 'PNB card settlement percentage', href: '/pnb-credit-card-settlement-percentage' }],
  hsbc: [{ label: 'HSBC card settlement percentage', href: '/hsbc-credit-card-settlement-percentage' }],
};

const ISSUERS = new Map(creditCardBanks.map((bank) => [bank.slug, bank.name]));

const STEPS = [
  {
    title: 'Get the offer in writing first',
    body: 'A valid settlement offer comes on the issuer’s letterhead or from its official email domain, names your card number, the settled amount, the payment dates and the account to pay into. Never pay on a phone promise.',
  },
  {
    title: 'Pay only the issuer, on time',
    body: 'Pay into the issuer’s own account or official payment link, never to an agent’s personal account or UPI ID. Missing one instalment of a split settlement usually cancels the whole offer.',
  },
  {
    title: 'Collect the NOC and check your credit report',
    body: 'After the last payment, ask for a No Dues or settlement closure letter. Your credit report will show the card as “Settled”, not “Closed”. If the bureau has not updated within the timelines RBI sets for credit information companies, you can claim compensation.',
  },
];

const FAQS = [
  {
    q: 'Do all banks settle credit card dues the same way?',
    a: 'No. Who holds the debt matters. HDFC, ICICI, Axis and other private banks settle their own card dues and can use set-off on accounts you hold with them. SBI Card dues are with SBI Cards and Payment Services Ltd, not State Bank of India. Bank of Baroda cards go through BOBCARD. Citi-branded card dues now sit with Axis Bank.',
  },
  {
    q: 'Can a PSU bank OTS scheme cover my credit card?',
    a: 'Only if the card is issued by that bank itself and the bank’s OTS policy includes card dues. SBI Card is a separate company, so SBI bank OTS schemes do not apply to it. Check the scheme document or ask the bank’s branch in writing before you rely on an OTS.',
  },
  {
    q: 'What rules do recovery agents have to follow for credit card dues?',
    a: 'RBI’s Master Direction on credit and debit cards (21 April 2022) holds the card issuer responsible for its recovery agents, and RBI’s 12 August 2022 circular on recovery agents bars calls before 8:00 am or after 7:00 pm and any threats or humiliation. You can complain to the issuer’s nodal officer and then the RBI Ombudsman.',
  },
  {
    q: 'Will settling one card affect my other cards?',
    a: 'Each settled card is reported as “Settled” to the credit bureaus, which lowers your score and is visible to every lender. Issuers you still owe may also tighten limits. That is why it helps to plan all cards and loans together rather than one at a time.',
  },
  {
    q: 'Does CredSettle handle a single small card bill?',
    a: 'CredSettle takes cases where your total unsecured debt across credit cards, personal loans and loan apps is ₹3,00,000 or more. For a smaller single card, the issuer pages below explain the steps you can take directly with the bank’s settlement or nodal desk.',
  },
];

function IssuerCard({ slug }: { slug: string }) {
  const name = ISSUERS.get(slug);
  if (!name) return null;
  const guides = ISSUER_GUIDES[slug] ?? [];
  return (
    <li className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
      <Link href={`/credit-card-settlement/${slug}`} className="font-bold text-slate-900 hover:text-blue-600 inline-flex items-center gap-1.5">
        <span>{name} Credit Card Settlement</span>
        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
      </Link>
      {guides.length > 0 && (
        <ul className="mt-2 space-y-1">
          {guides.map((guide) => (
            <li key={guide.href}>
              <Link href={guide.href} className="text-xs text-blue-700 hover:underline">
                {guide.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function CreditCardSettlementByBankPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${PAGE_URL}#article`,
        headline: H1,
        description: DESCRIPTION,
        inLanguage: 'en-IN',
        mainEntityOfPage: PAGE_URL,
        datePublished: PUBLISHED,
        dateModified: PUBLISHED,
        author: {
          '@type': 'Person',
          '@id': 'https://www.credsettle.com/author/ashish-jhangra#author',
          name: 'Ashish Jhangra',
          url: 'https://www.credsettle.com/author/ashish-jhangra',
        },
        publisher: {
          '@type': 'Organization',
          name: 'CredSettle',
          url: 'https://www.credsettle.com',
          logo: { '@type': 'ImageObject', url: 'https://www.credsettle.com/credsettle-logo-black.png' },
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.credsettle.com/' },
          { '@type': 'ListItem', position: 2, name: 'Credit Card Settlement', item: 'https://www.credsettle.com/credit-card-settlement' },
          { '@type': 'ListItem', position: 3, name: 'Credit Card Settlement by Bank', item: PAGE_URL },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}#faq`,
        mainEntity: FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        <section
          className="relative text-white pt-28 pb-16 md:pt-32 md:pb-20 px-4 md:px-8"
          style={{ background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)' }}
        >
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs sm:text-sm font-bold uppercase tracking-wide mb-5">
              <CreditCard className="w-4 h-4 text-blue-200" aria-hidden="true" />
              <span>{creditCardBanks.length} card issuers, one directory</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">{H1}</h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Credit card settlement works differently depending on who issued your card. Find your bank or card company below to see how it handles overdue cards, what a valid settlement letter looks like, and how to get your NOC. If your total card and loan debt is ₹3 lakh or more, CredSettle can plan all of it together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#lead-funnel" className="bg-white text-blue-950 px-7 py-3.5 rounded-full font-bold text-base hover:bg-blue-50 transition-all shadow-lg inline-flex items-center justify-center gap-2">
                <span>Check My ₹3L+ Debt Plan</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="#issuers" className="bg-blue-900/60 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-blue-900 transition-all inline-flex items-center justify-center">
                Jump to Card Issuers
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-12 space-y-14">
          <section id="issuers" className="space-y-10">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Choose Your Credit Card Issuer</h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Each link opens the settlement page for that issuer. Where we have a deeper guide (blocked cards, settlement letters, typical settlement ranges), it is listed under the issuer.
              </p>
            </div>
            {ISSUER_GROUPS.map((group) => (
              <div key={group.id} id={group.id} className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  {group.id === 'foreign-banks' ? <Building2 className="w-5 h-5 text-blue-600" aria-hidden="true" /> : <Landmark className="w-5 h-5 text-blue-600" aria-hidden="true" />}
                  <span>{group.heading}</span>
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">{group.intro}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {group.slugs.map((slug) => (
                    <IssuerCard key={slug} slug={slug} />
                  ))}
                </ul>
              </div>
            ))}
            <p className="text-sm text-slate-700">
              More issuer guides: <Link href="/federal-bank-credit-card-settlement-percentage" className="text-blue-700 hover:underline">Federal Bank</Link>,{' '}
              <Link href="/union-bank-credit-card-settlement-percentage" className="text-blue-700 hover:underline">Union Bank of India</Link>, and{' '}
              <Link href="/credit-card-settlement-before-financial-year-end-by-issuer" className="text-blue-700 hover:underline">year-end settlement timing by issuer</Link>.
            </p>
          </section>

          <section id="steps" className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Three Steps That Apply to Every Card Issuer</h2>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {STEPS.map((step, index) => (
                <li key={step.title} className="rounded-2xl bg-white border border-slate-200 p-5 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600">Step {index + 1}</p>
                  <p className="font-bold text-slate-900">{step.title}</p>
                  <p className="text-sm text-slate-700 leading-relaxed">{step.body}</p>
                </li>
              ))}
            </ol>
            <p className="text-sm text-slate-700 flex flex-wrap gap-x-4 gap-y-2">
              <Link href="/verify-loan-settlement-letter" className="inline-flex items-center gap-1.5 text-blue-700 hover:underline">
                <FileCheck2 className="w-4 h-4" aria-hidden="true" />
                <span>How to verify a settlement letter</span>
              </Link>
              <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="inline-flex items-center gap-1.5 text-blue-700 hover:underline">
                <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                <span>Compensation for a delayed CIBIL update</span>
              </Link>
              <Link href="/settle-multiple-credit-cards" className="inline-flex items-center gap-1.5 text-blue-700 hover:underline">
                <CreditCard className="w-4 h-4" aria-hidden="true" />
                <span>Settling several cards at once</span>
              </Link>
            </p>
          </section>

          <section id="rbi-rules" className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">RBI Rules Every Card Issuer Must Follow</h2>
            <ul className="space-y-3 text-sm md:text-base text-slate-700 leading-relaxed list-disc pl-5">
              <li>
                <strong>Master Direction on credit and debit cards</strong> (issued 21 April 2022): the card issuer is responsible for the conduct of its recovery agents and must have a grievance redressal process with a nodal officer.
              </li>
              <li>
                <strong>Recovery agent conduct</strong> (RBI circular dated 12 August 2022): agents must not call before 8:00 am or after 7:00 pm, and must not threaten, humiliate or intrude on your privacy, family or workplace.
              </li>
              <li>
                <strong>Escalation path</strong>: complain to the issuer first, then its nodal officer, then the RBI Integrated Ombudsman Scheme if there is no reply within 30 days.
              </li>
            </ul>
            <a href="https://rbi.org.in/Scripts/BS_ViewMasDirections.aspx" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:underline">
              <span>RBI Master Directions (rbi.org.in)</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </section>
        </div>

        <InteractiveLeadFunnel />

        <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
          <section id="faqs" className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Credit Card Settlement by Bank: Common Questions</h2>
            <div className="space-y-3">
              {FAQS.map((faq) => (
                <details key={faq.q} className="group rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
                  <summary className="cursor-pointer font-bold text-slate-900 group-open:text-blue-700">{faq.q}</summary>
                  <p className="mt-3 text-sm text-slate-700 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          <aside className="rounded-3xl bg-white border border-slate-200 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Link href="/author/ashish-jhangra" className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-extrabold text-sm flex-shrink-0">
                AJ
              </Link>
              <div>
                <Link href="/author/ashish-jhangra" className="text-sm font-bold text-slate-900 hover:text-blue-600 block">
                  Ashish Jhangra
                </Link>
                <p className="text-xs text-slate-500">Legal and debt resolution. Published 26 Nov 2026.</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <Link href="/credit-card-settlement" className="inline-flex items-center gap-1.5 text-blue-700 hover:underline">
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                <span>Credit card settlement overview</span>
              </Link>
              <a href="tel:+918800226635" className="inline-flex items-center gap-1.5 text-blue-700 hover:underline">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>+91-8800226635</span>
              </a>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
