import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OnlinePortalInitiationClient from './OnlinePortalInitiationClient';

export const metadata: Metadata = {
    title: "Initiate Loan Settlement via Bank Online Portal (2025)",
    description: "Step-by-step guide on initiating a loan settlement request through your bank's online portal. Learn how to navigate net banking, submit hardship letters, and track requests in 2025.",
    keywords: [
        "initiate loan settlement online",
        "bank portal loan settlement request",
        "how to apply for OTS online",
        "net banking debt settlement",
        "online loan settlement process India",
        "submit hardship letter online",
        "SBI online loan settlement",
        "HDFC loan settlement portal"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/how-to-initiate-a-loan-settlement-request-through-a-banks-online-portal',
    },
};

export default function OnlinePortalSettlementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Initiate a Loan Settlement Request Through a Bank's Online Portal: A 2025 Step-by-Step Guide",
        "description": "Unlock the power of digital banking to resolve your debts. This guide provides a comprehensive walkthrough on using online portals to initiate, negotiate, and finalize loan settlements in India.",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": "2025-03-21",
        "dateModified": "2025-03-21"
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
                "name": "Online Portal Initiation",
                "item": "https://www.credsettle.com/how-to-initiate-a-loan-settlement-request-through-a-banks-online-portal"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-portal"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-portal"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <OnlinePortalInitiationClient />
                        </div>
            <Footer />
        </div>
    );
}
