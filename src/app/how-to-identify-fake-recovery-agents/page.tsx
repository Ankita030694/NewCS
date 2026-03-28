import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IdentifyFakeAgentsClient from './IdentifyFakeAgentsClient';

export const metadata: Metadata = {
    title: "How to Identify Fake Recovery Agents in India: RBI Rules (2025)",
    description: "Learn how to identify fake recovery agents and protect yourself from loan harassment. Explore RBI rules 2024-2025, verification steps, and legal rights for borrowers in India.",
    keywords: [
        "how to identify fake recovery agents",
        "fake recovery agent identification India",
        "RBI rules for recovery agents 2025",
        "loan harassment by fake agents",
        "verify recovery agent authorization",
        "illegal debt collection practices India",
        "report fake recovery agents",
        "recovery agent identity verification"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/how-to-identify-fake-recovery-agents',
    },
};

export default function IdentifyFakeAgentsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Identify Fake Recovery Agents: A Comprehensive Guide to RBI Rules and Borrower Rights",
        "description": "An in-depth guide on distinguishing between legitimate recovery agents and fraudulent scammers, including official RBI protocols and legal protections for Indian borrowers.",
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
        "datePublished": "2025-03-28",
        "dateModified": "2025-03-28"
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
                "name": "How to Identify Fake Recovery Agents",
                "item": "https://www.credsettle.com/how-to-identify-fake-recovery-agents"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-fake-agents"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-fake-agents"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <IdentifyFakeAgentsClient />
            <Footer />
        </div>
    );
}
