import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MaharashtraLoanSettlementClient from './MaharashtraLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Loan Settlement in Maharashtra: Legal Process & Lok Adalat Guide 2026',
  description: 'Struggling with debt in Mumbai or Pune? Learn how to legally settle loans in Maharashtra through Lok Adalat & DRT. Stop harassment and save up to 50% on dues.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/maharashtra',
  },
  openGraph: {
    title: 'Maharashtra Loan Settlement: Stop Harassment & Settle Debt',
    description: 'Expert legal guide for loan settlement in Maharashtra. Covers Lok Adalat process in Mumbai/Pune, anti-harassment laws, and DRT procedures.',
    url: 'https://www.credsettle.com/loan-settlement/maharashtra',
    type: 'article',
    images: [
      {
        url: 'https://www.credsettle.com/hero-bg.png', // Fallback to brand image
        width: 1200,
        height: 630,
        alt: 'Loan Settlement Services in Maharashtra',
      },
    ],
  },
};

export default function MaharashtraLoanSettlementPage() {
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
      "contactType": "customer service",
      "areaServed": "IN"
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Maharashtra Loan Settlement Guide: Lok Adalat & DRT Process",
    "description": "Comprehensive guide on how to settle personal loans and credit cards in Maharashtra using legal channels like Lok Adalat. Learn about borrower rights and anti-harassment laws in Mumbai and Pune.",
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
      "@id": "https://www.credsettle.com/loan-settlement/maharashtra"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is loan settlement legal in Maharashtra?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, loan settlement is a 100% legal financial process in Maharashtra and across India. It is governed by RBI guidelines and the Indian Contract Act."
        }
      },
      {
        "@type": "Question",
        "name": "Can I settle my loan through Lok Adalat in Mumbai or Pune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Lok Adalats in Maharashtra are highly effective for settling loan disputes. Both nationalized and private banks participate in National Lok Adalats held in Mumbai, Pune, Nagpur, and other districts."
        }
      },
      {
        "@type": "Question",
        "name": "How can I stop harassment by recovery agents in Maharashtra?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can file a formal complaint with the bank, the Banking Ombudsman, or file an FIR with the Maharashtra Police under IPC sections for criminal intimidation."
        }
      },
      {
        "@type": "Question",
        "name": "What is the role of Debt Recovery Tribunals (DRT) in Maharashtra?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DRTs in Maharashtra handle recovery cases for debts exceeding ₹20 lakhs. They also provide a forum for borrowers to challenge unlawful actions by banks."
        }
      },
      {
        "@type": "Question",
        "name": "Will settling a loan in Maharashtra affect my CIBIL score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, it will result in a 'Settled' status and lower your score, but it is better than a 'Default' status and allows you to close the debt."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a loan settlement for my credit card debt in Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, credit card settlement is very common in Mumbai. Banks are often willing to settle to recover a portion of the principal."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum amount accepted for settlement by banks in Maharashtra?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is no fixed minimum, but banks generally aim to recover the principal. In hardship cases, settlements can be 30-50% of the total outstanding."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the settlement process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically 2 weeks to 3 months for negotiation, plus 15-30 days for closure documentation."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to visit the court or bank branch personally?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usually knowing legal representation handles it. Personal presence might be required only for Lok Adalat settlements to sign the deed."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for loan settlement in Maharashtra?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "KYC documents, loan statements, bank notices, and proof of financial hardship."
        }
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Loan Settlement Services Maharashtra",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "850"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sandeep Patil" },
        "datePublished": "2025-12-10",
        "reviewBody": "CredSettle team in Pune helped me settle all 3 credit cards for just 40% of the value. The relief of no recovery calls is priceless.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Anjali Deshmukh" },
        "datePublished": "2026-01-05",
        "reviewBody": "Professional service. They handled the legal notices I got from the bank. I didn't have to go to court.",
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
        "name": "Maharashtra",
        "item": "https://www.credsettle.com/loan-settlement/maharashtra"
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
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
            Maharashtra Loan Settlement Services<br />
            <span className="text-blue-300">Legal Debt Relief in Mumbai & Pune</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Stop harassment and settle your personal loans & credit cards legally. Expert support for Lok Adalat settlements and DRT cases across Maharashtra.
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

      {/* Client Component content (Breadcrumb & Main Content) */}
      <MaharashtraLoanSettlementClient />
      
      <Footer />
    </div>
  );
}
