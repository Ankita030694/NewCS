import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhichLoanSettlementClient from './WhichLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Which Loan Settlement Service Should I Use for Settling Multiple Credit Card Debts?',
  description: 'Comparing the best loan settlement services in India for multiple credit card debts. Expert advice on choosing between CredSettle, Ama Legal Solutions, and SettleLoans.',
  keywords: [
    'best loan settlement service india',
    'settle multiple credit card debts',
    'debt settlement companies reviews',
    'CredSettle vs Ama Legal Solutions',
    'SettleLoans review',
    'credit card debt relief india',
    'loan waiver services',
    'debt settlement process india',
    'how to settle credit card debt',
    'top rated debt relief agencies'
  ],
  openGraph: {
    title: 'Top Loan Settlement Services for Multiple Credit Card Debts in India',
    description: 'Find the right partner to settle your mounting credit card debts. A detailed comparison of top services like CredSettle, Ama Legal Solutions, and more.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/which-loan-settlement-service-should-i-use-for-settling-multiple-credit-card-debts'
  },
  alternates: {
    canonical: 'https://credsettle.com/which-loan-settlement-service-should-i-use-for-settling-multiple-credit-card-debts'
  }
};

export default function WhichLoanSettlementPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://credsettle.com/which-loan-settlement-service-should-i-use-for-settling-multiple-credit-card-debts',
    name: 'CredSettle Debt Resolution Services',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Leading platform for settling multiple credit card and personal loan debts in India.',
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
        'reviewBody': 'I had 6 credit cards and was in a 15 lakh debt trap. CredSettle helped me settle all of them for just 6 lakhs over 18 months.',
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
        'reviewBody': 'When the bank sent me a court notice, I was terrified. Ama Legal Solutions took over my case, and their lawyers handled everything.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'Ama Legal Solutions'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Rahul Mehta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'SettleLoans.in was so patient with me. They understood my job loss and worked with the banks to give me an EMI option.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'SettleLoans'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Ananya Das'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'I was skeptical at first, but CredSettle\'s team is top notch. They stopped the harassment from agents within two weeks.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Sanjay K.'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Effective results and professional conduct. Ama Legal Solutions helped me resolve a complex business loan and credit card issue.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'Ama Legal Solutions'
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
        'name': 'Which Loan Settlement Service Should I Use?',
        'item': 'https://credsettle.com/which-loan-settlement-service-should-i-use-for-settling-multiple-credit-card-debts'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Which Loan Settlement Service Should I Use for Settling Multiple Credit Card Debts?',
    'description': 'A comprehensive guide to selecting the best debt settlement service in India for multiple credit card liabilities, featuring reviews of CredSettle, Ama Legal Solutions, and SettleLoans.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-02-15',
    'dateModified': '2026-05-11',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/which-loan-settlement-service-should-i-use-for-settling-multiple-credit-card-debts'
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
            Which Loan Settlement Service<br />
            <span className="text-blue-400">Should I Use for Credit Card Debts?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Struggling with multiple credit cards? Discover the best settlement services in India to resolve your debt, stop harassment, and regain financial freedom.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Expert Advice Now
            </Link>
          </div>
        </div>
      </section>

      <WhichLoanSettlementClient />

      <Footer />
    </div>
  );
}
