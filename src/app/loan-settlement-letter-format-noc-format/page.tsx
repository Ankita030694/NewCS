import { Metadata } from 'next';
import LoanSettlementNocFormatClient from './LoanSettlementNocFormatClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Loan Settlement Letter Format & NOC Format 2025: Templates & Samples',
  description: 'Download the latest loan settlement letter format and NOC format for SBI, HDFC, ICICI, and NBFCs. Learn how to draft a hardship letter and secure your No Dues Certificate.',
  keywords: 'loan settlement letter format, NOC format for bank loan, loan closure letter sample, CIBIL NOC sample, SBI settlement letter format, HDFC NOC letter',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement-letter-format-noc-format',
  },
};

export default function LoanSettlementNocFormatPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.credsettle.com/',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Loan Settlement Letter & NOC Format',
        'item': 'https://www.credsettle.com/loan-settlement-letter-format-noc-format',
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Loan Settlement Letter Format and NOC Format: The 2025 Defensive Guide',
    'description': 'A comprehensive guide on drafting loan settlement requests and understanding the critical importance of a No Objection Certificate (NOC) in India.',
    'image': 'https://www.credsettle.com/images/loan-settlement-letter-noc.jpg',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/logo.png',
      },
    },
    'datePublished': '2025-01-15',
    'dateModified': '2026-03-27',
  };

  return (
    <>
      <Navbar />
      <Script
        id="breadcrumb-schema-noc"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="article-schema-noc"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <LoanSettlementNocFormatClient />
      <Footer />
    </>
  );
}
