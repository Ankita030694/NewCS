import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CanYouGetLoanAgainClient from './CanYouGetLoanAgainClient';

export const metadata: Metadata = {
    title: "Can You Get a Loan Again After Settling a Previous Loan? 2025 Guide",
    description: "Discover the truth about getting a new loan after settlement in India. Learn about CIBIL recovery timelines, RBI 2025 rules, and how to rebuild credit eligibility.",
    keywords: [
        "can you get a loan again after settling a previous loan",
        "loan after settlement India 2025",
        "CIBIL score after settlement",
        "how to get home loan after settlement",
        "rebuilding credit after loan settlement",
        "getting a fresh loan after settlement",
        "RBI rules for new loans after settlement",
        "loan eligibility after settlement"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/can-you-get-a-loan-again-after-settling-a-previous-loan',
    },
};

export default function CanYouGetLoanAgainPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Can You Get a Loan Again After Settling a Previous Loan? The 2025 Comprehensive Answer",
        "description": "An in-depth analysis of the credit rebuilding process in India after a loan settlement, providing a realistic timeline and strategy for future borrowing.",
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
                "name": "Can You Get a Loan Again After Settling a Previous Loan",
                "item": "https://www.credsettle.com/can-you-get-a-loan-again-after-settling-a-previous-loan"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-loan-again"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-loan-again"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <CanYouGetLoanAgainClient />
            <Footer />
        </div>
    );
}
