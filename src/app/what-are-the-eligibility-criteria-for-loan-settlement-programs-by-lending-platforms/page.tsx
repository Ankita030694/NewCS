import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanSettlementEligibilityCriteriaClient from './LoanSettlementEligibilityCriteriaClient';

export const metadata: Metadata = {
  title: 'Loan Settlement Eligibility Criteria | CredSettle',
  description: 'Discover the eligibility criteria for loan settlement programs in India. Learn about NPA requirements, hardship proofs, and lender-specific rules for 2025.',
  keywords: 'loan settlement eligibility, debt settlement criteria india, rbi guidelines for settlement, eligibility for fintech loan settlement, who can settle loans',
  alternates: {
    canonical: 'https://www.credsettle.com/what-are-the-eligibility-criteria-for-loan-settlement-programs-by-lending-platforms',
  },
};

export default function Page() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.credsettle.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Loan Settlement Eligibility Criteria",
        "item": "https://www.credsettle.com/what-are-the-eligibility-criteria-for-loan-settlement-programs-by-lending-platforms"
      }
    ]
  };

  return (
    <div className="relative min-h-screen bg-white mt-5">
      <Navbar />
            <div className="relative z-10">
      <Script
        id="breadcrumb-schema-eligibility"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <LoanSettlementEligibilityCriteriaClient />
                  </div>
            <Footer />
    </div>
  );
}
