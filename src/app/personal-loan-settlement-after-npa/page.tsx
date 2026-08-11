import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PersonalLoanSettlementAfterNpaClient from './PersonalLoanSettlementAfterNpaClient';

export const metadata: Metadata = {
    title: "Personal Loan Settlement After NPA | Secret Bank Rules 2025",
    description: "Discover the hidden advantage of the NPA classification during negotiations. Learn how to settle a personal loan after it hits NPA status with up to 70% waivers.",
    keywords: [
        "personal loan settlement after NPA",
        "NPA loan settlement rules",
        "how to settle NPA account with bank",
        "NPA provisioning norms",
        "personal loan NPA settlement",
        "NPA account settlement process",
        "bank haircut after NPA"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/personal-loan-settlement-after-npa',
    },
};

export default function PersonalLoanSettlementAfterNpaPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Personal Loan Settlement After NPA: The Ultimate Guide",
        "description": "Learn the hidden advantage of the NPA classification during negotiations and how to legally close the account to stop the bleeding.",
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
        "datePublished": "2025-03-16",
        "dateModified": "2025-03-16"
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
                "name": "Personal Loan Settlement After NPA",
                "item": "https://www.credsettle.com/personal-loan-settlement-after-npa"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-npa"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-npa"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <PersonalLoanSettlementAfterNpaClient />
                        </div>
            <Footer />
        </div>
    );
}
