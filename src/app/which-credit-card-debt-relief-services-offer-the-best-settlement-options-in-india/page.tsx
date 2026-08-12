import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DebtReliefClient from './DebtReliefClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Credit Card Debt Relief Services in India 2026 | Expert Settlement Options',
  description: 'Looking for the best credit card debt relief services in India? Compare top settlement options, understand the OTS process, and stop recovery harassment today.',
  keywords: [
    'credit card debt relief services india',
    'best debt settlement companies india',
    'credit card settlement options india',
    'debt relief india reviews',
    'one time settlement credit card',
    'how to settle credit card debt in india',
    'debt settlement companies for credit cards',
    'credit card debt management india',
    'stop recovery agent harassment india',
    'CIBIL score after debt settlement'
  ],
  openGraph: {
    title: 'Top Credit Card Debt Relief Services in India | Best Settlement Options',
    description: 'Expert guide on choosing the right debt relief service in India. Settle your credit card debts for up to 50-70% less and regain financial freedom.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/which-credit-card-debt-relief-services-offer-the-best-settlement-options-in-india'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/which-credit-card-debt-relief-services-offer-the-best-settlement-options-in-india'
  }
};

export default function DebtReliefPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/which-credit-card-debt-relief-services-offer-the-best-settlement-options-in-india',
    name: 'CredSettle Debt Relief Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Leading credit card debt relief and settlement service provider in India, helping thousands resolve high-interest debt.',
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
      reviewCount: '1240',
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
        'name': 'Best Credit Card Debt Relief Services in India',
        'item': 'https://www.credsettle.com/which-credit-card-debt-relief-services-offer-the-best-settlement-options-in-india'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Which Credit Card Debt Relief Services Offer the Best Settlement Options in India?',
    'description': 'A comprehensive comparison of the top debt relief services in India, focusing on credit card settlement strategies, legal protections, and financial recovery.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-10',
    'dateModified': '2026-05-11',
    'image': 'https://www.credsettle.com/blog/debt-relief-india.jpg',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/which-credit-card-debt-relief-services-offer-the-best-settlement-options-in-india'
    }
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': [
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Amit Verma' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'CredSettle helped me settle three credit cards with a 60% discount. Their legal team stopped the annoying recovery calls immediately.',
        'itemReviewed': { '@type': 'FinancialService', 'name': 'CredSettle' }
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Priya Sharma' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'Transparent process and very supportive staff. They explained the CIBIL impact clearly and helped me get a fresh start.',
        'itemReviewed': { '@type': 'FinancialService', 'name': 'CredSettle' }
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Vikram Singh' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '4' },
        'reviewBody': 'Excellent negotiation skills. They managed to get a one-time settlement for my HDFC card which I thought was impossible.',
        'itemReviewed': { '@type': 'FinancialService', 'name': 'CredSettle' }
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Sneha Reddy' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'If you are overwhelmed by debt, these guys are the best. They handle everything from legal notices to final negotiations.',
        'itemReviewed': { '@type': 'FinancialService', 'name': 'CredSettle' }
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Rahul Gupta' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'Highly recommend CredSettle for anyone facing harassment from recovery agents. They know the RBI guidelines inside out.',
        'itemReviewed': { '@type': 'FinancialService', 'name': 'CredSettle' }
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
            Best Credit Card Debt Relief<br />
            <span className="text-blue-400">Services in India</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Struggling with mounting credit card bills? Discover the most effective settlement options in India to reduce your debt by up to 70% and stop recovery agent harassment.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get a Free Debt Assessment
            </Link>
          </div>
        </div>
      </section>

      <DebtReliefClient />

      <Footer />
    </div>
  );
}
