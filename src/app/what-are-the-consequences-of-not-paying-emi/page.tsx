import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EMIConsequencesClient from './EMIConsequencesClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Consequences of Not Paying EMI in India | Legal & Financial Impact 2026',
  description: 'Understand the serious consequences of missing EMI payments in India, including CIBIL score damage, legal actions under SARFAESI Act, Section 138, and how to resolve debt.',
  keywords: [
    'consequences of not paying emi',
    'missed emi consequences in india',
    'late emi payment penalties',
    'cibil score impact of missed emi',
    'sarfaesi act home loan default',
    'section 138 cheque bounce loan',
    'loan recovery process india',
    'what happens if i dont pay emi',
    'legal action for personal loan default',
    'debt settlement india'
  ],
  openGraph: {
    title: 'Consequences of Not Paying EMI in India | Complete Guide',
    description: 'A detailed look at what happens when you miss your EMIs and the legal recourses available to lenders and borrowers.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/what-are-the-consequences-of-not-paying-emi'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/what-are-the-consequences-of-not-paying-emi'
  }
};

export default function EMIConsequencesPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'What are the Consequences of Not Paying EMI in India? (2026 Guide)',
    'description': 'An exhaustive guide covering the financial, legal, and credit-related impacts of defaulting on loan repayments in India.',
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
    'datePublished': '2026-02-10',
    'dateModified': '2026-02-10',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/what-are-the-consequences-of-not-paying-emi'
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
        'name': 'Consequences of Not Paying EMI',
        'item': 'https://www.credsettle.com/what-are-the-consequences-of-not-paying-emi'
      }
    ]
  };

  return (
    <div className="relative min-h-screen bg-white mt-5">
      <Navbar />
            <div className="relative z-10">
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section 
        className="relative text-white pt-32 pb-20 px-4 md:px-8"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            What are the Consequences of Not Paying EMI?<br />
            <span className="text-blue-300">The Definitive Guide for 2026</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
            Missing an Equated Monthly Installment (EMI) is more than just a financial slip. From cascading interest and credit score damage to complex legal battles under the SARFAESI Act, understand every ripple effect of loan default in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Expert Debt Advice
            </Link>
          </div>
        </div>
      </section>

      <EMIConsequencesClient />
      
                  </div>
            <Footer />
    </div>
  );
}
