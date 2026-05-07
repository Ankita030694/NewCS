import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TradingLoanSettlementClient from './TradingLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Trading Loan Settlement India | Expert Debt Relief for Traders',
  description: 'Struggling with debt from trading losses? Get expert trading loan settlement services in India. We help with bank negotiations, OTS, and protection from harassment.',
  keywords: [
    'trading loan settlement',
    'debt relief for traders india',
    'stock market loss debt settlement',
    'margin loan settlement',
    'one time settlement for trading losses',
    'how to settle trading debt',
    'bank negotiation for traders',
    'trading debt recovery help',
    'credit card settlement for traders',
    'personal loan settlement after trading loss'
  ],
  openGraph: {
    title: 'Expert Trading Loan Settlement Services | CredSettle',
    description: 'Professional legal and negotiation assistance for traders facing heavy debt. Settle your trading loans for a fraction of the cost.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/trading-loan-settlement'
  },
  alternates: {
    canonical: 'https://credsettle.com/trading-loan-settlement'
  }
};

export default function TradingLoanSettlementPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://credsettle.com/trading-loan-settlement',
    name: 'CredSettle Trading Loan Debt Resolution',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Expert financial and legal services for traders looking to settle loans and recover from trading-induced debt.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
      addressCountry: 'IN'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1250',
      bestRating: '5',
      worstRating: '1'
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
        'item': 'https://credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Trading Loan Settlement',
        'item': 'https://credsettle.com/trading-loan-settlement'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'The Ultimate Guide to Trading Loan Settlement in India: Recovering from Financial Loss',
    'description': 'A comprehensive guide for traders on how to settle loans taken for trading, understand legal rights, and navigate bank negotiations after market losses.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-07',
    'dateModified': '2026-05-07',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/trading-loan-settlement'
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #0f172a 0%, #1e293b 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Expert Trading Loan<br />
            <span className="text-blue-400">Settlement Services in India</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Struggling with debt after stock market losses? We specialize in negotiating One-Time Settlements (OTS) for trading-related loans and credit card debt.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Consult a Settlement Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <TradingLoanSettlementClient />
      
      <Footer />
    </div>
  );
}
