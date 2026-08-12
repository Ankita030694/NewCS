import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RecoveryAbuseClient from './RecoveryAbuseClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Can Recovery Agents Abuse You Legally in India? | Your Legal Rights',
  description: 'Confused if debt collectors can legally harass you? Explore the truth about recovery agent abuse in India, RBI guidelines, and how loan settlement can protect you.',
  keywords: [
    'can recovery agents abuse you legally india',
    'recovery agent harassment',
    'is loan settlement illegal in india truth',
    'RBI guidelines for recovery agents 2025',
    'how to stop recovery agent harassment',
    'debt collection laws india',
    'legal rights against recovery agents',
    'loan settlement legality india',
    'harassment by bank recovery agents',
    'consumer protection loan default'
  ],
  openGraph: {
    title: 'Can Recovery Agents Abuse You Legally in India? | Truth vs Myths',
    description: 'Learn your legal rights against recovery agent harassment and why loan settlement is a valid, legal path for debt relief in India.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/can-recovery-agents-abuse-you-legally-india'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/can-recovery-agents-abuse-you-legally-india'
  }
};

export default function RecoveryAbusePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Can Recovery Agents Abuse You Legally in India? The Definitive Guide to Your Rights',
    'description': 'A comprehensive exploration of the legality of recovery agent actions, RBI guidelines, and the truth about loan settlement in India.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2025-03-30',
    'dateModified': '2025-03-30',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/can-recovery-agents-abuse-you-legally-india'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Can recovery agents legally abuse or threaten me in India?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No, recovery agents are strictly prohibited by the Reserve Bank of India (RBI) from using any form of physical or verbal abuse, threats, or intimidation. Such actions are illegal and can be reported to the bank, the RBI Ombudsman, or the police.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is loan settlement illegal in India?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Loan settlement is a perfectly legal and recognized financial process in India, often called One-Time Settlement (OTS). It is governed by RBI-approved policies of individual banks and NBFCs.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What are the legal calling hours for recovery agents?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'According to RBI guidelines, recovery agents are only allowed to contact borrowers between 8:00 AM and 7:00 PM. Calls outside this window are considered harassment.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can recovery agents visit my office or home?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, agents can visit, but they must follow strict protocol. They must carry an authorization letter from the bank and a valid ID card. They cannot trespass, use force, or create a scene in public.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I go to jail for not paying my loan or credit card bill?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Loan default is a civil matter, not a criminal one. You cannot be arrested for simple inability to pay, unless there was fraud involved in obtaining the loan or a cheque bounce (Section 138).'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is it illegal for agents to call my friends or relatives about my debt?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, disclosing your debt to third parties like friends, neighbors, or colleagues is a violation of the borrower\'s privacy rights under RBI guidelines.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What should I do if a recovery agent uses abusive language?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Record the interaction if possible, then file a formal complaint with the bank\'s Grievance Redressal Officer. If the issue is not resolved in 30 days, escalate it to the RBI Ombudsman.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can agents seize my property without a court order?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. For secured loans, banks must follow the SARFAESI Act, which requires proper legal notices. For unsecured loans, property cannot be seized without a court-ordered attachment.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Does settling a loan ruin my credit score forever?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Settling a loan will drop your credit score, but it is not permanent. You can rebuild your score over time with responsible financial behavior and secured credit options.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can CredSettle help me stop recovery agent harassment?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, CredSettle provides legal advocacy and negotiation services to stop harassment and help you reach a legitimate, legal settlement with your creditors.'
        }
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Legal Debt Relief Services',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '1580',
      'bestRating': '5',
      'worstRating': '1'
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
        'name': 'Legal Rights Against Recovery Agents',
        'item': 'https://www.credsettle.com/can-recovery-agents-abuse-you-legally-india'
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section - Following loan-settlement design */}
      <section 
        className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Animated Orbs for Premium Look */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -ml-64 -mb-64"></div>

        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.1] font-inter">
            Can Recovery Agents Abuse<br />
            <span className="text-blue-300">You Legally in India?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-4xl mx-auto font-outfit font-light leading-relaxed">
            Uncover the ultimate truth about your legal rights, RBI guidelines for recovery agents 2025, and why loan settlement is your most powerful shield against harassment.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] transform hover:-translate-y-1 active:scale-95"
            >
              Get Legal Protection Now
            </Link>
            <a href="tel:+918800226635" className="flex items-center gap-3 text-white font-bold text-xl hover:text-blue-200 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.47 5.47l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
              +91-8800226635
            </a>
          </div>
        </div>
      </section>

      <RecoveryAbuseClient />
      
      <Footer />
    </div>
  );
}
