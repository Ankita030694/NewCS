import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TelanganaLoanSettlementClient from './TelanganaLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Loan Settlement in Telangana: Legal Process, Laws & Guidelines',
  description: 'Struggling with debt in Hyderabad, Warangal or anywhere in Telangana? Learn how to legally settle loans. Stop harassment, save up to 50% & avoid legal action.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/telangana',
  },
  openGraph: {
    title: 'Loan Settlement Services in Telangana | Hyderabad & Warangal Debt Relief',
    description: 'Expert legal guide for loan settlement in Telangana. Covers Lok Adalat process, Telangana Money Lenders Act, and police protection against harassment.',
    url: 'https://www.credsettle.com/loan-settlement/telangana',
    type: 'article',
    images: [
      {
        url: 'https://www.credsettle.com/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'Loan Settlement Services in Telangana',
      },
    ],
  },
};

export default function TelanganaLoanSettlementPage() {
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
    "headline": "Telangana Loan Settlement Guide: Legal Process & Lok Adalat",
    "description": "Comprehensive guide on how to settle personal loans and credit cards in Telangana using legal channels like Lok Adalat. Learn about borrower rights under the Telangana Money Lenders Act.",
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
      "@id": "https://www.credsettle.com/loan-settlement/telangana"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is loan settlement legal in Telangana?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, loan settlement is a fully legal and recognized financial process in Telangana. It operates under the guidelines of the Reserve Bank of India (RBI) and is governed by the Indian Contract Act."
        }
      },
      {
        "@type": "Question",
        "name": "Can I settle my personal loan in Hyderabad or Warangal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Whether you reside in Hyderabad, Warangal, Nizamabad, or any other part of Telangana, you can settle unsecured personal loans if you are experiencing genuine financial distress."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Telangana Money Lenders Act protect me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Telangana Money Lenders Act mandates that money lenders be licensed and prohibits them from charging exorbitant interest rates, providing a legal shield against predatory practices."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do if recovery agents are harassing me in Telangana?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Harassment is illegal. You have the right to file a police complaint if you are being threatened or harassed. The Telangana Police take such matters seriously."
        }
      },
      {
        "@type": "Question",
        "name": "What is the role of Lok Adalat in Telangana loan settlement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Telangana State Legal Services Authority (TSLSA) organizes Lok Adalats, which are effective forums for amicably resolving loan disputes. Settlements here are final and binding."
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
        "name": "Can I settle credit card dues in Telangana?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, credit card debts are frequently settled in Telangana. Banks are often willing to accept a one-time settlement (OTS) for unsecured credit card dues."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a lawyer for loan settlement in Telangana?",
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
        "name": "What involves the Debt Recovery Tribunal (DRT) in Hyderabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For debts typically above ₹20 Lakhs, banks may approach the DRT in Hyderabad. We can provide legal representation to defend your case and explore settlement within the DRT framework."
        }
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Loan Settlement Services Telangana",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "920"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Kiran Kumar" },
        "datePublished": "2025-12-10",
        "reviewBody": "CredSettle helped me clear my personal loan in Hyderabad. Their team handled everything professionally and I saved a lot on the final amount.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Deepa Reddy" },
        "datePublished": "2026-01-15",
        "reviewBody": "I was under a lot of stress due to recovery calls. They stopped the harassment and settled my credit card dues through Lok Adalat.",
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
        "name": "Telangana",
        "item": "https://www.credsettle.com/loan-settlement/telangana"
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
            Telangana Loan Settlement Services<br />
            <span className="text-blue-200">Legal Debt Relief in Hyderabad & Warangal</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Stop harassment and settle your personal loans & credit cards legally. Expert support for Lok Adalat settlements and DRT Hyderabad cases.
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

      <TelanganaLoanSettlementClient />
      
      <Footer />
    </div>
  );
}
