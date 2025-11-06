import { Metadata } from 'next';
import StatePageClient from './StatePageClient';
import { getAllBankSlugs } from '../../../banks-content';
import { getAllStateSlugs } from '../bank-state-content-generator';
import { generateBankStateContent } from '../bank-state-content-generator';

type Params = { bank: string; state: string };

export async function generateStaticParams(): Promise<Params[]> {
  const banks = getAllBankSlugs();
  const states = getAllStateSlugs();
  const combos: Params[] = [];
  for (const bank of banks) {
    for (const state of states) {
      combos.push({ bank, state });
    }
  }
  return combos;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { bank, state } = params;
  const content = generateBankStateContent(bank, state);
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: content.keywords
  };
}

function extractHeadings(content: ReturnType<typeof generateBankStateContent>) {
  const headings: Array<{ id: string; text: string; level: number }> = [];
  const add = (id: string, text?: string) => { if (text) headings.push({ id, text, level: 2 }); };
  add('why-choose-settlement', `Why ${content.stateName} Businesses Choose Settlement with ${content.bankName}`);
  add('understanding-settlement', `Understanding ${content.bankName} Business Loan Settlement in ${content.stateName}`);
  add('how-credsettle-helps', `How CredSettle Helps ${content.stateName} Businesses Settle with ${content.bankName}`);
  add('cibil-impact', 'Impact on Credit after Settlement');
  add('why-choose-credsettle', 'Why Choose CredSettle');
  add('step-by-step-process', 'Step-by-Step Process');
  add('documents-required', 'Documents Required');
  add('faqs', 'FAQs');
  return headings;
}

export default async function Page({ params }: { params: Params }) {
  const { bank, state } = params;
  const content = generateBankStateContent(bank, state);
  const headings = extractHeadings(content);

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: content.title,
    description: content.metaDescription,
    author: { '@type': 'Organization', name: 'CredSettle' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.credsettle.in/services/business-loan-settlement/banks/${bank}/${state}` },
    about: [
      { '@type': 'FinancialService', name: `${content.bankName} Business Loan Settlement` },
      { '@type': 'Place', name: content.stateName }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StatePageClient content={content as any} headings={headings} />
    </>
  );
}


