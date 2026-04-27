import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CompareFeesClient from './CompareFeesClient';

export const metadata: Metadata = {
    title: "Debt Settlement Fees and Success Rate Comparison",
    description: "Compare debt settlement charges, fee structures, and success rates across major Indian firms. Learn about percentage models, retainer fees, and RBI 2025 benchmarks.",
    keywords: [
        "compare debt settlement fees india",
        "debt settlement success rate 2025",
        "loan settlement company charges",
        "debt relief agency fees comparison",
        "cost of debt settlement in India",
        "settlement success probability",
        "professional debt relief costs"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/compare-debt-settlement-fees-and-success-rate',
    },
};

export default function CompareFeesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Compare Debt Settlement Fees and Success Rate in India: 2025 Comprehensive Analysis",
        "description": "An exhaustive comparison of fee structures and success probabilities for debt settlement services in the Indian market for 2025.",
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
                "name": "Compare Debt Settlement Fees and Success Rate",
                "item": "https://www.credsettle.com/compare-debt-settlement-fees-and-success-rate"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-compare-fees"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-compare-fees"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <CompareFeesClient />
            <Footer />
        </div>
    );
}
