import { Metadata } from 'next';
import KarnatakaPageClient from './KarnatakaPageClient';

export const metadata: Metadata = {
  title: 'Credit Card Settlement Bangalore Karnataka | Save 60% | Stop Calls | CredSettle',
  description: 'Credit card settlement in Bangalore, Mysore, Mangalore. Startup debt, tech spending, multiple cards. Reduce debt 40-75%. Legal RBI-compliant. 6,500+ Karnataka clients debt-free.',
  keywords: [
    'credit card settlement Bangalore',
    'credit card debt relief Karnataka',
    'settle credit card debt Bangalore',
    'HDFC credit card settlement Bangalore',
    'ICICI credit card settlement Karnataka',
    'SBI credit card settlement',
    'Axis Bank credit card settlement',
    'multiple credit card debt Bangalore',
    'startup debt settlement',
    'tech professional debt help',
    'credit card harassment Bangalore',
    'stop credit card collection calls',
    'legal credit card settlement Karnataka',
    'RBI credit card settlement rules',
    'reduce credit card debt 60%',
    'credit card settlement company Bangalore',
    'CredSettle Bangalore office'
  ],
  openGraph: {
    title: 'Credit Card Settlement Bangalore Karnataka | Save 60% on Card Debt | CredSettle',
    description: 'Karnataka credit card settlement experts. 6,500+ cases settled. Startup debt, tech spending, multiple cards. Average 57% savings.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card Settlement Bangalore | 60% Debt Cut | CredSettle',
    description: 'Legal credit card settlement in Bangalore, Mysore, Mangalore. Stop harassment, reduce debt 40-75%. RBI-compliant process.'
  },
  alternates: {
    canonical: 'https://credsettle.com/services/credit-card-settlement/karnataka'
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
  '@id': 'https://credsettle.com/services/credit-card-settlement/karnataka',
  name: 'CredSettle Credit Card Settlement Karnataka',
  legalName: 'CredSettle Legal Services',
  url: 'https://credsettle.com',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  description: 'Professional credit card settlement services in Karnataka. Legal RBI-compliant debt resolution for Bangalore, Mysore, Mangalore borrowers. Tech professional debt specialists.',
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
        { '@type': 'City', name: 'Mysore' },
        { '@type': 'City', name: 'Mangalore' },
        { '@type': 'City', name: 'Hubli' },
        { '@type': 'City', name: 'Belgaum' }
      ]
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '6500',
    bestRating: '5',
    worstRating: '1'
  },
  priceRange: 'Consultation Free',
  serviceType: 'Credit Card Settlement',
  knowsAbout: [
    'Credit Card Settlement',
    'Multiple Card Debt Resolution',
    'Startup Debt Management',
    'Tech Professional Debt Help',
    'EMI Trap Solutions',
    'Credit Card Harassment Protection',
    'HDFC Credit Card Settlement',
    'ICICI Credit Card Settlement',
    'Axis Bank Card Settlement',
    'RBI Guidelines Credit Cards'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Credit Card Settlement Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Multiple Credit Card Settlement',
          description: 'Settle debt across 3-7 credit cards with single negotiation strategy'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Startup Debt Resolution',
          description: 'Special handling for startup founders using personal cards for business'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Credit Card Debt Settlement',
          description: 'Reduce credit card debt through legal RBI-compliant negotiation'
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
      name: 'Credit Card Settlement',
      item: 'https://credsettle.com/services/credit-card-settlement'
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Karnataka',
      item: 'https://credsettle.com/services/credit-card-settlement/karnataka'
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CredSettle Karnataka Credit Card Settlement',
  image: 'https://credsettle.com/credsettle-logo.svg',
  '@id': 'https://credsettle.com/services/credit-card-settlement/karnataka',
  url: 'https://credsettle.com/services/credit-card-settlement/karnataka',
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




