import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PunishmentForNonPaymentClient from './PunishmentForNonPaymentClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Punishment for Non-Payment of Personal Loan in India',
  description: 'Understand the legal and financial consequences of defaulting on a personal loan in India. Learn about CIBIL impact, RBI rules, and your legal rights.',
  keywords: [
    'punishment for non payment of personal loan',
    'personal loan default legal action',
    'defaulting on personal loan in india',
    'bank recovery agent harassment',
    'personal loan settlement',
    'consequences of missing EMI',
    'can I go to jail for loan default'
  ],
  openGraph: {
    title: 'Punishment for Non-Payment of Personal Loan in India',
    description: 'Understand the legal and financial consequences of defaulting on a personal loan in India. Learn about CIBIL impact, RBI rules, and your legal rights.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/punishment-for-non-payment-of-personal-loan-in-india'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Punishment for Non-Payment of Personal Loan in India',
    description: 'Understand the legal and financial consequences of defaulting on a personal loan in India. Learn about CIBIL impact, RBI rules, and your legal rights.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/punishment-for-non-payment-of-personal-loan-in-india'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function PunishmentForNonPaymentPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Punishment for Non-Payment of Personal Loan in India',
    'description': 'Understand the legal and financial consequences of defaulting on a personal loan in India. Learn about CIBIL impact, RBI rules, and your legal rights.',
    'author': {
      '@type': 'Person',
      'name': 'Vikram Sharma',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'
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
      '@id': 'https://www.credsettle.com/punishment-for-non-payment-of-personal-loan-in-india'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Can I go to jail for not paying a personal loan in India?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No, defaulting on a personal loan is considered a civil breach of contract, not a criminal offense. You cannot be arrested or sent to jail merely for being unable to repay a personal debt, unless fraud or a bounced cheque is involved.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What happens if my ECS mandate or cheque bounces for EMI payment?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'If a cheque bounces, the bank can initiate a criminal case under Section 138 of the Negotiable Instruments Act. Similarly, an ECS mandate failure can attract penalties under Section 25 of the Payment and Settlement Systems Act, which can have criminal implications.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Are recovery agents allowed to visit my office?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Recovery agents must follow strict RBI guidelines. They cannot harass you at your workplace or disclose your debt to colleagues. They are only allowed to contact you at the place and time you have mutually agreed upon.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How long does a personal loan default stay on my CIBIL report?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'A default or a settled status will reflect on your CIBIL report for several years, typically up to seven years. This severely impacts your credit score and makes it very difficult to obtain loans in the near future.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can the bank freeze my salary account for a loan default?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Banks can exercise the right of set off, allowing them to deduct funds from your savings or salary account held within the same bank to recover outstanding dues, provided this clause was in your loan agreement.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is a One Time Settlement (OTS) a good idea for personal loans?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'An OTS is an emergency measure for those in genuine financial distress. While it stops legal action and harassment, it results in a settled status on your credit report, which damages your creditworthiness significantly.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What should I do if a recovery agent threatens me?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'You should immediately document the incident by recording calls or saving messages. You have the right to file a police complaint for criminal intimidation and lodge a grievance with the banking ombudsman against the bank.'
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
        'name': 'Punishment for Non-Payment of Personal Loan in India',
        'item': 'https://www.credsettle.com/punishment-for-non-payment-of-personal-loan-in-india'
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Personal Loan Legal Advisory and Settlement Service',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '215',
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
            Punishment for Non-Payment of Personal Loan in India
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Understand your rights. Defaulting is a civil matter, not a criminal one. Protect yourself from illegal harassment and find a structured resolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Legal Protection Now
            </Link>
          </div>
        </div>
      </section>

      <PunishmentForNonPaymentClient />

      <Footer />
    </div>
  );
}
