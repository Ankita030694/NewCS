import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HowToNegotiateClient from './HowToNegotiateClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Negotiate a Debt Settlement with Creditors in India | Expert Guide',
  description: 'Learn how to negotiate a debt settlement with creditors in India. Expert tips on reducing your debt, RBI guidelines, and legal protection for borrowers.',
  keywords: [
    'how to negotiate debt settlement in india',
    'debt settlement with creditors india',
    'negotiate loan settlement with bank',
    'credit card settlement process india',
    'rbi guidelines for debt settlement',
    'debt settlement companies in india',
    'personal loan settlement negotiation',
    'legal help for debt settlement',
    'credsettle debt negotiation',
    'settling debt in india guide'
  ],
  openGraph: {
    title: 'Expert Guide: How to Negotiate a Debt Settlement in India',
    description: 'Master the art of debt negotiation. Get professional advice on settling your loans and credit card debts in India with CredSettle.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/how-to-negotiate-a-debt-settlement-with-creditors-in-India'
  },
  alternates: {
    canonical: 'https://credsettle.com/how-to-negotiate-a-debt-settlement-with-creditors-in-India'
  }
};

export default function DebtNegotiationPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://credsettle.com/how-to-negotiate-a-debt-settlement-with-creditors-in-India',
    name: 'CredSettle Debt Negotiation Services India',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Professional debt settlement and negotiation services helping Indian consumers resolve their debt burdens.',
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
          'name': 'Amit Verma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle helped me negotiate my credit card debt which was over 10 lakhs. They managed to get a 60% waiver. Highly professional!',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Priya Sharma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'AmaLegalSolutions provided excellent legal guidance during my loan settlement process. They ensured all bank documentation was correct.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'AmaLegalSolutions'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Suresh Menon'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'SettleLoans simplified the entire negotiation process with my bank. I was able to settle my personal loan without any harassment.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'SettleLoans'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Deepak Gupta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'The team at CredSettle is exceptional. They took over all communications with my creditors and secured a great settlement deal.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Meera Nair'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'If you are struggling with multiple loans, AmaLegalSolutions is the place to go. Their negotiation strategies are top-notch.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'AmaLegalSolutions'
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
        'name': 'How to Negotiate a Debt Settlement',
        'item': 'https://credsettle.com/how-to-negotiate-a-debt-settlement-with-creditors-in-India'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How to Negotiate a Debt Settlement with Creditors in India: A Complete 2026 Guide',
    'description': 'Master the process of debt negotiation in India. From understanding RBI guidelines to drafting hardship letters, this guide covers everything you need to know for a successful settlement.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2026-05-12',
    'dateModified': '2026-05-12',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/how-to-negotiate-a-debt-settlement-with-creditors-in-India'
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #1e3a8a 0%, #172554 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            How to Negotiate a Debt Settlement<br />
            <span className="text-blue-400">with Creditors in India</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Stop the harassment and reclaim your financial freedom. Learn the proven strategies to settle your loans for less than you owe.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Expert Negotiation Help
            </Link>
          </div>
        </div>
      </section>

      <HowToNegotiateClient />

      <Footer />
    </div>
  );
}
