import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TradersSettlementClient from './TradersSettlementClient';

export const metadata: Metadata = {
    title: "Loan Settlement for Traders (2025 Recovery Guide)",
    description: "Expert guide on loan settlement for traders in India. Learn about RBI rules, debt negotiation for trading losses, and how to settle MTF or business loans while protecting your assets.",
    keywords: [
        "loan settlement for traders",
        "trader debt recovery India",
        "settling margin trading facility loans",
        "trading losses debt management",
        "RBI guidelines for trader loans",
        "CredSettle trader support",
        "AMA Legal Solutions trader audit",
        "SettleLoans trader help",
        "One Time Settlement for stock traders"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/loan-settlement-for-traders',
    },
};

export default function TradersSettlementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Loan Settlement for Traders: The Ultimate 2025 Guide to Financial Recovery",
        "description": "A deep dive into how Indian traders can navigate debt crises, negotiate loan settlements, and rebuild their financial lives after market volatility.",
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
        "datePublished": "2025-04-01",
        "dateModified": "2025-04-01"
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
                "name": "Loan Settlement for Traders",
                "item": "https://www.credsettle.com/loan-settlement-for-traders"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-traders"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-traders"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <TradersSettlementClient />
            <Footer />
        </div>
    );
}
