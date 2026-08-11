import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SettlementVsConsolidationClient from './SettlementVsConsolidationClient';

export const metadata: Metadata = {
    title: "Debt Settlement vs Debt Consolidation India (2025)",
    description: "Compare Debt Settlement vs Debt Consolidation in India for 2025. Learn the pros, cons, CIBIL impact, and choose the best path to becoming debt-free.",
    keywords: [
        "debt settlement vs debt consolidation india",
        "differences between debt settlement and consolidation",
        "is debt consolidation better than settlement",
        "CIBIL impact of debt consolidation vs settlement",
        "loan consolidation india 2025",
        "debt relief options for indian borrowers",
        "choosing between settlement and consolidation",
        "how to consolidate loans in india"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/debt-settlement-vs-debt-consolidation',
    },
};

export default function SettlementVsConsolidationPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Debt Settlement vs Debt Consolidation: Which is Better for Indian Borrowers in 2025?",
        "description": "A deep dive comparison into the two most popular debt relief strategies in India, helping borrowers weigh the benefits of principal reduction against credit score preservation.",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle Financial Research"
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
                "name": "Debt Settlement vs Debt Consolidation",
                "item": "https://www.credsettle.com/debt-settlement-vs-debt-consolidation"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-settlement-vs-consolidation"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-settlement-vs-consolidation"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <SettlementVsConsolidationClient />
                        </div>
            <Footer />
        </div>
    );
}
