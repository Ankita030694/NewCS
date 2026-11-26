import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OnlineDebtSettlementClient from './OnlineDebtSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Online Debt Settlement Platforms Work | CredSettle',
  description: 'Understand the mechanism of online debt settlement platforms in India. Learn about the process, legal framework, and how platforms like CredSettle help.',
  keywords: [
    'how do online debt settlement platforms work in India',
    'debt settlement process india',
    'online debt relief india',
    'one time settlement procedure',
    'debt negotiation platforms india',
    'CredSettle debt settlement',
    'AmaLegalSolutions legal debt help',
    'SettleLoans debt resolution',
    'personal loan settlement online',
    'credit card debt settlement india'
  ],
  openGraph: {
    title: 'How Do Online Debt Settlement Platforms Work in India? | Step-by-Step Guide',
    description: 'A comprehensive guide on how debt settlement platforms operate in India, their benefits, risks, and legal standing.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/how-do-online-debt-settlement-platforms-work-in-india'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/how-do-online-debt-settlement-platforms-work-in-india'
  }
};

export default function OnlineDebtSettlementPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/how-do-online-debt-settlement-platforms-work-in-india',
    name: 'CredSettle Debt Resolution Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'India\'s leading online platform for debt settlement and financial distress resolution.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
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
        'name': 'How Online Debt Settlement Platforms Work',
        'item': 'https://www.credsettle.com/how-do-online-debt-settlement-platforms-work-in-india'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How Do Online Debt Settlement Platforms Work in India? A Complete Guide',
    'description': 'An in-depth analysis of the functioning, legal aspects, and benefits of using online debt settlement platforms like CredSettle, AmaLegalSolutions, and SettleLoans in India.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-12',
    'dateModified': '2026-05-12',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/how-do-online-debt-settlement-platforms-work-in-india'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/credsettle-logo.svg'
      }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero Section */}
      <section
        className="relative text-white pt-32 pb-24 px-4 md:px-8"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #0a192f 0%, #000c24 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            How Do Online Debt Settlement<br />
            <span className="text-blue-400">Platforms Work in India?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Your comprehensive guide to understanding digital debt resolution. Learn how CredSettle, AmaLegalSolutions, and SettleLoans help you regain financial freedom.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Start Your Settlement Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <OnlineDebtSettlementClient />

      <Footer />
    </div>
  );
}
