import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import VehicleSettlementClient from './VehicleSettlementClient';

export const metadata: Metadata = {
  title: 'How to Get the Best Settlement Deal on a Vehicle Loan Online (2025)',
  description: 'Learn how to settle your car or bike loan online. Expert tips on RBI repossession rules, penal interest waivers, and RTO de-hypothecation processes.',
  keywords: 'vehicle loan settlement, car loan settlement online, bike loan OTS, RBI vehicle repossession rules 2025, RTO de-hypothecation guide, Mahindra Finance settlement, car loan waiver',
  alternates: {
    canonical: 'https://www.credsettle.com/how-to-get-the-best-settlement-deal-on-a-vehicle-loan-using-online-services',
  },
};

export default function VehicleSettlementPage() {
  const faqData = [
    {
      question: "Can I settle a car loan if the bank has already repossessed the vehicle?",
      answer: "Yes, you can still negotiate a settlement, but it is much harder. Once the bank takes possession, they typically intend to auction it. You must act within the 15-30 day notice period (mandated by RBI) to propose an OTS and stop the auction."
    },
    {
      question: "What is the average waiver on a 2-year-old vehicle loan?",
      answer: "For vehicle loans, waivers are generally lower than credit cards because the asset (the car) has value. Expect a 25% to 40% waiver on the outstanding amount, depending on the vehicle's current market value versus your remaining debt."
    },
    {
      question: "How do online services help in negotiating with NBFCs like Mahindra Finance?",
      answer: "Online debt settlement platforms have direct channels with NBFC nodal officers. They can upload your hardship documents and secure a formal OTS letter digitally, saving you from multiple visits to rural or semi-urban branches."
    },
    {
      question: "Do I still need to visit the RTO after an online settlement?",
      answer: "Yes. While the settlement and payment are online, the 'De-hypothecation' (removing the bank's name from your RC) requires physical submission of Form 35 and the NDC at your local RTO."
    },
    {
      question: "Can I settle a vehicle loan without an NDC?",
      answer: "No. The No Dues Certificate (NDC) is the most critical document. Without it, you cannot sell the vehicle or renew its insurance properly, and the bank remains the legal owner on paper."
    },
    {
      question: "How does the 2025 RBI rule on penal interest help me?",
      answer: "As of June 2025, RBI forbids lenders from charging penal interest on top of normal interest. This means your 'Settlement Amount' will no longer be artificially inflated by punitive charges, making a deal much more affordable."
    },
    {
      question: "Is it possible to settle a bike loan online for a 50% waiver?",
      answer: "It is possible if the bike is old and has significant depreciation. Banks prefer getting a quick 50% payment rather than the cost of repossessing and selling a low-value 2-wheeler."
    },
    {
      question: "What happens to my CIBIL score after a vehicle loan settlement?",
      answer: "Your score will drop slightly, and the account will be marked as 'Settled'. However, this is better than 'Default' or 'Written Off'. You can rebuild your score over 18-24 months by using secured credit cards."
    },
    {
      question: "How can I stop recovery agents from seizing my car while negotiating?",
      answer: "You must provide a 'Representation Letter' stating you are in active negotiation. If you are using a service like AMA Legal Solutions, their advocates send a formal legal notice that legally bars agents from forceful repossession without a court order."
    },
    {
      question: "What are the charges of professional services for vehicle settlements?",
      answer: "Professional fees usually range from 10% to 15% of the total waiver amount secured. Some services charge a small upfront fee to initiate the legal protection and anti-harassment shield."
    }
  ];

  const reviews = [
    {
      name: "Sundeep Nair",
      location: "Kochi",
      rating: 5,
      text: "My SUV was about to be repossessed due to business losses. CredSettle negotiated a 35% waiver and saved my vehicle. The process was handled online with minimal stress."
    },
    {
      name: "Rajesh Patil",
      location: "Mumbai",
      rating: 5,
      text: "Used AMA Legal Solutions for my truck loan settlement. They handled the NBFC legal team directly. The RTO de-hypothecation was smooth after receiving their verified NDC."
    },
    {
      name: "Anjali Gupta",
      location: "Delhi",
      rating: 4,
      text: "Settling a car loan is tricky compared to personal loans. I am glad I chose professional negotiators. They explained the depreciation math to the bank and got me a fair deal."
    },
    {
      name: "Vikram Reddy",
      location: "Hyderabad",
      rating: 5,
      text: "Saved almost 2 lakhs on my car loan settlement. The online dashboard made it easy to track the negotiation. Highly recommended for 2025 borrowers."
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How to Get the Best Settlement Deal on a Vehicle Loan Online (2025)',
    'description': 'Comprehensive guide to car and bike loan settlements in India. RBI rules on repossession and penal interest explained.',
    'image': 'https://www.credsettle.com/vehicle-loan-settlement-guide.jpg',
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
        'name': 'Vehicle Loan Settlement',
        'item': 'https://www.credsettle.com/how-to-get-the-best-settlement-deal-on-a-vehicle-loan-using-online-services',
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
    'name': 'Vehicle Loan Settlement Service',
    'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '1450',
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
        id="article-schema-vehicle"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="breadcrumb-schema-vehicle"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="org-schema-vehicle"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="faq-schema-vehicle"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="product-schema-vehicle"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <VehicleSettlementClient />
    </div>
  );
}
