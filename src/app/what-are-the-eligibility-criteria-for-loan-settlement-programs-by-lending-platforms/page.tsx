import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanSettlementEligibilityCriteriaClient from './LoanSettlementEligibilityCriteriaClient';

export const metadata: Metadata = {
  title: 'What are the Eligibility Criteria for Loan Settlement Programs by Lending Platforms?',
  description: 'Discover the eligibility criteria for loan settlement programs in India. Learn about NPA requirements, hardship proofs, and lender-specific rules for 2025.',
  keywords: 'loan settlement eligibility, debt settlement criteria india, rbi guidelines for settlement, eligibility for fintech loan settlement, who can settle loans',
  alternates: {
    canonical: 'https://www.credsettle.com/what-are-the-eligibility-criteria-for-loan-settlement-programs-by-lending-platforms',
  },
};

export default function Page() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <LoanSettlementEligibilityCriteriaClient />
      <Footer />
    </div>
  );
}
