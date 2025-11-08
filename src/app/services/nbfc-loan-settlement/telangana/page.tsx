import { Metadata } from 'next';
import TelanganaPageClient from './TelanganaPageClient';

const pageUrl = 'https://credsettle.com/services/nbfc-loan-settlement/telangana';

export const metadata: Metadata = {
  title: 'NBFC Loan Settlement Telangana | CredSettle HITEC and Heartland Desk',
  description:
    'Resolve NBFC loans across Telangana with CredSettle. Hyderabad, Warangal, Karimnagar, Nizamabad, and Khammam borrowers receive RBI compliant negotiation, harassment defence, and structured repayment planning.',
  keywords: [
    'NBFC loan settlement Telangana',
    'NBFC settlement Hyderabad',
    'Warangal NBFC debt relief',
    'Karimnagar NBFC loan waiver',
    'CredSettle Telangana',
    'stop NBFC harassment Telangana',
    'microfinance settlement Telangana',
    'business loan settlement Hyderabad',
    'RBI ombudsman NBFC Telangana',
    'Lok Adalat NBFC settlement Telangana'
  ],
  openGraph: {
    title: 'Telangana NBFC Loan Settlement Experts | CredSettle',
    description:
      'CredSettle negotiates NBFC settlements for borrowers in Hyderabad, Warangal, Karimnagar, Nizamabad, Khammam, and beyond with RBI compliant playbooks and Telangana relief precedents.',
    url: pageUrl,
    siteName: 'CredSettle',
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NBFC Loan Settlement Telangana | CredSettle',
    description:
      'Telangana focused NBFC settlement team that halts coercive recovery, secures waivers, and delivers legally sound closures for IT, pharma, and agri borrowers.'
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
  name: 'CredSettle NBFC Loan Settlement Telangana',
  url: 'https://credsettle.com',
  '@id': pageUrl,
  description:
    'CredSettle negotiates NBFC settlements for borrowers in Hyderabad, Warangal, Karimnagar, Nizamabad, Khammam, Adilabad, Siddipet, and Mahabubnagar with RBI and Telangana legal compliance.',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  areaServed: {
    '@type': 'State',
    name: 'Telangana',
    containsPlace: [
      { '@type': 'City', name: 'Hyderabad' },
      { '@type': 'City', name: 'Warangal' },
      { '@type': 'City', name: 'Karimnagar' },
      { '@type': 'City', name: 'Nizamabad' },
      { '@type': 'City', name: 'Khammam' },
      { '@type': 'City', name: 'Adilabad' },
      { '@type': 'City', name: 'Siddipet' },
      { '@type': 'City', name: 'Mahabubnagar' }
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
    'Telangana Lok Adalat settlement',
    'microfinance settlement Telangana',
    'vehicle loan settlement Telangana',
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
      name: 'Telangana',
      item: pageUrl
    }
  ]
};

export default function TelanganaPage() {
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
      <TelanganaPageClient />
    </>
  );
}




