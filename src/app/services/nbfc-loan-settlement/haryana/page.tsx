import { Metadata } from 'next';
import HaryanaPageClient from './HaryanaPageClient';

const pageUrl = 'https://credsettle.com/services/nbfc-loan-settlement/haryana';

export const metadata: Metadata = {
  title: 'NBFC Loan Settlement Haryana | CredSettle NCR Industrial Desk',
  description:
    'Resolve NBFC loans across Haryana with CredSettle. Gurugram, Manesar, Faridabad, Panipat, and Hisar borrowers receive RBI compliant negotiation, harassment defence, and structured repayment planning.',
  keywords: [
    'NBFC loan settlement Haryana',
    'NBFC settlement Gurugram',
    'Faridabad NBFC debt relief',
    'Panipat NBFC loan waiver',
    'CredSettle Haryana',
    'stop NBFC harassment Haryana',
    'microfinance settlement Haryana',
    'business loan settlement Manesar',
    'RBI ombudsman NBFC Haryana',
    'Lok Adalat NBFC settlement Haryana'
  ],
  openGraph: {
    title: 'Haryana NBFC Loan Settlement Experts | CredSettle',
    description:
      'CredSettle negotiates NBFC settlements for borrowers in Gurugram, Faridabad, Panipat, Sonipat, Hisar, and Rohtak with RBI compliant playbooks and Haryana relief precedents.',
    url: pageUrl,
    siteName: 'CredSettle',
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NBFC Loan Settlement Haryana | CredSettle',
    description:
      'Haryana focused NBFC settlement team that halts coercive recovery, secures waivers, and delivers legally sound closures for NCR and rural borrowers.'
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
  name: 'CredSettle NBFC Loan Settlement Haryana',
  url: 'https://credsettle.com',
  '@id': pageUrl,
  description:
    'CredSettle negotiates NBFC settlements for borrowers in Gurugram, Manesar, Faridabad, Panipat, Sonipat, Hisar, Karnal, and Rohtak with RBI and Haryana legal compliance.',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  areaServed: {
    '@type': 'State',
    name: 'Haryana',
    containsPlace: [
      { '@type': 'City', name: 'Gurugram' },
      { '@type': 'City', name: 'Manesar' },
      { '@type': 'City', name: 'Faridabad' },
      { '@type': 'City', name: 'Panipat' },
      { '@type': 'City', name: 'Sonipat' },
      { '@type': 'City', name: 'Hisar' },
      { '@type': 'City', name: 'Karnal' },
      { '@type': 'City', name: 'Rohtak' }
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
    'Haryana Lok Adalat settlement',
    'microfinance settlement Haryana',
    'vehicle loan settlement Haryana',
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
      name: 'Haryana',
      item: pageUrl
    }
  ]
};

export default function HaryanaPage() {
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
      <HaryanaPageClient />
    </>
  );
}



