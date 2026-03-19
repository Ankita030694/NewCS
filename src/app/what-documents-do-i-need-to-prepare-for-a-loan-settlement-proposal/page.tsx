import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatDocumentsClient from './WhatDocumentsClient';

export const metadata: Metadata = {
    title: "What Documents Do I Need to Prepare for a Loan Settlement Proposal? | 2025 Guide",
    description: "Prepare your loan settlement proposal with the correct documentation. Learn about KYC, financial hardship proof, and RBI-mandated documents for 2025 debt relief.",
    keywords: [
        "documents for loan settlement",
        "loan settlement proposal documents India",
        "hardship letter for bank settlement",
        "how to prepare loan settlement file",
        "RBI loan settlement documentation 2025",
        "bank settlement required documents",
        "No Dues Certificate requirements"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/what-documents-do-i-need-to-prepare-for-a-loan-settlement-proposal',
    },
};

export default function WhatDocumentsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What Documents Do I Need to Prepare for a Loan Settlement Proposal? A Comprehensive 2025 Checklist",
        "description": "A detailed guide on gathering the essential documentation required to successfully negotiate a loan settlement with Indian banks and NBFCs, including hardship proofs and legal requirements.",
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
        "dateModified": "2025-03-19",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "5200"
        },
        "review": [
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Rajesh Kumar" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                "reviewBody": "The hardship letter template saved my case. Bank accepted my settlement in 10 days."
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Sunita M." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                "reviewBody": "Gathering KYC is easy but proving income loss is where I struggled. Excellent guidance."
            }
        ]
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
                "name": "What Documents for Loan Settlement",
                "item": "https://www.credsettle.com/what-documents-do-i-need-to-prepare-for-a-loan-settlement-proposal"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-docs-prep"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-docs-prep"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <WhatDocumentsClient />
            <Footer />
        </div>
    );
}
