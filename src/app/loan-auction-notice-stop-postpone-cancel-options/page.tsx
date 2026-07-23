import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanAuctionNoticeClient from './LoanAuctionNoticeClient';

export const metadata: Metadata = {
    title: "Loan Auction Notice: Stop, Postpone, or Cancel Options (2025)",
    description: "Learn how to stop, postpone, or cancel a property auction after receiving a SARFAESI notice. Discover your legal rights, Section 13(8) options, and DRT stays.",
    keywords: [
        "stop bank auction of property",
        "postpone SARFAESI auction",
        "cancel loan property auction",
        "SARFAESI act property auction rules",
        "how to stop property auction by bank in India",
        "Section 13(8) SARFAESI Act rights",
        "DRT stay order on bank auction"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/loan-auction-notice-stop-postpone-cancel-options',
    },
};

export default function LoanAuctionNoticePage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Loan Auction Notice: Stop, Postpone, or Cancel Options in 2025",
        "description": "Comprehensive guide breaking down the last-minute legal maneuvers available to cancel an auction, including clearing arrears or finding an independent buyer.",
        "image": "https://www.credsettle.com/images/stop-bank-auction.jpg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle Legal Defense Wing"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": "2025-03-07",
        "dateModified": "2026-03-07"
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
                "name": "Loan Auction Notice Options",
                "item": "https://www.credsettle.com/loan-auction-notice-stop-postpone-cancel-options"
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
        <div className="bg-white min-h-screen">
            <Navbar />
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
            <LoanAuctionNoticeClient />
            <Footer />
        </div>
    );
}
