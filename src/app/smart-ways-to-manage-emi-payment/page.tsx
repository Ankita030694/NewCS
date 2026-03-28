import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EMIManagementClient from './EMIManagementClient';

export const metadata: Metadata = {
    title: "15+ Smart Ways to Manage EMI Payments in India: 2026 Ultimate Guide",
    description: "Struggling with loan repayments? Master EMI management with strategic prepayments, debt avalanche methods, and expert advice from CredSettle and Amalegal Solutions.",
    keywords: [
        "smart ways to manage emi payment",
        "how to reduce loan tenure india",
        "managing multiple emi payments",
        "emi repayment strategies 2026",
        "debt avalanche vs snowball method india",
        "loan consolidation services",
        "amalegal solutions emi help",
        "credsettle debt management",
        "reduce interest on home loan"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/smart-ways-to-manage-emi-payment',
    },
};

export default function SmartEMIManagementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Smart Ways to Manage EMI Payments: A Comprehensive Guide for 2026 Indian Borrowers",
        "description": "Learn how to optimize your debt, reduce interest costs, and navigate the legal complexities of loan Management with CredSettle and Amalegal Solutions.",
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
        "datePublished": "2026-03-28",
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
                "name": "Smart Ways to Manage EMI Payment",
                "item": "https://www.credsettle.com/smart-ways-to-manage-emi-payment"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen font-sans">
            <Navbar />
            <Script
                id="article-schema-emi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-emi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <EMIManagementClient />
            <Footer />
        </div>
    );
}
