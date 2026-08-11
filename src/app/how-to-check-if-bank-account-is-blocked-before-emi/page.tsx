import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CheckBankAccountBlockedClient from './CheckBankAccountBlockedClient';

export const metadata: Metadata = {
    title: "How to Check if Bank Account is Blocked Before EMI Deduction",
    description: "Learn how to check for bank account liens online to avoid EMI bounce penalties. Discover the signs of a frozen account and what steps to take next.",
    keywords: [
        "check if bank account is blocked",
        "bank lien check online",
        "avoid EMI bounce frozen account",
        "how to know if account is frozen",
        "bank account lien status"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/how-to-check-if-bank-account-is-blocked-before-emi',
    },
};

export default function CheckBankAccountBlockedPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Check if Bank Account is Blocked Before EMI Deduction",
        "description": "Comprehensive guide on checking bank account liens online to avoid double jeopardy penalties from EMI bounces.",
        "image": "https://www.credsettle.com/images/check-blocked-bank-account.jpg",
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
                "name": "Check Blocked Bank Account",
                "item": "https://www.credsettle.com/how-to-check-if-bank-account-is-blocked-before-emi"
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
                id="article-schema-blocked"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-blocked"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-blocked"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <CheckBankAccountBlockedClient />
                        </div>
            <Footer />
        </div>
    );
}
