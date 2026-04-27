import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatQuestionsDebtConsultantClient from './WhatQuestionsDebtConsultantClient';

const canonicalUrl = 'https://www.credsettle.com/what-questions-should-i-ask-a-debt-settlement-consultant';

export const metadata: Metadata = {
    title: "Questions to Ask a Debt Settlement Consultant",
    description: "Discover the 20+ essential questions you must ask a debt settlement consultant before hiring. Learn about fees, red flags, legal rights in India, and how to verify legitimacy.",
    keywords: [
        "what questions should i ask a debt settlement consultant",
        "how to interview debt settlement companies",
        "debt settlement red flags India",
        "questions for debt relief experts",
        "hiring a debt consultant in India",
        "debt settlement company verification",
        "negotiation tactics with debt consultants"
    ],
    alternates: {
        canonical: canonicalUrl,
    },
};

export default function WhatQuestionsDebtConsultantPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What Questions Should I Ask a Debt Settlement Consultant? The 2025 Ultimate Checklist",
        "description": "A comprehensive guide on the critical questions every borrower should ask a debt settlement consultant to ensure transparency, legality, and success in debt resolution.",
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
                "name": "What Questions Should I Ask a Debt Settlement Consultant",
                "item": canonicalUrl
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-debt-consultant"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-debt-consultant"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <WhatQuestionsDebtConsultantClient />
            <Footer />
        </div>
    );
}
