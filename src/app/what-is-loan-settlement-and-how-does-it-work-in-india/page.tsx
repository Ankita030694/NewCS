import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatIsLoanSettlementClient from './WhatIsLoanSettlementClient';

export const metadata: Metadata = {
    title: "What is Loan Settlement & How Does it Work in India?",
    description: "Comprehensive guide on loan settlement in India. Learn the step-by-step process, RBI 2025 guidelines, impact on credit score, and how to settle your debt legally without harassment.",
    keywords: [
        "what is loan settlement",
        "how loan settlement works in India",
        "loan settlement process India",
        "RBI loan settlement guidelines 2025",
        "loan settlement credit score impact",
        "debt settlement India",
        "personal loan settlement process",
        "credit card settlement India"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/what-is-loan-settlement-and-how-does-it-work-in-india',
    },
};

export default function WhatIsLoanSettlementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What is Loan Settlement and How Does it Work in India? - Comprehensive 2025 Guide",
        "description": "A detailed guide on the loan settlement process in India, including RBI rules, legal frameworks, and credit score impacts.",
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
        "datePublished": "2025-01-15",
        "dateModified": "2025-02-28"
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
                "name": "What is Loan Settlement",
                "item": "https://www.credsettle.com/what-is-loan-settlement-and-how-does-it-work-in-india"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <WhatIsLoanSettlementClient />
            <Footer />
        </div>
    );
}
