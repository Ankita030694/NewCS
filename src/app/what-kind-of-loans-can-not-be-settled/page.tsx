import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import LoansNotSettledClient from './LoansNotSettledClient';

export const metadata: Metadata = {
  title: 'What Kind of Loans Can Not Be Settled? | Expert Guide | CredSettle',
  description: 'Not all loans can be settled. Learn why secured loans like home and car loans are difficult to settle, understand RBI guidelines, and find out which debts are eligible for settlement.',
  keywords: [
    'what kind of loans can not be settled',
    'what kind of loans can not be settled in India',
    'loans that cannot be settled rbi guidelines',
    'can secured loans be settled in India',
    'home loan settlement India',
    'car loan settlement',
    'settlement of secured loans',
    'loan against property settlement',
    'willful defaulter settlement rbi',
    'loan settlement process India'
  ],
  openGraph: {
    title: 'What Kind of Loans Can Not Be Settled? | CredSettle',
    description: 'Detailed guide on loan settlement eligibility in India. Know the difference between secured and unsecured loan settlement opportunities.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/what-kind-of-loans-can-not-be-settled',
    images: [
      {
        url: 'https://credsettle.com/credsettle-logo.svg', // Fallback or specific image
        width: 1200,
        height: 630,
        alt: 'CredSettle Loan Settlement Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Which Loans Cannot Be Settled? | CredSettle',
    description: 'Expert insights on secured vs unsecured loan settlement in India.',
  },
  alternates: {
    canonical: 'https://credsettle.com/what-kind-of-loans-can-not-be-settled'
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

export default function LoansNotSettledPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'What Kind of Loans Can Not Be Settled in India?',
    'description': 'A comprehensive guide explaining which loans are eligible for settlement and why secured loans pose a challenge.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2024-02-10',
    'dateModified': '2024-02-10', // Should ideally be dynamic or regularly updated
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/what-kind-of-loans-can-not-be-settled'
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
        'item': 'https://credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Resources',
        'item': 'https://credsettle.com/resources' // Assuming a resources parent or just generic
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'What Kind of Loans Can Not Be Settled',
        'item': 'https://credsettle.com/what-kind-of-loans-can-not-be-settled'
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section - Matching loan-settlement style but without grid */}
      <section 
        className="relative text-white pt-32 pb-20 px-4 md:px-8"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
          minHeight: '50vh', // Slightly adjusted
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
             What Kind of Loans<br />
            <span className="text-blue-300">Can Not Be Settled?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Understand the difference between secured and unsecured debt. Know your rights and options before you negotiate with lenders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Expert Analysis
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <LoansNotSettledClient />
      
      <Footer />
    </div>
  );
}
