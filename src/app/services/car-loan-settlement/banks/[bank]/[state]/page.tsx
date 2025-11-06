import { Metadata } from 'next';
import StatePageClient from './StatePageClient';
import { getAllStateSlugs } from '../bank-state-content-generator';
import { generateBankStateContent } from '../bank-state-content-generator';
import { getAllBankSlugs } from '../../../banks-content';

type Params = { bank: string; state: string };

export async function generateStaticParams(): Promise<Params[]> {
  const banks = getAllBankSlugs();
  const states = getAllStateSlugs();
  const out: Params[] = [];
  for (const bank of banks) for (const state of states) out.push({ bank, state });
  return out;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const content = generateBankStateContent(params.bank, params.state);
  return { title: content.metaTitle, description: content.metaDescription, keywords: content.keywords };
}

function getHeadings(content: ReturnType<typeof generateBankStateContent>) {
  const h: Array<{ id: string; text: string; level: number }> = [];
  const add = (id: string, text?: string) => { if (text) h.push({ id, text, level: 2 }); };
  add('why-choose-settlement', `Why ${content.stateName} Borrowers Choose Settlement with ${content.bankName}`);
  add('understanding-settlement', `Understanding ${content.bankName} Car Loan Settlement in ${content.stateName}`);
  add('how-credsettle-helps', `How CredSettle Helps ${content.stateName} Borrowers with ${content.bankName}`);
  add('cibil-impact', 'Impact on Credit Score');
  add('why-choose-credsettle', 'Why Choose CredSettle');
  add('step-by-step-process', 'Step-by-Step Process');
  add('documents-required', 'Documents Required');
  add('faqs', 'FAQs');
  return h;
}

export default function Page({ params }: { params: Params }) {
  const content = generateBankStateContent(params.bank, params.state);
  const headings = getHeadings(content);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: content.title,
    description: content.metaDescription,
    author: { '@type': 'Organization', name: 'CredSettle' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.credsettle.in/services/car-loan-settlement/banks/${params.bank}/${params.state}` },
    about: [ { '@type': 'FinancialService', name: `${content.bankName} Car Loan Settlement` }, { '@type': 'Place', name: content.stateName } ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StatePageClient content={content as any} headings={headings} />
    </>
  );
}






