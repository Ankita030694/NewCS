import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RajasthanLoanSettlementClient from './RajasthanLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Loan Settlement in Rajasthan: Legal Process & Lok Adalat Guide',
  description: 'Struggling with debt in Jaipur, Jodhpur or Kota? Learn how to settle loans legally in Rajasthan. Stop harassment & save up to 50%.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/rajasthan',
  },
  openGraph: {
    title: 'Loan Settlement Services in Rajasthan | Jaipur Debt Relief',
    description: 'Expert legal guide for loan settlement in Rajasthan. Covers Lok Adalat process in Jaipur, Rajasthan Police protection, and DRT info.',
    url: 'https://www.credsettle.com/loan-settlement/rajasthan',
    type: 'article',
    images: [
      {
        url: 'https://www.credsettle.com/hero-bg.png', // Ideally a RJ/Jaipur specific image if available
        width: 1200,
        height: 630,
        alt: 'Loan Settlement Services in Rajasthan',
      },
    ],
  },
  keywords: [
    'loan settlement Rajasthan',
    'debt settlement Jaipur',
    'business loan settlement Kota',
    'credit card settlement Jodhpur',
    'Lok Adalat loan settlement Rajasthan',
    'stop recovery harassment Jaipur',
    'DRT Jaipur'
  ]
};

export default function RajasthanLoanSettlementPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CredSettle Rajasthan",
    "url": "https://www.credsettle.com/loan-settlement/rajasthan",
    "logo": "https://www.credsettle.com/credsettle-logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8800226635",
      "contactType": "customer service",
      "areaServed": "IN-RJ",
      "availableLanguage": ["English", "Hindi"]
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Rajasthan Loan Settlement Guide: Laws, Process & Lok Adalat",
    "description": "Comprehensive guide to settling personal and business loans in Rajasthan. Learn about Lok Adalat process in Jaipur, police help, and settlement procedures.",
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
      "@id": "https://www.credsettle.com/loan-settlement/rajasthan"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is loan settlement legal in Rajasthan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, loan settlement is a completely legal financial process in Rajasthan. It is governed by the Indian Contract Act and RBI guidelines."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Rajasthan Money Lenders Act help me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Act regulates private lending, mandating licenses and capping interest rates, providing a legal defense against unregistered lenders."
        }
      },
      {
        "@type": "Question",
        "name": "Can I settle my business loan in Jaipur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Jaipur has a thriving SME sector, and banks are willing to negotiate settlements on unsecured business loans for genuine cases."
        }
      },
      {
        "@type": "Question",
        "name": "Will the Rajasthan Police help if recovery agents harass me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can file a complaint at your local police station or through the 'RajCop' app if agents use abusive language or threats."
        }
      },
      {
        "@type": "Question",
        "name": "What is the role of Lok Adalat in Rajasthan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The RSLSA organizes Lok Adalats which are 'People's Courts' for amicable and final settlement of disputes."
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
        "name": "Where is the Debt Recovery Tribunal (DRT) for Rajasthan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The DRT for the entire state is located in Jaipur, handling cases for loan defaults exceeding ₹20 Lakhs."
        }
      },
      {
        "@type": "Question",
        "name": "Can I settle credit card dues in Udaipur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We negotiate with banks to waive off high revolving interest and settle credit card dues."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to visit the bank branch personally?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. CredSettle handles the negotiations with the bank's Regional offices, so you don't have to visit personally."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the settlement process take in Rajasthan?",
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
    "name": "Loan Settlement Services Rajasthan",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1150"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Rajesh Meena" },
        "datePublished": "2025-11-15",
        "reviewBody": "Excellent service in Jaipur. They helped me settle my personal loan and handled the legal notices very well.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Anita Singh" },
        "datePublished": "2026-01-05",
        "reviewBody": "I was worried about my business loan in Kota. CredSettle negotiated a good deal with the bank. Highly recommended.",
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
        "name": "Rajasthan",
        "item": "https://www.credsettle.com/loan-settlement/rajasthan"
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
            Rajasthan Loan Settlement Services<br />
            <span className="text-blue-200">Legal Debt Relief in Jaipur, Jodhpur & Beyond</span>
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

      <RajasthanLoanSettlementClient />
      
      <Footer />
    </div>
  );
}