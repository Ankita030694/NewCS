import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RestructuringClient from './RestructuringClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Debt Settlement vs Restructuring: Credit Card Debt Guide',
  description: 'Debt settlement vs loan restructuring for credit card debt in India: Compare options and secure your financial freedom today. Read our expert guide!',
  keywords: [
    'debt settlement vs loan restructuring',
    'credit card debt relief in india',
    'compare debt resolution services india',
    'loan restructuring hdfc credit card',
    'one time settlement sbi credit card',
    'cibil score impact restructuring vs settlement',
    'unsecured debt relief options india',
    'credit card restructuring rules'
  ],
  openGraph: {
    title: 'Debt Settlement vs Restructuring: Credit Card Debt Guide',
    description: 'Compare the effectiveness, cost, and CIBIL impact of credit card debt settlement vs loan restructuring in India. Get expert advice on which to choose.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/debt-settlement-vs-loan-restructuring-for-credit-card-debt-relief-in-india-which-should-i-choose'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/debt-settlement-vs-loan-restructuring-for-credit-card-debt-relief-in-india-which-should-i-choose'
  }
};

export default function RestructuringPage() {
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
        'name': 'Debt Settlement vs Loan Restructuring',
        'item': 'https://www.credsettle.com/debt-settlement-vs-loan-restructuring-for-credit-card-debt-relief-in-india-which-should-i-choose'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Debt Settlement vs Loan Restructuring for Credit Card Debt Relief in India: Which Should I Choose?',
    'description': 'A comprehensive comparison of credit card debt settlement against loan restructuring options in India, analyzing CIBIL impact, interest costs, and exit strategies.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
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
      '@id': 'https://www.credsettle.com/debt-settlement-vs-loan-restructuring-for-credit-card-debt-relief-in-india-which-should-i-choose'
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
            Should I Choose Debt Settlement<br />
            <span className="text-blue-400">or Loan Restructuring?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Struggling with credit card defaults or overwhelming EMIs? Compare the costs, benefits, and credit score impacts of settlement vs restructuring in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <RestructuringClient />

      <Footer />
    </div>
  );
}
