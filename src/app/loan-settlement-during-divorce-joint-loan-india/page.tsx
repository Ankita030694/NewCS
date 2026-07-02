import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanSettlementDivorceClient from './LoanSettlementDivorceClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Joint Loan Settlement During Divorce in India | Legal Guide',
  description: 'Learn how to settle joint personal and home loans during a divorce in India. Protect your CIBIL score from a defaulting ex-spouse with our legal guide.',
  keywords: [
    'loan settlement during divorce joint loan india',
    'joint personal loan divorce india',
    'who pays joint loan after divorce',
    'remove name from joint loan after divorce',
    'cibil score divorce joint loan',
    'co-applicant liability in divorce',
    'settle joint home loan divorce',
    'severally liable joint loan',
    'legal notice to ex spouse for loan',
    'debt settlement divorce india'
  ],
  openGraph: {
    title: 'Joint Loan Settlement During Divorce | CredSettle',
    description: 'Expert legal guide on handling joint loans during a divorce in India. Stop the bank from ruining your credit score.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/loan-settlement-during-divorce-joint-loan-india'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joint Loan Settlement During Divorce | CredSettle',
    description: 'Professional guide to resolving joint loan liability and debt settlement during divorce.'
  },
  alternates: {
    canonical: 'https://credsettle.com/loan-settlement-during-divorce-joint-loan-india'
  }
};

export default function LoanSettlementDivorcePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Joint Loan Settlement During Divorce in India: The Ultimate Legal Guide',
    'description': 'A comprehensive guide on dealing with joint loan liabilities during separation, protecting your credit score, and executing a formal debt settlement in India.',
    'author': {
      '@type': 'Person',
      'name': 'Vikram Desai',
      'image': 'https://credsettle.com/default-user.svg'
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
      '@id': 'https://credsettle.com/loan-settlement-during-divorce-joint-loan-india'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Does a divorce decree automatically cancel my joint loan liability?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. A divorce decree issued by a family court does not override the commercial contract you signed with the bank. Even if the court orders your ex-spouse to pay, the bank can still legally demand the money from you if they default.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I remove my name from a joint loan if my ex-partner keeps the property?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, but only if the bank agrees to a Novation or loan restructuring. The bank will assess your ex-partner\'s independent income to ensure they can afford the EMI alone. If they do not meet the criteria, the bank will refuse to remove your name.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What happens to my CIBIL score if my ex-spouse stops paying the EMI?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Because you are "jointly and severally liable," your ex-spouse missing a payment will immediately drop your CIBIL score as well. The credit bureaus do not consider your marital status, only your contractual liability.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can we settle a joint personal loan for a lower amount during divorce?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. Through a negotiated debt settlement, you can offer the bank a lump sum amount to close the loan account permanently. This requires both parties to agree, or one party can fund the settlement to protect their own financial future.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How do we handle a joint home loan when neither of us wants the house?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The most practical solution is mutual liquidation. You jointly sell the property, use the proceeds to clear the outstanding bank loan, and split any remaining profit according to your divorce settlement agreement.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Will the bank accept a partial payment for just my "half" of the loan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. Indian banks do not recognize "halves" in a joint loan. You are fully responsible for the entire 100 percent of the outstanding amount, regardless of what arrangement you have with your former partner.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I send a legal notice to the bank to stop calling me about my ex\'s default?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'You cannot stop the bank from legally pursuing you for a legitimate debt you co-signed. However, if the recovery agents use abusive language or harassment tactics, you can use a legal notice to stop the abuse under RBI guidelines.'
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
        'name': 'Joint Loan Settlement During Divorce',
        'item': 'https://credsettle.com/loan-settlement-during-divorce-joint-loan-india'
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Joint Loan Settlement Mediation Service',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'reviewCount': '3',
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
            Joint Loan Settlement During Divorce<br />
            <span className="text-blue-300">Protect Your Financial Future</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Legal strategies to resolve joint personal and home loans in India. Stop your ex-spouse's default from destroying your CIBIL score.
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
      </section>

      <LoanSettlementDivorceClient />
      
      <Footer />
    </div>
  );
}
