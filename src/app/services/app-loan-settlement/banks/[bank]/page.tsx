import { Metadata } from 'next';
import { getBankContentWithFallback, getAllBankSlugs } from '../../banks-content';
import { sanitizeMetaTitle, sanitizeMetaDescription } from '@/lib/seo-utils';
import BankPageClient from './BankPageClient';

interface PageProps {
  params: Promise<{
    bank: string;
  }>;
}

export async function generateStaticParams() {
  const bankSlugs = getAllBankSlugs();
  return bankSlugs.map((bank) => ({
    bank: bank
  }));
}

export const dynamicParams = true; // Allow dynamic params not in generateStaticParams

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { bank } = await params;
  const content = getBankContentWithFallback(bank);
  const metaTitle = sanitizeMetaTitle(content.metaTitle || content.title);
  const metaDescription = sanitizeMetaDescription(content.metaDescription);

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: content.keywords.join(', '),
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: 'article',
      url: `https://www.credsettle.com/services/app-loan-settlement/banks/${content.slug}`
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription
    },
    alternates: {
      canonical: `https://www.credsettle.com/services/app-loan-settlement/banks/${content.slug}`
    }
  };
}

export default async function BankPage({ params }: PageProps) {
  const { bank } = await params;

  const content = getBankContentWithFallback(bank);

  // Generate headings for Table of Contents
  const headings = [
    { id: 'why-choose-settlement', text: `Why Choose ${content.bankName} App Loan Settlement`, level: 2 },
    { id: 'understanding-settlement', text: `${content.bankName} App Loan Settlement Process`, level: 3 },
    { id: 'how-credsettle-helps', text: `How CredSettle Settles ${content.bankName} App Loan Debt`, level: 3 },
    { id: 'cibil-impact', text: `Impact of ${content.bankName} App Loan Settlement on Your CIBIL Score`, level: 3 },
    { id: 'why-choose-credsettle', text: `Why Choose CredSettle for ${content.bankName} App Loan Settlement`, level: 3 },
    { id: 'step-by-step-process', text: `Steps to Settle ${content.bankName} App Loan Debt`, level: 3 },
    { id: 'documents-required', text: `Documents for ${content.bankName} App Loan Settlement`, level: 3 },
    { id: 'faqs', text: `${content.bankName} App Loan Settlement FAQs`, level: 3 },
    { id: 'get-legal-help', text: `Get Legal Help for ${content.bankName} App Loan`, level: 3 }
  ];

  // Generate structured data for the page
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: content.title,
    description: content.metaDescription,
    author: {
      '@type': 'Person',
      name: 'Ashish Jhangra',
      url: 'https://www.credsettle.com/author/ashish-jhangra',
      image: 'https://www.credsettle.com/ashishjhangra.png',
      sameAs: [
        'https://www.linkedin.com/in/ashish-jhangra-ab1a54127/'
      ],
      jobTitle: 'Legal & Debt Resolution Professional',
      worksFor: {
        '@type': 'Organization',
        name: 'CredSettle',
        url: 'https://www.credsettle.com'
      }
    },
    publisher: {
      '@type': 'Organization',
      name: 'CredSettle',
      url: 'https://www.credsettle.com'
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.credsettle.com/services/app-loan-settlement/banks/${content.slug}`
    },
    about: {
      '@type': 'FinancialService',
      name: `${content.bankName} App Loan Settlement`,
      provider: {
        '@type': 'Organization',
        name: 'CredSettle',
        url: 'https://www.credsettle.com'
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BankPageClient content={content} headings={headings} />
    </>
  );
}







