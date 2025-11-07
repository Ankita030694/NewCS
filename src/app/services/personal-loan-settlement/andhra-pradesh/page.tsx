import { Metadata } from 'next';
import AndhraPradeshPageClient from './AndhraPradeshPageClient';

export const metadata: Metadata = {
  title: 'Loan Settlement Visakhapatnam Vijayawada AP | Port City Coastal | Save 70% | CredSettle',
  description: 'Personal loan settlement in Visakhapatnam, Vijayawada, Guntur, Tirupati. Port workers, IT sector, agricultural traders. Reduce debt 30-70%. RBI legal. 8000+ AP clients. Free consultation.',
  keywords: [
    'loan settlement Visakhapatnam',
    'personal loan settlement Vizag',
    'debt settlement Vijayawada',
    'loan settlement Guntur',
    'Andhra Pradesh loan settlement',
    'Visakhapatnam port worker loan',
    'Vijayawada business loan settlement',
    'Tirupati debt relief',
    'HDFC loan settlement Vizag',
    'SBI loan settlement Vijayawada',
    'Andhra Bank loan settlement',
    'NBFC loan settlement AP',
    'RBI compliant loan settlement Andhra',
    'Lok Adalat loan settlement Visakhapatnam',
    'stop loan harassment AP',
    'legal loan settlement Guntur',
    'credit card settlement Vizag',
    'agricultural loan settlement AP',
    'port worker debt relief',
    'CredSettle Visakhapatnam office',
    'best loan settlement company AP',
    'Telugu borrower loan help',
    'coastal Andhra debt relief'
  ],
  openGraph: {
    title: 'Loan Settlement Visakhapatnam Vijayawada AP | Reduce Debt 70% | CredSettle',
    description: 'Andhra Pradesh loan settlement experts. 8000+ cases, 57% average savings. Port workers, IT sector, traders specialists.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement Vizag AP | 70% Debt Cut | CredSettle',
    description: 'Legal loan settlement in Visakhapatnam, Vijayawada, Guntur. Port workers, agricultural traders. Stop harassment.'
  },
  alternates: {
    canonical: 'https://credsettle.com/services/personal-loan-settlement/andhra-pradesh'
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
  '@id': 'https://credsettle.com/services/personal-loan-settlement/andhra-pradesh',
  name: 'CredSettle Personal Loan Settlement Andhra Pradesh',
  legalName: 'CredSettle Legal Services',
  url: 'https://credsettle.com',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  description: 'Professional personal loan settlement services in Andhra Pradesh. Legal RBI-compliant debt resolution for Visakhapatnam, Vijayawada, Guntur borrowers. Port and agricultural sector specialists.',
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
        { '@type': 'City', name: 'Vizag' },
        { '@type': 'City', name: 'Vijayawada' },
        { '@type': 'City', name: 'Guntur' },
        { '@type': 'City', name: 'Tirupati' },
        { '@type': 'City', name: 'Nellore' },
        { '@type': 'City', name: 'Kakinada' },
        { '@type': 'City', name: 'Rajahmundry' }
      ]
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.6',
    reviewCount: '8000',
    bestRating: '5',
    worstRating: '1'
  },
  priceRange: 'Consultation Free',
  serviceType: 'Personal Loan Settlement',
  knowsAbout: [
    'Personal Loan Settlement',
    'Port Worker Debt Relief',
    'Agricultural Trader Loan Settlement',
    'IT Professional Debt Settlement',
    'Credit Card Debt Settlement',
    'NBFC Loan Settlement',
    'Bank Loan Negotiation',
    'Lok Adalat Representation',
    'AP Consumer Commission',
    'RBI Guidelines',
    'Telugu Borrower Support'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Loan Settlement Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Port Sector Loan Settlement',
          description: 'Specialized settlement for Visakhapatnam port workers and shipping industry employees'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Agricultural Trader Settlement',
          description: 'Settlement services for Guntur agricultural commodity traders'
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
      name: 'Andhra Pradesh',
      item: 'https://credsettle.com/services/personal-loan-settlement/andhra-pradesh'
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CredSettle Andhra Pradesh',
  image: 'https://credsettle.com/credsettle-logo.svg',
  '@id': 'https://credsettle.com/services/personal-loan-settlement/andhra-pradesh',
  url: 'https://credsettle.com/services/personal-loan-settlement/andhra-pradesh',
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

