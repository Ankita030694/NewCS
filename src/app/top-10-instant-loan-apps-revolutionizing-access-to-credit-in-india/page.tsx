import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InstantLoanAppsClient from '@/app/top-10-instant-loan-apps-revolutionizing-access-to-credit-in-india/InstantLoanAppsClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Top 10 Instant Loan Apps in India 2026 | Revolutionizing Credit Access',
  description: 'Explore the top 10 instant loan apps in India that are revolutionizing credit access. Compare features, interest rates, and eligibility for quick personal loans.',
  keywords: [
    'top 10 instant loan apps in india',
    'instant loan apps revolutionizing credit',
    'best personal loan apps india',
    'quick credit access india',
    'digital lending apps india',
    'instant cash loan apps',
    'paperless loan apps india',
    'online personal loan india',
    'RBI registered loan apps',
    'fintech credit revolution india'
  ],
  openGraph: {
    title: 'Top 10 Instant Loan Apps in India: The Credit Revolution',
    description: 'Discover how instant loan apps are changing the financial landscape in India. A comprehensive guide to the best platforms for quick credit.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/top-10-instant-loan-apps-revolutionizing-access-to-credit-in-india'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/top-10-instant-loan-apps-revolutionizing-access-to-credit-in-india'
  }
};

export default function InstantLoanAppsPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/top-10-instant-loan-apps-revolutionizing-access-to-credit-in-india',
    name: 'CredSettle Financial Insights',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Comprehensive guide and analysis of instant loan apps and digital credit in India.',
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
        'name': 'Top 10 Instant Loan Apps India',
        'item': 'https://www.credsettle.com/top-10-instant-loan-apps-revolutionizing-access-to-credit-in-india'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Top 10 Instant Loan Apps Revolutionizing Access to Credit in India: A 2026 Deep Dive',
    'description': 'A comprehensive analysis of the top instant loan applications in India, exploring how technology is democratizing financial access for millions.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-15',
    'dateModified': '2026-05-07',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/top-10-instant-loan-apps-revolutionizing-access-to-credit-in-india'
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #0c2756 0%, #001235 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Top 10 Instant Loan Apps<br />
            <span className="text-blue-400">Revolutionizing Credit in India</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Discover the digital lending platforms that are democratizing financial access, offering paperless approvals, and providing lightning-fast credit to millions.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Consult a Credit Expert
            </Link>
          </div>
        </div>
      </section>

      <InstantLoanAppsClient />
      
      <Footer />
    </div>
  );
}
