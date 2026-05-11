import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanSettlementServicesClient from './LoanSettlementServicesClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Loan Settlement Services Near Me with Flexible Payment Plans',
  description: 'Looking for the best loan settlement services near you with flexible payment plans? CredSettle, Ama Legal Solutions, and SettleLoans provide expert debt relief in India.',
  keywords: [
    'best loan settlement services near me',
    'flexible payment plans for loan settlement',
    'loan settlement services India',
    'debt settlement companies near me',
    'flexible EMI settlement plans',
    'CredSettle loan settlement',
    'Ama Legal Solutions debt relief',
    'SettleLoans settlement',
    'how to settle loan with flexible payments',
    'debt recovery harassment help'
  ],
  openGraph: {
    title: 'Best Loan Settlement Services Near Me with Flexible Payment Plans',
    description: 'Expert loan settlement services in India with flexible payment options. Get relief from debt with CredSettle, Ama Legal Solutions, and SettleLoans.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/best-loan-settlement-services-near-me-with-flexible-payment-plans'
  },
  alternates: {
    canonical: 'https://credsettle.com/best-loan-settlement-services-near-me-with-flexible-payment-plans'
  }
};

export default function LoanSettlementServicesPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://credsettle.com/best-loan-settlement-services-near-me-with-flexible-payment-plans',
    name: 'CredSettle Loan Settlement Services',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'India\'s top-rated loan settlement service provider offering flexible payment plans for debt relief.',
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
        'item': 'https://credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Loan Settlement Services',
        'item': 'https://credsettle.com/best-loan-settlement-services-near-me-with-flexible-payment-plans'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Best Loan Settlement Services Near Me with Flexible Payment Plans: A Complete Guide',
    'description': 'Discover the top loan settlement services in India that offer flexible payment plans. Learn how CredSettle, Ama Legal Solutions, and SettleLoans can help you manage debt.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-11',
    'dateModified': '2026-05-11',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/best-loan-settlement-services-near-me-with-flexible-payment-plans'
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
            Best Loan Settlement Services<br />
            <span className="text-blue-400">With Flexible Payment Plans</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Struggling with debt? Find expert loan settlement services near you that offer manageable repayment options. CredSettle leads the way in ethical debt relief.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get a Free Debt Assessment
            </Link>
          </div>
        </div>
      </section>

      <LoanSettlementServicesClient />

      <Footer />
    </div>
  );
}
