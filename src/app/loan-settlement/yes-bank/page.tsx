import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import YesBankLoanSettlementClient from './YesBankLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Yes Bank Loan Settlement Process 2026 | Guide',
  description: 'Expert guide on Yes Bank loan settlement. Learn how to settle Yes Bank personal loan and credit card dues with up to 50% waiver. Stop harassment and get legal protection.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/yes-bank',
  },
  openGraph: {
    title: 'Yes Bank Loan Settlement Process: Save 50% on Dues',
    description: 'Struggling with Yes Bank debt? Our expert legal team helps you settle Yes Bank loans and credit cards. Stop harassment today.',
    url: 'https://www.credsettle.com/loan-settlement/yes-bank',
    type: 'article',
  },
};

export default function YesBankLoanSettlementPage() {
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
        "name": "Yes Bank Loan Settlement",
        "item": "https://www.credsettle.com/loan-settlement/yes-bank"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Yes Bank Loan Settlement Process: The Complete 2026 Guide",
    "description": "Comprehensive guide on how to settle Yes Bank personal loans and credit cards. Learn about the process, benefits, and how to stop recovery agent harassment.",
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
      "@id": "https://www.credsettle.com/loan-settlement/yes-bank"
    }
  };

  const faqList = [
    {
      question: "What is the Yes Bank loan settlement process?",
      answer: "The Yes Bank loan settlement process is a mechanism to close your outstanding loan or credit card dues by paying a mutually agreed one time amount. This is typically lower than the total outstanding. It is available for borrowers who are genuinely unable to repay due to financial constraints like job loss or medical emergencies."
    },
    {
      question: "Can I settle my Yes Bank credit card dues?",
      answer: "Yes, Yes Bank credit card settlement is possible. If you have defaulted on your credit card payments for more than 90 days, you can approach the bank for a settlement. This will allow you to clear the debt for a reduced amount compared to the total bill including late fees and interest."
    },
    {
      question: "Will loan settlement remove the Yes Bank loan from my CIBIL?",
      answer: "No, the loan will not be removed. Instead, the status will be updated to 'Settled'. This indicates that you have paid off the debt but not the full amount originally owed. While this stops the accumulation of overdues, it does impact your credit score negatively for a few years."
    },
    {
      question: "How much can I save with Yes Bank loan settlement?",
      answer: "The savings depend on the severity of your financial condition and the duration of the default. Generally, borrowers can expect a waiver of 30% to 50% on the total outstanding amount. In some cases involving very old NPA accounts, the waiver could be higher."
    },
    {
      question: "Do I need to visit the Yes Bank branch for settlement?",
      answer: "Not necessarily. If you hire a professional settlement agency like CredSettle, we handle all the communication and negotiations with the bank's central settlement team. You may only need to visit for the final payment or to collect the No Dues Certificate if required, though many processes are now digital."
    },
    {
      question: "Is Yes Bank loan settlement legal?",
      answer: "Yes, it is completely legal. It is a provision allowed by the RBI for banks to clean up their balance sheets by recovering a portion of bad loans (NPAs) rather than writing them off completely. It is a formal contract between you and the bank."
    },
    {
      question: "Can Yes Bank seize my property if I don't settle?",
      answer: "For unsecured loans like personal loans and credit cards, the bank cannot directly seize your property without a court order. However, they can file a civil suit or initiate arbitration. Settlement is a good way to avoid these legal complications."
    },
    {
      question: "How long does the settlement process take?",
      answer: "The timeline varies from case to case. Typically, once the negotiation starts, it can take anywhere from 15 to 45 days to reach an agreement and receive the settlement letter. The payment is then made as per the agreed schedule."
    },
    {
      question: "What happens if I miss my settlement payment?",
      answer: "If you miss the payment date mentioned in the settlement letter, the settlement offer effectively becomes null and void. The bank may then revert to claiming the full outstanding amount with interest. It is crucial to pay on time once the deal is struck."
    },
    {
      question: "How do I start the settlement process with CredSettle?",
      answer: "You can start by registering on our website or calling our helpline. Our team will evaluate your case, check your eligibility, and then enroll you in our settlement program to begin negotiations with Yes Bank."
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
    "name": "Yes Bank Loan Settlement Services by CredSettle",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "850"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Vikram S." },
        "datePublished": "2025-11-20",
        "reviewBody": "I was stuck with a Yes Bank credit card debt of 5.5 Lakhs after losing my job. CredSettle team helped me settle it for just 2.2 Lakhs. The relief cannot be described in words.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Neha G." },
        "datePublished": "2025-12-10",
        "reviewBody": "Professional and supportive. They handled the bank officials who were bothering my family. Thanks to CredSettle, I am finally debt free.",
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
            Yes Bank Loan Settlement Process<br />
            <span className="text-blue-300">Complete 2026 Guide</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Expert legal help to settle your Yes Bank Personal Loan & Credit Card debt. Stop harassment and save up to 50% with our RBI compliant settlement process.
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

      <YesBankLoanSettlementClient />
      
      <Footer />
    </div>
  );
}
