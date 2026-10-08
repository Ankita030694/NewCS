import type { Metadata } from 'next';
import CreditCardSettlementPageClient from './CreditCardSettlementPageClient';

export const metadata: Metadata = {
  title: 'Credit Card Settlement in India (2026 Guide) | Settle Card Dues Legally | CredSettle',
  description:
    'Master legal and financial guide to credit card settlement in India. Learn how to stop 42%–52% compounding finance charges, defend against recovery harassment under RBI directives, negotiate 50%–75% waivers, and rebuild CIBIL score.',
  keywords: [
    'credit card settlement',
    'settle credit card debt India',
    'credit card settlement process',
    'credit card waiver',
    'RBI credit card settlement guidelines',
    'stop credit card recovery calls',
    'credit card settlement CIBIL impact',
    'credit card OTS calculation',
    'credit card debt relief lawyer',
    'CredSettle credit card settlement'
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/services/credit-card-settlement',
  },
  openGraph: {
    title: 'Credit Card Settlement in India — Definitive Legal & Financial Guide | CredSettle',
    description:
      'Learn how to legally settle credit card debt with Indian banks, eliminate compounding 42% interest, halt recovery agent harassment under RBI rules, and obtain official No Dues Certificates.',
    url: 'https://www.credsettle.com/services/credit-card-settlement',
    type: 'website',
    images: [
      {
        url: 'https://www.credsettle.com/credit_card_hero.png',
        width: 1200,
        height: 630,
        alt: 'Credit Card Settlement Guide - CredSettle'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card Settlement in India — Complete Legal Guide | CredSettle',
    description:
      'Step-by-step credit card settlement procedure, RBI guidelines, legal rights against collection harassment, and CIBIL score rehabilitation.',
    images: ['https://www.credsettle.com/credit_card_hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
};

export default function CreditCardSettlementPage() {
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
                '@id': 'https://www.credsettle.com/services/credit-card-settlement#webpage',
                url: 'https://www.credsettle.com/services/credit-card-settlement',
                name: 'Credit Card Settlement in India — Master Guide & Legal Debt Relief | CredSettle',
                description:
                  'Definitive guide to credit card One-Time Settlement (OTS) with major Indian banks under RBI guidelines, stopping recovery harassment, and rebuilding CIBIL score.',
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
                      name: 'Credit Card Settlement',
                      item: 'https://www.credsettle.com/services/credit-card-settlement',
                    },
                  ],
                },
              },
              {
                '@type': 'LegalService',
                '@id': 'https://www.credsettle.com/#legalservice',
                name: 'CredSettle Debt Resolution & Legal Advisory',
                url: 'https://www.credsettle.com',
                logo: 'https://www.credsettle.com/logo.png',
                image: 'https://www.credsettle.com/credit_card_hero.png',
                description:
                  'Specialized legal advisory and negotiation firm for credit card settlements, recovery harassment defense, and compromise settlements across India.',
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
                '@id': 'https://www.credsettle.com/services/credit-card-settlement#faq',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What is credit card settlement and how does it legally extinguish card debt in India?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Credit card settlement is a formal compromise contract between a cardholder and the issuing bank. Under a sanctioned OTS, the issuer waives 100% of penal fees and finance charges, concedes a commercial haircut on the core purchase principal, and accepts a discounted payment to permanently extinguish all debt liabilities and issue an official No Dues Certificate.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'Is credit card settlement officially recognized and approved by the Reserve Bank of India (RBI)?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. The Reserve Bank of India formalized compromise settlements across all scheduled commercial banks and NBFCs through its circular DOR.STR.REC.20/21.04.048/2023-24 dated June 8, 2023 along with the Master Direction on Credit Card and Debit Card Operations, 2022.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'Can recovery agents harass my family members, call my workplace, or visit my home at odd hours?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'No. Under the RBI Master Circular on Recovery Agents in Banks (August 12, 2022), collection agents are strictly prohibited from calling before 8:00 AM or after 7:00 PM, visiting without official bank ID cards, contacting relatives or workplace colleagues, or using abusive language.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I be arrested or sent to jail for defaulting on a credit card in India?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'No. Defaulting on credit card debt due to genuine financial inability is strictly a civil dispute. The Supreme Court of India established in Jolly George Varghese v. The Bank of Cochin (1980 AIR 470) that simple inability to pay a civil debt cannot lead to arrest or imprisonment under Article 21 of the Constitution.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'How does credit card settlement impact my CIBIL credit score and bureau report?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'The issuer reports the account status as "Settled" with zero current balance and zero overdue amount. While your score experiences an initial dip of 75 to 120 points, settlement halts continuous monthly negative reporting and allows your score to recover to 750+ within 18 to 24 months.'
                    }
                  }
                ]
              }
            ],
          }),
        }}
      />
      <CreditCardSettlementPageClient />
    </>
  );
}
