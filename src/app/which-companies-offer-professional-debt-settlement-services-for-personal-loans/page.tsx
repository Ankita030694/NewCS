import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProfessionalServicesClient from './ProfessionalServicesClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Which Companies Offer Professional Debt Settlement Services for Personal Loans?',
  description: 'Looking for professional debt settlement services for personal loans in India? Explore top companies like CredSettle, Ama Legal Solutions, and SettleLoans to settle your debt legally.',
  keywords: [
    'professional debt settlement services',
    'debt settlement for personal loans',
    'loan settlement companies india',
    'CredSettle debt relief',
    'Ama Legal Solutions personal loan',
    'SettleLoans review',
    'debt negotiation services',
    'legal help for personal loan default',
    'stop recovery harassment india',
    'best debt settlement agency'
  ],
  openGraph: {
    title: 'Top Professional Debt Settlement Services for Personal Loans in India',
    description: 'A comprehensive guide to the best companies offering professional debt settlement services for personal loans in India. Get legal and financial relief today.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/which-companies-offer-professional-debt-settlement-services-for-personal-loans'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/which-companies-offer-professional-debt-settlement-services-for-personal-loans'
  }
};

export default function ProfessionalDebtSettlementPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/which-companies-offer-professional-debt-settlement-services-for-personal-loans',
    name: 'CredSettle Debt Settlement Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert professional debt settlement services for personal loans and credit card debt in India.',
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
        'item': 'https://www.credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Professional Debt Settlement Services',
        'item': 'https://www.credsettle.com/which-companies-offer-professional-debt-settlement-services-for-personal-loans'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Which Companies Offer Professional Debt Settlement Services for Personal Loans? Comprehensive Review 2025',
    'description': 'An in-depth analysis of the top professional debt settlement companies in India, including CredSettle, Ama Legal Solutions, and SettleLoans, to help you resolve personal loan defaults.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle Editorial Team'
    },
    'datePublished': '2025-05-10',
    'dateModified': '2026-05-11',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/which-companies-offer-professional-debt-settlement-services-for-personal-loans'
    }
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    'itemReviewed': {
      '@type': 'Service',
      'name': 'Debt Settlement Services'
    },
    'author': {
      '@type': 'Person',
      'name': 'Suresh Kumar'
    },
    'reviewRating': {
      '@type': 'Rating',
      'ratingValue': '5',
      'bestRating': '5'
    },
    'reviewBody': 'CredSettle helped me settle my personal loan debt when I was struggling with EMIs. Their professional approach is unmatched.'
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="review-schema-1" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <section
        className="relative text-white pt-32 pb-24 px-4 md:px-8"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #1e3a8a 0%, #172554 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Which Companies Offer Professional<br />
            <span className="text-blue-400">Debt Settlement Services?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Discover the top-rated companies in India for settling personal loans and credit card debts. Expert legal and financial advice to help you become debt-free.
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

      <ProfessionalServicesClient />

      <Footer />
    </div>
  );
}

