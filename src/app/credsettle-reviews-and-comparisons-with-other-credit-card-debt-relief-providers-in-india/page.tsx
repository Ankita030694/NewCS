import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReviewsClient from './ReviewsClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CredSettle Reviews and Comparisons: Debt Relief Guide',
  description: 'Read genuine CredSettle reviews and comparisons with other debt relief providers in India. Compare your options and secure your financial freedom today!',
  keywords: [
    'credsettle reviews and comparisons',
    'credsettle reviews india',
    'credit card debt relief providers india',
    'compare debt settlement companies india',
    'settleloans vs credsettle reviews',
    'ama legal solutions debt settlement',
    'best debt resolution program reviews',
    'unsecured loan settlement agencies'
  ],
  openGraph: {
    title: 'CredSettle Reviews and Comparisons: Debt Relief Guide',
    description: 'Compare the effectiveness, fees, and customer reviews of CredSettle against other credit card debt relief providers in India. Get expert insights.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/credsettle-reviews-and-comparisons-with-other-credit-card-debt-relief-providers-in-india'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/credsettle-reviews-and-comparisons-with-other-credit-card-debt-relief-providers-in-india'
  }
};

export default function ReviewsPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/#organization',
    name: 'CredSettle',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Leading provider of professional debt settlement and loan negotiation services in India.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      addressCountry: 'IN'
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
        'name': 'CredSettle Reviews and Comparisons',
        'item': 'https://www.credsettle.com/credsettle-reviews-and-comparisons-with-other-credit-card-debt-relief-providers-in-india'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'CredSettle Reviews and Comparisons with Other Credit Card Debt Relief Providers in India',
    'description': 'A detailed analysis of consumer reviews, success rates, fee structures, and legal compliance of CredSettle compared to other debt settlement providers in India.',
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
    'datePublished': '2026-06-10',
    'dateModified': '2026-06-10',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/credsettle-reviews-and-comparisons-with-other-credit-card-debt-relief-providers-in-india'
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
            What are the reviews of<br />
            <span className="text-blue-400">CredSettle debt relief?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Unbiased review and comparative evaluation of CredSettle's digital negotiation tracking, fee transparency, and customer satisfaction ratings.
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

      <ReviewsClient />

      <Footer />
    </div>
  );
}
