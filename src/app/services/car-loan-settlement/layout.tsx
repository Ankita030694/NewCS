import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Car Loan Settlement Agency in India | Settle Auto Loans - CredSettle',
  description:
    'Settle car loans and auto loans for 40% to 55% less with CredSettle, India’s premier car loan settlement agency. Prevent vehicle seizure, stop recovery harassment, and secure RBI-compliant debt relief.',
  keywords: [
    'car loan settlement agency',
    'car loan settlement',
    'car loan settlement percentage',
    'auto loan settlement',
    'how to settle car loan',
    'vehicle loan settlement',
    'car loan settlement process in hindi',
    'car loan debt relief',
    'car loan settlement letter',
    'will a bank settle on a car loan',
    'hdfc car loan settlement',
    'sbi car loan settlement',
    'car loan defaulter legal action'
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/services/car-loan-settlement',
  },
  openGraph: {
    title: 'Car Loan Settlement Agency in India | Settle Auto Loans - CredSettle',
    description:
      'Negotiate reduced lump-sum settlements on car and auto loans. Protect your vehicle from illegal repossession and get Form 35 hypothecation release.',
    url: 'https://www.credsettle.com/services/car-loan-settlement',
    siteName: 'CredSettle',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Loan Settlement Agency in India | CredSettle',
    description:
      'Settle auto and car loans legally. Stop recovery agent harassment, negotiate 40%-55% waivers, and safeguard your vehicle.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
