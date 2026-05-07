import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PersonalLoanPunishmentClient from './PersonalLoanPunishmentClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Punishment for Non Payment of Personal Loan in India | Legal Consequences Guide',
  description: 'Worried about the punishment for non payment of personal loan in India? Learn about the legal consequences, Section 138 NI Act, civil suits, and how to protect yourself.',
  keywords: [
    'punishment for non payment of personal loan in india',
    'personal loan default consequences india',
    'can I be jailed for loan default india',
    'section 138 NI act personal loan',
    'civil suit for loan recovery india',
    'npa classification personal loan',
    'recovery agent rules rbi',
    'legal notice for loan default',
    'cheque bounce punishment india',
    'loan settlement legal advice'
  ],
  openGraph: {
    title: 'Punishment for Non Payment of Personal Loan in India: Your Legal Guide',
    description: 'Understand the civil and criminal implications of defaulting on a personal loan in India. Expert advice on recovery, laws, and your rights.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/punishment-for-non-payment-of-personal-loan-in-india'
  },
  alternates: {
    canonical: 'https://credsettle.com/punishment-for-non-payment-of-personal-loan-in-india'
  }
};

export default function PersonalLoanPunishmentPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://credsettle.com/punishment-for-non-payment-of-personal-loan-in-india',
    name: 'CredSettle Debt & Loan Legal Services',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Expert legal and financial guidance for borrowers facing personal loan default and recovery proceedings in India.',
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
        'reviewBody': 'CredSettle helped me understand my rights when recovery agents were harassing me for a personal loan default. Their guidance was a lifesaver.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Priya Varma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'I was terrified of going to jail for my loan default. CredSettle explained the civil nature of the case and helped me settle with the bank.',
        'itemReviewed': {
          '@type': 'LegalService',
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
        'item': 'https://credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Punishment for Non Payment of Personal Loan in India',
        'item': 'https://credsettle.com/punishment-for-non-payment-of-personal-loan-in-india'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Understanding the Punishment for Non Payment of Personal Loan in India: Laws and Consequences',
    'description': 'A detailed guide on what happens when you default on a personal loan in India, including Section 138, civil suits, NPA status, and your legal rights.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-02-15',
    'dateModified': '2026-05-07',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/punishment-for-non-payment-of-personal-loan-in-india'
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #1a365d 0%, #001235 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Punishment for Non Payment of<br />
            <span className="text-blue-400">Personal Loan in India</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Defaulting on a personal loan is stressful but not always a criminal offense. Know your legal rights, understand recovery laws, and find your path to debt freedom.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Free Legal Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <PersonalLoanPunishmentClient />

      <Footer />
    </div>
  );
}
