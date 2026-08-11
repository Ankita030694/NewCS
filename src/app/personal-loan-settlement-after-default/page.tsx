import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PersonalLoanSettlementAfterDefaultClient from './PersonalLoanSettlementAfterDefaultClient';

export const metadata: Metadata = {
    title: "Personal Loan Settlement After Default | 2025 Guide",
    description: "Learn how to settle a personal loan after default. Discover what happens after a personal loan default, the 90-day window, and bank settlement offers after 3 missed EMIs.",
    keywords: [
        "settle personal loan after default",
        "what happens after personal loan default",
        "bank settlement offer after 3 missed EMIs",
        "personal loan default strategy",
        "90-day post-default window",
        "loan settlement after 3 EMIs"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/personal-loan-settlement-after-default',
    },
};

export default function PersonalLoanSettlementAfterDefaultPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Personal Loan Settlement After Default: The 90-Day Strategy Window",
        "description": "A strategic guide explaining what happens after a personal loan default and how borrowers can leverage the 90-day window to secure favorable bank settlement offers after 3 missed EMIs.",
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
                "name": "Personal Loan Settlement After Default",
                "item": "https://www.credsettle.com/personal-loan-settlement-after-default"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-default-settlement"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-default-settlement"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <PersonalLoanSettlementAfterDefaultClient />
            <Footer />
        </div>
    );
}
