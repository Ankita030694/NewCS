import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PersonalLoanSettlementCalculatorClient from './PersonalLoanSettlementCalculatorClient';

export const metadata: Metadata = {
    title: "Personal Loan Settlement Calculator 2025 | Estimate Amount in India",
    description: "Use our personal loan settlement calculator to estimate your loan settlement amount in India. Learn exactly how much to pay based on Principal, DPD, and hardship.",
    keywords: [
        "personal loan settlement calculator",
        "how much to pay for loan settlement",
        "estimate loan settlement amount India",
        "loan settlement calculation",
        "settle personal loan amount calculator",
        "bounce charges and penal interest settlement",
        "DPD settlement framework India"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/personal-loan-settlement-calculator',
    },
};

export default function PersonalLoanSettlementCalculatorPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Personal Loan Settlement Calculator: The Complete Framework to Estimate Your Payout",
        "description": "A comprehensive guide and calculator framework to help Indian borrowers understand exactly how much to pay for personal loan settlement based on Days Past Due (DPD) and hardship severity.",
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
        "datePublished": "2025-03-20",
        "dateModified": "2025-03-20"
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
                "name": "Personal Loan Settlement Calculator",
                "item": "https://www.credsettle.com/personal-loan-settlement-calculator"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <script
                id="article-schema-pl-calculator"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                id="breadcrumb-schema-pl-calculator"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <PersonalLoanSettlementCalculatorClient />
            <Footer />
        </div>
    );
}
