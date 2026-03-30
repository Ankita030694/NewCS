import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TimeframeClient from './TimeframeClient';

export const metadata: Metadata = {
    title: "Average Timeframe for Loan Settlement Process in India 2025 | CredSettle",
    description: "How long does loan settlement take? Discover the average timeframe, key stages from default to 'No Dues Certificate', and factors affecting the duration in 2025.",
    keywords: [
        "average timeframe for loan settlement",
        "how long does it take to settle a loan",
        "loan settlement process timeline India",
        "OTS letter timeframe",
        "No Dues Certificate duration",
        "debt settlement timeline 2025",
        "CIBIL update timeframe after settlement",
        "personal loan settlement duration"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/what-is-the-average-timeframe-for-completing-a-loan-settlement-process',
    },
};

export default function LoanSettlementTimeframePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Average Timeframe for Completing a Loan Settlement Process in India: A 2025 Guide",
        "description": "An exhaustive guide on the timelines involved in loan settlement, from initial default and NPA status to negotiation, payment, and receiving the final No Dues Certificate.",
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
                "name": "Loan Settlement Timeframe",
                "item": "https://www.credsettle.com/what-is-the-average-timeframe-for-completing-a-loan-settlement-process"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-timeframe"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-timeframe"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <TimeframeClient />
            <Footer />
        </div>
    );
}
