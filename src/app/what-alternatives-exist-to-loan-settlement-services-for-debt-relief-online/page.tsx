import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DebtReliefAlternativesClient from './DebtReliefAlternativesClient';

export const metadata: Metadata = {
    title: "Debt Relief Alternatives to Loan Settlement in India (2025) | CredSettle",
    description: "Discover effective alternatives to loan settlement for debt relief in India. Explore debt consolidation, loan restructuring, credit counseling, and legal options.",
    keywords: [
        "alternatives to loan settlement India",
        "debt relief services online India",
        "debt consolidation loans India 2025",
        "loan restructuring vs settlement",
        "credit counseling services India",
        "insolvency and bankruptcy code individual India",
        "how to get out of debt without settlement",
        "personal debt management plans India"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/what-alternatives-exist-to-loan-settlement-services-for-debt-relief-online',
    },
};

export default function DebtReliefAlternativesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What Alternatives Exist to Loan Settlement Services for Debt Relief Online in India (2025)?",
        "description": "A comprehensive guide to managing overwhelming debt in India without choosing loan settlement. Learn about consolidation, restructuring, and professional mediation paths.",
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
        "datePublished": "2025-03-23",
        "dateModified": "2025-03-23"
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
                "name": "Debt Relief Alternatives",
                "item": "https://www.credsettle.com/what-alternatives-exist-to-loan-settlement-services-for-debt-relief-online"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-alternatives"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-alternatives"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <DebtReliefAlternativesClient />
            <Footer />
        </div>
    );
}
