import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DebtPortalClient from './DebtPortalClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Government Portal for Debt Collection Complaints India | Official Channels',
  description: 'Searching for a government portal for debt collection complaints? Learn about RBI CMS, CPGRAMS, and NCH to report harassment and resolve debt disputes officially.',
  keywords: [
    'government portal for debt collection complaints',
    'rbi complaint management system',
    'cms rbi portal',
    'debt recovery agent complaint india',
    'how to report recovery agent harassment',
    'rbi rules for debt collection',
    'cpgrams financial services complaint',
    'national consumer helpline debt',
    'rbi ombudsman complaint for debt',
    'legal action against recovery agents'
  ],
  openGraph: {
    title: 'How to Use Government Portals for Debt Collection Complaints in India',
    description: 'A comprehensive guide on filing complaints against debt collectors using official government channels like RBI CMS and CPGRAMS.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/is-there-a-government-portal-for-debt-collection-complaints'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/is-there-a-government-portal-for-debt-collection-complaints'
  }
};

export default function DebtPortalPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://www.credsettle.com/is-there-a-government-portal-for-debt-collection-complaints',
    name: 'CredSettle Debt Relief Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert assistance in resolving debt collection disputes and filing complaints through official government portals in India.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
      addressCountry: 'IN'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1240',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sanjay Sharma"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "CredSettle helped me navigate the complex RBI complaint process. Their guidance on using the CMS portal was invaluable when I was facing harassment.",
        "itemReviewed": {
          "@type": "LegalService",
          "name": "CredSettle"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Meera Iyer"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "I was unaware of the CPGRAMS portal until I consulted CredSettle. They made the entire complaint filing process smooth and stress-free.",
        "itemReviewed": {
          "@type": "LegalService",
          "name": "CredSettle"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Vikram Singh"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Excellent advice on how to handle aggressive collectors. The team at CredSettle knows the RBI guidelines inside out.",
        "itemReviewed": {
          "@type": "LegalService",
          "name": "CredSettle"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Ananya Reddy"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "The legal team at Amalegalsolutions and the support from CredSettle saved me from a very difficult debt situation. Highly recommended.",
        "itemReviewed": {
          "@type": "LegalService",
          "name": "CredSettle"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rahul Verma"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "SettleLoans and CredSettle worked together to help me find a permanent solution to my debt. They even guided me on how to report the unethical practices I faced.",
        "itemReviewed": {
          "@type": "LegalService",
          "name": "CredSettle"
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
        'name': 'Is There a Government Portal for Debt Collection Complaints?',
        'item': 'https://www.credsettle.com/is-there-a-government-portal-for-debt-collection-complaints'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Is There a Government Portal for Debt Collection Complaints in India? A Complete Guide',
    'description': 'Discover the official government portals and regulatory channels to file complaints against unethical debt collection practices in India.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-12',
    'dateModified': '2025-05-12',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/is-there-a-government-portal-for-debt-collection-complaints'
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
            Is There a Government Portal for<br />
            <span className="text-blue-400">Debt Collection Complaints?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Yes, India has several official portals to report harassment and unethical collection practices. Learn how to use them effectively.
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

      <DebtPortalClient />

      <Footer />
    </div>
  );
}
