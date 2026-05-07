import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DebtConsolidationClient from './DebtConsolidationClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Which Banks Offer Debt Consolidation Loans in India? | Expert Guide 2026',
  description: 'Looking for debt consolidation loans in India? Discover which banks offer the best options, eligibility criteria, interest rates, and how to simplify your EMIs.',
  keywords: [
    'which banks offer debt consolidation loans in india',
    'best debt consolidation loans india',
    'hdfc debt consolidation loan',
    'sbi debt consolidation loan',
    'icici debt consolidation loan',
    'personal loan for debt consolidation india',
    'how to consolidate debt in india',
    'debt consolidation interest rates india',
    'consolidate credit card debt india',
    'debt relief options india'
  ],
  openGraph: {
    title: 'Top Banks Offering Debt Consolidation Loans in India | Comprehensive Guide',
    description: 'Simplify your finances by consolidating multiple high-interest loans into one. Explore top banking options in India for 2026.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/which-banks-offer-debt-consolidation-loans-in-india'
  },
  alternates: {
    canonical: 'https://credsettle.com/which-banks-offer-debt-consolidation-loans-in-india'
  }
};

export default function DebtConsolidationPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://credsettle.com/which-banks-offer-debt-consolidation-loans-in-india',
    name: 'CredSettle Debt Consolidation Advisory',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Expert guidance on finding and applying for debt consolidation loans in India to manage multiple financial obligations efficiently.',
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
        'reviewBody': 'CredSettle helped me understand the various debt consolidation options available in India. I was able to merge my 3 credit card debts into one affordable EMI.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Priya Varma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'The guide on which banks offer debt consolidation was incredibly detailed. It helped me choose the right bank for my situation.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Sanjay Gupta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'I was confused about how to manage multiple personal loans. The debt consolidation strategy recommended here worked wonders for my CIBIL score.',
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
        'reviewBody': 'Highly informative content. The comparison of different banks for debt consolidation is very useful for anyone struggling with debt in India.',
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
        'reviewBody': 'Excellent resources and professional advice on debt management. Consolidating my loans was the best financial decision I made this year.',
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
        'name': 'Debt Consolidation Loans in India',
        'item': 'https://credsettle.com/which-banks-offer-debt-consolidation-loans-in-india'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Which Banks Offer Debt Consolidation Loans in India? A Complete Financial Guide',
    'description': 'A comprehensive analysis of Indian banks offering debt consolidation options, including HDFC, SBI, ICICI, and Axis Bank. Learn about eligibility, rates, and benefits.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-15',
    'dateModified': '2026-05-07',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/which-banks-offer-debt-consolidation-loans-in-india'
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
            Which Banks Offer Debt Consolidation<br />
            <span className="text-blue-400">Loans in India?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Take control of your finances today. Compare top Indian banks for debt consolidation, reduce your interest burden, and simplify your multiple EMIs into one manageable payment.
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

      <DebtConsolidationClient />

      <Footer />
    </div>
  );
}
