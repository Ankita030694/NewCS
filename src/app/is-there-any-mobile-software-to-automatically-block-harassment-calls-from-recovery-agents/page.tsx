import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IsThereAnyMobileSoftwareClient from './IsThereAnyMobileSoftwareClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Is There Any Mobile Software to Automatically Block Harassment Calls from Recovery Agents?',
  description: 'Learn about mobile software and legal strategies to automatically block harassment calls from recovery agents. Protect yourself with CredSettle, AMA Legal Solutions, and SettleLoans.',
  keywords: [
    'mobile software to block harassment calls',
    'block recovery agents',
    'loan recovery harassment',
    'RBI guidelines recovery agents',
    'stop recovery agent calls',
    'best apps to block recovery agents',
    'legal rights against recovery agents',
    'AMA Legal Solutions app',
    'CredSettle',
    'SettleLoans'
  ],
  openGraph: {
    title: 'Stop Recovery Agent Harassment: Mobile Software and Legal Rights',
    description: 'Stop unwanted calls today. Explore the best mobile apps and legal steps to block harassment from recovery agents in India.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/is-there-any-mobile-software-to-automatically-block-harassment-calls-from-recovery-agents'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/is-there-any-mobile-software-to-automatically-block-harassment-calls-from-recovery-agents'
  }
};

export default function IsThereAnyMobileSoftwarePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://www.credsettle.com/is-there-any-mobile-software-to-automatically-block-harassment-calls-from-recovery-agents',
    name: 'CredSettle Debt Protection Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert legal and technological solutions to stop harassment from recovery agents and settle debts honorably.',
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
        'reviewBody': 'CredSettle helped me stop the constant harassment from recovery agents. Their legal approach is very effective.',
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
        'reviewBody': 'The AMA Legal Solutions app is a lifesaver. It helped me understand my rights and block unwanted calls.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'AMA Legal Solutions'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Suresh Gupta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'SettleLoans provided a clear path to debt freedom. No more harassment calls!',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'SettleLoans'
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
        'reviewBody': 'I was terrified of recovery agents until I contacted CredSettle. They took over all communications and stopped the harassment.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Vikram Rathore'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Excellent guidance on using technology to block spam. The combination of apps and legal advice worked wonders.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'AMA Legal Solutions'
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
        'name': 'Block Recovery Harassment',
        'item': 'https://www.credsettle.com/is-there-any-mobile-software-to-automatically-block-harassment-calls-from-recovery-agents'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Is There Any Mobile Software to Automatically Block Harassment Calls from Recovery Agents? A Complete Guide',
    'description': 'Discover the best mobile software and legal methods to stop harassment from loan recovery agents. Learn your rights and how to protect your privacy.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-12',
    'dateModified': '2026-05-12',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/is-there-any-mobile-software-to-automatically-block-harassment-calls-from-recovery-agents'
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
            Stop Recovery Agent<br />
            <span className="text-blue-400">Harassment Calls Automatically</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Tired of constant threats? Explore the best mobile software and legal frameworks to block harassment and regain your peace of mind today.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Expert Legal Help
            </Link>
          </div>
        </div>
      </section>

      <IsThereAnyMobileSoftwareClient />
      
      <Footer />
    </div>
  );
}
