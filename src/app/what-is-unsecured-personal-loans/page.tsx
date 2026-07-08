import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatIsUnsecuredPersonalLoansClient from './WhatIsUnsecuredPersonalLoansClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What is Unsecured Personal Loans?',
  description: 'Understand the legal vulnerabilities and exact default timeline for unsecured personal loans in India. Know your rights against recovery harassment.',
  keywords: [
    'what is unsecured personal loans',
    'unsecured loan default India',
    'unsecured personal loan legal rights',
    'stop recovery agents unsecured loan',
    'personal loan settlement India'
  ],
  openGraph: {
    title: 'What is Unsecured Personal Loans?',
    description: 'Understand the legal vulnerabilities and exact default timeline for unsecured personal loans in India. Know your rights against recovery harassment.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/what-is-unsecured-personal-loans'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What is Unsecured Personal Loans?',
    description: 'Understand the legal vulnerabilities and exact default timeline for unsecured personal loans in India.'
  },
  alternates: {
    canonical: 'https://credsettle.com/what-is-unsecured-personal-loans'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function WhatIsUnsecuredPersonalLoansPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'What is Unsecured Personal Loans?',
    'description': 'Understand the legal vulnerabilities and exact default timeline for unsecured personal loans in India. Know your rights against recovery harassment.',
    'author': {
      '@type': 'Person',
      'name': 'Rajesh Kumar',
      'image': 'https://credsettle.com/default-user.svg'
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
      '@id': 'https://credsettle.com/what-is-unsecured-personal-loans'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is an unsecured personal loan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'An unsecured personal loan is a form of debt that is not backed by any collateral. In the event of a default, the lender cannot automatically seize your house, car, or other physical assets to recover the outstanding balance.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I go to jail for defaulting on an unsecured loan in India?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. Defaulting on a personal loan is considered a civil breach of contract, not a criminal offense. You cannot be imprisoned solely for the inability to repay an unsecured debt.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What happens if I miss my first EMI on a personal loan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Missing a single EMI will trigger late payment fees and automated reminder calls. Your account enters the SMA-0 (Special Mention Account) category, but it is not immediately classified as a Non-Performing Asset (NPA).'
        }
      },
      {
        '@type': 'Question',
        'name': 'When does an unsecured loan become a Non-Performing Asset (NPA)?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'An account is typically classified as a Non-Performing Asset (NPA) after 90 consecutive days of non-payment. At this stage, the bank accelerates recovery efforts and may consider settlement options.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can recovery agents visit my office for an unsecured loan default?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'While recovery agents can visit you, RBI guidelines strictly prohibit them from humiliating you at your workplace or disclosing your debt to your employer. Any such action constitutes harassment and can be legally challenged.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can a bank freeze my salary account if I default on an unsecured loan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, if your salary account is with the same bank that issued the loan, they can use the Bankers Right of General Lien or Right to Set-Off to deduct outstanding dues from your incoming salary.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is loan settlement possible for unsecured personal loans?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. Since unsecured loans lack collateral, banks are often willing to negotiate a One-Time Settlement (OTS) when the account is highly delinquent and recovering the full amount seems unlikely.'
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
        'name': 'What is Unsecured Personal Loans?',
        'item': 'https://credsettle.com/what-is-unsecured-personal-loans'
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Unsecured Personal Loan Settlement Service',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '2',
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

      {/* Hero Section */}
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
            What is Unsecured Personal Loans?
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Understand the exact timeline of a loan default, protect your assets, and stop aggressive recovery tactics legally in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Legal Support Today
            </Link>
          </div>
        </div>
      </section>

      <WhatIsUnsecuredPersonalLoansClient />

      <Footer />
    </div>
  );
}
