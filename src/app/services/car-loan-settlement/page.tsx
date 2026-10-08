import type { Metadata } from 'next';
import CarLoanSettlementPageClient from './CarLoanSettlementPageClient';

export const metadata: Metadata = {
  title: 'Car Loan Settlement in India (2026 Master Guide) | Auto Loan OTS & Repossession Defense | CredSettle',
  description:
    'Complete master legal guide to Car Loan Settlement in India. Learn vehicle repossession defense, Supreme Court rulings, RBI OTS guidelines, Form 35 hypothecation removal, auction shortfall settlement, and CIBIL repair.',
  keywords: [
    'car loan settlement',
    'vehicle loan settlement',
    'auto loan OTS scheme',
    'car repossession rules India',
    'stop car recovery agent harassment',
    'Form 35 RTO hypothecation removal',
    'settle car loan after repossession',
    'car loan auction deficiency balance',
    'Section 138 car loan cheque bounce',
    'CredSettle auto loan settlement'
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/services/car-loan-settlement',
  },
  openGraph: {
    title: 'Car Loan Settlement in India — Complete Legal & Repossession Defense Guide | CredSettle',
    description:
      'Legally resolve distressed car loans, halt illegal vehicle repossession by recovery musclemen, settle post-auction deficiency balances, and obtain RTO Form 35 hypothecation removal under RBI compromise guidelines.',
    url: 'https://www.credsettle.com/services/car-loan-settlement',
    type: 'article',
    images: [
      {
        url: 'https://www.credsettle.com/car_hero.png',
        width: 1200,
        height: 630,
        alt: 'Car Loan Settlement Guide - CredSettle'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Loan Settlement in India — Complete Master Guide | CredSettle',
    description:
      'Step-by-step legal procedure for settling auto loans, defending against vehicle seizure, negotiating discounted OTS waivers, and clearing RTO hypothecation.',
    images: ['https://www.credsettle.com/car_hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
};

export default function CarLoanSettlementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': 'https://www.credsettle.com/services/car-loan-settlement#webpage',
                url: 'https://www.credsettle.com/services/car-loan-settlement',
                name: 'Car Loan Settlement in India — Master Guide, Repossession Defense & Form 35 | CredSettle',
                description:
                  'Comprehensive 84-section authority guide on car loan settlement, vehicle repossession laws, Supreme Court rulings, OTS compromise negotiations, RTO Form 35 hypothecation removal, and recovery agent defense in India.',
                breadcrumb: {
                  '@type': 'BreadcrumbList',
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
                      name: 'Services',
                      item: 'https://www.credsettle.com/services',
                    },
                    {
                      '@type': 'ListItem',
                      position: 3,
                      name: 'Car Loan Settlement',
                      item: 'https://www.credsettle.com/services/car-loan-settlement',
                    },
                  ],
                },
              },
              {
                '@type': 'LegalService',
                '@id': 'https://www.credsettle.com/#legalservice',
                name: 'CredSettle Debt Resolution & Legal Services',
                url: 'https://www.credsettle.com',
                logo: 'https://www.credsettle.com/logo.png',
                image: 'https://www.credsettle.com/car_hero.png',
                description:
                  'Specialized motor vehicle loan settlement, illegal repossession stay defense, Section 138 NI Act representation, and RTO Form 35 hypothecation clearance across India.',
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'IN',
                },
                priceRange: '₹₹',
                telephone: '+91-8800226444',
                areaServed: {
                  '@type': 'Country',
                  name: 'India',
                },
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://www.credsettle.com/services/car-loan-settlement#faq',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Can recovery agents forcibly seize my car on the road or from my home?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'No. The Supreme Court of India in ICICI Bank v. Prakash Kaur held that banks cannot employ goons or musclemen to take forcible possession of vehicles. Any repossession without mandatory prior written notice and following due process of law constitutes criminal wrongful restraint and intimidation under the Bharatiya Nyaya Sanhita.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I keep my car after settling the loan with the bank?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. In a retain-vehicle One-Time Settlement (OTS), the borrower negotiates a lump-sum compromise based on the vehicle\'s current distress market valuation. Once paid, the lender issues a No Dues Certificate (NDC) and RTO Form 35 to remove hypothecation from the RC book, allowing the borrower to keep the vehicle completely unencumbered.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What happens if the bank sells my repossessed car and a loan balance remains?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'When an auctioned vehicle fails to cover the total outstanding loan balance, the remaining shortfall is termed an auction deficiency balance. This shortfall becomes an unsecured claim, which CredSettle can negotiate down by 60% to 80% through an OTS compromise, extinguishing all further civil and criminal liability.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How do I remove bank hypothecation from my RC after loan settlement?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Upon clearance of the agreed settlement sum, the lender is legally required under RBI directives to issue a stamped No Dues Certificate (NDC) and two original copies of RTO Form 35 signed by an authorized officer. You submit these along with your original RC and insurance to your local RTO or via the Parivahan portal to cancel the hypothecation endorsement under Section 51 of the Motor Vehicles Act.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How does car loan settlement affect my CIBIL score?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'The loan account is marked as "Settled" on your credit bureau reports. While this temporarily impacts your credit score, it halts compounding DPD default marks and legal proceedings. With disciplined credit rebuilding steps—such as secured credit cards and prompt utility payments—credit scores typically recover to 750+ within 18 to 24 months.',
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
      <CarLoanSettlementPageClient />
    </>
  );
}
