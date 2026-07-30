import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatIsDebtConsolidationClient from './WhatIsDebtConsolidationClient';

export const metadata: Metadata = {
    title: "What is Debt Consolidation & How It Works | CredSettle",
    description: "Learn what is debt consolidation and how debt consolidation works to help you consolidate multiple EMIs into one, reducing monthly financial stress and avoiding defaults.",
    keywords: [
        "what is debt consolidation",
        "how debt consolidation works",
        "consolidate multiple EMIs into one",
        "reduce monthly EMI stress",
        "debt consolidation in India"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/what-is-debt-consolidation-and-how-it-helps-reduce-monthly-financial-stress',
    },
};

export default function WhatIsDebtConsolidationPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What is Debt Consolidation and How It Helps Reduce Monthly Financial Stress",
        "description": "Learn what is debt consolidation and how debt consolidation works to help you consolidate multiple EMIs into one, reducing monthly financial stress and avoiding defaults.",
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
                "name": "What is Debt Consolidation",
                "item": "https://www.credsettle.com/what-is-debt-consolidation-and-how-it-helps-reduce-monthly-financial-stress"
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
        <div className="bg-white min-h-screen font-sans">
            <Navbar />
            <Script
                id="article-schema-debt-consolidation"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-debt-consolidation"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-debt-consolidation"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <WhatIsDebtConsolidationClient />
            <Footer />
        </div>
    );
}
