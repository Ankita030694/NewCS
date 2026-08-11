import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PersonalLoanSettlementVsClosureClient from './PersonalLoanSettlementVsClosureClient';

export const metadata: Metadata = {
    title: "Loan Settlement vs Closure: Differences & CIBIL Impact",
    description: "Understand the exact difference between loan settlement vs loan closure. Learn how to convert settled to closed CIBIL status and protect your future credit.",
    keywords: [
        "loan settlement vs loan closure",
        "difference between settled and closed account",
        "convert settled to closed CIBIL",
        "personal loan settlement vs closure",
        "CIBIL settled status removal"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/personal-loan-settlement-vs-closure',
    },
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Personal Loan Settlement vs. Closure: Understanding the Legal Difference",
        "description": "A comprehensive guide on loan settlement vs loan closure, explaining the difference between settled and closed account statuses and how to convert settled to closed CIBIL.",
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
                "name": "Loan Settlement vs Closure",
                "item": "https://www.credsettle.com/personal-loan-settlement-vs-closure"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
                <Script
                    id="article-schema-settlement-vs-closure"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Script
                    id="breadcrumb-schema-settlement-vs-closure"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
                />
                <PersonalLoanSettlementVsClosureClient />
            </div>
            <Footer />
        </div>
    );
}
