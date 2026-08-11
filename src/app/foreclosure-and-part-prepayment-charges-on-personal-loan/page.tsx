import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ForeclosureAndPartPrepaymentChargesClient from './ForeclosureAndPartPrepaymentChargesClient';

export const metadata: Metadata = {
    title: "Foreclosure and Part-Prepayment Charges on Personal Loans (2025)",
    description: "Understand the RBI rules on foreclosure charges and personal loan prepayment penalties. Learn how to strategically prepay and minimize hidden bank fees.",
    keywords: [
        "foreclosure charges on personal loan",
        "personal loan prepayment penalty",
        "RBI rules on foreclosure charges",
        "floating vs fixed interest rate personal loan",
        "hidden bank fees loan prepayment",
        "how to negotiate foreclosure penalty",
        "part-prepayment strategy personal loan"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/foreclosure-and-part-prepayment-charges-on-personal-loan',
    },
};

export default function ForeclosureAndPartPrepaymentChargesPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Foreclosure and Part-Prepayment Charges on Personal Loans: The Borrower's Legal Guide",
        "description": "A comprehensive breakdown of RBI rules regarding foreclosure penalties on personal loans, exposing the hidden charges banks use, and actionable strategies for minimizing part-prepayment fees.",
        "image": "https://www.credsettle.com/images/personal-loan-prepayment.jpg",
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
                "name": "Foreclosure and Part-Prepayment Charges on Personal Loan",
                "item": "https://www.credsettle.com/foreclosure-and-part-prepayment-charges-on-personal-loan"
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
            <ForeclosureAndPartPrepaymentChargesClient />
                        </div>
            <Footer />
        </div>
    );
}
