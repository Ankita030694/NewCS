import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBankContentWithFallback, getAllBankSlugs, generateBankSlug } from '../../banks-content';
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

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: content.keywords.join(', '),
    openGraph: {
      title: content.title,
      description: content.metaDescription,
      type: 'article',
      url: `https://credsettle.com/services/personal-loan-settlement/banks/${content.slug}`
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.metaDescription
    },
    alternates: {
      canonical: `https://credsettle.com/services/personal-loan-settlement/banks/${content.slug}`
    }
  };
}

export default async function BankPage({ params }: PageProps) {
  const { bank } = await params;

  const content = getBankContentWithFallback(bank);

  // Generate headings for Table of Contents
  const headings = [
    { id: 'why-choose-settlement', text: `Why People Choose Loan Settlement with ${content.bankName}`, level: 2 },
    { id: 'understanding-settlement', text: `Understanding ${content.bankName} Loan Settlement Process`, level: 2 },
    { id: 'how-credsettle-helps', text: `How CredSettle Helps You Settle ${content.bankName} Loans Legally`, level: 2 },
    { id: 'cibil-impact', text: 'Impact of Loan Settlement on Your CIBIL Score', level: 2 },
    { id: 'why-choose-credsettle', text: `Why Choose CredSettle for ${content.bankName} Loan Settlement`, level: 2 },
    { id: 'step-by-step-process', text: `Step-by-Step Process to Start Your ${content.bankName} Loan Settlement`, level: 2 },
    { id: 'documents-required', text: `Documents Required for ${content.bankName} Loan Settlement`, level: 2 },
    { id: 'faqs', text: `FAQs on ${content.bankName} Loan Settlement`, level: 2 },
    { id: 'get-legal-help', text: `Get Legal Help Today – Start Your Settlement with ${content.bankName}`, level: 2 }
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
      '@id': `https://credsettle.com/services/personal-loan-settlement/banks/${content.slug}`
    },
    about: {
      '@type': 'FinancialService',
      name: `${content.bankName} Loan Settlement`,
      provider: {
        '@type': 'Organization',
        name: 'CredSettle',
        url: 'https://credsettle.com'
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
      <BankPageClient content={content} headings={headings} />
    </>
  );
}

