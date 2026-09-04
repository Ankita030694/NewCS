import React from 'react';
import { Metadata } from 'next';
import NriCreditCardDebtSettlementClient from './NriCreditCardDebtSettlementClient';

export const metadata: Metadata = {
  title: 'NRI Credit Card Debt Settlement in India',
  description: 'Complete legal guide for Non-Resident Indians (NRIs) to settle credit card and personal loan dues remotely. Learn Special PoA execution, LOC myths, immigration rights, and bank nodal OTS negotiation without traveling to India.',
  keywords: [
    'nri credit card debt settlement india',
    'nri loan settlement india',
    'settle indian credit card from dubai uae',
    'nri debt settlement legal advice',
    'special power of attorney debt settlement nri',
    'lookout circular nri credit card default',
    'nri airport arrest debt myth india',
    'nri bank nodal officer settlement',
    'credsettle nri debt relief'
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/nri-credit-card-debt-settlement',
  },
  openGraph: {
    title: 'NRI Credit Card Debt Settlement in India',
    description: 'Resolve Indian credit card defaults and personal loans remotely. Protect resident family, execute consular Special PoA, and secure official No Dues Certificates.',
    url: 'https://www.credsettle.com/nri-credit-card-debt-settlement',
    siteName: 'CredSettle',
    locale: 'en_IN',
    type: 'article',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/nri-credit-card-debt-settlement.jpg',
        width: 1200,
        height: 675,
        alt: 'NRI Credit Card Debt Settlement India Strategic Process Map',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NRI Credit Card Debt Settlement in India',
    description: 'Complete cross-border legal roadmap for NRIs to settle legacy credit cards and personal loans without traveling to India.',
    images: ['https://www.credsettle.com/images/infographics/nri-credit-card-debt-settlement.jpg'],
  },
};

export default function NriCreditCardDebtSettlementPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/nri-credit-card-debt-settlement/#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/nri-credit-card-debt-settlement',
        },
        headline: 'NRI Credit Card Debt Settlement India: Remote Legal Defense, Special PoA & Bank Nodal Protocols',
        description: 'An exhaustive cross-border legal handbook for Non-Resident Indians to resolve unsecured credit card and personal loan liabilities in India remotely without airport arrest risks or traveling back.',
        image: 'https://www.credsettle.com/images/infographics/nri-credit-card-debt-settlement.jpg',
        datePublished: '2026-03-31T09:00:00+05:30',
        dateModified: '2026-03-31T09:00:00+05:30',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/nri-credit-card-debt-settlement',
        author: {
          '@type': 'Person',
          name: 'Ashish Jhangra',
          jobTitle: 'Legal & Debt Resolution Professional',
          affiliation: {
            '@type': 'Organization',
            name: 'CredSettle',
            url: 'https://www.credsettle.com',
          },
        },
        publisher: {
          '@type': 'Organization',
          name: 'CredSettle',
          url: 'https://www.credsettle.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.credsettle.com/logo.png',
          },
        },
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.credsettle.com/#organization',
        name: 'CredSettle',
        url: 'https://www.credsettle.com',
        logo: 'https://www.credsettle.com/logo.png',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-8800226635',
          contactType: 'customer service',
          areaServed: 'IN',
          availableLanguage: ['en', 'hi'],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.credsettle.com/nri-credit-card-debt-settlement/#breadcrumb',
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
            name: 'NRI Debt Resolution',
            item: 'https://www.credsettle.com/nri-credit-card-debt-settlement',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/nri-credit-card-debt-settlement/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: "Can an NRI settle credit card debt in India remotely?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Yes. Non-Resident Indians can settle credit cards remotely by executing a consular Special Power of Attorney authorizing Indian legal representatives to negotiate directly with bank nodal desks.",
            },
          },
          {
            '@type': 'Question',
            name: "Can an NRI be arrested at an airport for credit card defaults?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "No. Unsecured credit card defaults are strictly civil contractual disputes under Indian law. Immigration authorities hold zero statutory jurisdiction to arrest travelers for civil bank debts.",
            },
          },
          {
            '@type': 'Question',
            name: "Can Indian banks issue a Lookout Circular for credit card debt?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "No. Ministry of Home Affairs guidelines and High Court rulings prohibit banks from issuing Lookout Circulars for civil debt defaults. LOCs are restricted to criminal fraud cases.",
            },
          },
          {
            '@type': 'Question',
            name: "How does an NRI execute a Special Power of Attorney from abroad?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "The NRI executes a Special PoA before an Indian Embassy, Consulate, or via apostille in Hague countries. In India, counsel completes stamping under the Indian Stamp Act, 1899.",
            },
          },
          {
            '@type': 'Question',
            name: "What percentage of credit card debt can an NRI save through an OTS?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Through credit committee representations, NRIs typically secure a 45% to 60% waiver on principal, along with a 100% waiver of accumulated revolving finance charges and late penalties.",
            },
          },
          {
            '@type': 'Question',
            name: "What happens to an NRI's NRE and NRO accounts during a loan default?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Banks cannot freeze third-party accounts without court orders. However, if an NRI holds deposits with the lending bank itself, the bank may exercise a Banker's Lien under Section 171.",
            },
          },
          {
            '@type': 'Question',
            name: "How do recovery agents contact overseas employers, and is it legal?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Contacting overseas employers or making abusive international calls violates the RBI Fair Practices Code. NRIs can issue cease-and-desist notices and file complaints on the RBI Ombudsman portal.",
            },
          },
          {
            '@type': 'Question',
            name: "How should settlement funds be remitted to ensure clean tax closure?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Settlement funds must be wired directly to the lending bank's collection account via NRE/NRO transfer or foreign wire backed by a Foreign Inward Remittance Certificate (FIRC).",
            },
          },
          {
            '@type': 'Question',
            name: "How does debt settlement affect an NRI's CIBIL score in India?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Settlement updates the account in CIBIL to \"Settled\" with zero balance, halting delinquency reporting. Non-residents can rebuild credit scores above 750+ within 12 to 24 months.",
            },
          },
          {
            '@type': 'Question',
            name: "What documents does an NRI receive upon completing a debt settlement?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Upon settlement reconciliation, the lending bank issues a formal No Dues Certificate (NDC) confirming full discharge of all financial obligations with zero remaining legal liability.",
            },
          }
        ],
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle NRI Debt Resolution Services',
        description: 'Cross-border debt settlement and remote legal representation for Non-Resident Indians facing banking defaults in India.',
        provider: {
          '@type': 'Organization',
          name: 'CredSettle',
          url: 'https://www.credsettle.com',
        },
        areaServed: [
          { '@type': 'Country', name: 'India' },
          { '@type': 'Country', name: 'United Arab Emirates' },
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'Canada' },
          { '@type': 'Country', name: 'Singapore' },
        ],
        serviceType: 'NRI Debt Settlement & Banking Dispute Resolution',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '520',
          bestRating: '5',
          worstRating: '1',
        },
        review: [
          {
            '@type': 'Review',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            },
            author: { '@type': 'Person', name: 'Rajesh Nair (Dubai, UAE)' },
            datePublished: '2026-02-14',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'Settled two legacy credit cards with HDFC and ICICI remotely from Dubai via Special PoA. CredSettle saved me 58% on total dues and protected my elderly parents in Kochi from recovery calls.',
          },
          {
            '@type': 'Review',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            },
            author: { '@type': 'Person', name: 'Siddharth Patel (San Jose, USA)' },
            datePublished: '2026-01-20',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'Outstanding remote legal defense. The team cleared my SBI personal loan default without me flying to India. Got an authentic No Dues Certificate and updated CIBIL records.',
          },
          {
            '@type': 'Review',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            },
            author: { '@type': 'Person', name: 'Ananya Roy (London, UK)' },
            datePublished: '2026-03-05',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'Clear advice regarding immigration and LOC myths. CredSettle executed my Special PoA smoothly and closed my Axis Bank credit card with a 54% reduction.',
          },
          {
            '@type': 'Review',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            },
            author: { '@type': 'Person', name: 'Gurpreet Singh (Toronto, Canada)' },
            datePublished: '2026-02-28',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'Transparent process and direct nodal bank negotiations. Settled Kotak card dues through official NRE inward wire remittance with complete tax documentation.',
          },
          {
            '@type': 'Review',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            },
            author: { '@type': 'Person', name: 'Vikram Menon (Singapore)' },
            datePublished: '2026-03-12',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'The best cross-border debt legal counsel in India. Handled our Phoenix ARC card portfolio settlement professionally and stopped all domestic harassment.',
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <NriCreditCardDebtSettlementClient />
    </>
  );
}
