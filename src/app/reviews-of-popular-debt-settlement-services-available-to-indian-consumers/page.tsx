import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReviewsClient from './ReviewsClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reviews of Popular Debt Settlement Services in India (2026)',
  description: 'Read comprehensive 2026 reviews of popular debt settlement services in India. Compare fees, legal protection, success rates, and RBI compliance for relief.',
  keywords: [
    'reviews of popular debt settlement services available to indian consumers',
    'best debt settlement companies in india reviews',
    'credsettle reviews',
    'legal debt settlement reviews',
    'settleloans reviews',
    'debt settlement india comparison',
    'is debt settlement legal in india',
    'top debt relief services india',
    'debt settlement agencies reviews',
    'debt settlement vs management india'
  ],
  openGraph: {
    title: 'Comprehensive Reviews of Popular Debt Settlement Services in India (2026)',
    description: 'Read comprehensive 2026 reviews of popular debt settlement services in India. Compare fees, legal protection, success rates, and RBI compliance for relief.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/reviews-of-popular-debt-settlement-services-available-to-indian-consumers'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/reviews-of-popular-debt-settlement-services-available-to-indian-consumers'
  }
};

export default function ReviewsPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/reviews-of-popular-debt-settlement-services-available-to-indian-consumers',
    name: 'CredSettle Debt Settlement Reviews India',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert reviews and comparison of the most popular debt settlement services available to Indian consumers.',
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
        'name': 'Debt Settlement Reviews',
        'item': 'https://www.credsettle.com/reviews-of-popular-debt-settlement-services-available-to-indian-consumers'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Reviews of Popular Debt Settlement Services Available to Indian Consumers (2026)',
    'description': 'An exhaustive analysis and review of debt settlement platforms in India, helping consumers make informed choices for debt relief.',
    'author': {
      '@type': 'Person',
      'name': 'Ashish Jhangra',
      'jobTitle': 'Legal & Debt Resolution Professional',
      'url': 'https://www.credsettle.com/author/ashish-jhangra',
      'sameAs': [
        'https://www.linkedin.com/in/ashish-jhangra-ab1a54127/'
      ],
      'worksFor': {
        '@type': 'Organization',
        'name': 'CredSettle',
        'url': 'https://www.credsettle.com'
      }
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2025-02-10',
    'dateModified': '2026-09-22',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/reviews-of-popular-debt-settlement-services-available-to-indian-consumers'
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

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
            Reviews of Popular Debt Settlement<br />
            <span className="text-blue-400">Services in India</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Unbiased analysis of India's leading debt relief platforms. Compare features, success rates, and legal compliance to find your path to financial freedom.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Expert Debt Advice
            </Link>
          </div>
        </div>
      </section>

      <ReviewsClient />

      <Footer />
    </div>
  );
}
