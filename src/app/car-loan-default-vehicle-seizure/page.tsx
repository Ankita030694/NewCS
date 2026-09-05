import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CarLoanDefaultVehicleSeizureClient from './CarLoanDefaultVehicleSeizureClient';

export const metadata: Metadata = {
  title: 'Car Loan Default & Vehicle Seizure by Bank',
  description:
    'Facing car loan default or repossession? Learn Supreme Court protections against illegal seizure, pre-sale notice rules, and an OTS.',
  keywords: [
    'car loan default and vehicle seizure by bank',
    'illegal car repossession by recovery agents',
    'ICICI Bank vs Prakash Kaur supreme court judgment',
    'car loan recovery rules RBI',
    'can bank seize car without court order',
    'car loan settlement process India',
    'vehicle repossession notice period',
    'how to stop car seizure by bank',
    'car hypothecation removal after settlement'
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/car-loan-default-vehicle-seizure',
  },
  openGraph: {
    title: 'Car Loan Default & Vehicle Seizure by Bank',
    description: 'Learn your legal rights against unlawful vehicle repossession by recovery agents. Understand Supreme Court guidelines, pre-sale valuation notices, and debt settlement.',
    url: 'https://www.credsettle.com/car-loan-default-vehicle-seizure',
    siteName: 'CredSettle',
    locale: 'en_IN',
    type: 'article',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/car-loan-default-vehicle-seizure.jpg',
        width: 1200,
        height: 675,
        alt: 'Car Loan Default and Vehicle Seizure Legal Defense Blueprint Infographic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Loan Default & Vehicle Seizure by Bank',
    description: 'Protect your vehicle from unlawful recovery agent seizure. Understand landmark Supreme Court judgments and institutional debt settlement options.',
    images: ['https://www.credsettle.com/images/infographics/car-loan-default-vehicle-seizure.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CarLoanDefaultVehicleSeizurePage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/car-loan-default-vehicle-seizure/#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/car-loan-default-vehicle-seizure',
        },
        headline: 'Car Loan Default & Vehicle Seizure by Bank: Legal Rights & Protection',
        description: 'Comprehensive legal analysis and strategic borrower guide on car loan defaults, statutory protections against illegal vehicle repossession, landmark Supreme Court precedents, and institutional settlement solutions in India.',
        image: 'https://www.credsettle.com/images/infographics/car-loan-default-vehicle-seizure.jpg',
        author: {
          '@type': 'Person',
          name: 'Ashish Jhangra',
          jobTitle: 'Legal & Debt Resolution Professional',
          affiliation: {
            '@type': 'Organization',
            name: 'CredSettle',
          },
        },
        publisher: {
          '@type': 'Organization',
          '@id': 'https://www.credsettle.com/#organization',
          name: 'CredSettle',
          url: 'https://www.credsettle.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.credsettle.com/logo.png',
          },
        },
        datePublished: '2025-01-15T08:00:00+05:30',
        dateModified: '2025-02-18T10:00:00+05:30',
        mainEntityOfPage: 'https://www.credsettle.com/car-loan-default-vehicle-seizure',
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.credsettle.com/#organization',
        name: 'CredSettle',
        url: 'https://www.credsettle.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.credsettle.com/logo.png',
        },
        sameAs: [
          'https://www.facebook.com/credsettle',
          'https://twitter.com/credsettle',
          'https://www.linkedin.com/company/credsettle',
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.credsettle.com/car-loan-default-vehicle-seizure/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.credsettle.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Resources',
            item: 'https://www.credsettle.com/resources',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Car Loan Default & Vehicle Seizure',
            item: 'https://www.credsettle.com/car-loan-default-vehicle-seizure',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/car-loan-default-vehicle-seizure/#faq',
        mainEntity: [
          {
                    "@type": "Question",
                    "name": "Can bank recovery agents forcefully seize my car on the road?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "No. In ICICI Bank v. Prakash Kaur (2007), the Supreme Court ruled that banks cannot deploy musclemen to seize vehicles without due legal process. Forceful road intercepts constitute criminal trespass and extortion."
                    }
          },
          {
                    "@type": "Question",
                    "name": "What statutory notices must a bank serve before repossession?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Under the RBI Fair Practices Code, lenders must issue a formal demand notice giving 15 to 30 days to clear arrears, followed by a pre-repossession intimation, and a pre-sale valuation notice."
                    }
          },
          {
                    "@type": "Question",
                    "name": "Can I file a police complaint if recovery agents illegally tow my car?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Yes. You can register an FIR under Sections 303 (Theft), 308 (Extortion), 329 (Trespass), and 351 (Intimidation) of BNS / Sections 379, 383, 441, and 506 IPC against the agents and the bank."
                    }
          },
          {
                    "@type": "Question",
                    "name": "What is an inventory sheet and why is it mandatory during seizure?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "An inventory sheet is a compulsory document itemizing all personal belongings inside the vehicle, odometer reading, fuel level, and physical condition. Refusal to provide a signed inventory violates RBI recovery directives."
                    }
          },
          {
                    "@type": "Question",
                    "name": "Does the bank have the legal right to sell my car immediately?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "No. The lender must serve a formal pre-sale notice granting 15 to 30 days to redeem the vehicle, accompanied by a certified surveyor valuation report before scheduling an auction."
                    }
          },
          {
                    "@type": "Question",
                    "name": "What happens if car auction proceeds do not cover the loan balance?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Any shortfall becomes an unsecured residual debt. The bank cannot seize other assets without court orders and must pursue civil recovery or negotiate an amicable compromise settlement."
                    }
          },
          {
                    "@type": "Question",
                    "name": "How can I obtain an urgent court injunction to stop vehicle repossession?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "You can file a petition under Section 9 of the Arbitration Act or Order 39 CPC before the District Commercial Court seeking an interim status-quo injunction restraining the lender from taking physical possession."
                    }
          },
          {
                    "@type": "Question",
                    "name": "Can I negotiate a One-Time Settlement (OTS) for a defaulted auto loan?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Yes. Borrowers with genuine hardship can negotiate an OTS with the bank credit committee, securing 40% to 55% waivers on accumulated penal interest and charges, followed by a clean No Dues Certificate."
                    }
          },
          {
                    "@type": "Question",
                    "name": "How does auto loan default and vehicle repossession affect my CIBIL score?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Repossession causes an immediate 80 to 140 point score drop. However, settling the account through an OTS halts ongoing negative reporting, enabling score recovery above 750 within 12 to 24 months."
                    }
          },
          {
                    "@type": "Question",
                    "name": "What should I do if recovery agents show up demanding car keys?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Demand official bank identification, agent DRS registration, and written authorization. Refuse handover without statutory notice, record the encounter, contact emergency police (112), and notify CredSettle for legal intervention."
                    }
          }
]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Debt Resolution & Legal Protection',
        url: 'https://www.credsettle.com',
        description: 'India premier debt settlement, loan dispute resolution, and legal defense platform protecting borrowers from unlawful recovery harassment and repossessions.',
        telephone: '+91-8800226635',
        priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'CredSettle Legal Tower, Sector 44',
          addressLocality: 'Gurugram',
          addressRegion: 'Haryana',
          postalCode: '122003',
          addressCountry: 'IN',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '5280',
          bestRating: '5',
          worstRating: '1',
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Rajesh Sharma',
            },
            datePublished: '2025-01-20',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
            },
            reviewBody: 'CredSettle halted illegal vehicle recovery agent harassment immediately and negotiated an official 50% One-Time Settlement with my bank. My car is safe and I received my clean No Dues Certificate.',
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Ananya Deshmukh',
            },
            datePublished: '2025-01-28',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
            },
            reviewBody: 'When recovery goons threatened to tow my commercial cab, CredSettle served legal notices citing the Supreme Court Prakash Kaur judgment. The bank settled peacefully within 30 days.',
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Vikramjit Singh',
            },
            datePublished: '2025-02-04',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
            },
            reviewBody: 'Outstanding legal support for car loan NPA resolution. They waived ₹1.2 Lakhs in penal charges and secured my RTO Form 35 to cancel bank hypothecation.',
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Pooja Sundaram',
            },
            datePublished: '2025-02-10',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4',
            },
            reviewBody: 'Very professional handling of auto loan default notices. They handled all communications with the bank nodal officer and saved me from immense stress.',
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Mohammed Tariq',
            },
            datePublished: '2025-02-14',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
            },
            reviewBody: 'Saved my SUV from unauthorized auction. CredSettle verified the pre-sale valuation report, contested unfair yard fees, and closed the loan at an affordable compromise amount.',
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <Navbar />
      <CarLoanDefaultVehicleSeizureClient />
      <Footer />
    </>
  );
}
