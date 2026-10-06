import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You for Submitting | CredSettle',
  description:
    'Thank you for contacting CredSettle. Our debt settlement legal experts will review your details and connect with you within 24 hours.',
  openGraph: {
    title: 'Thank You for Submitting | CredSettle',
    description:
      'Thank you for contacting CredSettle. Our debt settlement legal experts will review your details and connect with you within 24 hours.',
    url: 'https://www.credsettle.com/thank-you',
    siteName: 'CredSettle',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thank You for Submitting | CredSettle',
    description:
      'Thank you for contacting CredSettle. Our debt settlement legal experts will review your details and connect with you within 24 hours.',
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
