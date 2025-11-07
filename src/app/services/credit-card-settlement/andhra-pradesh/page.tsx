import { Metadata } from 'next';
import AndhraPradeshPageClient from './AndhraPradeshPageClient';

export const metadata: Metadata = {
  title: 'Credit Card Settlement Visakhapatnam Vijayawada Andhra Pradesh | Save 60% | CredSettle',
  description: 'Credit card settlement in Visakhapatnam, Vijayawada, Guntur, Tirupati. Business expansion debt, IT park expenses, family obligations. Reduce debt 40-75%. Legal RBI-compliant. 3,900+ Andhra Pradesh clients debt-free.',
  keywords: [
    'credit card settlement Visakhapatnam',
    'credit card debt relief Andhra Pradesh',
    'settle credit card debt Vijayawada',
    'HDFC credit card settlement Andhra Pradesh',
    'ICICI credit card settlement Vizag',
    'SBI credit card settlement',
    'Axis Bank credit card settlement',
    'multiple credit card debt Andhra Pradesh',
    'IT park credit card debt',
    'business expansion debt Andhra',
    'credit card harassment Visakhapatnam',
    'stop credit card collection calls',
    'legal credit card settlement Andhra Pradesh',
    'RBI credit card settlement rules',
    'reduce credit card debt 60%'
  ],
  openGraph: {
    title: 'Credit Card Settlement Andhra Pradesh | Save 60% on Card Debt | CredSettle',
    description: 'Andhra Pradesh credit card settlement experts. 3,900+ cases settled across Vizag, Vijayawada, Guntur, Tirupati. Average 55% savings.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card Settlement Andhra Pradesh | 60% Debt Cut | CredSettle',
    description: 'Legal credit card settlement in Visakhapatnam, Vijayawada, Guntur. Stop harassment, reduce debt 40-75%. RBI-compliant process.'
  },
  alternates: {
    canonical: 'https://credsettle.com/services/credit-card-settlement/andhra-pradesh'
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
  '@id': 'https://credsettle.com/services/credit-card-settlement/andhra-pradesh',
  name: 'CredSettle Credit Card Settlement Andhra Pradesh',
  legalName: 'CredSettle Legal Services',
  url: 'https://credsettle.com',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  description: 'Professional credit card settlement services in Andhra Pradesh. Legal RBI-compliant debt resolution for Visakhapatnam, Vijayawada, Guntur, Tirupati borrowers. Business and IT professional debt specialists.',
  telephone: '+91-XXXXXXXXXX',
  email: 'support@credsettle.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Visakhapatnam',
    addressRegion: 'Andhra Pradesh',
    addressCountry: 'IN'
  },
  areaServed: [
    {
      '@type': 'State',
      name: 'Andhra Pradesh',
      containsPlace: [
        { '@type': 'City', name: 'Visakhapatnam' },
        { '@type': 'City', name: 'Vijayawada' },
        { '@type': 'City', name: 'Guntur' },
        { '@type': 'City', name: 'Tirupati' },
        { '@type': 'City', name: 'Rajahmundry' }
      ]
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '3900',
    bestRating: '5',
    worstRating: '1'
  },
  priceRange: 'Consultation Free',
  serviceType: 'Credit Card Settlement',
  knowsAbout: [
    'Credit Card Settlement',
    'Multiple Card Debt Resolution',
    'IT Professional Debt Help',
    'Business Expansion Debt',
    'Tourism Sector Debt',
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
          description: 'Settle debt across 3-7 credit cards with one negotiation strategy'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IT Park Debt Resolution',
          description: 'Support for IT professionals in Visakhapatnam and Vijayawada facing card debt'
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
      name: 'Andhra Pradesh',
      item: 'https://credsettle.com/services/credit-card-settlement/andhra-pradesh'
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CredSettle Andhra Pradesh Credit Card Settlement',
  image: 'https://credsettle.com/credsettle-logo.svg',
  '@id': 'https://credsettle.com/services/credit-card-settlement/andhra-pradesh',
  url: 'https://credsettle.com/services/credit-card-settlement/andhra-pradesh',
  telephone: '+91-XXXXXXXXXX',
  priceRange: 'Free Consultation',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Visakhapatnam',
    addressRegion: 'Andhra Pradesh',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 17.6868,
    longitude: 83.2185
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

export default function AndhraPradeshPage() {
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
      <AndhraPradeshPageClient />
    </>
  );
}
