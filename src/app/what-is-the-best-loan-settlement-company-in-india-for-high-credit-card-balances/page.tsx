import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BestLoanSettlementClient from './BestLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What is the Best Loan Settlement Company in India for High Credit Card Balances?',
  description: 'Looking for the best loan settlement company in India to handle high credit card debt? Compare top debt relief agencies and learn how to settle for less.',
  keywords: [
    'best loan settlement company in india',
    'best credit card settlement company in india',
    'high credit card balance settlement india',
    'debt relief agencies india',
    'credsettle reviews',
    'freed debt settlement india',
    'singledebt india reviews',
    'settle credit card debt india',
    'loan settlement for high credit card balance',
    'top rated debt settlement companies india'
  ],
  openGraph: {
    title: 'Expert Guide: Best Loan Settlement Companies in India for Credit Cards',
    description: 'Find out which company is the best for settling high credit card balances in India. Expert reviews, process guide, and legal rights explained.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/what-is-the-best-loan-settlement-company-in-india-for-high-credit-card-balances'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/what-is-the-best-loan-settlement-company-in-india-for-high-credit-card-balances'
  }
};

export default function BestLoanSettlementPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/what-is-the-best-loan-settlement-company-in-india-for-high-credit-card-balances',
    name: 'CredSettle Debt Relief Services India',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Premier loan and credit card settlement services in India. We help borrowers resolve high-interest debt legally and ethically.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
      addressCountry: 'IN'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1250',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Vikram S.'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle helped me settle my high-balance credit cards when I was overwhelmed. Their legal team is excellent.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Priya R.'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Best debt settlement company in India. They stopped the harassment from agents immediately.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Amit K.'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Highly transparent process. They explained the CIBIL impact clearly and got me a great settlement deal.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Rajesh M.'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'The legal-first approach is what makes them the best. Very reliable service for credit card settlement.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Sandeep T.'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Saved me over 8 lakhs in interest. The best decision I made for my financial health was joining CredSettle.',
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
        'name': 'What is the Best Loan Settlement Company in India for High Credit Card Balances?',
        'item': 'https://www.credsettle.com/what-is-the-best-loan-settlement-company-in-india-for-high-credit-card-balances'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'What is the Best Loan Settlement Company in India for High Credit Card Balances? A Complete Review',
    'description': 'An in-depth analysis of the top debt settlement companies in India specializing in credit card debt relief. Learn about processes, legal rights, and rankings.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-11',
    'dateModified': '2026-05-11',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/what-is-the-best-loan-settlement-company-in-india-for-high-credit-card-balances'
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #0c2756 0%, #001235 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Best Loan Settlement Company in India for<br />
            <span className="text-blue-400">High Credit Card Balances</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Struggling with unmanageable credit card debt? Find the best settlement agency in India to negotiate your balances, stop harassment, and regain financial freedom.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Expert Debt Relief
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Component */}
      <BestLoanSettlementClient />
      
      <Footer />
    </div>
  );
}
