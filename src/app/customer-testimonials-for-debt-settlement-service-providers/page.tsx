import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialsClient from './TestimonialsClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Customer Testimonials for Debt Settlement Service Providers | CredSettle Reviews',
  description: 'Read authentic customer testimonials and reviews for top debt settlement service providers in India. See how CredSettle, AmaLegalSolutions, and SettleLoans help people become debt-free.',
  keywords: [
    'customer testimonials for debt settlement',
    'debt settlement service reviews india',
    'credsettle customer reviews',
    'amalegalsolutions testimonials',
    'settleloans reviews india',
    'debt relief service ratings',
    'loan settlement success stories',
    'is debt settlement legit reviews',
    'best debt settlement companies india',
    'debt settlement client feedback'
  ],
  openGraph: {
    title: 'Real Customer Testimonials for Debt Settlement Services',
    description: 'Discover how thousands of Indians have successfully settled their debts. Real reviews for CredSettle, AmaLegalSolutions, and more.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/customer-testimonials-for-debt-settlement-service-providers'
  },
  alternates: {
    canonical: 'https://credsettle.com/customer-testimonials-for-debt-settlement-service-providers'
  }
};

export default function TestimonialsPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://credsettle.com/customer-testimonials-for-debt-settlement-service-providers',
    name: 'CredSettle Debt Settlement Testimonials',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Genuine client reviews and testimonials for debt settlement services provided by CredSettle and partners.',
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
        'item': 'https://credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Customer Testimonials',
        'item': 'https://credsettle.com/customer-testimonials-for-debt-settlement-service-providers'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Real Success Stories: Customer Testimonials for Debt Settlement Service Providers in India',
    'description': 'A comprehensive collection of customer reviews and testimonials for major debt settlement providers including CredSettle, AmaLegalSolutions, and SettleLoans.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-10',
    'dateModified': '2026-05-12',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/customer-testimonials-for-debt-settlement-service-providers'
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #0f172a 0%, #1e293b 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Real Stories, Real Results:<br />
            <span className="text-blue-400">Customer Testimonials</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Discover how thousands of individuals across India regained their financial freedom through professional debt settlement services. Authentic reviews for CredSettle and industry leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Start Your Success Story
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <TestimonialsClient />

      <Footer />
    </div>
  );
}
