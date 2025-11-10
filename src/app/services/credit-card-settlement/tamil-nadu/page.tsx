import { Metadata } from 'next';
import TamilNaduPageClient from './TamilNaduPageClient';

export const metadata: Metadata = {
  title: 'Credit Card Settlement Chennai Tamil Nadu | Save 60% | Stop Calls | CredSettle',
  description: 'Credit card settlement in Chennai, Coimbatore, Madurai. Auto industry debt, IT spending, multiple cards. Reduce debt 40-75%. Legal RBI-compliant. 5,900+ Tamil Nadu clients debt-free.',
  keywords: [
    'credit card settlement Chennai',
    'credit card debt relief Tamil Nadu',
    'settle credit card debt Chennai',
    'HDFC credit card settlement Chennai',
    'ICICI credit card settlement Tamil Nadu',
    'SBI credit card settlement',
    'Axis Bank credit card settlement',
    'multiple credit card debt Chennai',
    'auto industry debt settlement',
    'IT professional debt help',
    'credit card harassment Chennai',
    'stop credit card collection calls',
    'legal credit card settlement Tamil Nadu',
    'RBI credit card settlement rules',
    'reduce credit card debt 60%',
    'credit card settlement company Chennai',
    'CredSettle Chennai office'
  ],
  openGraph: {
    title: 'Credit Card Settlement Chennai Tamil Nadu | Save 60% on Card Debt | CredSettle',
    description: 'Tamil Nadu credit card settlement experts. 5,900+ cases settled. Auto industry debt, IT spending, multiple cards. Average 55% savings.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card Settlement Chennai | 60% Debt Cut | CredSettle',
    description: 'Legal credit card settlement in Chennai, Coimbatore, Madurai. Stop harassment, reduce debt 40-75%. RBI-compliant process.'
  },
  alternates: {
    canonical: 'https://credsettle.com/services/credit-card-settlement/tamil-nadu'
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
  '@id': 'https://credsettle.com/services/credit-card-settlement/tamil-nadu',
  name: 'CredSettle Credit Card Settlement Tamil Nadu',
  legalName: 'CredSettle Legal Services',
  url: 'https://credsettle.com',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  description: 'Professional credit card settlement services in Tamil Nadu. Legal RBI-compliant debt resolution for Chennai, Coimbatore, Madurai borrowers. Auto industry and IT debt specialists.',
  telephone: '+91-XXXXXXXXXX',
  email: 'support@credsettle.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN'
  },
  areaServed: [
    {
      '@type': 'State',
      name: 'Tamil Nadu',
      containsPlace: [
        { '@type': 'City', name: 'Chennai' },
        { '@type': 'City', name: 'Coimbatore' },
        { '@type': 'City', name: 'Madurai' },
        { '@type': 'City', name: 'Tiruchirappalli' },
        { '@type': 'City', name: 'Salem' }
      ]
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '5900',
    bestRating: '5',
    worstRating: '1'
  },
  priceRange: 'Consultation Free',
  serviceType: 'Credit Card Settlement',
  knowsAbout: [
    'Credit Card Settlement',
    'Multiple Card Debt Resolution',
    'Auto Industry Debt Management',
    'Manufacturing Sector Debt Help',
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
          name: 'Auto Industry Debt Resolution',
          description: 'Special handling for auto sector employees with credit card debt'
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
      name: 'Tamil Nadu',
      item: 'https://credsettle.com/services/credit-card-settlement/tamil-nadu'
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CredSettle Tamil Nadu Credit Card Settlement',
  image: 'https://credsettle.com/credsettle-logo.svg',
  '@id': 'https://credsettle.com/services/credit-card-settlement/tamil-nadu',
  url: 'https://credsettle.com/services/credit-card-settlement/tamil-nadu',
  telephone: '+91-XXXXXXXXXX',
  priceRange: 'Free Consultation',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.0827,
    longitude: 80.2707
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

export default function TamilNaduPage() {
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
      <TamilNaduPageClient />
    </>
  );
}




