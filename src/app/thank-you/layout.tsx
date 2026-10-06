import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You for Submitting Details | CredSettle India',
  description:
    'Thank you for contacting CredSettle. Our debt settlement legal experts will review your details and connect with you within 24 hours for consultation.',
  alternates: { canonical: 'https://www.credsettle.com/thank-you' },
  openGraph: {
    title: 'Thank You for Submitting Details | CredSettle India',
    description:
      'Thank you for contacting CredSettle. Our debt settlement legal experts will review your details and connect with you within 24 hours for consultation.',
    url: 'https://www.credsettle.com/thank-you',
    siteName: 'CredSettle',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thank You for Submitting Details | CredSettle India',
    description:
      'Thank you for contacting CredSettle. Our debt settlement legal experts will review your details and connect with you within 24 hours for consultation.',
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

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
