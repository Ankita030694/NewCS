import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AvoidScamsClient from './AvoidScamsClient';

export const metadata: Metadata = {
    title: "How to Avoid Debt Settlement Scams in India | RBI 2025 Protection Guide",
    description: "Learn how to identify and avoid debt settlement scams in India. 2025 RBI guidelines, red flags for fake agencies, and a verification checklist for borrowers.",
    keywords: [
        "how to avoid debt settlement scams in India",
        "fake debt relief companies red flags",
        "RBI registered debt settlement firms",
        "loan settlement scam warning signs",
        "identifying fraudulent debt agencies",
        "borrower protection India 2025",
        "reporting debt settlement fraud"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/how-to-avoid-debt-settlement-scams-in-india',
    },
};

export default function AvoidScamsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Avoid Debt Settlement Scams in India: A 2025 RBI Protection Roadmap",
        "description": "A survival guide for Indian borrowers to navigate the debt relief market safely and identify predatory practices.",
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
                "name": "How to Avoid Debt Settlement Scams in India",
                "item": "https://www.credsettle.com/how-to-avoid-debt-settlement-scams-in-india"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-avoid-scams"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-avoid-scams"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <AvoidScamsClient />
            <Footer />
        </div>
    );
}
