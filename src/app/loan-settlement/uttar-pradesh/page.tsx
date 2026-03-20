import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UttarPradeshLoanSettlementClient from './UttarPradeshLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Loan Settlement in Uttar Pradesh: Legal Guide',
  description: 'Struggling with debt in Noida, Lucknow or Kanpur? Learn how to settle loans legally in UP. Stop police complaints & harassment. Save up to 50%.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/uttar-pradesh',
  },
  openGraph: {
    title: 'Loan Settlement Services in Uttar Pradesh | Noida & Lucknow Debt Relief',
    description: 'Expert legal guide for loan settlement in Uttar Pradesh. Covers Lok Adalat process, UP police protection (Dial 112), and DRT procedures.',
    url: 'https://www.credsettle.com/loan-settlement/uttar-pradesh',
    type: 'article',
    images: [
      {
        url: 'https://www.credsettle.com/hero-bg.png', // Ideally a UP specific image if available
        width: 1200,
        height: 630,
        alt: 'Loan Settlement Services in Uttar Pradesh',
      },
    ],
  },
  keywords: [
    'loan settlement Uttar Pradesh',
    'debt settlement Noida',
    'personal loan settlement Lucknow',
    'credit card settlement Kanpur',
    'Lok Adalat UP loan settlement',
    'UP money lending act',
    'stop recovery harassment Ghaziabad'
  ]
};

export default function UttarPradeshLoanSettlementPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CredSettle Uttar Pradesh",
    "url": "https://www.credsettle.com/loan-settlement/uttar-pradesh",
    "logo": "https://www.credsettle.com/credsettle-logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8800226635",
      "contactType": "customer service",
      "areaServed": "IN-UP",
      "availableLanguage": ["English", "Hindi"]
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Uttar Pradesh Loan Settlement Guide: Laws, Process & Lok Adalat",
    "description": "Comprehensive guide to settling personal loans and credit cards in Uttar Pradesh. Learn about the UP Money Lending Act, Lok Adalat process in Lucknow, and police help.",
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
      "@id": "https://www.credsettle.com/loan-settlement/uttar-pradesh"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is loan settlement legal in Uttar Pradesh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, loan settlement is a completely legal financial solution in Uttar Pradesh. It operates under the guidelines of the Reserve Bank of India (RBI) and the Indian Contract Act."
        }
      },
      {
        "@type": "Question",
        "name": "Can I settle my personal loan in Noida or Ghaziabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. The NCR region has a high volume of personal loan settlements. Banks are open to negotiating settlements here if you have a genuine financial hardship."
        }
      },
      {
        "@type": "Question",
        "name": "How does the UP Regulation of Money Lending Act protect me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This Act mandates that lenders must be registered and cannot charge interest rates higher than prescribed. It provides a legal basis to file complaints against harassment."
        }
      },
      {
        "@type": "Question",
        "name": "Will the UP Police help if recovery agents harass me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The Uttar Pradesh Police, through 'Dial 112', are responsive. Harassment by recovery agents is a criminal offense."
        }
      },
      {
        "@type": "Question",
        "name": "What is the role of Lok Adalat in UP loan settlement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The UP State Legal Services Authority (UPSLSA) organizes Lok Adalats which are effective forums where bank disputes are settled amicably. An award passed here is final."
        }
      },
      {
        "@type": "Question",
        "name": "Does settlement damage my CIBIL score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Settlement reports the account as 'Settled', which impacts your score initially. However, it is better than a 'Default' status and allows you to rebuild your score later."
        }
      },
      {
        "@type": "Question",
        "name": "Where are the Debt Recovery Tribunals (DRT) in UP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Uttar Pradesh has DRT benches in Lucknow and Allahabad (Prayagraj) for handling cases involving loan amounts above ₹20 Lakhs."
        }
      },
      {
        "@type": "Question",
        "name": "Can I settle credit card dues in Kanpur or Varanasi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, credit card settlement is available in all cities including Kanpur and Varanasi. Banks often agree to waive off interest and settle for a reduced principal."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to visit the bank branch for settlement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We handle the entire negotiation process with the bank's regional offices. You do not need to face the branch manager personally."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the settlement process take in UP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The timeline typically varies from 45 days to 90 days depending on the specific bank and case complexity."
        }
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Loan Settlement Services Uttar Pradesh",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1340"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Amit Singh" },
        "datePublished": "2025-12-15",
        "reviewBody": "Great service in Noida. They settled my HDFC loan and stopped the recovery agents from coming to my office.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Priya Sharma" },
        "datePublished": "2026-01-08",
        "reviewBody": "I was very worried about the DRT notice in Lucknow. CredSettle handled it very professionally and got me a settlement.",
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
        "name": "Uttar Pradesh",
        "item": "https://www.credsettle.com/loan-settlement/uttar-pradesh"
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

      {/* Hero Section */}
      <section 
        className="relative text-white pt-32 pb-24 px-4 md:px-8"
        style={{
          background: 'linear-gradient(168deg, #007AFF 0%, #0C2756 100%)',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Uttar Pradesh Loan Settlement Services<br />
            <span className="text-blue-200">Legal Debt Relief in Noida, Lucknow & Beyond</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Stop harassment from recovery agents. Settle personal loans and credit cards legally through Lok Adalat and DRT. Save up to 50% on your debt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Check Eligibility Free
            </Link>
          </div>
        </div>
      </section>

      <UttarPradeshLoanSettlementClient />
      
      <Footer />
    </div>
  );
}
