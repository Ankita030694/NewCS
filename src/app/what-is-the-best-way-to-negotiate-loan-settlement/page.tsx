import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NegotiationGuideClient from './NegotiationGuideClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Way to Negotiate Loan Settlement in India | Expert Guide 2026',
  description: 'Master the art of loan settlement negotiation. Learn proven strategies to settle your bank loans for up to 50-70% less while protecting your legal rights and credit score.',
  keywords: [
    'best way to negotiate loan settlement',
    'loan settlement negotiation strategies india',
    'how to settle loan with bank',
    'one time settlement negotiation tips',
    'debt settlement process 2026',
    'negotiating with recovery agents',
    'rbi guidelines for loan settlement',
    'reduce loan principal amount',
    'debt relief service india',
    'cibil score impact of settlement'
  ],
  openGraph: {
    title: 'How to Negotiate Loan Settlement Like a Pro | Complete 2026 Guide',
    description: 'A comprehensive 5000+ word guide on the most effective ways to negotiate debt settlement with Indian banks and NBFCs.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/what-is-the-best-way-to-negotiate-loan-settlement'
  },
  alternates: {
    canonical: 'https://credsettle.com/what-is-the-best-way-to-negotiate-loan-settlement'
  }
};

export default function NegotiationGuidePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'What is the Best Way to Negotiate Loan Settlement in India? (2026 Strategic Guide)',
    'description': 'An exhaustive analysis of debt negotiation tactics, timing, and legal frameworks for borrowers seeking massive debt relief in India.',
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
    'datePublished': '2026-02-10',
    'dateModified': '2026-02-10',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/what-is-the-best-way-to-negotiate-loan-settlement'
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
        'name': 'Best Way to Negotiate Loan Settlement',
        'item': 'https://credsettle.com/what-is-the-best-way-to-negotiate-loan-settlement'
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section 
        className="relative text-white pt-24 pb-16 px-4 md:px-6"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
          minHeight: '48vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-[1.1]">
            What is the Best Way to<br />
            <span className="text-blue-300">Negotiate Loan Settlement?</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Stop guessing and start winning. Discover the insider strategies used by experts to reduce debt by up to 70%, stop harassment, and regain your financial freedom legally in 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-1 active:scale-95"
            >
              Start Your Negotiation Now
            </Link>
          </div>
        </div>
      </section>

      <NegotiationGuideClient />
      
      <Footer />
    </div>
  );
}
