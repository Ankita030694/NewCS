import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanSettlementVsDebtConsolidationClient from './LoanSettlementVsDebtConsolidationClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Loan Settlement vs Debt Consolidation: Which reduces EMI better?',
  description: 'Struggling with high EMIs? Compare loan settlement services and debt consolidation companies. Find out which is better for reducing your monthly debt burden in India.',
  keywords: [
    'loan settlement vs debt consolidation',
    'reducing emi',
    'debt relief india',
    'loan settlement services',
    'debt consolidation companies',
    'how to reduce loan emi',
    'debt management plan',
    'credit card debt settlement',
    'personal loan consolidation',
    'financial distress solutions'
  ],
  openGraph: {
    title: 'Loan Settlement vs Debt Consolidation: Best for EMI Reduction',
    description: 'A comprehensive guide comparing loan settlement and debt consolidation for reducing monthly EMIs and achieving debt freedom.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/loan-settlement-services-vs-debt-consolidation-companies-which-is-better-for-reducing-emi'
  },
  alternates: {
    canonical: 'https://credsettle.com/loan-settlement-services-vs-debt-consolidation-companies-which-is-better-for-reducing-emi'
  }
};

export default function LoanSettlementVsDebtConsolidationPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://credsettle.com/loan-settlement-services-vs-debt-consolidation-companies-which-is-better-for-reducing-emi',
    name: 'CredSettle Debt Advisory Services',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Expert guidance on loan settlement and debt consolidation to help you reduce EMIs and manage debt effectively.',
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
          'name': 'Amit Verma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle helped me understand the difference between settlement and consolidation. Their advice on reducing my EMI was life-changing.',
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
        'reviewBody': 'I was confused between a consolidation loan and settlement. CredSettle provided a clear roadmap that helped me reduce my monthly burden significantly.',
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
        'reviewBody': 'The best consultancy for anyone struggling with multiple EMIs. They actually care about your financial health.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Meera Nair'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Very professional team. They explained the legal risks and benefits of both options very clearly.',
        'itemReviewed': {
          '@type': 'FinancialService',
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
        'reviewBody': 'Highly recommend their services for debt relief. They saved me from a lot of mental stress.',
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
        'name': 'Loan Settlement vs Debt Consolidation',
        'item': 'https://credsettle.com/loan-settlement-services-vs-debt-consolidation-companies-which-is-better-for-reducing-emi'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Loan Settlement vs Debt Consolidation: Which is Better for Reducing EMI?',
    'description': 'A detailed comparison between loan settlement services and debt consolidation companies to help you decide the best path for EMI reduction.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-11',
    'dateModified': '2026-05-11',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/loan-settlement-services-vs-debt-consolidation-companies-which-is-better-for-reducing-emi'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://credsettle.com/credsettle-logo.svg'
      }
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
            Loan Settlement vs Debt Consolidation:<br />
            <span className="text-blue-400">Which is Better for Reducing EMI?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Struggling with multiple loan payments? Discover whether settling your debts or consolidating them into one loan is the most effective way to lower your monthly EMI burden.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Free Debt Assessment
            </Link>
          </div>
        </div>
      </section>

      <LoanSettlementVsDebtConsolidationClient />

      <Footer />
    </div>
  );
}
