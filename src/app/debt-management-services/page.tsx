import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DebtManagementClient from './DebtManagementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Debt Management Services in India | Expert Debt Settlement & Relief',
  description: 'Struggling with debt? Get professional debt management services in India. We help with debt settlement, consolidation, and legal protection against harassment.',
  keywords: [
    'debt management services india',
    'debt settlement companies',
    'loan settlement process',
    'debt relief services',
    'rbi guidelines on debt recovery',
    'stop recovery agent harassment',
    'debt consolidation india',
    'credit card settlement',
    'personal loan settlement',
    'lok adalat for debt settlement'
  ],
  openGraph: {
    title: 'Expert Debt Management Services in India | CredSettle',
    description: 'Regain your financial freedom with professional debt management and settlement services. Legal, transparent, and effective debt relief solutions.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/debt-management-services'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/debt-management-services'
  }
};

export default function DebtManagementPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://www.credsettle.com/debt-management-services',
    name: 'CredSettle Debt Management Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert debt management and settlement services helping individuals and businesses across India resolve financial defaults and stop harassment.',
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
          'name': 'Amit Kumar'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle helped me consolidate my credit card debts when I was overwhelmed. Their legal team stopped the harassment calls within 24 hours.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Meera Sen'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Highly professional debt settlement services. They represented me at Lok Adalat and secured a very fair settlement for my business loan.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Rohan Sharma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'I was terrified of digital lending apps. CredSettle legal experts protected me and negotiated settlements that I could actually afford.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Priya Das'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Excellent experience. Transparent fees and very supportive staff. They helped me rebuild my financial life after a major crisis.',
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
        'name': 'Debt Management Services',
        'item': 'https://www.credsettle.com/debt-management-services'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'The Ultimate Guide to Debt Management Services in India: Laws, Rights, and Recovery',
    'description': 'A comprehensive guide on managing debt in India, understanding RBI guidelines, dealing with recovery harassment, and choosing the right settlement services.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-02-15',
    'dateModified': '2026-05-13',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/debt-management-services'
    },
    'image': 'https://www.credsettle.com/images/debt-management-guide.jpg'
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
            Professional Debt Management<br />
            <span className="text-blue-400">Services in India</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Regain your financial freedom. Expert legal assistance for debt settlement, consolidation, and protection against aggressive recovery harassment.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Your Free Debt Analysis
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <DebtManagementClient />
      
      <Footer />
    </div>
  );
}
