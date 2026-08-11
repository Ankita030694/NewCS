import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PrepaymentReflectionClient from './PrepaymentReflectionClient';

export const metadata: Metadata = {
    title: "How Long Does Prepayment Reflection Take in Your Loan Account?",
    description: "Learn about prepayment reflection time, why your loan part payment is not reflecting immediately, NEFT/RTGS clearing cycles, and how long for loan payment to update.",
    keywords: [
        "loan part payment not reflecting",
        "prepayment reflection time",
        "how long for loan payment to update",
        "suspense account loan tracking",
        "NEFT RTGS clearing cycles",
        "loan ledger update time"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/prepayment-reflection-time-in-loan-account',
    },
};

export default function PrepaymentReflectionPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How Long Does Prepayment Reflection Take in Your Loan Account?",
        "description": "Learn about prepayment reflection time, why your loan part payment is not reflecting immediately, NEFT/RTGS clearing cycles, and how long for loan payment to update.",
        "image": "https://www.credsettle.com/images/prepayment-reflection.jpg",
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
                "name": "Prepayment Reflection Time",
                "item": "https://www.credsettle.com/prepayment-reflection-time-in-loan-account"
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
                id="article-schema-prepayment"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-prepayment"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-prepayment"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <PrepaymentReflectionClient />
                        </div>
            <Footer />
        </div>
    );
}
