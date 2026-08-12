import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RiskClient from './RiskClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What Are the Risks of Entering a Debt Settlement Agreement in India?',
  description: 'Understand the potential risks of debt settlement including CIBIL score impact, legal consequences, and tax implications. Expert guide on settling loans safely.',
  keywords: [
    'risks of debt settlement agreement',
    'debt settlement risks india',
    'loan settlement impact on cibil',
    'legal risks of settling debt',
    'debt settlement scams india',
    'tax on forgiven debt india',
    'debt settlement vs bankruptcy india',
    'credsettle risks guide',
    'amalegalsolutions debt help',
    'settleloans review'
  ],
  openGraph: {
    title: 'Comprehensive Guide: Risks of Entering a Debt Settlement Agreement',
    description: 'Before you settle your debt, understand the long-term consequences. Learn about credit score drops, legal notices, and how to mitigate risks.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/what-are-the-risks-of-entering-a-debt-settlement-agreement'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/what-are-the-risks-of-entering-a-debt-settlement-agreement'
  }
};

export default function RiskPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://www.credsettle.com/what-are-the-risks-of-entering-a-debt-settlement-agreement',
    name: 'CredSettle Debt Resolution Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert guidance on debt settlement risks and safe loan resolution practices in India.',
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
        'item': 'https://www.credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Risks of Debt Settlement',
        'item': 'https://www.credsettle.com/what-are-the-risks-of-entering-a-debt-settlement-agreement'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'What Are the Risks of Entering a Debt Settlement Agreement? A Deep Dive for Indian Borrowers',
    'description': 'An exhaustive guide exploring the credit, legal, financial, and psychological risks associated with debt settlement agreements in India.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-12',
    'dateModified': '2026-05-12',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/what-are-the-risks-of-entering-a-debt-settlement-agreement'
    },
    'image': 'https://www.credsettle.com/images/debt-settlement-risks.jpg'
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #1e3a8a 0%, #172554 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            What Are the Risks of Entering a<br />
            <span className="text-blue-400">Debt Settlement Agreement?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Before you sign, understand the consequences. An in-depth analysis of how debt settlement impacts your CIBIL score, legal standing, and financial future in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Expert Risk Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <RiskClient />

      <Footer />
    </div>
  );
}
