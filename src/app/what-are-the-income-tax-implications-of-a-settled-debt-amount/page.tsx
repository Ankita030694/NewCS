import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TaxImplicationsClient from './TaxImplicationsClient';

export const metadata: Metadata = {
    title: "Income Tax Implications of a Settled Debt Amount in India | 2025 Guide",
    description: "Understand the income tax implications of loan settlement in India. Guide on Section 28(iv), Section 41(1), and Finance Act 2023 for settled debt amounts.",
    keywords: [
        "income tax implications of settled debt amount",
        "is loan settlement taxable in India",
        "tax on debt waiver India",
        "Section 28(iv) loan settlement",
        "Section 41(1) debt waiver",
        "Finance Act 2023 loan settlement",
        "income tax on settled personal loan",
        "tax implications of debt resolution"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/what-are-the-income-tax-implications-of-a-settled-debt-amount',
    },
};

export default function TaxImplicationsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Income Tax Implications of a Settled Debt Amount in India: The Definitive 2025 Guide",
        "description": "An exhaustive guide on the taxability of settled loans in India, covering recent legislative changes, Supreme Court judgements, and practical tax strategies.",
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
        "datePublished": "2025-03-10",
        "dateModified": "2025-03-19"
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
                "name": "Income Tax Implications of Settled Debt",
                "item": "https://www.credsettle.com/what-are-the-income-tax-implications-of-a-settled-debt-amount"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-tax-implications"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-tax-implications"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <TaxImplicationsClient />
            <Footer />
        </div>
    );
}
