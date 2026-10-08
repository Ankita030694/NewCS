import type { Metadata } from 'next';
import PersonalLoanSettlementPageClient from './PersonalLoanSettlementPageClient';

export const metadata: Metadata = {
  title: 'Personal Loan Settlement in India (2026 Guide) | Settle Dues Legally | CredSettle',
  description:
    'Comprehensive master guide to personal loan settlement in India. Learn RBI compromise settlement rules, 50% waiver realities, recovery agent defense, CIBIL repair, and legal process with banks & NBFCs.',
  keywords: [
    'personal loan settlement',
    'settle personal loan India',
    'personal loan settlement process',
    'personal loan waiver',
    'RBI personal loan settlement guidelines',
    'stop personal loan recovery harassment',
    'personal loan settlement CIBIL impact',
    'OTS personal loan calculation',
    'personal loan settlement lawyer',
    'CredSettle personal loan settlement'
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/services/personal-loan-settlement',
  },
  openGraph: {
    title: 'Personal Loan Settlement in India — Complete Legal & Financial Guide | CredSettle',
    description:
      'Learn how to legally settle personal loans with Indian banks and NBFCs, stop recovery harassment under RBI rules, calculate your OTS waiver, and rebuild credit.',
    url: 'https://www.credsettle.com/services/personal-loan-settlement',
    type: 'website',
    images: [
      {
        url: 'https://www.credsettle.com/personalhero.png',
        width: 1200,
        height: 630,
        alt: 'Personal Loan Settlement Guide - CredSettle'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Loan Settlement in India — Complete Legal Guide | CredSettle',
    description:
      'Step-by-step personal loan settlement procedure, RBI guidelines, legal rights against recovery agents, and CIBIL score rehabilitation.',
    images: ['https://www.credsettle.com/personalhero.png'],
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
};

export default function PersonalLoanSettlementPage() {
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
                '@id': 'https://www.credsettle.com/services/personal-loan-settlement#webpage',
                url: 'https://www.credsettle.com/services/personal-loan-settlement',
                name: 'Personal Loan Settlement in India — Master Guide & Legal Relief | CredSettle',
                description:
                  'Complete guide to personal loan compromise settlement with banks & NBFCs under RBI guidelines, stopping recovery harassment, and rebuilding credit.',
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
                      name: 'Personal Loan Settlement',
                      item: 'https://www.credsettle.com/services/personal-loan-settlement',
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
                image: 'https://www.credsettle.com/personalhero.png',
                description:
                  'Specialized legal advisory and negotiation firm for personal loan settlements, recovery harassment defense, and compromise settlements across India.',
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
            ],
          }),
        }}
      />
      <PersonalLoanSettlementPageClient />
    </>
  );
}
