import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IciciCreditCardSettlementClient from './IciciCreditCardSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ICICI Credit Card Settlement Guide',
  description: 'Learn how to negotiate an ICICI credit card settlement effectively. Discover RBI guidelines, stop recovery agent harassment, and protect your legal rights.',
  keywords: [
    'ICICI credit card settlement',
    'ICICI bank settlement policy',
    'credit card settlement',
    'stop ICICI recovery agents',
    'one time settlement ICICI',
    'ICICI legal notice',
    'credit card debt relief'
  ],
  openGraph: {
    title: 'ICICI Credit Card Settlement Guide',
    description: 'Learn how to negotiate an ICICI credit card settlement effectively. Discover RBI guidelines, stop recovery agent harassment, and protect your legal rights.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/icici-credit-card-settlement'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICICI Credit Card Settlement Guide',
    description: 'Learn how to negotiate an ICICI credit card settlement effectively and protect your legal rights.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/icici-credit-card-settlement'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function IciciCreditCardSettlementPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'ICICI Credit Card Settlement Guide',
    'description': 'Learn how to negotiate an ICICI credit card settlement effectively. Discover RBI guidelines, stop recovery agent harassment, and protect your legal rights.',
    'author': {
      '@type': 'Person',
      'name': 'Rohan Sharma',
      'image': 'https://www.credsettle.comhttps://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2026-07-08',
    'dateModified': '2026-07-08',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/icici-credit-card-settlement'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Does ICICI Bank offer a one time settlement for credit cards?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, ICICI Bank may offer a one time settlement for credit card defaulters who can prove genuine financial hardship. The settlement amount and waiver percentage depend on the severity of the default and your negotiation approach.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can ICICI recovery agents visit my home or office?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'While recovery agents can visit, they must adhere strictly to RBI guidelines. They cannot use abusive language, threaten you, or visit during unapproved hours. You have the right to file a police complaint if they cross the line.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How does an ICICI credit card settlement affect my CIBIL score?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'When you settle, your CIBIL report will show a Status of Settled rather than Closed. This will lower your credit score and remain on your record for several years, making future borrowing difficult but not impossible.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is it better to pay the minimum due or go for a settlement?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Paying the minimum due keeps your account active but traps you in high interest debt. A settlement should only be considered if you absolutely cannot repay the full outstanding balance due to job loss or medical emergencies.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What should I do if I receive a legal notice from ICICI Bank?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Do not ignore the legal notice. Consult with a legal professional immediately to understand its validity. Most initial notices are meant to pressure you into paying, but a formal response is often required.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I negotiate the settlement amount directly with the bank?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, you can write directly to the ICICI grievance redressal officer or nodal officer outlining your financial difficulties. Professional debt resolution services can also negotiate on your behalf to secure a better waiver.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Will my ICICI bank account be frozen if I default on my credit card?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The bank may use the Right of Set Off to deduct funds from your ICICI savings or salary account to recover credit card dues, especially if authorized in the cardholder agreement.'
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
        'name': 'ICICI Credit Card Settlement Guide',
        'item': 'https://www.credsettle.com/icici-credit-card-settlement'
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'ICICI Credit Card Settlement Negotiation Service',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'reviewCount': '145',
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
            ICICI Credit Card Settlement Guide
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Stop the harassment and resolve your debt legally. A comprehensive strategy for navigating an ICICI credit card settlement.
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

      <IciciCreditCardSettlementClient />

      <Footer />
    </div>
  );
}
