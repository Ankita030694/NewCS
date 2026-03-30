import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CoBorrowerSettlementImpactClient from './CoBorrowerSettlementImpactClient';

export const metadata: Metadata = {
  title: 'Does Settlement Impact a Co-Borrower? | CIBIL Rules 2025',
  description: 'How does loan settlement affect a co-borrower credit score in India? Learn about joint liability, CIBIL impact, and legal rights. 5000+ word expert guide.',
  alternates: {
    canonical: 'https://www.credsettle.com/does-settlement-impact-a-co-borrower',
  },
  keywords: 'does settlement impact co-borrower, co-borrower credit score impact, joint loan settlement cibil, guarantor vs co-borrower liability, rbi rules co-borrower settlement',
};

export default function CoBorrowerSettlementPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headLine: 'Does Settlement Impact a Co-Borrower? The Detailed 2025 Impact Guide',
    description: 'An exhaustive analysis of how loan settlements affect co-borrowers and guarantors in India. Includes CIBIL reporting rules, legal liabilities, and protection strategies.',
    image: 'https://www.credsettle.com/images/co-borrower-settlement-impact.jpg',
    author: {
      '@type': 'Organization',
      name: 'CredSettle',
    },
    publisher: {
      '@type': 'Organization',
      name: 'CredSettle',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.credsettle.com/logo.png',
      },
    },
    datePublished: '2025-03-27',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.credsettle.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Does Settlement Impact a Co-Borrower',
        item: 'https://www.credsettle.com/does-settlement-impact-a-co-borrower',
      },
    ],
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Script
        id="article-schema-co-borrower"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema-co-borrower"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CoBorrowerSettlementImpactClient />
      <Footer />
    </div>
  );
}
