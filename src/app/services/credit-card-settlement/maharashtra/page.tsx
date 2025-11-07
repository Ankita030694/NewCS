import { Metadata } from 'next';
import MaharashtraPageClient from './MaharashtraPageClient';

export const metadata: Metadata = {
  title: 'Credit Card Settlement Mumbai Pune Maharashtra | Save 60% | Stop Calls | CredSettle',
  description: 'Credit card settlement in Mumbai, Pune, Nagpur. Multiple card debt, minimum payment trap, lifestyle spending. Reduce debt 40-75%. Legal RBI-compliant. 9,200+ Maharashtra clients debt-free.',
  keywords: [
    'credit card settlement Mumbai',
    'credit card debt relief Pune',
    'settle credit card debt Maharashtra',
    'HDFC credit card settlement Mumbai',
    'ICICI credit card settlement Pune',
    'SBI credit card settlement',
    'Axis Bank credit card settlement',
    'multiple credit card debt Mumbai',
    'minimum payment trap',
    'credit card harassment Mumbai',
    'stop credit card collection calls',
    'legal credit card settlement Maharashtra',
    'RBI credit card settlement rules',
    'reduce credit card debt 60%',
    'credit card settlement company Mumbai',
    'CredSettle Mumbai office',
    'EMI on credit card settlement',
    'lifestyle debt settlement',
    'shopping addiction debt help',
    'e-commerce debt settlement'
  ],
  openGraph: {
    title: 'Credit Card Settlement Mumbai Pune | Save 60% on Card Debt | CredSettle',
    description: 'Maharashtra credit card settlement experts. 9,200+ cases settled. Multiple cards, minimum payment trap, lifestyle debt. Average 58% savings.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card Settlement Mumbai | 60% Debt Cut | CredSettle',
    description: 'Legal credit card settlement in Mumbai, Pune, Nagpur. Stop harassment, reduce debt 40-75%. RBI-compliant process.'
  },
  alternates: {
    canonical: 'https://credsettle.com/services/credit-card-settlement/maharashtra'
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
  '@id': 'https://credsettle.com/services/credit-card-settlement/maharashtra',
  name: 'CredSettle Credit Card Settlement Maharashtra',
  legalName: 'CredSettle Legal Services',
  url: 'https://credsettle.com',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  description: 'Professional credit card settlement services in Maharashtra. Legal RBI-compliant debt resolution for Mumbai, Pune, Nagpur borrowers. Multiple card debt specialists.',
  telephone: '+91-XXXXXXXXXX',
  email: 'support@credsettle.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN'
  },
  areaServed: [
    {
      '@type': 'State',
      name: 'Maharashtra',
      containsPlace: [
        { '@type': 'City', name: 'Mumbai' },
        { '@type': 'City', name: 'Pune' },
        { '@type': 'City', name: 'Nagpur' },
        { '@type': 'City', name: 'Nashik' },
        { '@type': 'City', name: 'Thane' },
        { '@type': 'City', name: 'Aurangabad' },
        { '@type': 'City', name: 'Solapur' },
        { '@type': 'City', name: 'Kolhapur' }
      ]
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '9200',
    bestRating: '5',
    worstRating: '1'
  },
  priceRange: 'Consultation Free',
  serviceType: 'Credit Card Settlement',
  knowsAbout: [
    'Credit Card Settlement',
    'Multiple Card Debt Resolution',
    'Minimum Payment Trap Solutions',
    'Lifestyle Debt Management',
    'EMI Card Debt Settlement',
    'Shopping Addiction Debt Help',
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
          name: 'Minimum Payment Trap Resolution',
          description: 'Break the minimum payment cycle and reduce total debt by 40-75%'
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
      name: 'Maharashtra',
      item: 'https://credsettle.com/services/credit-card-settlement/maharashtra'
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CredSettle Maharashtra Credit Card Settlement',
  image: 'https://credsettle.com/credsettle-logo.svg',
  '@id': 'https://credsettle.com/services/credit-card-settlement/maharashtra',
  url: 'https://credsettle.com/services/credit-card-settlement/maharashtra',
  telephone: '+91-XXXXXXXXXX',
  priceRange: 'Free Consultation',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 19.0760,
    longitude: 72.8777
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

export default function MaharashtraPage() {
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
      <MaharashtraPageClient />
    </>
  );
}

