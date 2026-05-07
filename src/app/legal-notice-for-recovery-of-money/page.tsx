import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LegalNoticeClient from './LegalNoticeClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal Notice for Recovery of Money in India | Expert Guidance & Procedure',
  description: 'Need to recover money? Learn how to send a professional legal notice for recovery of money in India. Expert guide on procedure, timelines, and legal action.',
  keywords: [
    'legal notice for recovery of money',
    'money recovery legal notice format India',
    'recovery of money suit procedure',
    'legal notice for unpaid dues',
    'debt recovery lawyers india',
    'section 138 NI act notice',
    'summary suit order 37 CPC',
    'legal notice for loan recovery',
    'how to recover money from friend legally',
    'legal notice for outstanding payment'
  ],
  openGraph: {
    title: 'Expert Guide: Legal Notice for Recovery of Money in India',
    description: 'Master the process of money recovery with our comprehensive guide on legal notices. Fast-track your dues recovery today.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/legal-notice-for-recovery-of-money'
  },
  alternates: {
    canonical: 'https://credsettle.com/legal-notice-for-recovery-of-money'
  }
};

export default function LegalNoticePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://credsettle.com/legal-notice-for-recovery-of-money',
    name: 'CredSettle Money Recovery Legal Services',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Professional legal services for recovering outstanding debts and money in India through formal legal notices and court representation.',
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
    },
    review: [
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Amit Sharma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle helped me recover my business dues from a client who was avoiding my calls for a year. The legal notice worked wonders.',
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
        'reviewBody': 'Very professional drafting of the money recovery notice. They guided me through the whole process with patience.',
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
        'name': 'Legal Notice for Recovery of Money',
        'item': 'https://credsettle.com/legal-notice-for-recovery-of-money'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Complete Guide to Sending a Legal Notice for Recovery of Money in India',
    'description': 'An in-depth guide covering the legal framework, procedure, and strategic importance of a legal notice for recovering unpaid debts in India.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2026-05-07',
    'dateModified': '2026-05-07',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/legal-notice-for-recovery-of-money'
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
            Legal Notice for<br />
            <span className="text-blue-400">Recovery of Money</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Fast-track your debt recovery with professional legal notices. Expert assistance for unpaid loans, business dues, and salary recovery in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Consult a Recovery Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <LegalNoticeClient />
      
      <Footer />
    </div>
  );
}
