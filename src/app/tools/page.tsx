import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToolsPageClient from './ToolsPageClient';

export const metadata: Metadata = {
  title: 'Debt Settlement & Legal Defense Tools | CredSettle',
  description:
    'Calculate loan settlement payouts, check DTI ratios & generate RBI recovery harassment complaints with free financial tools from CredSettle.',
  keywords: [
    'debt settlement tools',
    'loan settlement calculator india',
    'credit card settlement calculator',
    'rbi recovery agent complaint generator',
    'debt to income ratio calculator',
    'legal notice verifier',
    'cibil score recovery calculator',
    'credsettle tools'
  ],
  openGraph: {
    title: 'Debt Settlement & Legal Defense Tools | CredSettle',
    description:
      'Calculate loan settlement payouts, check DTI ratios & generate RBI recovery harassment complaints with free financial tools from CredSettle.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/tools',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'CredSettle Free Debt Resolution and Legal Tools'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Debt Settlement & Legal Defense Tools | CredSettle',
    description:
      'Calculate loan settlement payouts, check DTI ratios & generate RBI recovery harassment complaints with free financial tools from CredSettle.',
    images: ['https://www.credsettle.com/credsettle-logo-black.png']
  },
  alternates: {
    canonical: 'https://www.credsettle.com/tools'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function ToolsPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://www.credsettle.com/tools#page',
        url: 'https://www.credsettle.com/tools',
        name: 'Free Debt Resolution & Legal Protection Tools | CredSettle',
        description:
          'Comprehensive suite of financial calculators, RBI harassment complaint utilities, and debt settlement tools designed for Indian borrowers.',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://www.credsettle.com/#website',
          name: 'CredSettle',
          url: 'https://www.credsettle.com'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.credsettle.com/tools#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.credsettle.com/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Tools',
            item: 'https://www.credsettle.com/tools'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/tools#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Are the financial tools on CredSettle free to use?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. All calculators, DTI estimators, and complaint templates on CredSettle are 100% free with no hidden charges, mandatory login, or commercial obligation.'
            }
          },
          {
            '@type': 'Question',
            name: 'How accurate are the settlement payout calculations?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our calculators model real-world RBI compromise settlement guidelines, unbundling 100% of penal fees and applying historical banking haircut ranges (35% to 65%) based on delinquency vintage.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I use the RBI harassment complaint generator against any bank or NBFC?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The complaint tool maps violations directly to the RBI Master Circular on Fair Practices Code, applicable to all scheduled commercial banks, NBFCs, and digital lending apps in India.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does using these tools impact my credit score or alert my bank?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Using our online tools is completely private and runs locally in your browser. No queries are sent to credit bureaus like CIBIL, Equifax, or Experian.'
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedSchema) }}
      />
      <ToolsPageClient />
      <Footer />
    </div>
  );
}
