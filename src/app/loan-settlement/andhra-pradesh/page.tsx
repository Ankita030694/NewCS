import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AndhraPradeshLoanSettlementClient from './AndhraPradeshLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Loan Settlement in Andhra Pradesh: Legal Process, Laws & Guidelines',
  description: 'Struggling with debt in Visakhapatnam, Vijayawada or anywhere in Andhra Pradesh? Learn how to legally settle loans. Stop harassment, save up to 50% & avoid legal action.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/andhra-pradesh',
  },
  openGraph: {
    title: 'Loan Settlement Services in Andhra Pradesh | Vizag & Vijayawada Debt Relief',
    description: 'Expert legal guide for loan settlement in Andhra Pradesh. Covers Lok Adalat process, AP Money Lenders Act, and police protection against harassment.',
    url: 'https://www.credsettle.com/loan-settlement/andhra-pradesh',
    type: 'article',
    images: [
      {
        url: 'https://www.credsettle.com/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'Loan Settlement Services in Andhra Pradesh',
      },
    ],
  },
};

export default function AndhraPradeshLoanSettlementPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CredSettle",
    "url": "https://www.credsettle.com",
    "logo": "https://www.credsettle.com/credsettle-logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8800226635",
      "contactType": "customer service",
      "areaServed": "IN"
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Andhra Pradesh Loan Settlement Guide: Legal Process & Lok Adalat",
    "description": "Comprehensive guide on how to settle personal loans and credit cards in Andhra Pradesh using legal channels like Lok Adalat. Learn about borrower rights under the AP Money Lenders Act.",
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
    "datePublished": "2026-01-22",
    "dateModified": "2026-01-22",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.credsettle.com/loan-settlement/andhra-pradesh"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is loan settlement legal in Andhra Pradesh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, loan settlement is a fully legal and recognized financial process in Andhra Pradesh. It operates under the guidelines of the Reserve Bank of India (RBI) and is governed by the Indian Contract Act."
        }
      },
      {
        "@type": "Question",
        "name": "Can I settle my personal loan in Visakhapatnam or Vijayawada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Whether you reside in Visakhapatnam, Vijayawada, Guntur, or any other part of Andhra Pradesh, you can settle unsecured personal loans if you are facing genuine financial hardship."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Andhra Pradesh Money Lenders Act protect me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Andhra Pradesh Money Lenders Act mandates that money lenders be licensed and prohibits them from charging exorbitant interest rates, providing a legal shield against predatory practices."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do if recovery agents are harassing me in Andhra Pradesh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Harassment is illegal. You have the right to file a police complaint if you are being threatened or harassed. The Andhra Pradesh Police take such matters seriously."
        }
      },
      {
        "@type": "Question",
        "name": "What is the role of Lok Adalat in Andhra Pradesh loan settlement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Andhra Pradesh State Legal Services Authority (APSLSA) organizes Lok Adalats, which are effective forums for amicably resolving loan disputes. Settlements here are final and binding."
        }
      },
      {
        "@type": "Question",
        "name": "Does settling a loan affect my CIBIL score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, settlement is reported as 'Settled', which can initially lower your score. However, it is a better long-term strategy than 'Default', and you can rebuild your score over time."
        }
      },
      {
        "@type": "Question",
        "name": "Can I settle credit card dues in Andhra Pradesh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, credit card debts are frequently settled in Andhra Pradesh. Banks are often willing to accept a one-time settlement (OTS) for unsecured credit card dues."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a lawyer for loan settlement in Andhra Pradesh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Having a specialized legal team like CredSettle is highly advantageous. We understand the local laws, can stop harassment, and negotiate the best terms for you."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the settlement process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The process typically takes from a few weeks to a few months, depending on the bank and the complexity of negotiations."
        }
      },
      {
        "@type": "Question",
        "name": "What involves the Debt Recovery Tribunal (DRT) in Visakhapatnam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For debts typically above ₹20 Lakhs, banks may approach the DRT in Visakhapatnam. We can provide legal representation to defend your case and explore settlement within the DRT framework."
        }
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Loan Settlement Services Andhra Pradesh",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "850"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Venkatesh Rao" },
        "datePublished": "2025-11-20",
        "reviewBody": "CredSettle helped me clear my credit card debt in Vizag. Very professional and stopped the calls immediately.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Lakshmi Narayana" },
        "datePublished": "2026-01-05",
        "reviewBody": "I was worried about legal action, but their team explained the Lok Adalat process clearly. Settled my personal loan with a good discount.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      }
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
        "name": "Andhra Pradesh",
        "item": "https://www.credsettle.com/loan-settlement/andhra-pradesh"
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section 
        className="relative text-white pt-32 pb-20 px-4 md:px-8"
        style={{
          background: 'linear-gradient(168deg, #007AFF 0%, #0C2756 100%)',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Andhra Pradesh Loan Settlement Services<br />
            <span className="text-blue-200">Legal Debt Relief in Vizag & Vijayawada</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Stop harassment and settle your personal loans & credit cards legally. Expert support for Lok Adalat settlements and DRT Visakhapatnam cases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Check Eligibility Free
            </Link>
          </div>
        </div>
      </section>

      <AndhraPradeshLoanSettlementClient />
      
      <Footer />
    </div>
  );
}
