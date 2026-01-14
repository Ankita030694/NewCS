import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DmiFinanceLoanSettlementClient from './DmiFinanceLoanSettlementClient';

export const metadata: Metadata = {
  title: 'DMI Finance Loan Settlement | Unlock Samsung Phone & Settle GPay Loans',
  description: 'Expert legal help for DMI Finance loan settlement. Resolve Samsung Finance+ device locks (Knox), GPay loan defaults, and digital arbitration notices.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/dmi-finance',
  },
  openGraph: {
    title: 'DMI Finance Loan Settlement | Samsung & GPay Loan Solutions',
    description: 'Phone locked by Samsung Finance+? Defaulted on GPay/DMI loan? We help negotiate One-Time Settlements (OTS) and remove Knox Guard locks.',
    url: 'https://www.credsettle.com/loan-settlement/dmi-finance',
    type: 'website',
  },
};

export default function DmiFinanceLoanSettlementPage() {
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
        "name": "DMI Finance",
        "item": "https://www.credsettle.com/loan-settlement/dmi-finance"
      }
    ]
  };

  // Schema for Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "DMI Finance Loan Settlement: Samsung & GPay Default Guide",
    "description": "Comprehensive guide on how to settle loans with DMI Finance, dealing with Samsung Finance+ locks, and handling digital arbitration notices.",
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
      "@id": "https://www.credsettle.com/loan-settlement/dmi-finance"
    }
  };

  // Schema for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "My Samsung phone is locked by 'Knox Guard'. Will settlement unlock it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Once you pay the One-Time Settlement (OTS) amount, DMI Finance sends a clearance signal to the Knox server, usually auto-unlocking the device within 24 hours."
        }
      },
      {
        "@type": "Question",
        "name": "I took a loan via Google Pay/GPay. Can I settle it directly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. GPay is just the interface. You must negotiate the settlement directly with DMI Finance."
        }
      },
      {
        "@type": "Question",
        "name": "What is the DMI Finance Grievance Email?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For unresolved complaints, you can escalate to 'grievance@dmifinance.in' or the Principal Nodal Officer at 'head.services@dmifinance.in'."
        }
      },
      {
        "@type": "Question",
        "name": "I received a digital arbitration notice. What should I do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Do not ignore it. DMI uses digital arbitration (often in Delhi). We can help file a legal response to stop ex-parte awards."
        }
      }
    ]
  };

  // Schema for Review
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "DMI Finance Loan Settlement Services",
    "description": "Legal assistance for settling DMI Finance loans and resolving Knox Guard locks.",
    "brand": {
      "@type": "Brand",
      "name": "CredSettle"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "115",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Amit Sharma"
        },
        "datePublished": "2025-11-20",
        "reviewBody": "My Samsung M32 was locked for 2 months. CredSettle negotiated with DMI, I paid 50% OTS, and my phone unlocked the next day.",
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
            DMI Finance Loan Settlement
            <br />
            <span className="text-blue-300">Unlock Your Phone & Future</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Struggling with Samsung Finance+ or GPay loans? We stop the harassment, negotiate 50% OTS, and get your device unlocked legally.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Check Eligibility
            </a>
            <a 
              href="#samsung-finance"
              className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm text-lg"
            >
              Unlock Process
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-blue-100/80 text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              Knox Unlock
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              GPay Settlements
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              Stop Harassment
            </div>
          </div>
        </div>
      </section>

      <DmiFinanceLoanSettlementClient />
      
      <Footer />
    </main>
  );
}
