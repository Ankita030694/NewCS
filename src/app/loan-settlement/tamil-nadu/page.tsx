import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TamilNaduLoanSettlementClient from './TamilNaduLoanSettlementClient';

export const metadata: Metadata = {
  title: 'Loan Settlement in Tamil Nadu: Process, Laws & Lok Adalat Guide',
  description: 'Struggling with debt in Chennai or Tamil Nadu? Learn how to settle loans legally using the Kandhu Vatti Act & Lok Adalat. Stop harassment & save 50%.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/tamil-nadu',
  },
  openGraph: {
    title: 'Loan Settlement Services in Tamil Nadu | Chennai Debt Relief',
    description: 'Expert legal guide for loan settlement in Tamil Nadu. Covers the Kandhu Vatti Act, Lok Adalat process in Chennai, and police protection against harassment.',
    url: 'https://www.credsettle.com/loan-settlement/tamil-nadu',
    type: 'article',
    images: [
      {
        url: 'https://www.credsettle.com/hero-bg.png', // Ideally a TN specific image if available
        width: 1200,
        height: 630,
        alt: 'Loan Settlement Services in Tamil Nadu',
      },
    ],
  },
  keywords: [
    'loan settlement Tamil Nadu',
    'debt settlement Chennai',
    'credit card settlement Coimbatore',
    'Kandhu Vatti Act help',
    'Lok Adalat loan settlement Tamil Nadu',
    'personal loan settlement Madurai',
    'stop recovery harassment Chennai'
  ]
};

export default function TamilNaduLoanSettlementPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CredSettle Tamil Nadu",
    "url": "https://www.credsettle.com/loan-settlement/tamil-nadu",
    "logo": "https://www.credsettle.com/credsettle-logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8800226635",
      "contactType": "customer service",
      "areaServed": "IN-TN",
      "availableLanguage": ["English", "Tamil"]
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tamil Nadu Loan Settlement Guide: Laws, Process & Lok Adalat",
    "description": "Comprehensive guide to settling personal loans and credit cards in Tamil Nadu. Learn about the Kandhu Vatti Act, Lok Adalat process in Chennai, and how to stop harassment legally.",
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
      "@id": "https://www.credsettle.com/loan-settlement/tamil-nadu"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is loan settlement legal in Tamil Nadu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, loan settlement is a fully legal financial process in Tamil Nadu. It is governed by the Indian Contract Act and RBI guidelines. Banks in Chennai, Coimbatore, and across the state are authorized to negotiate settlements."
        }
      },
      {
        "@type": "Question",
        "name": "What is the 'Kandhu Vatti' Act?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Tamil Nadu Prohibition of Charging Exorbitant Interest Act (Kandhu Vatti Act) strictly prohibits lenders from charging interest rates that exceed government norms and criminalizes harassment."
        }
      },
      {
        "@type": "Question",
        "name": "Can I settle my personal loan in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Whether you live in T. Nagar, Anna Nagar, or OMR, you can settle unsecured personal loans if you have faced genuine financial hardship."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Lok Adalat in Tamil Nadu help?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Tamil Nadu State Legal Services Authority (TNSLSA) organizes Lok Adalats which are fast-track courts. Settlements reached here are final, binding, and act as a civil court decree."
        }
      },
      {
        "@type": "Question",
        "name": "Will the Tamil Nadu Police help if I am harassed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The Tamil Nadu Police are very active against usury and harassment. You can file complaints via the TN Police Citizen Portal or at local stations."
        }
      },
      {
        "@type": "Question",
        "name": "Does settlement affect my CIBIL score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the loan status will change to 'Settled', which temporarily lowers your score. However, this is better than a 'Write Off' status and you can rebuild your score over time."
        }
      },
      {
        "@type": "Question",
        "name": "Can I settle credit card dues in Coimbatore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, credit card debt is the most common type of settlement in industrial hubs like Coimbatore and Tirupur. Banks often waive off high-interest charges during settlement."
        }
      },
      {
        "@type": "Question",
        "name": "What are the Debt Recovery Tribunals (DRT) in TN?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For larger loans (usually above ₹20 Lakhs), banks approach the DRT. Tamil Nadu has DRT benches in Chennai, Madurai, and Coimbatore."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to visit the bank branch personally?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Once you hire CredSettle, we handle the communication with the bank’s central processing units, so you don’t have to face local branch managers."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the settlement process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Tamil Nadu, the process typically takes 45 to 90 days, depending on the bank’s internal approval speed."
        }
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Loan Settlement Services Tamil Nadu",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1150"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Senthil Kumar" },
        "datePublished": "2025-11-20",
        "reviewBody": "CredSettle helped me settle my credit card dues in Chennai. The team knew exactly how to handle the bank and stopped the calls.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Lakshmi Narayanan" },
        "datePublished": "2026-01-10",
        "reviewBody": "Very knowledgeable about the Lok Adalat process in Madurai. Professional service.",
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
        "name": "Tamil Nadu",
        "item": "https://www.credsettle.com/loan-settlement/tamil-nadu"
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

      <TamilNaduLoanSettlementClient />
      
      <Footer />
    </div>
  );
}
