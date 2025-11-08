import { Metadata } from 'next';
import GujaratPageClient from './GujaratPageClient';

export const metadata: Metadata = {
  title: 'Loan Settlement Ahmedabad Surat Gujarat | Diamond Traders Textile | Save 70% | CredSettle',
  description: 'Personal loan settlement in Ahmedabad, Surat, Vadodara, Rajkot. Business loans, diamond traders, textile MSME. Reduce debt 30-70%. RBI legal. 11000+ Gujarat clients. Free consultation.',
  keywords: [
    'loan settlement Ahmedabad',
    'personal loan settlement Surat',
    'debt settlement Vadodara',
    'loan settlement Rajkot',
    'Gujarat loan settlement company',
    'diamond trader loan settlement Surat',
    'textile business loan settlement',
    'Ahmedabad business loan settlement',
    'HDFC loan settlement Gujarat',
    'SBI loan settlement Ahmedabad',
    'Bajaj Finserv settlement Surat',
    'MSME loan settlement Gujarat',
    'RBI compliant loan settlement Gujarat',
    'Lok Adalat loan settlement Ahmedabad',
    'stop loan harassment Surat',
    'legal loan settlement Vadodara',
    'credit card settlement Ahmedabad',
    'NBFC loan settlement Gujarat',
    'business loan waiver Gujarat',
    'bank loan settlement Rajkot',
    'debt negotiation Surat',
    'CredSettle Ahmedabad office',
    'best loan settlement company Gujarat',
    'Gujarati businessman loan help'
  ],
  openGraph: {
    title: 'Loan Settlement Ahmedabad Surat Gujarat | Business MSME | Save 70% | CredSettle',
    description: 'Gujarat loan settlement experts. 11000+ cases, 61% average savings. Diamond traders, textile business, MSME specialists.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement Ahmedabad Surat | 70% Debt Cut | CredSettle Gujarat',
    description: 'Legal loan settlement in Ahmedabad, Surat, Vadodara. Diamond traders, textile MSME. Stop harassment, reduce debt 70%.'
  },
  alternates: {
    canonical: 'https://credsettle.com/services/personal-loan-settlement/gujarat'
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
  '@id': 'https://credsettle.com/services/personal-loan-settlement/gujarat',
  name: 'CredSettle Personal Loan Settlement Gujarat',
  legalName: 'CredSettle Legal Services',
  url: 'https://credsettle.com',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  description: 'Professional personal loan settlement services in Gujarat. Legal RBI-compliant debt resolution for Ahmedabad, Surat, Vadodara borrowers. Diamond traders and MSME specialists.',
  telephone: '+91-XXXXXXXXXX',
  email: 'support@credsettle.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    addressCountry: 'IN'
  },
  areaServed: [
    {
      '@type': 'State',
      name: 'Gujarat',
      containsPlace: [
        { '@type': 'City', name: 'Ahmedabad' },
        { '@type': 'City', name: 'Surat' },
        { '@type': 'City', name: 'Vadodara' },
        { '@type': 'City', name: 'Rajkot' },
        { '@type': 'City', name: 'Bhavnagar' },
        { '@type': 'City', name: 'Jamnagar' },
        { '@type': 'City', name: 'Gandhinagar' },
        { '@type': 'City', name: 'Anand' }
      ]
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '11000',
    bestRating: '5',
    worstRating: '1'
  },
  priceRange: 'Consultation Free',
  serviceType: 'Personal Loan Settlement',
  knowsAbout: [
    'Personal Loan Settlement',
    'Business Loan Settlement',
    'Diamond Trader Debt Relief',
    'Textile Industry Loan Settlement',
    'MSME Loan Settlement',
    'Credit Card Debt Settlement',
    'NBFC Loan Settlement',
    'Bank Loan Negotiation',
    'Lok Adalat Representation',
    'RBI Guidelines',
    'Gujarati Business Support'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Loan Settlement Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Diamond Trader Loan Settlement',
          description: 'Specialized settlement for Surat diamond traders and exporters'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'MSME Business Loan Settlement',
          description: 'Settlement services for Gujarat MSME owners and manufacturers'
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
      name: 'Gujarat',
      item: 'https://credsettle.com/services/personal-loan-settlement/gujarat'
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CredSettle Gujarat',
  image: 'https://credsettle.com/credsettle-logo.svg',
  '@id': 'https://credsettle.com/services/personal-loan-settlement/gujarat',
  url: 'https://credsettle.com/services/personal-loan-settlement/gujarat',
  telephone: '+91-XXXXXXXXXX',
  priceRange: 'Free Consultation',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 23.0225,
    longitude: 72.5714
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

export default function GujaratPage() {
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
      <GujaratPageClient />
    </>
  );
}


