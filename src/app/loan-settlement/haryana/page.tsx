import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HaryanaLoanSettlementClient from './HaryanaLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Loan Settlement in Haryana: Legal Process & Lok Adalat Guide',
  description: 'Struggling with debt in Gurugram, Faridabad or Panipat? Learn how to settle loans legally in Haryana. Stop harassment & save up to 50%.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/haryana',
  },
  openGraph: {
    title: 'Loan Settlement Services in Haryana | Gurugram Debt Relief',
    description: 'Expert legal guide for loan settlement in Haryana. Covers Lok Adalat process in Gurugram, Haryana Police protection, and DRT Chandigarh.',
    url: 'https://www.credsettle.com/loan-settlement/haryana',
    type: 'article',
    images: [
      {
        url: 'https://www.credsettle.com/hero-bg.png', // Ideally a HR/Gurugram specific image if available
        width: 1200,
        height: 630,
        alt: 'Loan Settlement Services in Haryana',
      },
    ],
  },
  keywords: [
    'loan settlement Haryana',
    'debt settlement Gurugram',
    'business loan settlement Faridabad',
    'credit card settlement Panipat',
    'Lok Adalat loan settlement Haryana',
    'stop recovery harassment Gurugram',
    'DRT Chandigarh'
  ]
};

export default function HaryanaLoanSettlementPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CredSettle Haryana",
    "url": "https://www.credsettle.com/loan-settlement/haryana",
    "logo": "https://www.credsettle.com/credsettle-logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8800226635",
      "contactType": "customer service",
      "areaServed": "IN-HR",
      "availableLanguage": ["English", "Hindi"]
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Haryana Loan Settlement Guide: Laws, Process & Lok Adalat",
    "description": "Comprehensive guide to settling personal and business loans in Haryana. Learn about Lok Adalat process in Gurugram, police help, and settlement procedures.",
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
      "@id": "https://www.credsettle.com/loan-settlement/haryana"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is loan settlement legal in Haryana?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, loan settlement is a completely legal financial process in Haryana. It is governed by the Indian Contract Act and RBI guidelines."
        }
      },
      {
        "@type": "Question",
        "name": "Can I settle my personal loan in Gurugram?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Gurugram sees a high volume of personal loan settlements. Banks are willing to negotiate one-time settlements for genuine hardship."
        }
      },
      {
        "@type": "Question",
        "name": "Will the Haryana Police help if recovery agents harass me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The Haryana Police, particularly in NCR, are very strict. You can file a complaint at your local station or via 'Dial 112'."
        }
      },
      {
        "@type": "Question",
        "name": "What is the role of Lok Adalat in Haryana?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Haryana State Legal Services Authority (HALSA) organizes Lok Adalats which are effective forums for settling banking disputes amicably and finally."
        }
      },
      {
        "@type": "Question",
        "name": "Does settlement affect my CIBIL score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the account status changes to 'Settled', temporarily lowering your score. However, this is better than 'Default'."
        }
      },
      {
        "@type": "Question",
        "name": "Where is the Debt Recovery Tribunal (DRT) for Haryana?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cases for loan defaults above ₹20 Lakhs in Haryana are handled by the Debt Recovery Tribunals (DRT) located in Chandigarh."
        }
      },
      {
        "@type": "Question",
        "name": "Can I settle industrial loans in Faridabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We specialize in settling MSME and business loans in industrial hubs like Faridabad and Panipat."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to visit the bank branch personally?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. CredSettle handles the negotiations with the bank’s Regional offices, often in Delhi or Chandigarh."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the settlement process take in Haryana?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The process generally takes between 45 to 90 days, depending on the bank and case complexity."
        }
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Loan Settlement Services Haryana",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1280"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Vikram Singh" },
        "datePublished": "2025-12-10",
        "reviewBody": "Great service in Gurugram. They helped me settle my credit card debt and stopped the calls from recovery agents.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Rakesh Sharma" },
        "datePublished": "2026-01-14",
        "reviewBody": "I settled my business loan in Faridabad with their help. The process was smooth and the team is very professional.",
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
        "name": "Haryana",
        "item": "https://www.credsettle.com/loan-settlement/haryana"
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
            Haryana Loan Settlement Services<br />
            <span className="text-blue-200">Legal Debt Relief in Gurugram, Faridabad & Beyond</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Stop harassment from recovery agents. Settle personal & business loans legally through Lok Adalat. Save up to 50% on your debt.
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

      <HaryanaLoanSettlementClient />
      
      <Footer />
    </div>
  );
}
