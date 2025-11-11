import { Metadata } from 'next';
import HaryanaPageClient from './HaryanaPageClient';

export const metadata: Metadata = {
  title: 'Credit Card Settlement Haryana Gurgaon Faridabad | Save 60% | CredSettle',
  description: 'Credit card settlement in Gurgaon, Faridabad, Panipat. Corporate debt, real estate investments, multiple cards. Reduce debt 40-75%. Legal RBI-compliant. 4,800+ Haryana clients debt-free.',
  keywords: [
    'credit card settlement Haryana',
    'credit card debt relief Gurgaon',
    'settle credit card debt Faridabad',
    'HDFC credit card settlement Haryana',
    'ICICI credit card settlement Gurgaon',
    'SBI credit card settlement',
    'Axis Bank credit card settlement',
    'multiple credit card debt Haryana',
    'corporate debt settlement',
    'real estate investment debt',
    'credit card harassment Haryana',
    'stop credit card collection calls',
    'legal credit card settlement Haryana',
    'RBI credit card settlement rules',
    'reduce credit card debt 60%'
  ],
  openGraph: {
    title: 'Credit Card Settlement Haryana | Save 60% on Card Debt | CredSettle',
    description: 'Haryana credit card settlement experts. 4,800+ cases settled. Corporate debt, real estate investments. Average 55% savings.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card Settlement Haryana | 60% Debt Cut | CredSettle',
    description: 'Legal credit card settlement in Gurgaon, Faridabad, Panipat. Stop harassment, reduce debt 40-75%. RBI-compliant process.'
  },
  alternates: {
    canonical: 'https://credsettle.com/services/credit-card-settlement/haryana'
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
  '@id': 'https://credsettle.com/services/credit-card-settlement/haryana',
  name: 'CredSettle Credit Card Settlement Haryana',
  legalName: 'CredSettle Legal Services',
  url: 'https://credsettle.com',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  description: 'Professional credit card settlement services in Haryana. Legal RBI-compliant debt resolution for Gurgaon, Faridabad, Panipat borrowers. Corporate and real estate debt specialists.',
  telephone: '+91-XXXXXXXXXX',
  email: 'support@credsettle.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Gurgaon',
    addressRegion: 'Haryana',
    addressCountry: 'IN'
  },
  areaServed: [
    {
      '@type': 'State',
      name: 'Haryana',
      containsPlace: [
        { '@type': 'City', name: 'Gurgaon' },
        { '@type': 'City', name: 'Faridabad' },
        { '@type': 'City', name: 'Panipat' },
        { '@type': 'City', name: 'Ambala' },
        { '@type': 'City', name: 'Karnal' }
      ]
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '4800',
    bestRating: '5',
    worstRating: '1'
  },
  priceRange: 'Consultation Free',
  serviceType: 'Credit Card Settlement',
  knowsAbout: [
    'Credit Card Settlement',
    'Multiple Card Debt Resolution',
    'Corporate Debt Management',
    'Real Estate Investment Debt',
    'EMI Trap Solutions',
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
          name: 'Real Estate Debt Resolution',
          description: 'Special handling for property investment related card debt'
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
      name: 'Haryana',
      item: 'https://credsettle.com/services/credit-card-settlement/haryana'
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CredSettle Haryana Credit Card Settlement',
  image: 'https://credsettle.com/credsettle-logo.svg',
  '@id': 'https://credsettle.com/services/credit-card-settlement/haryana',
  url: 'https://credsettle.com/services/credit-card-settlement/haryana',
  telephone: '+91-XXXXXXXXXX',
  priceRange: 'Free Consultation',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Gurgaon',
    addressRegion: 'Haryana',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.4595,
    longitude: 77.0266
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

export default function HaryanaPage() {
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
      <HaryanaPageClient />
    </>
  );
}





