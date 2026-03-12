import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatPercentageBanksAcceptClient from './WhatPercentageBanksAcceptClient';

export const metadata: Metadata = {
    title: "What Percentage Do Banks Accept in Loan Settlement? 2025 Calculator",
    description: "Discover the exact percentage banks accept for loan settlement in India (2025). Learn about OTS calculation for personal loans, credit cards, and legal waiver limits.",
    keywords: [
        "what percentage do banks accept in loan settlement",
        "loan settlement percentage India 2025",
        "personal loan settlement calculation",
        "credit card settlement waiver percentage",
        "RBI ots guidelines 2025",
        "how much bank discount in settlement",
        "settling loan at lower percentage",
        "one time settlement calculation"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/what-percentage-do-banks-accept-in-loan-settlement',
    },
};

export default function WhatPercentageBanksAcceptPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What Percentage Do Banks Accept in Loan Settlement? The 2025 Decoding Guide",
        "description": "A comprehensive analysis of how banks calculate settlement offers, typical waiver percentages, and the mathematical logic behind One Time Settlements (OTS) in India.",
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
        "datePublished": "2025-03-12",
        "dateModified": "2025-03-12"
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
                "name": "Loan Settlement Percentage Guide",
                "item": "https://www.credsettle.com/what-percentage-do-banks-accept-in-loan-settlement"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-settlement-percent"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-settlement-percent"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <WhatPercentageBanksAcceptClient />
            <Footer />
        </div>
    );
}
