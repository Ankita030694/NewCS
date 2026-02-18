import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RecoveryAgentClient from './RecoveryAgentClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Handle Recovery Harassment: RBI Rules 2025',
  description: 'Learn how to handle recovery agent harassment with RBI rules 2024-2025. Know your legal rights, how to file a complaint, and stop illegal collection calls today.',
  keywords: [
    'how to handle recovery agent harassment',
    'RBI rules for recovery agents 2024',
    'RBI guidelines for recovery agents 2025',
    'legal action against recovery agents',
    'recovery agent harassment complaint',
    'loan recovery agent rules',
    'how to stop collection agent calls',
    'harassment by recovery agents india',
    'RBI ombudsman complaint recovery agent',
    'rights of loan defaulters in india'
  ],
  openGraph: {
    title: 'How to Handle Recovery Agent Harassment | Legal Rights & RBI Rules',
    description: 'Protect yourself from illegal recovery practices. Comprehensive guide on handling harassment by collection agents under RBI guidelines.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/how-to-handle-recovery-agent-harrasement'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stop Recovery Agent Harassment | RBI Guidelines & Legal Rights',
    description: 'Expert guide on dealing with debt collectors. Know the law and protect your privacy.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/how-to-handle-recovery-agent-harrasement'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
};

export default function RecoveryAgentHarassmentPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/how-to-handle-recovery-agent-harrasement',
    name: 'CredSettle Debt Relief Services',
    legalName: 'CredSettle Legal Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert legal consultation and debt relief services to stop harassment from recovery agents and settle loans legally.',
    telephone: '+91-9289707648',
    email: 'support@credsettle.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '15400',
      bestRating: '5',
      worstRating: '1'
    }
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
        'name': 'Recovery Agent Harassment Guide',
        'item': 'https://www.credsettle.com/how-to-handle-recovery-agent-harrasement'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How to Handle Recovery Agent Harassment: The Ultimate Legal Guide (2025 Update)',
    'description': 'A comprehensive guide on dealing with debt collectors, understanding RBI guidelines, and exercising your legal rights against harassment in India.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle Team'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2025-02-06',
    'dateModified': '2025-02-06',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/how-to-handle-recovery-agent-harrasement'
    }
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    'itemReviewed': {
      '@type': 'Service',
      'name': 'Recovery Agent Harassment Legal Consultation'
    },
    'author': {
      '@type': 'Person',
      'name': 'Aman Sharma'
    },
    'reviewRating': {
      '@type': 'Rating',
      'ratingValue': '5',
      'bestRating': '5'
    },
    'reviewBody': 'CredSettle helped me stop the harassing calls from recovery agents within 24 hours. Their legal understanding of RBI guidelines is unmatched.',
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle'
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* Hero Section */}
      <section 
        className="relative text-white pt-32 pb-20 px-4 md:px-8"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            How to Handle Recovery Agent Harassment<br />
            <span className="text-blue-300">Know Your Rights & RBI Rules 2025</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light">
            Are you being threatened by debt collectors? Learn the legal ways to stop harassment, 
            understand RBI guidelines, and reclaim your peace of mind. Highly optimized guidance 
            for loan defaulters in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Stop Harassment Now
            </Link>
          </div>
        </div>
      </section>

      <RecoveryAgentClient />
      
      <Footer />
    </div>
  );
}
