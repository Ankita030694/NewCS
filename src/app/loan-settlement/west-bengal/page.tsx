import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WestBengalLoanSettlementClient from './WestBengalLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Loan Settlement in West Bengal: Legal Process & Lok Adalat Guide',
  description: 'Struggling with debt in Kolkata or West Bengal? Learn how to settle loans legally using the Bengal Money Lenders Act. Stop harassment & save 50%.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/west-bengal',
  },
  openGraph: {
    title: 'Loan Settlement Services in West Bengal | Kolkata Debt Relief',
    description: 'Expert legal guide for loan settlement in West Bengal. Covers the Bengal Money Lenders Act, Lok Adalat process in Kolkata, and police protection.',
    url: 'https://www.credsettle.com/loan-settlement/west-bengal',
    type: 'article',
    images: [
      {
        url: 'https://www.credsettle.com/hero-bg.png', // Ideally a WB/Kolkata specific image if available
        width: 1200,
        height: 630,
        alt: 'Loan Settlement Services in West Bengal',
      },
    ],
  },
  keywords: [
    'loan settlement West Bengal',
    'debt settlement Kolkata',
    'personal loan settlement Siliguri',
    'credit card settlement Durgapur',
    'Lok Adalat loan settlement Kolkata',
    'Bengal Money Lenders Act help',
    'stop recovery harassment Kolkata'
  ]
};

export default function WestBengalLoanSettlementPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CredSettle West Bengal",
    "url": "https://www.credsettle.com/loan-settlement/west-bengal",
    "logo": "https://www.credsettle.com/credsettle-logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8800226635",
      "contactType": "customer service",
      "areaServed": "IN-WB",
      "availableLanguage": ["English", "Bengali", "Hindi"]
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "West Bengal Loan Settlement Guide: Laws, Process & Lok Adalat",
    "description": "Comprehensive guide to settling personal loans and credit cards in West Bengal. Learn about the Bengal Money Lenders Act, Lok Adalat process in Kolkata, and police help.",
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
      "@id": "https://www.credsettle.com/loan-settlement/west-bengal"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is loan settlement legal in West Bengal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, loan settlement is fully legal in West Bengal. It is a recognized financial mechanism under the Indian Contract Act and RBI guidelines."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Bengal Money-Lenders Act, 1940?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This is a historic act in West Bengal that regulates money lending. A key provision is the rule of 'Damdupat', which restricts the total interest recoverable to not exceed the principal amount."
        }
      },
      {
        "@type": "Question",
        "name": "Can I settle my personal loan in Kolkata?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Whether you are in Salt Lake, Behala, or North Kolkata, personal loan settlement is possible if you have genuine financial hardship."
        }
      },
      {
        "@type": "Question",
        "name": "Will the Kolkata Police help if recovery agents harass me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The Kolkata Police and West Bengal Police are strict about harassment. You can file a complaint with the Detective Department or local police station."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Lok Adalat in West Bengal help?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The West Bengal State Legal Services Authority (WBSLSA) organizes Lok Adalats which act as people's courts. Settlements reached here are final and binding."
        }
      },
      {
        "@type": "Question",
        "name": "Does settlement affect my CIBIL score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the account status will reflect as 'Settled', which temporarily lowers your score. However, this is a strategic move to stop further damage."
        }
      },
      {
        "@type": "Question",
        "name": "Where are the Debt Recovery Tribunals (DRT) in Kolkata?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kolkata has three DRT benches (DRT-1, DRT-2, DRT-3) which handle cases for loan amounts exceeding ₹20 Lakhs."
        }
      },
      {
        "@type": "Question",
        "name": "Can I settle credit card dues in Siliguri?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, credit card settlement is common in commercial hubs like Siliguri. We can help you negotiate a waiver on interest charges."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to visit the bank branch in person?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. CredSettle handles negotiations with the bank's regional or zonal offices in Kolkata, so you don't have to face the branch manager."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the process take in West Bengal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The settlement process typically takes between 45 to 90 days depending on the bank's internal approval hierarchy."
        }
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Loan Settlement Services West Bengal",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1080"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Debasis Roy" },
        "datePublished": "2025-11-25",
        "reviewBody": "Excellent service in Kolkata. They helped me settle my personal loan and the legal team was very knowledgeable about local laws.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sneha Banerjee" },
        "datePublished": "2026-01-12",
        "reviewBody": "I was harassed by agents. CredSettle stopped the calls and helped me close the loan through Lok Adalat.",
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
        "name": "West Bengal",
        "item": "https://www.credsettle.com/loan-settlement/west-bengal"
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
            West Bengal Loan Settlement Services<br />
            <span className="text-blue-200">Legal Debt Relief in Kolkata & Beyond</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Stop harassment using the Bengal Money Lenders Act. Settle personal loans and credit cards legally through Lok Adalat. Save up to 50% on your debt.
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

      <WestBengalLoanSettlementClient />
      
      <Footer />
    </div>
  );
}