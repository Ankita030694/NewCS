import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmallDebtsClient from './SmallDebtsClient';

export const metadata: Metadata = {
    title: "Alternatives to Debt Settlement for Small Debts India 2025",
    description: "Explore effective alternatives to debt settlement for small debts in India. Learn about Debt Management Plans (DMPs), Snowball vs Avalanche, and loan restructuring.",
    keywords: [
        "alternatives to debt settlement for small debts",
        "solutions to debt settlement for small loans",
        "debt snowball vs avalanche India",
        "loan restructuring for small personal loans",
        "debt consolidation for credit card bills India",
        "debt management plans for small debts",
        "credit counseling India for small borrowers",
        "how to clear small debts fast"
    ],
    authors: [{ name: "CredSettle Financial Advisory Team" }],
    alternates: {
        canonical: 'https://www.credsettle.com/find-alternatives-solutions-to-debt-settlement-for-small-debts',
    },
};

export default function SmallDebtsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Small Debt Relief: Alternatives and Solutions Beyond Settlement",
        "description": "A 5000+ word comprehensive guide for Indian borrowers looking to resolve small debts (below ₹1 Lakh) through non-settlement methods.",
        "image": "https://www.credsettle.com/images/small-debt-alternatives.jpg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/logo.png"
            }
        },
        "datePublished": "2025-02-20",
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
                "name": "Small Debt Alternatives Guide",
                "item": "https://www.credsettle.com/find-alternatives-solutions-to-debt-settlement-for-small-debts"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-small-debts"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-small-debts"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <SmallDebtsClient />
            <Footer />
        </div>
    );
}
