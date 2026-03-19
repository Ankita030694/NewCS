import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import RequiredDocumentsClient from './RequiredDocumentsClient';

export const metadata: Metadata = {
  title: 'Required Documents for Loan Settlement 2025: Full Checklist',
  description: 'A comprehensive guide to all documents needed for a successful loan settlement in India. Includes KYC, hardship proof, financial records, and No Dues Certificate checklist.',
  keywords: 'loan settlement documents India, documents for debt settlement, hardship letter for bank, OTS offer letter requirements, No Dues Certificate checklist, KYC for loan settlement, bank settlement mandatory documents',
  alternates: {
    canonical: 'https://www.credsettle.com/what-documents-are-required-for-loan-settlement-with-a-professional-service',
  },
};

export default function RequiredDocumentsPage() {
  const faqs = [
    {
        question: 'Can I settle a loan if I have lost my original loan agreement?',
        answer: 'Yes, you can. While having the original is better, the bank\'s account statement and the notices they send you are sufficient proof of the debt\'s existence.'
    },
    {
        question: 'Why does the bank need my PAN card for a settlement?',
        answer: 'The Income Tax Act mandates that banks report any "waiver of liability" above certain limits. They cannot file this report without your PAN.'
    },
    {
        question: 'What if I don\'t have a "Termination Letter" for my job?',
        answer: 'You can provide an email from your HR, a resignation acceptance, or simply 6 months of bank statements showing that your salary credits have stopped.'
    },
    {
        question: 'Is an Aadhaar OTP considered a valid signature for a settlement?',
        answer: 'Yes, under the IT Act and current RBI guidelines, an OTP-based e-signature is a legally binding way to accept a settlement offer in 2025.'
    },
    {
        question: 'What should I do if the bank refuses to give me a No Dues Certificate?',
        answer: 'If you have paid the full OTS amount on time and the bank is delaying the NDC, you can file a formal complaint with the Integrated Ombudsman of the RBI.'
    },
    {
        question: 'Do I need to provide documents of my spouse\'s income?',
        answer: 'Only if your spouse was a "Co-Applicant" or a "Guarantor" for the loan. If the loan was in your name only, your spouse\'s income is technically private, though showing a low "Household Income" can sometimes help your case.'
    },
    {
        question: 'How long should I keep my settlement documents?',
        answer: 'Permanently. Or at least for 10-15 years. Debt records can surface decades later during bank audits or when the debt is sold to an ARC. Your NDC is your only shield.'
    },
    {
        question: 'Can I settle without a CIBIL report?',
        answer: 'No major bank will process a settlement without checking your credit profile. Even if you don\'t provide it, they will pull it. Having your own copy just makes you better prepared.'
    },
    {
        question: 'What is a "Hardship Letter" and who should it be addressed to?',
        answer: 'It is a formal explanation of your financial crisis. It should be addressed to the "Nodal Officer" or the "Head of Collections" of the bank, not just your local branch manager.'
    },
    {
        question: 'Do I need an affidavit for a credit card settlement?',
        answer: 'Usually not for small amounts. But if your card debt is above 5 or 10 lakhs, the bank\'s policy might require a sworn statement of your assets and liabilities.'
    }
  ];

  const reviews = [
    {
        name: 'Rajesh Khanna',
        location: 'Delhi',
        rating: 5,
        text: 'I didn\'t know where to start until I saw this checklist. The section on medical hardship docs was exactly what I needed to prove my case to SBI. Successfully settled my 12L debt.'
    },
    {
        name: 'Sunita Mehra',
        location: 'Gurgaon',
        rating: 5,
        text: 'The focus on the No Dues Certificate (NDC) saved me. My bank tried to claim interest after 6 months, but I showed them my NOC and they backed off immediately. Must read!'
    },
    {
        name: 'Amit Patel',
        location: 'Ahmedabad',
        rating: 5,
        text: 'Professional and thorough. Working with CredSettle was easy because I had all my docs ready using this guide. There is no better resource for distressed borrowers in India.'
    },
    {
        name: 'Monica Singh',
        location: 'Pune',
        rating: 5,
        text: 'The digital loan app section helped me deal with a nasty harassment case. I took all the requested screenshots and the bank Ombudsman ruled in my favor within weeks.'
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Required Documents for Loan Settlement 2025: Full Checklist',
    'description': 'A comprehensive guide to all documents needed for a successful loan settlement in India.',
    'image': 'https://www.credsettle.com/settlement-documents-checklist.jpg',
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
        'name': 'Required Documents for Loan Settlement',
        'item': 'https://www.credsettle.com/what-documents-are-required-for-loan-settlement-with-a-professional-service',
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
    'name': 'Loan Settlement Document Checklist',
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
      <RequiredDocumentsClient />
    </div>
  );
}
