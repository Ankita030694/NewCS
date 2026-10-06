import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payment Received Successfully | CredSettle',
  description:
    'Thank you for your payment. Your transaction has been successfully processed by CredSettle. Our legal team will prioritize your case.',
  alternates: { canonical: 'https://www.credsettle.com/success' },
  openGraph: {
    title: 'Payment Received Successfully | CredSettle',
    description:
      'Thank you for your payment. Your transaction has been successfully processed by CredSettle. Our legal team will prioritize your case.',
    url: 'https://www.credsettle.com/success',
    siteName: 'CredSettle',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payment Received Successfully | CredSettle',
    description:
      'Thank you for your payment. Your transaction has been successfully processed by CredSettle. Our legal team will prioritize your case.',
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
};

export default function SuccessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
