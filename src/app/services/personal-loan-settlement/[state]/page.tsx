import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQWithSchema from '@/components/FAQWithSchema';
import TableOfContents from '@/components/TableOfContents';
import { getStateContentWithFallback, generateSlug } from '../states-content';
import { sanitizeMetaTitle, sanitizeMetaDescription } from '@/lib/seo-utils';
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
  const metaTitle = sanitizeMetaTitle(content.metaTitle || content.title);
  const metaDescription = sanitizeMetaDescription(content.metaDescription);

  return {
    alternates: { canonical: `https://www.credsettle.com/services/personal-loan-settlement/${state}` },
    title: metaTitle,
    description: metaDescription,
    keywords: content.keywords.join(', '),
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription
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

  // Extract headings for Table of Contents - dynamic based on content format
  const headings = content.whyLoanSettlement
    ? [
        { id: 'why-loan-settlement', text: `Personal Loan Settlement in ${content.stateName}`, level: 2 },
        { id: 'common-loan-problems', text: `Common Personal Loan Problems in ${content.stateName}`, level: 2 },
        { id: 'credsettle-overview', text: 'CredSettle - India’s Trusted Personal Loan Settlement Company', level: 2 },
        { id: 'rbi-compliant-process', text: `Our RBI-Compliant Personal Loan Settlement Process in ${content.stateName}`, level: 3 },
        { id: 'negotiation-help', text: `How CredSettle Helps You Negotiate with Banks in ${content.stateName}`, level: 3 },
        { id: 'legal-support', text: `Legal Support for Personal Loans in ${content.stateName}`, level: 2 },
        { id: 'types-of-loans', text: `Types of Personal Loans We Settle in ${content.stateName}`, level: 2 },
        { id: 'benefits', text: `Why Choose CredSettle for Personal Loan Settlement in ${content.stateName}`, level: 2 },
        { id: 'rbi-guidelines', text: `RBI Guidelines for Personal Loan Settlement in ${content.stateName}`, level: 2 },
        { id: 'step-by-step-guide', text: 'Guide to Personal Loan Settlement with CredSettle', level: 2 },
        { id: 'case-study', text: `Personal Loan Settlement Case Study in ${content.stateName}`, level: 2 },
        { id: 'final-thoughts', text: `Final Thoughts on Personal Loan Settlement in ${content.stateName}`, level: 2 },
        { id: 'faqs', text: `Personal Loan Settlement FAQs in ${content.stateName}`, level: 2 }
      ]
    : [
        { id: 'introduction', text: `About Loan Settlement in ${content.stateName}`, level: 2 },
        { id: 'overview', text: 'Loan Settlement Overview', level: 2 },
        { id: 'benefits', text: 'Benefits of Loan Settlement', level: 2 },
        { id: 'process', text: 'The Settlement Process', level: 2 },
        { id: 'legal-aspects', text: 'Legal Rights & Protections', level: 2 },
        { id: 'faqs', text: 'Frequently Asked Questions', level: 2 }
      ];

  // Generate structured data for the page
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: content.title,
    description: content.metaDescription,
    serviceType: 'Personal Loan Settlement',
    areaServed: {
      '@type': 'State',
      name: content.stateName
    },
    provider: {
      '@type': 'Organization',
      name: 'CredSettle',
      url: 'https://www.credsettle.com'
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

