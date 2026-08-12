import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatHappensAfter3MissedEmisClient from './WhatHappensAfter3MissedEmisClient';

export const metadata: Metadata = {
    title: "What Happens After 3 Missed EMIs on a Personal Loan?",
    description: "If you miss 3 EMIs, your personal loan is classified as an NPA. Learn about NPA status, bank legal notices, and how to negotiate a settlement after default.",
    keywords: [
        "What happens after 3 missed EMIs",
        "Loan NPA after 90 days",
        "legal notice after 3 missed EMIs",
        "bank recall notice",
        "personal loan settlement",
        "loan default consequences India"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/what-happens-after-3-missed-emis',
    },
};

export default function WhatHappensAfter3MissedEmisPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What Happens After 3 Missed EMIs on a Personal Loan?",
        "description": "If you miss 3 EMIs, your personal loan is classified as an NPA. Learn about NPA status, bank legal notices, and how to negotiate a settlement after default.",
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
        "datePublished": "2026-08-12",
        "dateModified": "2026-08-12"
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
                "name": "What Happens After 3 Missed EMIs",
                "item": "https://www.credsettle.com/what-happens-after-3-missed-emis"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
                <Script
                    id="article-schema-missing-emis"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Script
                    id="breadcrumb-schema-missing-emis"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
                />
                <WhatHappensAfter3MissedEmisClient />
            </div>
            <Footer />
        </div>
    );
}
