import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Loan Settlement Services | CredSettle',
  description:
    'Settle business and MSME loans legally with CredSettle. Protect company assets, negotiate reduced debt settlements, and restore financial stability.',
  keywords: [
    'business loan settlement',
    'msme loan settlement',
    'commercial loan settlement',
    'business debt relief',
    'settle business loan india',
    'unsecured business loan settlement',
    'npa business loan settlement'
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/services/business-loan-settlement',
  },
  openGraph: {
    title: 'Business Loan Settlement Services | CredSettle',
    description:
      'Settle business and MSME loans legally with CredSettle. Protect company assets, negotiate reduced debt settlements, and restore financial stability.',
    url: 'https://www.credsettle.com/services/business-loan-settlement',
    siteName: 'CredSettle',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Loan Settlement Services | CredSettle',
    description:
      'Settle business and MSME loans legally with CredSettle. Protect company assets, negotiate reduced debt settlements, and restore financial stability.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
