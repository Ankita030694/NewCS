import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SuccessRateClient from './SuccessRateClient';

export const metadata: Metadata = {
    title: "Success Rate of Debt Settlement Programs (2025)",
    description: "Discover the real success rate of debt settlement programs in India for 2025. Comprehensive data on savings, completion rates, and bank-specific outcomes for borrowers.",
    keywords: [
        "success rate of debt settlement programs",
        "debt settlement success statistics India",
        "is debt settlement successful",
        "average savings in debt settlement India",
        "loan settlement success rate 2025",
        "CredSettle success rate",
        "debt relief program effectiveness"
    ],
    authors: [{ name: "CredSettle Research Team" }],
    alternates: {
        canonical: 'https://www.credsettle.com/what-is-the-success-rate-of-debt-settlement-programs',
    },
};

export default function SuccessRatePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What is the Success Rate of Debt Settlement Programs? A 2025 Data Deep-Dive",
        "description": "An exhaustive analysis of debt settlement success metrics in the Indian financial landscape, covering average waivers, program completion rates, and institutional response patterns.",
        "image": "https://www.credsettle.com/images/debt-settlement-success-rate.jpg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/logo.png"
            }
        },
        "datePublished": "2025-01-20",
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
                "name": "Debt Settlement Success Rate Guide 2025",
                "item": "https://www.credsettle.com/what-is-the-success-rate-of-debt-settlement-programs"
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
                id="article-schema-success-rate"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-success-rate"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-success-rate"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <SuccessRateClient />
            <Footer />
        </div>
    );
}
