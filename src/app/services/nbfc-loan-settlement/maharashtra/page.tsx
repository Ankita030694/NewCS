import { Metadata } from 'next';
import MaharashtraPageClient from './MaharashtraPageClient';

const pageUrl = 'https://credsettle.com/services/nbfc-loan-settlement/maharashtra';

export const metadata: Metadata = {
  title: 'NBFC Loan Settlement Maharashtra | CredSettle Legal Debt Relief',
  description:
    'Work with CredSettle to close NBFC loans across Maharashtra. Legal RBI-compliant settlements, harassment protection, 40-70% reductions. Specialists for Mumbai, Pune, Nagpur, Nashik borrowers.',
  keywords: [
    'NBFC loan settlement Maharashtra',
    'NBFC settlement Mumbai',
    'NBFC loan reduction Pune',
    'legal NBFC settlement Maharashtra',
    'Bajaj Finance settlement Maharashtra',
    'Mahindra Finance settlement Mumbai',
    'RBI compliant NBFC settlement',
    'stop NBFC harassment Maharashtra',
    'NBFC OTS Maharashtra',
    'CredSettle Maharashtra NBFC'
  ],
  openGraph: {
    title: 'NBFC Loan Settlement Experts in Maharashtra | CredSettle',
    description:
      'Strategic NBFC loan settlement for Maharashtra borrowers. Mumbai to Nagpur coverage, 40-70% average reductions, RBI-compliant negotiation, harassment protection.',
    url: pageUrl,
    siteName: 'CredSettle',
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maharashtra NBFC Loan Settlement | CredSettle',
    description:
      'Close NBFC loans the legal way. CredSettle negotiates settlements across Maharashtra with RBI-compliant processes and harassment protection.'
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
  name: 'CredSettle NBFC Loan Settlement Maharashtra',
  url: 'https://credsettle.com',
  '@id': pageUrl,
  description:
    'CredSettle delivers RBI-compliant NBFC loan settlement support for borrowers in Mumbai, Pune, Nagpur, Nashik, Thane, Aurangabad, Kolhapur and the rest of Maharashtra.',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  areaServed: {
    '@type': 'State',
    name: 'Maharashtra',
    containsPlace: [
      { '@type': 'City', name: 'Mumbai' },
      { '@type': 'City', name: 'Pune' },
      { '@type': 'City', name: 'Nagpur' },
      { '@type': 'City', name: 'Nashik' },
      { '@type': 'City', name: 'Thane' },
      { '@type': 'City', name: 'Aurangabad' },
      { '@type': 'City', name: 'Kolhapur' },
      { '@type': 'City', name: 'Solapur' }
    ]
  },
  telephone: '+91-XXXXXXXXXX',
  email: 'support@credsettle.com',
  priceRange: 'Consultation Free',
  serviceType: 'NBFC Loan Settlement',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '6200',
    bestRating: '5',
    worstRating: '1'
  },
  knowsAbout: [
    'NBFC loan settlement',
    'Bajaj Finance settlement',
    'Mahindra Finance settlement',
    'Tata Capital settlement',
    'Muthoot Finance settlement',
    'Shriram City settlement',
    'RBI borrower rights',
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
      name: 'Maharashtra',
      item: pageUrl
    }
  ]
};

export default function MaharashtraPage() {
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
      <MaharashtraPageClient />
    </>
  );
}



