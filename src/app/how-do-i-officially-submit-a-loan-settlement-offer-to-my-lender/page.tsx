import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HowToSubmitLoanSettlementClient from './HowToSubmitLoanSettlementClient';

export const metadata: Metadata = {
  title: 'How do I Officially Submit a Loan Settlement Offer to My Lender? (2025 Guide)',
  description: 'Understand the official process of submitting a loan settlement offer to your lender in India. Learn about hardship letters, nodal officers, and RBI 2025 guidelines.',
  keywords: 'loan settlement offer, how to settle loan with bank, debt settlement process india, hardship letter for loan settlement, nodal officer bank settlement',
  alternates: {
    canonical: 'https://www.credsettle.com/how-do-i-officially-submit-a-loan-settlement-offer-to-my-lender',
  },
};

export default function Page() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <HowToSubmitLoanSettlementClient />
      <Footer />
    </div>
  );
}
