import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SettlingDebtInIndiaClient from './SettlingDebtInIndiaClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Guide to Settling Debt in India: Legal Steps',
  description: 'Learn the exact legal process of settling debt in India. Discover cost breakdowns, RBI guidelines, and how to protect yourself from harassment.',
  keywords: [
    'settling debt in India',
    'debt settlement process India',
    'One-Time Settlement OTS',
    'legal process map for settling debt',
    'RBI guidelines debt settlement',
    'credit card settlement legal rights',
    'stop recovery agents India'
  ],
  openGraph: {
    title: 'Guide to Settling Debt in India: Legal Steps',
    description: 'Learn the exact legal process of settling debt in India. Discover cost breakdowns, RBI guidelines, and how to protect yourself from harassment.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/settling-debt-in-india-guide'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guide to Settling Debt in India: Legal Steps',
    description: 'Learn the exact legal process of settling debt in India. Discover cost breakdowns, RBI guidelines, and how to protect yourself from harassment.'
  },
  alternates: {
    canonical: 'https://credsettle.com/settling-debt-in-india-guide'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function SettlingDebtInIndiaPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Guide to Settling Debt in India: Legal Steps',
    'description': 'Learn the exact legal process of settling debt in India. Discover cost breakdowns, RBI guidelines, and how to protect yourself from harassment.',
    'author': {
      '@type': 'Person',
      'name': 'Rajesh Kumar',
      'url': 'https://credsettle.com/about'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2026-07-08',
    'dateModified': '2026-07-08',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/settling-debt-in-india-guide'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Is debt settlement a legal process in India?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, debt settlement is a legally recognized financial process in India. The Reserve Bank of India permits banks and non-banking financial companies to offer One-Time Settlement schemes to recover non-performing assets, provided they adhere to regulatory compliance.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can recovery agents legally visit my workplace?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Under strict RBI directives, recovery agents cannot visit your workplace without prior permission unless they have completely failed to reach you at your registered residential address or via phone for a prolonged period. Public humiliation is strictly illegal.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How long does a typical debt settlement take?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The timeline for negotiating and executing a debt settlement usually ranges from three weeks to three months. This timeframe depends entirely on the age of the default, the willingness of the bank to negotiate, and your ability to arrange a lump sum payment.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Will I have to pay taxes on the waived debt amount?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Under Section 41 of the Income Tax Act, business loans that are settled may be treated as a cessation of liability, and the waived amount could be added to your taxable income. However, for individual personal loans and credit cards, this taxation rule is rarely enforced.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I settle a secured loan like a home loan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Settling a secured loan is incredibly rare and difficult because the bank holds the collateral. If you default, the bank will initiate SARFAESI Act proceedings to auction the property rather than offering a massive principal waiver.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What happens if I miss the settlement payment deadline?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'If you miss the stipulated payment deadline mentioned in the official settlement letter, the agreement becomes completely null and void. The bank will reinstate the full outstanding balance, including all penalties, and immediately resume legal recovery actions against you.'
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
        'name': 'Guide to Settling Debt in India: Legal Steps',
        'item': 'https://credsettle.com/settling-debt-in-india-guide'
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Debt Settlement Legal Guide and Advisory Services',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '214',
      'bestRating': '5',
      'worstRating': '1'
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
            Guide to Settling Debt in India: Legal Steps
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            The definitive legal and financial roadmap for executing a debt settlement in India without hidden tax liabilities or voided agreements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Consult Legal Experts Now
            </Link>
          </div>
        </div>
      </section>

      <SettlingDebtInIndiaClient />

      <Footer />
    </div>
  );
}
