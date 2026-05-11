import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FastestLoanSettlementClient from './FastestLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fastest Loan Settlement Service for Personal Loans in India | Expert Guide',
  description: 'Looking for the fastest resolution for personal loan settlement? Compare top services, understand timelines, and discover how to settle your debt quickly in India.',
  keywords: [
    'fastest loan settlement service',
    'personal loan settlement india',
    'quick debt resolution',
    'best loan settlement company',
    'settle personal loan fast',
    'debt settlement process india',
    'loan settlement timeline',
    'credsettle personal loan',
    'negotiating personal loan settlement',
    'debt relief services india'
  ],
  openGraph: {
    title: 'Which Loan Settlement Service is Fastest? | Expert Resolution Guide',
    description: 'Find out which services offer the quickest resolution for personal loans. Comprehensive comparison of Indian debt settlement options.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/which-loan-settlement-service-offers-the-fastest-resolution-for-personal-loans'
  },
  alternates: {
    canonical: 'https://credsettle.com/which-loan-settlement-service-offers-the-fastest-resolution-for-personal-loans'
  }
};

export default function FastestLoanSettlementPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://credsettle.com/which-loan-settlement-service-offers-the-fastest-resolution-for-personal-loans',
    name: 'CredSettle Debt Resolution Services',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Specialized debt settlement services helping Indians resolve personal loans and credit card debts through expert negotiation.',
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
        'name': 'Fastest Loan Settlement Service',
        'item': 'https://credsettle.com/which-loan-settlement-service-offers-the-fastest-resolution-for-personal-loans'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Which Loan Settlement Service Offers the Fastest Resolution for Personal Loans?',
    'description': 'A detailed guide on finding the quickest loan settlement services in India, understanding the negotiation timeline, and tips for fast debt resolution.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-02-15',
    'dateModified': '2026-05-11',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/which-loan-settlement-service-offers-the-fastest-resolution-for-personal-loans'
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
            Fastest Loan Settlement<br />
            <span className="text-blue-400">Resolution for Personal Loans</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Struggling with high-interest personal loans? Discover which settlement services offer the quickest turnaround and how to expedite your debt-free journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Expert Advice Now
            </Link>
          </div>
        </div>
      </section>

      <FastestLoanSettlementClient />

      <Footer />
    </div>
  );
}
