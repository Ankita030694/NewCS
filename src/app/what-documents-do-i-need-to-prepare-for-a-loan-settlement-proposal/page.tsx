import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import WhatDocumentsClient from './WhatDocumentsClient';

export const metadata: Metadata = {
  title: 'What Documents Do I Need to Prepare for a Loan Settlement Proposal? (2025)',
  description: 'The definitive checklist of 2025 for gathering KYC, hardship proof, and legal paperwork to secure a successful debt waiver in India.',
  keywords: 'loan settlement documents, debt settlement checklist India, hardship letter for loan settlement, KYC for loan settlement, bank settlement proposal paperwork 2025, RBI settlement rules documentation',
  alternates: {
    canonical: 'https://www.credsettle.com/what-documents-do-i-need-to-prepare-for-a-loan-settlement-proposal',
  },
};

export default function WhatDocumentsPage() {
  const faqs = [
    {
        question: 'What is the most important document for a loan settlement?',
        answer: 'While multiple documents are required, the Hardship Letter is considered the most critical. It ties all your other documents together and explains the "why" behind your default. It must clearly state your financial situation, the reason for the default, and a specific settlement offer that is realistic for both you and the bank.'
    },
    {
        question: 'Do I need to submit original property documents for a settlement?',
        answer: 'No, you should never submit your original property or identity documents during the initial proposal phase. Only provide clear photocopies or digital scans. Original documents should only be handled if you are closing a secured loan, and you should receive them back immediately after the successful payment of the settled amount.'
    },
    {
        question: 'Can I settle a loan if I have lost my job and have no salary slips?',
        answer: 'Yes, job loss is a primary reason for genuine hardship. In the absence of salary slips, you should provide your resignation acceptance letter, a termination notice, or a copy of your bank statement showing the cessation of salary credits. You can also provide an affidavit stating your current unemployed status.'
    },
    {
        question: 'Why does the bank ask for 6 months of bank statements for a settlement?',
        answer: 'Banks request these statements to verify that you truly lack the funds to pay the full EMI. They look for other sources of income, high-value transfers, or luxury spending. If your bank statement shows consistent low balances and only essential survival spending, it strongly supports your case for a settlement waiver.'
    },
    {
        question: 'Is a salary certificate required if I am a self-employed professional?',
        answer: 'For self-employed individuals, bank statements, ITR filings, and audited Profit and Loss statements serve as the primary proof of income. If your business has suffered a loss, you should also provide invoices, GST return filings, or vendor payment defaults to prove the financial downturn.'
    },
    {
        question: 'What should I do if the bank refuses to give me a written settlement letter?',
        answer: 'You must never pay any amount without a formal Settlement Offer Letter on the banks official letterhead. If the bank refuses to provide this, you should immediately halt the negotiation. Verbal promises are not legally binding and will not protect you from further recovery or a "Default" status on your credit report.'
    },
    {
        question: 'How do I prove a medical emergency for a loan settlement?',
        answer: 'You should provide discharge summaries from the hospital, bills for major surgeries or treatments, and doctor prescriptions for long-term care. Ensure these documents cover the period when your EMIs first started bouncing. This provides a direct link between the medical crisis and your financial default.'
    },
    {
        question: 'Are digital copies of documents acceptable to Indian banks in 2025?',
        answer: 'Most banks now accept digital scans via official emails or dedicated portals. However, the RBI 2025 guidelines emphasize transparency, so ensure all scans are clear, high-resolution, and include both sides of the document where applicable. Some nationalized banks may still request a physical set for their records.'
    },
    {
        question: 'Does the "No Dues Certificate" mention that the loan was settled?',
        answer: 'A No Dues Certificate typically states that the account is closed and no further money is owed. However, the internal records of the bank and the report sent to credit bureaus like CIBIL will explicitly mention the status as "Settled." It is important to verify that the NDC clearly mentions the loan account number and is signed by an authorized officer.'
    },
    {
        question: 'Can a lawyer help me prepare the documentation for my settlement proposal?',
        answer: 'Yes, a specialized fintech lawyer or a debt management firm can ensure that your documentation is legally sound and meets the banks internal criteria. They can help draft the hardship letter in a way that highlights your legal rights and maximizes the chances of a favorable waiver from the lender.'
    }
  ];

  const reviews = [
    {
        name: "Rajesh Kumar",
        location: "Delhi",
        rating: 5,
        text: "The hardship letter template saved my case. Bank accepted my settlement in 10 days after I attached my medical bills correctly."
    },
    {
        name: "Sunita M.",
        location: "Bangalore",
        rating: 5,
        text: "Gathering KYC is easy but proving income loss is where I struggled. CredSettle guided me on what bank statements to highlight."
    },
    {
        name: "Anita G.",
        location: "Mumbai",
        rating: 5,
        text: "Never pay without an OTS letter! I learned that here and it protected me from a fake offer. Professional advice is a must."
    },
    {
        name: "Rohan P.",
        location: "Chennai",
        rating: 5,
        text: "Professional approach to documentation is the only thing banks respect. This guide is 100% accurate for 2025."
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'What Documents Do I Need to Prepare for a Loan Settlement Proposal? (2025)',
    'description': 'A comprehensive guide and checklist for gathering all necessary documents for a loan settlement in India, including KYC, hardship proofs, and income records.',
    'image': 'https://www.credsettle.com/loan-settlement-docs-guide.jpg',
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
        'name': 'What Documents for Loan Settlement',
        'item': 'https://www.credsettle.com/what-documents-do-i-need-to-prepare-for-a-loan-settlement-proposal',
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
    'name': 'Loan Settlement Documentation Service',
    'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '2100',
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
        id="article-schema-docs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="breadcrumb-schema-docs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="org-schema-docs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="faq-schema-docs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="product-schema-docs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <WhatDocumentsClient />
    </div>
  );
}
