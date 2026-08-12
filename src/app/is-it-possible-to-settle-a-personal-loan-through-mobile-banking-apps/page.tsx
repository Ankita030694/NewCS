import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileAppSettlementClient from './MobileAppSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Settle Personal Loan via Mobile Banking Apps | Expert Guide 2026',
  description: 'Can you settle a personal loan through mobile banking apps in India? Learn the process, legalities, and how CredSettle can help you negotiate digitally.',
  keywords: [
    'settle personal loan via mobile app',
    'loan settlement through banking app',
    'digital loan settlement india',
    'how to settle loan on mobile app',
    'personal loan settlement process',
    'fintech loan settlement india',
    'credsettle loan relief',
    'ama legal solutions loan settlement',
    'settleloans india',
    'debt settlement via app'
  ],
  openGraph: {
    title: 'Is It Possible to Settle a Personal Loan Through Mobile Banking Apps?',
    description: 'Expert advice on navigating loan settlements via digital banking platforms and fintech apps in India.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/is-it-possible-to-settle-a-personal-loan-through-mobile-banking-apps'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/is-it-possible-to-settle-a-personal-loan-through-mobile-banking-apps'
  }
};

export default function MobileAppSettlementPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://www.credsettle.com/is-it-possible-to-settle-a-personal-loan-through-mobile-banking-apps',
    name: 'CredSettle Digital Loan Settlement Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Specialized legal and negotiation services for settling personal loans and digital app debts in India.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
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
        'name': 'Personal Loan Settlement via Mobile Apps',
        'item': 'https://www.credsettle.com/is-it-possible-to-settle-a-personal-loan-through-mobile-banking-apps'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Is It Possible to Settle a Personal Loan Through Mobile Banking Apps? A Comprehensive Guide',
    'description': 'A detailed exploration of how Indian borrowers can use mobile banking and fintech apps to initiate and complete the loan settlement process.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2026-03-10',
    'dateModified': '2026-05-11',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/is-it-possible-to-settle-a-personal-loan-through-mobile-banking-apps'
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section 
        className="relative text-white pt-32 pb-24 px-4 md:px-8"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #0c2756 0%, #001235 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Settle Personal Loans via<br />
            <span className="text-blue-400">Mobile Banking Apps</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Can you really settle your debt with a tap? Discover how to use digital platforms to negotiate and close your personal loans legally.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Free Debt Relief Advice
            </Link>
          </div>
        </div>
      </section>

      <MobileAppSettlementClient />
      
      <Footer />
    </div>
  );
}
