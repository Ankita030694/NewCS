import { Metadata } from 'next';
import TamilNaduPageClient from './TamilNaduPageClient';

export const metadata: Metadata = {
  title: 'Loan Settlement Chennai Coimbatore Tamil Nadu | IT Auto Textile | Save 70% | CredSettle',
  description: 'Personal loan settlement in Chennai, Coimbatore, Madurai, Salem. IT professionals, auto sector, textile manufacturing. Protected by TN Anti-Harassment Law. Reduce debt 30-70%. 14000+ TN clients.',
  keywords: [
    'loan settlement Chennai',
    'personal loan settlement Coimbatore',
    'debt settlement Madurai',
    'loan settlement Salem',
    'Tamil Nadu loan settlement',
    'Chennai IT professional loan',
    'Coimbatore textile loan settlement',
    'auto sector debt Chennai',
    'HDFC loan settlement Chennai',
    'SBI loan settlement Tamil Nadu',
    'Bajaj Finserv settlement TN',
    'RBI compliant loan settlement TN',
    'Lok Adalat loan settlement Chennai',
    'TN anti-harassment law protection',
    'stop loan harassment Tamil Nadu',
    'legal loan settlement Coimbatore',
    'credit card settlement Chennai',
    'NBFC loan settlement TN',
    'bank loan settlement Madurai',
    'CredSettle Chennai office',
    'best loan settlement Tamil Nadu',
    'Tamil borrower loan help',
    'OMR IT corridor debt relief'
  ],
  openGraph: {
    title: 'Loan Settlement Chennai Coimbatore TN | Anti-Harassment Law | Save 70% | CredSettle',
    description: 'Tamil Nadu loan settlement experts. 14000+ cases, 60% average savings. IT, auto, textile sector specialists. TN law protects you.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement Chennai TN | 70% Debt Cut | CredSettle',
    description: 'Legal loan settlement in Chennai, Coimbatore, Madurai. IT professionals, auto sector. TN Anti-Harassment Law protection.'
  },
  alternates: {
    canonical: 'https://credsettle.com/services/personal-loan-settlement/tamil-nadu'
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
  '@id': 'https://credsettle.com/services/personal-loan-settlement/tamil-nadu',
  name: 'CredSettle Personal Loan Settlement Tamil Nadu',
  legalName: 'CredSettle Legal Services',
  url: 'https://credsettle.com',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  description: 'Professional personal loan settlement services in Tamil Nadu. Legal RBI-compliant debt resolution for Chennai, Coimbatore, Madurai borrowers. Protected by TN Anti-Harassment Law.',
  telephone: '+91-XXXXXXXXXX',
  email: 'support@credsettle.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN'
  },
  areaServed: [
    {
      '@type': 'State',
      name: 'Tamil Nadu',
      containsPlace: [
        { '@type': 'City', name: 'Chennai' },
        { '@type': 'City', name: 'Coimbatore' },
        { '@type': 'City', name: 'Madurai' },
        { '@type': 'City', name: 'Salem' },
        { '@type': 'City', name: 'Tiruchirappalli' },
        { '@type': 'City', name: 'Tiruppur' },
        { '@type': 'City', name: 'Erode' },
        { '@type': 'City', name: 'Vellore' }
      ]
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '14000',
    bestRating: '5',
    worstRating: '1'
  },
  priceRange: 'Consultation Free',
  serviceType: 'Personal Loan Settlement',
  knowsAbout: [
    'Personal Loan Settlement',
    'IT Professional Debt Relief',
    'Auto Sector Loan Settlement',
    'Textile Manufacturing Debt',
    'Credit Card Debt Settlement',
    'NBFC Loan Settlement',
    'Bank Loan Negotiation',
    'Lok Adalat Representation',
    'TN Anti-Harassment Law',
    'RBI Guidelines',
    'Tamil Borrower Support'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Loan Settlement Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IT Professional Loan Settlement',
          description: 'Specialized settlement for Chennai OMR and IT corridor professionals'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Manufacturing Sector Settlement',
          description: 'Settlement services for Coimbatore textile and auto sector workers'
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
      name: 'Tamil Nadu',
      item: 'https://credsettle.com/services/personal-loan-settlement/tamil-nadu'
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CredSettle Tamil Nadu',
  image: 'https://credsettle.com/credsettle-logo.svg',
  '@id': 'https://credsettle.com/services/personal-loan-settlement/tamil-nadu',
  url: 'https://credsettle.com/services/personal-loan-settlement/tamil-nadu',
  telephone: '+91-XXXXXXXXXX',
  priceRange: 'Free Consultation',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.0827,
    longitude: 80.2707
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

export default function TamilNaduPage() {
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
      <TamilNaduPageClient />
    </>
  );
}




