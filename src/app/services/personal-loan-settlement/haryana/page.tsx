import { Metadata } from 'next';
import HaryanaPageClient from './HaryanaPageClient';

export const metadata: Metadata = {
  title: 'Loan Settlement Gurgaon Faridabad Haryana | Corporate Professionals | Save 70% | CredSettle',
  description: 'Personal loan settlement in Gurgaon, Faridabad, Panipat, Ambala. Corporate employees, industrial workers, MSME. Reduce debt 30-70%. RBI legal. 9500+ Haryana clients. Free consultation.',
  keywords: [
    'loan settlement Gurgaon',
    'personal loan settlement Gurugram',
    'debt settlement Faridabad',
    'loan settlement Panipat',
    'Haryana loan settlement company',
    'Gurgaon corporate employee loan',
    'Faridabad debt relief',
    'Ambala loan settlement',
    'HDFC loan settlement Gurgaon',
    'ICICI loan settlement Faridabad',
    'Bajaj Finserv settlement Haryana',
    'corporate professional debt Gurgaon',
    'RBI compliant loan settlement Haryana',
    'Lok Adalat loan settlement Gurgaon',
    'stop loan harassment Faridabad',
    'legal loan settlement Panipat',
    'credit card settlement Gurgaon',
    'NBFC loan settlement Haryana',
    'bank loan settlement Ambala',
    'debt negotiation Rohtak',
    'CredSettle Gurgaon office',
    'best loan settlement Haryana',
    'DLF Cyber City loan help'
  ],
  openGraph: {
    title: 'Loan Settlement Gurgaon Faridabad Haryana | Corporate Debt | Save 70% | CredSettle',
    description: 'Haryana loan settlement experts. 9500+ cases, 59% average savings. Corporate employees, industrial workers specialists.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement Gurgaon Haryana | 70% Debt Cut | CredSettle',
    description: 'Legal loan settlement in Gurgaon, Faridabad, Panipat. Corporate professionals, industrial workers. Stop harassment.'
  },
  alternates: {
    canonical: 'https://credsettle.com/services/personal-loan-settlement/haryana'
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
  '@id': 'https://credsettle.com/services/personal-loan-settlement/haryana',
  name: 'CredSettle Personal Loan Settlement Haryana',
  legalName: 'CredSettle Legal Services',
  url: 'https://credsettle.com',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  description: 'Professional personal loan settlement services in Haryana. Legal RBI-compliant debt resolution for Gurgaon, Faridabad, Panipat borrowers. Corporate employee specialists.',
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
        { '@type': 'City', name: 'Gurugram' },
        { '@type': 'City', name: 'Faridabad' },
        { '@type': 'City', name: 'Panipat' },
        { '@type': 'City', name: 'Ambala' },
        { '@type': 'City', name: 'Rohtak' },
        { '@type': 'City', name: 'Hisar' },
        { '@type': 'City', name: 'Karnal' }
      ]
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '9500',
    bestRating: '5',
    worstRating: '1'
  },
  priceRange: 'Consultation Free',
  serviceType: 'Personal Loan Settlement',
  knowsAbout: [
    'Personal Loan Settlement',
    'Corporate Employee Debt Relief',
    'Industrial Worker Loan Settlement',
    'MSME Loan Settlement',
    'Credit Card Debt Settlement',
    'NBFC Loan Settlement',
    'Bank Loan Negotiation',
    'Lok Adalat Representation',
    'Debt Conciliation Board',
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
          name: 'Corporate Employee Loan Settlement',
          description: 'Specialized settlement for Gurgaon corporate professionals and MNC employees'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Industrial Worker Loan Settlement',
          description: 'Settlement services for Faridabad and Panipat industrial sector employees'
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
      name: 'Haryana',
      item: 'https://credsettle.com/services/personal-loan-settlement/haryana'
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CredSettle Haryana',
  image: 'https://credsettle.com/credsettle-logo.svg',
  '@id': 'https://credsettle.com/services/personal-loan-settlement/haryana',
  url: 'https://credsettle.com/services/personal-loan-settlement/haryana',
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





