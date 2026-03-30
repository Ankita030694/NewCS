import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UnionBankLoanSettlementClient from './UnionBankLoanSettlementClient';

export const metadata: Metadata = {
  title: 'Union Bank Loan Settlement 2026 | Rinn Samadhan OTS Scheme',
  description: 'Complete guide to Union Bank of India loan settlement. Learn about the 2026 Rinn Samadhan OTS scheme, Lok Adalat process for personal & agri loans.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/union-bank',
  },
  openGraph: {
    title: 'Union Bank Loan Settlement 2026 | Rinn Samadhan OTS Scheme',
    description: 'Expert legal help to settle Union Bank loans. Save up to 50% through Rinn Samadhan OTS or Lok Adalat. Stop harassment today.',
    url: 'https://www.credsettle.com/loan-settlement/union-bank',
    type: 'website',
  },
};

export default function UnionBankLoanSettlementPage() {
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
        "name": "Union Bank Settlement",
        "item": "https://www.credsettle.com/loan-settlement/union-bank"
      }
    ]
  };

  // Schema for Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Union Bank Loan Settlement: Rinn Samadhan Scheme 2026",
    "description": "A comprehensive guide on settling Union Bank of India loans through the Rinn Samadhan OTS scheme and Lok Adalat.",
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
      "@id": "https://www.credsettle.com/loan-settlement/union-bank"
    }
  };

  // Schema for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the 'Rinn Samadhan' scheme by Union Bank of India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rinn Samadhan is a special One Time Settlement (OTS) scheme periodically launched by Union Bank of India. It is designed to resolve stressed assets (NPAs) by offering waivers on interest and penal charges."
        }
      },
      {
        "@type": "Question",
        "name": "Can I settle my Union Bank Education Loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Education loans up to ₹4 Lakhs are often unsecured and can be settled if they turn NPA due to unemployment. For larger loans, settlement is tougher but possible."
        }
      },
      {
        "@type": "Question",
        "name": "Will Union Bank publish my name if I default?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Only 'Willful Defaulters' face public naming. Genuine borrowers seeking settlement are treated with confidentiality."
        }
      },
      {
        "@type": "Question",
        "name": "How much waiver can I expect from Union Bank?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Waivers depend on asset age. Doubtful assets (>2 years NPA) can see 40-60% waivers. Recent NPAs usually get interest waivers only."
        }
      },
      {
        "@type": "Question",
        "name": "Does Union Bank accept settlement in installments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OTS usually requires upfront payment. However, for large amounts, a short installment plan (3-6 months) may be negotiated."
        }
      }
    ]
  };

  // Schema for Review
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Union Bank Loan Settlement Services",
    "description": "Legal settlement services for Union Bank Rinn Samadhan and Lok Adalat cases.",
    "brand": {
      "@type": "Brand",
      "name": "CredSettle"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "180",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Amit Deshmukh"
        },
        "datePublished": "2025-10-12",
        "reviewBody": "CredSettle helped me use the Rinn Samadhan scheme to close my father’s old business loan. Very professional.",
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
            Union Bank Loan Settlement
            <br />
            <span className="text-blue-200">Rinn Samadhan Scheme 2026</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Struggling with Union Bank dues? Utilize the official Rinn Samadhan OTS scheme or Lok Adalat to settle legally. Stop legal notices and save on interest.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg transform hover:-translate-y-1 text-lg"
            >
              Check OTS Eligibility
            </a>
            <a 
              href="#settlement-process"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm text-lg"
            >
              Settlement Process
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-blue-200/60 text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Govt Scheme Experts
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Lok Adalat Support
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Legal Protection
            </div>
          </div>
        </div>
      </div>

      <UnionBankLoanSettlementClient />
      
      <Footer />
    </main>
  );
}
