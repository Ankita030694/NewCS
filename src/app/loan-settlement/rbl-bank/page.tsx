import React from 'react';
import type { Metadata } from 'next';
import RBLBankLoanSettlementClient from './RBLBankLoanSettlementClient';
import Script from 'next/script';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'RBL Bank Loan Settlement Process 2026 | OTS & Credit Card Relief',
  description: 'Expert guide on RBL Bank loan settlement and credit card default resolution. Learn about the OTS scheme, arbitration process, and how to save up to 50% on dues legally.',
  alternates: {
    canonical: 'https://credsettle.com/loan-settlement/rbl-bank',
  },
  openGraph: {
    title: 'RBL Bank Loan Settlement | Stop Harassment & Save 50%',
    description: 'Struggling with RBL Bank dues? Understand the 2026 settlement guidelines, close your loan legally, and rebuild your financial life.',
    url: 'https://credsettle.com/loan-settlement/rbl-bank',
    siteName: 'CredSettle',
    type: 'article',
  },
};

export default function RBLBankLoanSettlementPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CredSettle",
    "url": "https://credsettle.com",
    "logo": "https://credsettle.com/logo.png",
    "sameAs": [
      "https://facebook.com/credsettle",
      "https://twitter.com/credsettle",
      "https://linkedin.com/company/credsettle"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://credsettle.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Loan Settlement",
        "item": "https://credsettle.com/loan-settlement"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "RBL Bank",
        "item": "https://credsettle.com/loan-settlement/rbl-bank"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "RBL Bank Loan Settlement Process & OTS Guidelines 2026",
    "description": "Comprehensive guide on settling RBL Bank personal loans and credit cards. Learn about the One Time Settlement (OTS) scheme and legal protection.",
    "author": {
      "@type": "Organization",
      "name": "CredSettle Legal Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CredSettle",
      "logo": {
        "@type": "ImageObject",
        "url": "https://credsettle.com/logo.png"
      }
    },
    "datePublished": "2024-01-15",
    "dateModified": "2026-01-14"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I settle my RBL Bank SuperCard dues?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, RBL Bank SuperCards (co-branded with Bajaj Finserv) can be settled. The settlement process is handled by RBL Bank’s recovery department, not Bajaj Finserv."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum settlement percentage for RBL Bank?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For unsecured loans and credit cards, RBL Bank settlements typically range between 40% to 60% of the total outstanding, depending on the delinquency status (NPA stage)."
        }
      },
      {
        "@type": "Question",
        "name": "Will RBL Bank file an arbitration case against me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RBL Bank frequently uses arbitration for credit card defaults. It is crucial to respond to arbitration notices and seek legal representation to ensure a fair settlement."
        }
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "RBL Bank Loan Settlement Service",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "640"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Vikram S." },
        "datePublished": "2025-11-20",
        "reviewBody": "Settled my RBL credit card with CredSettle. They reduced my ₹4 Lakh due to ₹1.8 Lakhs. Very professional.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Anjali K." },
        "datePublished": "2025-12-05",
        "reviewBody": "Helped me handle the arbitration notice from RBL. Stopped the harassment and closed the loan.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      }
    ]
  };

  return (
    <>
      <Navbar />
      <Script id="organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <section 
        className="relative text-white pt-32 pb-20 px-4 md:px-8"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)', // Standard CredSettle Blue Theme
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            RBL Bank Loan Settlement<br />
            <span className="text-blue-300">Guide & OTS Process 2026</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Expert legal help to settle RBL Bank Credit Cards & Personal Loans. Stop RBL arbitration, waive penalties, and close your debt for less.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Check Settlement Eligibility
            </Link>
          </div>
        </div>
      </section>

      <RBLBankLoanSettlementClient />
      <Footer />
    </>
  );
}
