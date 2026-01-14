import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AxisBankLoanSettlementClient from './AxisBankLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Axis Bank Loan Settlement 2026 | Axis Settlement Process & Calculator',
  description: 'Expert guide to Axis Bank loan settlement. Specific OTS policies for 2026, settlement calculator, and how to close NPAs. Save up to 50% on dues.',
  keywords: [
    'axis bank loan settlement',
    'axis bank credit card settlement',
    'axis bank settlement process',
    'axis bank npa settlement',
    'axis bank one time settlement scheme 2026',
    'axis bank settlement calculator',
    'axis bank debt settlement letter',
    'how to settle axis bank personal loan'
  ],
  openGraph: {
    title: 'Axis Bank Loan Settlement | Save up to 50% | CredSettle',
    description: 'Struggling with Axis Bank dues? Learn the official settlement process, negotiate huge waivers, and become debt-free legally.',
    url: 'https://credsettle.com/loan-settlement/axis-bank',
    type: 'article',
    images: [
      {
        url: 'https://credsettle.com/assets/axis-bank-settlement.jpg', // Placeholder
        width: 1200,
        height: 630,
        alt: 'Axis Bank Loan Settlement Guide',
      },
    ],
  },
  alternates: {
    canonical: 'https://credsettle.com/loan-settlement/axis-bank'
  }
};

export default function AxisBankLoanSettlementPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://credsettle.com/loan-settlement/axis-bank',
    name: 'CredSettle - Axis Bank Settlement Experts',
    legalName: 'CredSettle Legal Services',
    url: 'https://credsettle.com/loan-settlement/axis-bank',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Specialized legal and financial services for settling Axis Bank loans and credit cards.',
    telephone: '+91-9289707648',
    email: 'support@credsettle.com',
    priceRange: 'Consultation Free',
    serviceType: 'Debt Settlement',
    areaServed: 'India'
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
        'name': 'Loan Settlement',
        'item': 'https://credsettle.com/loan-settlement'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Axis Bank',
        'item': 'https://credsettle.com/loan-settlement/axis-bank'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Axis Bank Loan Settlement Process & OTS Scheme 2026',
    'description': 'A comprehensive 2026 guide to settling Axis Bank loans. Understand the One Time Settlement (OTS) policy, legal rights, and negotiation tactics.',
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
    'datePublished': '2025-01-14',
    'dateModified': '2026-01-14'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Does Axis Bank accept settlement for personal loans?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, Axis Bank allows settlement for personal loans if the borrower can prove genuine financial hardship (like job loss or medical emergency) and the account is NPA.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the minimum settlement percentage for Axis Bank?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'While there is no fixed rule, settlements typically range between 30% to 50% of the principal outstanding, depending on the severity of the default and negotiation.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I settle my Axis Bank credit card online?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Initiating the request can be done online or via customer care, but the actual negotiation usually happens with the recovery department. Professional agencies can handle this digitally for you.'
        }
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
            Axis Bank Loan Settlement<br />
            <span className="text-blue-300">Strategies & OTS Schemes</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Resolve your Axis Bank loan and credit card defaults legally. Stop harassment, save up to 50%, and restart your financial journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Check Settlement Eligibility
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <AxisBankLoanSettlementClient />
      
      <Footer />
    </div>
  );
}
