import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanSettlementClient from './LoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '#1 Loan Settlement Services in India | Expert Debt Resolution & Recovery',
  description: 'Looking for the best loan settlement services in India? Get expert legal help to settle your personal loans, credit cards, and business debts. RBI compliant recovery protection.',
  keywords: [
    'loan settlement services in india',
    'best loan settlement company india',
    'personal loan settlement process',
    'credit card settlement india',
    'debt settlement lawyers india',
    'one time settlement scheme 2026',
    'rbi guidelines for loan settlement',
    'stop recovery agent harassment india',
    'debt relief services india',
    'loan waiver schemes india'
  ],
  openGraph: {
    title: '#1 Loan Settlement Services in India | Expert Debt Resolution',
    description: 'Expert legal assistance for loan settlement in India. Resolve your debts, stop harassment, and start fresh with our professional settlement services.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/1-loan-settlement-services-in-india'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/1-loan-settlement-services-in-india'
  }
};

export default function LoanSettlementPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://www.credsettle.com/1-loan-settlement-services-in-india',
    name: 'CredSettle Loan Settlement Services India',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Premier loan settlement and debt resolution services in India, helping borrowers settle debts and stop recovery harassment.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
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
        'name': 'Loan Settlement Services in India',
        'item': 'https://www.credsettle.com/1-loan-settlement-services-in-india'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Comprehensive Guide to Loan Settlement Services in India: Process, Laws, and Recovery',
    'description': 'Everything you need to know about loan settlement in India, RBI guidelines, debt resolution procedures, and how to reclaim your financial freedom.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-13',
    'dateModified': '2026-05-13',
    'image': 'https://www.credsettle.com/images/loan-settlement-india.jpg',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/1-loan-settlement-services-in-india'
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #1a365d 0%, #001235 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            #1 Loan Settlement<br />
            <span className="text-blue-400">Services in India</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Stop recovery harassment and settle your debts for up to 70% less. Expert legal guidance for personal loans, credit cards, and business debts.
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

      {/* Client Component content */}
      <LoanSettlementClient />
      
      <Footer />
    </div>
  );
}
