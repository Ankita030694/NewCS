import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import PoonawallaLoanSettlementClient from './PoonawallaLoanSettlementClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Poonawalla Fincorp (Magma) Loan Settlement | Waive 50% Dues',
  description: 'Settle Poonawalla Fincorp (Magma) loan with up to 50% discount. Expert legal help for Section 138 notices, harassment complaints (customercare@poonawallafincorp.com), and NPA resolution.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/poonawalla',
  },
  openGraph: {
    title: 'Poonawalla Fincorp Loan Settlement: Stop Harassment Now',
    description: 'Received legal notice from Poonawalla (Magma)? Our expert legal team helps you settle your personal loan, stop agent harassment, and close your debt.',
    url: 'https://www.credsettle.com/loan-settlement/poonawalla',
    type: 'article',
  },
};

export default function PoonawallaLoanSettlementPage() {
  const faqList = [
    {
      question: "Is Poonawalla Fincorp the same as Magma Fincorp?",
      answer: "Yes, Magma Fincorp Limited was acquired by the Adar Poonawalla-led Rising Sun Holdings Private Limited in 2021 and rebranded as Poonawalla Fincorp Limited."
    },
    {
      question: "Can I settle my Poonawalla Fincorp personal loan online?",
      answer: "You can initiate the request online via email to customercare@poonawallafincorp.com, but the negotiation and final settlement usually requires formal documentation processing, which CredSettle handles."
    },
    {
      question: "Does Poonawalla Fincorp send legal notices for non-payment?",
      answer: "Yes, they may issue notices under Section 138 of the Negotiable Instruments Act or initiate Arbitration proceedings for defaults."
    },
    {
      question: "How much can I save in a Poonawalla loan settlement?",
      answer: "Borrowers can typically negotiate a waiver of 100% of late fees and up to 40-50% of the principal amount in genuine hardship cases."
    },
    {
      question: "Will a settlement remove the loan from my CIBIL report?",
      answer: "No, the loan status will be updated to 'Settled', which indicates the loan was closed for less than the full amount. This remains on the report for a few years."
    },
    {
      question: "Can agents come to my home for recovery?",
      answer: "Yes, but they must follow RBI guidelines: no visits before 8 AM or after 7 PM, and no abusive behavior."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Poonawalla Fincorp (Magma) Loan Settlement Process 2026",
    "description": "Comprehensive guide to settling Poonawalla Fincorp personal loans. Learn how to stop harassment, handle legal notices, and close your debt.",
    "author": {
      "@type": "Organization",
      "name": "CredSettle"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CredSettle",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.credsettle.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.credsettle.com/loan-settlement/poonawalla"
    }
  };

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
    "name": "Poonawalla Loan Settlement Service",
    "description": "Legal settlement service for Poonawalla Fincorp and Magma Fincorp personal loans.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "215"
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
        "name": "Poonawalla Fincorp",
        "item": "https://www.credsettle.com/loan-settlement/poonawalla"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

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
            Poonawalla Fincorp (Magma) Loan Settlement<br />
            <span className="text-blue-300">Save up to 50% on Dues</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Struggling with Poonawalla Fincorp or Magma debt? Our expert legal team stops harassment and negotiates a legal settlement for you.
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
      
      <PoonawallaLoanSettlementClient />
      
      <Footer />
    </main>
  );
}
