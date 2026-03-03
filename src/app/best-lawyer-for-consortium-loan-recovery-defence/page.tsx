import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsortiumLoanDefenceClient from './ConsortiumLoanDefenceClient';

export const metadata: Metadata = {
    title: "Best Lawyer for Consortium Loan Recovery Defence in India 2025 | CredSettle",
    description: "Facing recovery action from a consortium of banks? Get specialized legal defence for consortium loan recovery, inter-creditor agreement (ICA) disputes, and DRT cases in India.",
    keywords: [
        "best lawyer for consortium loan recovery defence",
        "consortium loan recovery lawyer India",
        "inter-creditor agreement dispute lawyer",
        "consortium loan legal help India",
        "ICA framework lawyer",
        "consortium loan DRT defence",
        "Joint Lenders Forum dispute lawyer",
        "multiple banking arrangement recovery lawyer"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-consortium-loan-recovery-defence',
    },
};

export default function ConsortiumLoanDefencePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyer for Consortium Loan Recovery Defence: A Complete 2025 Guide",
        "description": "Expert guide on defending against recovery actions from a consortium of lenders in India. Learn about inter-creditor agreements, lead bank roles, and legal strategies for consortium loan disputes in the DRT.",
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
        "datePublished": "2025-03-01",
        "dateModified": "2026-03-02"
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
                "name": "Consortium Loan Recovery Defence",
                "item": "https://www.credsettle.com/best-lawyer-for-consortium-loan-recovery-defence"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-consortium-defence"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-consortium-defence"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <ConsortiumLoanDefenceClient />
            <Footer />
        </div>
    );
}
