import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SecuredLoanLitigationDRTClient from './SecuredLoanLitigationDRTClient';

export const metadata: Metadata = {
    title: "Best Lawyer for Secured Loan Litigation & DRT India",
    description: "Expert legal representation for secured loan litigation in DRT. Challenge SARFAESI notices, stop auctions, and defend against illegal possessions with top DRT lawyers in India.",
    keywords: [
        "best lawyer for secured loan litigation drt",
        "best lawyer for secured loan litigation drt india",
        "debt recovery tribunal lawyer india",
        "sarfaesi act defense lawyer",
        "section 17 securitisation application",
        "recovery certificate drt",
        "stay on auction sarfaesi",
        "one time settlement secured loan",
        "rddbfi act litigation",
        "debt recovery appellate tribunal drat lawyer"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-secured-loan-litigation-drt',
    },
};

export default function SecuredLoanLitigationDRTPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyer for Secured Loan Litigation & DRT: Protecting Your Assets Under SARFAESI Act",
        "description": "A comprehensive guide on defending secured loans in India. Learn about DRT procedures, Section 17 applications, and how to stop illegal property auctions.",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": "2025-03-01",
        "dateModified": "2025-03-01"
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
                "name": "Best Lawyer for Secured Loan Litigation DRT",
                "item": "https://www.credsettle.com/best-lawyer-for-secured-loan-litigation-drt"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-drt"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-drt"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <SecuredLoanLitigationDRTClient />
                        </div>
            <Footer />
        </div>
    );
}
