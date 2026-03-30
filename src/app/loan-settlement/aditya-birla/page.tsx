import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdityaBirlaLoanSettlementClient from './AdityaBirlaLoanSettlementClient';

export const metadata: Metadata = {
  title: 'Aditya Birla Loan Settlement | Stop Harassment',
  description: 'Expert legal help for Aditya Birla Finance loan settlement. Stop sole arbitrator notices, agent harassment, and settle your personal or business loan effectively.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/aditya-birla',
  },
  openGraph: {
    title: 'Aditya Birla Finance Loan Settlement | Stop Arbitration Trap',
    description: 'Aditya Birla Finance uses arbitration aggressively. Learn how to stop ex-parte awards, handle collection agents, and settle for 35-50%.',
    url: 'https://www.credsettle.com/loan-settlement/aditya-birla',
    type: 'website',
  },
};

export default function AdityaBirlaLoanSettlementPage() {
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
        "name": "Aditya Birla Finance",
        "item": "https://www.credsettle.com/loan-settlement/aditya-birla"
      }
    ]
  };

  // Schema for Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Aditya Birla Finance Loan Settlement & Arbitration Guide",
    "description": "Comprehensive guide on how to settle loans with Aditya Birla Finance (ABFL), stop arbitration notices, and deal with collection harassment.",
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
      "@id": "https://www.credsettle.com/loan-settlement/aditya-birla"
    }
  };

  // Schema for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why did Aditya Birla Finance send me an Arbitration Notice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As an NBFC, ABFL prefers Arbitration over Civil Courts because it’s faster. They often appoint a 'Sole Arbitrator' to get a quick 'Award' regarding your debt."
        }
      },
      {
        "@type": "Question",
        "name": "Can I settle my Personal Loan with Aditya Birla Finance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, unsecured personal loans can be settled. Negotiations often result in a settlement of 35-50% of the principal outstanding for NPA accounts."
        }
      },
      {
        "@type": "Question",
        "name": "They are calling my relatives. Is this legal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, RBI guidelines prohibit contacting friends or family. You can file a complaint with the RBI Ombudsman for unfair practices."
        }
      },
      {
        "@type": "Question",
        "name": "What is the 'Foreclosure Charge' trap?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ABFL may try to add foreclosure charges to settlements. However, effective Jan 1, 2026, RBI has banned these for individual floating-rate loans."
        }
      },
      {
        "@type": "Question",
        "name": "Does a settlement remove the loan from my CIBIL?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It marks the loan as 'Settled', which closes the account but leaves a remark on your credit report for about 3 years."
        }
      }
    ]
  };

  // Schema for Review
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Aditya Birla Loan Settlement Services",
    "description": "Legal defense against Aditya Birla Finance arbitration and settlement negotiation.",
    "brand": {
      "@type": "Brand",
      "name": "CredSettle"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "92",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rajesh Kumar"
        },
        "datePublished": "2025-12-05",
        "reviewBody": "They stopped the arbitration proceedings in Delhi for my personal loan. Aditya Birla finally agreed to a 40% settlement.",
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
            Aditya Birla Finance Settlement
            <br />
            <span className="text-blue-300">Stop Arbitration & Harassment</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Don’t let the "Sole Arbitrator" Notice scare you. We provide legal defense against NBFC arbitration, stop agent harassment, and negotiate fair OTS settlements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Check OTS Eligibility
            </a>
            <a 
              href="#arbitration-trap"
              className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm text-lg"
            >
              Understand Arbitration
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-blue-100/80 text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              Arbitration Experts
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              Harassment Protection
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              Legal Defense
            </div>
          </div>
        </div>
      </section>

      <AdityaBirlaLoanSettlementClient />
      
      <Footer />
    </main>
  );
}
