import { Metadata } from 'next';
import KarnatakaPageClient from './KarnatakaPageClient';

export const metadata: Metadata = {
  title: 'Loan Settlement Bangalore Karnataka | Reduce Debt 70% | IT Professionals | CredSettle',
  description: 'Personal loan settlement in Bangalore, Mysore, Mangalore, Hubli. Save 30-70% on debt. Bangalore IT sector specialists. RBI legal process. 10000+ Karnataka clients. Free consultation.',
  keywords: [
    'loan settlement Bangalore',
    'personal loan settlement Bengaluru',
    'debt settlement Karnataka',
    'loan settlement Mysore',
    'Bangalore loan settlement company',
    'IT professional loan settlement',
    'startup loan settlement Bangalore',
    'HDFC loan settlement Bangalore',
    'ICICI loan settlement Karnataka',
    'Bajaj Finserv settlement Bangalore',
    'tech sector debt relief Bangalore',
    'RBI compliant loan settlement Karnataka',
    'Lok Adalat Bangalore loan settlement',
    'stop loan harassment Bangalore',
    'legal loan settlement Mysore',
    'credit card settlement Bangalore',
    'NBFC loan settlement Karnataka',
    'personal loan waiver Bangalore',
    'bank loan settlement Mangalore',
    'debt negotiation Hubli',
    'loan settlement Belgaum',
    'CredSettle Bangalore office',
    'best loan settlement company Karnataka',
    'Whitefield loan settlement',
    'Koramangala debt relief'
  ],
  openGraph: {
    title: 'Loan Settlement Bangalore Karnataka | Save 70% Debt | CredSettle',
    description: 'Bangalore and Karnataka loan settlement experts. 10000+ cases, 62% average savings. IT sector specialists. Stop harassment in 3 days.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement Bangalore | 70% Debt Cut | CredSettle Karnataka',
    description: 'Legal loan settlement in Bangalore, Mysore, Mangalore. IT professionals, startups. Stop harassment, reduce debt 70%.'
  },
  alternates: {
    canonical: 'https://credsettle.com/services/personal-loan-settlement/karnataka'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  '@id': 'https://credsettle.com/services/personal-loan-settlement/karnataka',
  name: 'CredSettle Personal Loan Settlement Karnataka',
  legalName: 'CredSettle Legal Services',
  url: 'https://credsettle.com',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  description: 'Professional personal loan settlement services in Karnataka. Legal RBI-compliant debt resolution for Bangalore, Mysore, Mangalore borrowers. IT sector specialists.',
  telephone: '+91-XXXXXXXXXX',
  email: 'support@credsettle.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    addressCountry: 'IN'
  },
  areaServed: [
    {
      '@type': 'State',
      name: 'Karnataka',
      containsPlace: [
        { '@type': 'City', name: 'Bangalore' },
        { '@type': 'City', name: 'Bengaluru' },
        { '@type': 'City', name: 'Mysore' },
        { '@type': 'City', name: 'Mysuru' },
        { '@type': 'City', name: 'Mangalore' },
        { '@type': 'City', name: 'Hubli' },
        { '@type': 'City', name: 'Belgaum' },
        { '@type': 'City', name: 'Gulbarga' },
        { '@type': 'City', name: 'Davangere' }
      ]
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '10000',
    bestRating: '5',
    worstRating: '1'
  },
  priceRange: 'Consultation Free',
  serviceType: 'Personal Loan Settlement',
  knowsAbout: [
    'Personal Loan Settlement',
    'IT Professional Debt Relief',
    'Startup Loan Settlement',
    'Credit Card Debt Settlement',
    'NBFC Loan Settlement',
    'Bank Loan Negotiation',
    'Lok Adalat Representation',
    'RBI Guidelines',
    'Tech Sector Debt Resolution'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Loan Settlement Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IT Professional Loan Settlement',
          description: 'Specialized settlement services for Bangalore tech professionals and startup employees'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Personal Loan Settlement',
          description: 'Reduce personal loan debt by 30-70% through legal negotiation'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Credit Card Settlement',
          description: 'Stop revolving interest and settle credit card debt'
        }
      }
    ]
  }
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
      name: 'Personal Loan Settlement',
      item: 'https://credsettle.com/services/personal-loan-settlement'
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Karnataka',
      item: 'https://credsettle.com/services/personal-loan-settlement/karnataka'
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CredSettle Karnataka',
  image: 'https://credsettle.com/credsettle-logo.svg',
  '@id': 'https://credsettle.com/services/personal-loan-settlement/karnataka',
  url: 'https://credsettle.com/services/personal-loan-settlement/karnataka',
  telephone: '+91-XXXXXXXXXX',
  priceRange: 'Free Consultation',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 12.9716,
    longitude: 77.5946
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    opens: '09:00',
    closes: '18:00'
  },
  sameAs: [
    'https://www.facebook.com/credsettle',
    'https://www.linkedin.com/company/credsettle'
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <KarnatakaPageClient />
    </>
  );
}




