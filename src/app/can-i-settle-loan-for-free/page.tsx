import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SettleFreeClient from './SettleFreeClient';

export const metadata: Metadata = {
  title: 'Can I Settle My Loan for Free? | Expert Guide to Debt Relief | CredSettle',
  description: 'Wondering if you can settle your loan for free? Learn about RBI 2025 guidelines, zero-fee settlement options for vulnerable groups, and how to negotiate debt legally in India.',
  keywords: [
    'can i settle loan for free',
    'loan settlement for free',
    'debt relief india zero fee',
    'how to settle loan without paying',
    'free loan settlement help',
    'rbi loan settlement guidelines 2025',
    'debt settlement process india',
    'settle personal loan for free',
    'credit card settlement free india'
  ],
  openGraph: {
    title: 'Can I Settle My Loan for Free? | CredSettle',
    description: 'A comprehensive guide on loan settlement costs, free debt relief options, and legal rights in India.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/can-i-settle-loan-for-free'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/can-i-settle-loan-for-free'
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function SettleFreePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/can-i-settle-loan-for-free',
    name: 'CredSettle Loan Settlement Advice',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert advice on loan settlement and debt relief in India.',
    telephone: '+91-8800226635',
    email: 'support@credsettle.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN'
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Can I Settle Loan for Free',
        'item': 'https://www.credsettle.com/can-i-settle-loan-for-free'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Can I Settle My Loan for Free? The Ultimate 2025 Guide for Borrowers',
    'description': 'An in-depth look at whether loan settlement can be done for free, covering legal rights, RBI guidelines, and debt relief options in India.',
    'author': {
      '@type': 'Organization',
      'name': 'Team IPRKaro'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2025-02-07',
    'dateModified': '2025-02-07',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/can-i-settle-loan-for-free'
    }
  };

  return (
    <div className="relative min-h-screen bg-white mt-5">
      <Navbar />
            <div className="relative z-10">
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      
      <SettleFreeClient />
      
                  </div>
            <Footer />
    </div>
  );
}
