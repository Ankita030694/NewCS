import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CibilImprovementClient from './CibilImprovementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Improve CIBIL Score After Loan Settlement | Rebuild Credit Fast',
  description: 'Learn the exact steps to improve your CIBIL score after a loan settlement in India. From converting settled to closed to rebuilding with secured credit.',
  keywords: [
    'how to improve cibil score after loan settlement',
    'improve cibil score after settlement',
    'loan settlement impact on cibil',
    'convert settled to closed cibil',
    'rebuild credit score after settlement india',
    'how to increase cibil score from 500 to 750',
    'cibil score improvement tips',
    'secured credit card for cibil improvement',
    'remove settled status from cibil report',
    'credit score repair after loan settlement'
  ],
  openGraph: {
    title: 'Master Guide: Improving CIBIL Score After Loan Settlement',
    description: 'A comprehensive guide on rebuilding your credit score after a settlement. Practical steps to reach a 750+ CIBIL score.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/how-to-improve-cibil-score-after-loan-settlement'
  },
  alternates: {
    canonical: 'https://credsettle.com/how-to-improve-cibil-score-after-loan-settlement'
  }
};

export default function CibilImprovementPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://credsettle.com/how-to-improve-cibil-score-after-loan-settlement',
    name: 'CredSettle Credit Improvement Services',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Professional guidance and services to help you improve your CIBIL score and manage loan settlements effectively.',
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
        'name': 'How to Improve CIBIL Score After Loan Settlement',
        'item': 'https://credsettle.com/how-to-improve-cibil-score-after-loan-settlement'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Comprehensive Guide: How to Improve Your CIBIL Score After a Loan Settlement',
    'description': 'A detailed, step-by-step roadmap to rebuilding your credit health after settling a loan, including tips on documentation, credit cards, and financial habits.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-07',
    'dateModified': '2026-05-07',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/how-to-improve-cibil-score-after-loan-settlement'
    },
    'image': 'https://credsettle.com/images/cibil-improvement-guide.jpg'
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
            How to Improve CIBIL Score<br />
            <span className="text-blue-400">After Loan Settlement</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Rebuilding your credit after a settlement is a marathon, not a sprint. Follow our expert-backed strategies to transition from "Settled" to a healthy 750+ score.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Free Credit Consultation
            </Link>
          </div>
        </div>
      </section>

      <CibilImprovementClient />

      <Footer />
    </div>
  );
}
