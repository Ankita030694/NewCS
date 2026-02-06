import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BankCallingReferencesClient from './BankCallingReferencesClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bank Calling References & Family Members? Stop Harassment Today | CredSettle',
  description: 'Are banks calling your family or references? Learn your rights under RBI Rules 2025. Stop recovery agent harassment and protect your privacy legally. Get expert debt settlement help.',
  keywords: [
    'bank calling references',
    'bank calling family members',
    'recovery agent harassment',
    'RBI rules 2025 recovery agent',
    'loan settlement rights',
    'stop recovery agent calls',
    'debt recovery harassment india',
    'rbi guidelines for recovery 2025',
    'legal notice for bank harassment',
    'credit card recovery agency harassment',
    'stop calls to references',
    'rbi ombudsman complaint recovery agent'
  ],
  alternates: {
    canonical: 'https://credsettle.com/bank-calling-references-and-family-members'
  }
};

export default function BankCallingReferencesPage() {
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
        'name': 'Loan Settlement',
        'item': 'https://credsettle.com/loan-settlement'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Bank Calling References and Family Members',
        'item': 'https://credsettle.com/bank-calling-references-and-family-members'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Bank Calling References and Family Members: Stop Harassment Legally',
    'description': 'A comprehensive guide to stopping banks and recovery agents from calling your family members and references. Understand RBI guidelines and your legal rights.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle Team'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2025-02-06',
    'dateModified': '2025-02-06',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/bank-calling-references-and-family-members'
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can a bank call my family members if I default on a loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, according to RBI guidelines 2025, banks are strictly prohibited from contacting family members or friends unless they are co-borrowers or guarantors."
        }
      },
      {
        "@type": "Question",
        "name": "What is the 30-day pre-recovery notice requirement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As per the 2025 RBI directive, banks must provide a clear 30-day notice before initiating aggressive recovery or legal proceedings, allowing the borrower time to mediate or settle."
        }
      },
      {
        "@type": "Question",
        "name": "Can digital lending apps scrape my contact list?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, RBI digital lending guidelines 2024-2025 explicitly prohibit apps from accessing contacts, photos, or media for recovery purposes. This is also a violation under Section 66E of the IT Act."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do if a recovery agent visits my office?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Remain calm, record the interaction, and demand their ID. Inform them that workplace visits without prior consent for recovery are a breach of privacy. Report this to the bank's Nodal Officer."
        }
      },
      {
        "@type": "Question",
        "name": "Can I sue a bank for harassment of my family?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can file a case in the Consumer Forum for 'deficiency in service' or a criminal case for intimidation under IPC Section 503/506."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Sachet portal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Sachet portal is an RBI initiative where you can report illegal, non-registered, or fraudulent lending apps and recovery practices."
        }
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "CredSettle Anti-Harassment Service",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "12540"
    },
    "review": [
      {
        "@type": "Review",
        "author": {"@type": "Person", "name": "Rahul Sharma"},
        "datePublished": "2025-01-15",
        "reviewBody": "CredSettle stopped HDFC recovery agents from calling my old parents within 48 hours. Life saver!",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        }
      },
      {
        "@type": "Review",
        "author": {"@type": "Person", "name": "Priya Verma"},
        "datePublished": "2024-12-20",
        "reviewBody": "I was suicidal due to app loan harassment. CredSettle's legal team handled everything and got a 50% settlement.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        }
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* Hero Section */}
      <section 
        className="relative text-white pt-32 pb-20 px-4 md:px-8"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #0F172A 0%, #1E293B 100%)',
          minHeight: '40vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Bank Calling Your References?<br />
            <span className="text-blue-400">Stop Illegal Harassment Legally</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Protect your privacy and family dignity. Understand your legal rights against predatory recovery agents and settle your debts with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Stop The Calls Now
            </Link>
          </div>
        </div>
      </section>

      <BankCallingReferencesClient />
      
      <Footer />
    </div>
  );
}
