import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Credit Card Settlement Services | CredSettle',
  description:
    'Settle credit card debt legally with CredSettle. Stop recovery agent harassment, eliminate compounding interest, and get formal RBI-compliant debt closure.',
  keywords: [
    'credit card settlement',
    'credit card debt settlement',
    'credit card settlement in india',
    'credit card ots scheme',
    'stop credit card recovery calls',
    'credit card debt relief',
    'settle credit card debt'
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/services/credit-card-settlement',
  },
  openGraph: {
    title: 'Credit Card Settlement Services | CredSettle',
    description:
      'Settle credit card debt legally with CredSettle. Stop recovery agent harassment, eliminate compounding interest, and get formal RBI-compliant debt closure.',
    url: 'https://www.credsettle.com/services/credit-card-settlement',
    siteName: 'CredSettle',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card Settlement Services | CredSettle',
    description:
      'Settle credit card debt legally with CredSettle. Stop recovery agent harassment, eliminate compounding interest, and get formal RBI-compliant debt closure.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
