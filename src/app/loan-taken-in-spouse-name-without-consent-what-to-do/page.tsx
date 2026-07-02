import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SpouseLoanConsentClient from './SpouseLoanConsentClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Spouse Took Loan Without Consent | Stop Harassment | CredSettle',
  description: 'Discover legal steps to take if your husband or wife took a loan in your name using your Aadhaar or PAN card without consent. Stop bank harassment today.',
  keywords: [
    'husband took loan in my name without telling me',
    'wife took credit card loan without my knowledge India',
    'spouse took loan using my Aadhaar PAN without consent',
    'loan fraud by husband in wife name India',
    'domestic financial abuse loan taken without consent settlement',
    'file FIR for loan fraud by spouse',
    'stop bank recovery agent harassment',
    'clear CIBIL after spouse identity theft'
  ],
  openGraph: {
    title: 'Spouse Took Loan Without Consent | Legal Guide | CredSettle',
    description: 'Expert legal guide on handling spousal identity theft for loans. Stop the bank harassment and protect your CIBIL score.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/loan-taken-in-spouse-name-without-consent-what-to-do'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spouse Took Loan Without Consent | CredSettle',
    description: 'Professional guide to resolving loan fraud by a spouse in India.'
  },
  alternates: {
    canonical: 'https://credsettle.com/loan-taken-in-spouse-name-without-consent-what-to-do'
  }
};

export default function LoanTakenInSpouseNamePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Spouse Took Loan in My Name Without Consent: Legal Steps & Settlement Guide',
    'description': 'A comprehensive legal guide for victims of spousal financial abuse where a husband or wife has taken a loan using the partner\'s documents without consent in India.',
    'author': {
      '@type': 'Person',
      'name': 'Adv. Anuj Bhiya',
      'image': 'https://credsettle.com/anujbhiya.png',
      'url': 'https://credsettle.com/about'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2026-07-02',
    'dateModified': '2026-07-02',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/loan-taken-in-spouse-name-without-consent-what-to-do'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Is it a crime if my husband took a loan on my PAN card without my consent?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, taking a loan using someone else\'s PAN card or Aadhaar card without their explicit consent constitutes forgery and cheating, which are criminal offenses under Sections 420 and 468 of the Indian Penal Code.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Am I legally required to repay the loan my spouse took secretly?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Legally, you are not obligated to repay a loan that was obtained through identity theft and forgery. However, until you prove the fraud by filing an FIR and notifying the bank, the bank will hold you responsible.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How can I stop recovery agents from calling me for my spouse\'s loan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'You must send a formal legal notice to the bank enclosing a copy of the FIR filed against the fraudulent transaction. This establishes that the loan is under criminal dispute, compelling the bank to halt recovery actions against you.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Will my CIBIL score be ruined because of my spouse\'s fraud?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Initially, the default will negatively impact your CIBIL score. However, once you prove the loan was fraudulent and the bank acknowledges it, you can file a dispute with CIBIL to have the fraudulent account removed from your credit history.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I settle the loan without filing a police complaint against my spouse?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, you can choose a civil settlement path if you wish to avoid criminal prosecution of your spouse. This involves negotiating with the bank for a full and final settlement, but you will have to bear the financial burden of the settlement amount.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What documents do I need to prove I did not take the loan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'You need to request the original loan application and KYC documents from the bank. If the signature is forged, or the OTP was sent to a phone number not belonging to you, these serve as primary evidence of identity theft.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How can CredSettle assist in spousal loan fraud cases?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'CredSettle provides expert legal advocacy to shield you from recovery agent harassment, draft legal notices to the bank, and guide you through the process of either filing a criminal complaint or negotiating a civil settlement to protect your financial dignity.'
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
        'name': 'Spouse Took Loan Without Consent',
        'item': 'https://credsettle.com/loan-taken-in-spouse-name-without-consent-what-to-do'
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Spousal Loan Fraud Resolution Service',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'reviewCount': '312',
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

      <main>
        <article>
          {/* Hero Section */}
          <header 
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
                Spouse Took Loan in My Name Without Consent:<br />
                <span className="text-blue-300">Legal Steps & Settlement Guide</span>
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                Victim of spousal identity theft? Learn the legal steps to stop bank harassment, file an FIR, and protect your credit score from unauthorized debt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Legal Protection
                </Link>
              </div>
            </div>
          </header>

          <SpouseLoanConsentClient />
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
