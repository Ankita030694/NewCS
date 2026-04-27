import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StartupSettlementClient from './StartupSettlementClient';

export const metadata: Metadata = {
    title: "Loan Settlement for Startup Founders (2025 Guide)",
    description: "Discover the detailed legalities and processes of loan settlement for Indian startup founders. Understand personal guarantees, RBI guidelines, and IBC implications to achieve debt freedom.",
    keywords: [
        "loan settlement for startup founders",
        "startup debt settlement India",
        "personal guarantee risks for founders",
        "RBI compromise settlement 2025",
        "CredSettle startup debt",
        "AMA Legal Solutions startup audit",
        "SettleLoans business debt relief",
        "Indian startup loan legal advisory"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/loan-settlement-for-startup-founders',
    },
};

export default function StartupSettlementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Loan Settlement for Startup Founders: Navigating Personal Liability and Growth",
        "description": "An exhaustive guide for Indian entrepreneurs facing business debt, covering legal rights, RBI frameworks, and tactical negotiation strategies to protect personal assets.",
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
        "datePublished": "2025-03-25",
        "dateModified": "2025-03-25"
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
                "name": "Loan Settlement for Startup Founders",
                "item": "https://www.credsettle.com/loan-settlement-for-startup-founders"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-startup-settlement"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-startup-settlement"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <StartupSettlementClient />
            <Footer />
        </div>
    );
}
