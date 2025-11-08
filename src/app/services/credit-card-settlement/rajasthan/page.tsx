import { Metadata } from 'next';
import RajasthanPageClient from './RajasthanPageClient';

export const metadata: Metadata = {
  title: 'Credit Card Settlement Jaipur Rajasthan | Save 60% | Stop Calls | CredSettle',
  description: 'Credit card settlement in Jaipur, Udaipur, Jodhpur. Business debt, tourism spending, multiple cards. Reduce debt 40-75%. Legal RBI-compliant. 4,200+ Rajasthan clients debt-free.',
  keywords: [
    'credit card settlement Jaipur',
    'credit card debt relief Rajasthan',
    'settle credit card debt Jaipur',
    'HDFC credit card settlement Jaipur',
    'ICICI credit card settlement Rajasthan',
    'SBI credit card settlement',
    'Axis Bank credit card settlement',
    'multiple credit card debt Jaipur',
    'business debt settlement',
    'tourism industry debt help',
    'credit card harassment Jaipur',
    'stop credit card collection calls',
    'legal credit card settlement Rajasthan',
    'RBI credit card settlement rules',
    'reduce credit card debt 60%',
    'credit card settlement company Jaipur',
    'CredSettle Jaipur office'
  ],
  openGraph: {
    title: 'Credit Card Settlement Jaipur Rajasthan | Save 60% on Card Debt | CredSettle',
    description: 'Rajasthan credit card settlement experts. 4,200+ cases settled. Business debt, tourism spending, multiple cards. Average 54% savings.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card Settlement Jaipur | 60% Debt Cut | CredSettle',
    description: 'Legal credit card settlement in Jaipur, Udaipur, Jodhpur. Stop harassment, reduce debt 40-75%. RBI-compliant process.'
  },
  alternates: {
    canonical: 'https://credsettle.com/services/credit-card-settlement/rajasthan'
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
  '@id': 'https://credsettle.com/services/credit-card-settlement/rajasthan',
  name: 'CredSettle Credit Card Settlement Rajasthan',
  legalName: 'CredSettle Legal Services',
  url: 'https://credsettle.com',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  description: 'Professional credit card settlement services in Rajasthan. Legal RBI-compliant debt resolution for Jaipur, Udaipur, Jodhpur borrowers. Business and tourism debt specialists.',
  telephone: '+91-XXXXXXXXXX',
  email: 'support@credsettle.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jaipur',
    addressRegion: 'Rajasthan',
    addressCountry: 'IN'
  },
  areaServed: [
    {
      '@type': 'State',
      name: 'Rajasthan',
      containsPlace: [
        { '@type': 'City', name: 'Jaipur' },
        { '@type': 'City', name: 'Udaipur' },
        { '@type': 'City', name: 'Jodhpur' },
        { '@type': 'City', name: 'Kota' },
        { '@type': 'City', name: 'Ajmer' }
      ]
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '4200',
    bestRating: '5',
    worstRating: '1'
  },
  priceRange: 'Consultation Free',
  serviceType: 'Credit Card Settlement',
  knowsAbout: [
    'Credit Card Settlement',
    'Multiple Card Debt Resolution',
    'Business Debt Management',
    'Tourism Industry Debt Help',
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
          name: 'Business Debt Resolution',
          description: 'Special handling for business owners using personal cards for business'
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
      name: 'Rajasthan',
      item: 'https://credsettle.com/services/credit-card-settlement/rajasthan'
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CredSettle Rajasthan Credit Card Settlement',
  image: 'https://credsettle.com/credsettle-logo.svg',
  '@id': 'https://credsettle.com/services/credit-card-settlement/rajasthan',
  url: 'https://credsettle.com/services/credit-card-settlement/rajasthan',
  telephone: '+91-XXXXXXXXXX',
  priceRange: 'Free Consultation',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jaipur',
    addressRegion: 'Rajasthan',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 26.9124,
    longitude: 75.7873
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

export default function RajasthanPage() {
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
      <RajasthanPageClient />
    </>
  );
}



