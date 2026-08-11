import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SettlementVsBankruptcyClient from './SettlementVsBankruptcyClient';

export const metadata: Metadata = {
    title: "Debt Settlement vs Bankruptcy in India (2025)",
    description: "Compare debt settlement and bankruptcy under the 2025 Indian legal framework. Explore IBC 2016 implications, credit impact, legal processes, and find the right path for debt relief.",
    keywords: [
        "debt settlement vs bankruptcy India",
        "individual insolvency IBC India 2025",
        "benefits of debt settlement over bankruptcy",
        "bankruptcy process for individuals in India",
        "personal insolvency DRT India",
        "compromise settlement vs bankruptcy",
        "CIBIL impact of bankruptcy vs settlement",
        "legal debt relief options India"
    ],
    authors: [{ name: "CredSettle Legal Team" }],
    alternates: {
        canonical: 'https://www.credsettle.com/debt-settlement-vs-bankruptcy',
    },
};

export default function SettlementVsBankruptcyPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Debt Settlement vs Bankruptcy in India: The 2025 Legal Battleground",
        "description": "An in-depth legal and financial comparison between debt settlement and formal bankruptcy proceedings in India, updated for the 2025 Insolvency and Bankruptcy Code amendments.",
        "image": "https://www.credsettle.com/images/debt-settlement-vs-bankruptcy.jpg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/logo.png"
            }
        },
        "datePublished": "2025-01-25",
        "dateModified": "2025-03-16"
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
                "name": "Settlement vs Bankruptcy Guide 2025",
                "item": "https://www.credsettle.com/debt-settlement-vs-bankruptcy"
            }
        ]
    };

    const organizationLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "CredSettle",
        "url": "https://www.credsettle.com",
        "logo": "https://www.credsettle.com/logo.png"
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-vs-bankruptcy"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-vs-bankruptcy"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-vs-bankruptcy"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <SettlementVsBankruptcyClient />
                        </div>
            <Footer />
        </div>
    );
}
