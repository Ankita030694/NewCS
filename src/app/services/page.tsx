import { Metadata } from 'next';
import Script from 'next/script';
import ServicesPageClient from './ServicesPageClient';

export const metadata: Metadata = {
  title: 'Legal Debt Settlement & Loan Relief Services | CredSettle',
  description:
    'Explore CredSettle’s RBI-compliant debt settlement services for personal loans, credit cards, NBFC loans, and anti-harassment legal protection.',
  alternates: { canonical: 'https://www.credsettle.com/services' },
  openGraph: {
    title: 'Legal Debt Settlement & Loan Relief Services | CredSettle',
    description:
      'Explore CredSettle’s RBI-compliant debt settlement services for personal loans, credit cards, NBFC loans, and anti-harassment legal protection.',
    url: 'https://www.credsettle.com/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Debt Settlement & Loan Relief Services | CredSettle',
    description:
      'Explore CredSettle’s RBI-compliant debt settlement services for personal loans, credit cards, NBFC loans, and anti-harassment legal protection.',
  },
};

export default function ServicesPage() {
  const serviceListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'CredSettle Legal Debt Resolution Services',
    description: 'Comprehensive RBI-compliant debt resolution and legal protection services.',
    url: 'https://www.credsettle.com/services',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Personal Loan Settlement',
        url: 'https://www.credsettle.com/services/personal-loan-settlement',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Credit Card Settlement',
        url: 'https://www.credsettle.com/services/credit-card-settlement',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Anti-Harassment Legal Protection',
        url: 'https://www.credsettle.com/services/anti-harassment',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Business Loan Settlement',
        url: 'https://www.credsettle.com/services/business-loan-settlement',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'NBFC Loan Settlement',
        url: 'https://www.credsettle.com/services/nbfc-loan-settlement',
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Credit Score Builder',
        url: 'https://www.credsettle.com/services/credit-score-builder',
      },
      {
        '@type': 'ListItem',
        position: 7,
        name: 'App Loan Settlement',
        url: 'https://www.credsettle.com/services/app-loan-settlement',
      },
      {
        '@type': 'ListItem',
        position: 8,
        name: 'Car Loan Settlement',
        url: 'https://www.credsettle.com/services/car-loan-settlement',
      },
      {
        '@type': 'ListItem',
        position: 9,
        name: 'Cheque Bounce Defense',
        url: 'https://www.credsettle.com/services/cheque-bounce-lawyer',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does the debt settlement process take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The debt settlement process typically takes 12-48 months, depending on your debt amount and lender cooperation. We work efficiently to negotiate the best possible settlement terms for you.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will debt settlement affect my credit score?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, debt settlement may initially impact your credit score. However, our credit repair services help improve your score over time, and settling debts is better than defaulting.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of debts can be settled?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We can settle credit card debts, personal loans, business loans, car loans, app loans, and NBFC loans. Secured loans like home loans require different approaches.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much can I save through debt settlement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Savings vary by case, but clients typically save 30-60% of their total debt amount. We negotiate aggressively to maximize your savings while ensuring legal compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is debt settlement legal in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, debt settlement is completely legal in India. We follow RBI guidelines and ensure all settlements are compliant with Indian banking regulations.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if recovery agents continue harassment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our anti-harassment services include call forwarding, complaint filing with RBI/NCH, and cease & desist notices. We provide immediate legal protection against illegal harassment.',
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="services-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
      <Script
        id="services-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicesPageClient />
    </>
  );
}
