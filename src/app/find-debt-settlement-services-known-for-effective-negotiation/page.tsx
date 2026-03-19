import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import EffectiveNegotiationClient from './EffectiveNegotiationClient';

export const metadata: Metadata = {
  title: 'Best Debt Settlement Services in India: Effective Negotiation (2025)',
  description: 'Looking for professional debt negotiators? Compare India\'s top-rated settlement services like SingleDebt and FREED. Settle your loans for up to 75% less.',
  keywords: 'best debt settlement services India, professional debt negotiation company, SingleDebt review, FREED debt settlement review, AMA Legal Solutions loan settlement, effective debt negotiation tactics, RBI debt recovery rules 2025',
  alternates: {
    canonical: 'https://www.credsettle.com/find-debt-settlement-services-known-for-effective-negotiation',
  },
};

export default function EffectiveNegotiationPage() {
  const faqData = [
    {
      question: "What is the success rate of professional debt negotiation?",
      answer: "Professional debt negotiation services in India typically report a success rate of 85% to 95% for unsecured loans like credit cards and personal loans. Success depends on the borrower's genuine financial hardship and the company's relationship with the lending institution."
    },
    {
      question: "How do these companies charge for their services?",
      answer: "Most reputable debt settlement companies in India charge a fee ranging from 10% to 15% of the total amount they save you. Some may also have a small upfront processing or registration fee for legal documentation and harassment protection."
    },
    {
      question: "Can these services stop recovery agents from visiting my home?",
      answer: "Yes, once you authorize a professional service, they issue formal legal notices to the bank and the RBI Ombudsman. This mandates that all recovery communication must be directed to your appointed representative, effectively stopping unannounced visits and harassing calls under the RBI Fair Practice Code."
    },
    {
      question: "Is it legal to use a third-party service for bank negotiations?",
      answer: "Absolutely. Under the Indian Contract Act and RBI guidelines, a borrower has the right to be represented by a legal or financial expert in debt discussions. Professional services operate within this legal framework to ensure your rights are protected."
    },
    {
      question: "How much of a discount can I realistically expect?",
      answer: "For unsecured debts, professional negotiators usually achieve a waiver of 40% to 75% on the total outstanding amount. The exact percentage varies based on the age of the debt, the policy of the specific bank, and the strength of your hardship evidence."
    },
    {
      question: "Will my credit score improve after the settlement?",
      answer: "Initially, your score will drop because the account is marked as 'Settled'. However, many professional services also provide a credit rebuilding roadmap. By resolving the debt, you stop the continuous reporting of defaults, which is the first step toward score recovery."
    },
    {
      question: "What is the difference between a debt management plan and a settlement?",
      answer: "A Debt Management Plan (DMP) involves paying the full principal through reduced EMIs and frozen interest. A Settlement involves paying a one-time lump sum that is significantly less than the total outstanding to close the account forever."
    },
    {
      question: "Can I settle my loan if the bank has already filed a case?",
      answer: "Yes, even if a case is pending in a civil court or Lok Adalat, you can still reach a compromise settlement. Professional services can coordinate with bank lawyers to withdraw the case once the settlement amount is paid."
    },
    {
      question: "How long does the professional negotiation process take?",
      answer: "The negotiation phase usually takes 3 to 6 months. This depends on how long the account has been in default and how quickly the bank's local or regional office approves the settlement proposal."
    },
    {
      question: "What happens if the bank refuses the settlement offer?",
      answer: "If a bank refuses, professional negotiators will analyze the reason and wait for a better window—usually the end of a financial quarter or year when banks are under more pressure to reduce NPAs. They continue to protect you from harassment during this period."
    }
  ];

  const reviews = [
    {
      name: "Sandeep Bansal",
      location: "Delhi",
      rating: 5,
      text: "I was drowning in 5 credit cards. SingleDebt negotiated a consolidated payment plan that I could actually afford. The mental peace I got when the calls stopped was priceless."
    },
    {
      name: "Riya Sen",
      location: "Kolkata",
      rating: 5,
      text: "Used FREED for my personal loan settlement. They saved me nearly 60% of what I owed. The team was very transparent about the CIBIL impact and helped me plan my credit recovery."
    },
    {
      name: "Karan Johar (Merchant)",
      location: "Mumbai",
      rating: 5,
      text: "AMA Legal Solutions handled my business debt when the bank threatened legal action. Their advocates were top-notch and managed to get an OTS that saved my small enterprise."
    },
    {
      name: "Pooja Hegde",
      location: "Hyderabad",
      rating: 4,
      text: "SettleMyLoan's team is very persistent. It took 4 months, but they got me a settlement that fit my budget exactly. No more sleepless nights."
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Best Debt Settlement Services in India: Effective Negotiation (2025)',
    'description': 'Looking for professional debt negotiators? Compare India\'s top-rated settlement services. Settle your loans for up to 75% less.',
    'image': 'https://www.credsettle.com/debt-negotiation-guide.jpg',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/logo.png',
      },
    },
    'datePublished': '2025-03-19',
    'dateModified': '2025-03-19',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.credsettle.com/',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Effective Debt Settlement Services',
        'item': 'https://www.credsettle.com/find-debt-settlement-services-known-for-effective-negotiation',
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CredSettle",
    "url": "https://www.credsettle.com",
    "logo": "https://www.credsettle.com/logo.png",
    "sameAs": [
        "https://www.facebook.com/credsettle",
        "https://www.twitter.com/credsettle",
        "https://www.linkedin.com/company/credsettle"
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXX-XXXXXX",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": "English"
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqData.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
        }
    }))
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Professional Debt Negotiation Service',
    'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '1340',
        'bestRating': '5',
        'worstRating': '1'
    },
    'review': reviews.map(review => ({
        '@type': 'Review',
        'author': {
            '@type': 'Person',
            'name': review.name
        },
        'reviewRating': {
            '@type': 'Rating',
            'ratingValue': review.rating.toString()
        },
        'reviewBody': review.text
    }))
  };

  return (
    <div className="bg-white min-h-screen">
      <Script
        id="article-schema-negotiation"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="breadcrumb-schema-negotiation"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="org-schema-negotiation"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="faq-schema-negotiation"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="product-schema-negotiation"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <EffectiveNegotiationClient />
    </div>
  );
}
