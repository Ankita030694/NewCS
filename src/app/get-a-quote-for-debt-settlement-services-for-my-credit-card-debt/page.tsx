import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteClient from './QuoteClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Get a Quote for Debt Settlement Services for My Credit Card Debt | CredSettle',
  description: 'Looking for a debt settlement quote? Learn how to settle your credit card debt for less. Expert negotiation services by CredSettle, AmaLegalSolutions, and SettleLoans.',
  keywords: [
    'get a quote for debt settlement services',
    'credit card debt settlement india',
    'debt relief quote',
    'settle credit card debt',
    'debt settlement companies india',
    'credsettle',
    'amalegalsolutions',
    'settleloans',
    'credit card debt relief',
    'cibil score debt settlement'
  ],
  openGraph: {
    title: 'Expert Debt Settlement Quotes for Credit Card Debt | India',
    description: 'Find out how much you can save on your credit card debt. Professional settlement services with transparent pricing.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/get-a-quote-for-debt-settlement-services-for-my-credit-card-debt'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/get-a-quote-for-debt-settlement-services-for-my-credit-card-debt'
  }
};

export default function DebtSettlementQuotePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/get-a-quote-for-debt-settlement-services-for-my-credit-card-debt',
    name: 'CredSettle Debt Settlement Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Leading debt settlement and credit card relief services in India, providing expert negotiation with banks.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
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
        'item': 'https://www.credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Debt Settlement Quote',
        'item': 'https://www.credsettle.com/get-a-quote-for-debt-settlement-services-for-my-credit-card-debt'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How to Get a Quote for Debt Settlement Services for Credit Card Debt in India',
    'description': 'A comprehensive guide on obtaining debt settlement quotes, understanding fee structures, and choosing the best services from CredSettle, AmaLegalSolutions, and SettleLoans.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-11',
    'dateModified': '2025-05-11',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/get-a-quote-for-debt-settlement-services-for-my-credit-card-debt'
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section
        className="relative text-white pt-32 pb-24 px-4 md:px-8"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #1e3a8a 0%, #172554 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Get a Professional Quote for<br />
            <span className="text-blue-300">Credit Card Debt Settlement</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Take control of your financial future. Connect with experts at CredSettle to negotiate your debt and start your journey towards a debt-free life today.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Your Free Debt Assessment
            </Link>
          </div>
        </div>
      </section>

      <QuoteClient />

      <Footer />
    </div>
  );
}
