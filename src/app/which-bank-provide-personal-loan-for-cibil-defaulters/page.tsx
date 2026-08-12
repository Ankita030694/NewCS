import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PersonalLoanCibilClient from './PersonalLoanCibilClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Which Bank Provide Personal Loan for CIBIL Defaulters? | 2026 Expert Guide',
  description: 'Looking for a personal loan with a low CIBIL score? Discover which banks and NBFCs provide personal loans for CIBIL defaulters, eligibility criteria, and quick approval tips.',
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
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1250',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Amit Sharma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'I was rejected by 4 banks due to a past default. CredSettle helped me find an NBFC that approved my loan within 48 hours. Life saver!',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Priya Verma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Excellent advice on how to get a loan with a low CIBIL score. Their co-applicant strategy worked perfectly for my personal loan application.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      }
    ]
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

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Which Bank Provide Personal Loan for CIBIL Defaulters? (3000+ Words Ultimate Guide)',
    'description': 'A comprehensive exploration of the Indian lending landscape for individuals with low credit scores, featuring banks, NBFCs, and alternative lending options.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle Financial Team'
    },
    'datePublished': '2025-05-15',
    'dateModified': '2026-05-07',
    'image': 'https://www.credsettle.com/images/cibil-loan-guide.jpg',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/which-bank-provide-personal-loan-for-cibil-defaulters'
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
