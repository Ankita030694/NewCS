import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MSMESettlementClient from './MSMESettlementClient';

export const metadata: Metadata = {
    title: "Loan Settlement for MSME Owners: The Definitive 2025 Guide",
    description: "Navigate MSME loan defaults with our comprehensive guide for Indian business owners. Learn about the MSMED Act, RBI rehabilitation frameworks, and strategic settlement tactics.",
    keywords: [
        "loan settlement for MSME owners",
        "MSME debt relief India",
        "MSMED Act loan protection",
        "PPIRP for MSMEs",
        "MSME Samadhaan leverage",
        "RBI MSME NPA guidelines",
        "CredSettle MSME debt",
        "AMA Legal Solutions MSME audit",
        "SettleLoans MSME relief"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/loan-settlement-for-msme-owners',
    },
};

export default function MSMESettlementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Loan Settlement for MSME Owners: Protecting Your Business and Assets",
        "description": "An exhaustive resource for Micro, Small, and Medium Enterprise owners in India facing financial distress, covering legal frameworks and tactical settlement strategies.",
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
        "datePublished": "2025-03-28",
        "dateModified": "2025-03-28"
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
                "name": "Loan Settlement for MSME Owners",
                "item": "https://www.credsettle.com/loan-settlement-for-msme-owners"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-msme-settlement"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-msme-settlement"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <MSMESettlementClient />
            <Footer />
        </div>
    );
}
