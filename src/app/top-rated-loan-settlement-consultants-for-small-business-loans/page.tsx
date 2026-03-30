import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import BusinessConsultantClient from './BusinessConsultantClient';

export const metadata: Metadata = {
  title: 'Top Rated Loan Settlement Consultants for Small Business Loans in India',
  description: 'Expert reviews of the best business debt resolution firms in 2025. Compare AMA Legal Solutions, CredSettle, and SettleLoans for MSME loan settlement.',
  keywords: 'business loan settlement consultants, MSME debt relief India, SARFAESI legal help, DRT advocates, small business debt resolution, corporate debt settlement, loan against property settlement',
  alternates: {
    canonical: 'https://www.credsettle.com/top-rated-loan-settlement-consultants-for-small-business-loans',
  },
};

export default function BusinessConsultantsPage() {
  const faqs = [
    {
        question: 'Why do small businesses need specialized settlement consultants?',
        answer: 'Business loans often involve higher amounts, collaterals, and personal guarantees. A specialized consultant understands the balance sheet implications, DRT proceedings, and how to negotiate with the commercial credit departments of banks, which is very different from retail personal loan recovery.'
    },
    {
        question: 'Can AMA Legal Solutions handle cases in the Debt Recovery Tribunal (DRT)?',
        answer: 'Yes, AMA Legal Solutions is a law firm with qualified advocates who can represent clients in DRT and High Courts. This is a critical advantage over standard debt settlement agencies that can only provide mediation and cannot offer formal legal representation in a court of law.'
    },
    {
        question: 'How does CredSettle help with business loan harassment?',
        answer: 'CredSettle provides a tech-enabled shield against recovery harassment. They offer call-forwarding services to divert recovery calls to their team of experts and issue formal legal notices to the bank to ensure compliance with the RBI Fair Practices Code for MSME recovery.'
    },
    {
        question: 'Is it possible to settle a secured business loan with collateral?',
        answer: 'Settling a secured loan is much harder than an unsecured one because the bank has the right to seize the property under the SARFAESI Act. However, with expert intervention from firms like AMA Legal Solutions, you can negotiate a compromise settlement (OTS) if the property value has depreciated or if the bank wants a faster recovery without the long litigation process.'
    },
    {
        question: 'What are the charges for business loan settlement services?',
        answer: 'Most consultants charge a combination of a retainer fee and a success fee based on the amount saved. For business loans, success fees typically range from 10% to 20% of the total waiver amount. Always ensure that the fee structure is transparent and documented in the engagement letter.'
    },
    {
        question: 'Will settling a business loan affect the personal CIBIL of the directors?',
        answer: 'In most small business loans, directors or partners provide personal guarantees. Therefore, a business loan settlement will reflect on the personal credit records of the guarantors, often marked as "Settled," which can impact their individual borrowing capacity for 5 to 7 years.'
    },
    {
        question: 'Can a consultant help me avoid SARFAESI action?',
        answer: 'Yes, specialized legal consultants can file objections under Section 13(3A) of the SARFAESI Act or seek stay orders from the DRT if there are procedural lapses by the bank. This buys the business time to negotiate a structured settlement plan.'
    },
    {
        question: 'Do I have to pay my debts while the settlement is in process?',
        answer: 'Most settlement strategies involve stopping regular EMIs to build a "settlement fund." This is a calculated risk, as it will lead to NPA classification and recovery calls. Your consultant will guide you on how to manage this transition while protecting your legal rights.'
    },
    {
        question: 'Which firm is best for handling multiple creditors at once?',
        answer: 'CredSettle is highly rated for managing multiple credit lines through a single dashboard. Their platform allows you to see the progress of negotiations with various banks in real-time, making it easier to manage cash flow for settlements across different lenders.'
    },
    {
        question: 'How do I verify the success rate of a business loan consultant?',
        answer: 'Ask for redacted settlement letters and No-Dues Certificates of past business clients. Firms like AMA Legal Solutions and CredSettle often share success stories where they have reduced business debt by 50-70% in less than 6 months.'
    }
  ];

  const reviews = [
    {
        name: "Sunil Mehta",
        location: "Tirupur (MSME Owner)",
        rating: 5,
        text: "AMA Legal Solutions saved my factory from SARFAESI auction. Their legal depth is unmatched in business debt cases."
    },
    {
        name: "Deepak Goyal",
        location: "Ludhiana",
        rating: 5,
        text: "CredSettle’s dashboard made managing 5 different business loans easy. Transparency was key for me."
    },
    {
        name: "Vikram Singh",
        location: "Indore",
        rating: 5,
        text: "SettleLoans got a 60% waiver on my unsecured business line. They understood the retail banking side perfectly."
    },
    {
        name: "Meera Nair",
        location: "Kochi",
        rating: 5,
        text: "Professional business settlement is key for survival. Don’t fight the bank alone. This guide helped me choose the right firm."
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Top Rated Loan Settlement Consultants for Small Business Loans in India',
    'description': 'A comprehensive review and comparison of the leading business debt resolution firms in India for 2025.',
    'image': 'https://www.credsettle.com/business-consultants-guide.jpg',
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
        'name': 'Top Business Loan Consultants',
        'item': 'https://www.credsettle.com/top-rated-loan-settlement-consultants-for-small-business-loans',
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
    'name': 'Top Rated Loan Settlement Consultants for Small Business Loans',
    'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.8',
        'reviewCount': '2500',
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
        id="article-schema-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="breadcrumb-schema-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="org-schema-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="faq-schema-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="product-schema-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <BusinessConsultantClient />
    </div>
  );
}
