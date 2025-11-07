import { Metadata } from 'next';
import DelhiPageClient from './DelhiPageClient';

export const metadata: Metadata = {
  title: 'Personal Loan Settlement Delhi NCR | Noida Gurgaon Faridabad | Reduce Debt 70% | CredSettle',
  description: 'Personal loan settlement in Delhi, Noida, Gurgaon, Faridabad. Reduce debt 30-70%, stop recovery calls. Legal RBI process, 12000+ clients, DRT & Lok Adalat support. Free consultation.',
  keywords: [
    'personal loan settlement Delhi',
    'loan settlement NCR',
    'debt settlement Noida',
    'loan settlement Gurgaon',
    'personal loan settlement Faridabad',
    'Delhi loan settlement company',
    'Noida debt relief services',
    'Gurgaon loan settlement',
    'HDFC loan settlement Delhi',
    'ICICI loan settlement NCR',
    'Bajaj Finserv settlement Delhi',
    'SBI loan settlement Delhi',
    'RBI compliant loan settlement Delhi',
    'Lok Adalat loan settlement Delhi',
    'DRT Delhi loan settlement',
    'stop loan harassment Delhi',
    'legal loan settlement NCR',
    'credit card settlement Delhi',
    'NBFC loan settlement Noida',
    'personal loan waiver Delhi',
    'bank loan settlement NCR',
    'debt negotiation Gurgaon',
    'loan settlement advocate Delhi',
    'CredSettle Delhi office',
    'best loan settlement company NCR',
    'government employee loan settlement Delhi'
  ],
  openGraph: {
    title: 'Personal Loan Settlement Delhi NCR | Reduce Debt 70% | CredSettle',
    description: 'Delhi NCR loan settlement experts. 12000+ cases settled, average 60% debt reduction. Stop harassment in 3 days. Legal DRT & Lok Adalat support.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement Delhi NCR | 70% Debt Reduction | CredSettle',
    description: 'Legal loan settlement in Delhi, Noida, Gurgaon. Stop recovery harassment, reduce debt by 70%. Free consultation.'
  },
  alternates: {
    canonical: 'https://credsettle.com/services/personal-loan-settlement/delhi'
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
  '@id': 'https://credsettle.com/services/personal-loan-settlement/delhi',
  name: 'CredSettle Personal Loan Settlement Delhi NCR',
  legalName: 'CredSettle Legal Services',
  url: 'https://credsettle.com',
  logo: 'https://credsettle.com/credsettle-logo.svg',
  description: 'Professional personal loan settlement services in Delhi NCR. Legal RBI-compliant debt resolution for Delhi, Noida, Gurgaon, Faridabad borrowers.',
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
        { '@type': 'City', name: 'New Delhi' },
        { '@type': 'City', name: 'Noida' },
        { '@type': 'City', name: 'Greater Noida' },
        { '@type': 'City', name: 'Gurgaon' },
        { '@type': 'City', name: 'Gurugram' },
        { '@type': 'City', name: 'Faridabad' },
        { '@type': 'City', name: 'Ghaziabad' },
        { '@type': 'City', name: 'Dwarka' },
        { '@type': 'City', name: 'Rohini' }
      ]
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '12000',
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
    'DRT Proceedings',
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
          description: 'Reduce personal loan debt by 30-70% through legal negotiation in Delhi NCR'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Credit Card Settlement',
          description: 'Stop revolving interest and settle credit card debt in NCR region'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Government Employee Loan Settlement',
          description: 'Specialized settlement services for Delhi government employees'
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
      name: 'Delhi',
      item: 'https://credsettle.com/services/personal-loan-settlement/delhi'
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CredSettle Delhi NCR',
  image: 'https://credsettle.com/credsettle-logo.svg',
  '@id': 'https://credsettle.com/services/personal-loan-settlement/delhi',
  url: 'https://credsettle.com/services/personal-loan-settlement/delhi',
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


