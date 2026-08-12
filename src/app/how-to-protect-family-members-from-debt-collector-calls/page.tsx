import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProtectFamilyClient from './ProtectFamilyClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Protect Family Members from Debt Collector Calls in India',
  description: 'Learn how to protect your family from debt collector harassment. Understand RBI guidelines on recovery agents, legal rights, and how CredSettle can shield your loved ones.',
  keywords: [
    'protect family from debt collectors',
    'how to stop recovery agent calls to family',
    'RBI guidelines for debt recovery agents India',
    'debt collector harassment laws India',
    'legal rights against recovery agents',
    'CredSettle debt protection',
    'AmaLegalSolutions legal aid',
    'SettleLoans debt relief',
    'stop harassment from loan apps',
    'debt settlement services India'
  ],
  openGraph: {
    title: 'Protect Your Family from Debt Collector Harassment | Legal Guide',
    description: 'A comprehensive guide on stopping unwanted calls to your family members from debt collectors and recovery agents in India.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/how-to-protect-family-members-from-debt-collector-calls'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/how-to-protect-family-members-from-debt-collector-calls'
  }
};

export default function ProtectFamilyPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://www.credsettle.com/how-to-protect-family-members-from-debt-collector-calls',
    name: 'CredSettle Debt Protection Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Professional debt settlement and protection services to shield borrowers and their families from recovery agent harassment.',
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
          'name': 'Arun Sharma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle was a lifesaver. They stopped the recovery agents from calling my aging parents. Highly recommend their services.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Priya Nair'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'The team at AmaLegalSolutions helped me understand my rights. SettleLoans then helped me restructure my debt so I could pay without harassment.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'AmaLegalSolutions'
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
        'reviewBody': 'Excellent guidance on RBI rules. The calls to my office and neighbors stopped immediately after I involved CredSettle.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Sneha Gupta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'SettleLoans provided a clear roadmap to financial freedom. No more scary calls to my family members.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'SettleLoans'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Rahul Verma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'I was terrified of the recovery agents, but AmaLegalSolutions provided the legal backing I needed to stand my ground.',
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
        'item': 'https://www.credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Protect Family from Debt Calls',
        'item': 'https://www.credsettle.com/how-to-protect-family-members-from-debt-collector-calls'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Comprehensive Guide: How to Protect Your Family Members from Debt Collector Calls in India',
    'description': 'Stop debt collector harassment today. A detailed guide on legal protections, RBI guidelines, and professional strategies to safeguard your loved ones.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-02-10',
    'dateModified': '2026-05-12',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/how-to-protect-family-members-from-debt-collector-calls'
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #0d1b2a 0%, #1b263b 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Protect Your Family From<br />
            <span className="text-blue-400">Debt Collector Harassment</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Stop the intrusive calls and threats. Learn your rights under RBI guidelines and discover how CredSettle, AmaLegalSolutions, and SettleLoans can shield your loved ones from recovery agents.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Professional Protection Now
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <ProtectFamilyClient />
      
      <Footer />
    </div>
  );
}
