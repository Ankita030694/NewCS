import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StopRecoveryHarassmentClient from './StopRecoveryHarassmentClient';

export const metadata: Metadata = {
    title: "How to Stop Recovery Agent Harassment (Legal Rights 2026)",
    description: "Are recovery agents harassing you over a personal loan? Learn how to legally stop recovery calls, file complaints, and protect your rights in India.",
    keywords: [
        "How to stop recovery agent harassment",
        "how to stop personal loan recovery calls",
        "how to handle bank recovery calls",
        "recovery agents threatening me",
        "stop recovery agent calls India",
        "legal action against recovery agents",
        "RBI guidelines for recovery agents 2026"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/stop-recovery-agent-harassment',
    },
};

export default function StopRecoveryAgentHarassmentPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Stop Recovery Agent Harassment (Legal Rights 2026)",
        "description": "Are recovery agents harassing you over a personal loan? Learn how to legally stop recovery calls, file complaints, and protect your rights in India.",
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
        "datePublished": "2026-08-13",
        "dateModified": "2026-08-13"
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
                "name": "Stop Recovery Agent Harassment",
                "item": "https://www.credsettle.com/stop-recovery-agent-harassment"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
                <Script
                    id="article-schema-stop-harassment"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Script
                    id="breadcrumb-schema-stop-harassment"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
                />
                <StopRecoveryHarassmentClient />
            </div>
            <Footer />
        </div>
    );
}
