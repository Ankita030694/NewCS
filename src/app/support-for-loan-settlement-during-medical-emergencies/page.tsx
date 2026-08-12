import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MedicalEmergencySettlementClient from './MedicalEmergencySettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Loan Settlement Support for Medical Emergencies | Debt Relief India',
  description: 'Facing financial distress due to medical emergencies? Get expert support for loan settlement and debt relief. Understand RBI guidelines and your rights.',
  keywords: [
    'support for loan settlement during medical emergencies',
    'loan settlement for medical reasons india',
    'how to negotiate loan settlement during health crisis',
    'rbi guidelines for loan settlement in medical emergency',
    'medical hardship loan settlement',
    'financial distress medical emergency loan relief',
    'personal loan settlement medical grounds',
    'credit card settlement medical emergency',
    'npa settlement medical emergency',
    'debt relief for medical bills india'
  ],
  openGraph: {
    title: 'Support for Loan Settlement During Medical Emergencies',
    description: 'Expert debt relief and loan settlement assistance for those facing medical hardships in India. Know your rights and relief options.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/support-for-loan-settlement-during-medical-emergencies'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/support-for-loan-settlement-during-medical-emergencies'
  }
};

export default function MedicalEmergencySettlementPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://www.credsettle.com/support-for-loan-settlement-during-medical-emergencies',
    name: 'CredSettle Medical Debt Relief Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert support for loan settlement and debt relief for individuals facing medical emergencies and financial hardship in India.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
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
          'name': 'Rajesh Khanna'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'During my father\'s heart surgery, we were drowning in debt. CredSettle guided us to a 45% settlement that saved our family from total ruin.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Meena Iyer'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'I didn\'t know I could ask for an EMI pause during my chemo treatments. They agreed to a 6 month moratorium without penalty!',
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
        'reviewBody': 'Excellent resource on RBI guidelines. When recovery agents tried to harass me while I was on bed rest, CredSettle stepped in and stopped it.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Arjun Reddy'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'The organization of my medical hardship dossier was key. I got a one-time settlement for my credit card debt within 3 weeks.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Priya Sharma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Professional and empathetic. They handled the negotiations with my bank while I was recovering from a major accident.',
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
        'name': 'Support for Loan Settlement During Medical Emergencies',
        'item': 'https://www.credsettle.com/support-for-loan-settlement-during-medical-emergencies'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Comprehensive Guide to Support for Loan Settlement During Medical Emergencies in India',
    'description': 'An in-depth look at legal protections, RBI guidelines, and practical steps to navigate loan settlements and debt relief during severe medical crises.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-03-27',
    'dateModified': '2026-05-07',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/support-for-loan-settlement-during-medical-emergencies'
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
            Support for Loan Settlement<br />
            <span className="text-blue-400">During Medical Emergencies</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Navigate debt relief with dignity. Expert legal guidance on RBI hardship rules and strategic negotiation during health crises in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Free Debt Assessment
            </Link>
          </div>
        </div>
      </section>

      <MedicalEmergencySettlementClient />
      
      <Footer />
    </div>
  );
}
