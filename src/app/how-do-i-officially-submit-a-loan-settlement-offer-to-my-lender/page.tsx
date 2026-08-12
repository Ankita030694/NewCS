import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubmitOfferClient from './SubmitOfferClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Officially Submit a Loan Settlement Offer to Your Lender | Expert Guide',
  description: 'Learn the official process to submit a loan settlement offer to your lender. Step-by-step guide on drafting a settlement letter, legal requirements, and negotiation tips.',
  keywords: [
    'how to submit loan settlement offer',
    'loan settlement offer letter format',
    'full and final settlement offer to bank',
    'how to negotiate loan settlement with bank',
    'official loan settlement process india',
    'loan settlement hardship letter',
    'debt settlement proposal template',
    'submitting settlement offer to lender',
    'loan settlement agreement india',
    'credsettle loan settlement'
  ],
  openGraph: {
    title: 'How to Officially Submit a Loan Settlement Offer to Your Lender',
    description: 'Master the formal process of debt settlement. Professional guidance on submitting offers, legal documentation, and securing your financial future.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/how-do-i-officially-submit-a-loan-settlement-offer-to-my-lender'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/how-do-i-officially-submit-a-loan-settlement-offer-to-my-lender'
  }
};

export default function SubmitOfferPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://www.credsettle.com/how-do-i-officially-submit-a-loan-settlement-offer-to-my-lender',
    name: 'CredSettle Debt Resolution Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Professional assistance in submitting and negotiating loan settlement offers with banks and NBFCs across India.',
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
          'name': 'Amit Verma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'The guidance on submitting a formal offer was invaluable. CredSettle helped me draft the perfect letter, and my bank accepted the 40% settlement within weeks.',
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
        'reviewBody': 'I was terrified of the bank recovery agents. Ama Legal Solutions and CredSettle took over the communication, submitted a formal offer, and now I am debt-free.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Suresh Menon'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Highly recommend SettleLoans for their professional approach. They ensured all my documentation was in order before submitting the offer.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'SettleLoans'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Deepak Joshi'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'The step-by-step process provided here is the best I have found. Using CredSettle was the best decision for my credit card debt.',
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
        'reviewBody': 'Excellent service. They know exactly how to handle different lenders. The formal offer submission process was seamless.',
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
        'name': 'How to Officially Submit a Loan Settlement Offer',
        'item': 'https://www.credsettle.com/how-do-i-officially-submit-a-loan-settlement-offer-to-my-lender'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Comprehensive Guide: How to Officially Submit a Loan Settlement Offer to Your Lender',
    'description': 'A detailed walkthrough of the official process to propose a debt settlement, including letter drafting, documentation, and negotiation strategies for Indian borrowers.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-10',
    'dateModified': '2025-05-11',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/how-do-i-officially-submit-a-loan-settlement-offer-to-my-lender'
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #0c2756 0%, #001235 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            How to Officially Submit a <br />
            <span className="text-blue-400">Loan Settlement Offer</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Take control of your debt with a formal submission process. Expert strategies to ensure your lender accepts your settlement proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Professional Settlement Help
            </Link>
          </div>
        </div>
      </section>

      <SubmitOfferClient />
      
      <Footer />
    </div>
  );
}
