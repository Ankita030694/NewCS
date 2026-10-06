import type { Metadata } from 'next';
import LoginPageClient from './LoginPageClient';

export const metadata: Metadata = {
  title: 'Client & Partner Portal Login | CredSettle Official',
  description:
    'Securely access your CredSettle account to manage your loan settlement journey, track case status, and connect directly with our expert legal advocates.',
  alternates: { canonical: 'https://www.credsettle.com/nullify' },
  openGraph: {
    title: 'Client & Partner Portal Login | CredSettle Official',
    description:
      'Securely access your CredSettle account to manage your loan settlement journey, track case status, and connect directly with our expert legal advocates.',
    url: 'https://www.credsettle.com/nullify',
    siteName: 'CredSettle',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client & Partner Portal Login | CredSettle Official',
    description:
      'Securely access your CredSettle account to manage your loan settlement journey, track case status, and connect directly with our expert legal advocates.',
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

export default function LoginPage() {
  return <LoginPageClient />;
}


