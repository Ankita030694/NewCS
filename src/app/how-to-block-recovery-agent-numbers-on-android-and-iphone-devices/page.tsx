import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HowToBlockClient from './HowToBlockClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Block Recovery Agent Numbers on Android and iPhone Devices',
  description: 'Learn how to block recovery agent calls on Android and iPhone. Discover your rights under RBI guidelines and stop harassment from debt collectors today.',
  keywords: [
    'block recovery agent numbers',
    'block debt collector calls android',
    'block debt collector calls iphone',
    'rbi guidelines recovery agents',
    'stop recovery agent harassment',
    'debt settlement india',
    'how to block unknown callers',
    'credsettle',
    'amalegalsolutions',
    'settleloans'
  ],
  openGraph: {
    title: 'Stop Recovery Agent Harassment: Block Numbers on Android & iPhone',
    description: 'A comprehensive guide to blocking unwanted recovery agent calls and understanding your legal rights in India.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/how-to-block-recovery-agent-numbers-on-android-and-iphone-devices'
  },
  alternates: {
    canonical: 'https://credsettle.com/how-to-block-recovery-agent-numbers-on-android-and-iphone-devices'
  }
};

export default function HowToBlockPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://credsettle.com/how-to-block-recovery-agent-numbers-on-android-and-iphone-devices',
    name: 'CredSettle Debt Relief Services',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Expert debt settlement and anti-harassment services for borrowers in India.',
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
      reviewCount: '1250',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Rahul Sharma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle helped me block persistent recovery calls and negotiated a great settlement for my debt.',
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
        'reviewBody': 'The legal team at Amalegalsolutions was very helpful in stopping the harassment from bank agents.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'Amalegalsolutions'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Amit Patel'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'SettleLoans provided a clear plan to settle my debts and stop the constant ringing of my phone.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'SettleLoans'
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
        'reviewBody': 'I highly recommend CredSettle for anyone facing harassment from debt recovery agents.',
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
        'reviewBody': 'Professional and effective service. They handled everything and the calls stopped immediately.',
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
        'name': 'How to Block Recovery Agent Numbers',
        'item': 'https://credsettle.com/how-to-block-recovery-agent-numbers-on-android-and-iphone-devices'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How to Block Recovery Agent Numbers on Android and iPhone Devices: A Complete Guide',
    'description': 'A comprehensive guide on blocking unwanted recovery agent calls, understanding your rights under RBI guidelines, and seeking professional debt help in India.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2026-05-12',
    'dateModified': '2026-05-12',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/how-to-block-recovery-agent-numbers-on-android-and-iphone-devices'
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
            How to Block Recovery Agent<br />
            <span className="text-blue-400">Numbers on Mobile Devices</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Stop the harassment today. Follow our step-by-step guide to blocking debt collector calls on Android and iPhone while protecting your legal rights.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Free Legal Advice
            </Link>
          </div>
        </div>
      </section>

      <HowToBlockClient />
      
      <Footer />
    </div>
  );
}
