import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PayUFinanceLoanSettlementClient from './PayUFinanceLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PayU Finance / LazyPay Loan Settlement | Stop Harassment | CredSettle',
  description: 'Expert PayU Finance & LazyPay loan settlement services. Stop agent harassment, waive penal interest, and settle your digital loans legally. Get the Nodal Officer details and process guide.',
  keywords: [
    'PayU Finance Loan Settlement',
    'LazyPay Settlement Process',
    'LazyPay Loan Settlement',
    'PayU Nodal Officer Contact',
    'PayU Finance Harassment Complaint',
    'LazyPay Customer Care Harassment',
    'PayU Settlement Letter Format',
    'How to stop LazyPay agents',
    'PayU Finance No Objection Certificate',
    'LazyPay One Time Settlement',
    'Bhavana Bharat PayU Nodal Officer',
    'Settlement of Personal Loan',
    'NBFC Loan Settlement India',
    'CredSettle PayU Help'
  ],
  openGraph: {
    title: 'PayU Finance / LazyPay Loan Settlement | Legal Debt Relief',
    description: 'Struggling with PayU or LazyPay dues? We help you negotiate a One Time Settlement (OTS), stop recovery harassment, and close your loan legally with a No Dues Certificate.',
    type: 'article',
    url: 'https://credsettle.com/loan-settlement/payu-finance',
    images: [{ url: 'https://credsettle.com/assets/payu-settlement-guide.png' }],
  },
};

export default function PayUFinanceLoanSettlementPage() {
  // Schema Data
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
        "name": "PayU Finance Settlement",
        "item": "https://www.credsettle.com/loan-settlement/payu-finance"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "PayU Finance & LazyPay Loan Settlement: Complete Guide 2026",
    "description": "Comprehensive guide on how to settle PayU Finance and LazyPay loans through One Time Settlement (OTS). Learn about the process, eligibility, and how to stop harassment.",
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
    "datePublished": "2026-01-17",
    "dateModified": "2026-01-17",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.credsettle.com/loan-settlement/payu-finance"
    }
  };

  const faqList = [
    {
      question: "What is PayU Finance Loan Settlement?",
      answer: "PayU Finance Loan Settlement is a legal process where you negotiate with PayU Finance (or LazyPay) to pay a reduced lump sum amount to close your outstanding loan account. This is typically done when you are unable to pay the full amount due to genuine financial difficulties."
    },
    {
      question: "Can I settle my LazyPay 'Buy Now Pay Later' dues?",
      answer: "Yes, LazyPay dues can be settled. Since LazyPay is a product of PayU Finance, the settlement process is similar. If you have defaulted and the interest has piled up, you can approach them for a One Time Settlement (OTS)."
    },
    {
      question: "Will I get a No Objection Certificate (NOC) after settlement?",
      answer: "Yes. Once you pay the agreed settlement amount, PayU Finance is legally obligated to issue a 'No Dues Certificate' or NOC. This document proves that your loan account is closed and you have no further liability."
    },
    {
      question: "How does settlement affect my CIBIL score?",
      answer: "Settling a loan will mark your account as 'Settled' in your credit report. This will lower your CIBIL score significantly in the short term. However, it stops further damage from 'Written Off' status and allows you to become debt-free and rebuild your score over time."
    },
    {
      question: "What if PayU recover agents are harassing me?",
      answer: "Harassment by recovery agents is illegal under RBI guidelines. If you are facing abuse, you should file a complaint with PayU’s Nodal Officer. If you hire CredSettle, our legal team takes over communication and stops the harassment immediately."
    },
    {
      question: "Who is the Nodal Officer for PayU Finance?",
      answer: "The Principal Nodal Officer for PayU Finance is Ms. Bhavana Bharat. Her email is nodalofficer@payufin.com. You can escalate unresolved grievances to her."
    },
    {
      question: "Can payU Finance take legal action against me?",
      answer: "Yes, like any lender, they can initiate legal proceedings including arbitration or filing a Section 138 case (if cheques bounce). However, they usually prefer settlement over long legal battles."
    },
    {
      question: "How much discount can I expect?",
      answer: "The discount depends on your specific case, the age of the default, and your negotiation. It is common to see waivers ranging from 30% to 50% or more of the total outstanding amount, especially on penal interest."
    },
    {
      question: "How long does the process take?",
      answer: "The settlement process typically takes 2 to 4 weeks from the start of negotiation to the issuance of the settlement letter."
    },
    {
      question: "Do I need a lawyer for settlement?",
      answer: "While not mandatory, having legal representation (like CredSettle) ensures you are not tricked into bad terms, stops harassment, and ensures the settlement letter is legally valid."
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
    "name": "PayU Finance Loan Settlement Services by CredSettle",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "850"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Rahul Mehta" },
        "datePublished": "2025-11-20",
        "reviewBody": "My LazyPay dues had doubled due to late fees. CredSettle stopped the agent calls and settled the loan for just 45% of the outstanding.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Priya S." },
        "datePublished": "2025-12-10",
        "reviewBody": "Excellent service. They handled PayU Finance professionally and I got my NOC without any hassle.",
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
            PayU Finance Loan Settlement<br />
            <span className="text-blue-300">Complete 2026 Guide</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Expert legal help to settle your PayU Finance & LazyPay debt. Stop harassment and save up to 50% with our RBI compliant settlement process.
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

      {/* Client Component content (Breadcrumb & Main Content) */}
      <PayUFinanceLoanSettlementClient />
      
      <Footer />
    </div>
  );
}
