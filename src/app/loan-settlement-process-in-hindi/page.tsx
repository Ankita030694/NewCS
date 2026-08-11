import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanSettlementHindiClient from './LoanSettlementHindiClient';

export const metadata: Metadata = {
  title: 'Loan Settlement Process in Hindi (RBI Rules 2025)',
  description: 'लोन सेटलमेंट प्रक्रिया (Loan Settlement Process in Hindi) 2025. जानें स्टेप-बाय-स्टेप गाइड, RBI के नियम, सिबिल (CIBIL) पर असर और कानूनी अधिकार। 5000+ शब्दों की विस्तृत गाइड।',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement-process-in-hindi',
  },
  keywords: 'loan settlement process in hindi, loan settlement rbi rules 2025 hindi, bank loan settlement steps hindi, cibil score after settlement hindi, legal rights of borrowers hindi',
};

export default function LoanSettlementHindiPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headLine: 'Loan Settlement Process in Hindi: The Complete 2025 Guide (लोन सेटलमेंट प्रक्रिया)',
    description: 'An exhaustive 5000+ word guide in Hindi explaining the legal, financial, and CIBIL aspects of loan settlement in India for 2025.',
    image: 'https://www.credsettle.com/images/loan-settlement-hindi.jpg',
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
        name: 'Loan Settlement Process in Hindi',
        item: 'https://www.credsettle.com/loan-settlement-process-in-hindi',
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-white mt-5">
      <Navbar />
            <div className="relative z-10">
      <Script
        id="article-schema-hindi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema-hindi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LoanSettlementHindiClient />
                  </div>
            <Footer />
    </div>
  );
}
