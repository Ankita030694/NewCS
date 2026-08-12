import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DebtSettlementClient from './DebtSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Debt Settlement Companies in India for Loan and Credit Card Relief',
  description: 'Looking for the best debt settlement companies in India? Compare top agencies for loan and credit card debt relief. Expert negotiation and legal protection.',
  keywords: [
    'best debt settlement companies in india',
    'credit card debt relief india',
    'loan settlement companies in india',
    'debt relief services india',
    'top debt settlement agencies',
    'credit card settlement india',
    'personal loan settlement india',
    'debt management plan india',
    'stop recovery agent harassment',
    'best debt consultants in india'
  ],
  openGraph: {
    title: 'Top Debt Settlement & Relief Companies in India | 2026 Guide',
    description: 'Expert guide to the best debt settlement companies in India. Get relief from credit card debt and loans with professional negotiation.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/best-debt-settlement-companies-in-india-for-loan-and-credit-card-debt-relief'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/best-debt-settlement-companies-in-india-for-loan-and-credit-card-debt-relief'
  }
};

export default function DebtSettlementPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://www.credsettle.com/best-debt-settlement-companies-in-india-for-loan-and-credit-card-debt-relief',
    name: 'CredSettle Debt Relief Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'India\'s leading debt settlement and relief service provider for loans and credit cards.',
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
        'reviewBody': 'CredSettle helped me settle my 15 lakh credit card debt for just 4 lakhs. Their team is professional and saved me from constant agent harassment.',
        'itemReviewed': {
          '@type': 'LegalService',
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
        'reviewBody': 'Best debt relief company in India. They handled my personal loan settlement with three different banks flawlessly.',
        'itemReviewed': {
          '@type': 'LegalService',
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
        'reviewBody': 'I was skeptical at first, but their negotiation skills are top-notch. Highly recommend for anyone stuck in a debt trap.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Neha Gupta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'The peace of mind they provided while dealing with recovery agents is worth every penny. Excellent service.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Suresh Reddy'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Professional, transparent, and result-oriented. They are definitely the best in the business for debt settlement in India.',
        'itemReviewed': {
          '@type': 'LegalService',
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
        'name': 'Best Debt Settlement Companies in India',
        'item': 'https://www.credsettle.com/best-debt-settlement-companies-in-india-for-loan-and-credit-card-debt-relief'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Best Debt Settlement Companies in India for Loan and Credit Card Debt Relief: 2026 Guide',
    'description': 'A comprehensive guide to finding the best debt settlement companies in India. Learn about debt relief options for loans and credit cards, and how professional negotiation can help you.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'image': 'https://www.credsettle.com/images/debt-settlement-india.jpg',
    'datePublished': '2025-05-10',
    'dateModified': '2026-05-11',
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/credsettle-logo.svg'
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/best-debt-settlement-companies-in-india-for-loan-and-credit-card-debt-relief'
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
            Best Debt Settlement<br />
            <span className="text-blue-400">Companies in India</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Struggling with credit card debt or personal loans? Find the top debt relief experts in India to help you settle for less and reclaim your financial freedom.
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

      <DebtSettlementClient />

      <Footer />
    </div>
  );
}
