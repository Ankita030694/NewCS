import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PersonalLoanSettlementVsBankruptcyClient from './PersonalLoanSettlementVsBankruptcyClient';

export const metadata: Metadata = {
    title: "Personal Loan Settlement vs Bankruptcy in India (2026)",
    description: "Struggling with unmanageable debt? Understand the critical differences between negotiating a personal loan settlement and declaring bankruptcy in India.",
    keywords: [
        "Personal loan settlement vs bankruptcy",
        "Declaring insolvency in India",
        "Alternatives to bankruptcy",
        "Negotiate settlement instead of bankruptcy",
        "Debt relief options India 2026",
        "Avoid bankruptcy in India",
        "Personal loan debt settlement"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/personal-loan-settlement-vs-bankruptcy',
    },
};

export default function PersonalLoanSettlementVsBankruptcyPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Personal Loan Settlement vs Bankruptcy in India (2026)",
        "description": "Struggling with unmanageable debt? Understand the critical differences between negotiating a personal loan settlement and declaring bankruptcy in India.",
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
        "datePublished": "2026-08-12",
        "dateModified": "2026-08-12"
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
                "name": "Personal Loan Settlement vs Bankruptcy",
                "item": "https://www.credsettle.com/personal-loan-settlement-vs-bankruptcy"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
                <Script
                    id="article-schema-settlement-vs-bankruptcy"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Script
                    id="breadcrumb-schema-settlement-vs-bankruptcy"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
                />
                <PersonalLoanSettlementVsBankruptcyClient />
            </div>
            <Footer />
        </div>
    );
}
