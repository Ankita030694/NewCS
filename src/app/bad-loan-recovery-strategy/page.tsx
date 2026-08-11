import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BadLoanRecoveryStrategyClient from './BadLoanRecoveryStrategyClient';

export const metadata: Metadata = {
    title: "Bad Loan Recovery Strategy India 2025 | RBI Guidelines",
    description: "Expert legal strategies for bad loan recovery in India 2025. Navigate RBI Securitisation of Stressed Assets (SSAF), SARFAESI Act, IBC, and Debt Recovery Tribunal (DRT) procedures.",
    keywords: [
        "bad loan recovery strategy India 2025",
        "RBI guidelines for stressed assets 2025",
        "SARFAESI Act 2025 amendments",
        "IBC resolution for bad loans",
        "Debt Recovery Tribunal procedures India",
        "Securitisation of Stressed Assets Framework 2025",
        "NPA legal recovery process India",
        "willful defaulter legal consequences 2025"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/bad-loan-recovery-strategy',
    },
};

export default function BadLoanRecoveryStrategyPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Bad Loan Recovery Strategy: A Comprehensive Legal Guide for India 2025",
        "description": "An in-depth analysis of legal and regulatory frameworks for managing and recovering bad loans in India, covering SARFAESI, IBC, and RBI’s latest 2025 directions.",
        "image": "https://www.credsettle.com/images/bad-loan-recovery.jpg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle Legal Research Cell"
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
                "name": "Bad Loan Recovery Strategy",
                "item": "https://www.credsettle.com/bad-loan-recovery-strategy"
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
                id="article-schema-bad-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-bad-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-bad-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <BadLoanRecoveryStrategyClient />
                        </div>
            <Footer />
        </div>
    );
}
