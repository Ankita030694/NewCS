import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payment Received Successfully | CredSettle Official',
  description:
    'Your payment has been successfully processed by CredSettle. Our senior legal team has prioritized your case file for immediate debt resolution.',
  alternates: { canonical: 'https://www.credsettle.com/success' },
  openGraph: {
    title: 'Payment Received Successfully | CredSettle Official',
    description:
      'Your payment has been successfully processed by CredSettle. Our senior legal team has prioritized your case file for immediate debt resolution.',
    url: 'https://www.credsettle.com/success',
    siteName: 'CredSettle',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payment Received Successfully | CredSettle Official',
    description:
      'Your payment has been successfully processed by CredSettle. Our senior legal team has prioritized your case file for immediate debt resolution.',
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
    },
  },
};

export default function SuccessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
