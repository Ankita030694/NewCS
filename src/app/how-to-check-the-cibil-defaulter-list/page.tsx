import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CibilDefaulterListClient from './CibilDefaulterListClient';

export const metadata: Metadata = {
    title: "How to Check the CIBIL Defaulter List (2026 Guide)",
    description: "Looking for the CIBIL defaulter list? Learn why public defaulter lists don't exist, understand Suit-Filed accounts, and discover how to safely check your credit report.",
    keywords: [
        "CIBIL defaulter list check online",
        "RBI defaulters list check",
        "am I on CIBIL defaulter list",
        "check my name in defaulter list",
        "how to check suit filed accounts in CIBIL",
        "credit report dispute",
        "how to remove name from defaulter list"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/how-to-check-the-cibil-defaulter-list',
    },
};

export default function CibilDefaulterListPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Check the CIBIL Defaulter List: The Ultimate 2026 Guide",
        "description": "Looking for the CIBIL defaulter list? Learn why public defaulter lists don't exist, understand Suit-Filed accounts, and discover how to safely check your credit report.",
        "image": "https://www.credsettle.com/images/cibil-defaulter-list-guide.jpg",
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
                "name": "How to Check the CIBIL Defaulter List",
                "item": "https://www.credsettle.com/how-to-check-the-cibil-defaulter-list"
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
                id="article-schema-cibil"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-cibil"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-cibil"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <CibilDefaulterListClient />
            <Footer />
        </div>
    );
}
