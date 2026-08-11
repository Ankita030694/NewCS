import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FindAgencyNearMeClient from './FindAgencyNearMeClient';

export const metadata: Metadata = {
    title: "Find a Trustworthy Debt Settlement Agency Near Me",
    description: "Search for reliable debt settlement agencies in your city. Local verification tips, physical office checks, and pan-India legal support for debt relief.",
    keywords: [
        "debt settlement agency near me",
        "loan settlement company in my city",
        "local debt relief services India",
        "finding nearby debt consultants",
        "debt settlement office verification",
        "nearby loan settlement lawyers",
        "local debt harassment relief"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/how-to-find-a-trustworthy-debt-settlement-agency-near-me',
    },
};

export default function FindAgencyNearMePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Find a Trustworthy Debt Settlement Agency Near Me: A Guide to Localized Relief",
        "description": "Learn how to find and verify the best debt settlement agencies in your local area across India for 2025.",
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
                "name": "How to Find a Trustworthy Debt Settlement Agency Near Me",
                "item": "https://www.credsettle.com/how-to-find-a-trustworthy-debt-settlement-agency-near-me"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-find-agency"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-find-agency"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <FindAgencyNearMeClient />
                        </div>
            <Footer />
        </div>
    );
}
