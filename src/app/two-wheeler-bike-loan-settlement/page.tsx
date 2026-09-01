import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TwoWheelerBikeLoanSettlementClient from './TwoWheelerBikeLoanSettlementClient';

export const metadata: Metadata = {
  title: 'Two Wheeler & Bike Loan Settlement: Stop Harassment & Seizure',
  description: 'Facing bike loan default, aggressive recovery agent visits, or illegal two-wheeler repossession? Learn Supreme Court protections, RBI rules, and 40% to 55% OTS settlement options.',
  keywords: [
    'two wheeler loan settlement',
    'bike loan settlement process',
    'stop bike repossession by recovery agents',
    'two wheeler loan default legal rights',
    'scooter loan settlement discount',
    'recovery agent harassment two wheeler loan',
    'bike loan NOC after settlement',
    'two wheeler loan EMI bounce legal notice',
    'hypothecation removal bike loan settlement',
    'gig worker bike loan settlement India'
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/two-wheeler-bike-loan-settlement',
  },
  openGraph: {
    title: 'Two Wheeler & Bike Loan Settlement: Stop Harassment & Seizure',
    description: 'Protect your motorcycle or scooter from unlawful recovery agent seizure. Understand Supreme Court guidelines, pre-sale valuation notices, and institutional debt settlement.',
    url: 'https://www.credsettle.com/two-wheeler-bike-loan-settlement',
    siteName: 'CredSettle',
    locale: 'en_IN',
    type: 'article',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/two-wheeler-bike-loan-settlement.jpg',
        width: 1200,
        height: 675,
        alt: 'Two Wheeler and Bike Loan Settlement Legal Defense Blueprint Infographic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Two Wheeler & Bike Loan Settlement: Stop Harassment & Seizure',
    description: 'Protect your two-wheeler from illegal street repossession and recovery harassment. Learn statutory rights, RBI rules, and institutional compromise settlement options.',
    images: ['https://www.credsettle.com/images/infographics/two-wheeler-bike-loan-settlement.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TwoWheelerBikeLoanSettlementPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/two-wheeler-bike-loan-settlement/#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/two-wheeler-bike-loan-settlement',
        },
        headline: 'Two Wheeler & Bike Loan Settlement: Stop Harassment, Prevent Seizure & Settle Debt',
        description: 'Comprehensive legal analysis and borrower guide on two-wheeler loan settlement, statutory protections against illegal bike repossession, landmark Supreme Court precedents, and institutional compromise solutions in India.',
        image: 'https://www.credsettle.com/images/infographics/two-wheeler-bike-loan-settlement.jpg',
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
        datePublished: '2025-01-20T08:00:00+05:30',
        dateModified: '2025-02-28T10:00:00+05:30',
        mainEntityOfPage: 'https://www.credsettle.com/two-wheeler-bike-loan-settlement',
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
        telephone: '+91-8800226635',
        sameAs: [
          'https://www.facebook.com/credsettle',
          'https://twitter.com/credsettle',
          'https://www.linkedin.com/company/credsettle',
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.credsettle.com/two-wheeler-bike-loan-settlement/#breadcrumb',
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
            name: 'Two Wheeler & Bike Loan Settlement',
            item: 'https://www.credsettle.com/two-wheeler-bike-loan-settlement',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/two-wheeler-bike-loan-settlement/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can recovery agents forcefully snatch my motorcycle on the street?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. In ICICI Bank v. Prakash Kaur, the Supreme Court held lenders cannot deploy musclemen to seize vehicles on roads. Forceful street seizures constitute criminal trespass and extortion.',
            },
          },
          {
            '@type': 'Question',
            name: 'What mandatory notices must a lender serve before bike repossession?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Financiers must serve a formal 15 to 30 day cure notice detailing defaults, followed by pre-repossession intimation and a pre-sale notice with certified surveyor valuation.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I settle a defaulted bike loan through a One-Time Settlement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Borrowers with genuine hardship can negotiate an institutional OTS, securing 40% to 55% waivers on accumulated penal interest and charges against a compromise payment.',
            },
          },
          {
            '@type': 'Question',
            name: 'What happens to the bank hypothecation on my bike RC after settlement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Upon settlement remittance, the lender issues an unconditional No Dues Certificate and signed RTO Form 35 to remove the hypothecation lien on your Registration Certificate.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does a two-wheeler loan settlement impact my CIBIL credit score?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The account updates to \'Settled\' with zero balance. While an initial dip occurs, stopping monthly overdue reporting enables credit score recovery above 750 within 12 to 18 months.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can a bank file an FIR or arrest me for missing bike EMIs?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Defaulting on a two-wheeler loan is strictly a civil breach of contract. Lenders cannot file criminal FIRs or threaten arrest for non-fraudulent hardship defaults.',
            },
          },
          {
            '@type': 'Question',
            name: 'What should delivery riders do if recovery agents threaten their bike?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Demand agent ID, bank authorization, and DRA card. Refuse street handover, record video, dial police helpline 112, and issue a formal cease-and-desist notice via CredSettle.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between settling a bike loan and surrendering the vehicle?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Surrendering results in a distress auction with lingering shortfall debt. An OTS extinguishes the entire liability unconditionally, preventing future recovery litigation.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I resolve my two-wheeler loan default through Lok Adalat?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Lok Adalats offer statutory conciliation platforms where lenders frequently accept 30% to 50% waivers. The resulting decree is legally binding with zero court fees.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I stop recovery agents from visiting my home at odd hours?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The RBI Fair Practices Code strictly bans visits before 8:00 AM or after 7:00 PM and prohibits harassment. Borrowers can escalate to the Nodal Officer and RBI Ombudsman.',
            },
          },
        ],
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
              name: 'Sunil Verma',
            },
            datePublished: '2025-01-18',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
            },
            reviewBody: 'When NBFC recovery agents threatened to snatch my delivery motorcycle on the street, CredSettle served a legal cease-and-desist notice immediately. They negotiated a 52% settlement with the credit committee and secured my NOC.',
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Ramesh Kulkarni',
            },
            datePublished: '2025-01-26',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
            },
            reviewBody: 'Outstanding legal support for two-wheeler loan default. The bank had inflated my ₹65,000 balance to ₹1,05,000 with bounce charges. CredSettle got all penalties waived and closed the account for ₹40,000.',
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Mohammad Irfan',
            },
            datePublished: '2025-02-03',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
            },
            reviewBody: 'CredSettle stopped aggressive recovery agents from visiting my home and calling my relatives. Their legal team handled everything professionally and delivered my RTO Form 35 to cancel bike hypothecation.',
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Priya Sharma',
            },
            datePublished: '2025-02-12',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4',
            },
            reviewBody: 'Very reassuring guidance after I lost my job and missed four scooter EMIs. CredSettle drafted the hardship representation and achieved an affordable one-time settlement sanction letter within 35 days.',
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Deepankar Roy',
            },
            datePublished: '2025-02-21',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
            },
            reviewBody: 'Saved my electric scooter from unauthorized repossession. CredSettle verified the bank valuation notice, defended against Section 25 NACH threats, and secured a clean No Dues Certificate.',
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
      <TwoWheelerBikeLoanSettlementClient />
      <Footer />
    </>
  );
}
