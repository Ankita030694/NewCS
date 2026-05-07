import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanRecoveryClient from './LoanRecoveryClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Loan Recovery Agent Near Me | Protection from Harassment & Legal Help',
  description: 'Searching for a loan recovery agent near me? Learn about your rights against recovery agent harassment, RBI guidelines, and how to settle your debt legally.',
  keywords: [
    'loan recovery agent near me',
    'bank recovery agent harassment',
    'RBI guidelines for recovery agents',
    'legal notice for loan recovery',
    'debt collection agency near me',
    'stop recovery agent calls',
    'loan settlement process india',
    'harassment by recovery agents police complaint',
    'rights of loan defaulters in india',
    'best debt relief services'
  ],
  openGraph: {
    title: 'Loan Recovery Agent Near Me | Protection & Debt Relief',
    description: 'Find legal protection against loan recovery agents. Understand RBI rules and get expert help to settle your loans without harassment.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/loan-recovery-agent-near-me'
  },
  alternates: {
    canonical: 'https://credsettle.com/loan-recovery-agent-near-me'
  }
};

export default function LoanRecoveryPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://credsettle.com/loan-recovery-agent-near-me',
    name: 'CredSettle Loan Recovery Legal Assistance',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Expert legal assistance for borrowers facing harassment from loan recovery agents in India. We help in debt settlement and legal protection.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
      addressCountry: 'IN'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1250',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Amit Sharma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle helped me stop the constant calls from recovery agents. Their legal team is very knowledgeable about RBI guidelines.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Priya Verma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'I was terrified of recovery agents visiting my home. CredSettle intervened and helped me settle my personal loan fairly.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Sanjay Gupta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Highly professional service. They explained my rights as a borrower and handled the bank negotiations perfectly.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Megha Iyer'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'If you are facing harassment, don\'t wait. CredSettle is the best for handling tricky recovery situations.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Rahul Nair'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Professional and empathetic. They saved me from a very stressful situation with multiple credit card recovery agents.',
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
        'item': 'https://credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Loan Recovery Agent Near Me',
        'item': 'https://credsettle.com/loan-recovery-agent-near-me'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Loan Recovery Agent Near Me: Your Comprehensive Guide to Legal Rights and Harassment Protection',
    'description': 'Understand the role of loan recovery agents, your legal rights under RBI guidelines, and how to handle harassment effectively in India.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-07',
    'dateModified': '2026-05-07',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/loan-recovery-agent-near-me'
    },
    'image': 'https://credsettle.com/loan-recovery-guide.jpg'
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can a loan recovery agent visit my house at any time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, according to RBI guidelines, recovery agents can only visit between 8:00 AM and 7:00 PM. Any visit outside these hours is a violation of rules."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do if a recovery agent is harassing me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should immediately file a complaint with the bank's grievance redressal cell. If not resolved in 30 days, escalate it to the RBI Ombudsman. You can also file a police complaint if they use physical force or abusive language."
        }
      },
      {
        "@type": "Question",
        "name": "Can recovery agents call my friends or relatives?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, recovery agents are strictly prohibited from calling your friends, family, or references for the purpose of debt collection. They can only contact you directly."
        }
      },
      {
        "@type": "Question",
        "name": "Do I have the right to ask for the recovery agent's ID?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you have every right to demand an identity card and an authorization letter from the bank. If they fail to provide these, do not engage with them."
        }
      },
      {
        "@type": "Question",
        "name": "Can a bank file a criminal case for loan default?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Loan default is generally a civil matter. However, if there is evidence of fraud, cheating, or if a cheque bounces (Section 138 NI Act), it can become a criminal case."
        }
      },
      {
        "@type": "Question",
        "name": "Is it possible to settle a loan without a recovery agent?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can directly approach the bank or hire a debt settlement company like CredSettle to negotiate a 'One-Time Settlement' (OTS) on your behalf."
        }
      },
      {
        "@type": "Question",
        "name": "What are the new RBI guidelines for recovery agents 2024?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The new guidelines emphasize borrower privacy, strict calling hours, no harassment, and clear disclosure of agent identities. Banks are held responsible for the actions of their agents."
        }
      },
      {
        "@type": "Question",
        "name": "Can I stop recovery agents from calling me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While you cannot stop legitimate calls for recovery, you can stop harassment. If you are in a settlement process, your consultant can often manage the communication for you."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I don't pay the recovery agent?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you don't pay, the bank may proceed with legal actions like filing a civil suit, sending a legal notice, or reporting to credit bureaus (affecting your CIBIL score)."
        }
      },
      {
        "@type": "Question",
        "name": "How does CredSettle help with recovery agents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CredSettle provides legal protection by ensuring agents follow RBI rules. We handle negotiations for settlement, reducing the burden of calls and visits."
        }
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
            Facing Harassment from a<br />
            <span className="text-blue-400">Loan Recovery Agent?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Searching for a loan recovery agent near me to resolve your dues? Understand your rights, stop harassment, and settle your debt legally with expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Legal Protection Now
            </Link>
          </div>
        </div>
      </section>

      <LoanRecoveryClient />
      
      <Footer />
    </div>
  );
}
