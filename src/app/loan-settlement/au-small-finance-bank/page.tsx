import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AUSmallFinanceBankLoanSettlementClient from './AUSmallFinanceBankLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AU Bank Loan Settlement | Fake Notice Check',
  description: 'Received a legal notice from AU Small Finance Bank? Check if it is FAKE. Download settlement letter format, stop harassment, and save 50% on dues.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/au-small-finance-bank',
  },
  openGraph: {
    title: 'AU Bank Loan Settlement: Fake Notice Check & 2026 Guide',
    description: 'Struggling with AU Bank loan? Learn how to spot fake arbitration notices, get the official settlement letter format, and escalate to the Nodal Officer.',
    url: 'https://www.credsettle.com/loan-settlement/au-small-finance-bank',
    type: 'article',
  },
};

export default function AUSmallFinanceBankLoanSettlementPage() {
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
        "name": "AU Small Finance Bank Settlement",
        "item": "https://www.credsettle.com/loan-settlement/au-small-finance-bank"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "AU Small Finance Bank Loan Settlement: Fake Arbitration Notice Check & Guide",
    "description": "Comprehensive guide on AU Small Finance Bank OTS policy, identifying fake legal notices, and grievance redressal for distressed borrowers.",
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
      "@id": "https://www.credsettle.com/loan-settlement/au-small-finance-bank"
    }
  };

  const faqList = [
    {
      question: "Can I settle my AU Small Finance Bank Personal Loan?",
      answer: "Yes, AU Bank allows One Time Settlement (OTS) for personal loans if the borrower can demonstrate genuine financial hardship. The loan usually needs to be classified as NPA to be eligible."
    },
    {
      question: "Will settling my AU Bank loan affect my CIBIL score?",
      answer: "Yes, settling a loan results in a 'Settled' status on your CIBIL report, which drops your score. However, this is better than a 'Written Off' status."
    },
    {
      question: "What needs to be done if I receive an Arbitration Notice from AU Bank?",
      answer: "Do not ignore it. An Arbitration Notice signals legal proceedings. Seek legal representation immediately to negotiate a settlement before an *ex-parte* award is passed against you."
    },
    {
      question: "Who is the Nodal Officer for AU Bank?",
      answer: "The Principal Nodal Officer is Mr. Deepak Babber (pno@aubank.in). Regional officers act as the first point of escalation."
    },
    {
      question: "What is the typical waiver percentage?",
      answer: "Waivers typically range between 30% to 50% of the total outstanding, depending on the case’s merit and lump-sum payment capability."
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
    "name": "AU Bank Settlement Services by CredSettle",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "156"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Vikram S." },
        "datePublished": "2025-10-12",
        "reviewBody": "I had a huge business loan with AU Bank and lost my shop. CredSettle helped me get an MSME settlement with 45% waiver.",
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
            AU Small Finance Bank Loan Settlement<br />
            <span className="text-blue-300">Stop Legal Action & Save</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Defend against Arbitration notices and settle your Personal or Business loans with AU Bank legally. Up to 50% savings.
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
      <AUSmallFinanceBankLoanSettlementClient />
      
      <Footer />
    </div>
  );
}
