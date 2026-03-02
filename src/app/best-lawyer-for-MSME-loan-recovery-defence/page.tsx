import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MSMELoanRecoveryClient from './MSMELoanRecoveryClient';

export const metadata: Metadata = {
    title: "Best Lawyer for MSME Loan Recovery Defence | Expert Legal Debt Relief 2025",
    description: "Facing MSME loan recovery? Get expert legal defence against SARFAESI Act, DRT proceedings, and recovery harassment. Navigate MSME Samadhaan for debt relief in India.",
    keywords: [
        "best lawyer for MSME loan recovery defence",
        "MSME loan debt relief India",
        "SARFAESI Act defence for MSMEs",
        "DRT lawyer for MSME loans",
        "MSME Samadhaan legal help",
        "RBI MSME revival framework 2025",
        "how to stop MSME loan recovery harassment",
        "MSME debt settlement legal expert"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-MSME-loan-recovery-defence',
    },
};

export default function MSMELoanRecoveryPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Strategic MSME Loan Recovery Defence: A Comprehensive 2025 Legal Guide",
        "description": "An exhaustive guide for Micro, Small, and Medium Enterprises in India on defending against aggressive loan recovery measures, understanding your rights under SARFAESI, and utilizing the RBI MSME Framework.",
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
        "datePublished": "2025-03-02",
        "dateModified": "2025-03-02"
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
                "name": "Best Lawyer for MSME Loan Recovery Defence",
                "item": "https://www.credsettle.com/best-lawyer-for-MSME-loan-recovery-defence"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-msme-recovery"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-msme-recovery"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <MSMELoanRecoveryClient />
            <Footer />
        </div>
    );
}
