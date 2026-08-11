import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IgnoringLegalNoticesClient from './IgnoringLegalNoticesClient';

export const metadata: Metadata = {
    title: "Ignoring Legal Notices for Financial Default: The Consequences",
    description: "What happens if you don't reply to a legal notice from a bank? Discover the timeline from fake lawyer notices to real ex-parte court judgments.",
    keywords: [
        "ignoring bank legal notice",
        "what happens if I don't reply to legal notice",
        "ex-parte decree bank loan",
        "legal notice fatigue borrower",
        "fake lawyer notice bank",
        "court summons financial default"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/ignoring-legal-notices-financial-default-consequences',
    },
};

export default function IgnoringLegalNoticesPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Ignoring Legal Notices for Financial Default: The Consequences",
        "description": "Borrowers suffer from notice fatigue and start throwing away legal letters, accidentally missing actual court summons. This page outlines the timeline of escalation.",
        "image": "https://www.credsettle.com/images/legal-notice-escalation.jpg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle Legal Defense Wing"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": "2025-03-07",
        "dateModified": "2026-03-07"
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
                "name": "Ignoring Legal Notices for Financial Default",
                "item": "https://www.credsettle.com/ignoring-legal-notices-financial-default-consequences"
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
                id="article-schema-legal-notice"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-legal-notice"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-legal-notice"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <IgnoringLegalNoticesClient />
                        </div>
            <Footer />
        </div>
    );
}
