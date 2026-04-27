import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsumerProtectionLawsClient from './ConsumerProtectionLawsClient';

export const metadata: Metadata = {
    title: "Consumer Protection Laws for Debt Settlement India",
    description: "Learn about your legal rights under the Consumer Protection Act 2019 and RBI 2025 guidelines for debt settlement. Protect yourself from harassment and unfair bank practices.",
    keywords: [
        "consumer protection laws debt settlement india",
        "rights against recovery agents RBI 2025",
        "Consumer Protection Act 2019 debt relief",
        "legal rights of loan defaulters in india",
        "harassment by bank recovery agents law",
        "RBI guidelines for debt settlement 2025",
        "banking ombudsman complaint for harassment",
        "debt settlement consumer rights"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/what-are-the-consumer-protection-laws-related-to-debt-settlement-in-india',
    },
};

export default function ConsumerProtectionLawsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What are the Consumer Protection Laws Related to Debt Settlement in India? (2025 Update)",
        "description": "An exhaustive analysis of consumer rights and legal protections for borrowers undergoing debt settlement in India, covering RBI rules and the Consumer Protection Act.",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle Legal Team"
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
                "name": "Consumer Protection Laws for Debt Settlement",
                "item": "https://www.credsettle.com/what-are-the-consumer-protection-laws-related-to-debt-settlement-in-india"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-consumer-laws"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-consumer-laws"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <ConsumerProtectionLawsClient />
            <Footer />
        </div>
    );
}
