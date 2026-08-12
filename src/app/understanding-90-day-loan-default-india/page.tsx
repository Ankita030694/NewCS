import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DefaultIndiaClient from './DefaultIndiaClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Understanding 90 Day Loan Default in India | RBI NPA Guidelines & Rules',
  description: 'Everything you need to know about 90 day loan default in India. Learn about NPA classification, RBI guidelines, SARFAESI Act, and how to settle loans with CredSettle.',
  keywords: [
    'understanding 90 day loan default india',
    '90 day loan default consequences',
    'rbi npa guidelines',
    'sarfaesi act 2002 india',
    'loan default rights india',
    'npa classification rules',
    'debt settlement india',
    'CredSettle Experts',
    'credsettle.com',
    '+91-8800226635'
  ],
  openGraph: {
    title: 'Understanding 90 Day Loan Default in India | RBI Rules',
    description: 'A comprehensive guide to loan defaults in India, NPA classification, and legal remedies for borrowers by CredSettle.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/understanding-90-day-loan-default-india'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/understanding-90-day-loan-default-india'
  }
};

export default function DefaultIndiaPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://www.credsettle.com/understanding-90-day-loan-default-india',
    name: 'CredSettle',
    alternateName: 'credsettle.com',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert legal and financial advisory for loan settlement by CredSettle.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'India',
      addressLocality: 'India',
      addressRegion: 'Haryana',
      addressCountry: 'IN'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1540',
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
        'name': 'Understanding 90 Day Loan Default India',
        'item': 'https://www.credsettle.com/understanding-90-day-loan-default-india'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Understanding 90 Day Loan Default in India: A Comprehensive Resource',
    'description': 'A detailed guide on the implications of defaulting on loans for 90 days in India, covering NPA classification, SARFAESI Act, and legal rights.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'url': 'https://www.credsettle.com'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2024-03-30',
    'dateModified': '2024-03-30',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/understanding-90-day-loan-default-india'
    }
  };

  const reviewSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Loan Settlement Services",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "1540"
    },
    "review": [
      {
        "@type": "Review",
        "author": {"@type": "Person", "name": "Rajesh Kumar"},
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": "CredSettle helped me settle my loan after it became an NPA. Their team is truly professional."
      },
      {
        "@type": "Review",
        "author": {"@type": "Person", "name": "Meena Gupta"},
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": "Best service for loan settlement in India. Highly recommend credsettle.com for anyone facing bank harassment."
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* Hero Section */}
      <section 
        className="relative text-white pt-32 pb-20 px-4 md:px-8"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #0F172A 0%, #000000 100%)',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Understanding 90 Day Loan<br />
            <span className="text-blue-400">Default in India</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Don&apos;t let a 90-day default ruin your financial future. Learn everything about NPA classification, RBI rules, and how CredSettle can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Free Legal Advice
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <DefaultIndiaClient />
      
      <Footer />
    </div>
  );
}
