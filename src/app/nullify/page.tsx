import type { Metadata } from 'next';
import LoginPageClient from './LoginPageClient';

export const metadata: Metadata = {
  title: 'Client & Partner Portal Login | CredSettle',
  description:
    'Securely access your CredSettle account to manage your loan settlement journey, track progress, and connect with our legal experts.',
  alternates: { canonical: 'https://www.credsettle.com/nullify' },
  openGraph: {
    title: 'Client & Partner Portal Login | CredSettle',
    description:
      'Securely access your CredSettle account to manage your loan settlement journey, track progress, and connect with our legal experts.',
    url: 'https://www.credsettle.com/nullify',
    siteName: 'CredSettle',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client & Partner Portal Login | CredSettle',
    description:
      'Securely access your CredSettle account to manage your loan settlement journey, track progress, and connect with our legal experts.',
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

export default function LoginPage() {
  return <LoginPageClient />;
}


