import { Metadata } from 'next';
import WestBengalPageClient from './WestBengalPageClient';

const pageUrl = 'https://credsettle.com/services/nbfc-loan-settlement/west-bengal';

export const metadata: Metadata = {
  title: 'NBFC Loan Settlement West Bengal | CredSettle Port and Tea Belt Desk',
  description:
    'Resolve NBFC loans across West Bengal with CredSettle. Kolkata, Howrah, Siliguri, Durgapur, and Haldia borrowers receive RBI-compliant negotiation, harassment defence, and structured repayment planning.',
  keywords: [
    'NBFC loan settlement West Bengal',
    'NBFC settlement Kolkata',
    'Siliguri NBFC debt help',
    'Durgapur NBFC loan waiver',
    'CredSettle West Bengal',
    'stop NBFC harassment West Bengal',
    'microfinance settlement Bengal',
    'business loan settlement Kolkata',
    'RBI ombudsman NBFC Kolkata',
    'Lok Adalat NBFC settlement West Bengal'
  ],
  openGraph: {
    title: 'West Bengal NBFC Loan Settlement Experts | CredSettle',
    description:
      'CredSettle negotiates NBFC settlements for borrowers in Kolkata, Howrah, Durgapur, Asansol, Siliguri, and coastal districts with RBI compliant playbooks and Lok Adalat support.',
    url: pageUrl,
    siteName: 'CredSettle',
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NBFC Loan Settlement West Bengal | CredSettle',
    description:
      'West Bengal focused NBFC settlement team that halts coercive recovery, negotiates waivers, and secures legal closure backed by RBI norms.'
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
  name: 'CredSettle NBFC Loan Settlement West Bengal',
  url: 'https://credsettle.com',
  '@id': pageUrl,
  description:
    'CredSettle negotiates NBFC settlements for borrowers in Kolkata, Howrah, Salt Lake, Durgapur, Asansol, Siliguri, Jalpaiguri, and Haldia with RBI and West Bengal legal compliance.',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  areaServed: {
    '@type': 'State',
    name: 'West Bengal',
    containsPlace: [
      { '@type': 'City', name: 'Kolkata' },
      { '@type': 'City', name: 'Howrah' },
      { '@type': 'City', name: 'Durgapur' },
      { '@type': 'City', name: 'Asansol' },
      { '@type': 'City', name: 'Siliguri' },
      { '@type': 'City', name: 'Jalpaiguri' },
      { '@type': 'City', name: 'Haldia' },
      { '@type': 'City', name: 'Kharagpur' }
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
    'Lok Adalat settlement West Bengal',
    'microfinance settlement Bengal',
    'vehicle loan settlement West Bengal',
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
      name: 'West Bengal',
      item: pageUrl
    }
  ]
};

export default function WestBengalPage() {
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
      <WestBengalPageClient />
    </>
  );
}






