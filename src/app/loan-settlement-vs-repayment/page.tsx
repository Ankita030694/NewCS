import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanSettlementVsRepaymentClient from './LoanSettlementVsRepaymentClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Loan Settlement vs Repayment: Which is Better for Your Credit Score?',
  description: 'Understand the critical differences between loan settlement vs repayment in India. Learn about CIBIL impact, future loan eligibility, and the best way to clear your debt.',
  keywords: [
    'loan settlement vs repayment',
    'impact of loan settlement on cibil',
    'loan closure vs settlement',
    'is loan settlement good or bad',
    'difference between settled and closed status',
    'how to improve cibil score after settlement',
    'debt settlement procedure india',
    'loan repayment benefits',
    'personal loan settlement impact',
    'credit card settlement vs repayment'
  ],
  openGraph: {
    title: 'Loan Settlement vs Repayment: The Ultimate Financial Guide',
    description: 'Faced with a choice between settling your loan or repaying it in full? Discover how each choice affects your financial future and CIBIL score.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/loan-settlement-vs-repayment'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement-vs-repayment'
  }
};

export default function LoanSettlementVsRepaymentPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/loan-settlement-vs-repayment',
    name: 'CredSettle Debt Consultation Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert advice on loan settlement, repayment strategies, and credit score optimization in India.',
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
    },
    review: [
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Amit Verma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle helped me understand the long-term impact of settlement. I chose repayment after their consultation and my CIBIL is now 780!',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Priya Sharma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Clear and concise comparison. The guide on loan settlement vs repayment saved me from making a huge mistake with my credit cards.',
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
        'name': 'Loan Settlement vs Repayment',
        'item': 'https://www.credsettle.com/loan-settlement-vs-repayment'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Loan Settlement vs Repayment: A Detailed Comparison for Indian Borrowers',
    'description': 'A comprehensive guide explaining the differences between loan settlement and full repayment, their impact on CIBIL scores, and future borrowing capacity.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-10',
    'dateModified': '2026-05-07',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/loan-settlement-vs-repayment'
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
            Loan Settlement vs<br />
            <span className="text-blue-400">Repayment Guide</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Stuck between a lump-sum settlement and regular EMI payments? Learn which path protects your financial freedom and credit health in the long run.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Free Debt Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <LoanSettlementVsRepaymentClient />
      
      <Footer />
    </div>
  );
}
