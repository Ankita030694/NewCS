import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CreditScoreClient from './CreditScoreClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Get 800 Credit Score in India | Step-by-Step Guide 2026',
  description: 'Master the art of reaching an 800+ credit score in India. Expert tips on CIBIL improvement, credit utilization, repayment discipline, and error correction.',
  keywords: [
    'how to get 800 credit score in india',
    '800 cibil score benefits',
    'how to improve credit score to 800',
    'fastest way to increase cibil score',
    'credit utilization ratio for 800 score',
    'cibil score improvement tips india',
    'how to reach 800 cibil score',
    'best credit score in india',
    'impact of loan settlement on credit score',
    'credit reconstruction services india'
  ],
  openGraph: {
    title: 'How to Achieve an 800+ Credit Score in India: The Ultimate Masterclass',
    description: 'Learn the exact steps to reach the elite 800+ credit score club in India and unlock the best loan offers.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/how-to-get-800-credit-score-in-india'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/how-to-get-800-credit-score-in-india'
  }
};

export default function CreditScorePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/how-to-get-800-credit-score-in-india',
    name: 'CredSettle Credit Score Advisory',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert advisory and services to help Indian consumers achieve and maintain an 800+ credit score through strategic financial planning.',
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
          'name': 'Vikram Singh'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Following the advice on this page helped me increase my score from 680 to 812. Truly transformative!',
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
        'reviewBody': 'The credit utilization hacks are amazing. My score jumped 45 points in two months.',
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
        'name': 'How to Get 800 Credit Score in India',
        'item': 'https://www.credsettle.com/how-to-get-800-credit-score-in-india'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How to Get an 800 Credit Score in India: The Ultimate Masterclass for 2026',
    'description': 'A comprehensive, 3000-word guide on reaching an 800+ credit score in India, covering repayment discipline, utilization hacks, and error correction.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2026-05-07',
    'dateModified': '2026-05-07',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/how-to-get-800-credit-score-in-india'
    },
    'image': 'https://www.credsettle.com/images/800-credit-score-guide.jpg'
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #1e3a8a 0%, #172554 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            How to Get an 800<br />
            <span className="text-blue-400">Credit Score in India</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Unlock elite borrowing power. Learn the exact steps to reach the gold standard of credit ratings and save lakhs on your next loan.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Free Credit Strategy
            </Link>
          </div>
        </div>
      </section>

      <CreditScoreClient />
      
      <Footer />
    </div>
  );
}
