import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RBIRecoveryGuidelinesClient from './RBIRecoveryGuidelinesClient';

export const metadata: Metadata = {
    title: "RBI New Recovery Guidelines July 2026",
    description: "Explore the comprehensive RBI new recovery guidelines effective July 2026. Understand the new rules for debt recovery, borrower protection, and agent conduct in India.",
    keywords: [
        "RBI new recovery guidelines July 2026",
        "RBI recovery agent rules 2026",
        "loan recovery guidelines India 2026",
        "new RBI rules for debt collection",
        "borrower rights against recovery agents 2026",
        "RBI draft guidelines loan recovery",
        "fair practices code for lenders 2026",
        "stop harassment from recovery agents"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/rbi-new-recovery-guidelines-july-2026',
    },
};

export default function RBIRecoveryGuidelinesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "RBI New Recovery Guidelines July 2026: A Complete Guide to Enhanced Borrower Protection",
        "description": "An exhaustive analysis of the Reserve Bank of India’s new directions for loan recovery conduct, slated to reform the banking landscape from July 1, 2026.",
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
        "datePublished": "2026-02-12",
        "dateModified": "2026-03-10"
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
                "name": "RBI New Recovery Guidelines July 2026",
                "item": "https://www.credsettle.com/rbi-new-recovery-guidelines-july-2026"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-rbi-guidelines"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-rbi-guidelines"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <RBIRecoveryGuidelinesClient />
                        </div>
            <Footer />
        </div>
    );
}
