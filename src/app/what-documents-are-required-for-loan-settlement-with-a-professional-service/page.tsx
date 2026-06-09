import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProfessionalDocumentsClient from './ProfessionalDocumentsClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Documents Required for Loan Settlement | CredSettle',
  description: 'Learn exactly what documents are required for loan settlement with a professional service. Get a complete checklist of identity, loan, and financial hardship records needed for successful negotiation.',
  keywords: [
    'documents required for loan settlement',
    'loan settlement documents checklist',
    'debt settlement paperwork india',
    'proof of financial hardship for loan settlement',
    'loan settlement proposal documents',
    'professional loan settlement service documents',
    'credit card settlement documents',
    'bank loan settlement requirements',
    'settlement letter requirements',
    'no dues certificate documentation'
  ],
  openGraph: {
    title: 'Essential Documents for Loan Settlement | Complete Guide',
    description: 'A comprehensive guide to the paperwork needed for a successful loan settlement through professional debt resolution services.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/what-documents-are-required-for-loan-settlement-with-a-professional-service'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/what-documents-are-required-for-loan-settlement-with-a-professional-service'
  }
};

export default function ProfessionalDocumentsPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/what-documents-are-required-for-loan-settlement-with-a-professional-service',
    name: 'CredSettle Loan Settlement Documentation Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert guidance on documentation for loan settlement and debt resolution in India.',
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
        'reviewBody': 'CredSettle helped me organize my termination letter and bank statements perfectly. They explained my hardship to the bank so well that I got a 60% waiver!',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Priya V.'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Expert guidance on which GST reports and P&L statements to show. It made all the difference in our negotiation.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Rahul K.'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Very efficient digital platform for uploading documents. Settled three of my credit card debts within four months.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Meenakshi S.'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'The team at CredSettle used my medical documents to show my genuine distress. The bank finally agreed to a settlement I could afford.',
        'itemReviewed': {
          '@type': 'FinancialService',
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
        'reviewBody': 'They helped me get a copy of my original sanction letter from the bank and then proceeded with the settlement. Excellent service.',
        'itemReviewed': {
          '@type': 'FinancialService',
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
        'name': 'Loan Settlement Required Documents',
        'item': 'https://www.credsettle.com/what-documents-are-required-for-loan-settlement-with-a-professional-service'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Comprehensive Guide to Documents Required for Loan Settlement with a Professional Service',
    'description': 'A detailed exploration of the identity, financial, and hardship documents needed to negotiate a successful loan settlement in India.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-11',
    'dateModified': '2026-05-11',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/what-documents-are-required-for-loan-settlement-with-a-professional-service'
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #1a365d 0%, #001235 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Documents Required for<br />
            <span className="text-blue-400">Professional Loan Settlement</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Prepare your case for a successful debt resolution. A complete guide to identity, loan, and financial hardship records required by lenders and professional agencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Professional Document Help
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <ProfessionalDocumentsClient />
      
      <Footer />
    </div>
  );
}
