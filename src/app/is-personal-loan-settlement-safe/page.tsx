import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IsPersonalLoanSettlementSafeClient from './IsPersonalLoanSettlementSafeClient';

export const metadata: Metadata = {
    title: "Is Personal Loan Settlement Safe and Legal in India?",
    description: "Is it safe to settle a personal loan? Understand the RBI guidelines, legal framework, and how to safely and legally negotiate a debt settlement with your bank.",
    keywords: [
        "is personal loan settlement safe",
        "are loan settlement companies legitimate",
        "safe way to settle personal loan",
        "RBI guidelines for personal loan settlement",
        "legal framework for debt settlement in India",
        "how to negotiate personal loan settlement safely",
        "personal loan default safety measures"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/is-personal-loan-settlement-safe',
    },
};

export default function IsPersonalLoanSettlementSafePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Is Personal Loan Settlement Safe and Legal in India?",
        "description": "Understand the RBI guidelines, legal framework, and how to safely and legally negotiate a debt settlement with your bank.",
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
                "name": "Is Personal Loan Settlement Safe",
                "item": "https://www.credsettle.com/is-personal-loan-settlement-safe"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
                <Script
                    id="article-schema-safe-settlement"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Script
                    id="breadcrumb-schema-safe-settlement"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
                />
                <IsPersonalLoanSettlementSafeClient />
            </div>
            <Footer />
        </div>
    );
}
