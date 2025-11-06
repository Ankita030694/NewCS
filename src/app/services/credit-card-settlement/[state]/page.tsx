import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQWithSchema from '@/components/FAQWithSchema';
import TableOfContents from '@/components/TableOfContents';
import { getStateContentWithFallback, generateSlug } from '../states-content';
import StatePageClient from './StatePageClient';

// List of all valid state slugs
const allStates = [
  'andaman-and-nicobar-islands',
  'andhra-pradesh',
  'arunachal-pradesh',
  'assam',
  'bihar',
  'chandigarh',
  'chhattisgarh',
  'dadra-and-nagar-haveli-and-daman-and-diu',
  'delhi',
  'goa',
  'gujarat',
  'haryana',
  'himachal-pradesh',
  'jammu-and-kashmir',
  'jharkhand',
  'karnataka',
  'kerala',
  'ladakh',
  'lakshadweep',
  'madhya-pradesh',
  'maharashtra',
  'manipur',
  'meghalaya',
  'mizoram',
  'nagaland',
  'odisha',
  'puducherry',
  'punjab',
  'rajasthan',
  'sikkim',
  'tamil-nadu',
  'telangana',
  'tripura',
  'uttar-pradesh',
  'uttarakhand',
  'west-bengal'
];

interface PageProps {
  params: Promise<{
    state: string;
  }>;
}

export async function generateStaticParams() {
  return allStates.map((state) => ({
    state: state
  }));
}

export const dynamicParams = true; // Allow dynamic params not in generateStaticParams

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state } = await params;
  const content = getStateContentWithFallback(state);

  return {
    title: content.metaTitle || content.title,
    description: content.metaDescription,
    keywords: content.keywords.join(', '),
    openGraph: {
      title: content.title,
      description: content.metaDescription,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.metaDescription
    }
  };
}

export default async function StatePage({ params }: PageProps) {
  const { state } = await params;

  // Validate state slug
  if (!allStates.includes(state)) {
    notFound();
  }

  const content = getStateContentWithFallback(state);

  // Extract headings for Table of Contents
  const headings = [
    { id: 'why-credit-card-settlement', text: 'Why Credit Card Settlement Is Essential', level: 2 },
    { id: 'common-credit-card-problems', text: `Common Credit Card Problems in ${content.stateName}`, level: 2 },
    { id: 'credsettle-overview', text: "CredSettle – India's Trusted Credit Card Settlement Company", level: 2 },
    { id: 'rbi-compliant-process', text: 'Our RBI-Compliant Credit Card Settlement Process', level: 3 },
    { id: 'negotiation-help', text: 'How CredSettle Negotiates with Card Issuers', level: 3 },
    { id: 'legal-support', text: 'Legal Support through Our Lawyer Panel', level: 2 },
    { id: 'settlement-benefits', text: `Benefits of Credit Card Settlement in ${content.stateName}`, level: 2 },
    { id: 'rbi-guidelines', text: 'RBI Guidelines & Cardholder Rights', level: 2 },
    { id: 'step-by-step-guide', text: 'Step-by-Step Guide to Credit Card Settlement', level: 2 },
    { id: 'case-study', text: `Real Case Study: Credit Card Settlement in ${content.stateName}`, level: 2 },
    { id: 'final-thoughts', text: 'Final Thoughts – Break Free from Credit Card Debt', level: 2 },
    { id: 'faqs', text: 'Frequently Asked Questions', level: 2 }
  ];

  // Generate structured data for the page
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: content.title,
    description: content.metaDescription,
    serviceType: 'Credit Card Settlement',
    areaServed: {
      '@type': 'State',
      name: content.stateName
    },
    provider: {
      '@type': 'Organization',
      name: 'CredSettle',
      url: 'https://credsettle.com'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <StatePageClient content={content} headings={headings} />
    </>
  );
}







