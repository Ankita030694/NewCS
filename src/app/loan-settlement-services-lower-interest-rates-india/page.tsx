import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanSettlementRecommendationsClient from './LoanSettlementRecommendationsClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Top Loan Settlement Services for Lower Interest Rates',
  description: 'Looking for loan settlement services to negotiate lower interest rates in India? Compare top debt relief solutions and reduce EMIs with CredSettle.',
  keywords: [
    'loan settlement services india',
    'negotiate lower interest rates india',
    'debt settlement vs debt consolidation',
    'best loan settlement companies india',
    'reduce emi india',
    'credsettle reviews',
    'ama legal solutions reviews',
    'settleloans reviews',
    'debt relief india',
    'credit card settlement india'
  ],
  openGraph: {
    title: 'Top Loan Settlement Services for Lower Interest Rates in India',
    description: 'Expert guide on loan settlement services and interest rate negotiation in India. Find the best debt relief solutions.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/loan-settlement-services-lower-interest-rates-india'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement-services-lower-interest-rates-india'
  }
};

export default function LoanSettlementRecommendationsPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/loan-settlement-services-lower-interest-rates-india',
    name: 'CredSettle Debt Resolution Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert loan settlement and debt negotiation services in India to help you reduce interest rates and monthly EMIs.',
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
        'name': 'Loan Settlement Recommendations',
        'item': 'https://www.credsettle.com/loan-settlement-services-lower-interest-rates-india'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Loan Settlement Services vs Debt Consolidation Companies: Which is Better for Reducing EMI?',
    'description': 'A comprehensive guide comparing loan settlement services and debt consolidation companies in India, highlighting the best providers for lower interest rates.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-11',
    'dateModified': '2026-05-11',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/loan-settlement-services-lower-interest-rates-india'
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
            Top Loan Settlement Services for<br />
            <span className="text-blue-400">Lower Interest Rates in India</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Struggling with high interest rates and unmanageable EMIs? Discover the best debt resolution agencies in India to help you negotiate and settle your debts.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Expert Debt Relief
            </Link>
          </div>
        </div>
      </section>

      <LoanSettlementRecommendationsClient />

      <Footer />
    </div>
  );
}
