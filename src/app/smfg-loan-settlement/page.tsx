import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmfgLoanSettlementClient from './SmfgLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SMFG Loan Settlement Guide',
  description: 'Learn how to negotiate a structured One-Time Settlement (OTS) for an SMFG personal loan. Stop recovery agent harassment and resolve your debt safely.',
  keywords: [
    'SMFG loan settlement',
    'Fullerton India loan settlement',
    'SMFG personal loan default',
    'stop SMFG recovery agents',
    'one time settlement SMFG',
    'SMFG legal notice',
    'NBFC loan settlement'
  ],
  openGraph: {
    title: 'SMFG Loan Settlement Guide',
    description: 'Learn how to negotiate a structured One-Time Settlement (OTS) for an SMFG personal loan. Stop recovery agent harassment and resolve your debt safely.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/smfg-loan-settlement'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SMFG Loan Settlement Guide',
    description: 'Learn how to negotiate a structured One-Time Settlement (OTS) for an SMFG personal loan. Stop recovery agent harassment and resolve your debt safely.'
  },
  alternates: {
    canonical: 'https://credsettle.com/smfg-loan-settlement'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function SmfgLoanSettlementPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'SMFG Loan Settlement Guide',
    'description': 'Learn how to negotiate a structured One-Time Settlement (OTS) for an SMFG personal loan. Stop recovery agent harassment and resolve your debt safely.',
    'author': {
      '@type': 'Person',
      'name': 'Anuj Bhiya',
      'image': 'https://credsettle.com/anujbhiya.png'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2026-07-08',
    'dateModified': '2026-07-08',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/smfg-loan-settlement'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Does SMFG India Credit provide one time settlement options?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, SMFG India Credit often provides one time settlement options for personal loans when the borrower can demonstrate severe financial insolvency, typically after the loan becomes a non performing asset.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How long does the SMFG settlement process take?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The negotiation process can take anywhere from three weeks to three months. It requires patience and persistent communication to reach a favorable waiver amount.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can SMFG recovery agents visit my workplace?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Recovery agents must follow RBI guidelines. They should not visit your workplace to humiliate you. If they cause a scene, it is a direct violation of ethical recovery practices.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What happens if I ignore an SMFG legal notice?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Ignoring a legal notice can lead to further legal escalation, including arbitration proceedings or civil court summons. It is always better to respond formally through a legal representative.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Will my CIBIL score recover after an SMFG settlement?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Your CIBIL score will initially drop because the account will be marked as Settled. However, over the next few years, you can slowly rebuild it by maintaining good financial habits.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I settle an SMFG loan without paying the full penalty?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. Penalties and late fees are the first components that are typically waived during a settlement negotiation. Focus your arguments on your inability to pay these inflated charges.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do I need a lawyer to negotiate with SMFG?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'While you can negotiate on your own, having a legal expert or a professional debt settlement service can protect you from harassment and ensure the final agreement is legally binding.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is it safe to pay a settlement agent in cash?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. Never pay cash to a recovery agent or settlement agent. All payments must be made directly to the official SMFG bank account via traceable methods like NEFT or RTGS.'
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
        'name': 'SMFG Loan Settlement Guide',
        'item': 'https://credsettle.com/smfg-loan-settlement'
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'SMFG Loan Settlement Negotiation Service',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '112',
      'bestRating': '5',
      'worstRating': '1'
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
            SMFG Loan Settlement Guide
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Stop the harassment and resolve your NBFC debt legally. A structured strategy for navigating an SMFG personal loan settlement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Settlement Assistance
            </Link>
          </div>
        </div>
      </section>

      <SmfgLoanSettlementClient />

      <Footer />
    </div>
  );
}
