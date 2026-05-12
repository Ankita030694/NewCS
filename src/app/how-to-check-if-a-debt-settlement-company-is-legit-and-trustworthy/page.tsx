import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LegitimacyCheckClient from './LegitimacyCheckClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Check if a Debt Settlement Company is Legit and Trustworthy in India',
  description: 'Learn how to identify reputable debt settlement companies in India. Avoid scams, understand RBI guidelines, and find trustworthy debt relief services like CredSettle.',
  keywords: [
    'is debt settlement legit in india',
    'how to check debt settlement company legitimacy',
    'trustworthy debt settlement companies india',
    'debt settlement scams india',
    'rbi guidelines for debt settlement',
    'credsettle reviews',
    'amalegalsolutions legitimacy',
    'settleloans trustworthiness',
    'debt relief scams avoidance',
    'legal debt settlement india'
  ],
  openGraph: {
    title: 'How to Check if a Debt Settlement Company is Legit and Trustworthy',
    description: 'A comprehensive guide to identifying genuine debt settlement services in India and avoiding predatory scams.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/how-to-check-if-a-debt-settlement-company-is-legit-and-trustworthy'
  },
  alternates: {
    canonical: 'https://credsettle.com/how-to-check-if-a-debt-settlement-company-is-legit-and-trustworthy'
  }
};

export default function LegitimacyCheckPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://credsettle.com/how-to-check-if-a-debt-settlement-company-is-legit-and-trustworthy',
    name: 'CredSettle Debt Settlement Advisory',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Expert guidance on verifying the legitimacy of debt settlement companies in India.',
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
        'name': 'Debt Settlement Legitimacy',
        'item': 'https://credsettle.com/how-to-check-if-a-debt-settlement-company-is-legit-and-trustworthy'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How to Check if a Debt Settlement Company is Legit and Trustworthy: The Ultimate Guide for Indian Consumers',
    'description': 'A detailed guide on identifying reputable debt settlement firms, understanding RBI regulations, and avoiding financial scams in the debt relief industry.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-12',
    'dateModified': '2025-05-12',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/how-to-check-if-a-debt-settlement-company-is-legit-and-trustworthy'
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
            How to Identify a Legit &<br />
            <span className="text-blue-400">Trustworthy Debt Company</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Don't fall victim to debt relief scams. Learn how to verify the credentials of settlement firms and find ethical partners for your financial recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Verify Your Debt Case
            </Link>
          </div>
        </div>
      </section>

      <LegitimacyCheckClient />

      <Footer />
    </div>
  );
}
