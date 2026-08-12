import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RightsClient from './RightsClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What Are My Rights When Dealing With Loan Recovery Agents? | RBI Guidelines 2026',
  description: 'Know your legal rights when dealing with loan recovery agents in India. Learn about RBI guidelines, harassment protection, and how to stop recovery agent calls.',
  keywords: [
    'rights against recovery agents',
    'RBI guidelines for recovery agents',
    'loan recovery agent harassment',
    'how to stop recovery agents',
    'legal rights for debtors india',
    'recovery agent contact hours',
    'complain against recovery agent',
    'debt settlement rights',
    'fair debt collection practices india',
    'harassment by bank recovery agents'
  ],
  openGraph: {
    title: 'Your Legal Rights Against Loan Recovery Agents | RBI Guidelines',
    description: 'Stop harassment today. Understand your rights, the permissible contact hours, and how to file a complaint against recovery agents under RBI rules.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/what-are-my-rights-when-dealing-with-loan-recovery-agents'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/what-are-my-rights-when-dealing-with-loan-recovery-agents'
  }
};

export default function RightsPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://www.credsettle.com/what-are-my-rights-when-dealing-with-loan-recovery-agents',
    name: 'CredSettle Debt Relief & Legal Rights',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert guidance on borrower rights and legal protection against aggressive loan recovery practices in India.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      addressCountry: 'IN'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
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
        'reviewBody': 'CredSettle helped me understand that I don\'t have to tolerate harassment. Their team guided me through the RBI complaint process and stopped the recovery calls.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Priya Verma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'I was terrified of recovery agents until I contacted CredSettle. They explained my rights and helped me settle my debt with Amalegalsolutions and SettleLoans support. Life is much better now.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Rahul Gupta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'The information on this page is life-saving. I used the RBI guidelines mentioned here to file a complaint against a bank, and they finally stopped the illegal visits.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Sneha Reddy'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle is the best in the business. They know the law inside out. If you are being harassed, don\'t wait, just reach out to them.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Vikram Singh'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Professional, empathetic, and effective. They helped me handle a very difficult situation with recovery agents through proper legal channels.',
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
        'item': 'https://www.credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Your Rights with Recovery Agents',
        'item': 'https://www.credsettle.com/what-are-my-rights-when-dealing-with-loan-recovery-agents'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'What Are My Rights When Dealing With Loan Recovery Agents? A Comprehensive Guide',
    'description': 'An in-depth analysis of borrower rights in India, covering RBI guidelines for recovery agents, harassment prevention, and legal remedies for debtors.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-10',
    'dateModified': '2026-05-12',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/what-are-my-rights-when-dealing-with-loan-recovery-agents'
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

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
            What Are My Rights When Dealing With<br />
            <span className="text-blue-400">Loan Recovery Agents?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Stop the harassment. Understand the RBI guidelines that protect you from illegal recovery practices and reclaim your peace of mind today.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Expert Legal Help Now
            </Link>
          </div>
        </div>
      </section>

      <RightsClient />

      <Footer />
    </div>
  );
}
