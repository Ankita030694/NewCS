import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PersonalLoanSettlementCostClient from './PersonalLoanSettlementCostClient';

export const metadata: Metadata = {
    title: "Personal Loan Settlement Company Fees & Costs in India",
    description: "Understand the true cost of debt settlement in India. Learn how much loan settlement companies charge, how to avoid upfront fee scams, and how legitimate legal fees work.",
    keywords: [
        "personal loan settlement company fees",
        "how much do loan settlement companies charge",
        "cost of debt settlement in India",
        "loan settlement lawyer fees",
        "upfront fee scams India",
        "debt settlement pricing"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/personal-loan-settlement-cost',
    },
};

export default function PersonalLoanSettlementCostPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Personal Loan Settlement Company Fees: Avoiding Upfront Scams in India",
        "description": "A comprehensive guide on the true cost of debt settlement in India, explaining how legitimate companies charge and how to spot fraudulent upfront fee traps.",
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
                "name": "Personal Loan Settlement Cost",
                "item": "https://www.credsettle.com/personal-loan-settlement-cost"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-pl-cost"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-pl-cost"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <PersonalLoanSettlementCostClient />
                        </div>
            <Footer />
        </div>
    );
}
