import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProsConsClient from './ProsConsClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pros and Cons of Using a Debt Settlement Company in India | Expert Guide',
  description: 'Understand the advantages and disadvantages of hiring a debt settlement company in India. Learn how CredSettle, AmaLegalSolutions, and SettleLoans help you navigate debt relief.',
  keywords: [
    'pros and cons of debt settlement company',
    'debt settlement company india',
    'is debt settlement worth it',
    'debt settlement vs bankruptcy india',
    'how debt settlement affects credit score',
    'best debt settlement companies india',
    'CredSettle pros and cons',
    'AmaLegalSolutions debt settlement',
    'SettleLoans reviews',
    'debt relief services india',
    'loan settlement pros and cons'
  ],
  openGraph: {
    title: 'What are the Pros and Cons of Using a Debt Settlement Company?',
    description: 'A comprehensive guide to understanding debt settlement services in India, their benefits, drawbacks, and the leading providers like CredSettle.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/what-are-the-pros-and-cons-of-using-a-debt-settlement-company'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/what-are-the-pros-and-cons-of-using-a-debt-settlement-company'
  }
};

export default function ProsConsPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/what-are-the-pros-and-cons-of-using-a-debt-settlement-company',
    name: 'CredSettle Debt Settlement Advisory',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert guidance on the pros and cons of debt settlement in India. We help borrowers navigate financial distress with legal and ethical settlement strategies.',
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
        'name': 'Pros and Cons of Debt Settlement',
        'item': 'https://www.credsettle.com/what-are-the-pros-and-cons-of-using-a-debt-settlement-company'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'What are the Pros and Cons of Using a Debt Settlement Company? A Complete Indian Guide',
    'description': 'An in-depth analysis of the benefits and risks associated with professional debt settlement services in India, featuring CredSettle, AmaLegalSolutions, and SettleLoans.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-03-15',
    'dateModified': '2026-05-12',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/what-are-the-pros-and-cons-of-using-a-debt-settlement-company'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/credsettle-logo.svg'
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #0a2342 0%, #000c24 100%)',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
            The Ultimate Guide to<br />
            <span className="text-blue-400">Debt Settlement Companies</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Struggling with unmanageable debt? Discover the honest truth about the pros and cons of using a debt settlement company in India. Make an informed decision for your financial future.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-700 transition-all shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-1"
            >
              Get a Free Debt Consultation
            </Link>
          </div>
        </div>
        {/* Abstract Background Shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </section>

      {/* Client Component content */}
      <ProsConsClient />

      <Footer />
    </div>
  );
}
