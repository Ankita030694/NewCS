import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BestTimeSettlementClient from './BestTimeSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Time for Loan Settlement in India: Expert Strategy & Guidelines',
  description: 'Discover the best time for loan settlement in India. Learn when to negotiate, the 90-day NPA rule, impact on CIBIL, and expert strategies for debt relief.',
  keywords: [
    'best time for loan settlement',
    'when to settle loan in india',
    'loan settlement strategy',
    'npa 90 days rule india',
    'settling loan with bank',
    'debt settlement timing',
    'cibil score impact loan settlement',
    'bank loan settlement process',
    'full and final settlement loan',
    'negotiating loan settlement'
  ],
  openGraph: {
    title: 'When is the Best Time for Loan Settlement? | CredSettle Guide',
    description: 'Master the timing of your loan settlement. Expert advice on when banks are most likely to settle and how to protect your financial future.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/best-time-for-loan-settlement'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/best-time-for-loan-settlement'
  }
};

export default function BestTimeSettlementPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/best-time-for-loan-settlement',
    name: 'CredSettle Debt Resolution Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Professional assistance for loan settlement and debt resolution in India. Expert negotiation with banks and NBFCs.',
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
          'name': 'Amit Sharma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle helped me understand exactly when to approach my bank for settlement. Their timing strategy saved me over 40% on my outstanding debt.',
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
        'reviewBody': 'I was confused about the 90-day NPA rule. The experts here explained everything and guided me through the settlement at the perfect time.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
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
        'reviewBody': 'Professional and transparent. They advised me to wait for the right window, and it worked out perfectly for my personal loan settlement.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Suresh Iyer'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Strategic advice on loan settlement. Knowing the best time to negotiate made a huge difference in the outcome with my credit card provider.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Megha Gupta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'The team at CredSettle is highly knowledgeable about banking procedures in India. They helped me settle my medical loan at the right time.',
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
        'name': 'Best Time for Loan Settlement',
        'item': 'https://www.credsettle.com/best-time-for-loan-settlement'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'When is the Best Time for Loan Settlement in India? A Strategic Guide',
    'description': 'A comprehensive guide on identifying the ideal time to settle your loans with banks in India, understanding the NPA cycle, and maximizing debt relief.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'image': 'https://www.credsettle.com/blog/best-time-loan-settlement.jpg',
    'datePublished': '2025-05-10',
    'dateModified': '2026-05-07',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/best-time-for-loan-settlement'
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
            The Strategic Guide to the<br />
            <span className="text-blue-400">Best Time for Loan Settlement</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Timing is everything in debt resolution. Learn the exact window when banks are most willing to settle and how to secure the best deal for your financial freedom.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Expert Timing Strategy
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <BestTimeSettlementClient />
      
      <Footer />
    </div>
  );
}
