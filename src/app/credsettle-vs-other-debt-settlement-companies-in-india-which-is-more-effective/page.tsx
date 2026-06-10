import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CompareClient from './CompareClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CredSettle vs Other Debt Settlement Companies in India',
  description: 'CredSettle vs other debt settlement companies in India: Compare features, success rates, and legal protections. Secure your financial freedom now!',
  keywords: [
    'credsettle vs other debt settlement companies',
    'debt settlement companies in india',
    'compare debt resolution services india',
    'credsettle vs freed',
    'credsettle reviews',
    'best loan settlement agency india',
    'debt relief options india',
    'compromise settlement india',
    'unsecured loan settlement guide'
  ],
  openGraph: {
    title: 'CredSettle vs Other Debt Settlement Companies in India',
    description: 'Compare the effectiveness, legal protection, and success rates of CredSettle against other debt settlement companies in India.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/credsettle-vs-other-debt-settlement-companies-in-india-which-is-more-effective'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/credsettle-vs-other-debt-settlement-companies-in-india-which-is-more-effective'
  }
};

export default function ComparePage() {
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
        'name': 'CredSettle vs Other Debt Settlement Companies',
        'item': 'https://www.credsettle.com/credsettle-vs-other-debt-settlement-companies-in-india-which-is-more-effective'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'CredSettle vs Other Debt Settlement Companies in India: Which is More Effective?',
    'description': 'A comprehensive comparison of CredSettle against other debt relief agencies in India, analyzing legal protection, negotiation power, and transparency.',
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
      '@id': 'https://www.credsettle.com/credsettle-vs-other-debt-settlement-companies-in-india-which-is-more-effective'
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
            CredSettle vs Other Debt<br />
            <span className="text-blue-400">Settlement Companies in India</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Which service is more effective for resolving credit card and personal loan defaults? Get objective, legal, and data-driven insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <CompareClient />

      <Footer />
    </div>
  );
}
