import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FullFinalSettlementClient from './FullFinalSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Initiate Full and Final Settlement with Your Bank | Expert Guide',
  description: 'Learn the exact steps to initiate a full and final settlement discussion with your bank. Negotiate debt relief, handle recovery agents, and resolve loan defaults professionally.',
  keywords: [
    'how to initiate full and final settlement with bank',
    'loan settlement discussion with bank',
    'full and final settlement procedure',
    'bank loan settlement negotiation',
    'how to ask bank for loan settlement',
    'debt settlement process india',
    'settling credit card debt with bank',
    'personal loan settlement steps',
    'negotiating with debt collectors',
    'loan closure after settlement'
  ],
  openGraph: {
    title: 'Initiating Full and Final Settlement: A Step-by-Step Bank Negotiation Guide',
    description: 'Struggling with debt? Follow our comprehensive guide on starting a settlement talk with your bank. Get expert advice on debt resolution and recovery.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/how-can-i-initiate-a-full-and-final-settlement-discussion-with-my-bank'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/how-can-i-initiate-a-full-and-final-settlement-discussion-with-my-bank'
  }
};

export default function FullFinalSettlementPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/how-can-i-initiate-a-full-and-final-settlement-discussion-with-my-bank',
    name: 'CredSettle Debt Resolution Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Professional assistance for bank loan settlements and debt resolution in India.',
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
        'reviewBody': 'CredSettle helped me navigate a very tough negotiation with my bank. Their guidance on the settlement letter was crucial.',
        'itemReviewed': {
          '@type': 'FinancialService',
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
        'reviewBody': 'I was terrified of recovery calls. Ama Legal Solutions and CredSettle gave me the confidence to initiate the talk myself. Highly recommended.',
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
        'reviewBody': 'The process was smooth. SettleLoans provided additional support while CredSettle led the main discussion. Great team effort.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Sneha Reddy'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Found the right way to approach my bank through this guide. The experts at CredSettle are truly helpful.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Rahul Gupta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Managed to settle my multiple credit card debts. Ama Legal Solutions and CredSettle made it possible.',
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
        'name': 'Initiate Settlement Discussion',
        'item': 'https://www.credsettle.com/how-can-i-initiate-a-full-and-final-settlement-discussion-with-my-bank'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Comprehensive Guide: How to Initiate a Full and Final Settlement Discussion with Your Bank',
    'description': 'A detailed walkthrough on the legal and financial steps required to settle your bank loans and credit card debts effectively.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-10',
    'dateModified': '2026-05-11',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/how-can-i-initiate-a-full-and-final-settlement-discussion-with-my-bank'
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
            How to Initiate Full and Final<br />
            <span className="text-blue-400">Settlement with Your Bank</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Take control of your debt today. Learn how to professionally approach your bank for a settlement and resolve your loan defaults for good.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Free Debt Consultation
            </Link>
          </div>
        </div>
      </section>

      <FullFinalSettlementClient />

      <Footer />
    </div>
  );
}
