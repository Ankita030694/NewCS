import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DelhiLoanSettlementClient from './DelhiLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Loan Settlement in Delhi NCR: Legal Process & Lok Adalat Guide',
  description: 'Struggling with debt in Delhi, Noida or Gurgaon? Learn how to legally settle loans in Delhi NCR. Stop harassment, save up to 50% & avoid legal action.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/delhi',
  },
  openGraph: {
    title: 'Loan Settlement Services in Delhi: Stop Harassment & Settle Debt',
    description: 'Expert legal guide for loan settlement in Delhi. Covers Lok Adalat process, anti-harassment laws, and police protection from recovery agents.',
    url: 'https://www.credsettle.com/loan-settlement/delhi',
    type: 'article',
    images: [
      {
        url: 'https://www.credsettle.com/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'Loan Settlement Services in Delhi',
      },
    ],
  },
};

export default function DelhiLoanSettlementPage() {
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
    "headline": "Delhi Loan Settlement Guide: Legal Process & Lok Adalat",
    "description": "Comprehensive guide on how to settle personal loans and credit cards in Delhi NCR using legal channels like Lok Adalat. Learn about borrower rights and anti-harassment laws.",
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
      "@id": "https://www.credsettle.com/loan-settlement/delhi"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is loan settlement legal in Delhi NCR?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, absolutely. Loan settlement is a completely legal financial process in Delhi and across India. It is governed by the Indian Contract Act and facilitated under RBI guidelines."
        }
      },
      {
        "@type": "Question",
        "name": "How can I stop recovery agents from visiting my home in Delhi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You have legal rights to stop harassment. If agents are visiting without notice or behaving rudely, you can file a complaint with the Delhi Police."
        }
      },
      {
        "@type": "Question",
        "name": "Which courts in Delhi handle loan settlement cases?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most loan settlements are handled out of court or through the Lok Adalat system organized by the Delhi State Legal Services Authority (DSLSA). For larger loans above 20 Lakhs, the Debt Recovery Tribunals (DRT) handle cases."
        }
      },
      {
        "@type": "Question",
        "name": "Can I settle my credit card debt in full?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, credit card debt is unsecured and is one of the most common types of debt settled. Banks are often willing to accept 30% to 50% of the outstanding amount as a full and final settlement."
        }
      },
      {
        "@type": "Question",
        "name": "Will I go to jail if I don’t pay my personal loan in Delhi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, defaulting on a personal loan is a civil matter, not a criminal offense. You cannot be arrested for non-payment of a personal loan."
        }
      },
      {
        "@type": "Question",
        "name": "What is the role of the RBI Ombudsman in Delhi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The RBI Ombudsman acts as a senior grievance redressal authority. If a bank in Delhi is harassing you and doesn’t resolve your complaint within 30 days, you can escalate the matter to the RBI Ombudsman."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the entire settlement process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The timeline varies but typically takes between 2 weeks to 4 months, depending on the bank’s internal approvals and negotiations."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to be present physically for the settlement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In most cases, no. Your lawyer can handle all negotiations. You might only need to be present if the settlement is being finalized in a Lok Adalat session."
        }
      },
      {
        "@type": "Question",
        "name": "What documents do I need to start the process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You primarily need loan statements, bank notices, ID proof (PAN/Aadhar), and documents supporting your financial hardship."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help if I live in Noida or Gurgaon but work in Delhi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we cover the entire Delhi NCR region including Noida, Gurgaon, Ghaziabad, and Faridabad."
        }
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Loan Settlement Services Delhi",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1240"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Rahul Sharma" },
        "datePublished": "2025-11-15",
        "reviewBody": "Best service in Delhi. They helped me settle my ICICI credit card which was overdue for 2 years. Very professional team.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Priya Singh" },
        "datePublished": "2026-01-10",
        "reviewBody": "I was getting harassed daily by agents. CredSettle team stopped the calls within 48 hours. Highly recommended.",
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
        "name": "Delhi",
        "item": "https://www.credsettle.com/loan-settlement/delhi"
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
            Delhi Loan Settlement Services<br />
            <span className="text-blue-200">Legal Debt Relief in Delhi NCR</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Stop harassment and settle your personal loans & credit cards legally. Expert support for Lok Adalat settlements and DRT cases in New Delhi.
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

      <DelhiLoanSettlementClient />
      
      <Footer />
    </div>
  );
}
