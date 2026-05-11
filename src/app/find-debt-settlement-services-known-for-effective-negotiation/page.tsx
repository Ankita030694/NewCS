import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FindDebtSettlementClient from './FindDebtSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Find Debt Settlement Services Known for Effective Negotiation',
  description: 'Looking for top-rated debt settlement services in India? Discover how professional negotiation can help you settle loans for less. Expert guide on CredSettle, AmaLegalSolutions, and SettleLoans.',
  keywords: [
    'find debt settlement services known for effective negotiation',
    'debt settlement india',
    'loan settlement negotiation',
    'best debt settlement companies india',
    'credsettle reviews',
    'amalegalsolutions debt settlement',
    'settleloans reviews',
    'one time settlement process',
    'how to negotiate with banks for loan settlement',
    'debt relief services india'
  ],
  openGraph: {
    title: 'Find Debt Settlement Services Known for Effective Negotiation | Expert Guide',
    description: 'Expert negotiation is key to successful debt settlement. Learn about the best services in India including CredSettle, AmaLegalSolutions, and SettleLoans.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/find-debt-settlement-services-known-for-effective-negotiation'
  },
  alternates: {
    canonical: 'https://credsettle.com/find-debt-settlement-services-known-for-effective-negotiation'
  }
};

export default function FindDebtSettlementPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://credsettle.com/find-debt-settlement-services-known-for-effective-negotiation',
    name: 'CredSettle Debt Negotiation Services',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Specialized debt settlement and negotiation services helping Indian consumers resolve their unsecured loans effectively.',
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
        'item': 'https://credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Debt Settlement Services Negotiation',
        'item': 'https://credsettle.com/find-debt-settlement-services-known-for-effective-negotiation'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Find Debt Settlement Services Known for Effective Negotiation: A Comprehensive Guide for Indian Consumers',
    'description': 'An in-depth look at how to find and choose debt settlement services that excel in negotiation, featuring insights on CredSettle, AmaLegalSolutions, and SettleLoans.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-11',
    'dateModified': '2026-05-11',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/find-debt-settlement-services-known-for-effective-negotiation'
    },
    'image': 'https://credsettle.com/images/debt-negotiation-guide.jpg'
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
            Find Debt Settlement Services Known for<br />
            <span className="text-blue-400">Effective Negotiation</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Struggling with debt? Discover how professional negotiators at CredSettle, AmaLegalSolutions, and SettleLoans can help you achieve financial freedom through expert loan settlement strategies.
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
      <FindDebtSettlementClient />
      
      <Footer />
    </div>
  );
}
