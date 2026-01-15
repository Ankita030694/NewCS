import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SBILoanSettlementClient from '@/app/loan-settlement/sbi/SBILoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SBI Loan Settlement Process 2026 | Settle SBI Credit Card & Personal Loan',
  description: 'Complete guide on State Bank of India (SBI) loan settlement. Learn about SBI OTS schemes 2026, arbitration, and how to settle credit card dues with up to 50% waiver.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/sbi',
  },
  openGraph: {
    title: 'SBI Loan Settlement Process: Save 50% on Dues',
    description: 'Struggling with SBI debt? Our expert legal team helps you settle SBI loans and credit cards. Stop harassment and arbitration today.',
    url: 'https://www.credsettle.com/loan-settlement/sbi',
    type: 'article',
  },
};

export default function SBILoanSettlementPage() {
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
        "name": "SBI Loan Settlement",
        "item": "https://www.credsettle.com/loan-settlement/sbi"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "SBI Loan Settlement Process: The Complete 2026 Guide",
    "description": "Comprehensive guide on how to settle State Bank of India personal loans and credit cards. Learn about OTS schemes, arbitration process, and how to stop recovery agent harassment.",
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
      "@id": "https://www.credsettle.com/loan-settlement/sbi"
    }
  };

  const faqList = [
    {
      question: "What is the SBI loan settlement process?",
      answer: "The SBI loan settlement process allows borrowers to close their loan account by paying a one-time reduced amount, often known as OTS (One Time Settlement). This is applicable when the borrower is unable to repay the full dues due to genuine financial hardship. The process involves proposal submission, negotiation, and receiving a settlement letter."
    },
    {
      question: "What is the SBI OTS Scheme 2026?",
      answer: "SBI periodically introduces One Time Settlement (OTS) schemes like 'Rinn Samadhan' to help borrowers clear NPAs. These schemes offer waivers on interest and penalties, allowing you to settle the principal amount at a discounted rate."
    },
    {
      question: "Can I settle my SBI credit card dues?",
      answer: "Yes, SBI credit card settlement is possible. If your card payments are overdue by more than 90 days and the account is NPA, you can negotiate for a settlement. This helps you exit the debt trap of high revolving interest rates."
    },
    {
      question: "Does SBI seek arbitration for loan default?",
      answer: "Yes, SBI often initiates arbitration proceedings against defaulters as per the arbitration clause in the loan agreement. Receiving an arbitration notice means the bank is taking legal steps. It is crucial to respond legal or seek a settlement to resolve the matter before a simplified award is passed."
    },
    {
      question: "How much discount can I get in SBI settlement?",
      answer: "The settlement amount depends on the principal outstanding, the age of the NPA, and your financial situation. Typically, discounts range from 30% to 50% of the total claim amount in genuine hardship cases."
    },
    {
      question: "Will settling my SBI loan affect my CIBIL score?",
      answer: "Settling a loan results in the account status being reported as 'Settled' to CIBIL. This lowers your credit score by 50-100 points and remains on your report for 7 years. However, it stops the status from worsening to 'Written Off' or 'Suit Filed'."
    },
    {
      question: "How do I get a No Dues Certificate from SBI?",
      answer: "After you pay the negotiated settlement amount in full, SBI will issue a 'No Dues Certificate' (NDC) or a closure letter. This document confirms that the bank has no further claim on you regarding that loan account."
    },
    {
      question: "Can I apply for a new loan after settling with SBI?",
      answer: "Immediately getting a new unsecured loan or credit card from major banks might be difficult due to the 'Settled' status. However, after a cooling-off period and by rebuilding your credit score using secured cards or small loans, you can become eligible again."
    },
    {
      question: "Do I need a lawyer for SBI loan settlement?",
      answer: "Engaging a settlement expert or legal team like CredSettle is highly recommended, especially if you have received legal notices or arbitration summons. We handle the complex negotiations and ensure the settlement terms are documented correctly to protect you."
    },
    {
      question: "What happens if I ignore SBI recovery agents?",
      answer: "Ignoring recovery agents or legal notices can lead to escalation. SBI may file a civil suit, initiate SARFAESI proceedings (for secured loans), or continue with arbitration. It is better to face the situation and negotiate a settlement."
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
    "name": "SBI Loan Settlement Services by CredSettle",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1850"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Vikram Singh" },
        "datePublished": "2025-12-10",
        "reviewBody": "I had a huge SBI personal loan and lost my job. SBI started arbitration. CredSettle handled the arbitration and settled the loan. Very professional.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Meera Joshi" },
        "datePublished": "2025-11-22",
        "reviewBody": "My husband's SBI credit card debt was spiraling. We settled it for 40% of the value thanks to the CredSettle team.",
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
            SBI Loan Settlement Process<br />
            <span className="text-blue-300">Complete 2026 Guide</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Expert legal help to settle your State Bank of India Personal Loan & Credit Card debt. Stop arbitration and save up to 50% with our RBI compliant settlement process.
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
      <SBILoanSettlementClient />
      
      <Footer />
    </div>
  );
}
