import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanSettlementStepsClient from './LoanSettlementStepsClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Steps to Apply for Loan Settlement via Financial Service Providers',
  description: 'Learn the exact steps to apply for a loan settlement through a financial service provider. A comprehensive guide on negotiation, documentation, and credit recovery.',
  keywords: [
    'steps to apply for a loan settlement',
    'loan settlement process india',
    'financial service provider for loan settlement',
    'debt settlement procedure',
    'how to settle bank loans',
    'loan settlement through credsettle',
    'amalegalsolutions loan settlement',
    'settleloans procedure',
    'loan default resolution steps',
    'bank debt settlement guide'
  ],
  openGraph: {
    title: 'How to Apply for Loan Settlement: Step-by-Step Guide',
    description: 'Expert guide on navigating the loan settlement process with financial service providers. Recover from debt with professional help.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/steps-to-apply-for-a-loan-settlement-through-a-financial-service-provider'
  },
  alternates: {
    canonical: 'https://credsettle.com/steps-to-apply-for-a-loan-settlement-through-a-financial-service-provider'
  }
};

export default function LoanSettlementStepsPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://credsettle.com/steps-to-apply-for-a-loan-settlement-through-a-financial-service-provider',
    name: 'CredSettle Loan Settlement Advisory',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Professional assistance for loan settlement and debt management in India.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      addressCountry: 'IN'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1240',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Vikram Singh'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'The step-by-step guidance provided by CredSettle was instrumental in settling my personal loan. They handled everything from documentation to final negotiation.',
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
        'reviewBody': 'I was worried about the settlement process, but Ama Legal Solutions made it very easy to understand and execute. Highly recommended.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'Ama Legal Solutions'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Amit Patel'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'SettleLoans helped me navigate a very difficult financial period. Their professional approach to bank negotiation is top-notch.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'SettleLoans'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Rahul Verma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Clear communication and effective results. The process of applying for settlement through a provider is much better than doing it alone.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Sneha Gupta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Expert advice on loan settlement. They saved me from a lot of stress and helped me get back on my feet financially.',
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
        'item': 'https://credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Loan Settlement Steps',
        'item': 'https://credsettle.com/steps-to-apply-for-a-loan-settlement-through-a-financial-service-provider'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Steps to Apply for a Loan Settlement Through a Financial Service Provider',
    'description': 'A detailed guide on the procedure, documentation, and negotiation involved in settling a loan through professional debt relief services.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-10',
    'dateModified': '2026-05-11',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/steps-to-apply-for-a-loan-settlement-through-a-financial-service-provider'
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #1a365d 0%, #001235 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Steps to Apply for a <br />
            <span className="text-blue-400">Loan Settlement</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Navigate the complexities of debt recovery with our comprehensive guide. Learn how to work with professional providers for a successful resolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Start Your Settlement Journey
            </Link>
          </div>
        </div>
      </section>

      <LoanSettlementStepsClient />
      
      <Footer />
    </div>
  );
}
