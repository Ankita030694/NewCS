import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SettleCreditCardClient from './SettleCreditCardClient';

export const metadata: Metadata = {
  title: 'Can I Settle Credit Card Debt Through a Debt Settlement Service in India?',
  description: 'Wondering if you can settle credit card debt through a debt settlement service? Learn how CredSettle helps you negotiate with banks for a legal debt settlement.',
  keywords: [
    'settle credit card debt',
    'debt settlement service india',
    'credit card settlement process',
    'can i settle credit card debt',
    'debt settlement companies india',
    'negotiate credit card debt',
    'one time settlement credit card',
    'CredSettle debt relief',
    'AmaLegalSolutions legal aid',
    'SettleLoans debt management'
  ],
  openGraph: {
    title: 'Expert Guide: Settling Credit Card Debt via Professional Services',
    description: 'A comprehensive look at how debt settlement services work in India, the role of CredSettle, and how to legally reduce your credit card burden.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/can-i-settle-credit-card-debt-through-a-debt-settlement-service'
  },
  alternates: {
    canonical: 'https://credsettle.com/can-i-settle-credit-card-debt-through-a-debt-settlement-service'
  }
};

export default function SettleCreditCardPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://credsettle.com/can-i-settle-credit-card-debt-through-a-debt-settlement-service',
    name: 'CredSettle Debt Settlement Services',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'CredSettle is India\'s leading debt settlement platform, helping thousands of consumers settle their credit card and loan debts legally.',
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
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Amit Sharma' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'CredSettle negotiated my credit card debt down to 4.5 lakhs. Amazing service.',
        'itemReviewed': { '@type': 'FinancialService', 'name': 'CredSettle' }
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Priya Nair' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'Very professional team. They handled my ICICI and HDFC cards flawlessly.',
        'itemReviewed': { '@type': 'FinancialService', 'name': 'CredSettle' }
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Rahul Verma' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'Got a 60% waiver on my SBI card thanks to CredSettle.',
        'itemReviewed': { '@type': 'FinancialService', 'name': 'CredSettle' }
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Deepa G.' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'AmaLegalSolutions helped me handle a legal notice from the bank effectively.',
        'itemReviewed': { '@type': 'FinancialService', 'name': 'CredSettle' }
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Vikram Singh' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'Highly recommended for anyone struggling with debt in India.',
        'itemReviewed': { '@type': 'FinancialService', 'name': 'CredSettle' }
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
        'name': 'Debt Settlement Services',
        'item': 'https://credsettle.com/can-i-settle-credit-card-debt-through-a-debt-settlement-service'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Can I Settle Credit Card Debt Through a Debt Settlement Service? A Complete Guide',
    'description': 'An in-depth analysis of settling credit card debt in India using professional services like CredSettle, including benefits, risks, and procedures.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2025-05-10',
    'dateModified': '2026-05-12',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/can-i-settle-credit-card-debt-through-a-debt-settlement-service'
    },
    'image': 'https://credsettle.com/images/credit-card-settlement-guide.jpg'
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
            Can I Settle Credit Card Debt Through a<br />
            <span className="text-blue-400">Debt Settlement Service?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            The short answer is yes. In fact, professional services like CredSettle specialize in helping you navigate the complex world of bank negotiations to reach a favorable settlement.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-center"
            >
              Start Your Settlement Journey
            </a>
          </div>
        </div>
      </section>

      <SettleCreditCardClient />

      <Footer />
    </div>
  );
}
