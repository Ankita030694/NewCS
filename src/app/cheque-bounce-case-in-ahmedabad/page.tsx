import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChequeBounceAhmedabadClient from './ChequeBounceAhmedabadClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Top Cheque Bounce Case Lawyers in Ahmedabad | Section 138 NI Act Experts',
  description: 'Facing a cheque bounce case in Ahmedabad? Get expert legal help from top Section 138 NI Act lawyers. We handle legal notices, court representation, and recovery in Mirzapur and Gheekanta courts.',
  keywords: [
    'cheque bounce case in ahmedabad',
    'cheque bounce lawyer ahmedabad',
    'section 138 NI act ahmedabad',
    'legal notice for cheque bounce ahmedabad',
    'cheque bounce case procedure ahmedabad',
    'best lawyer for cheque bounce in ahmedabad',
    'negotiable instruments act 1881 ahmedabad',
    'cheque dishonour case ahmedabad',
    'mirzapur court cheque bounce lawyers',
    'gheekanta court cheque bounce advocates'
  ],
  openGraph: {
    title: 'Expert Cheque Bounce Case Lawyers in Ahmedabad | Section 138 NI Act',
    description: 'Get professional legal assistance for cheque bounce cases in Ahmedabad. Quick filing, expert representation, and recovery solutions in Gujarat.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/cheque-bounce-case-in-ahmedabad'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/cheque-bounce-case-in-ahmedabad'
  }
};

export default function ChequeBounceAhmedabadPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://www.credsettle.com/cheque-bounce-case-in-ahmedabad',
    name: 'CredSettle Cheque Bounce Legal Services Ahmedabad',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert legal services for cheque bounce cases under Section 138 of the Negotiable Instruments Act in Ahmedabad, Gujarat.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
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
          'name': 'Chirag Shah'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Outstanding legal support for my cheque bounce case in Gheekanta Court. The team was very professional and recovered my funds efficiently.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Megha Patel'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'I highly recommend their Section 138 experts. They handled the legal notice and Mirzapur court proceedings with great expertise.',
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
        'name': 'Cheque Bounce Case in Ahmedabad',
        'item': 'https://www.credsettle.com/cheque-bounce-case-in-ahmedabad'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Comprehensive Guide to Cheque Bounce Cases in Ahmedabad: Procedure, Laws, and Recovery',
    'description': 'Complete roadmap for Section 138 NI Act cases in Ahmedabad. Learn about legal notices, court procedures in Gheekanta and Mirzapur, and 20% interim compensation.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-02-04',
    'dateModified': '2026-02-04',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/cheque-bounce-case-in-ahmedabad'
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <Script id="org-schema-ahmedabad" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema-ahmedabad" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema-ahmedabad" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero Section - No Grid as requested */}
      <section 
        className="relative text-white pt-32 pb-24 px-4 md:px-8"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #1e3a8a 0%, #0f172a 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Expert Cheque Bounce Case<br />
            <span className="text-blue-400">Lawyers in Ahmedabad</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Fast-track your Section 138 recovery in Gujarat. Expert advocates in Ahmedabad handling legal notices, criminal complaints, and 20% interim compensation.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Free Legal Case Review
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <ChequeBounceAhmedabadClient />
      
      <Footer />
    </div>
  );
}
