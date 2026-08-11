import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuctionSettlementProcessClient from './AuctionSettlementProcessClient';

export const metadata: Metadata = {
    title: "Auction Settlement Process for Loan Recovery Explained",
    description: "Stop bank auction by settlement. Learn the hidden pre auction settlement window under SARFAESI and how to negotiate a cash settlement before property liquidation.",
    keywords: [
        "loan auction settlement process",
        "stop bank auction by settlement",
        "SARFAESI property auction settlement",
        "pre auction settlement window",
        "debt recovery tribunal auction stay",
        "bank property auction negotiation"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/auction-settlement-process-loan-recovery-explained',
    },
};

export default function AuctionSettlementProcessPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "The Auction Settlement Process for Loan Recovery Explained",
        "description": "Discover the hidden pre auction settlement window under SARFAESI. Learn why banks prefer to negotiate a cash settlement rather than deal with the hassle of liquidating real estate.",
        "image": "https://www.credsettle.com/images/auction-settlement-process.jpg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle Consumer Protection Wing"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": "2025-05-15",
        "dateModified": "2026-05-15"
    };

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
                "name": "Auction Settlement Process",
                "item": "https://www.credsettle.com/auction-settlement-process-loan-recovery-explained"
            }
        ]
    };

    const organizationLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "CredSettle",
        "url": "https://www.credsettle.com",
        "logo": "https://www.credsettle.com/logo.png",
        "sameAs": [
            "https://www.facebook.com/credsettle",
            "https://www.twitter.com/credsettle",
            "https://www.linkedin.com/company/credsettle"
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-auction"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-auction"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-auction"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <AuctionSettlementProcessClient />
                        </div>
            <Footer />
        </div>
    );
}
