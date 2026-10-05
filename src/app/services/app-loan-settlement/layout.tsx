import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'App Loan Settlement Services | CredSettle',
  description:
    'Settle instant and online app loans legally with CredSettle. Stop illegal recovery harassment, abusive collection calls, and resolve loan app debts safely.',
  keywords: [
    'app loan settlement',
    'instant app loan settlement',
    'online loan app settlement',
    'digital loan settlement',
    'loan app harassment legal help',
    'stop loan app recovery agents',
    '7 day loan app settlement'
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/services/app-loan-settlement',
  },
  openGraph: {
    title: 'App Loan Settlement Services | CredSettle',
    description:
      'Settle instant and online app loans legally with CredSettle. Stop illegal recovery harassment, abusive collection calls, and resolve loan app debts safely.',
    url: 'https://www.credsettle.com/services/app-loan-settlement',
    siteName: 'CredSettle',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App Loan Settlement Services | CredSettle',
    description:
      'Settle instant and online app loans legally with CredSettle. Stop illegal recovery harassment, abusive collection calls, and resolve loan app debts safely.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
