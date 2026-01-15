import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SMFGLoanSettlementClient from './SMFGLoanSettlementClient';

export const metadata: Metadata = {
  title: 'SMFG India Credit Loan Settlement | Formerly Fullerton India OTS',
  description: 'Complete guide to SMFG India Credit (Fullerton India) loan settlement. Learn about Instaloan app settlement, stopping harassment, and getting NOC. Save 50%.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/smfg-india-credit',
  },
  openGraph: {
    title: 'SMFG India Credit Settlement: Fullerton India OTS Guide',
    description: 'Struggling with SMFG India (Fullerton) debt? Our expert legal team helps you settle loans, stop recovery harassment, and get your NOC.',
    url: 'https://www.credsettle.com/loan-settlement/smfg-india-credit',
    type: 'article',
  },
};

export default function SMFGLoanSettlementPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CredSettle",
    "url": "https://www.credsettle.com",
    "logo": "https://www.credsettle.com/credsettle-logo.svg",
    "sameAs": [
      "https://www.facebook.com/credsettle",
      "https://twitter.com/credsettle",
      "https://www.linkedin.com/company/credsettle"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9560481230",
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
        "name": "SMFG India Credit Settlement",
        "item": "https://www.credsettle.com/loan-settlement/smfg-india-credit"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "SMFG India Credit (Fullerton) Loan Settlement Process: Complete Guide",
    "description": "Comprehensive guide on how to settle SMFG India Credit (formerly Fullerton India) loans. Learn about the OTS process, Instaloan app settlement, and legal protection.",
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
      "@id": "https://www.credsettle.com/loan-settlement/smfg-india-credit"
    }
  };

  const faqList = [
    {
      question: "What is SMFG India Credit (Fullerton India) Settlement?",
      answer: "SMFG India Credit loan settlement, or One Time Settlement (OTS), is a legal provision where the lender agrees to accept a reduced lump sum payment to close a defaulted loan account. This is typically an option for borrowers who are genuinely unable to repay the full amount due to financial hardship."
    },
    {
      question: "Can I settle my Instaloan App personal loan?",
      answer: "Yes, personal loans taken via the SMFG India Credit Instaloan app or managed through mConnect are unsecured loans and are eligible for settlement if they have regular defaults or have been classified as NPAs."
    },
    {
      question: "Will settling my loan affect my CIBIL score?",
      answer: "Yes, opting for a settlement will negatively impact your credit score. Your account will be marked as 'Settled' rather than 'Closed', which indicates that the full amount was not repaid. However, this is often a better alternative to a 'Written-off' status or ongoing legal action."
    },
    {
      question: "How do I stop harassment from SMFG recovery agents?",
      answer: "You have rights under RBI guidelines. Agents cannot call at odd hours (before 8 AM or after 7 PM), use abusive language, or visit you without notice. If harassment continues, you can complain to the Grievance Officer at namaste@smfgindia.com or hire a legal firm like CredSettle to handle all communication."
    },
    {
      question: "What is the contact email for SMFG India Credit grievance?",
      answer: "You can contact their customer care at namaste@smfgindia.com. For unresolved issues or complaints against recovery agents, you can escalate to the Customer Complaint Redressal Cell at ccrc@smfgindia.com."
    },
    {
      question: "How much discount can I get in an OTS?",
      answer: "The discount depends on the age of the default and your financial condition. Settlements can typically range from a waiver of 30% to 50% on the total outstanding dues, especially if the account is a long-standing NPA."
    },
    {
      question: "How do I download the No Dues Certificate (NOC)?",
      answer: "After paying the settlement amount, SMFG India Credit will issue a No Dues Certificate (NOC) within 15-21 working days. This is usually sent to your registered email or physical address. You can also track this request via the mConnect app or by emailing their support."
    },
    {
      question: "Is arbitration common with SMFG India Credit?",
      answer: "Yes, like many NBFCs, SMFG India Credit uses arbitration clauses to recover dues. If you receive an arbitration notice, it is critical not to ignore it. Legal representation is highly recommended to ensure the proceedings are fair."
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
    "name": "SMFG India Credit Settlement Services by CredSettle",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "395"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Vikram S." },
        "datePublished": "2025-11-15",
        "reviewBody": "I had a huge personal loan with Fullerton/SMFG. After my business took a hit, I couldn't pay. CredSettle handled the arbitration notice and settled the loan for 40% of the value.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Anjali K." },
        "datePublished": "2025-12-02",
        "reviewBody": "Recovery agents were calling my office. CredSettle legal team stepped in and stopped it immediately. The peace of mind was worth every penny.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <Navbar />
      
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
            SMFG India Credit Loan Settlement<br />
            <span className="text-blue-300">Formerly Fullerton India</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Stop harassment and settle your SMFG/Fullerton personal loans. Expert legal help for Instaloan app defaults and OTS negotiation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Check Eligibility
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-gray-700 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href="/loan-settlement" className="ml-1 text-gray-700 hover:text-blue-600 md:ml-2">Loan Settlement</Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 text-gray-500 md:ml-2">SMFG India Credit</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <SMFGLoanSettlementClient />

      <Footer />
    </div>
  );
}
