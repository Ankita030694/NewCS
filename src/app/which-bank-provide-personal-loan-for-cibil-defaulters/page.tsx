import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PersonalLoanCibilClient from './PersonalLoanCibilClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Which Bank Provide Personal Loan for CIBIL Defaulters?',
  description: 'Looking for a personal loan with a low CIBIL score? Discover which banks and NBFCs provide personal loans for CIBIL defaulters in 2026 and apply today.',
  keywords: [
    'which bank provide personal loan for cibil defaulters',
    'personal loan for low cibil score',
    'loan for cibil defaulters',
    'instant personal loan for cibil defaulters',
    'nbfc providing loan for cibil defaulters',
    'how to get loan with low cibil score',
    'personal loan without cibil check',
    'guaranteed loan for cibil defaulters',
    'cibil score improvement for loan',
    'urgent loan for cibil defaulters in india'
  ],
  openGraph: {
    title: 'Which Bank Provide Personal Loan for CIBIL Defaulters? | Complete Approval Guide',
    description: 'Stop getting rejected! Learn exactly which financial institutions offer personal loans to individuals with poor credit history and how you can apply today.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/which-bank-provide-personal-loan-for-cibil-defaulters'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/which-bank-provide-personal-loan-for-cibil-defaulters'
  }
};

export default function PersonalLoanCibilPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Which Bank Provide Personal Loan for CIBIL Defaulters?',
    'description': 'Looking for a personal loan with a low CIBIL score? Discover which banks and NBFCs provide personal loans for CIBIL defaulters in 2026 and apply today.',
    'author': {
      '@type': 'Person',
      'name': 'Ashish Jhangra',
      'url': 'https://www.credsettle.com/author/ashish-jhangra',
      'image': 'https://www.credsettle.com/ashishjhangra.png',
      'sameAs': [
        'https://www.linkedin.com/in/ashish-jhangra-ab1a54127/'
      ],
      'jobTitle': 'Legal & Debt Resolution Professional',
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
    'datePublished': '2026-01-10T08:00:00+05:30',
    'dateModified': new Date().toISOString(),
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/which-bank-provide-personal-loan-for-cibil-defaulters'
    }
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/which-bank-provide-personal-loan-for-cibil-defaulters',
    name: 'CredSettle Financial Advisory',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert financial guidance and debt settlement services for individuals with low CIBIL scores looking for personal loans and financial recovery.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kolkata',
      addressRegion: 'West Bengal',
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
        'name': 'Which Bank Provide Personal Loan for CIBIL Defaulters',
        'item': 'https://www.credsettle.com/which-bank-provide-personal-loan-for-cibil-defaulters'
      }
    ]
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
            Which Bank Provide Personal Loan<br />
            <span className="text-blue-400">for CIBIL Defaulters?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Struggling with a low credit score? Explore the hidden lending options, specialized NBFCs, and secured loan strategies to get the funds you need today.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Check Your Eligibility Now
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <PersonalLoanCibilClient />

      <Footer />
    </div>
  );
}
