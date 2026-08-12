import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FindAgenciesClient from './FindAgenciesClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Find Reputable Agencies to Settle Credit Card Debt in India | Expert Help',
  description: 'Looking for reputable agencies that help settle credit card debt in India? Learn how to choose the best debt settlement company and get debt-free legally.',
  keywords: [
    'Find reputable agencies that help settle credit card debt in India',
    'debt settlement companies in India',
    'credit card debt relief India',
    'best debt settlement agencies India',
    'CredSettle debt settlement',
    'AmaLegalSolutions credit card help',
    'SettleLoans debt relief',
    'one time settlement credit card India',
    'RBI guidelines for debt settlement',
    'how to settle credit card debt in India'
  ],
  openGraph: {
    title: 'Top Rated Agencies for Credit Card Debt Settlement in India',
    description: 'Expert guide on finding reputable agencies to settle your credit card debt in India. Understand the process, legalities, and top providers.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/find-reputable-agencies-that-help-settle-credit-card-debt-in-india'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/find-reputable-agencies-that-help-settle-credit-card-debt-in-india'
  }
};

export default function FindAgenciesPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/find-reputable-agencies-that-help-settle-credit-card-debt-in-india',
    name: 'CredSettle Debt Settlement Services India',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Leading agency helping Indians settle credit card debt and loans through expert negotiation and legal support.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      addressCountry: 'IN'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
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
        'name': 'Find Reputable Agencies to Settle Credit Card Debt',
        'item': 'https://www.credsettle.com/find-reputable-agencies-that-help-settle-credit-card-debt-in-india'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How to Find Reputable Agencies that Help Settle Credit Card Debt in India',
    'description': 'A comprehensive guide for Indian consumers looking to settle their mounting credit card debt using professional agencies. Includes RBI guidelines and selection criteria.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-12',
    'dateModified': '2025-05-12',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/find-reputable-agencies-that-help-settle-credit-card-debt-in-india'
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #1a365d 0%, #001235 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Find Reputable Agencies That Help<br />
            <span className="text-blue-400">Settle Credit Card Debt in India</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Struggling with mounting credit card bills? Professional debt settlement agencies can help you negotiate with banks for a legal one-time settlement.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Free Debt Assessment
            </Link>
          </div>
        </div>
      </section>

      <FindAgenciesClient />

      <Footer />
    </div>
  );
}
