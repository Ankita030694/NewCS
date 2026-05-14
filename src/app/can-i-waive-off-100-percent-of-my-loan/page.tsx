import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanWaiverClient from './LoanWaiverClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Can I Waive Off 100 Percent of My Loan? | Legitimate Debt Relief Guide',
  description: 'Wondering if you can waive off 100% of your loan? Learn about legitimate loan settlement, government waiver schemes, and how to reduce your debt burden legally in India.',
  keywords: [
    'can i waive off 100 percent of my loan',
    '100 percent loan waiver india',
    'loan waiver scheme 2024',
    'how to get loan waiver in india',
    'one time settlement RBI guidelines',
    'debt settlement vs loan waiver',
    'personal loan waiver procedure',
    'can bank waive off my loan',
    'loan write off vs waiver',
    'debt relief for individuals india'
  ],
  openGraph: {
    title: 'Can I Waive Off 100 Percent of My Loan? | CredSettle Guide',
    description: 'Expert insights into loan waivers and settlements in India. Discover how to legally reduce your debt and protect your rights.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/can-i-waive-off-100-percent-of-my-loan'
  },
  alternates: {
    canonical: 'https://credsettle.com/can-i-waive-off-100-percent-of-my-loan'
  }
};

export default function LoanWaiverPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://credsettle.com/can-i-waive-off-100-percent-of-my-loan',
    name: 'CredSettle Debt Relief Advisory',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Professional advisory services for loan settlement, debt relief, and borrower rights protection in India.',
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
          'name': 'Amit Sharma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle helped me understand the difference between a waiver and a settlement. Their team negotiated a 60% reduction on my personal loan when I was in a medical crisis.',
        'itemReviewed': {
          '@type': 'LegalService',
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
        'reviewBody': 'I was falling for a fake 100% waiver scheme online. CredSettle saved me from the scam and guided me through a legitimate OTS process with my bank.',
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
        'item': 'https://credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Can I Waive Off 100 Percent of My Loan?',
        'item': 'https://credsettle.com/can-i-waive-off-100-percent-of-my-loan'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Can I Waive Off 100 Percent of My Loan? The Ultimate Guide to Debt Relief in India',
    'description': 'A comprehensive analysis of loan waivers, write-offs, and settlements in India. Learn about legitimate ways to reduce your debt and avoid fraudulent schemes.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-02-10',
    'dateModified': '2026-05-14',
    'image': 'https://credsettle.com/images/loan-waiver-guide.jpg',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/can-i-waive-off-100-percent-of-my-loan'
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
            Can I Waive Off 100 Percent<br />
            <span className="text-blue-400">of My Loan?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Discover the truth about loan waivers in India. Learn legitimate strategies to settle your debt, protect your rights, and achieve financial freedom.
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
      <LoanWaiverClient />
      
      <Footer />
    </div>
  );
}
