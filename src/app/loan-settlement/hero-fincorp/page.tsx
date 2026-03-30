import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroFincorpLoanSettlementClient from './HeroFincorpLoanSettlementClient';

export const metadata: Metadata = {
  title: 'Hero Fincorp Loan Settlement | Close Two-Wheeler & Personal Loans',
  description: 'Can’t pay your Hero Fincorp loan? Stop EMI bounce charges and arbitration notices. Expert legal help for One Time Settlement (OTS) of bike and personal loans.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/hero-fincorp',
  },
  openGraph: {
    title: 'Hero Fincorp Loan Settlement | Close Two-Wheeler & Personal Loans',
    description: 'Expert legal help to settle Hero Fincorp two-wheeler and personal loans. Stop harassment and save up to 50% on dues.',
    url: 'https://www.credsettle.com/loan-settlement/hero-fincorp',
    type: 'website',
  },
};

export default function HeroFincorpLoanSettlementPage() {
  // Schema for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CredSettle",
    "url": "https://www.credsettle.com",
    "logo": "https://www.credsettle.com/logo.png", // Assuming logo URL
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
        "name": "Hero Fincorp Settlement",
        "item": "https://www.credsettle.com/loan-settlement/hero-fincorp"
      }
    ]
  };

  // Schema for Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Hero Fincorp Loan Settlement Process 2026: Complete Guide",
    "description": "Comprehensive guide on how to settle Hero Fincorp two-wheeler and personal loans. Learn about the OTS process, stopping arbitration, and handling Section 138 notices.",
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
      "@id": "https://www.credsettle.com/loan-settlement/hero-fincorp"
    }
  };

  // Schema for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I settle my Hero Fincorp two-wheeler loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can settle a Hero Fincorp two-wheeler loan if you are facing genuine financial hardship. This is often done through a One Time Settlement (OTS) after the loan becomes a Non-Performing Asset (NPA)."
        }
      },
      {
        "@type": "Question",
        "name": "How do I stop Hero Fincorp arbitration proceedings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Initiating a formal settlement negotiation is the best way to pause arbitration. A legal representative can respond to the arbitration notice and propose a settlement to the arbitrator and the lender."
        }
      },
      {
        "@type": "Question",
        "name": "Will Hero Fincorp seize my bike if I don’t pay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For secured two-wheeler loans, Hero Fincorp has the right to repossess the vehicle under the loan agreement terms. Settlement negotiations should be started immediately to prevent seizure."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Hero Fincorp settlement letter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A settlement letter is an official document from Hero Fincorp stating the agreed reduced amount to close the loan. It outlines the payment deadline and confirms that no further dues will be claimed upon payment."
        }
      },
      {
        "@type": "Question",
        "name": "How to handle Section 138 notice from Hero Fincorp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Section 138 notice for cheque bounce is a serious legal matter. You must respond to the notice within the stipulated time. Settling the loan dispute can often lead to the withdrawal of the complaint."
        }
      }
    ]
  };

  // Schema for Review (Aggregate Rating)
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Hero Fincorp Loan Settlement Services",
    "description": "Legal settlement services for Hero Fincorp personal and two-wheeler loans.",
    "brand": {
      "@type": "Brand",
      "name": "CredSettle"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "145",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rakesh M."
        },
        "datePublished": "2025-12-10",
        "reviewBody": "Saved my bike from being seized by agents. The settlement was smooth.",
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
            Stop Hero Fincorp Harassment
            <br />
            <span className="text-blue-200">Settle Your Loan Today</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Struggling with Two-Wheeler or Personal Loan EMIs? Get complete legal protection from arbitration, agent harassment, and vehicle seizure. Settle for up to 50% less.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg transform hover:-translate-y-1 text-lg"
            >
              Get Settlement Advice
            </a>
            <a 
              href="#process"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm text-lg"
            >
              How It Works
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-blue-200/60 text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Stop Arbitration
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Save 50% on Dues
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Legal Protection
            </div>
          </div>
        </div>
      </div>

      <HeroFincorpLoanSettlementClient />
      
      <Footer />
    </main>
  );
}
