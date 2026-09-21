import type { Metadata } from 'next';
import LoginPageClient from './LoginPageClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.credsettle.com/nullify' },
  title: 'Login | CredSettle',
  description:
    'Securely access your CredSettle account to manage your loan settlement journey, track progress, and connect with our legal experts.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  return <LoginPageClient />;
}


