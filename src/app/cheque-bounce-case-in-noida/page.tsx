import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChequeBounceNoidaClient from './ChequeBounceNoidaClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Top Cheque Bounce Case Lawyers in Noida | Section 138 NI Act Experts',
  description: 'Facing a cheque bounce case in Noida? Get expert legal help from top Section 138 NI Act lawyers. We handle legal notices, court representation, and recovery in Gautam Buddha Nagar District Court.',
  keywords: [
    'cheque bounce case in noida',
    'cheque bounce lawyer noida',
    'section 138 NI act noida',
    'legal notice for cheque bounce noida',
    'cheque bounce case procedure noida',
    'best lawyer for cheque bounce in noida',
    'negotiable instruments act 1881 noida',
    'cheque dishonour case noida',
    'surajpur court cheque bounce lawyers',
    'gautam buddha nagar court advocates'
  ],
  openGraph: {
    title: 'Expert Cheque Bounce Case Lawyers in Noida | Section 138 NI Act',
    description: 'Get professional legal assistance for cheque bounce cases in Noida. Quick filing, expert representation, and recovery solutions at Surajpur District Court.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/cheque-bounce-case-in-noida'
  },
  alternates: {
    canonical: 'https://credsettle.com/cheque-bounce-case-in-noida'
  }
};

export default function ChequeBounceNoidaPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://credsettle.com/cheque-bounce-case-in-noida',
    name: 'CredSettle Cheque Bounce Legal Services Noida',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Expert legal services for cheque bounce cases under Section 138 of the Negotiable Instruments Act in Noida and Greater Noida.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '920',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Amit Verma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Outstanding legal support for my cheque bounce case in Surajpur Court. The lawyers are very knowledgeable about Section 138.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Priya Sharma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle helped me recover a large pending amount from a business client in Noida. Highly professional team.',
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
        'item': 'https://credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Cheque Bounce Case in Noida',
        'item': 'https://credsettle.com/cheque-bounce-case-in-noida'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Comprehensive Guide to Cheque Bounce Cases in Noida: Procedure, Laws, and Recovery',
    'description': 'Complete guide on Section 138 of the Negotiable Instruments Act, filing a cheque bounce case in Noida, and legal recovery methods at Gautam Buddha Nagar Courts.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-02-04',
    'dateModified': '2026-02-04',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/cheque-bounce-case-in-noida'
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #0f172a 0%, #020617 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Expert Cheque Bounce Case<br />
            <span className="text-blue-500">Lawyers in Noida</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed text-gray-300">
            Fast-track your Section 138 recovery in Noida. Expert advocates handling legal notices, criminal complaints, and court representation at Gautam Buddha Nagar Courts.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Consult a Lawyer Now
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <ChequeBounceNoidaClient />
      
      <Footer />
    </div>
  );
}
