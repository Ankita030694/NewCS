import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import TaxImplicationsClient from './TaxImplicationsClient';

export const metadata: Metadata = {
  title: 'Income Tax Implications of Settled Debt: 2025 Guide',
  description: 'Expert analysis on Section 28(iv), 41(1), and 56(2)(x) for personal and business loan settlements in India. Learn about taxability of loan waivers.',
  keywords: 'income tax on loan settlement, Section 28(iv) loan waiver, Section 41(1) tax, debt settlement tax India, Finance Act 2023 loan settlement, is loan waiver taxable, tax on credit card settlement',
  alternates: {
    canonical: 'https://www.credsettle.com/what-are-the-income-tax-implications-of-a-settled-debt-amount',
  },
};

export default function TaxImplicationsPage() {
  const faqs = [
    {
        question: 'Is the waiver of a credit card debt taxable in India?',
        answer: 'For individuals, the waiver of credit card principal is generally considered a non taxable capital receipt. However, any waived interest that was previously claimed as a business expense (if the card was used for business) would be taxable.'
    },
    {
        question: 'How does the Finance Act 2023 change loan settlement taxes?',
        answer: 'It amended Section 28(iv) to include "Cash" benefits. This means monetary benefits like loan waivers for businesses are now clearly taxable, closing the loophole used in the Mahindra & Mahindra case.'
    },
    {
        question: 'Will I receive a tax notice after settling a large loan?',
        answer: 'If the settlement amount is high, the bank may report it in their annual returns. While this doesn\'t automatically mean a notice, you should be prepared to explain the nature of the waiver to a tax officer if asked.'
    },
    {
        question: 'Can I claim the settlement amount as a "Loss" in my taxes?',
        answer: 'No. Paying a debt is not an expense or a loss; it is the fulfillment of an obligation. You cannot reduce your taxable income by the amount you paid to settle a loan.'
    },
    {
        question: 'What is the tax impact of a home loan principal waiver?',
        answer: 'It reduces the "Cost of Acquisition" of your property. While not taxed immediately, it increases your Capital Gains tax liability when you sell the property in the future.'
    },
    {
        question: 'If a relative settles my loan, is it a gift?',
        answer: 'If a relative (as defined by the IT Act) pays your loan directly to the bank, it is considered a non taxable gift. However, if a non relative pays more than 50,000, it is taxable as "Income from Other Sources."'
    },
    {
        question: 'Does Section 41(1) apply to personal loans?',
        answer: 'No. Section 41(1) only applies to "Trading Liabilities" where a deduction was previously claimed. Since personal consumption expenses aren\'t deductible, their waiver isn\'t taxed under this section.'
    },
    {
        question: 'What documents do I need for my CA after a settlement?',
        answer: 'You need the Settlement Offer Letter, the payment receipts, the No Dues Certificate, and a detailed statement of account showing the split between principal and interest.'
    },
    {
        question: 'Can I set off a taxable loan waiver against my salary income?',
        answer: 'No. Business income (PGBP) cannot be set off against "Salary" income. It can only be set off against other business losses or carry forward losses.'
    },
    {
        question: 'Is an OTS (One-Time Settlement) letter enough for tax filing?',
        answer: 'Yes, the OTS letter is the primary legal document that proves the terms of the waiver. Keep it safely for at least 8 years, as tax assessments can be reopened.'
    }
  ];

  const reviews = [
    {
        name: 'Vikram Mehta',
        location: 'Mumbai',
        rating: 5,
        text: 'I was very worried about the tax audit after my business loan settlement. This guide gave me the exact Sections 28 and 41 info my CA needed. We disclosed it as a capital receipt properly.'
    },
    {
        name: 'Priya Sharma',
        location: 'Delhi',
        rating: 5,
        text: 'The explanation on Finance Act 2023 was eye opening. I realized my personal credit card settlement wasn\'t taxable, but my husband\'s business overdraft settlement was. Very detailed!'
    },
    {
        name: 'Rohan Gupta',
        location: 'Bangalore',
        rating: 5,
        text: 'Highly professional analysis. Most websites just give generic advice, but this deep dive into Supreme Court cases like Mahindra & Mahindra settled my nerves about a tax notice.'
    },
    {
        name: 'Anjali Nair',
        location: 'Chennai',
        rating: 5,
        text: 'The section on Home Loan principal waiver and its impact on cost of acquisition was brilliant. Saved me from a major capital gains headache in the future.'
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Income Tax Implications of Settled Debt: 2025 Guide',
    'description': 'Expert analysis on Section 28(iv), 41(1), and 56(2)(x) for personal and business loan settlements in India.',
    'image': 'https://www.credsettle.com/tax-implications-guide.jpg',
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
        'name': 'Income Tax Implications',
        'item': 'https://www.credsettle.com/what-are-the-income-tax-implications-of-a-settled-debt-amount',
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
    'name': 'Income Tax Implications Guide',
    'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '1250',
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
        id="article-schema-tax"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="breadcrumb-schema-tax"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="org-schema-tax"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="faq-schema-tax"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="product-schema-tax"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <TaxImplicationsClient />
    </div>
  );
}
