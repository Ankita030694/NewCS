import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IDFCLoanSettlementClient from './IDFCLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IDFC Loan Settlement Process 2026 | Settle IDFC First Bank Loans',
  description: 'Expert guide on IDFC First Bank loan settlement. Learn how to settle IDFC personal loans and credit card dues. Stop harassment and save up to 50% with legal help.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/idfc',
  },
  openGraph: {
    title: 'IDFC Loan Settlement: Complete Guide 2026',
    description: 'Struggling with IDFC debt? CredSettle helps you negotiate and settle IDFC First Bank loans and credit cards. Stop recovery harassment now.',
    url: 'https://www.credsettle.com/loan-settlement/idfc',
    type: 'article',
  },
};

export default function IDFCLoanSettlementPage() {
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
        "name": "IDFC Loan Settlement",
        "item": "https://www.credsettle.com/loan-settlement/idfc"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "IDFC First Bank Loan Settlement Process: The 2026 Guide",
    "description": "Comprehensive guide on how to settle IDFC First Bank personal loans and credit cards. Learn about the One Time Settlement (OTS) process, eligibility, and benefits.",
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
      "@id": "https://www.credsettle.com/loan-settlement/idfc"
    }
  };

  const faqList = [
    {
      question: "Does IDFC First Bank offer loan settlement?",
      answer: "Yes, IDFC First Bank provides a loan settlement option, often known as a One Time Settlement (OTS). This is typically available for borrowers who have defaulted on their payments for over 90 days due to genuine financial difficulties such as job loss or medical emergencies."
    },
    {
      question: "How do I initiate a settlement with IDFC First Bank?",
      answer: "To initiate a settlement, you or your legal representative must approach the bank's collections or recovery department. You will need to submit a formal settlement propsal explaining your financial hardship and offering a specific settlement amount."
    },
    {
      question: "Can I settle my IDFC FIRST Millennia Credit Card bill?",
      answer: "Absolutely. Credit card debts are unsecured and are among the most common types of debt settled. If you have been unable to pay the minimum due for several months, you can negotiate a settlement for your IDFC credit card dues."
    },
    {
      question: "What is the minimum settlement amount IDFC accepts?",
      answer: "There is no fixed percentage as every case is evaluated individually. However, banks generally aim to recover at least the principal amount. In severe hardship cases, settlements can sometimes be reached for 30% to 50% of the total outstanding dues."
    },
    {
      question: "Will IDFC First Bank take legal action if I don't pay?",
      answer: "If you default on your payments, the bank has the right to initiate legal proceedings, including arbitration or civil suits, to recover the dues. They may also engage recovery agents. Initiating a settlement process is a proactive way to halt these legal actions."
    },
    {
      question: "How does settling with IDFC affect my CIBIL score?",
      answer: "Settling a loan will result in your account status being reported as 'Settled' to credit bureaus. This indicates that the loan was closed for less than the full amount, which will lower your credit score."
    },
    {
      question: "How long does the IDFC loan settlement process take?",
      answer: "The timeline can vary, but typically it takes between 2 to 6 weeks. This depends on the speed of negotiations and the approval process within the bank."
    },
    {
      question: "Do I need a settlement letter from IDFC First Bank?",
      answer: "Yes, this is critical. Never make a payment without a formal settlement letter from the bank. This letter outlines the agreed amount, the deadline for payment, and explicitly states that the account will be closed upon payment."
    },
    {
      question: "Can I get a loan from IDFC again after settlement?",
      answer: "Getting a new unsecured loan from IDFC First Bank immediately after a settlement will be difficult due to the negative impact on your credit score. You will likely need to spend some time rebuilding your credit score."
    },
    {
      question: "What documents are required for IDFC loan settlement?",
      answer: "You will generally need to provide your KYC documents, recent loan statements or credit card bills, and proof of your financial hardship."
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
    "name": "IDFC Loan Settlement Services by CredSettle",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "850"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Amit K." },
        "datePublished": "2025-10-10",
        "reviewBody": "CredSettle helped me settle my IDFC personal loan for less than half the amount. Professional service.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sneha R." },
        "datePublished": "2025-11-22",
        "reviewBody": "The harassment from recovery agents stopped immediately. They handled everything perfectly.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
            IDFC First Bank Loan Settlement<br />
            <span className="text-blue-300">Complete 2026 Guide</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Expert legal help to settle your IDFC First Bank Personal Loan & Credit Card debt. Stop harassment and save up to 50% with our RBI compliant settlement process.
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

      {/* Client Component content (Breadcrumb & Main Content) */}
      <IDFCLoanSettlementClient />
      
      <Footer />
    </div>
  );
}
