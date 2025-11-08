import { Metadata } from 'next';
import AndhraPradeshPageClient from './AndhraPradeshPageClient';

const pageUrl = 'https://credsettle.com/services/nbfc-loan-settlement/andhra-pradesh';

export const metadata: Metadata = {
  title: 'NBFC Loan Settlement Andhra Pradesh | CredSettle Legal Solutions',
  description:
    'Resolve NBFC loans in Andhra Pradesh with CredSettle. Andhra-specific negotiation strategies, RBI compliance, harassment defence, and structured settlements for borrowers in Visakhapatnam, Vijayawada, Tirupati, and beyond.',
  keywords: [
    'NBFC loan settlement Andhra Pradesh',
    'NBFC settlement Visakhapatnam',
    'CredSettle Andhra Pradesh',
    'RBI NBFC ombudsman Chennai',
    'microfinance settlement Andhra',
    'NBFC harassment Andhra',
    'business loan settlement Vijayawada',
    'SARFAESI arbitration Andhra case',
    'Andhra Pradesh Lok Adalat settlement',
    'farm equipment loan Andhra settlement'
  ],
  openGraph: {
    title: 'Andhra Pradesh NBFC Loan Settlement Experts | CredSettle',
    description:
      'Stop NBFC harassment and negotiate 40-70% reductions across Andhra Pradesh. CredSettle leverages RBI rules and AP dispute forums to secure compliant settlements.',
    url: pageUrl,
    siteName: 'CredSettle',
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NBFC Loan Settlement Andhra Pradesh | CredSettle',
    description:
      'Legal settlement support for Andhra Pradesh borrowers. CredSettle handles NBFC negotiations across Vizag, Vijayawada, Tirupati, Rajahmundry, and Guntur.'
  },
  alternates: {
    canonical: pageUrl
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  }
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'CredSettle NBFC Loan Settlement Andhra Pradesh',
  url: 'https://credsettle.com',
  '@id': pageUrl,
  description:
    'CredSettle negotiates NBFC loan settlements for borrowers in Visakhapatnam, Vijayawada, Guntur, Tirupati, Rajahmundry, Nellore, Kurnool, and Anantapur with RBI-compliant strategies.',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  areaServed: {
    '@type': 'State',
    name: 'Andhra Pradesh',
    containsPlace: [
      { '@type': 'City', name: 'Visakhapatnam' },
      { '@type': 'City', name: 'Vijayawada' },
      { '@type': 'City', name: 'Guntur' },
      { '@type': 'City', name: 'Rajahmundry' },
      { '@type': 'City', name: 'Tirupati' },
      { '@type': 'City', name: 'Kurnool' },
      { '@type': 'City', name: 'Anantapur' },
      { '@type': 'City', name: 'Nellore' }
    ]
  },
  telephone: '+91-XXXXXXXXXX',
  email: 'support@credsettle.com',
  priceRange: 'Consultation Free',
  serviceType: 'NBFC Loan Settlement',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '4100',
    bestRating: '5',
    worstRating: '1'
  },
  knowsAbout: [
    'NBFC loan settlement',
    'microfinance settlement Andhra Pradesh',
    'business loan settlement',
    'vehicle loan settlement',
    'RBI borrower rights',
    'Andhra Pradesh Lok Adalat',
    'One Time Settlement'
  ]
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://credsettle.com'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://credsettle.com/services'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'NBFC Loan Settlement',
      item: 'https://credsettle.com/services/nbfc-loan-settlement'
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Andhra Pradesh',
      item: pageUrl
    }
  ]
};

export default function AndhraPradeshPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AndhraPradeshPageClient />
    </>
  );
}




