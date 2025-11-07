import { Metadata } from 'next';
import UttarPradeshPageClient from './UttarPradeshPageClient';

const pageUrl = 'https://credsettle.com/services/nbfc-loan-settlement/uttar-pradesh';

export const metadata: Metadata = {
  title: 'NBFC Loan Settlement Uttar Pradesh | CredSettle Legal Relief Desk',
  description:
    'Resolve NBFC loans across Uttar Pradesh with CredSettle. Lucknow, Kanpur, Noida, Ghaziabad, and Gorakhpur borrowers receive RBI-compliant negotiation, harassment protection, and structured closure plans.',
  keywords: [
    'NBFC loan settlement Uttar Pradesh',
    'NBFC settlement Lucknow',
    'Noida NBFC debt relief',
    'Kanpur NBFC loan waiver',
    'CredSettle Uttar Pradesh',
    'stop NBFC harassment UP',
    'microfinance settlement Uttar Pradesh',
    'business loan settlement UP',
    'RBI ombudsman NBFC Uttar Pradesh',
    'Lok Adalat NBFC settlement UP'
  ],
  openGraph: {
    title: 'Uttar Pradesh NBFC Loan Settlement Experts | CredSettle',
    description:
      'Negotiated NBFC settlements for borrowers across Noida, Lucknow, Kanpur, Ghaziabad, Meerut, Varanasi, and Gorakhpur. CredSettle aligns RBI compliance with Uttar Pradesh legal safeguards.',
    url: pageUrl,
    siteName: 'CredSettle',
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NBFC Loan Settlement Uttar Pradesh | CredSettle',
    description:
      'CredSettle’s Uttar Pradesh desk stops coercive recovery, negotiates NBFC waivers, and secures legally compliant closures for borrowers statewide.'
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
  name: 'CredSettle NBFC Loan Settlement Uttar Pradesh',
  url: 'https://credsettle.com',
  '@id': pageUrl,
  description:
    'CredSettle negotiates NBFC settlements for borrowers in Lucknow, Kanpur, Noida, Ghaziabad, Meerut, Varanasi, Gorakhpur, Agra, and across Uttar Pradesh with RBI compliant strategies.',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  areaServed: {
    '@type': 'State',
    name: 'Uttar Pradesh',
    containsPlace: [
      { '@type': 'City', name: 'Lucknow' },
      { '@type': 'City', name: 'Kanpur' },
      { '@type': 'City', name: 'Noida' },
      { '@type': 'City', name: 'Ghaziabad' },
      { '@type': 'City', name: 'Meerut' },
      { '@type': 'City', name: 'Varanasi' },
      { '@type': 'City', name: 'Gorakhpur' },
      { '@type': 'City', name: 'Agra' }
    ]
  },
  telephone: '+91-XXXXXXXXXX',
  email: 'support@credsettle.com',
  priceRange: 'Consultation Free',
  serviceType: 'NBFC Loan Settlement',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '5200',
    bestRating: '5',
    worstRating: '1'
  },
  knowsAbout: [
    'NBFC loan settlement',
    'Uttar Pradesh Lok Adalat settlement',
    'microfinance settlement Uttar Pradesh',
    'vehicle loan settlement UP',
    'RBI borrower rights',
    'One Time Settlement',
    'digital lending compliance'
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
      name: 'Uttar Pradesh',
      item: pageUrl
    }
  ]
};

export default function UttarPradeshPage() {
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
      <UttarPradeshPageClient />
    </>
  );
}


