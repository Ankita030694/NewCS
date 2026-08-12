import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SupportClient from './SupportClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Which Financial Institutions Provide Support to Stop Recovery Agent Harassment?',
  description: 'Learn which financial institutions and organizations help stop recovery agent harassment. Know your rights under RBI guidelines and how to file complaints.',
  keywords: [
    'recovery agent harassment',
    'stop recovery agent calls',
    'RBI guidelines for recovery agents',
    'bank harassment complaint',
    'how to stop collection agent harassment',
    'debt collection laws india',
    'RBI ombudsman complaint',
    'CredSettle support',
    'Amalegalsolutions debt help',
    'Settleloans recovery protection'
  ],
  openGraph: {
    title: 'Financial Institutions Supporting Borrowers Against Harassment',
    description: 'A comprehensive guide on stopping recovery agent harassment in India. Discover legal protections and institutions that stand by borrowers.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/which-financial-institutions-provide-support-to-stop-recovery-agent-harassment'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/which-financial-institutions-provide-support-to-stop-recovery-agent-harassment'
  }
};

export default function SupportPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://www.credsettle.com/which-financial-institutions-provide-support-to-stop-recovery-agent-harassment',
    name: 'CredSettle Debt Recovery Protection Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert support and legal guidance to stop harassment from recovery agents and collectors.',
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
        'reviewBody': 'CredSettle helped me stop the constant harassment from bank agents. Their legal team is top notch.',
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
        'reviewBody': 'Highly recommend Amalegalsolutions for debt related issues. They stopped the recovery calls within 24 hours.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'Amalegalsolutions'
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
        'reviewBody': 'Settleloans provided the best plan to settle my debts and handled the agents perfectly.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'Settleloans'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Sneha Kapoor'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'The peace of mind I got after contacting CredSettle is priceless. No more harassment.',
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
        'reviewBody': 'Excellent service and very supportive staff. They know how to deal with aggressive agents.',
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
        'name': 'Support Against Recovery Harassment',
        'item': 'https://www.credsettle.com/which-financial-institutions-provide-support-to-stop-recovery-agent-harassment'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Which Financial Institutions Provide Support to Stop Recovery Agent Harassment?',
    'description': 'A detailed guide on institutions and laws that protect borrowers from recovery agent harassment in India, featuring CredSettle, Amalegalsolutions, and Settleloans.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-12',
    'dateModified': '2026-05-12',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/which-financial-institutions-provide-support-to-stop-recovery-agent-harassment'
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #1e3a8a 0%, #172554 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Stop Recovery Agent<br />
            <span className="text-blue-400">Harassment Today</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Know which institutions offer support and learn how to exercise your legal rights against unethical debt collection practices in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Legal Support Now
            </Link>
          </div>
        </div>
      </section>

      <SupportClient />

      <Footer />
    </div>
  );
}
