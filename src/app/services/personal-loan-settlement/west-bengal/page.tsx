import { Metadata } from 'next';
import WestBengalPageClient from './WestBengalPageClient';

export const metadata: Metadata = {
  title: 'Loan Settlement Kolkata West Bengal | Howrah Durgapur | Save 70% Debt | CredSettle',
  description: 'Personal loan settlement in Kolkata, Howrah, Durgapur, Siliguri. Reduce debt 30-70%. IT sector, traders, salaried class. RBI legal process. 13000+ West Bengal clients. Free consultation.',
  keywords: [
    'loan settlement Kolkata',
    'personal loan settlement West Bengal',
    'debt settlement Howrah',
    'loan settlement Durgapur',
    'Kolkata loan settlement company',
    'Siliguri debt relief',
    'Asansol loan settlement',
    'HDFC loan settlement Kolkata',
    'SBI loan settlement West Bengal',
    'Bandhan Bank loan settlement',
    'Bajaj Finserv settlement Kolkata',
    'IT professional loan settlement Kolkata',
    'RBI compliant loan settlement WB',
    'Lok Adalat loan settlement Kolkata',
    'stop loan harassment Kolkata',
    'legal loan settlement Howrah',
    'credit card settlement Kolkata',
    'NBFC loan settlement West Bengal',
    'personal loan waiver Kolkata',
    'bank loan settlement Durgapur',
    'debt negotiation Siliguri',
    'CredSettle Kolkata office',
    'best loan settlement company West Bengal',
    'Bengali borrower loan help'
  ],
  openGraph: {
    title: 'Loan Settlement Kolkata West Bengal | Reduce Debt 70% | CredSettle',
    description: 'Kolkata and WB loan settlement experts. 13000+ cases settled, average 60% debt reduction. Stop harassment in 3 days.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement Kolkata WB | 70% Debt Cut | CredSettle',
    description: 'Legal loan settlement in Kolkata, Howrah, Durgapur. Stop recovery harassment, reduce debt 70%.'
  },
  alternates: {
    canonical: 'https://credsettle.com/services/personal-loan-settlement/west-bengal'
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
  '@id': 'https://credsettle.com/services/personal-loan-settlement/west-bengal',
  name: 'CredSettle Personal Loan Settlement West Bengal',
  legalName: 'CredSettle Legal Services',
  url: 'https://credsettle.com',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  description: 'Professional personal loan settlement services in West Bengal. Legal RBI-compliant debt resolution for Kolkata, Howrah, Durgapur, Siliguri borrowers.',
  telephone: '+91-XXXXXXXXXX',
  email: 'support@credsettle.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kolkata',
    addressRegion: 'West Bengal',
    addressCountry: 'IN'
  },
  areaServed: [
    {
      '@type': 'State',
      name: 'West Bengal',
      containsPlace: [
        { '@type': 'City', name: 'Kolkata' },
        { '@type': 'City', name: 'Howrah' },
        { '@type': 'City', name: 'Durgapur' },
        { '@type': 'City', name: 'Siliguri' },
        { '@type': 'City', name: 'Asansol' },
        { '@type': 'City', name: 'Bardhaman' },
        { '@type': 'City', name: 'Kharagpur' },
        { '@type': 'City', name: 'Haldia' }
      ]
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '13000',
    bestRating: '5',
    worstRating: '1'
  },
  priceRange: 'Consultation Free',
  serviceType: 'Personal Loan Settlement',
  knowsAbout: [
    'Personal Loan Settlement',
    'IT Professional Debt Relief',
    'Trader Loan Settlement',
    'Credit Card Debt Settlement',
    'NBFC Loan Settlement',
    'Bank Loan Negotiation',
    'Lok Adalat Representation',
    'West Bengal Consumer Commission',
    'RBI Guidelines',
    'Bengali Borrower Support'
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
          description: 'Reduce personal loan debt by 30-70% through legal negotiation in West Bengal'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Credit Card Settlement',
          description: 'Stop revolving interest and settle credit card debt in Kolkata'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Loan Settlement',
          description: 'Settlement services for Kolkata traders and business owners'
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
      name: 'West Bengal',
      item: 'https://credsettle.com/services/personal-loan-settlement/west-bengal'
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CredSettle West Bengal',
  image: 'https://credsettle.com/credsettle-logo.svg',
  '@id': 'https://credsettle.com/services/personal-loan-settlement/west-bengal',
  url: 'https://credsettle.com/services/personal-loan-settlement/west-bengal',
  telephone: '+91-XXXXXXXXXX',
  priceRange: 'Free Consultation',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kolkata',
    addressRegion: 'West Bengal',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 22.5726,
    longitude: 88.3639
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

export default function WestBengalPage() {
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
      <WestBengalPageClient />
    </>
  );
}

