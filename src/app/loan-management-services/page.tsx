import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanManagementClient from './LoanManagementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Top Loan Management Services in India | Expert Debt Advisory & Recovery',
  description: 'Looking for professional loan management services in India? CredSettle offers expert debt consolidation, refinancing, and legal advisory to help you manage and recover from debt effectively.',
  keywords: [
    'loan management services',
    'debt management india',
    'loan settlement services',
    'debt consolidation india',
    'loan refinancing guide',
    'best loan management company',
    'rbi guidelines for loan recovery',
    'manage personal loan debt',
    'business loan management',
    'npa resolution services'
  ],
  openGraph: {
    title: 'Professional Loan Management Services in India | CredSettle',
    description: 'Master your debt with India\'s leading loan management experts. We provide strategic advice, legal protection, and technological tools for a debt-free future.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/loan-management-services'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/loan-management-services'
  }
};

export default function LoanManagementPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/loan-management-services',
    name: 'CredSettle Loan Management Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert financial and legal services for managing personal and business loans, debt consolidation, and refinancing in India.',
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
          'name': 'Anish Sharma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle helped me consolidate my debts and reduced my interest rates significantly. Highly recommended!',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Megha Gupta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Professional and transparent service. They saved my business 4 lakhs a year in interest outgo.',
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
        'name': 'Loan Management Services',
        'item': 'https://www.credsettle.com/loan-management-services'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Comprehensive Guide to Loan Management Services in India: Strategies, Laws, and Benefits',
    'description': 'An in-depth look at how professional loan management can help you optimize debt, save on interest, and navigate the Indian financial landscape.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-14',
    'dateModified': '2026-05-14',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/loan-management-services'
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #1a365d 0%, #001235 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Expert Loan Management<br />
            <span className="text-blue-400">Services in India</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Take control of your debt. Professional advisory for debt consolidation, refinancing, and legal protection for a stress-free financial future.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Free Debt Analysis
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <LoanManagementClient />
      
      <Footer />
    </div>
  );
}
