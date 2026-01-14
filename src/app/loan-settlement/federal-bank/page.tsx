import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FederalBankLoanSettlementClient from './FederalBankLoanSettlementClient';

export const metadata: Metadata = {
  title: 'Federal Bank Loan Settlement 2026 | MSME & Agri Loan OTS Options',
  description: 'Expert guide to settling Federal Bank loans. Learn about MSME OTS policies, agricultural loan waivers, and the "5% Deposit Rule" for 2026.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/federal-bank',
  },
  openGraph: {
    title: 'Federal Bank Loan Settlement 2026 | MSME & Agri Loan OTS Options',
    description: 'Stop harassment and save up to 50% on Federal Bank loans. We help navigate the 5% deposit rule and MSME settlements legally.',
    url: 'https://www.credsettle.com/loan-settlement/federal-bank',
    type: 'website',
  },
};

export default function FederalBankLoanSettlementPage() {
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
        "name": "Federal Bank Settlement",
        "item": "https://www.credsettle.com/loan-settlement/federal-bank"
      }
    ]
  };

  // Schema for Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Federal Bank Loan Settlement: 2026 OTS Guide",
    "description": "Understand the Federal Bank OTS process for 2026, including the 5% deposit requirement, MSME loan settlements, and agricultural waivers.",
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
    "datePublished": "2026-01-16",
    "dateModified": "2026-01-16",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.credsettle.com/loan-settlement/federal-bank"
    }
  };

  // Schema for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the '5% Deposit Rule' for Federal Bank OTS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike many other banks, Federal Bank typically requires you to deposit 5% of the proposal amount upfront to even process your OTS application. This amount is refundable if the proposal is rejected."
        }
      },
      {
        "@type": "Question",
        "name": "Does Federal Bank offer settlement for Agricultural Loans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, under schemes like 'Federal Green Plus' and Kisan Credit Card (KCC), settlements are possible, especially if there is crop failure or natural calamity."
        }
      },
      {
        "@type": "Question",
        "name": "How much waiver can I expect on a Personal Loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For unsecured personal loans classified as 'Doubtful' (NPA > 12 months), waivers can range from 35% to 60% of the principal + interest."
        }
      },
      {
        "@type": "Question",
        "name": "Can I settle my Federal Bank Gold Loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Settling Gold Loans is extremely difficult as the bank holds collateral. They usually auction the gold. Settlement is rare unless the gold value has crashed below the loan amount."
        }
      },
      {
        "@type": "Question",
        "name": "Will a settlement remove the 'Written Off' status from CIBIL?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. A settlement marks the account as 'Settled' or 'Post Write-Off Settled'. It negatively impacts your score for 2-3 years but helps you become debt-free."
        }
      }
    ]
  };

  // Schema for Review
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Federal Bank Loan Settlement Services",
    "description": "Professional legal negotiation for Federal Bank settlements.",
    "brand": {
      "@type": "Brand",
      "name": "CredSettle"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "145",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Joseph Mathew"
        },
        "datePublished": "2025-11-20",
        "reviewBody": "CredSettle helped me negotiate with the Zonal office for my business OD. Saved my collateral from SARFAESI action.",
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #F59E0B 0%, #78350F 100%)', // Amber/Brown gradient for Federal Bank
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Federal Bank Loan Settlement
            <br />
            <span className="text-amber-200">2026 OTS & MSME Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-amber-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Expert legal help to settle Federal Bank loans. Navigate the "5% Deposit Rule", stop SARFAESI notices, and resolve MSME or Agricultural debts legally.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white text-amber-900 font-bold rounded-xl hover:bg-amber-50 transition-all shadow-lg transform hover:-translate-y-1 text-lg"
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

          <div className="mt-12 flex items-center justify-center gap-8 text-amber-200/80 text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              MSME Specialists
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Lok Adalat Support
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Assets Protection
            </div>
          </div>
        </div>
      </div>

      <FederalBankLoanSettlementClient />
      
      <Footer />
    </main>
  );
}
