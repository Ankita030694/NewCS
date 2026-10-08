import { Metadata } from 'next';
import { getBankContentWithFallback, getBankH2Title, getAllBankSlugs, getShortBankName } from '../../banks-content';
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
  const shortName = getShortBankName(content.bankName);
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
      url: `https://www.credsettle.com/services/business-loan-settlement/banks/${content.slug}`
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription
    },
    alternates: {
      canonical: `https://www.credsettle.com/services/business-loan-settlement/banks/${content.slug}`
    }
  };
}

export default async function BankPage({ params }: PageProps) {
  const { bank } = await params;

  const content = getBankContentWithFallback(bank);
  const shortName = getShortBankName(content.bankName);

  // Generate headings for Table of Contents
    const headings = [
    { id: 'why-choose-settlement', text: getBankH2Title(content.bankName, 'Business Loan Settlement'), level: 2 },
    { id: 'understanding-settlement', text: `${shortName} Business Loan Settlement Process`, level: 3 },
    { id: 'how-credsettle-helps', text: `How CredSettle Settles ${shortName} Business Loan Debt`, level: 3 },
    { id: 'cibil-impact', text: `Impact of ${shortName} Business Loan Settlement on Your CIBIL Score`, level: 3 },
    { id: 'why-choose-credsettle', text: `Why Choose CredSettle for ${shortName} Business Loan Relief`, level: 3 },
    { id: 'step-by-step-process', text: `Steps to Settle ${shortName} Business Loan Debt`, level: 3 },
    { id: 'documents-required', text: `Documents for ${shortName} Business Loan Settlement`, level: 3 },
    { id: 'faqs', text: `${shortName} Business Loan Settlement FAQs`, level: 3 },
    { id: 'get-legal-help', text: `Get Legal Help for ${shortName} Business Loan`, level: 3 }
  ];

  // Generate structured data for the page
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: content.title,
    description: content.metaDescription,
    author: {
      '@type': 'Organization',
      name: 'CredSettle',
      url: 'https://www.credsettle.com'
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
      '@id': `https://www.credsettle.com/services/business-loan-settlement/banks/${content.slug}`
    },
    about: {
      '@type': 'FinancialService',
      name: `${content.bankName} Business Loan Settlement`,
      provider: {
        '@type': 'Organization',
        name: 'CredSettle',
        url: 'https://www.credsettle.com'
      }
    }
  };

  // FAQ structured data
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

