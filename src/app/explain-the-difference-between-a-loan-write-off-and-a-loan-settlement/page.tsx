import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WriteOffVsSettlementClient from './WriteOffVsSettlementClient';

export const metadata: Metadata = {
    title: 'Loan Write-Off vs. Loan Settlement | CredSettle',
    description: 'Understand the critical differences between a loan write-off and a loan settlement. Learn about CIBIL impact, tax implications, and legal consequences of both debt resolution methods.',
    alternates: {
        canonical: 'https://www.credsettle.com/explain-the-difference-between-a-loan-write-off-and-a-loan-settlement',
    },
};

export default function WriteOffVsSettlementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Explain the Difference Between a Loan Write-off and a Loan Settlement: A 2025 Technical Guide",
        "description": "An exhaustive analysis for Indian borrowers explaining why a write-off is an internal bank action whereas a settlement is a negotiated compromise, and how both affect your long-term credit health.",
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
                "name": "Write-off vs Settlement",
                "item": "https://www.credsettle.com/explain-the-difference-between-a-loan-write-off-and-a-loan-settlement"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-writeoff"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-writeoff"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <WriteOffVsSettlementClient />
                        </div>
            <Footer />
        </div>
    );
}
