import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EconomicDownturnSettlementClient from './EconomicDownturnSettlementClient';

export const metadata: Metadata = {
    title: "Loan Settlement: Economic Downturn Guide (2026)",
    description: "Are you struggling with debt during an economic downturn? Learn how loan settlement can be a strategic exit for borrowers in financial distress. Explore 2026 RBI rules, legal rights, and expert negotiation tactics to reclaim your financial freedom.",
    keywords: [
        "loan settlement for borrowers facing economic downturn",
        "debt relief during recession India",
        "loan repayment strategies in downturn",
        "financial hardship loan settlement",
        "RBI guidelines for distressed borrowers 2026",
        "impact of job loss on loan repayment",
        "how to negotiate loan settlement in crisis",
        "legal rights for loan default in India",
        "debt restructuring vs settlement for borrowers",
        "amalegalsolutions loan help",
        "credsettle debt resolution"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/loan-settlement-for-borrowers-facing-economic-downturn',
    },
};

export default function EconomicDownturnSettlementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Loan Settlement for Borrowers Facing Economic Downturn: A 2026 Survival Strategy",
        "description": "An exhaustive guide for Indian borrowers navigating debt crises during severe economic contractions, focusing on legal protections, negotiation tactics, and long-term recovery.",
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
        "datePublished": "2026-03-20",
        "dateModified": "2026-03-28"
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
                "name": "Loan Settlement for Borrowers Facing Economic Downturn",
                "item": "https://www.credsettle.com/loan-settlement-for-borrowers-facing-economic-downturn"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-downturn"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-downturn"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <EconomicDownturnSettlementClient />
            <Footer />
        </div>
    );
}
