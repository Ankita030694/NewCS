import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DebtSettlementMultipleCreditorsClient from './DebtSettlementMultipleCreditorsClient';

const canonicalUrl = 'https://www.credsettle.com/debt-settlement-services-that-work-with-multiple-creditors';

export const metadata: Metadata = {
    title: "Debt Settlement for Multiple Creditors | 2025 Guide",
    description: "Learn how to manage and settle debts across multiple banks and NBFCs. Explore multi-creditor debt relief strategies, consolidation vs settlement, and legal rights in India.",
    keywords: [
        "debt settlement services that work with multiple creditors",
        "settling multiple bank loans",
        "debt consolidation vs settlement India",
        "multi creditor debt relief",
        "managing multiple EMIs in India",
        "debt management plans for multiple creditors",
        "bank loan settlement experts"
    ],
    alternates: {
        canonical: canonicalUrl,
    },
};

export default function DebtSettlementMultipleCreditorsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Debt Settlement Services That Work With Multiple Creditors: A 2025 Strategic Roadmap",
        "description": "An exhaustive guide for borrowers dealing with multiple lenders. Learn how to synchronize settlements, prioritize creditors, and reclaim financial sanity.",
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
        "datePublished": "2025-03-16",
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
                "name": "Debt Settlement Services with Multiple Creditors",
                "item": canonicalUrl
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-multiple-creditors"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-multiple-creditors"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <DebtSettlementMultipleCreditorsClient />
            <Footer />
        </div>
    );
}
