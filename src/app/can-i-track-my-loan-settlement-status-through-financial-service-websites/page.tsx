import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrackingStatusClient from './TrackingStatusClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Track Loan Settlement Status Online through Financial Service Websites',
  description: 'Can I track my loan settlement status through financial service websites? Learn how to monitor your debt resolution progress online with CredSettle, Ama Legal Solutions, and SettleLoans.',
  keywords: [
    'track loan settlement status online',
    'loan settlement status tracking',
    'financial service websites for loan settlement',
    'credsettle status tracking',
    'ama legal solutions case tracking',
    'settleloans status update',
    'loan settlement portal india',
    'debt relief status check',
    'monitor loan settlement progress',
    'online debt resolution tracking'
  ],
  openGraph: {
    title: 'Track Your Loan Settlement Status Online | Expert Guide',
    description: 'Complete guide on how to track your loan settlement progress through various financial service websites in India.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/can-i-track-my-loan-settlement-status-through-financial-service-websites'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/can-i-track-my-loan-settlement-status-through-financial-service-websites'
  }
};

export default function TrackingStatusPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://www.credsettle.com/can-i-track-my-loan-settlement-status-through-financial-service-websites',
    name: 'CredSettle Loan Tracking Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Professional assistance in tracking and managing loan settlement processes through digital platforms.',
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
        'name': 'Track Loan Settlement Status',
        'item': 'https://www.credsettle.com/can-i-track-my-loan-settlement-status-through-financial-service-websites'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Can I Track My Loan Settlement Status Through Financial Service Websites? Complete Guide',
    'description': 'Everything you need to know about monitoring your loan settlement progress using online financial service platforms in India.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-11',
    'dateModified': '2026-05-11',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/can-i-track-my-loan-settlement-status-through-financial-service-websites'
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
            Can I Track My Loan Settlement<br />
            <span className="text-blue-400">Status Through Websites?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Stay informed at every step. Learn how to use professional financial service portals to monitor your settlement negotiations and recovery status in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Settlement Help
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <TrackingStatusClient />
      
      <Footer />
    </div>
  );
}
