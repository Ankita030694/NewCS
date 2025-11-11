import type { Metadata } from 'next';
import LoginPageClient from './LoginPageClient';

export const metadata: Metadata = {
  title: 'Login | CredSettle',
  description:
    'Securely access your CredSettle account to manage your loan settlement journey, track progress, and connect with our legal experts.',
};

export default function LoginPage() {
  return <LoginPageClient />;
}


