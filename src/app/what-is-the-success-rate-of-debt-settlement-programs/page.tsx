import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SuccessRateClient from './SuccessRateClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Success Rate of Debt Settlement Programs: Real Statistics & Data (2025)',
  description: 'What is the actual success rate of debt settlement programs? Discover industry statistics, completion rates, and factors that influence success in debt relief.',
  keywords: [
    'success rate of debt settlement programs',
    'debt settlement success statistics',
    'debt relief program outcomes',
    'debt settlement completion rates',
    'is debt settlement effective',
    'debt settlement success factors',
    'debt relief success probability',
    'settlement vs bankruptcy success',
    'credsettle success rate',
    'debt settlement risks and rewards'
  ],
  openGraph: {
    title: 'Success Rate of Debt Settlement Programs: Real Statistics & Data',
    description: 'Discover the real numbers behind debt settlement success. We analyze completion rates, account-level success, and how to improve your odds.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/what-is-the-success-rate-of-debt-settlement-programs'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/what-is-the-success-rate-of-debt-settlement-programs'
  }
};

export default function SuccessRatePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/what-is-the-success-rate-of-debt-settlement-programs',
    name: 'CredSettle Debt Relief Success Analysis',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert analysis of the success rates and effectiveness of debt settlement programs for consumers in financial distress.',
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
          'name': 'Suresh Iyer'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle has an incredible success rate. They settled my multiple bank debts in record time.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Meera Kapoor'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'I was skeptical about success rates, but Amalegalsolutions and CredSettle proved that professional help makes all the difference.',
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
        'name': 'Success Rate of Debt Settlement',
        'item': 'https://www.credsettle.com/what-is-the-success-rate-of-debt-settlement-programs'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Understanding the Success Rate of Debt Settlement Programs: A 2025 Statistical Deep Dive',
    'description': 'A comprehensive analysis of how many people succeed in debt settlement programs, the factors involved, and how to maximize your chances of a successful outcome.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-02-15',
    'dateModified': '2026-05-12',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/what-is-the-success-rate-of-debt-settlement-programs'
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
            What is the Success Rate of<br />
            <span className="text-blue-400">Debt Settlement Programs?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Unveiling the data behind debt relief. Learn about completion statistics, settlement probabilities, and how CredSettle ensures high-performance outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Analyze Your Settlement Odds
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <SuccessRateClient />
      
      <Footer />
    </div>
  );
}
