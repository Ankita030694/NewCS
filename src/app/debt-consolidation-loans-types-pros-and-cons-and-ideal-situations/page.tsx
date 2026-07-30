import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DebtConsolidationLoansClient from './DebtConsolidationLoansClient';

export const metadata: Metadata = {
    title: "Debt Consolidation Loans: Types, Pros & Cons, and Ideal Situations",
    description: "Understand the types of debt consolidation loans available. Discover the pros and cons of debt consolidation and when a personal loan for debt consolidation is the right choice.",
    keywords: [
        "types of debt consolidation loans",
        "pros and cons of debt consolidation",
        "personal loan for debt consolidation",
        "debt consolidation vs balance transfer",
        "loan against property for debt",
        "best debt consolidation options"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/debt-consolidation-loans-types-pros-and-cons-and-ideal-situations',
    },
};

export default function DebtConsolidationLoansPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Debt Consolidation Loans: Types, Pros and Cons, and Ideal Situations",
        "description": "An objective breakdown of different instruments used for debt consolidation, comparing interest rates, risks, and secured vs unsecured options.",
        "image": "https://www.credsettle.com/images/debt-consolidation.jpg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle Consumer Protection Wing"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": "2026-07-30",
        "dateModified": "2026-07-30"
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
                "name": "Debt Consolidation Loans",
                "item": "https://www.credsettle.com/debt-consolidation-loans-types-pros-and-cons-and-ideal-situations"
            }
        ]
    };

    const organizationLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "CredSettle",
        "url": "https://www.credsettle.com",
        "logo": "https://www.credsettle.com/logo.png",
        "sameAs": [
            "https://www.facebook.com/credsettle",
            "https://www.twitter.com/credsettle",
            "https://www.linkedin.com/company/credsettle"
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-debt"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-debt"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-debt"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <DebtConsolidationLoansClient />
            <Footer />
        </div>
    );
}
