import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StashfinLoanSettlementClient from './StashfinLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Stashfin Loan Settlement | Stop Harassment & Fake Notices',
  description: 'Settle your Stashfin (Akara Capital) loan legally. Identify fake police/court notices on WhatsApp. Stop harassment and save 50% on dues.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/stashfin',
  },
  openGraph: {
    title: 'Stashfin Settlement Guide: Fake Notices & Akara Capital OTS',
    description: 'Received a "Court Summons" on WhatsApp from Stashfin? It might be fake. Learn how to stop harassment and settle your loan legally.',
    url: 'https://www.credsettle.com/loan-settlement/stashfin',
    type: 'article',
  },
};

export default function StashfinLoanSettlementPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CredSettle",
    "url": "https://www.credsettle.com",
    "logo": "https://www.credsettle.com/credsettle-logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8800226635",
      "contactType": "customer service"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.credsettle.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Loan Settlement",
        "item": "https://www.credsettle.com/loan-settlement"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Stashfin (Akara) Settlement",
        "item": "https://www.credsettle.com/loan-settlement/stashfin"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Stashfin Loan Settlement: Stop Fake Legal Notices & Harassment",
    "description": "Guide to settling Stashfin loans, handling Akara Capital recovery agents, and identifying fake legal notices.",
    "author": {
      "@type": "Organization",
      "name": "CredSettle Legal Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CredSettle",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.credsettle.com/credsettle-logo.svg"
      }
    },
    "datePublished": "2026-01-15",
    "dateModified": "2026-01-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.credsettle.com/loan-settlement/stashfin"
    }
  };

  const faqList = [
    {
      question: "Can I settle my Stashfin loan?",
      answer: "Yes, Stashfin (Akara Capital) allows settlement for defaulted loans. You typically need to be in default for over 90 days."
    },
    {
      question: "Will Stashfin send police to my house?",
      answer: "No. Loan default is a civil matter. Treats of police arrest for EMI default are fake and illegal."
    },
    {
      question: "Who is the Nodal Officer for Stashfin?",
      answer: "Mr. Amarjeet Singh (cofficer@akaracap.com / 0124-6981223)."
    },
    {
      question: "How to stop Stashfin calling my contact list?",
      answer: "Calling your contacts is a violation of RBI norms. File a complaint with the Nodal Officer and the RBI Ombudsman immediately."
    },
    {
      question: "How to identify fake Stashfin legal notice?",
      answer: "Fake notices often come via WhatsApp, use threatening language ('Arrest Warrant'), and ask for payment to personal UPI IDs."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Stashfin Settlement Services by CredSettle",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "134"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sneha P." },
        "datePublished": "2025-10-20",
        "reviewBody": "Stashfin agents were calling my office colleagues. CredSettle legal team sent a notice, and the calls stopped.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
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
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Stashfin Loan Settlement<br />
            <span className="text-blue-300">Stop Harassment & Fake Notices</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Is Stashfin harassing your contact list or sending fake police threats? Get expert legal protection and settle for up to 50% less.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Settlement
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <StashfinLoanSettlementClient />
      
      <Footer />
    </div>
  );
}
