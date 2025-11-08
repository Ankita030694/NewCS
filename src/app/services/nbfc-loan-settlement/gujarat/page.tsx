import { Metadata } from 'next';
import GujaratPageClient from './GujaratPageClient';

const pageUrl = 'https://credsettle.com/services/nbfc-loan-settlement/gujarat';

export const metadata: Metadata = {
  title: 'NBFC Loan Settlement Gujarat | CredSettle Industrial Corridor Desk',
  description:
    'Resolve NBFC loans across Gujarat with CredSettle. Ahmedabad, Surat, Vadodara, Rajkot, and Kutch borrowers receive RBI compliant negotiation, harassment defence, and structured repayment planning.',
  keywords: [
    'NBFC loan settlement Gujarat',
    'NBFC settlement Ahmedabad',
    'Surat NBFC debt relief',
    'Vadodara NBFC loan waiver',
    'CredSettle Gujarat',
    'stop NBFC harassment Gujarat',
    'microfinance settlement Gujarat',
    'business loan settlement Surat',
    'RBI ombudsman NBFC Ahmedabad',
    'Lok Adalat NBFC settlement Gujarat'
  ],
  openGraph: {
    title: 'Gujarat NBFC Loan Settlement Experts | CredSettle',
    description:
      'CredSettle negotiates NBFC settlements for borrowers in Ahmedabad, Surat, Vadodara, Rajkot, Bhavnagar, and Kutch with RBI compliant strategies and Gujarat Lok Adalat support.',
    url: pageUrl,
    siteName: 'CredSettle',
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NBFC Loan Settlement Gujarat | CredSettle',
    description:
      'Gujarat focused NBFC settlement team that halts coercive recovery, secures waivers, and delivers legally sound closures for industrial and agri borrowers.'
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
  name: 'CredSettle NBFC Loan Settlement Gujarat',
  url: 'https://credsettle.com',
  '@id': pageUrl,
  description:
    'CredSettle negotiates NBFC settlements for borrowers in Ahmedabad, Surat, Vadodara, Rajkot, Bhavnagar, Bharuch, Kutch, and Jamnagar with RBI and Gujarat legal compliance.',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  areaServed: {
    '@type': 'State',
    name: 'Gujarat',
    containsPlace: [
      { '@type': 'City', name: 'Ahmedabad' },
      { '@type': 'City', name: 'Surat' },
      { '@type': 'City', name: 'Vadodara' },
      { '@type': 'City', name: 'Rajkot' },
      { '@type': 'City', name: 'Bhavnagar' },
      { '@type': 'City', name: 'Bharuch' },
      { '@type': 'City', name: 'Gandhidham' },
      { '@type': 'City', name: 'Jamnagar' }
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
    'Gujarat Lok Adalat settlement',
    'microfinance settlement Gujarat',
    'vehicle loan settlement Gujarat',
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
      name: 'Gujarat',
      item: pageUrl
    }
  ]
};

export default function GujaratPage() {
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
      <GujaratPageClient />
    </>
  );
}




