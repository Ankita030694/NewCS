import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ICICILoanSettlementClient from './ICICILoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ICICI Loan Settlement Process 2026 | Settle Credit Card & Personal Loan',
  description: 'Expert guide on ICICI Bank loan settlement. Learn how to settle ICICI personal loan and credit card dues with up to 50% waiver. Stop harassment now.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/icici',
  },
  openGraph: {
    title: 'ICICI Loan Settlement: Save 50% on Outstanding Dues',
    description: 'Struggling with ICICI debt? Our expert legal team helps you settle ICICI loans and credit cards legally. Stop recovery harassment today.',
    url: 'https://www.credsettle.com/loan-settlement/icici',
    type: 'article',
    images: [
      {
        url: 'https://www.credsettle.com/og-icici-settlement.jpg',
        width: 1200,
        height: 630,
        alt: 'ICICI Loan Settlement Guide',
      },
    ],
  },
};

export default function ICICILoanSettlementPage() {
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
      "contactType": "customer service"
    }
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
        "name": "ICICI Loan Settlement",
        "item": "https://www.credsettle.com/loan-settlement/icici"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "ICICI Loan Settlement Process: The Complete 2026 Guide",
    "description": "Comprehensive guide on how to settle ICICI Bank personal loans and credit cards. Learn about the process, benefits, and how to stop recovery agent harassment.",
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
    "datePublished": "2026-01-15",
    "dateModified": "2026-01-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.credsettle.com/loan-settlement/icici"
    }
  };

  const faqList = [
    {
      question: "What is the typical discount offered in ICICI loan settlement?",
      answer: "While every case is unique, we typically see settlements closing between 40% to 60% of the principal outstanding amount. For older defaults (more than 2 years), the waivers can sometimes be even higher."
    },
    {
      question: "Can I settle my ICICI Amazon Pay Credit Card?",
      answer: "Yes, absolutely. The Amazon Pay ICICI Credit Card is essentially an unsecured credit line provided by the bank and can be settled just like any other credit card debt."
    },
    {
      question: "Will legal action stop once I start the settlement process?",
      answer: "Initiating a dialogue for settlement usually puts a pause on aggressive legal steps like arbitration or civil suits. Banks prefer receiving a lump sum payment over spending money on lawyers."
    },
    {
      question: "How long does ICICI Bank take to issue a settlement letter?",
      answer: "Once a verbal agreement on the amount is reached, it usually takes 3 to 7 working days for the formal settlement letter to be generated from their central system."
    },
    {
      question: "Do I need to visit the branch for settlement?",
      answer: "In most cases managed by CredSettle, you do not need to visit the branch. We handle the negotiations remotely or through our network."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ICICI Loan Settlement Services by CredSettle",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "840"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Vikas Malhotra" },
        "datePublished": "2025-12-10",
        "reviewBody": "My ICICI credit card limit was 3 Lakhs but due to late fees it became 7 Lakhs. CredSettle negotiated it down to 2.5 Lakhs. Very professional service.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sneha R." },
        "datePublished": "2025-12-28",
        "reviewBody": "Stressed with recovery calls from ICICI. The team handled everything. I just paid the settlement amount and got my NOC.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Script id="org-schema-icici" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema-icici" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema-icici" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema-icici" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema-icici" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
            ICICI Loan Settlement Process<br />
            <span className="text-blue-300">Complete 2026 Guide</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Expert legal help to settle your ICICI Personal Loan & Credit Card debt. Stop harassment and save up to 50% with our RBI compliant settlement process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Settlement
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <ICICILoanSettlementClient />
      
      <Footer />
    </div>
  );
}
