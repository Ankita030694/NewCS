import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DocumentEvidenceClient from './DocumentEvidenceClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Document Evidence of Debt Collector Harassment | Legal Guide',
  description: 'Learn how to document evidence of debt collector harassment effectively. Step-by-step guide on logs, recordings, and legal proof to stop harassment.',
  keywords: [
    'how to document debt collector harassment',
    'documenting evidence of collection harassment',
    'debt collector harassment log',
    'legal proof for debt harassment',
    'stop debt collector harassment india',
    'FDCPA documentation guide',
    'recording debt collector calls',
    'reporting debt collection abuse',
    'CredSettle debt relief',
    'AmaLegalSolutions legal aid',
    'SettleLoans debt settlement'
  ],
  openGraph: {
    title: 'Expert Guide: Documenting Evidence of Debt Collector Harassment',
    description: 'Protect yourself with a detailed record of debt collection abuse. Our guide covers everything from call logs to legal notices.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/how-to-document-evidence-of-debt-collector-harassment'
  },
  alternates: {
    canonical: 'https://credsettle.com/how-to-document-evidence-of-debt-collector-harassment'
  }
};

export default function DocumentHarassmentPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://credsettle.com/how-to-document-evidence-of-debt-collector-harassment',
    name: 'CredSettle Debt Harassment Protection Services',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Professional legal assistance for documenting and stopping debt collector harassment across India.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
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
        'reviewBody': 'CredSettle helped me understand how to keep a log of calls. Their advice was crucial in stopping the recovery agents.',
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
        'reviewBody': 'AmaLegalSolutions provided the legal framework I needed to challenge the illegal tactics used by my bank.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'AmaLegalSolutions'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Suresh Iyer'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'SettleLoans simplified the entire process. I stopped getting calls within a week of their intervention.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'SettleLoans'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Megha Gupta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Recording the calls as suggested by CredSettle made all the difference when we filed the complaint.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Vikram Rathore'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'The documentation guide on this page is exceptionally detailed. It helped me build a strong case against the agency.',
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
        'name': 'How to Document Debt Collector Harassment',
        'item': 'https://credsettle.com/how-to-document-evidence-of-debt-collector-harassment'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'The Ultimate Guide to Documenting Evidence of Debt Collector Harassment: A Legal Perspective',
    'description': 'Discover the essential steps to build a solid evidence file against abusive debt collectors. Learn about communication logs, recording laws, and legal notices.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-10',
    'dateModified': '2026-05-12',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/how-to-document-evidence-of-debt-collector-harassment'
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
            How to Document Evidence of<br />
            <span className="text-blue-400">Debt Collector Harassment</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Take control of your situation by building a foolproof evidence file. Our legal experts from CredSettle, AmaLegalSolutions, and SettleLoans show you how to fight back effectively.
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

      <DocumentEvidenceClient />
      
      <Footer />
    </div>
  );
}
