import { Metadata } from 'next';
import MaharashtraPageClient from './MaharashtraPageClient';

export const metadata: Metadata = {
  title: 'Personal Loan Settlement Mumbai Pune Maharashtra | Reduce Debt 70% | CredSettle',
  description: 'Personal loan settlement in Mumbai, Pune, Nagpur. Reduce debt 30-70%, stop recovery calls. Legal RBI process, 8500+ clients, Lok Adalat support. Free consultation 24/7.',
  keywords: [
    'personal loan settlement Mumbai',
    'loan settlement Pune',
    'debt settlement Nagpur',
    'personal loan settlement Maharashtra',
    'Mumbai loan settlement company',
    'Pune debt relief services',
    'Thane personal loan settlement',
    'Nashik loan settlement',
    'Aurangabad debt settlement',
    'HDFC loan settlement Mumbai',
    'ICICI loan settlement Pune',
    'Bajaj Finserv settlement Maharashtra',
    'Tata Capital loan settlement',
    'RBI compliant loan settlement',
    'Lok Adalat loan settlement Mumbai',
    'stop loan harassment Mumbai',
    'legal loan settlement Pune',
    'credit card settlement Maharashtra',
    'NBFC loan settlement Mumbai',
    'personal loan waiver Maharashtra',
    'bank loan settlement Mumbai',
    'debt negotiation Pune',
    'loan settlement advocate Mumbai',
    'CredSettle Mumbai office',
    'best loan settlement company Maharashtra'
  ],
  openGraph: {
    title: 'Personal Loan Settlement Mumbai Pune | Reduce Debt 70% | CredSettle Maharashtra',
    description: 'Mumbai and Pune loan settlement experts. 8500+ cases settled, average 58% debt reduction. Stop harassment in 3 days. Legal Lok Adalat support.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement Mumbai Pune | 70% Debt Reduction | CredSettle',
    description: 'Legal loan settlement in Mumbai, Pune, Nagpur. Stop recovery harassment, reduce debt by 70%. Free consultation.'
  },
  alternates: {
    canonical: 'https://credsettle.com/services/personal-loan-settlement/maharashtra'
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
  '@id': 'https://credsettle.com/services/personal-loan-settlement/maharashtra',
  name: 'CredSettle Personal Loan Settlement Maharashtra',
  legalName: 'CredSettle Legal Services',
  url: 'https://credsettle.com',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  description: 'Professional personal loan settlement services in Maharashtra. Legal RBI-compliant debt resolution for Mumbai, Pune, Nagpur borrowers.',
  telephone: '+91-XXXXXXXXXX',
  email: 'support@credsettle.com',
  address: {
    '@type': 'PostalAddress',
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
        { '@type': 'City', name: 'Thane' },
        { '@type': 'City', name: 'Navi Mumbai' },
        { '@type': 'City', name: 'Nashik' },
        { '@type': 'City', name: 'Aurangabad' },
        { '@type': 'City', name: 'Solapur' },
        { '@type': 'City', name: 'Kolhapur' }
      ]
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '8500',
    bestRating: '5',
    worstRating: '1'
  },
  priceRange: 'Consultation Free',
  serviceType: 'Personal Loan Settlement',
  knowsAbout: [
    'Personal Loan Settlement',
    'Credit Card Debt Settlement',
    'NBFC Loan Settlement',
    'Bank Loan Negotiation',
    'Lok Adalat Representation',
    'RBI Guidelines',
    'Debt Resolution',
    'Legal Loan Settlement'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Loan Settlement Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Personal Loan Settlement',
          description: 'Reduce personal loan debt by 30-70% through legal negotiation'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Credit Card Settlement',
          description: 'Stop revolving interest and settle credit card debt'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'NBFC Loan Settlement',
          description: 'Negotiate settlements with NBFCs like Bajaj, Tata Capital'
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
      name: 'Maharashtra',
      item: 'https://credsettle.com/services/personal-loan-settlement/maharashtra'
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CredSettle Maharashtra',
  image: 'https://credsettle.com/credsettle-logo.svg',
  '@id': 'https://credsettle.com/services/personal-loan-settlement/maharashtra',
  url: 'https://credsettle.com/services/personal-loan-settlement/maharashtra',
  telephone: '+91-XXXXXXXXXX',
  priceRange: 'Free Consultation',
  address: {
    '@type': 'PostalAddress',
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

