import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DoesForeclosureClient from './DoesForeclosureClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Does Foreclosure of Loan Affect CIBIL? | Improve Score After Settlement',
  description: 'Learn how loan foreclosure and settlement impact your CIBIL score. Discover expert strategies to improve your credit score after settling a loan in India.',
  keywords: [
    'does foreclosure of loan affect cibil',
    'how to improve cibil score after loan settlement',
    'loan foreclosure impact on credit score',
    'rebuilding credit after settlement',
    'CIBIL score improvement tips',
    'foreclosure vs pre-closure cibil',
    'settled status in cibil report',
    'how to increase cibil score fast after default',
    'impact of paying off loan early on cibil',
    'credit score repair india'
  ],
  openGraph: {
    title: 'Impact of Loan Foreclosure on CIBIL & Rebuilding Your Score',
    description: 'A comprehensive guide on how foreclosure and settlement affect your creditworthiness and the steps to recover your CIBIL score.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/does-foreclosure-of-loan-affect-cibil'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/does-foreclosure-of-loan-affect-cibil'
  }
};

export default function DoesForeclosurePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Does Foreclosure of Loan Affect CIBIL? A Guide to Improving Credit After Settlement',
    'description': 'Everything you need to know about how loan foreclosure impacts your CIBIL score and actionable steps to improve your credit score after a loan settlement.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-07',
    'dateModified': '2026-05-07',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/does-foreclosure-of-loan-affect-cibil'
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
        'name': 'Does Foreclosure Affect CIBIL',
        'item': 'https://www.credsettle.com/does-foreclosure-of-loan-affect-cibil'
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
            Does Foreclosure of Loan<br />
            <span className="text-blue-400">Affect CIBIL Score?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Understand the real impact of loan foreclosure and settlement on your credit report. Learn how to rebuild your financial reputation and achieve a 750+ score.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Free Credit Consultation
            </Link>
          </div>
        </div>
      </section>

      <DoesForeclosureClient />

      <Footer />
    </div>
  );
}
