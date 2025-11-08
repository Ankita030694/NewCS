import { Metadata } from 'next';
import KarnatakaPageClient from './KarnatakaPageClient';

const pageUrl = 'https://credsettle.com/services/nbfc-loan-settlement/karnataka';

export const metadata: Metadata = {
  title: 'NBFC Loan Settlement Karnataka | CredSettle Legal Debt Strategy',
  description:
    'Negotiate NBFC loan settlements across Karnataka with CredSettle. Bengaluru, Mysuru, Hubballi borrowers get RBI-compliant negotiations, harassment protection, and structured repayment solutions.',
  keywords: [
    'NBFC loan settlement Karnataka',
    'NBFC settlement Bengaluru',
    'Karnataka micro loan settlement',
    'CredSettle Karnataka',
    'RBI NBFC ombudsman Bengaluru',
    'fintech settlement Karnataka',
    'business loan settlement Karnataka',
    'microfinance settlement Karnataka',
    'stop NBFC harassment Karnataka',
    'Karnataka coercive recovery law'
  ],
  openGraph: {
    title: 'Karnataka NBFC Loan Settlement Experts | CredSettle',
    description:
      'Resolve NBFC loans in Bengaluru, Mysuru, Mangaluru, Hubballi, Belagavi, and beyond. CredSettle delivers RBI-compliant settlements and legal protection under Karnataka’s new recovery law.',
    url: pageUrl,
    siteName: 'CredSettle',
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NBFC Loan Settlement Karnataka | CredSettle',
    description:
      'Karnataka-focused NBFC settlement support. CredSettle negotiates compliant closures, stops coercive recovery, and protects borrowers under state regulations.'
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
  name: 'CredSettle NBFC Loan Settlement Karnataka',
  url: 'https://credsettle.com',
  '@id': pageUrl,
  description:
    'CredSettle negotiates NBFC loan settlements for borrowers in Bengaluru, Mysuru, Mangaluru, Hubballi-Dharwad, Belagavi, and Ballari with RBI and Karnataka law compliance.',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  areaServed: {
    '@type': 'State',
    name: 'Karnataka',
    containsPlace: [
      { '@type': 'City', name: 'Bengaluru' },
      { '@type': 'City', name: 'Mysuru' },
      { '@type': 'City', name: 'Mangaluru' },
      { '@type': 'City', name: 'Hubballi-Dharwad' },
      { '@type': 'City', name: 'Belagavi' },
      { '@type': 'City', name: 'Ballari' },
      { '@type': 'City', name: 'Shivamogga' },
      { '@type': 'City', name: 'Davangere' }
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
    'micro loan settlement Karnataka',
    'business loan settlement',
    'vehicle loan settlement',
    'RBI borrower rights',
    'Karnataka recovery law',
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
      name: 'Karnataka',
      item: pageUrl
    }
  ]
};

export default function KarnatakaPage() {
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
      <KarnatakaPageClient />
    </>
  );
}



