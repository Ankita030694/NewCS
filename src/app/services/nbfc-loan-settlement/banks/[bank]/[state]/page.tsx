import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllBankSlugs } from '../../../banks-content';
import { getBankStateContentWithFallback, generateStateSlug } from '../bank-state-content-generator';
import StatePageClient from './StatePageClient';

// List of all Indian states and UTs
const allStates = [
  'Andaman and Nicobar Islands',
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chandigarh',
  'Chhattisgarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jammu and Kashmir',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Ladakh',
  'Lakshadweep',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Puducherry',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal'
];

// Generate all valid state slugs
const allStateSlugs = allStates.map(state => generateStateSlug(state));

interface PageProps {
  params: Promise<{
    bank: string;
    state: string;
  }>;
}

export async function generateStaticParams() {
  const bankSlugs = getAllBankSlugs();
  const params: Array<{ bank: string; state: string }> = [];
  
  // Generate all combinations of banks and states
  for (const bank of bankSlugs) {
    for (const state of allStateSlugs) {
      params.push({ bank, state });
    }
  }
  
  return params;
}

export const dynamicParams = true; // Allow dynamic params not in generateStaticParams

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { bank, state } = await params;
  
  // Validate state slug
  if (!allStateSlugs.includes(state)) {
    return {
      title: 'Page Not Found',
      description: 'The requested state page could not be found.'
    };
  }

  const content = getBankStateContentWithFallback(bank, state);

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: content.keywords.join(', '),
    openGraph: {
      title: content.title,
      description: content.metaDescription,
      type: 'article',
      url: `https://credsettle.com/services/nbfc-loan-settlement/banks/${content.bankSlug}/${content.stateSlug}`
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.metaDescription
    },
    alternates: {
      canonical: `https://credsettle.com/services/nbfc-loan-settlement/banks/${content.bankSlug}/${content.stateSlug}`
    }
  };
}

// Helper function to generate headings from content
function generateHeadings(content: any) {
  const headings: Array<{ id: string; text: string; level: number }> = [];

  if (content.whyChooseSettlement) {
    headings.push({
      id: 'why-choose-settlement',
      text: `Why People Choose NBFC Loan Settlement with ${content.bankName} in ${content.stateName}`,
      level: 2
    });
  }

  if (content.understandingSettlement) {
    headings.push({
      id: 'understanding-settlement',
      text: `Understanding ${content.bankName} NBFC Loan Settlement Process in ${content.stateName}`,
      level: 2
    });
  }

  if (content.localContext) {
    headings.push({
      id: 'local-context',
      text: `${content.bankName} NBFC Loan Settlement in ${content.stateName} - Local Context`,
      level: 3
    });
  }

  if (content.howCredSettleHelps) {
    headings.push({
      id: 'how-credsettle-helps',
      text: `How CredSettle Helps You Settle ${content.bankName} NBFC Loan Dues Legally in ${content.stateName}`,
      level: 2
    });
  }

  if (content.cibilImpact) {
    headings.push({
      id: 'cibil-impact',
      text: 'Impact of NBFC Loan Settlement on Your CIBIL Score',
      level: 2
    });
  }

  if (content.whyChooseCredSettle) {
    headings.push({
      id: 'why-choose-credsettle',
      text: `Why Choose CredSettle for ${content.bankName} NBFC Loan Settlement in ${content.stateName}`,
      level: 2
    });
  }

  if (content.stepByStepProcess) {
    headings.push({
      id: 'step-by-step-process',
      text: `Step-by-Step Process to Start Your ${content.bankName} NBFC Loan Settlement in ${content.stateName}`,
      level: 2
    });
  }

  if (content.documentsRequired) {
    headings.push({
      id: 'documents-required',
      text: `Documents Required for ${content.bankName} NBFC Loan Settlement in ${content.stateName}`,
      level: 2
    });
  }

  // Always add FAQs
  headings.push({
    id: 'faqs',
    text: `FAQs on ${content.bankName} NBFC Loan Settlement in ${content.stateName}`,
    level: 2
  });

  headings.push({
    id: 'get-legal-help',
    text: `Get Legal Help Today – Start Your Settlement with ${content.bankName} in ${content.stateName}`,
    level: 2
  });

  return headings;
}

export default async function StatePage({ params }: PageProps) {
  const { bank, state } = await params;

  // Validate state slug
  if (!allStateSlugs.includes(state)) {
    notFound();
  }

  const content = getBankStateContentWithFallback(bank, state);
  const headings = generateHeadings(content);

  // Generate structured data for the page
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: content.title,
    description: content.metaDescription,
    author: {
      '@type': 'Organization',
      name: 'CredSettle',
      url: 'https://credsettle.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'CredSettle',
      url: 'https://credsettle.com'
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://credsettle.com/services/nbfc-loan-settlement/banks/${content.bankSlug}/${content.stateSlug}`
    },
    about: {
      '@type': 'FinancialService',
      name: `${content.bankName} NBFC Loan Settlement in ${content.stateName}`,
      provider: {
        '@type': 'Organization',
        name: 'CredSettle',
        url: 'https://credsettle.com'
      },
      areaServed: {
        '@type': 'State',
        name: content.stateName
      }
    }
  };

  // FAQ structured data
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <StatePageClient content={content} headings={headings} />
    </>
  );
}





