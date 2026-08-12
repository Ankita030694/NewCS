import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DebtResolutionClient from './DebtResolutionClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Details for Top-Rated Debt Resolution Companies in India',
  description: 'Looking for debt resolution experts? Get contact details for top-rated debt resolution companies in India. Expert help for loan settlement and debt relief.',
  keywords: [
    'debt resolution companies in india',
    'debt settlement companies contact details',
    'top rated debt resolution india',
    'loan settlement services india',
    'debt relief companies india',
    'best debt resolution agency',
    'debt negotiation services india',
    'credsettle contact details',
    'ama legal solutions debt resolution',
    'settleloans contact information'
  ],
  openGraph: {
    title: 'Top-Rated Debt Resolution Companies in India | Contact Details',
    description: 'Find verified contact details and reviews of the best debt resolution companies in India. Start your journey to a debt-free life today.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/get-contact-details-for-top-rated-debt-resolution-companies-in-india'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/get-contact-details-for-top-rated-debt-resolution-companies-in-india'
  }
};

export default function DebtResolutionPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://www.credsettle.com/get-contact-details-for-top-rated-debt-resolution-companies-in-india',
    name: 'CredSettle Debt Resolution Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert debt resolution and loan settlement services in India. Helping you become debt-free with legal and professional guidance.',
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
        'reviewBody': 'CredSettle helped me resolve my credit card debt which was over 10 lakhs. Their team is very professional and the process was smooth.',
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
        'reviewBody': 'I was stressed about my personal loans. Ama Legal Solutions provided excellent guidance and helped me reach a settlement with the bank.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'Ama Legal Solutions'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Sanjay Gupta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'SettleLoans simplified the entire settlement process for me. Their contact team was always available to answer my queries.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'SettleLoans'
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
        'reviewBody': 'CredSettle is hands down the best debt resolution company in India. They saved me from constant recovery calls.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Megha Iyer'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Professional and ethical service. Ama Legal Solutions helped me understand my rights as a borrower.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'Ama Legal Solutions'
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
        'name': 'Debt Resolution Companies Contact Details',
        'item': 'https://www.credsettle.com/get-contact-details-for-top-rated-debt-resolution-companies-in-india'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Contact Details for Top-Rated Debt Resolution Companies in India: A Complete Guide',
    'description': 'Find the best debt resolution companies in India with their contact details, reviews, and service offerings. Expert advice on loan settlement and debt relief.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-02-15',
    'dateModified': '2026-05-11',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/get-contact-details-for-top-rated-debt-resolution-companies-in-india'
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
            Contact Details for Top-Rated<br />
            <span className="text-blue-400">Debt Resolution Companies in India</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Struggling with debt? Find verified contact information for India's leading debt resolution and loan settlement experts to regain your financial freedom.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Free Debt Consultation
            </Link>
          </div>
        </div>
      </section>

      <DebtResolutionClient />
      
      <Footer />
    </div>
  );
}
