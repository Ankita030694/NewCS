import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AffordableDebtSettlementClient from './AffordableDebtSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Affordable Debt Settlement Plans for Salaried Individuals in India',
  description: 'Explore affordable debt settlement plans for salaried individuals. Learn how to manage credit card debt, personal loans, and achieve financial freedom with CredSettle.',
  keywords: [
    'affordable debt settlement plans for salaried individuals',
    'debt settlement for salaried employees',
    'credit card debt settlement india',
    'personal loan settlement for salaried',
    'debt relief programs for employees',
    'one time settlement for salaried individuals',
    'debt management plans india',
    'salaried individual debt relief',
    'low cost debt settlement india',
    'financial freedom for salaried'
  ],
  openGraph: {
    title: 'Affordable Debt Settlement Plans for Salaried Individuals | CredSettle',
    description: 'Specialized debt settlement solutions for salaried professionals. Get expert help to settle your debts and rebuild your financial life.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/affordable-debt-settlement-plans-for-salaried-individuals'
  },
  alternates: {
    canonical: 'https://credsettle.com/affordable-debt-settlement-plans-for-salaried-individuals'
  }
};

export default function AffordableDebtSettlementPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://credsettle.com/affordable-debt-settlement-plans-for-salaried-individuals',
    name: 'CredSettle Debt Settlement Services',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Affordable debt settlement and management plans specifically designed for salaried individuals in India.',
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
          'name': 'Amit Verma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle helped me settle my credit card debt which was over 10 lakhs. Their plans are truly affordable for salaried people like me.',
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
        'reviewBody': 'Highly recommend AmaLegalSolutions and CredSettle for debt relief. They handle everything professionally.',
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
        'reviewBody': 'SettleLoans and CredSettle provided a clear roadmap for my debt settlement. Very helpful.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'SettleLoans'
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
        'reviewBody': 'The team at CredSettle is amazing. They negotiated with the bank and got me a 60% waiver.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Rahul Das'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Best debt settlement service in India. Transparent and effective.',
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
        'name': 'Affordable Debt Settlement Plans for Salaried Individuals',
        'item': 'https://credsettle.com/affordable-debt-settlement-plans-for-salaried-individuals'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Comprehensive Guide to Affordable Debt Settlement Plans for Salaried Individuals in India',
    'description': 'Discover effective and affordable debt settlement strategies for salaried employees. Learn about OTS, debt management, and legal rights.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-10',
    'dateModified': '2026-05-12',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/affordable-debt-settlement-plans-for-salaried-individuals'
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
            Affordable Debt Settlement Plans for<br />
            <span className="text-blue-400">Salaried Individuals</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Break free from the debt trap. Customized settlement solutions for salaried professionals to resolve credit card and personal loan burdens legally and affordably.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get a Free Debt Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <AffordableDebtSettlementClient />

      <Footer />
    </div>
  );
}
