import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import CompareProgramsClient from './CompareProgramsClient';

export const metadata: Metadata = {
  title: 'Compare Debt Management vs. Settlement Programs in India 2025',
  description: 'A comprehensive comparison of Debt Management (DMP) and Debt Settlement (OTS). Learn about CIBIL impact, interest math, and which path to debt freedom is right for you.',
  keywords: 'debt management vs debt settlement, compare debt relief India, DMP vs OTS, credit card debt relief, RBI settlement rules 2025, debt consolidation India, personal loan debt resolution',
  alternates: {
    canonical: 'https://www.credsettle.com/compare-different-debt-management-and-settlement-programs-available-to-indian-consumers',
  },
};

export default function CompareProgramsPage() {
  const faqs = [
    {
        question: 'What is the primary difference between Debt Management and Debt Settlement?',
        answer: 'Debt Management (DMP) focuses on repaying 100% of the principal with reduced interest and extended timelines. Debt Settlement (OTS) aims to pay only a fraction of the total debt (often 30-50%) in exchange for immediate closure and a "Settled" remark on the credit report.'
    },
    {
        question: 'How does a Debt Management Program affect my CIBIL score?',
        answer: 'A DMP is generally credit-neutral or slightly positive over the long term. Since you are paying back the full principal, banks may not mark you as a defaulter, and your score often recovers as your debt-to-income ratio improves.'
    },
    {
        question: 'Is Debt Settlement legal in India for 2025?',
        answer: 'Yes, Debt Settlement is a recognized commercial compromise under RBI guidelines. Banks use it to recover funds from "Doubtful" or "Loss" assets. It is a legal way to exit a debt trap when genuine financial hardship can be proven.'
    },
    {
        question: 'Should I choose Amalegal Solutions for a standard credit card debt?',
        answer: 'AMA Legal Solutions is ideal if you are facing severe legal harassment, SARFAESI notices, or court cases. For standard credit card settlements without active litigation, a tech-platform like CredSettle might be more efficient, though AMA provides the highest level of legal "Shield."'
    },
    {
        question: 'Can I switch from a Debt Management plan to a Settlement plan?',
        answer: 'Switching is possible but complex. If you start a DMP and find that your income has dropped further, you may stop the program and pursue a settlement. However, any benefits like reduced interest rates from the DMP will be lost, and the original principal will be due.'
    },
    {
        question: 'How long do these programs usually take to complete?',
        answer: 'DMPs typically last 36 to 60 months as you pay in small installments. Debt Settlement is much faster, often concluding in 3 to 12 months as you accumulate a lump sum for the final one-time payment.'
    },
    {
        question: 'Are there any tax implications for the amount waived in a settlement?',
        answer: 'In India, the waived amount in a personal debt settlement is generally not considered taxable income for individuals. However, for businesses, it may have accounting implications that should be discussed with a chartered accountant.'
    },
    {
        question: 'Will creditors stop calling me once I join a program?',
        answer: 'Professional firms like CredSettle and AMA Legal Solutions provide an "intervening" service where they notify creditors to route all communication through them. While this significantly reduces harassment, some automated system-generated calls may continue for a period.'
    },
    {
        question: 'Can I apply for a new loan after completing a settlement?',
        answer: 'You will usually face a "Cooling-off Period" of 12 to 24 months before most major banks consider your application. Rebuilding your score with a "Secured Credit Card" or a "Credit Builder Loan" is essential during this time.'
    },
    {
        question: 'What happens if I default during a Debt Management Program?',
        answer: 'If you fail to make payments in a DMP, the program is cancelled, and you return to your original debt status with all accrued interest and penalties. This is why it is critical to choose a monthly payment that is truly affordable.'
    }
  ];

  const reviews = [
    {
        name: "Sameer S.",
        location: "Jaipur",
        rating: 5,
        text: "Choosing between DMP and Settlement was easy with this guide. I went with a DMP and my interest rates dropped significantly."
    },
    {
        name: "Sneha K.",
        location: "Hyderabad",
        rating: 5,
        text: "Highly recommend CredSettle for comparison. They didn’t push me into one path, but explained the CIBIL impact clearly."
    },
    {
        name: "Vikas J.",
        location: "Chennai",
        rating: 5,
        text: "Settled 12 Lakhs with SettleLoans. Life is back to normal. The 3-month negotiation was stressful but worth it."
    },
    {
        name: "Anjali T.",
        location: "Gurgaon",
        rating: 5,
        text: "AMA Legal’s shield is worth it if recovery agents are at your door. They gave me the confidence to fight back legally."
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Compare Debt Management vs. Settlement Programs in India',
    'description': 'A comprehensive 5000+ word comparison of India’s leading debt relief frameworks updated for 2025 regulations.',
    'image': 'https://www.credsettle.com/compare-programs-guide.jpg',
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
        'name': 'Compare Debt Programs',
        'item': 'https://www.credsettle.com/compare-different-debt-management-and-settlement-programs-available-to-indian-consumers',
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
    'mainEntity': faqs.map(faq => ({
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
    'name': 'Debt Management vs. Settlement Comparison',
    'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.8',
        'reviewCount': '3100',
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
        id="article-schema-compare"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="breadcrumb-schema-compare"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="org-schema-compare"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="faq-schema-compare"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="product-schema-compare"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <CompareProgramsClient />
    </div>
  );
}
