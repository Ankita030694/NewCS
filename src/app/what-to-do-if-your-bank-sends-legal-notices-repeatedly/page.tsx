import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatToDoIfYourBankSendsLegalNoticesRepeatedlyClient from './WhatToDoIfYourBankSendsLegalNoticesRepeatedlyClient';

export const metadata: Metadata = {
    title: "What to Do If Your Bank Sends Legal Notices Repeatedly (2025)",
    description: "Are you suffering from notice fatigue? Learn how to distinguish fake WhatsApp notices from genuine DRT and Section 138 summons. Formally reply and build your defense.",
    keywords: [
        "bank sending legal notice repeatedly",
        "how to reply to bank legal notice",
        "fake legal notice from bank",
        "bank legal notice format",
        "ignoring bank notices",
        "DRT notice verification"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/what-to-do-if-your-bank-sends-legal-notices-repeatedly',
    },
};

export default function WhatToDoIfYourBankSendsLegalNoticesRepeatedlyPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What to Do If Your Bank Sends Legal Notices Repeatedly",
        "description": "A comprehensive guide on handling repeated bank legal notices, verifying fake WhatsApp summons, and replying to build a solid legal defense paper trail.",
        "image": "https://www.credsettle.com/images/bank-legal-notice-repeatedly.jpg",
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
        "datePublished": "2025-05-15",
        "dateModified": "2026-05-15"
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
                "name": "Repeated Bank Legal Notices",
                "item": "https://www.credsettle.com/what-to-do-if-your-bank-sends-legal-notices-repeatedly"
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
            <WhatToDoIfYourBankSendsLegalNoticesRepeatedlyClient />
            <Footer />
        </div>
    );
}
