import { Metadata } from 'next';
import DelhiPageClient from './DelhiPageClient';

export const metadata: Metadata = {
  title: 'Credit Card Settlement Delhi NCR Gurgaon Noida | Save 60% | Stop Calls | CredSettle',
  description: 'Credit card settlement in Delhi, Gurgaon, Noida, Faridabad. Multiple card debt, EMI trap, lifestyle spending. Reduce debt 40-75%. Legal RBI-compliant. 7,800+ Delhi NCR clients debt-free.',
  keywords: [
    'credit card settlement Delhi',
    'credit card debt relief NCR',
    'settle credit card debt Gurgaon',
    'HDFC credit card settlement Delhi',
    'ICICI credit card settlement Noida',
    'SBI credit card settlement',
    'Axis Bank credit card settlement',
    'multiple credit card debt Delhi',
    'EMI payment trap',
    'credit card harassment Delhi',
    'stop credit card collection calls',
    'legal credit card settlement Delhi',
    'RBI credit card settlement rules',
    'reduce credit card debt 60%',
    'credit card settlement company Delhi',
    'CredSettle Delhi office',
    'credit card EMI settlement',
    'corporate debt settlement',
    'shopping debt settlement'
  ],
  openGraph: {
    title: 'Credit Card Settlement Delhi NCR | Save 60% on Card Debt | CredSettle',
    description: 'Delhi NCR credit card settlement experts. 7,800+ cases settled. Multiple cards, EMI trap, corporate debt. Average 56% savings.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card Settlement Delhi | 60% Debt Cut | CredSettle',
    description: 'Legal credit card settlement in Delhi, Gurgaon, Noida. Stop harassment, reduce debt 40-75%. RBI-compliant process.'
  },
  alternates: {
    canonical: 'https://credsettle.com/services/credit-card-settlement/delhi'
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
  '@id': 'https://credsettle.com/services/credit-card-settlement/delhi',
  name: 'CredSettle Credit Card Settlement Delhi',
  legalName: 'CredSettle Legal Services',
  url: 'https://credsettle.com',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  description: 'Professional credit card settlement services in Delhi NCR. Legal RBI-compliant debt resolution for Delhi, Gurgaon, Noida borrowers. Multiple card debt specialists.',
  telephone: '+91-XXXXXXXXXX',
  email: 'support@credsettle.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Delhi',
    addressRegion: 'Delhi',
    addressCountry: 'IN'
  },
  areaServed: [
    {
      '@type': 'State',
      name: 'Delhi',
      containsPlace: [
        { '@type': 'City', name: 'Delhi' },
        { '@type': 'City', name: 'Gurgaon' },
        { '@type': 'City', name: 'Noida' },
        { '@type': 'City', name: 'Faridabad' },
        { '@type': 'City', name: 'Ghaziabad' },
        { '@type': 'City', name: 'Greater Noida' }
      ]
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '7800',
    bestRating: '5',
    worstRating: '1'
  },
  priceRange: 'Consultation Free',
  serviceType: 'Credit Card Settlement',
  knowsAbout: [
    'Credit Card Settlement',
    'Multiple Card Debt Resolution',
    'EMI Trap Solutions',
    'Corporate Debt Management',
    'Lifestyle Debt Settlement',
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
          description: 'Settle debt across 3-7 credit cards with single negotiation strategy'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'EMI Trap Resolution',
          description: 'Break the EMI payment cycle and reduce total debt by 40-75%'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Credit Card Debt Settlement',
          description: 'Reduce credit card debt through legal RBI-compliant negotiation'
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
      name: 'Delhi',
      item: 'https://credsettle.com/services/credit-card-settlement/delhi'
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CredSettle Delhi Credit Card Settlement',
  image: 'https://credsettle.com/credsettle-logo.svg',
  '@id': 'https://credsettle.com/services/credit-card-settlement/delhi',
  url: 'https://credsettle.com/services/credit-card-settlement/delhi',
  telephone: '+91-XXXXXXXXXX',
  priceRange: 'Free Consultation',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Delhi',
    addressRegion: 'Delhi',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.6139,
    longitude: 77.2090
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

export default function DelhiPage() {
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
      <DelhiPageClient />
    </>
  );
}

