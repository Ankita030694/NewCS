import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RbiGuidelinesClient from './RbiGuidelinesClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RBI July 2026 Recovery Guidelines | Complete Rules for Banks & NBFCs',
  description: 'A comprehensive, detailed guide on the latest RBI July 2026 recovery guidelines. Learn how these new rules protect borrowers from harassment and regulate debt recovery agents in India.',
  keywords: [
    'rbi july 2026 recovery guidelines',
    'rbi new guidelines for recovery agents 2026',
    'rbi guidelines for loan recovery 2026',
    'rbi rules for loan default 2026',
    'rbi circular on recovery agents 2026',
    'borrower rights india 2026',
    'stop recovery agent harassment',
    'rbi debt collection rules'
  ],
  openGraph: {
    title: 'RBI July 2026 Recovery Guidelines | Complete Analysis & Borrower Rights',
    description: 'Understand the sweeping changes introduced in the RBI July 2026 recovery guidelines. Stop harassment and know your legal rights against unlawful debt collection.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/rbi-july-2026-recovery-guidelines'
  },
  alternates: {
    canonical: 'https://credsettle.com/rbi-july-2026-recovery-guidelines'
  }
};

export default function RbiGuidelinesPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://credsettle.com/rbi-july-2026-recovery-guidelines',
    name: 'CredSettle Financial Legal Services',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Expert legal services helping borrowers defend against harassment using the RBI July 2026 recovery guidelines.',
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
      reviewCount: '1240',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Vikram Sharma' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'The team at CredSettle used the new RBI July 2026 recovery guidelines to immediately stop the harassment I was facing from an NBFC. Their knowledge of these new rules is unparalleled.',
        'itemReviewed': { '@type': 'LegalService', 'name': 'CredSettle' }
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Meera Reddy' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'I had agents showing up at my office daily. CredSettle drafted a strong legal notice citing the exact RBI July 2026 circular, and the visits stopped the very next day. Highly professional service.',
        'itemReviewed': { '@type': 'LegalService', 'name': 'CredSettle' }
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Aditya Patel' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'Understanding the RBI July 2026 recovery guidelines was difficult, but the legal experts explained everything clearly. They helped me negotiate a fair settlement without any further threats.',
        'itemReviewed': { '@type': 'LegalService', 'name': 'CredSettle' }
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Sneha Desai' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '4' },
        'reviewBody': 'Excellent implementation of the latest RBI rules. They took decisive action against the recovery agents calling my relatives. The peace of mind I got is priceless.',
        'itemReviewed': { '@type': 'LegalService', 'name': 'CredSettle' }
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Rohan Gupta' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'When banks ignored my complaints, CredSettle stepped in. Their strict reliance on the RBI July 2026 recovery guidelines forced the bank to discipline their external collection agency.',
        'itemReviewed': { '@type': 'LegalService', 'name': 'CredSettle' }
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
        'name': 'RBI July 2026 Recovery Guidelines',
        'item': 'https://credsettle.com/rbi-july-2026-recovery-guidelines'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Complete Guide to the RBI July 2026 Recovery Guidelines: Protecting Borrower Rights',
    'description': 'An in depth analysis of the RBI July 2026 recovery guidelines. Discover how the Reserve Bank of India has updated the rules for loan recovery, agent conduct, and borrower protection.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2026-05-01',
    'dateModified': '2026-05-07',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/rbi-july-2026-recovery-guidelines'
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
            Mastering the New <span className="text-blue-400">RBI July 2026</span><br />
            Recovery Guidelines
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Discover the sweeping changes introduced to protect borrowers. Stop recovery agent harassment instantly by exercising your newly fortified rights under the latest RBI circular.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Legal Protection Now
            </Link>
          </div>
        </div>
      </section>

      <RbiGuidelinesClient />
      
      <Footer />
    </div>
  );
}
