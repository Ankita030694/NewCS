import { Metadata } from 'next';
import TelanganaPageClient from './TelanganaPageClient';

export const metadata: Metadata = {
  title: 'Loan Settlement Hyderabad Telangana | IT Pharma Tech | Save 70% | CredSettle',
  description: 'Personal loan settlement in Hyderabad, Warangal, Nizamabad. IT sector, pharma professionals, tech workers. HITEC City, Gachibowli focus. Reduce debt 30-70%. 11,000+ Telangana clients.',
  keywords: [
    'loan settlement Hyderabad',
    'personal loan settlement Telangana',
    'debt settlement HITEC City',
    'loan settlement Gachibowli',
    'IT sector loan help Hyderabad',
    'pharma professional debt settlement',
    'tech worker loan settlement',
    'HDFC loan settlement Hyderabad',
    'SBI loan settlement Telangana',
    'Bajaj Finserv settlement Hyderabad',
    'RBI compliant loan settlement',
    'Lok Adalat loan settlement Hyderabad',
    'stop loan harassment Telangana',
    'legal loan settlement Warangal',
    'credit card settlement Hyderabad',
    'NBFC loan settlement Telangana',
    'bank loan settlement Secunderabad',
    'CredSettle Hyderabad office',
    'best loan settlement Telangana',
    'Microsoft employee loan help',
    'Google employee debt relief',
    'startup founder loan settlement'
  ],
  openGraph: {
    title: 'Loan Settlement Hyderabad Telangana | IT Pharma | Save 70% | CredSettle',
    description: 'Telangana loan settlement experts. 11,000+ cases, 59% average savings. IT, pharma, tech sector specialists. HITEC City to Warangal coverage.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement Hyderabad Telangana | 70% Debt Cut | CredSettle',
    description: 'Legal loan settlement in Hyderabad, HITEC City, Gachibowli. IT, pharma, tech workers. Telangana High Court backed process.'
  },
  alternates: {
    canonical: 'https://credsettle.com/services/personal-loan-settlement/telangana'
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
  '@id': 'https://credsettle.com/services/personal-loan-settlement/telangana',
  name: 'CredSettle Personal Loan Settlement Telangana',
  legalName: 'CredSettle Legal Services',
  url: 'https://credsettle.com',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  description: 'Professional personal loan settlement services in Telangana. Legal RBI-compliant debt resolution for Hyderabad, Warangal, Nizamabad borrowers. IT and pharma sector specialists.',
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
        { '@type': 'City', name: 'Warangal' },
        { '@type': 'City', name: 'Nizamabad' },
        { '@type': 'City', name: 'Karimnagar' },
        { '@type': 'City', name: 'Khammam' },
        { '@type': 'City', name: 'Mahbubnagar' },
        { '@type': 'City', name: 'Nalgonda' },
        { '@type': 'City', name: 'Secunderabad' }
      ]
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '11000',
    bestRating: '5',
    worstRating: '1'
  },
  priceRange: 'Consultation Free',
  serviceType: 'Personal Loan Settlement',
  knowsAbout: [
    'Personal Loan Settlement',
    'IT Sector Debt Relief',
    'Pharma Professional Settlement',
    'Tech Worker Loan Settlement',
    'Startup Founder Debt Resolution',
    'Credit Card Debt Settlement',
    'NBFC Loan Settlement',
    'Bank Loan Negotiation',
    'Lok Adalat Representation',
    'Telangana High Court Process',
    'RBI Guidelines'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Loan Settlement Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IT Sector Loan Settlement',
          description: 'Specialized settlement for Hyderabad tech professionals and IT workers'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pharma Professional Settlement',
          description: 'Settlement services for pharmaceutical industry professionals'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Personal Loan Settlement',
          description: 'Reduce personal loan debt by 30-70% through legal negotiation'
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
      name: 'Personal Loan Settlement',
      item: 'https://credsettle.com/services/personal-loan-settlement'
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Telangana',
      item: 'https://credsettle.com/services/personal-loan-settlement/telangana'
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CredSettle Telangana',
  image: 'https://credsettle.com/credsettle-logo.svg',
  '@id': 'https://credsettle.com/services/personal-loan-settlement/telangana',
  url: 'https://credsettle.com/services/personal-loan-settlement/telangana',
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



