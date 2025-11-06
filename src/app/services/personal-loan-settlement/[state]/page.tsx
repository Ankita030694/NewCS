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

  // Extract headings for Table of Contents - dynamic based on content format
  const headings = content.whyLoanSettlement
    ? [
        { id: 'why-loan-settlement', text: 'Why Loan Settlement Is a Smart Financial Step', level: 2 },
        { id: 'common-loan-problems', text: `Common Loan Problems Faced in ${content.stateName}`, level: 2 },
        { id: 'credsettle-overview', text: "CredSettle – India's Trusted Loan Settlement Company", level: 2 },
        { id: 'rbi-compliant-process', text: 'Our RBI-Compliant Loan Settlement Process', level: 3 },
        { id: 'negotiation-help', text: 'How CredSettle Helps You Negotiate with Banks & NBFCs', level: 3 },
        { id: 'legal-support', text: 'Legal Support through Our Lawyer Panel', level: 2 },
        { id: 'types-of-loans', text: `Types of Loans We Help Settle in ${content.stateName}`, level: 2 },
        { id: 'benefits', text: `Benefits of Choosing CredSettle for Loan Settlement in ${content.stateName}`, level: 2 },
        { id: 'rbi-guidelines', text: 'RBI Guidelines & Legal Rights of Borrowers', level: 2 },
        { id: 'step-by-step-guide', text: 'Step-by-Step Guide to Start Loan Settlement with CredSettle', level: 2 },
        { id: 'case-study', text: `Real Case Study: Loan Settlement Success in ${content.stateName}`, level: 2 },
        { id: 'final-thoughts', text: 'Final Thoughts – Take the First Step Toward a Debt-Free Life', level: 2 },
        { id: 'faqs', text: 'Frequently Asked Questions', level: 2 }
      ]
    : [
        { id: 'introduction', text: 'Introduction', level: 1 },
        { id: 'overview', text: 'Overview', level: 1 },
        { id: 'benefits', text: 'Benefits', level: 1 },
        { id: 'process', text: 'Settlement Process', level: 1 },
        { id: 'legal-aspects', text: 'Legal Aspects', level: 1 },
        { id: 'faqs', text: 'Frequently Asked Questions', level: 1 }
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

