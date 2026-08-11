import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PersonalLoanPercentageClient from './PersonalLoanPercentageClient';

export const metadata: Metadata = {
    title: "What Percentage is Personal Loan Settlement? (Bank Internal Math)",
    description: "Discover the average personal loan settlement amount and how much a bank will waive. Learn how Days Past Due (DPD) and NPA provisioning dictate your discount.",
    keywords: [
        "what percentage is personal loan settlement",
        "average personal loan settlement amount",
        "how much does bank waive in settlement",
        "personal loan settlement calculator",
        "NPA provisioning rules India",
        "DPD days past due settlement"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/personal-loan-settlement-percentage',
    },
};

export default function PersonalLoanPercentagePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Personal Loan Settlement Percentage: How Much Will the Bank Waive?",
        "description": "An insider look into how banks calculate settlement discounts based on Days Past Due (DPD) and Non-Performing Asset (NPA) provisioning rules.",
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
        "datePublished": "2026-08-11",
        "dateModified": "2026-08-11"
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
                "name": "Personal Loan Settlement Percentage",
                "item": "https://www.credsettle.com/personal-loan-settlement-percentage"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
                <Script
                    id="article-schema-pl-percentage"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Script
                    id="breadcrumb-schema-pl-percentage"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
                />
                <PersonalLoanPercentageClient />
            </div>
            <Footer />
        </div>
    );
}
