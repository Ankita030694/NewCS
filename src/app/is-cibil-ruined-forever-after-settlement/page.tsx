import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CibilSettlementClient from './CibilSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Is CIBIL Ruined Forever After Settlement? Full Truth & Recovery Guide',
  description: 'Worried about CIBIL after settlement? Learn if your credit score is ruined forever. Expert guide on rebuilding credit after loan settlement and legal rights in India.',
  keywords: [
    'is cibil ruined forever after settlement',
    'cibil score after loan settlement',
    'can i get loan after settlement',
    'recovery agent abuse legality india',
    'how to remove settle remark from cibil',
    'credit relief india',
    'loan settlement impact on cibil',
    'rbi guidelines for recovery agents',
    'rebuilding credit score after settlement',
    'is loan settlement bad for home loan'
  ],
  openGraph: {
    title: 'Is CIBIL Ruined Forever After Settlement? Full Truth & Recovery Guide',
    description: 'The real impact of loan settlement on your CIBIL score. How to rebuild your credit and stop collection harassment legally.',
    type: 'article',
    locale: 'en_IN',
    url: 'https://credsettle.com/is-cibil-ruined-forever-after-settlement'
  },
  alternates: {
    canonical: 'https://credsettle.com/is-cibil-ruined-forever-after-settlement'
  }
};

export default function CibilSettlementPage() {
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
        'name': 'CIBIL Restoration Guide',
        'item': 'https://credsettle.com/is-cibil-ruined-forever-after-settlement'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Is CIBIL Ruined Forever After Settlement? Truth and Restoration Roadmap',
    'description': 'A comprehensive guide on the long-term impact of loan settlement on CIBIL scores in India and steps to rebuild creditworthiness.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2024-03-30',
    'dateModified': '2024-03-30',
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://credsettle.com/logo.png'
      }
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Is CIBIL score ruined forever after a loan settlement?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No, it is not ruined forever. While a settlement leaves a negative "Settled" remark on your report for up to 7 years, its weight on your creditworthiness decreases as time passes and as you build new, positive credit history.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How many points does a CIBIL score drop after settlement?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'A settlement can cause an immediate drop of 75 to 150 points depending on your previous score. However, this is better than having an "Unpaid" status which continues to degrade your score every month.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How can I change my status from "Settled" to "Closed"?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The only way to clear the "Settled" remark is to pay the original lender the balance amount that was waived off during settlement and get a No Dues Certificate.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can recovery agents legally abuse me in India?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Absolutely not. Verbal abuse, physical intimidation, social shaming, and threats are strictly illegal under RBI guidelines. Recovery agents must act with dignity.'
        }
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'CredSettle Debt Settlement Service',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '342'
    },
    'review': [
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Vikram S.' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'Score was 540 after settlement, now it is 745. Rebuilding is possible.'
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Priya R.' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'Stopped recovery harassment and got a 35 percent deal.'
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* Hero Section - Matching loan-settlement design */}
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
            Is Your CIBIL Score Ruined Forever?<br />
            <span className="text-blue-300">The Hard Truth About Loan Settlement</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Stop living in fear of your credit report. Discover how to rebuild your score, stop recovery agent harassment, and regain your financial freedom legally in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Expert Legal Advice
            </Link>
          </div>
        </div>
      </section>

      <CibilSettlementClient />
      
      <Footer />
    </div>
  );
}
