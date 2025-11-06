import { Metadata } from 'next';
import { getStateContentWithFallback, getAllStateSlugs } from '../states-content';
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

function generateSlug(stateName: string): string {
  return stateName.toLowerCase().replace(/\s+/g, '-');
}

export async function generateStaticParams() {
  return allStates.map((state) => ({
    state: generateSlug(state),
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ state: string }> | { state: string }
}): Promise<Metadata> {
  // Await params if it's a Promise (Next.js 15+)
  const resolvedParams = await Promise.resolve(params);
  const stateData = getStateContentWithFallback(resolvedParams.state);
  
  return {
    title: stateData.metaTitle || stateData.title,
    description: stateData.metaDescription,
    keywords: stateData.keywords?.join(', '),
    openGraph: {
      title: stateData.metaTitle || stateData.title,
      description: stateData.metaDescription,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: stateData.metaTitle || stateData.title,
      description: stateData.metaDescription,
    },
  };
}

// Helper function to generate headings from content
function generateHeadings(content: any) {
  const headings: Array<{ id: string; text: string; level: number }> = [];

  if (content.whyCarLoanSettlement) {
    headings.push({
      id: 'why-car-loan-settlement',
      text: `Why Car Loan Settlement Is Essential for ${content.stateName} Vehicle Owners`,
      level: 2
    });
  }

  if (content.commonCarLoanProblems) {
    headings.push({
      id: 'common-car-loan-problems',
      text: `Common Car Loan Problems Faced in ${content.stateName}`,
      level: 2
    });
  }

  if (content.credsettleOverview) {
    headings.push({
      id: 'credsettle-overview',
      text: 'CredSettle - India\'s Trusted Car Loan Settlement Company',
      level: 2
    });

    if (content.rbiCompliantProcess) {
      headings.push({
        id: 'rbi-compliant-process',
        text: 'Our RBI-Compliant Car Loan Settlement Process',
        level: 3
      });
    }

    if (content.negotiationHelp) {
      headings.push({
        id: 'negotiation-help',
        text: 'How CredSettle Helps You Negotiate with Lenders',
        level: 3
      });
    }
  }

  if (content.legalSupport) {
    headings.push({
      id: 'legal-support',
      text: 'Legal Support and Vehicle Protection',
      level: 2
    });
  }

  if (content.benefits) {
    headings.push({
      id: 'benefits',
      text: `Benefits of Choosing CredSettle for Car Loan Settlement in ${content.stateName}`,
      level: 2
    });
  }

  if (content.rbiGuidelines) {
    headings.push({
      id: 'rbi-guidelines',
      text: 'RBI Guidelines & Borrower Rights',
      level: 2
    });
  }

  if (content.stepByStepGuide) {
    headings.push({
      id: 'step-by-step-guide',
      text: 'Step-by-Step Guide to Car Loan Settlement with CredSettle',
      level: 2
    });
  }

  if (content.caseStudy) {
    headings.push({
      id: 'case-study',
      text: `Real Case Study: Car Loan Settlement Success in ${content.stateName}`,
      level: 2
    });
  }

  if (content.finalThoughts) {
    headings.push({
      id: 'final-thoughts',
      text: 'Final Thoughts - Take the First Step Toward Financial Freedom',
      level: 2
    });
  }

  // Always add FAQs
  headings.push({
    id: 'faqs',
    text: 'Frequently Asked Questions',
    level: 2
  });

  return headings;
}

export default async function StatePage({ 
  params 
}: { 
  params: Promise<{ state: string }> | { state: string }
}) {
  // Await params if it's a Promise (Next.js 15+)
  const resolvedParams = await Promise.resolve(params);
  const content = getStateContentWithFallback(resolvedParams.state);
  const headings = generateHeadings(content);
  
  return <StatePageClient content={content} headings={headings} />;
}







