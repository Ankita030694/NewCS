import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StressFreeDebtFreeClient from './StressFreeDebtFreeClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Stress Free Debt Free Guide India',
  description: 'Learn how to become completely debt free without the overwhelming stress, harassment, and legal threats. A complete guide to legally protected negotiations.',
  keywords: [
    'stress free debt free',
    'debt free journey india',
    'stop recovery harassment',
    'legal debt settlement',
    'debt relief framework',
    'stress free settlement',
    'debt free status'
  ],
  openGraph: {
    title: 'Stress Free Debt Free Guide India',
    description: 'Learn how to become completely debt free without the overwhelming stress, harassment, and legal threats. A complete guide to legally protected negotiations.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/stress-free-debt-free'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stress Free Debt Free Guide India',
    description: 'Learn how to become completely debt free without the overwhelming stress, harassment, and legal threats.'
  },
  alternates: {
    canonical: 'https://credsettle.com/stress-free-debt-free'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function StressFreeDebtFreePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Stress Free Debt Free Guide India',
    'description': 'Learn how to become completely debt free without the overwhelming stress, harassment, and legal threats. A complete guide to legally protected negotiations.',
    'author': {
      '@type': 'Person',
      'name': 'Kunal Verma',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'
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
      '@id': 'https://credsettle.com/stress-free-debt-free'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Can I actually stop all recovery agent calls immediately?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, by employing a legally structured cease and desist notice, you can halt abusive communications instantly, protecting your mental peace.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How long does a stress free debt relief process take?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'A guided process typically takes between three to six months to reach a final resolution, depending on the number of creditors and your current fund availability.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Will my family find out about my debt if I use this framework?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Professional representation acts as a barrier, preventing agents from contacting third parties, which keeps your financial matters strictly confidential and protects your family.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do I have to go to court for a stress free settlement?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No, the vast majority of cases are resolved out of court through direct negotiation. Going to court is exceptionally rare when you are properly represented.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can this process work if I have multiple high limit credit cards?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Absolutely. The framework is designed to handle multiple lines of credit simultaneously by prioritizing the most aggressive creditors and systematically negotiating terms for each.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What happens if I cannot afford a lump sum payment right now?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The shielded escrow strategy allows you to build your settlement fund over a few months while the legal team keeps the creditors at bay, buying you the necessary time.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Will a stress free settlement restore my credit score?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Settling debt will reflect on your credit report, but removing the active delinquency and stopping the mounting interest is the first required step before you can begin rebuilding your credit profile.'
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
        'name': 'Stress Free Debt Free Guide',
        'item': 'https://credsettle.com/stress-free-debt-free'
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Stress Free Debt Relief Service',
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
      <header
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
            Stress Free Debt Free Strategy
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Eliminate financial anxiety through structured, legally protected negotiations and reclaim your mental peace today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </header>

      <StressFreeDebtFreeClient />

      <Footer />
    </div>
  );
}
