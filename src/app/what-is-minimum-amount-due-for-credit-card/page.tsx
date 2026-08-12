import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatIsMinimumAmountDueClient from './WhatIsMinimumAmountDueClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What is Minimum Amount Due for Credit Card? (2026)',
  description: 'Learn exactly how credit card minimum amount due is calculated in India, why it traps you in compounding debt, and legal strategies to settle it.',
  keywords: [
    'what is minimum amount due for credit card',
    'credit card minimum amount due calculation',
    '5 percent rule credit card',
    'credit card debt trap India',
    'minimum amount due vs total due',
    'settle credit card debt'
  ],
  openGraph: {
    title: 'What is Minimum Amount Due for Credit Card? (2026)',
    description: 'Learn exactly how credit card minimum amount due is calculated in India, why it traps you in compounding debt, and legal strategies to settle it.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/what-is-minimum-amount-due-for-credit-card'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What is Minimum Amount Due for Credit Card? (2026)',
    description: 'Learn exactly how credit card minimum amount due is calculated in India and legal strategies to settle it.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/what-is-minimum-amount-due-for-credit-card'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function WhatIsMinimumAmountDuePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'What is Minimum Amount Due for Credit Card?',
    'description': 'Learn exactly how credit card minimum amount due is calculated in India, why it traps you in compounding debt, and legal strategies to settle it.',
    'author': {
      '@type': 'Person',
      'name': 'Vikram Sharma',
      'image': 'https://www.credsettle.comhttps://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2026-07-08',
    'dateModified': '2026-07-08',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/what-is-minimum-amount-due-for-credit-card'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What happens if I only pay the minimum amount due?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'If you only pay the minimum amount due, the remaining balance is carried forward to the next billing cycle. The bank will charge high compounding interest, often around three to four percent per month, on the unpaid balance and any new purchases.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How is the minimum amount due calculated on a credit card?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The minimum amount due is typically calculated as five percent of your total outstanding balance, plus any applicable EMIs, past due amounts, and over limit fees. Banks in India use this standard formula to keep accounts active while maximizing interest revenue.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Does paying the minimum amount due negatively impact my CIBIL score?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Paying the minimum amount due on time prevents a late payment remark on your CIBIL report. However, carrying a high balance increases your credit utilization ratio, which can slowly degrade your credit score over time.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I negotiate a settlement if I have only been paying the minimum due?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, if you face genuine financial hardship and can no longer afford even the minimum payments, you can stop paying to trigger a default phase. Once the account becomes a non performing asset, you can negotiate a one time settlement.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is it legal for recovery agents to harass me if I stop paying the minimum amount?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No, it is entirely illegal. The Reserve Bank of India mandates strict guidelines for recovery agents. They cannot use abusive language, call outside permitted hours, or threaten you under any circumstances.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Will my credit card be blocked if I only pay the minimum amount due?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No, your credit card will remain active as long as you pay the minimum amount due by the designated deadline. However, your available credit limit will decrease as the unpaid balance and interest charges consume it.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How long will it take to clear my debt by paying only the minimum amount?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Depending on the interest rate and the size of your balance, it can take anywhere from seven to fifteen years to clear a credit card debt by paying only the minimum amount due, costing you double or triple the original principal.'
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
        'name': 'What is Minimum Amount Due for Credit Card?',
        'item': 'https://www.credsettle.com/what-is-minimum-amount-due-for-credit-card'
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Credit Card Debt Settlement Services',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '312',
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
            What is Minimum Amount Due for Credit Card?
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Understand how credit card companies use the minimum amount due to trap you in debt, and discover the legal pathways to break free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Debt Relief Assistance
            </Link>
          </div>
        </div>
      </section>

      <WhatIsMinimumAmountDueClient />

      <Footer />
    </div>
  );
}
