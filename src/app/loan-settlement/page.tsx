import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanSettlementPageClient from './LoanSettlementPageClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Loan Settlement Services | Debt Relief & Consolidation | CredSettle',
  description: 'Expert loan settlement services to help you become debt free. We handle credit card debt, personal loans, and debt collectors. Get relief from bad debts today.',
  keywords: [
    'loan settlement',
    'debt settlement',
    'debt consolidation',
    'debt consolidation loan',
    'national debt relief',
    'debt collector',
    'consolidation loans',
    'debt relief',
    'bad debts',
    'collection agency',
    'debt management',
    'credit collection services',
    'debt relief order',
    'consolidated credit',
    'debt collection agency',
    'credit card debt',
    'debt free',
    'debt management plan',
    'bankruptcy',
    'iva',
    'credit counseling',
    'how to get out of debt'
  ],
  openGraph: {
    title: 'Loan Settlement Services | Debt Relief & Consolidation | CredSettle',
    description: 'Stop harassment from debt collectors and settle your loans for less. Expert debt relief and management services.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/loan-settlement'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement Services | Debt Relief | CredSettle',
    description: 'Professional loan settlement services. Reduce your debt and stop collection harassment.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
};

export default function LoanSettlementPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/loan-settlement',
    name: 'CredSettle Loan Settlement',
    legalName: 'CredSettle Legal Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Professional loan settlement and debt relief services. We help negotiate with debt collectors and reduce your debt burden.',
    telephone: '+91-8800226635',
    email: 'support@credsettle.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '12500',
      bestRating: '5',
      worstRating: '1'
    },
    priceRange: 'Consultation Free',
    serviceType: 'Loan Settlement',
    knowsAbout: [
      'Debt Settlement',
      'Debt Consolidation',
      'Credit Card Debt',
      'Debt Management',
      'Bankruptcy Alternatives',
      'Debt Relief'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Loan Settlement Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Debt Settlement',
            description: 'Negotiate with creditors to reduce total debt amount.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Debt Consolidation Advice',
            description: 'Guidance on consolidating multiple debts into one.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Harassment Protection',
            description: 'Stop calls and threats from debt collectors.'
          }
        }
      ]
    }
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
        'name': 'Loan Settlement',
        'item': 'https://www.credsettle.com/loan-settlement'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Complete Guide to Loan Settlement and Debt Relief',
    'description': 'Everything you need to know about loan settlement, debt consolidation, and how to get out of debt.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2024-01-15',
    'dateModified': '2024-12-09',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/loan-settlement'
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero Section */}
      <section 
        className="relative text-white pt-32 pb-20 px-4 md:px-8"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Loan Settlement Services<br />
            <span className="text-blue-300">Your Path to Debt Freedom</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Stop harassment from debt collectors and settle your loans for up to 50% less. Expert debt relief services to help you regain financial control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <LoanSettlementPageClient />
      
      <Footer />
    </div>
  );
}
