import { Metadata } from 'next';
import RajasthanPageClient from './RajasthanPageClient';

export const metadata: Metadata = {
  title: 'Loan Settlement Jaipur Jodhpur Rajasthan | Tourism Handicraft | Save 70% | CredSettle',
  description: 'Personal loan settlement in Jaipur, Jodhpur, Udaipur, Kota. Tourism sector, handicraft, mining, MSME. Rajasthan OTS Scheme support. Reduce debt 30-70%. 7500+ Rajasthan clients.',
  keywords: [
    'loan settlement Jaipur',
    'personal loan settlement Jodhpur',
    'debt settlement Udaipur',
    'loan settlement Kota',
    'Rajasthan loan settlement company',
    'Jaipur Pink City loan settlement',
    'tourism sector debt Rajasthan',
    'handicraft business loan',
    'HDFC loan settlement Jaipur',
    'SBI loan settlement Rajasthan',
    'Bajaj Finserv settlement Jaipur',
    'RBI compliant loan settlement Rajasthan',
    'Lok Adalat loan settlement Jaipur',
    'Rajasthan OTS Scheme 2024',
    'stop loan harassment Jaipur',
    'legal loan settlement Udaipur',
    'credit card settlement Jaipur',
    'NBFC loan settlement Rajasthan',
    'bank loan settlement Jodhpur',
    'CredSettle Jaipur office',
    'best loan settlement Rajasthan',
    'marble industry loan help',
    'heritage business debt relief'
  ],
  openGraph: {
    title: 'Loan Settlement Jaipur Jodhpur Rajasthan | Tourism MSME | Save 70% | CredSettle',
    description: 'Rajasthan loan settlement experts. 7500+ cases, 56% average savings. Tourism sector, handicraft, mining specialists. OTS Scheme support.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement Jaipur Rajasthan | 70% Debt Cut | CredSettle',
    description: 'Legal loan settlement in Jaipur, Jodhpur, Udaipur. Tourism, handicraft, MSME. Rajasthan OTS Scheme support.'
  },
  alternates: {
    canonical: 'https://credsettle.com/services/personal-loan-settlement/rajasthan'
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
  '@id': 'https://credsettle.com/services/personal-loan-settlement/rajasthan',
  name: 'CredSettle Personal Loan Settlement Rajasthan',
  legalName: 'CredSettle Legal Services',
  url: 'https://credsettle.com',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  description: 'Professional personal loan settlement services in Rajasthan. Legal RBI-compliant debt resolution for Jaipur, Jodhpur, Udaipur borrowers. Tourism and heritage sector specialists.',
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
        { '@type': 'City', name: 'Jodhpur' },
        { '@type': 'City', name: 'Udaipur' },
        { '@type': 'City', name: 'Kota' },
        { '@type': 'City', name: 'Ajmer' },
        { '@type': 'City', name: 'Bikaner' },
        { '@type': 'City', name: 'Alwar' },
        { '@type': 'City', name: 'Bhilwara' }
      ]
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.6',
    reviewCount: '7500',
    bestRating: '5',
    worstRating: '1'
  },
  priceRange: 'Consultation Free',
  serviceType: 'Personal Loan Settlement',
  knowsAbout: [
    'Personal Loan Settlement',
    'Tourism Sector Debt Relief',
    'Handicraft Business Loan Settlement',
    'Mining Industry Debt Resolution',
    'MSME Loan Settlement',
    'Credit Card Debt Settlement',
    'NBFC Loan Settlement',
    'Bank Loan Negotiation',
    'Lok Adalat Representation',
    'Rajasthan OTS Scheme',
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
          name: 'Tourism Sector Loan Settlement',
          description: 'Specialized settlement for Rajasthan tourism, hotel and heritage business owners'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Handicraft Business Settlement',
          description: 'Settlement services for Jaipur handicraft exporters and artisans'
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
      name: 'Rajasthan',
      item: 'https://credsettle.com/services/personal-loan-settlement/rajasthan'
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CredSettle Rajasthan',
  image: 'https://credsettle.com/credsettle-logo.svg',
  '@id': 'https://credsettle.com/services/personal-loan-settlement/rajasthan',
  url: 'https://credsettle.com/services/personal-loan-settlement/rajasthan',
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


