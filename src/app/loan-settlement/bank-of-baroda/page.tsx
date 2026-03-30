import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BankOfBarodaLoanSettlementClient from './BankOfBarodaLoanSettlementClient';

export const metadata: Metadata = {
  title: 'Bank of Baroda Loan Settlement 2026 | OTS & Lok Adalat Guide',
  description: 'Complete guide to Bank of Baroda loan settlement. Learn about the 2026 OTS Scheme, Lok Adalat process for agriculture loans, and MSME restructuring policies to clear your debt.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/bank-of-baroda',
  },
  openGraph: {
    title: 'Bank of Baroda Loan Settlement 2026 | OTS & Lok Adalat Guide',
    description: 'Expert legal help to settle Bank of Baroda agriculture, MSME, and personal loans. Save up to 50% through Lok Adalat or One Time Settlement schemes.',
    url: 'https://www.credsettle.com/loan-settlement/bank-of-baroda',
    type: 'website',
  },
};

export default function BankOfBarodaLoanSettlementPage() {
  // Schema for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CredSettle",
    "url": "https://www.credsettle.com",
    "logo": "https://www.credsettle.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/credsettle",
      "https://twitter.com/credsettle",
      "https://www.linkedin.com/company/credsettle"
    ]
  };

  // Schema for Breadcrumb
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
        "name": "Bank of Baroda Settlement",
        "item": "https://www.credsettle.com/loan-settlement/bank-of-baroda"
      }
    ]
  };

  // Schema for Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bank of Baroda Settlement Schemes 2026: Lok Adalat & OTS",
    "description": "Comprehensive guide on settling Bank of Baroda loans. Details on Agriculture loan waivers, Lakshya OTS scheme, and MSME debt restructuring.",
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
      "@id": "https://www.credsettle.com/loan-settlement/bank-of-baroda"
    }
  };

  // Schema for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is there a specific OTS scheme for Bank of Baroda agriculture loans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Bank of Baroda frequently launches schemes like 'Lakshya' specifically for agriculture and MSME sectors. These OTS schemes offer significant waivers on penal interest for farmers facing distressed crop cycles."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Lok Adalat settlement work with Bank of Baroda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bank of Baroda actively participates in Lok Adalats. It creates a platform for amicable settlement where the borrower and bank agree on a reduced amount. The award passed by the Lok Adalat is final and binding, ensuring no future legal disputes."
        }
      },
      {
        "@type": "Question",
        "name": "Can I restructure my MSME loan with Bank of Baroda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, under the RBI’s guidance and its own 'Asset Restructuring Module', BoB offers MSME restructuring. This can involve extending the tenure or converting interest into a funded interest term loan (FITL)."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I default on a Baroda Kisan Credit Card (BKCC) loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Defaulting on BKCC leads to it becoming an NPA after two crop seasons. However, seizure of agricultural land is legally complex and rare. The bank prefers OTS or restructuring to recover dues from farmers."
        }
      },
      {
        "@type": "Question",
        "name": "Does Bank of Baroda use recovery agents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, for retail loans (Personal/Car/Home), they engage recovery agencies. However, they are bound by the RBI’s Fair Practices Code. You can file a grievance if agents are abusive."
        }
      }
    ]
  };

  // Schema for Review
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Bank of Baroda Loan Settlement Services",
    "description": "Legal settlement services for Bank of Baroda agriculture and MSME loans.",
    "brand": {
      "@type": "Brand",
      "name": "CredSettle"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "210",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Suresh P."
        },
        "datePublished": "2025-11-20",
        "reviewBody": "My MSME loan settlement was stuck for months. CredSettle helped me use the OTS scheme effectively.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <div 
        className="relative w-full pt-32 pb-20 px-4 overflow-hidden"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Bank of Baroda Loan Settlement
            <br />
            <span className="text-blue-200">OTS Schemes & Lok Adalat 2026</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Struggling with Agriculture (BKCC), MSME, or Personal Loans? Utilize government-backed settlement schemes and Lok Adalat to close your debt legally. Save up to 50% on dues.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg transform hover:-translate-y-1 text-lg"
            >
              Check OTS Eligibility
            </a>
            <a 
              href="#process"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm text-lg"
            >
              Settlement Process
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-blue-200/60 text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Lok Adalat Support
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Agri Loan Experts
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              MSME Restructuring
            </div>
          </div>
        </div>
      </div>

      <BankOfBarodaLoanSettlementClient />
      
      <Footer />
    </main>
  );
}
