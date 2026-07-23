import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatIsCreditPulseReportClient from './WhatIsCreditPulseReportClient';

export const metadata: Metadata = {
    title: "What is a Credit Pulse Report? Real-Time Bank Monitoring Explained",
    description: "Discover how banks use advanced analytics like the Credit Pulse Report for real-time credit monitoring, catching financial stress before a default happens.",
    keywords: [
        "what is credit pulse report",
        "credit monitoring by banks",
        "real-time credit score tracking",
        "bank credit pulse analytics",
        "predictive default monitoring",
        "hidden bank credit checks",
        "credit pulse report india",
        "prevent bank loan freeze"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/what-is-credit-pulse-report',
    },
};

export default function WhatIsCreditPulseReportPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What is a Credit Pulse Report? The Hidden World of Real-Time Bank Monitoring",
        "description": "A comprehensive guide on how banks use advanced analytics and the Credit Pulse Report to continuously monitor borrowers in real-time and predict defaults.",
        "image": "https://www.credsettle.com/images/credit-pulse-report.jpg",
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
        "datePublished": "2026-07-23",
        "dateModified": "2026-07-23"
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
                "name": "What is a Credit Pulse Report?",
                "item": "https://www.credsettle.com/what-is-credit-pulse-report"
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
                id="article-schema-pulse"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-pulse"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-pulse"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <WhatIsCreditPulseReportClient />
            <Footer />
        </div>
    );
}
