import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IndusIndLoanSettlementClient from './IndusIndLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IndusInd Bank Loan Settlement Process | OTS Scheme 2026 Guide',
  description: 'Complete guide to IndusInd Bank loan settlement. Learn how to settle credit card & personal loan dues with up to 50% waiver. Stop recovery agent harassment.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/indusind',
  },
  openGraph: {
    title: 'IndusInd Bank Loan Settlement: Save 50% on Dues',
    description: 'Struggling with IndusInd Bank debt? Our expert legal team helps you settle loans and credit cards. Stop harassment today.',
    url: 'https://www.credsettle.com/loan-settlement/indusind',
    type: 'article',
  },
};

export default function IndusIndLoanSettlementPage() {
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
        "name": "IndusInd Bank Settlement",
        "item": "https://www.credsettle.com/loan-settlement/indusind"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "IndusInd Bank Loan Settlement Process: 2026 Guide",
    "description": "Comprehensive guide on how to settle IndusInd Bank personal loans and credit cards. Learn about the process, benefits, and how to stop recovery agent harassment.",
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
      "@id": "https://www.credsettle.com/loan-settlement/indusind"
    }
  };

  const faqList = [
    {
      question: "How does IndusInd Bank loan settlement work?",
      answer: "IndusInd Bank settlement is a legal process where the bank agrees to close your loan account for a reduced amount. This typically happens when a borrower has defaulted for over 90 days and proves they genuinely cannot repay the full amount. You pay a lump sum settlement value, and the bank waives the remaining principal, interest, and penalties."
    },
    {
      question: "Can I settle my IndusInd Bank credit card dues?",
      answer: "Yes, IndusInd Bank credit card settlement is very common. If you have huge outstanding bills that you cannot pay due to financial crisis, you can approach the bank for a One Time Settlement (OTS). This allows you to clear the debt at a significantly lower amount than the total bill."
    },
    {
      question: "What is the minimum settlement amount IndusInd accepts?",
      answer: "There is no fixed percentage as every case is different. However, banks usually try to recover at least the principal amount. In severe hardship cases, settlements can range from 30% to 50% of the total outstanding amount, depending on negotiation."
    },
    {
      question: "Will settlement remove the loan from my CIBIL report?",
      answer: "No, the loan will not be removed. Instead, its status will change from 'Active' or 'Overdue' to 'Settled'. This indicates that the loan was closed by paying less than the due amount. It will remain on your credit report for about 7 years."
    },
    {
      question: "Is it better to settle or pay in full?",
      answer: "Paying in full is always better for your credit score. Limits your ability to get future loans involves getting a 'Closed' status which is positive. Settlement gets you a 'Settled' status which is negative. Only choose settlement if you absolutely cannot pay the full amount and are facing harassment or legal action."
    },
    {
      question: "Can IndusInd Bank file a case after settlement?",
      answer: "Once the settlement amount is paid in full and you receive the official Settlement Letter and No Dues Certificate (NDC), the bank cannot file a case for the same loan. The account is legally closed. Ensure you keep these documents safe."
    },
    {
      question: "How long does the IndusInd settlement process take?",
      answer: "The timeline varies but typically takes 2 to 4 weeks. It involves submitting a request, the bank evaluating your financial status, negotiations on the amount, and finally generating the settlement letter."
    },
    {
      question: "Do I need a lawyer for IndusInd loan settlement?",
      answer: "It is not mandatory by law, but it is highly recommended. Banks have professional recovery teams. Having a legal expert or a company like CredSettle on your side levels the playing field, stops harassment, and ensures you get the best possible discount without legal loopholes."
    },
    {
      question: "What happens if I miss the settlement payment date?",
      answer: "The settlement agreement is valid only until the due date mentioned in the letter. If you miss the payment, the settlement offer stands cancelled. The bank may then demand the full original amount with added interest. Always pay on time once agreed."
    },
    {
      question: "Are there any hidden charges in settlement?",
      answer: "When dealing directly with the bank, there are usually no hidden charges, but the negotiated amount is final. If you hire a settlement firm like CredSettle, there will be a service fee which is a percentage of the savings we get you."
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
    "name": "IndusInd Bank Settlement Services by CredSettle",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "950"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Vikram Singh" },
        "datePublished": "2025-10-20",
        "reviewBody": "My IndusInd credit card bill was huge. These guys helped me settle it for just 40% of the total amount. Very professional.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Meera K." },
        "datePublished": "2025-11-05",
        "reviewBody": "I was getting threatening calls daily. CredSettle took over and the calls stopped. I am finally debt free now.",
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
            IndusInd Bank Loan Settlement<br />
            <span className="text-blue-300">Complete OTS Process Guide</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Expert legal help to settle your IndusInd Personal Loan & Credit Card debt. Stop harassment and save up to 50% with our RBI compliant settlement process.
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
      <IndusIndLoanSettlementClient />
      
      <Footer />
    </div>
  );
}
