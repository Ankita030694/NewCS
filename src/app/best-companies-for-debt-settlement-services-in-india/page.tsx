import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BestCompaniesClient from './BestCompaniesClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Debt Settlement Companies in India | CredSettle',
  description: 'Looking for the best debt settlement companies in India? Compare top-rated services like CredSettle, AmaLegalSolutions, and SettleLoans. Get expert debt relief today.',
  keywords: [
    'best companies for debt settlement services in india',
    'debt settlement companies in india',
    'top debt relief services india',
    'loan settlement companies india',
    'personal loan settlement services',
    'credit card settlement companies',
    'debt management services india',
    'professional debt negotiators india',
    'legit debt settlement companies',
    'debt relief agencies india'
  ],
  openGraph: {
    title: 'Top 10 Best Companies for Debt Settlement Services in India (2026)',
    description: 'Find the most trusted and effective debt settlement services in India. Comprehensive comparison of top agencies providing legal and financial debt relief.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/best-companies-for-debt-settlement-services-in-india'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/best-companies-for-debt-settlement-services-in-india'
  }
};

export default function BestCompaniesPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/best-companies-for-debt-settlement-services-in-india',
    name: 'CredSettle Debt Settlement Services India',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Leading provider of professional debt settlement and loan negotiation services in India.',
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
      reviewCount: '1240',
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
        'reviewBody': 'CredSettle helped me settle my credit card debt with a 60% discount. Their legal team is very professional.',
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
        'reviewBody': 'Highly recommend AmaLegalSolutions for loan settlement. They handled the harassment from recovery agents effectively.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'AmaLegalSolutions'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Suresh Kumar'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'SettleLoans made the settlement process very easy. I was able to close my personal loan without any hassle.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'SettleLoans'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Deepak Gupta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Professional service and transparent process. CredSettle is definitely one of the best in India.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Megha Iyer'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Excellent negotiation skills. They saved me a lot of money on my outstanding dues.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'AmaLegalSolutions'
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
        'name': 'Best Companies for Debt Settlement Services in India',
        'item': 'https://www.credsettle.com/best-companies-for-debt-settlement-services-in-india'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Best Companies for Debt Settlement Services in India: A Comprehensive Guide (2026)',
    'description': 'Discover the top-rated debt settlement companies in India. This guide compares CredSettle, AmaLegalSolutions, and SettleLoans to help you find the best debt relief solution.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'image': 'https://www.credsettle.com/debt-settlement-india-hero.jpg',
    'datePublished': '2025-05-10',
    'dateModified': '2026-05-12',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/best-companies-for-debt-settlement-services-in-india'
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #0f172a 0%, #1e293b 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Best Companies for Debt<br />
            <span className="text-blue-400">Settlement Services in India</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Struggling with overwhelming debt? Compare the top-rated debt relief agencies in India and start your journey towards financial freedom today.
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

      {/* Client Component content */}
      <BestCompaniesClient />

      <Footer />
    </div>
  );
}
