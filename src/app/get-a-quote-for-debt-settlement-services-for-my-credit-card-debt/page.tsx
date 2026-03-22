import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CreditCardSettlementQuoteClient from './CreditCardSettlementQuoteClient';

export const metadata: Metadata = {
  title: 'Get a Quote for Credit Card Debt Settlement Services in India (2025)',
  description: 'Apply for a debt settlement quote for your credit card debt. Learn about the settlement process, savings potential, and legal debt resolution in India with CredSettle.',
  keywords: 'credit card debt settlement quote, debt relief quote india, settle credit card debt, debt resolution services, credit card settlement process india',
  alternates: {
    canonical: 'https://www.credsettle.com/get-a-quote-for-debt-settlement-services-for-my-credit-card-debt',
  },
};

export default function Page() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <CreditCardSettlementQuoteClient />
      <Footer />
    </div>
  );
}
