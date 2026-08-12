import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChequeBounceDelhiClient from './ChequeBounceDelhiClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Top Cheque Bounce Case Lawyers in Delhi | Section 138 NI Act Experts',
  description: 'Facing a cheque bounce case in Delhi NCR? Get expert legal help from top Section 138 NI Act lawyers. We handle legal notices, court representation, and recovery in Saket, Tis Hazari, and more.',
  keywords: [
    'cheque bounce case in delhi',
    'cheque bounce lawyer delhi',
    'section 138 NI act delhi',
    'legal notice for cheque bounce delhi',
    'cheque bounce case procedure delhi',
    'best lawyer for cheque bounce in delhi',
    'negotiable instruments act 1881 delhi',
    'cheque dishonour case delhi ncr',
    'saket court cheque bounce lawyers',
    'tis hazari court cheque bounce advocates',
    'dwarka court cheque bounce lawyers'
  ],
  openGraph: {
    title: 'Expert Cheque Bounce Case Lawyers in Delhi | Section 138 NI Act',
    description: 'Get professional legal assistance for cheque bounce cases in Delhi NCR. Quick filing, expert representation, and recovery solutions.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/cheque-bounce-case-in-delhi'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/cheque-bounce-case-in-delhi'
  }
};

export default function ChequeBounceDelhiPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://www.credsettle.com/cheque-bounce-case-in-delhi',
    name: 'CredSettle Cheque Bounce Legal Services Delhi',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert legal services for cheque bounce cases under Section 138 of the Negotiable Instruments Act in Delhi NCR.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Delhi',
      addressRegion: 'Delhi NCR',
      addressCountry: 'IN'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1120',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Amit Shrivastava'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Excellent experience with the legal team at Saket Court. They handled my Section 138 case very professionally and recovered the full amount.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Priya Verma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Highly recommend CredSettle for cheque bounce cases in Delhi. Their knowledge of the NI Act is top-notch.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      }
    ]
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
        'name': 'Cheque Bounce Case in Delhi',
        'item': 'https://www.credsettle.com/cheque-bounce-case-in-delhi'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Comprehensive Guide to Cheque Bounce Cases in Delhi: Procedure, Laws, and Recovery',
    'description': 'Everything you need to know about Section 138 of the Negotiable Instruments Act, filing a cheque bounce case in Delhi NCR, and how to recover your money.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-10',
    'dateModified': '2026-02-04',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/cheque-bounce-case-in-delhi'
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero Section - No Grid as requested */}
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
            Expert Cheque Bounce Case<br />
            <span className="text-blue-400">Lawyers in Delhi</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Fast-track your Section 138 recovery in Delhi NCR. Expert advocates handling legal notices, criminal complaints, and mediation for quick resolution in Saket, Tis Hazari, and Dwarka courts.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Free Case Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <ChequeBounceDelhiClient />
      
      <Footer />
    </div>
  );
}
