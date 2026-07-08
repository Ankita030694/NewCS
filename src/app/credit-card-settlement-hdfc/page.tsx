import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HdfcCreditCardSettlementClient from './HdfcCreditCardSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HDFC Credit Card Settlement Guide: Negotiate Waivers',
  description: 'Navigate HDFC credit card defaults, stop recovery agent harassment, and negotiate maximum waivers. Learn the step by step process for a secure one time settlement.',
  keywords: [
    'HDFC credit card settlement',
    'HDFC bank settlement policy',
    'credit card settlement',
    'stop HDFC recovery agents',
    'one time settlement HDFC',
    'HDFC legal notice',
    'credit card debt relief'
  ],
  openGraph: {
    title: 'HDFC Credit Card Settlement Guide',
    description: 'Navigate HDFC credit card defaults, stop recovery agent harassment, and negotiate maximum waivers.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/credit-card-settlement-hdfc'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HDFC Credit Card Settlement Guide',
    description: 'Learn how to negotiate an HDFC credit card settlement effectively and protect your legal rights.'
  },
  alternates: {
    canonical: 'https://credsettle.com/credit-card-settlement-hdfc'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function HdfcCreditCardSettlementPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'HDFC Credit Card Settlement Guide: Negotiate Waivers',
    'description': 'Navigate HDFC credit card defaults, stop recovery agent harassment, and negotiate maximum waivers. Learn the step by step process for a secure one time settlement.',
    'author': {
      '@type': 'Person',
      'name': 'Rohan Sharma',
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
      '@id': 'https://credsettle.com/credit-card-settlement-hdfc'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Will HDFC Bank send recovery agents to my office?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'While they may attempt to contact you, RBI rules strictly prohibit agents from harassing you at your workplace or disclosing your debt situation to your colleagues or employer. You can file a formal complaint if they violate these terms.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the maximum waiver I can get on an HDFC credit card settlement?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Waiver percentages vary greatly depending on the age of the default and your proven hardship. It is possible to secure waivers ranging from thirty to seventy percent, but this requires expert negotiation and substantial evidence of insolvency.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How long does the HDFC settlement process take?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The process can take anywhere from a few weeks to several months. It depends on how quickly you can consolidate your lump sum payment and how many rounds of negotiation are required to reach a mutually agreeable figure with the bank.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Does settling my HDFC card clear my CIBIL record?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. A settlement will mark your account as Settled rather than Closed on your CIBIL report. This negatively impacts your credit score and will remain on your record for years, indicating to future lenders that you did not repay the debt in full.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Should I use a loan to pay off my HDFC credit card debt?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Taking another high interest unsecured loan to pay off an existing credit card debt usually leads to a worse financial trap. A negotiated settlement using your own consolidated savings is a far safer strategy to escape the debt cycle permanently.'
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
        'name': 'HDFC Credit Card Settlement Guide',
        'item': 'https://credsettle.com/credit-card-settlement-hdfc'
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'HDFC Credit Card Settlement Negotiation Service',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '3',
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #004C8F 0%, #001235 100%)',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            HDFC Credit Card Settlement Guide
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Stop the harassment and resolve your debt legally. A comprehensive strategy for navigating an HDFC credit card settlement.
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

      <HdfcCreditCardSettlementClient />

      <Footer />
    </div>
  );
}
