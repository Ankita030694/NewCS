import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanSettlementAgenciesClient from './LoanSettlementAgenciesClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Top-Rated Loan Settlement Agencies in India for Reducing Credit Card Debt',
  description: 'Looking for the best loan settlement agencies in India? Compare top-rated companies for credit card debt relief and learn how to reduce your debt effectively.',
  keywords: [
    'top-rated loan settlement agencies in india',
    'credit card debt reduction india',
    'best debt settlement companies india',
    'loan settlement agencies for credit card debt',
    'reduce credit card debt india',
    'loan settlement services india',
    'debt relief agencies india',
    'credit card settlement process india',
    'loan settlement consultants india',
    'settle credit card debt india'
  ],
  openGraph: {
    title: 'Top-Rated Loan Settlement Agencies in India for Reducing Credit Card Debt',
    description: 'Expert guide to the best loan settlement agencies in India. Discover how to reduce credit card debt and find the right agency for your financial needs.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/top-rated-loan-settlement-agencies-in-india-for-reducing-credit-card-debt'
  },
  alternates: {
    canonical: 'https://credsettle.com/top-rated-loan-settlement-agencies-in-india-for-reducing-credit-card-debt'
  }
};

export default function LoanSettlementAgenciesPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://credsettle.com/top-rated-loan-settlement-agencies-in-india-for-reducing-credit-card-debt',
    name: 'CredSettle Loan Settlement Consultancy',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Leading loan settlement consultancy in India helping individuals reduce credit card debt through expert negotiation.',
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
          'name': 'Amit Verma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle helped me settle three credit cards with a 60% waiver. Their team is professional and handled all the calls from recovery agents.',
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
        'reviewBody': 'I was drowning in debt until I found CredSettle. They negotiated a very fair settlement for my personal loan. Highly recommended!',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Sandeep Gupta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Excellent service and transparent process. They explained the impact on CIBIL and helped me plan my recovery. Best settlement agency in India.',
        'itemReviewed': {
          '@type': 'FinancialService',
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
        'reviewBody': 'The team was very supportive during my financial crisis. They managed to get a great deal on my credit card settlement.',
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
        'reviewBody': 'Professional, reliable, and result-oriented. CredSettle is the go-to agency for anyone struggling with unsecured loans.',
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
        'name': 'Top-Rated Loan Settlement Agencies',
        'item': 'https://credsettle.com/top-rated-loan-settlement-agencies-in-india-for-reducing-credit-card-debt'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Top-Rated Loan Settlement Agencies in India for Reducing Credit Card Debt: A Complete Guide',
    'description': 'A comprehensive review of the best loan settlement agencies in India, their services, success rates, and how they help in reducing credit card debt.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-11',
    'dateModified': '2026-05-11',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/top-rated-loan-settlement-agencies-in-india-for-reducing-credit-card-debt'
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #0c2756 0%, #001235 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Top-Rated Loan Settlement<br />
            <span className="text-blue-400">Agencies in India</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Reduce your credit card debt and find financial freedom. We compare the best debt settlement companies in India to help you choose the right path.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Expert Debt Consultation
            </Link>
          </div>
        </div>
      </section>

      <LoanSettlementAgenciesClient />

      <Footer />
    </div>
  );
}
