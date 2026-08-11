import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhenToChooseSettlementClient from './WhenToChooseSettlementClient';

export const metadata: Metadata = {
    title: "When to Choose Settlement vs Repayment?",
    description: "Evaluate when to settle a loan vs full repayment. Learn about RBI 2025 guidelines, debt traps, and the precise mathematical points for choosing settlement in India.",
    keywords: [
        "when should you choose loan settlement instead of repayment",
        "loan settlement vs repayment India",
        "debt trap solutions India",
        "when is loan settlement better than repayment",
        "RBI 2025 guidelines on loan settlement",
        "choosing between loan closure and settlement",
        "financial impact of loan settlement",
        "loan settlement decision guide"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/when-should-you-choose-loan-settlement-instead-of-repayment',
    },
};

export default function WhenToChooseSettlementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "When Should You Choose Loan Settlement Instead of Repayment? Decoding the Debt Dilemma in 2025",
        "description": "A deep-dive analysis into the critical decision points between full loan repayment and settlement, considering long-term financial health and credit eligibility.",
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
                "name": "When to Choose Settlement Instead of Repayment",
                "item": "https://www.credsettle.com/when-should-you-choose-loan-settlement-instead-of-repayment"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-settle-vs-repay"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-settle-vs-repay"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <WhenToChooseSettlementClient />
                        </div>
            <Footer />
        </div>
    );
}
