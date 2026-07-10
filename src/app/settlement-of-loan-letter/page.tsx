import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SettlementOfLoanLetterClient from './SettlementOfLoanLetterClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Loan Settlement Letter to Bank (Format & Guide)',
  description: 'Learn how to draft a legally sound loan settlement letter to Indian banks. Get proven templates, avoid critical mistakes, and secure a NOC fast.',
  keywords: [
    'settlement of loan letter',
    'loan settlement letter format',
    'how to write loan settlement letter',
    'loan settlement proposal letter',
    'one time settlement letter format'
  ],
  openGraph: {
    title: 'Loan Settlement Letter to Bank (Format & Guide)',
    description: 'Learn how to draft a legally sound loan settlement letter to Indian banks. Get proven templates, avoid critical mistakes, and secure a NOC fast.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/settlement-of-loan-letter'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement Letter to Bank (Format & Guide)',
    description: 'Learn how to draft a legally sound loan settlement letter to Indian banks. Get proven templates, avoid critical mistakes, and secure a NOC fast.'
  },
  alternates: {
    canonical: 'https://credsettle.com/settlement-of-loan-letter'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function SettlementOfLoanLetterPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How to Write a Loan Settlement Letter',
    'description': 'Learn how to draft a legally sound loan settlement letter to Indian banks. Get proven templates, avoid critical mistakes, and secure a NOC fast.',
    'author': {
      '@type': 'Person',
      'name': 'Vikram Sharma',
      'image': 'https://credsettle.comhttps://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'
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
      '@id': 'https://credsettle.com/settlement-of-loan-letter'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is the best format for a loan settlement letter?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The best format is concise, formal, and strictly factual. It should state your loan account details, explain your genuine financial hardship without unnecessary emotion, and propose a specific lump sum amount for a full and final settlement.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Will sending a settlement letter affect my CIBIL score?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, settling your debt instead of fully repaying it will reflect as Settled on your CIBIL report. This negatively impacts your credit score, making future borrowing difficult for a few years, but it stops legal actions and endless interest accrual.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Should I hire a lawyer to write the settlement letter?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'While you can write it yourself using proven templates, hiring a professional debt negotiator or lawyer ensures you do not accidentally reset the limitation period or legally admit to a higher principal liability than necessary.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How long does the bank take to reply to a settlement offer?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Banks typically respond within 15 to 30 days. Their first response is almost always a counter-offer demanding a higher amount. Do not rush the process; patience is a key tactic in financial negotiations.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can the bank reject my settlement proposal completely?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, if the bank believes you have the financial capacity to pay or if your account has not aged enough into the Non-Performing Asset category, they may reject the offer and proceed with normal recovery efforts.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What happens if I miss the payment after the settlement is approved?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Missing the payment deadline nullifies the settlement agreement. The bank will reinstate the full original debt amount, add fresh penalties, and you will lose all the leverage you gained during the negotiation.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is a loan settlement letter valid for unsecured personal loans?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, a settlement letter is highly effective for unsecured debt like personal loans and credit cards. Since the bank has no physical collateral to repossess, they are more willing to accept a lump sum to avoid a total loss.'
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
        'name': 'Loan Settlement Letter Format Guide',
        'item': 'https://credsettle.com/settlement-of-loan-letter'
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Loan Settlement Letter Drafting Guide',
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
            Loan Settlement Letter to Bank (Format)
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Secure a massive waiver and a clear NOC. Learn how to draft a legally sound loan settlement letter without resetting your liability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Settlement Assistance
            </Link>
          </div>
        </div>
      </section>

      <SettlementOfLoanLetterClient />

      <Footer />
    </div>
  );
}
