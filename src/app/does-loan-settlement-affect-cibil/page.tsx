import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanSettlementCIBILClient from './LoanSettlementCIBILClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Does Loan Settlement Affect CIBIL? Impact & Hidden Rules 2025',
  description: 'Understand how loan settlement affects CIBIL score. Learn why your score drops, the 7-year reporting rule, and how to recover your credit rating after settling debt.',
  keywords: [
    'does loan settlement affect cibil',
    'impact of loan settlement on credit score',
    'cibil score after loan settlement',
    'loan settled vs closed cibil',
    'can I get a loan after settlement',
    'how to remove settled status from cibil',
    'settlement impact on home loan eligibility',
    'rbi rules for loan settlement cibil reporting',
    'cibil score drop after settlement',
    'fixing credit after loan settlement'
  ],
  openGraph: {
    title: 'Does Loan Settlement Affect CIBIL? The Complete Guide 2025',
    description: 'Expert analysis on how settling a loan impacts your CIBIL score and future loan eligibility. Know the facts before you settle.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/does-loan-settlement-affect-cibil'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Impact of Loan Settlement on CIBIL Score | 2025 Guide',
    description: 'Learn why loan settlement can drop your CIBIL score by 100+ points and how to protect your credit future.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/does-loan-settlement-affect-cibil'
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

export default function LoanSettlementCIBILPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/does-loan-settlement-affect-cibil',
    name: 'CredSettle Debt Relief Services',
    legalName: 'CredSettle Legal Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Professional legal consultation and debt relief services to help borrowers settle loans while understanding the impact on CIBIL scores.',
    telephone: '+91-8800226635',
    email: 'support@credsettle.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '16200',
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
        'name': 'Does Loan Settlement Affect CIBIL?',
        'item': 'https://www.credsettle.com/does-loan-settlement-affect-cibil'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Does Loan Settlement Affect CIBIL? The Definitive Analysis (2025 Update)',
    'description': 'A massive guide on the long term impact of loan settlement on your credit health, CIBIL reporting rules, and strategies for credit recovery.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle Expert Panel'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2025-02-24',
    'dateModified': '2025-02-24',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/does-loan-settlement-affect-cibil'
    }
  };

  const serviceReviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'CIBIL Impact Analysis & Debt Settlement',
    'description': 'Professional guidance on settling debts with transparency regarding CIBIL score impacts and long term credit health.',
    'provider': {
      '@type': 'FinancialService',
      'name': 'CredSettle',
      'url': 'https://www.credsettle.com'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '16200',
      'bestRating': '5',
      'worstRating': '1'
    },
    'review': [
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Anil Deshmukh' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'CredSettle explained exactly how my settlement would appear on CIBIL. No false promises, just honest legal advice and a great settlement deal.'
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Priya Sharma' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'I was worried about my future credit score. The team helped me settle and also gave me an 18 month plan to start rebuilding my CIBIL.'
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Karthik Rao' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'Most transparent debt relief company. They clearly stated the pros and cons of settlement regarding CIBIL reporting.'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Does loan settlement affect CIBIL score negatively?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. Loan settlement will cause an immediate drop in your CIBIL score, usually between 75 to 150 points. It also results in a "Settled" status on your report, which is viewed negatively by future lenders.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How long does a settled status stay in CIBIL?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'A settled status remains on your CIBIL report for a period of seven years from the date of settlement. During this time, it informs lenders that you did not pay the full outstanding balance.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the difference between Settled and Closed in CIBIL?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '"Closed" means the loan was paid in full as per the original agreement. "Settled" means the lender agreed to accept a partial payment and waived the rest due to your inability to pay.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I get a home loan after a loan settlement?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'It is very difficult to get a home loan immediately after a settlement. Most major banks require at least 24 to 36 months of perfect credit behavior post-settlement before considering a new application.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is credit card settlement worse for CIBIL than a personal loan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Both are bad, but credit card settlements often involve higher interest waivers, which makes the "Settled" remark look even more calculated to future lenders.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I remove the settled remark from CIBIL earlier than 7 years?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The only way to remove it is to pay the "waiver" amount (the difference between what you paid and what you owed) to the bank. They will then update the status to "Closed".'
        }
      },
      {
        '@type': 'Question',
        'name': 'Will my CIBIL score ever increase after a settlement?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, your score can increase over time if you manage other credit responsibly, use a secured credit card, and ensure no further defaults occur.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Does RBI allow banks to settle loans?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, the RBI allows banks to enter into compromise settlements to recover dues from non performing assets or cases of genuine financial hardship.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Will settling one loan affect my other active loans?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'It will not change the terms of your other loans, but if those lenders see the "Settled" mark, they may reduce your credit limits or be less willing to offer top up loans.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the impact of a housing loan settlement?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Housing loan settlements are viewed very seriously as they involve large collateral. A settlement here might make it nearly impossible to get another secured loan for many years.'
        }
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="service-review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceReviewSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
            Does Loan Settlement Affect CIBIL?<br />
            <span className="text-blue-300">The Hard Truth & Recovery Guide 2025</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light">
            Considering a settlement? Understand the massive impact on your CIBIL score, 
            the "Settled" vs "Closed" debate, and how to protect your financial future. 
            Know the consequences before you sign the offer letter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Analyze Your CIBIL Now
            </Link>
          </div>
        </div>
      </section>

      <LoanSettlementCIBILClient />
      
      <Footer />
    </div>
  );
}
