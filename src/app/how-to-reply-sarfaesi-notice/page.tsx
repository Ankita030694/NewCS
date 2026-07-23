import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HowToReplySarfaesiNoticeClient from './HowToReplySarfaesiNoticeClient';

export const metadata: Metadata = {
    title: "How to Legally Reply to a SARFAESI Notice (2025 Guide)",
    description: "Expert legal guide on how to file a statutory objection under Section 13(3A) to reply to a SARFAESI notice and stop bank property possession.",
    keywords: [
        "reply to SARFAESI notice format",
        "Section 13(2) notice reply",
        "stop bank property possession",
        "how to reply to SARFAESI section 13 2",
        "Section 13 3A objection format",
        "legal notice reply against bank property possession",
        "SARFAESI act defense 2025",
        "how to stall bank auction"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/how-to-reply-sarfaesi-notice',
    },
};

export default function HowToReplySarfaesiNoticePage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Legally Reply to a SARFAESI Notice: The Ultimate 2025 Guide",
        "description": "Ignoring a 60 day Section 13(2) notice guarantees the loss of property. Learn exactly how to file a statutory objection under Section 13(3A) to stall the bank's possession timeline.",
        "image": "https://www.credsettle.com/images/sarfaesi-notice-reply.jpg",
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
                "name": "How to Legally Reply to a SARFAESI Notice",
                "item": "https://www.credsettle.com/how-to-reply-sarfaesi-notice"
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
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-sarfaesi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-sarfaesi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-sarfaesi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <HowToReplySarfaesiNoticeClient />
            <Footer />
        </div>
    );
}
