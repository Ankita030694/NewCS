import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DebtConsolidationBadCreditClient from './DebtConsolidationBadCreditClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Which Banks Offer Debt Consolidation Loans for Bad Credit in India?',
  description: 'Looking for debt consolidation loans with bad credit? Discover which banks and NBFCs in India offer flexible options to consolidate your debt and improve your CIBIL score.',
  keywords: [
    'debt consolidation loans for bad credit india',
    'which banks offer debt consolidation for bad credit',
    'loan for debt consolidation with low cibil score',
    'nbfc debt consolidation bad credit',
    'personal loan for debt consolidation bad credit',
    'how to get debt consolidation with poor credit',
    'consolidate credit card debt with bad credit india',
    'debt relief options for bad credit',
    'best banks for debt consolidation india',
    'p2p lending for debt consolidation india'
  ],
  openGraph: {
    title: 'Expert Guide: Debt Consolidation Loans for Bad Credit in India',
    description: 'Find the best financial institutions in India that offer debt consolidation even if you have a low CIBIL score. Expert tips and alternatives inside.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/which-banks-offer-debt-consolidation-loans-for-bad-credit'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/which-banks-offer-debt-consolidation-loans-for-bad-credit'
  }
};

export default function DebtConsolidationBadCreditPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/which-banks-offer-debt-consolidation-loans-for-bad-credit',
    name: 'CredSettle Debt Consolidation Advisory',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Helping individuals in India find the best debt consolidation and settlement options despite bad credit scores.',
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
      reviewCount: '1240',
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
        'reviewBody': 'I had a CIBIL of 580 and was struggling with multiple credit card debts. CredSettle helped me understand my consolidation and settlement options clearly.',
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
        'reviewBody': 'Excellent guidance on which NBFCs to approach for debt consolidation with a fair credit score. Very professional service.',
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
        'name': 'Debt Consolidation for Bad Credit',
        'item': 'https://www.credsettle.com/which-banks-offer-debt-consolidation-loans-for-bad-credit'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Which Banks Offer Debt Consolidation Loans for Bad Credit in India? A Complete Guide',
    'description': 'A comprehensive analysis of banks, NBFCs, and alternative lenders in India that provide debt consolidation solutions for individuals with low credit scores.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-07',
    'dateModified': '2026-05-07',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/which-banks-offer-debt-consolidation-loans-for-bad-credit'
    },
    'image': 'https://www.credsettle.com/blog/debt-consolidation-bad-credit.jpg'
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
            Debt Consolidation Loans<br />
            <span className="text-blue-400">For Bad Credit in India</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Struggling with a low CIBIL score? Discover which banks and lenders offer real solutions to consolidate your high-interest debts into one manageable payment.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Expert Debt Advice
            </Link>
          </div>
        </div>
      </section>

      <DebtConsolidationBadCreditClient />

      <Footer />
    </div>
  );
}
