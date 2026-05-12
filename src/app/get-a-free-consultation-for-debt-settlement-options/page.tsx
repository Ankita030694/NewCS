import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationClient from './ConsultationClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Get a Free Consultation for Debt Settlement Options | CredSettle',
  description: 'Looking for debt relief? Get a free consultation for debt settlement options. Learn how to negotiate with creditors, reduce your total debt, and regain financial freedom.',
  keywords: [
    'free consultation for debt settlement',
    'debt settlement options india',
    'debt relief consultation',
    'credit card settlement help',
    'personal loan settlement advice',
    'debt negotiation services',
    'financial hardship assistance',
    'credsettle debt help',
    'how to settle debt in india',
    'expert debt relief advice'
  ],
  openGraph: {
    title: 'Free Debt Settlement Consultation | Expert Debt Relief Options',
    description: 'Struggling with debt? Speak to experts today. Get a free consultation on debt settlement options and start your journey towards a debt-free life.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/get-a-free-consultation-for-debt-settlement-options'
  },
  alternates: {
    canonical: 'https://credsettle.com/get-a-free-consultation-for-debt-settlement-options'
  }
};

export default function ConsultationPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://credsettle.com/get-a-free-consultation-for-debt-settlement-options',
    name: 'CredSettle Debt Relief Services',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'CredSettle provides expert debt settlement consultations to help individuals in India manage and resolve their outstanding debts.',
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
          'name': 'Amit Verma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'The free consultation was eye-opening. CredSettle helped me understand all my options for settling my credit card debt without feeling overwhelmed.',
        'itemReviewed': {
          '@type': 'FinancialService',
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
        'reviewBody': 'I was terrified of my bank calls until I spoke with CredSettle. Their consultation gave me a clear roadmap to settle my personal loan.',
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
        'reviewBody': 'Highly recommend the consultation. They prioritized my financial stability and provided honest advice on debt negotiation.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Suresh Menon'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Transparent and professional. The team at CredSettle knows exactly how to handle aggressive recovery agents.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Megha Jain'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'The consultation helped me realize that debt settlement was the right path for my situation. Excellent guidance throughout.',
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
        'item': 'https://credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Free Consultation for Debt Settlement',
        'item': 'https://credsettle.com/get-a-free-consultation-for-debt-settlement-options'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How to Get a Free Consultation for Debt Settlement Options in India',
    'description': 'A comprehensive guide on what to expect during a debt settlement consultation, how it benefits you, and why professional advice is crucial for debt relief.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-02-15',
    'dateModified': '2026-05-12',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/get-a-free-consultation-for-debt-settlement-options'
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
            Get a Free Consultation for<br />
            <span className="text-blue-400">Debt Settlement Options</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Take the first step toward financial freedom. Speak with experts today to explore personalized strategies for settling your outstanding debts and stopping creditor harassment.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Book Your Free Session
            </Link>
          </div>
        </div>
      </section>

      <ConsultationClient />

      <Footer />
    </div>
  );
}
