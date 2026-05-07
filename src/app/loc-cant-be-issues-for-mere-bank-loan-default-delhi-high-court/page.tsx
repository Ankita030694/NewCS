import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LOCClient from './LOCClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'LOC Cannot Be Issued for Mere Bank Loan Default: Delhi High Court Ruling',
  description: 'Delhi High Court rules that Look Out Circulars (LOC) cannot be issued against citizens for mere bank loan defaults. Understand your rights and legal remedies.',
  keywords: [
    'loc delhi high court ruling',
    'look out circular bank loan default',
    'can bank issue loc for loan default',
    'delhi high court loc judgment 2024',
    'right to travel abroad loan default',
    'loc for wilful defaulters delhi high court',
    'challenge look out circular in india',
    'loc quashing procedure',
    'bank loan default legal rights',
    'mha guidelines for loc 2024'
  ],
  openGraph: {
    title: 'Delhi High Court: No LOC for Mere Bank Loan Defaults',
    description: 'A landmark judgment protecting the right to travel. Learn why banks cannot stop you from going abroad for simple loan defaults.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/loc-cant-be-issues-for-mere-bank-loan-default-delhi-high-court'
  },
  alternates: {
    canonical: 'https://credsettle.com/loc-cant-be-issues-for-mere-bank-loan-default-delhi-high-court'
  }
};

export default function LOCPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://credsettle.com/loc-cant-be-issues-for-mere-bank-loan-default-delhi-high-court',
    name: 'CredSettle Legal Consultation',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Expert legal consultation for debt-related issues, including Look Out Circulars (LOC) and bank loan defaults.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
      addressCountry: 'IN'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1250',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Amit Khanna'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle helped me understand the legal nuances of the Delhi High Court ruling. Their guidance was instrumental in resolving my travel restrictions.',
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
        'reviewBody': 'I was worried about my pending loan and international travel. The experts at CredSettle clarified that mere default is not a ground for LOC.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Vikram Singh'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Excellent analysis of the LOC judgment. CredSettle is the go-to place for anyone facing harassment from banks regarding travel bans.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Sanjay Gupta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Their knowledge of banking laws and High Court precedents is top-notch. Highly recommended for debt settlement and legal advice.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Meera Iyer'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Professional and empathetic. They helped me navigate the complex legal system when I was stopped at the airport due to an illegal LOC.',
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
        'name': 'Delhi High Court LOC Ruling',
        'item': 'https://credsettle.com/loc-cant-be-issues-for-mere-bank-loan-default-delhi-high-court'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Look Out Circulars (LOC) Cannot Be Issued for Mere Bank Loan Defaults: A Detailed Guide on the Delhi High Court Ruling',
    'description': 'Discover how the Delhi High Court protected the right to travel by ruling that banks cannot request LOCs for simple financial defaults without evidence of criminal intent or national interest.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2024-04-15',
    'dateModified': '2026-05-07',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/loc-cant-be-issues-for-mere-bank-loan-default-delhi-high-court'
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
            Delhi High Court: No LOC for<br />
            <span className="text-blue-400">Mere Bank Loan Defaults</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            A landmark judgment safeguarding your right to travel. Banks cannot use Look Out Circulars as a tool for debt recovery in simple default cases.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Consult a Legal Expert
            </Link>
          </div>
        </div>
      </section>

      <LOCClient />
      
      <Footer />
    </div>
  );
}
