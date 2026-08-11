import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MSMEPersonalLoanClient from './MSMEPersonalLoanClient';

export const metadata: Metadata = {
    title: "Best Lawyer for MSME Personal Loan (2025)",
    description: "Expert legal help for MSME personal loans and promoter personal guarantees. Defend against SARFAESI and IBC proceedings. Navigate debt relief with top India law experts.",
    keywords: [
        "best lawyer for MSME personal loan",
        "MSME personal loan recovery defence",
        "promoter personal guarantee legal help",
        "IBC proceedings against personal guarantors",
        "MSME business personal loan relief",
        "SARFAESI act for personal loans",
        "personal guarantee settlement lawyer",
        "debt relief for MSME promoters"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-MSME-personal-loan',
    },
};

export default function MSMEPersonalLoanPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Defending Personal Assets in MSME Debt: The 2025 Guide for Personal Guarantors",
        "description": "A comprehensive legal guide for MSME promoters and individuals on defending personal loans taken for business, understanding personal guarantee risks under IBC, and legal settlement strategies.",
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
                "name": "Best Lawyer for MSME Personal Loan",
                "item": "https://www.credsettle.com/best-lawyer-for-MSME-personal-loan"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-msme-personal"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-msme-personal"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <MSMEPersonalLoanClient />
                        </div>
            <Footer />
        </div>
    );
}
