import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DebtManagementClient from './DebtManagementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '#1 Debt Management Services in India | Expert Debt Relief & Settlement',
  description: 'Struggling with debt? Get the #1 debt management services in India. We help you consolidate loans, negotiate settlements, and stop recovery agent harassment legally.',
  keywords: [
    'debt management services in india',
    'best debt settlement companies in india',
    'debt relief programs india',
    'loan settlement services india',
    'credit card debt management india',
    'rbi recovery guidelines 2026',
    'how to get out of debt trap india',
    'debt consolidation services india',
    'stop recovery agent harassment india',
    'personal loan settlement india'
  ],
  openGraph: {
    title: 'Top Rated Debt Management Services in India | CredSettle',
    description: 'Expert financial and legal assistance to manage and settle your debts. Professional negotiation, RBI compliance, and path to financial freedom.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/1-debt-management-services-in-india'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/1-debt-management-services-in-india'
  }
};

export default function DebtManagementIndiaPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://www.credsettle.com/1-debt-management-services-in-india',
    name: 'CredSettle Debt Management Services India',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Premier debt management and settlement services in India, helping borrowers resolve financial distress through legal and strategic negotiation.',
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
          'name': 'Amit Verma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle helped me settle my three credit cards at a 40% discount. Their understanding of the Indian banking system is unmatched.',
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
        'reviewBody': 'I was being harassed by recovery agents daily. CredSettle legal team stepped in, stopped the calls, and negotiated a fair settlement plan.',
        'itemReviewed': {
          '@type': 'LegalService',
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
        'reviewBody': 'Professional, transparent, and result-oriented. They guided me through the entire debt management process with ease.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Vikram Mehra'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'The best decision I made for my financial health. Their debt consolidation strategy saved me from a massive interest burden.',
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
        'name': 'Debt Management Services in India',
        'item': 'https://www.credsettle.com/1-debt-management-services-in-india'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'The Ultimate Guide to Debt Management Services in India: Reclaiming Your Financial Freedom',
    'description': 'A comprehensive analysis of debt management plans, settlement strategies, and legal protections for borrowers in India under the 2026 RBI guidelines.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2026-05-13',
    'dateModified': '2026-05-13',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/1-debt-management-services-in-india'
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
            #1 Debt Management <br />
            <span className="text-blue-400">Services in India</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Break free from the debt trap today. Expert financial negotiation, legal protection from harassment, and structured settlement plans tailored for Indian borrowers.
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
      <DebtManagementClient />
      
      <Footer />
    </div>
  );
}
