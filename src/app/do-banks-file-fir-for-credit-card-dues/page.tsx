import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CreditCardFIRClient from './CreditCardFIRClient';

export const metadata: Metadata = {
  title: 'Do Banks File FIR for Credit Card Dues? | Your Legal Rights | CredSettle',
  description: 'Worried about FIR for credit card default? Learn if banks can file police cases for non-payment of credit card dues in India. Expert legal advice on recovery harassment.',
  keywords: [
    'FIR for credit card dues',
    'credit card default FIR India',
    'bank filing police case for credit card',
    'criminal case for credit card default',
    'recovery agent harassment credit card',
    'RBI guidelines for credit card recovery',
    'credit card settlement India',
    'cheque bounce credit card case',
    '420 case for credit card default',
    'legal rights against bank recovery agents'
  ],
  openGraph: {
    title: 'Do Banks File FIR for Credit Card Dues? | Legal Guide | CredSettle',
    description: 'Understand the legal reality of FIRs in credit card defaults. Your rights against recovery agent harassment and how to settle your debts.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/do-banks-file-fir-for-credit-card-dues'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FIR for Credit Card Dues: Fact vs Fiction | CredSettle',
    description: 'Are you being threatened with an FIR for credit card dues? Know your rights and the actual law in India.'
  },
  alternates: {
    canonical: 'https://credsettle.com/do-banks-file-fir-for-credit-card-dues'
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

export default function CreditCardFIRPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Do Banks File FIR for Credit Card Dues? A Complete Legal Guide',
    'description': 'A detailed explanation of the legal implications of credit card defaults in India and whether banks can initiate criminal proceedings.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2024-03-28',
    'dateModified': '2024-03-28',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/do-banks-file-fir-for-credit-card-dues'
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
        'item': 'https://credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Credit Card FIR Guide',
        'item': 'https://credsettle.com/do-banks-file-fir-for-credit-card-dues'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Can a bank file an FIR for credit card default?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No, standard credit card default is a civil matter. Banks cannot file an FIR solely for non-payment of dues. Police intervention is only possible in cases of clear fraud, forgery, or cheating with dishonest intention.'
        }
      },
      {
         '@type': 'Question',
         'name': 'Can I be arrested for not paying my credit card bill?',
         'acceptedAnswer': {
           '@type': 'Answer',
           'text': 'In a typical civil default, you cannot be arrested. Arrest is only possible if a criminal case like Section 420 (cheating) or Section 138 (cheque bounce) is proven against you in court.'
         }
      },
      {
         '@type': 'Question',
         'name': 'What is Section 420 in credit card cases?',
         'acceptedAnswer': {
           '@type': 'Answer',
           'text': 'Section 420 of the IPC (now BNS) relates to cheating and dishonestly inducing delivery of property. Banks sometimes use this to threaten borrowers, but it rarely holds in court unless the bank proves you never intended to repay the loan from the start.'
         }
      },
      {
         '@type': 'Question',
         'name': 'What should I do if a recovery agent threatens me with an FIR?',
         'acceptedAnswer': {
           '@type': 'Answer',
           'text': 'Do not panic. Ask for their official ID and authorization letter. Record the threat if possible. Inform them that credit card default is a civil matter. You can file a police complaint against them for criminal intimidation.'
         }
      },
      {
         '@type': 'Question',
         'name': 'What are RBI guidelines for credit card debt recovery?',
         'acceptedAnswer': {
           '@type': 'Answer',
           'text': 'RBI guidelines prohibit harassment, abusive language, physical intimidation, and calls at odd hours. Recovery agents must respect your privacy and cannot contact your friends or family for debt collection.'
         }
      },
      {
         '@type': 'Question',
         'name': 'Can a bank file a case under Section 138 for credit card dues?',
         'acceptedAnswer': {
           '@type': 'Answer',
           'text': 'Yes, if you provided a cheque for payment and it bounced, the bank can file a criminal case under Section 138 of the Negotiable Instruments Act. This is the most common criminal route banks take.'
         }
      },
      {
         '@type': 'Question',
         'name': 'How can credit card settlement help?',
         'acceptedAnswer': {
           '@type': 'Answer',
           'text': 'Credit card settlement allows you to pay a lump sum that is less than your total outstanding (often 40-70% less) to close the account legally and stop all recovery actions permanently.'
         }
      },
      {
         '@type': 'Question',
         'name': 'Does a credit card FIR affect my passport?',
         'acceptedAnswer': {
           '@type': 'Answer',
           'text': 'A simple default does not. However, if a formal FIR is registered and a court case is pending, it might affect your passport renewal or travel, as per the Passports Act.'
         }
      },
      {
         '@type': 'Question',
         'name': 'What is the Supreme Court stance on recovery agents?',
         'acceptedAnswer': {
           '@type': 'Answer',
           'text': 'The Supreme Court of India has condemned "strong-arm tactics" and held banks vicariously liable for the illegal actions of their recovery agents in cases like ICICI Bank vs. Shanti Devi Sharma.'
         }
      },
      {
         '@type': 'Question',
         'name': 'Can I file a case against a bank for harassment?',
         'acceptedAnswer': {
           '@type': 'Answer',
           'text': 'Yes, you can file a complaint with the bank\'s grievance officer, then the RBI Ombudsman, or approach a Consumer Court seeking compensation for mental harassment.'
         }
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Credit Card Legal Support',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '8540',
      'bestRating': '5',
      'worstRating': '1'
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
        <div className="max-w-8xl text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Do Banks File FIR for<br />
            <span className="text-blue-300">Credit Card Dues?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Stop living in fear of FIR threats. Understand your legal rights against recovery agents and learn how to resolve your credit card debt legitimately under RBI guidelines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Expert Legal Help
            </a>
          </div>
        </div>
      </section>

      <CreditCardFIRClient />
      
      <Footer />
    </div>
  );
}
