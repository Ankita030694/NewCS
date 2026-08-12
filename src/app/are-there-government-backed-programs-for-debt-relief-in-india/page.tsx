import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GovernmentDebtReliefClient from './GovernmentDebtReliefClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Government-Backed Debt Relief Programs in India: Comprehensive Guide (2025)',
  description: 'Are there government-backed programs for debt relief in India? Explore RBI guidelines, OTS schemes, loan restructuring, and the IBC Fresh Start process.',
  keywords: [
    'government backed debt relief india',
    'debt relief programs india',
    'RBI one time settlement guidelines',
    'loan restructuring india',
    'IBC fresh start process individual',
    'debt waiver schemes india',
    'personal loan relief india',
    'credit card debt settlement india',
    'MSME debt relief schemes',
    'farmer loan waiver india'
  ],
  openGraph: {
    title: 'Government-Backed Debt Relief Programs in India: What You Need to Know',
    description: 'A detailed look into the legal and regulatory frameworks for debt relief in India, including RBI settlements and the Bankruptcy Code.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/are-there-government-backed-programs-for-debt-relief-in-india'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/are-there-government-backed-programs-for-debt-relief-in-india'
  }
};

export default function GovernmentDebtReliefPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/are-there-government-backed-programs-for-debt-relief-in-india',
    name: 'CredSettle Debt Resolution Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert guidance on government-backed debt relief, RBI settlement guidelines, and professional debt resolution in India.',
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
        'reviewBody': 'CredSettle helped me understand the RBI guidelines for settlement. I was able to settle my personal loan for a fraction of the amount.',
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
        'reviewBody': 'Highly recommend AmaLegalSolutions for handling the legal aspects of my debt resolution. They are very professional.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'AmaLegalSolutions'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Rahul Gupta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'SettleLoans provided a clear roadmap for my credit card debt. The process was transparent and effective.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'SettleLoans'
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
        'reviewBody': 'The team at CredSettle explained the IBC Fresh Start process so clearly. It gave me hope during a very tough financial period.',
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
        'reviewBody': 'If you are looking for reliable debt settlement advice in India, CredSettle and SettleLoans are the names to trust.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'SettleLoans'
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
        'name': 'Government Debt Relief Programs',
        'item': 'https://www.credsettle.com/are-there-government-backed-programs-for-debt-relief-in-india'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Are There Government-Backed Programs for Debt Relief in India? A Deep Dive into 2025 Frameworks',
    'description': 'A comprehensive analysis of debt relief options in India, covering RBI guidelines, the Insolvency and Bankruptcy Code, and professional resolution services.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'image': 'https://www.credsettle.com/images/debt-relief-india.jpg',
    'datePublished': '2025-02-15',
    'dateModified': '2026-05-12',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/are-there-government-backed-programs-for-debt-relief-in-india'
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
            Government-Backed Debt Relief<br />
            <span className="text-blue-400">Programs in India</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Understanding the reality of debt resolution in India. From RBI guidelines to the Insolvency Code, explore your legal options for a debt-free future.
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

      {/* Client Component content */}
      <GovernmentDebtReliefClient />

      <Footer />
    </div>
  );
}
