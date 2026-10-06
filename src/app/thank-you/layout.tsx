import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You | CredSettle',
  description: 'Thank you for contacting CredSettle. Our debt settlement legal experts will reach out to you shortly.',
  alternates: { canonical: 'https://www.credsettle.com/thank-you' },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
