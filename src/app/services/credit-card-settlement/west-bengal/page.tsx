import { Metadata } from 'next';
import WestBengalPageClient from './WestBengalPageClient';

export const metadata: Metadata = {
  title: 'Credit Card Settlement Kolkata West Bengal | Save 60% | CredSettle',
  description: 'Credit card settlement in Kolkata, Siliguri, Durgapur. Dual household spending, education abroad, creative lifestyle needs. Reduce debt 40-75%. Legal RBI-compliant. 4,400+ West Bengal clients debt-free.',
  keywords: [
    'credit card settlement Kolkata',
    'credit card debt relief West Bengal',
    'settle credit card debt Kolkata',
    'HDFC credit card settlement Kolkata',
    'ICICI credit card settlement West Bengal',
    'SBI credit card settlement',
    'Axis Bank credit card settlement',
    'multiple credit card debt Kolkata',
    'education abroad credit card',
    'dual household debt Bengal',
    'credit card harassment Kolkata',
    'stop recovery calls Kolkata',
    'legal credit card settlement West Bengal',
    'reduce credit card debt 60%'
  ],
  openGraph: {
    title: 'Credit Card Settlement West Bengal | Save 60% on Card Debt | CredSettle',
    description: 'West Bengal credit card settlement experts. 4,400+ cases settled across Kolkata, Siliguri, Durgapur. Average 55% savings.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card Settlement Kolkata | 60% Debt Cut | CredSettle',
    description: 'Legal credit card settlement in Kolkata, Siliguri, Durgapur. Stop harassment, reduce debt 40-75%. RBI-compliant process.'
  },
  alternates: {
    canonical: 'https://credsettle.com/services/credit-card-settlement/west-bengal'
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
  '@id': 'https://credsettle.com/services/credit-card-settlement/west-bengal',
  name: 'CredSettle Credit Card Settlement West Bengal',
  legalName: 'CredSettle Legal Services',
  url: 'https://credsettle.com',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  description: 'Professional credit card settlement services in West Bengal. Legal RBI-compliant debt resolution for Kolkata, Siliguri, Durgapur borrowers. Education, creative and business debt specialists.',
  telephone: '+91-XXXXXXXXXX',
  email: 'support@credsettle.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kolkata',
    addressRegion: 'West Bengal',
    addressCountry: 'IN'
  },
  areaServed: [
    {
      '@type': 'State',
      name: 'West Bengal',
      containsPlace: [
        { '@type': 'City', name: 'Kolkata' },
        { '@type': 'City', name: 'Howrah' },
        { '@type': 'City', name: 'Siliguri' },
        { '@type': 'City', name: 'Durgapur' },
        { '@type': 'City', name: 'Asansol' }
      ]
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '4400',
    bestRating: '5',
    worstRating: '1'
  },
  priceRange: 'Consultation Free',
  serviceType: 'Credit Card Settlement',
  knowsAbout: [
    'Credit Card Settlement',
    'Multiple Card Debt Resolution',
    'Education Abroad Debt Help',
    'Creative Professional Debt',
    'Hospitality Card Debt',
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
          description: 'Coordinate settlement across 3-7 cards for Kolkata families'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Education Abroad Card Settlement',
          description: 'Resolve cards used for overseas education expenses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Creative Professional Card Settlement',
          description: 'Support for media, art and freelancing professionals with irregular income'
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
      name: 'West Bengal',
      item: 'https://credsettle.com/services/credit-card-settlement/west-bengal'
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CredSettle West Bengal Credit Card Settlement',
  image: 'https://credsettle.com/credsettle-logo.svg',
  '@id': 'https://credsettle.com/services/credit-card-settlement/west-bengal',
  url: 'https://credsettle.com/services/credit-card-settlement/west-bengal',
  telephone: '+91-XXXXXXXXXX',
  priceRange: 'Free Consultation',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kolkata',
    addressRegion: 'West Bengal',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 22.5726,
    longitude: 88.3639
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <WestBengalPageClient />
    </>
  );
}
