import { Metadata } from 'next';
import UttarPradeshPageClient from './UttarPradeshPageClient';

export const metadata: Metadata = {
  title: 'Loan Settlement Lucknow Kanpur UP | Agra Varanasi | Save 70% Debt | CredSettle',
  description: 'Personal loan settlement in Lucknow, Kanpur, Agra, Varanasi, Meerut. Reduce debt 30-70%. UP government employees, traders, MSME owners. RBI legal, 15000+ clients. Free consultation.',
  keywords: [
    'loan settlement Lucknow',
    'personal loan settlement Kanpur',
    'debt settlement Agra',
    'loan settlement Varanasi',
    'personal loan settlement Uttar Pradesh',
    'Lucknow loan settlement company',
    'Kanpur debt relief',
    'Meerut loan settlement',
    'Ghaziabad personal loan settlement',
    'Allahabad loan settlement',
    'UP government employee loan settlement',
    'HDFC loan settlement Lucknow',
    'SBI loan settlement Kanpur',
    'Bajaj Finserv settlement UP',
    'RBI compliant loan settlement UP',
    'Lok Adalat loan settlement Lucknow',
    'stop loan harassment Uttar Pradesh',
    'legal loan settlement Kanpur',
    'NBFC loan settlement Agra',
    'bank loan settlement Varanasi',
    'debt negotiation Meerut',
    'UP State Consumer Commission loan',
    'CredSettle Lucknow office',
    'best loan settlement UP',
    'trader loan settlement Agra'
  ],
  openGraph: {
    title: 'Loan Settlement Lucknow Kanpur UP | Reduce Debt 70% | CredSettle',
    description: 'UP loan settlement experts. 15000+ cases settled across Lucknow, Kanpur, Agra. Average 58% debt reduction. Stop harassment in 3 days.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement Lucknow Kanpur | 70% Debt Cut | CredSettle UP',
    description: 'Legal loan settlement in Lucknow, Kanpur, Agra, Varanasi. Government employees, traders, MSME. Stop harassment.'
  },
  alternates: {
    canonical: 'https://credsettle.com/services/personal-loan-settlement/uttar-pradesh'
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
  '@id': 'https://credsettle.com/services/personal-loan-settlement/uttar-pradesh',
  name: 'CredSettle Personal Loan Settlement Uttar Pradesh',
  legalName: 'CredSettle Legal Services',
  url: 'https://credsettle.com',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  description: 'Professional personal loan settlement services in Uttar Pradesh. Legal RBI-compliant debt resolution for Lucknow, Kanpur, Agra, Varanasi borrowers.',
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
        { '@type': 'City', name: 'Kanpur' },
        { '@type': 'City', name: 'Agra' },
        { '@type': 'City', name: 'Varanasi' },
        { '@type': 'City', name: 'Meerut' },
        { '@type': 'City', name: 'Ghaziabad' },
        { '@type': 'City', name: 'Allahabad' },
        { '@type': 'City', name: 'Prayagraj' },
        { '@type': 'City', name: 'Bareilly' },
        { '@type': 'City', name: 'Aligarh' }
      ]
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '15000',
    bestRating: '5',
    worstRating: '1'
  },
  priceRange: 'Consultation Free',
  serviceType: 'Personal Loan Settlement',
  knowsAbout: [
    'Personal Loan Settlement',
    'Government Employee Debt Relief',
    'MSME Loan Settlement',
    'Trader Loan Settlement',
    'Credit Card Debt Settlement',
    'NBFC Loan Settlement',
    'Bank Loan Negotiation',
    'Lok Adalat Representation',
    'UP Consumer Commission Cases',
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
          name: 'Government Employee Loan Settlement',
          description: 'Specialized settlement for UP state government employees with salary issues'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Trader & Business Loan Settlement',
          description: 'Settlement services for Agra, Kanpur traders and MSME owners'
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
      name: 'Uttar Pradesh',
      item: 'https://credsettle.com/services/personal-loan-settlement/uttar-pradesh'
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CredSettle Uttar Pradesh',
  image: 'https://credsettle.com/credsettle-logo.svg',
  '@id': 'https://credsettle.com/services/personal-loan-settlement/uttar-pradesh',
  url: 'https://credsettle.com/services/personal-loan-settlement/uttar-pradesh',
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





