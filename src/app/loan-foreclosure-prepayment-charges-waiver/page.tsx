import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanForeclosurePrepaymentChargesWaiverClient from './LoanForeclosurePrepaymentChargesWaiverClient';

export const metadata: Metadata = {
    title: "Loan Foreclosure & Prepayment Charges Waiver Letter",
    description: "Learn how to request a waiver of foreclosure charges on your loan. Discover the RBI guidelines on prepayment penalties and get free waiver letter formats for banks.",
    keywords: [
        "foreclosure charges waiver letter format",
        "waive prepayment penalty bank",
        "request for waiver of foreclosure charges",
        "RBI guidelines on foreclosure charges 2025",
        "how to negotiate prepayment penalty",
        "MSME foreclosure charges waiver"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/loan-foreclosure-prepayment-charges-waiver',
    },
};

export default function LoanForeclosurePrepaymentChargesWaiverPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Loan Foreclosure & Prepayment Charges Waiver Request: The Ultimate Guide",
        "description": "Comprehensive legal guide to requesting and negotiating a complete waiver of hidden loan foreclosure and prepayment charges from Indian banks and NBFCs.",
        "image": "https://www.credsettle.com/images/foreclosure-waiver.jpg",
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
        "datePublished": "2025-07-23",
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
                "name": "Loan Foreclosure Prepayment Charges Waiver",
                "item": "https://www.credsettle.com/loan-foreclosure-prepayment-charges-waiver"
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
                id="article-schema-waiver"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-waiver"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-waiver"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <LoanForeclosurePrepaymentChargesWaiverClient />
            <Footer />
        </div>
    );
}
