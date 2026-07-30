import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanWaiveoffVsWriteoffClient from './LoanWaiveoffVsWriteoffClient';

export const metadata: Metadata = {
    title: "Loan Waive-Off vs. Loan Write-Off Explained: Know the Difference",
    description: "When a borrower sees Written Off on their CIBIL report, they often celebrate, thinking the bank has forgiven their debt. Understand the real difference between a loan waive off and a loan write off.",
    keywords: [
        "difference between loan waive off and write off",
        "written off account in CIBIL",
        "loan write off meaning India",
        "loan waiver vs write off",
        "cibil report written off"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/loan-waiveoff-vs-loan-writeoff-explained-know-the-difference',
    },
};

export default function LoanWaiveoffVsWriteoffPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Loan Waive-Off vs. Loan Write-Off Explained: Know the Difference",
        "description": "Demystifying the accounting and legal realities of a loan waive-off versus a loan write-off in India.",
        "image": "https://www.credsettle.com/images/waive-off-write-off.jpg",
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
        "datePublished": "2026-07-30",
        "dateModified": "2026-07-30"
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
                "name": "Loan Waive-Off vs Write-Off",
                "item": "https://www.credsettle.com/loan-waiveoff-vs-loan-writeoff-explained-know-the-difference"
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
                id="article-schema-waiveoff"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-waiveoff"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-waiveoff"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <LoanWaiveoffVsWriteoffClient />
            <Footer />
        </div>
    );
}
