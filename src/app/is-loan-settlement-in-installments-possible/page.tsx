import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InstallmentSettlementClient from './InstallmentSettlementClient';

export const metadata: Metadata = {
  title: 'Loan Settlement in Installments in India | CredSettle',
  description: 'Can you settle a bank loan in installments? Learn about structured debt settlement agreements, staged payments, RBI 2025 rules, and the 3-installment rule in India.',
  alternates: {
    canonical: 'https://www.credsettle.com/is-loan-settlement-in-installments-possible',
  },
  keywords: 'loan settlement in installments, structured debt settlement agreement india, staged loan settlement, bank settlement installments, can i settle loan in parts, rbi settlement rules 2025',
};

export default function InstallmentSettlementPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headLine: 'Is Loan Settlement in Installments Possible? The Complete 2025 Blueprint',
    description: 'An authoritative 5000+ word analysis of multi-part loan settlements with Indian banks. Covers legal contracts, payment schedules, and CIBIL impact.',
    image: 'https://www.credsettle.com/images/installment-settlement-guide.jpg',
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
        name: 'Is Loan Settlement in Installments Possible',
        item: 'https://www.credsettle.com/is-loan-settlement-in-installments-possible',
      },
    ],
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Script
        id="article-schema-installment"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema-installment"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <InstallmentSettlementClient />
      <Footer />
    </div>
  );
}
