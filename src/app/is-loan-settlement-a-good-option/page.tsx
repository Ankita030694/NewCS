import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanSettlementGoodOptionClient from './LoanSettlementGoodOptionClient';

export const metadata: Metadata = {
    title: "Is Loan Settlement a Good Option? Pros, Cons & Rules",
    description: "Discover if loan settlement is a good option for your financial situation. Explore the pros, cons, impact on credit score, and 2025 RBI guidelines for debt relief in India.",
    keywords: [
        "is loan settlement a good option",
        "loan settlement pros and cons India",
        "benefits of loan settlement",
        "disadvantages of loan settlement",
        "loan settlement vs restructuring",
        "RBI loan settlement rules 2025",
        "CIBIL score impact of settlement",
        "is it worth settling a loan"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/is-loan-settlement-a-good-option',
    },
};

export default function LoanSettlementGoodOptionPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Is Loan Settlement a Good Option? A Comprehensive 2025 Guide on Pros and Cons",
        "description": "An in-depth analysis of whether loan settlement is a viable path for debt relief in India, weighing its immediate benefits against long-term credit consequences.",
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
        "datePublished": "2025-02-10",
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
                "name": "Is Loan Settlement a Good Option",
                "item": "https://www.credsettle.com/is-loan-settlement-a-good-option"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-good-option"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-good-option"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <LoanSettlementGoodOptionClient />
                        </div>
            <Footer />
        </div>
    );
}
