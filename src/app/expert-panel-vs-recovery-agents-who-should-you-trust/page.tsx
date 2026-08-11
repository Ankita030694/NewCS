import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ExpertPanelClient from './ExpertPanelClient';

export const metadata: Metadata = {
    title: "Expert Panel vs. Recovery Agents: Who Should You Trust?",
    description: "Learn the difference between predatory recovery agents and a dedicated legal expert panel. Discover how to handle recovery agents and get legal help for loan default in India.",
    keywords: [
        "recovery agents vs lawyers",
        "how to handle recovery agents",
        "legal help for loan default",
        "stop recovery agent harassment",
        "fake settlement deals"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/expert-panel-vs-recovery-agents-who-should-you-trust',
    },
};

export default function ExpertPanelVsRecoveryAgentsPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Expert Panel vs. Recovery Agents: Who Should You Trust?",
        "description": "Learn the difference between predatory recovery agents and a dedicated legal expert panel. Discover how to handle recovery agents and get legal help for loan default.",
        "image": "https://www.credsettle.com/images/expert-panel-vs-recovery.jpg",
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
                "name": "Expert Panel vs. Recovery Agents",
                "item": "https://www.credsettle.com/expert-panel-vs-recovery-agents-who-should-you-trust"
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
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-expert"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-expert"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-expert"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <ExpertPanelClient />
                        </div>
            <Footer />
        </div>
    );
}
