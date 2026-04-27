import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
import DebtAlternativesClient from './DebtAlternativesClient';

export const metadata: Metadata = {
    title: 'Alternatives to Loan Settlement (2025 Guide)',
    description: 'Explore consolidation, restructuring, credit counseling, and insolvency as alternatives to loan settlement in India. 5000+ words expert financial analysis.',
    alternates: {
        canonical: 'https://www.credsettle.com/what-alternatives-exist-to-loan-settlement-for-managing-overwhelming-debt',
    },
};

export default function DebtAlternativesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What Alternatives Exist to Loan Settlement for Managing Overwhelming Debt?",
        "description": "An in-depth analysis of debt consolidation, restructuring, credit counseling, and insolvency as viable alternatives to loan settlement in India.",
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
        "datePublished": "2025-03-20",
        "dateModified": "2025-03-20"
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
                "name": "Alternatives to Loan Settlement",
                "item": "https://www.credsettle.com/what-alternatives-exist-to-loan-settlement-for-managing-overwhelming-debt"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-debt-alternatives"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-debt-alternatives"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <DebtAlternativesClient />
            <Footer />
        </div>
    );
}
