import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BankLoanRecoveryDefenceClient from './BankLoanRecoveryDefenceClient';

export const metadata: Metadata = {
    title: "Best Lawyer for Bank Loan Recovery Defence | Expert Legal Help 2025",
    description: "Facing bank loan recovery? Get expert legal defence for SARFAESI Act, DRT cases & debt recovery notices. Protect your assets with specialized banking lawyers.",
    keywords: [
        "best lawyer for bank loan recovery defence",
        "bank loan recovery defence lawyer india",
        "SARFAESI act defence lawyer",
        "DRT case defence advocate",
        "legal notice for loan recovery reply",
        "debt recovery tribunal lawyer",
        "best advocate for bank disputes",
        "how to stop bank auction of property"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-bank-loan-recovery-defence',
    },
};

export default function BankLoanRecoveryDefencePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyer for Bank Loan Recovery Defence: Your Guide to Legal Protection",
        "description": "A comprehensive guide on defending against bank loan recovery actions under SARFAESI Act and DRT, and why specialized legal counsel is essential.",
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
                "name": "Bank Loan Recovery Defence",
                "item": "https://www.credsettle.com/best-lawyer-for-bank-loan-recovery-defence"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-recovery-defence"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-recovery-defence"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <BankLoanRecoveryDefenceClient />
            <Footer />
        </div>
    );
}
