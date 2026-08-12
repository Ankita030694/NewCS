import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NriLoanDefaultClient from './NriLoanDefaultClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NRI Loan Default in India: Settle From Abroad',
  description: 'Defaulted on a loan in India while residing abroad? Learn how NRIs can stop bank harassment and settle debt remotely using a Power of Attorney.',
  keywords: [
    'NRI loan default India what happens',
    'I am in USA my Indian loan defaulted',
    'can bank seize NRI property for loan default',
    'loan settlement from abroad India power of attorney',
    'NRI personal loan default India settlement options',
    'NRI loan settlement',
    'FEMA guidelines loan default'
  ],
  openGraph: {
    title: 'NRI Loan Default in India: Settle From Abroad',
    description: 'Defaulted on a loan in India while residing abroad? Learn how NRIs can stop bank harassment and settle debt remotely using a Power of Attorney.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/nri-loan-default-india-settlement-from-abroad'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NRI Loan Default in India: Settle From Abroad',
    description: 'Learn how NRIs can stop bank harassment and settle debt remotely using a Power of Attorney.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/nri-loan-default-india-settlement-from-abroad'
  }
};

export default function NriLoanDefaultPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'NRI Loan Default in India: Settle From Abroad',
    'description': 'Defaulted on a loan in India while residing abroad? Learn how NRIs can stop bank harassment and settle debt remotely using a Power of Attorney.',
    'author': {
      '@type': 'Person',
      'name': 'Vikram Desai',
      'image': 'https://www.credsettle.com/default-user.svg'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': new Date().toISOString().split('T')[0],
    'dateModified': new Date().toISOString().split('T')[0],
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/nri-loan-default-india-settlement-from-abroad'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Can a bank in India seize my ancestral property for an unsecured personal loan default?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. For an unsecured personal loan, banks cannot automatically seize ancestral property. They must first file a civil suit and obtain a court decree, which is a lengthy process.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Will my Indian passport be confiscated if I default on a loan in India?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Defaulting on a civil loan does not lead to immediate passport confiscation. Passport impounding usually occurs only in cases involving criminal fraud or when you are declared an economic offender.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I settle my Indian loan from the USA without traveling back?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. You can execute a specific Power of Attorney (PoA) authorizing a trusted representative or legal advocate in India to negotiate and settle the loan on your behalf without you having to travel.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How do I legally stop recovery agents from harassing my parents in India?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'You can send a formal cease and desist notice through a legal advocate citing RBI guidelines. Third-party harassment is strictly prohibited, and banks can be penalized for violating these norms.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How does a Power of Attorney (PoA) work for NRIs settling debt?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'A PoA must be drafted, signed in front of a notary in your resident country, and then apostilled or attested by the Indian Embassy. It is then sent to India for adjudication and registration.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What happens if my NRO/NRE account is frozen by the bank?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Banks may exercise the right of set-off to recover dues from accounts held in the same bank. It is advisable to maintain operating accounts in a separate bank to prevent unauthorized debiting.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Does FEMA restrict how I can remit money for loan settlement?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Under FEMA guidelines, you can freely remit funds into your NRO account from abroad to settle domestic liabilities. The settlement payment must be made in Indian Rupees.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Will a loan settlement in India affect my credit score abroad?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. Credit reporting systems are localized. An Indian loan default or settlement affects your CIBIL score in India but does not impact your FICO score in the US or credit files in other countries.'
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
        'name': 'NRI Loan Default in India: Settle From Abroad',
        'item': 'https://www.credsettle.com/nri-loan-default-india-settlement-from-abroad'
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'NRI Cross-Border Loan Settlement Service',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'reviewCount': '412',
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            NRI Loan Default in India: Settle From Abroad<br />
            <span className="text-blue-300">Stop Harassment & Protect Assets</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Defaulted on a loan in India while living overseas? Learn how to legally halt recovery agent harassment and settle your debt remotely using a Power of Attorney.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Remote Legal Assistance
            </Link>
          </div>
        </div>
      </section>

      <main>
        <NriLoanDefaultClient />
      </main>
      
      <Footer />
    </div>
  );
}
