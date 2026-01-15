import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PiramalFinanceLoanSettlementClient from './PiramalFinanceLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Piramal Finance Loan Settlement | Stop Legal Action & Save',
  description: 'Settle your Piramal Finance loan with expert legal help. Learn about OTS policy, SARFAESI defense, and fake notice checks. Save up to 50% waiver.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/piramal-finance',
  },
  openGraph: {
    title: 'Piramal Finance Settlement Guide: Stop SARFAESI & Harassment',
    description: 'Facing legal action from Piramal Finance? Get expert help to settle your loan, stop SARFAESI, and deal with arbitration notices.',
    url: 'https://www.credsettle.com/loan-settlement/piramal-finance',
    type: 'article',
  },
};

export default function PiramalFinanceLoanSettlementPage() {
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
        "name": "Piramal Finance Settlement",
        "item": "https://www.credsettle.com/loan-settlement/piramal-finance"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Piramal Finance Loan Settlement Process: 2026 Guide",
    "description": "Complete guide on Piramal Finance OTS policy, SARFAESI defense, and grievance redressal for distressed borrowers.",
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
      "@id": "https://www.credsettle.com/loan-settlement/piramal-finance"
    }
  };

  const faqList = [
    {
      question: "Can I settle my Piramal Finance Personal Loan?",
      answer: "Yes, Piramal Finance offers One Time Settlement (OTS) for personal loans that are classified as NPA. You must demonstrate genuine financial hardship."
    },
    {
      question: "Will Piramal Finance take legal action if I stop paying?",
      answer: "Yes. For unsecured loans, they may initiate Arbitration. For secured loans, they can invoke the SARFAESI Act to seize property."
    },
    {
      question: "Who is the Nodal Officer for Piramal Finance?",
      answer: "Ms. Hetal Parihar is the Principal Nodal Officer (nodal.officer@piramal.com). Escalation helps if local branches are unhelpful."
    },
    {
      question: "What is the typical waiver percentage?",
      answer: "Waivers typically range between 30% to 50% of the total outstanding, depending on the case's merit."
    },
    {
      question: "How to identify a fake Piramal legal notice?",
      answer: "Fake notices often come from Gmail/Yahoo addresses or personal WhatsApp numbers and threaten immediate police arrest."
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
    "name": "Piramal Finance Settlement Services by CredSettle",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "112"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Rakesh K." },
        "datePublished": "2025-11-05",
        "reviewBody": "I defaulted on a 5 Lakh loan. CredSettle stepped in, stopped the visits, and settled it for 2.8 Lakhs.",
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
            Piramal Finance Loan Settlement<br />
            <span className="text-blue-300">Resolve Debt & Stop Legal Action</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Expert legal protection against SARFAESI and Arbitration notices. Settle your Piramal Finance loan with up to 50% waiver.
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
      <PiramalFinanceLoanSettlementClient />
      
      <Footer />
    </div>
  );
}
