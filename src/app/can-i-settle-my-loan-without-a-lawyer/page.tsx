import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SettleLoanWithoutLawyerClient from './SettleLoanWithoutLawyerClient';

export const metadata: Metadata = {
  title: 'Can I Settle My Loan Without a Lawyer in India? | 2025 Guide | CredSettle',
  description: 'Can I settle my loan without a lawyer in India? Learn the DIY settlement process, RBI 2025 guidelines, and when legal help is mandatory. 5000+ word expert guide.',
  alternates: {
    canonical: 'https://www.credsettle.com/can-i-settle-my-loan-without-a-lawyer',
  },
  keywords: 'can i settle loan without lawyer, diy loan settlement india, settle bank loan on my own, lawyer required for debt settlement, rbi rules settlement 2025',
};

export default function SettleLoanWithoutLawyerPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headLine: 'Can I Settle My Loan Without a Lawyer? The 2025 DIY Debt Settlement Roadmap',
    description: 'An exhaustive analysis of resolving bank debts in India without legal counsel. Covers negotiation tactics, legal rights, and RBI recovery frameworks.',
    image: 'https://www.credsettle.com/images/loan-settlement-no-lawyer.jpg',
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
        name: 'Can I Settle My Loan Without a Lawyer',
        item: 'https://www.credsettle.com/can-i-settle-my-loan-without-a-lawyer',
      },
    ],
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Script
        id="article-schema-no-lawyer"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema-no-lawyer"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SettleLoanWithoutLawyerClient />
      <Footer />
    </div>
  );
}
