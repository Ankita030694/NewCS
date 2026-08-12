import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.credsettle.com/services/car-loan-settlement',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
