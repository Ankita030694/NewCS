import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HighValueSettlementClient from './HighValueSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Loan Settlement Services in India for High-Value Debt',
  description: 'Find the best loan settlement services in India for high-value debts. Compare top options, secure financial relief, and resolve your liabilities today!',
  keywords: [
    'best loan settlement services in india',
    'high value debt settlement india',
    'settling large debts with banks in india',
    'best debt resolution company for multi lakh loans',
    'business loan settlement agency india',
    'rbi rules for high value settlements',
    'cibil score impact of large loan settlements',
    'professional retail debt negotiators'
  ],
  openGraph: {
    title: 'Best Loan Settlement Services in India for High-Value Debt',
    description: 'Compare the effectiveness, cost, and legality of high-value loan settlement services in India. Find the best resolution for multi-lakh debt defaults.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/what-are-the-best-loan-settlement-services-in-india-for-high-value-debts'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/what-are-the-best-loan-settlement-services-in-india-for-high-value-debts'
  }
};

export default function HighValueSettlementPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/#organization',
    name: 'CredSettle',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Leading provider of professional debt settlement and loan negotiation services in India.',
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
        'name': 'Best Loan Settlement Services for High-Value Debts',
        'item': 'https://www.credsettle.com/what-are-the-best-loan-settlement-services-in-india-for-high-value-debts'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'What are the Best Loan Settlement Services in India for High-Value Debts?',
    'description': 'An expert analysis of the top loan settlement services in India for managing and settling large retail and business debts, outlining legal structures and negotiation best practices.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2026-06-10',
    'dateModified': '2026-06-10',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/what-are-the-best-loan-settlement-services-in-india-for-high-value-debts'
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
            What are the best loan settlement<br />
            <span className="text-blue-400">services in India?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Struggling with multi-lakh business loans or high credit card defaults? Find the most reliable legal-tech partners to negotiate waivers and protect your rights.
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

      <HighValueSettlementClient />

      <Footer />
    </div>
  );
}
