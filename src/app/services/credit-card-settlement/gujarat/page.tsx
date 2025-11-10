import { Metadata } from 'next';
import GujaratPageClient from './GujaratPageClient';

export const metadata: Metadata = {
  title: 'Credit Card Settlement Ahmedabad Gujarat | Save 60% | Stop Calls | CredSettle',
  description: 'Credit card settlement in Ahmedabad, Surat, Vadodara. Business debt, diamond trade, textile industry. Reduce debt 40-75%. Legal RBI-compliant. 5,600+ Gujarat clients debt-free.',
  keywords: [
    'credit card settlement Ahmedabad',
    'credit card debt relief Gujarat',
    'settle credit card debt Surat',
    'HDFC credit card settlement Ahmedabad',
    'ICICI credit card settlement Gujarat',
    'SBI credit card settlement',
    'Axis Bank credit card settlement',
    'multiple credit card debt Ahmedabad',
    'business debt settlement',
    'diamond trade debt help',
    'textile industry debt',
    'credit card harassment Ahmedabad',
    'stop credit card collection calls',
    'legal credit card settlement Gujarat',
    'RBI credit card settlement rules',
    'reduce credit card debt 60%',
    'credit card settlement company Ahmedabad'
  ],
  openGraph: {
    title: 'Credit Card Settlement Ahmedabad Gujarat | Save 60% on Card Debt | CredSettle',
    description: 'Gujarat credit card settlement experts. 5,600+ cases settled. Business debt, diamond trade, textile industry. Average 55% savings.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card Settlement Ahmedabad | 60% Debt Cut | CredSettle',
    description: 'Legal credit card settlement in Ahmedabad, Surat, Vadodara. Stop harassment, reduce debt 40-75%. RBI-compliant process.'
  },
  alternates: {
    canonical: 'https://credsettle.com/services/credit-card-settlement/gujarat'
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
  '@id': 'https://credsettle.com/services/credit-card-settlement/gujarat',
  name: 'CredSettle Credit Card Settlement Gujarat',
  legalName: 'CredSettle Legal Services',
  url: 'https://credsettle.com',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  description: 'Professional credit card settlement services in Gujarat. Legal RBI-compliant debt resolution for Ahmedabad, Surat, Vadodara borrowers. Business and trade debt specialists.',
  telephone: '+91-XXXXXXXXXX',
  email: 'support@credsettle.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    addressCountry: 'IN'
  },
  areaServed: [
    {
      '@type': 'State',
      name: 'Gujarat',
      containsPlace: [
        { '@type': 'City', name: 'Ahmedabad' },
        { '@type': 'City', name: 'Surat' },
        { '@type': 'City', name: 'Vadodara' },
        { '@type': 'City', name: 'Rajkot' },
        { '@type': 'City', name: 'Bhavnagar' }
      ]
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '5600',
    bestRating: '5',
    worstRating: '1'
  },
  priceRange: 'Consultation Free',
  serviceType: 'Credit Card Settlement',
  knowsAbout: [
    'Credit Card Settlement',
    'Multiple Card Debt Resolution',
    'Business Debt Management',
    'Diamond Trade Debt Help',
    'Textile Industry Debt',
    'Export Business Debt',
    'Credit Card Harassment Protection',
    'HDFC Credit Card Settlement',
    'ICICI Credit Card Settlement',
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
          name: 'Business Debt Resolution',
          description: 'Special handling for business owners using personal cards for trade'
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
      name: 'Gujarat',
      item: 'https://credsettle.com/services/credit-card-settlement/gujarat'
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CredSettle Gujarat Credit Card Settlement',
  image: 'https://credsettle.com/credsettle-logo.svg',
  '@id': 'https://credsettle.com/services/credit-card-settlement/gujarat',
  url: 'https://credsettle.com/services/credit-card-settlement/gujarat',
  telephone: '+91-XXXXXXXXXX',
  priceRange: 'Free Consultation',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 23.0225,
    longitude: 72.5714
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <GujaratPageClient />
    </>
  );
}




