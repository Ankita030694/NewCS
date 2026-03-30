import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GujaratLoanSettlementClient from './GujaratLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Loan Settlement in Gujarat: Legal Process & Lok Adalat Guide',
  description: 'Struggling with debt in Ahmedabad, Surat or Rajkot? Learn how to settle loans legally in Gujarat. Stop harassment using the Money Lenders Act. Save up to 50%.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/gujarat',
  },
  openGraph: {
    title: 'Loan Settlement Services in Gujarat | Ahmedabad Debt Relief',
    description: 'Expert legal guide for loan settlement in Gujarat. Covers Gujarat Money Lenders Act, Lok Adalat process in Ahmedabad/Surat, and police protection.',
    url: 'https://www.credsettle.com/loan-settlement/gujarat',
    type: 'article',
    images: [
      {
        url: 'https://www.credsettle.com/hero-bg.png', // Ideally a GJ/Ahmedabad specific image if available
        width: 1200,
        height: 630,
        alt: 'Loan Settlement Services in Gujarat',
      },
    ],
  },
  keywords: [
    'loan settlement Gujarat',
    'debt settlement Ahmedabad',
    'business loan settlement Surat',
    'credit card settlement Rajkot',
    'Lok Adalat loan settlement Gujarat',
    'Gujarat Money Lenders Act help',
    'stop recovery harassment Vadodara'
  ]
};

export default function GujaratLoanSettlementPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CredSettle Gujarat",
    "url": "https://www.credsettle.com/loan-settlement/gujarat",
    "logo": "https://www.credsettle.com/credsettle-logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8800226635",
      "contactType": "customer service",
      "areaServed": "IN-GJ",
      "availableLanguage": ["English", "Gujarati", "Hindi"]
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Gujarat Loan Settlement Guide: Laws, Process & Lok Adalat",
    "description": "Comprehensive guide to settling personal and business loans in Gujarat. Learn about the Gujarat Money Lenders Act, Lok Adalat process in Ahmedabad, and police help.",
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
      "@id": "https://www.credsettle.com/loan-settlement/gujarat"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is loan settlement legal in Gujarat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, loan settlement is a completely legal financial process in Gujarat. It is governed by the Indian Contract Act and RBI guidelines."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Gujarat Money Lenders Act, 2011 protect me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This Act mandates that no person can carry on the business of money lending without a valid license, empowering borrowers against unregistered financiers."
        }
      },
      {
        "@type": "Question",
        "name": "Can I settle my business loan in Surat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, unsecured business loans can be settled. This is common for businesses facing market fluctuations in Surat’s textile and diamond industries."
        }
      },
      {
        "@type": "Question",
        "name": "Will the Gujarat Police help if recovery agents harass me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The Gujarat Police are proactive. You can file a complaint via the Citizen Portal or at your local station if agents create a nuisance."
        }
      },
      {
        "@type": "Question",
        "name": "What is the role of Lok Adalat in Gujarat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Gujarat State Legal Services Authority (GSLSA) organizes Lok Adalats which are people’s courts where disputes are settled amicably and finally."
        }
      },
      {
        "@type": "Question",
        "name": "Does settlement affect my CIBIL score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the account will be reported as 'Settled', which lowers your score temporarily. However, it stops the 'Default' status."
        }
      },
      {
        "@type": "Question",
        "name": "Where is the Debt Recovery Tribunal (DRT) in Gujarat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Debt Recovery Tribunals (DRT-1 and DRT-2) for the entire state are located in Ahmedabad, handling cases above ₹20 Lakhs."
        }
      },
      {
        "@type": "Question",
        "name": "Can I settle credit card dues in Vadodara?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, credit card settlement is common in Vadodara. Banks often waive off high revolving interest during settlement."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to visit the bank branch in person?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. CredSettle handles negotiations with the bank’s Circle Offices in Ahmedabad or Mumbai."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the settlement process take in Gujarat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The process typically takes 45 to 90 days, depending on the complexity of your case and the bank involved."
        }
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Loan Settlement Services Gujarat",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1420"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Raj Patel" },
        "datePublished": "2025-12-01",
        "reviewBody": "Excellent service in Ahmedabad. Helped me settle my business loan when my factory was struggling. Very professional team.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Mehul Shah" },
        "datePublished": "2026-01-18",
        "reviewBody": "They stopped the harassment from recovery agents in Surat. I am very thankful for their legal support.",
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
        "name": "Gujarat",
        "item": "https://www.credsettle.com/loan-settlement/gujarat"
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
            Gujarat Loan Settlement Services<br />
            <span className="text-blue-200">Legal Debt Relief in Ahmedabad, Surat & Beyond</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Stop harassment using the Gujarat Money Lenders Act. Settle personal & business loans legally through Lok Adalat. Save up to 50% on your debt.
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

      <GujaratLoanSettlementClient />
      
      <Footer />
    </div>
  );
}
