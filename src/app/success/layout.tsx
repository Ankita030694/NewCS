import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payment Successful | CredSettle',
  description: 'Thank you for your payment. Your transaction has been successfully processed by CredSettle.',
  alternates: { canonical: 'https://www.credsettle.com/success' },
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

export default function SuccessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
