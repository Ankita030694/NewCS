import { Metadata } from 'next';
import TelanganaPageClient from './TelanganaPageClient';

export const metadata: Metadata = {
  title: 'Credit Card Settlement Hyderabad Telangana | Save 60% | CredSettle',
  description: 'Credit card settlement in Hyderabad, Secunderabad, Warangal. IT corridor lifestyle, startup spending, family obligations. Reduce debt 40-75%. Legal RBI-compliant. 5,100+ Telangana clients debt-free.',
  keywords: [
    'credit card settlement Hyderabad',
    'credit card debt relief Telangana',
    'settle credit card debt Hyderabad',
    'HDFC credit card settlement Hyderabad',
    'ICICI credit card settlement Telangana',
    'SBI credit card settlement',
    'Axis Bank credit card settlement',
    'multiple credit card debt Hyderabad',
    'IT employee credit card debt',
    'startup debt settlement',
    'credit card harassment Hyderabad',
    'stop recovery calls Hyderabad',
    'legal credit card settlement Telangana',
    'reduce credit card debt 60%'
  ],
  openGraph: {
    title: 'Credit Card Settlement Telangana | Save 60% on Card Debt | CredSettle',
    description: 'Telangana credit card settlement experts. 5,100+ cases settled across Hyderabad and Warangal. IT lifestyle, startup and family debt solutions. Average 56% savings.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card Settlement Hyderabad | 60% Debt Cut | CredSettle',
    description: 'Legal credit card settlement in Hyderabad, Secunderabad, Warangal. Stop harassment, reduce debt 40-75%. RBI-compliant process.'
  },
  alternates: {
    canonical: 'https://credsettle.com/services/credit-card-settlement/telangana'
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
  '@id': 'https://credsettle.com/services/credit-card-settlement/telangana',
  name: 'CredSettle Credit Card Settlement Telangana',
  legalName: 'CredSettle Legal Services',
  url: 'https://credsettle.com',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  description: 'Professional credit card settlement services in Telangana. Legal RBI-compliant debt resolution for Hyderabad, Secunderabad, Warangal borrowers. IT professional and startup debt specialists.',
  telephone: '+91-XXXXXXXXXX',
  email: 'support@credsettle.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    addressCountry: 'IN'
  },
  areaServed: [
    {
      '@type': 'State',
      name: 'Telangana',
      containsPlace: [
        { '@type': 'City', name: 'Hyderabad' },
        { '@type': 'City', name: 'Secunderabad' },
        { '@type': 'City', name: 'Warangal' },
        { '@type': 'City', name: 'Nizamabad' },
        { '@type': 'City', name: 'Karimnagar' }
      ]
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '5100',
    bestRating: '5',
    worstRating: '1'
  },
  priceRange: 'Consultation Free',
  serviceType: 'Credit Card Settlement',
  knowsAbout: [
    'Credit Card Settlement',
    'Multiple Card Debt Resolution',
    'IT Employee Debt Help',
    'Startup Debt Management',
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
          description: 'Coordinate settlement across 3-7 credit cards for Hyderabad households'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IT Salary Cut Debt Resolution',
          description: 'Support for tech employees facing bench salary reductions'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Startup Founder Card Settlement',
          description: 'Close personal cards used for Telangana startup expenses'
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
      name: 'Telangana',
      item: 'https://credsettle.com/services/credit-card-settlement/telangana'
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CredSettle Telangana Credit Card Settlement',
  image: 'https://credsettle.com/credsettle-logo.svg',
  '@id': 'https://credsettle.com/services/credit-card-settlement/telangana',
  url: 'https://credsettle.com/services/credit-card-settlement/telangana',
  telephone: '+91-XXXXXXXXXX',
  priceRange: 'Free Consultation',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 17.3850,
    longitude: 78.4867
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

export default function TelanganaPage() {
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
      <TelanganaPageClient />
    </>
  );
}
