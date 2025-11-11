import { Metadata } from 'next';
import UttarPradeshPageClient from './UttarPradeshPageClient';

export const metadata: Metadata = {
  title: 'Credit Card Settlement Lucknow Uttar Pradesh | Save 60% | CredSettle',
  description: 'Credit card settlement in Lucknow, Noida, Kanpur, Agra. Family obligations, education expenses, multiple cards. Reduce debt 40-75%. Legal RBI-compliant. 6,200+ UP clients debt-free.',
  keywords: [
    'credit card settlement Lucknow',
    'credit card debt relief Uttar Pradesh',
    'settle credit card debt Noida',
    'HDFC credit card settlement UP',
    'ICICI credit card settlement Lucknow',
    'SBI credit card settlement',
    'Axis Bank credit card settlement',
    'multiple credit card debt UP',
    'family obligation debt',
    'education expense debt',
    'credit card harassment Lucknow',
    'stop credit card collection calls',
    'legal credit card settlement UP',
    'RBI credit card settlement rules',
    'reduce credit card debt 60%'
  ],
  openGraph: {
    title: 'Credit Card Settlement Uttar Pradesh | Save 60% on Card Debt | CredSettle',
    description: 'Uttar Pradesh credit card settlement experts. 6,200+ cases settled. Family obligations, education expenses. Average 54% savings.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card Settlement UP | 60% Debt Cut | CredSettle',
    description: 'Legal credit card settlement in Lucknow, Kanpur, Agra. Stop harassment, reduce debt 40-75%. RBI-compliant process.'
  },
  alternates: {
    canonical: 'https://credsettle.com/services/credit-card-settlement/uttar-pradesh'
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
  '@id': 'https://credsettle.com/services/credit-card-settlement/uttar-pradesh',
  name: 'CredSettle Credit Card Settlement Uttar Pradesh',
  legalName: 'CredSettle Legal Services',
  url: 'https://credsettle.com',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  description: 'Professional credit card settlement services in Uttar Pradesh. Legal RBI-compliant debt resolution for Lucknow, Noida, Kanpur, Agra borrowers. Family and education debt specialists.',
  telephone: '+91-XXXXXXXXXX',
  email: 'support@credsettle.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lucknow',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN'
  },
  areaServed: [
    {
      '@type': 'State',
      name: 'Uttar Pradesh',
      containsPlace: [
        { '@type': 'City', name: 'Lucknow' },
        { '@type': 'City', name: 'Noida' },
        { '@type': 'City', name: 'Kanpur' },
        { '@type': 'City', name: 'Agra' },
        { '@type': 'City', name: 'Varanasi' },
        { '@type': 'City', name: 'Ghaziabad' }
      ]
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '6200',
    bestRating: '5',
    worstRating: '1'
  },
  priceRange: 'Consultation Free',
  serviceType: 'Credit Card Settlement',
  knowsAbout: [
    'Credit Card Settlement',
    'Multiple Card Debt Resolution',
    'Family Obligation Debt',
    'Education Expense Debt',
    'Government Employee Debt',
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
          name: 'Family Obligation Debt Resolution',
          description: 'Special handling for family and education related card debt'
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
      name: 'Uttar Pradesh',
      item: 'https://credsettle.com/services/credit-card-settlement/uttar-pradesh'
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CredSettle Uttar Pradesh Credit Card Settlement',
  image: 'https://credsettle.com/credsettle-logo.svg',
  '@id': 'https://credsettle.com/services/credit-card-settlement/uttar-pradesh',
  url: 'https://credsettle.com/services/credit-card-settlement/uttar-pradesh',
  telephone: '+91-XXXXXXXXXX',
  priceRange: 'Free Consultation',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lucknow',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 26.8467,
    longitude: 80.9462
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

export default function UttarPradeshPage() {
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
      <UttarPradeshPageClient />
    </>
  );
}





