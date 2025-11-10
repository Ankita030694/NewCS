import { Metadata } from 'next';
import DelhiPageClient from './DelhiPageClient';

const pageUrl = 'https://credsettle.com/services/nbfc-loan-settlement/delhi';

export const metadata: Metadata = {
  title: 'NBFC Loan Settlement Delhi NCR | CredSettle Legal Negotiators',
  description:
    'Resolve NBFC loans across Delhi NCR with CredSettle. RBI-compliant settlements, harassment defence, and structured repayment plans for borrowers in Connaught Place, Gurugram, Noida, Ghaziabad, and Faridabad.',
  keywords: [
    'NBFC loan settlement Delhi',
    'settle NBFC loan NCR',
    'NBFC harassment Delhi complaint',
    'Delhi NBFC OTS',
    'CredSettle Delhi',
    'RBI NBFC ombudsman Delhi',
    'Bajaj Finance settlement Delhi',
    'Tata Capital settlement NCR',
    'payday loan settlement Delhi',
    'business loan settlement Delhi'
  ],
  openGraph: {
    title: 'Delhi NCR NBFC Loan Settlement Specialists | CredSettle',
    description:
      'Dedicated Delhi NCR NBFC settlement desk. Stop harassment, negotiate 40-70% reductions, and secure legal closure with RBI compliant documentation.',
    url: pageUrl,
    siteName: 'CredSettle',
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NBFC Loan Settlement Delhi NCR | CredSettle',
    description:
      'Close NBFC loans legally in Delhi NCR. CredSettle negotiates compliant settlements, protects borrowers, and delivers structured repayment solutions.'
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
  name: 'CredSettle NBFC Loan Settlement Delhi NCR',
  url: 'https://credsettle.com',
  '@id': pageUrl,
  description:
    'CredSettle delivers RBI-compliant NBFC loan settlement solutions for borrowers across Delhi, New Delhi, Gurugram, Noida, Ghaziabad, and Faridabad.',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  areaServed: {
    '@type': 'City',
    name: 'Delhi NCR',
    containsPlace: [
      { '@type': 'City', name: 'New Delhi' },
      { '@type': 'City', name: 'Gurugram' },
      { '@type': 'City', name: 'Noida' },
      { '@type': 'City', name: 'Ghaziabad' },
      { '@type': 'City', name: 'Faridabad' },
      { '@type': 'City', name: 'Dwarka' },
      { '@type': 'City', name: 'South Delhi' },
      { '@type': 'City', name: 'East Delhi' }
    ]
  },
  telephone: '+91-XXXXXXXXXX',
  email: 'support@credsettle.com',
  priceRange: 'Consultation Free',
  serviceType: 'NBFC Loan Settlement',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '4800',
    bestRating: '5',
    worstRating: '1'
  },
  knowsAbout: [
    'NBFC loan settlement',
    'business loan settlement',
    'payday loan settlement',
    'consumer durable loan settlement',
    'RBI borrower rights',
    'Delhi Lok Adalat settlement',
    'NBFC harassment complaint',
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
      name: 'Delhi NCR',
      item: pageUrl
    }
  ]
};

export default function DelhiPage() {
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
      <DelhiPageClient />
    </>
  );
}





