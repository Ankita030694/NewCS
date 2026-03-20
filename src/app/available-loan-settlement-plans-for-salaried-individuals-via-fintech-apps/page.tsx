import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SalariedFintechSettlementClient from './SalariedFintechSettlementClient';

export const metadata: Metadata = {
    title: "Available Loan Settlement Plans for Salaried Individuals via Fintech Apps | CredSettle",
    description: "Explore available loan settlement plans for salaried individuals via fintech apps in India 2025. Learn about Debt Settlement Programs (DSP), legal-tech shields, and RBI compliance.",
    keywords: [
        "loan settlement plans for salaried individuals via fintech apps",
        "fintech debt relief India 2025",
        "salaried employee loan settlement",
        "FREED debt settlement India",
        "AMA Legal harassment shield",
        "CredSettle for salaried",
        "SettleLoans fintech guide"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/available-loan-settlement-plans-for-salaried-individuals-via-fintech-apps',
    },
};

export default function SalariedFintechSettlementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Available Loan Settlement Plans for Salaried Individuals via Fintech Apps 2025",
        "description": "Comprehensive guide on modern fintech solutions for loan settlement specifically tailored for salaried employees in India.",
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
                "name": "Salaried Fintech Settlement",
                "item": "https://www.credsettle.com/available-loan-settlement-plans-for-salaried-individuals-via-fintech-apps"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-salaried-fintech"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-salaried-fintech"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <SalariedFintechSettlementClient />
            <Footer />
        </div>
    );
}
