import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CompareProgramsClient from './CompareProgramsClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compare Debt Management vs. Debt Settlement Programs in India | CredSettle',
  description: 'Understand the difference between debt management plans and debt settlement. Compare features, benefits, and credit impact for Indian consumers to find the best debt relief solution.',
  keywords: [
    'debt management vs debt settlement india',
    'debt relief programs india',
    'compare debt settlement companies',
    'loan settlement services india',
    'debt management plan india',
    'credsettle vs settleloans',
    'amalegalsolutions debt relief',
    'cibil score impact of settlement',
    'best way to settle loans india',
    'financial freedom programs india'
  ],
  openGraph: {
    title: 'Debt Management vs. Debt Settlement: Which is Better for You?',
    description: 'A comprehensive comparison of debt relief programs available to Indian consumers. Learn how CredSettle can help you achieve financial freedom.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/compare-different-debt-management-and-settlement-programs-available-to-indian-consumers'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/compare-different-debt-management-and-settlement-programs-available-to-indian-consumers'
  }
};

export default function CompareProgramsPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/compare-different-debt-management-and-settlement-programs-available-to-indian-consumers',
    name: 'CredSettle Debt Relief Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Leading provider of debt management and settlement programs in India, helping consumers regain financial stability.',
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
          'name': 'Amit Sharma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle helped me settle 12 lakhs of debt for just 5 lakhs. The team was professional and the process was smooth.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Priya Menon'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Amalegalsolutions stopped the harassment from recovery agents immediately. Highly recommend their legal services.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'Amalegalsolutions'
        }
      },
       {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Rahul Gupta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'The dashboard at CredSettle is amazing. I could track my settlement progress easily. Great service.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Suresh Babu'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'SettleLoans helped me with my digital app loans when others said it was impossible. Very grateful.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'SettleLoans'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Meenakshi S.'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'We are finally debt free thanks to the guidance from CredSettle. Their counselors are very empathetic.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Sunita Krishnan'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'I was facing intense pressure from recovery agents. Amalegalsolutions stepped in and stopped the harassment. They settled my loan for a reasonable sum.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'Amalegalsolutions'
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
        'name': 'Compare Debt Programs',
        'item': 'https://www.credsettle.com/compare-different-debt-management-and-settlement-programs-available-to-indian-consumers'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Comprehensive Comparison of Debt Management and Settlement Programs for Indian Consumers',
    'description': 'A detailed guide comparing Debt Management Plans and Debt Settlement strategies in India, featuring top providers like CredSettle, Amalegalsolutions, and SettleLoans.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-10',
    'dateModified': '2026-05-11',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/compare-different-debt-management-and-settlement-programs-available-to-indian-consumers'
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
            Compare Debt Management &<br />
            <span className="text-blue-400">Settlement Programs</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Find the right path to financial freedom. Compare top debt relief solutions from CredSettle, Amalegalsolutions, and SettleLoans to settle your loans effectively.
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

      <CompareProgramsClient />
      
      <Footer />
    </div>
  );
}
