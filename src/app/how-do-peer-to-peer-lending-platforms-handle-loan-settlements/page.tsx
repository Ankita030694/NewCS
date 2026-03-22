import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import P2PLendingSettlementClient from './P2PLendingSettlementClient';

export const metadata: Metadata = {
  title: 'How do Peer-to-Peer (P2P) Lending Platforms Handle Loan Settlements in India? (2025)',
  description: 'Learn the legal and procedural steps for loan settlement on Indian P2P lending platforms. Detailed guide on RBI NBFC-P2P rules, recovery, and debt resolution.',
  keywords: 'p2p lending settlement india, nbfc-p2p loan settlement, rbi guidelines for p2p platforms, faircent settlement, lendenclub debt recovery, p2p loan default resolution',
  alternates: {
    canonical: 'https://www.credsettle.com/how-do-peer-to-peer-lending-platforms-handle-loan-settlements',
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
        "name": "P2P Lending Settlement Guide",
        "item": "https://www.credsettle.com/how-do-peer-to-peer-lending-platforms-handle-loan-settlements"
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Script
        id="breadcrumb-schema-p2p"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <P2PLendingSettlementClient />
      <Footer />
    </div>
  );
}
