import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChequeBounceClient from './ChequeBounceClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Top Cheque Bounce Case Lawyers in Kolkata | Section 138 NI Act Experts',
  description: 'Facing a cheque bounce case in Kolkata? Get expert legal help from top Section 138 NI Act lawyers. We handle legal notices, court representation, and recovery.',
  keywords: [
    'cheque bounce case in kolkata',
    'cheque bounce lawyer kolkata',
    'section 138 NI act kolkata',
    'legal notice for cheque bounce india',
    'cheque bounce case procedure',
    'best lawyer for cheque bounce in kolkata',
    'negotiable instruments act 1881',
    'cheque dishonour case kolkata',
    'bankshall court cheque bounce lawyers',
    'alipur court cheque bounce advocates'
  ],
  openGraph: {
    title: 'Expert Cheque Bounce Case Lawyers in Kolkata | Section 138 NI Act',
    description: 'Get professional legal assistance for cheque bounce cases in Kolkata. Quick filing, expert representation, and recovery solutions.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/cheque-bounce-case-in-kolkata'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/cheque-bounce-case-in-kolkata'
  }
};

export default function ChequeBouncePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://www.credsettle.com/cheque-bounce-case-in-kolkata',
    name: 'CredSettle Cheque Bounce Legal Services Kolkata',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert legal services for cheque bounce cases under Section 138 of the Negotiable Instruments Act in Kolkata.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kolkata',
      addressRegion: 'West Bengal',
      addressCountry: 'IN'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '850',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Rajesh Mukherjee'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Excellent service for my cheque bounce case in Bankshall Court. The legal notice was very professionally drafted.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Ananya Das'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Highly recommend CredSettle for Section 138 cases. They helped me recover my dues from a tricky debtor in Alipur Court.',
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
        'name': 'Cheque Bounce Case in Kolkata',
        'item': 'https://www.credsettle.com/cheque-bounce-case-in-kolkata'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Comprehensive Guide to Cheque Bounce Cases in Kolkata: Procedure, Laws, and Recovery',
    'description': 'Everything you need to know about Section 138 of the Negotiable Instruments Act, filing a cheque bounce case in Kolkata, and how to recover your money.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-01-20',
    'dateModified': '2026-02-04',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/cheque-bounce-case-in-kolkata'
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
            <span className="text-blue-400">Lawyers in Kolkata</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Fast-track your Section 138 recovery. Expert advocates in Kolkata handling legal notices, criminal complaints, and mediation for quick resolution.
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
      <ChequeBounceClient />
      
      <Footer />
    </div>
  );
}
