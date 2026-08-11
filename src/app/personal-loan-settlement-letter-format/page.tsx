import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PersonalLoanLetterClient from './PersonalLoanLetterClient';

export const metadata: Metadata = {
    title: "The Ultimate Guide to a Personal Loan Settlement Letter Format",
    description: "Discover the mandatory clauses of a legally binding One-Time Settlement (OTS) letter. Learn how to verify your loan settlement agreement and avoid fake recovery agent scams.",
    keywords: [
        "personal loan settlement letter format",
        "one time settlement letter to bank",
        "loan settlement agreement",
        "OTS letter format India",
        "fake settlement letter verification",
        "how to read loan settlement letter"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/personal-loan-settlement-letter-format',
    },
};

export default function PersonalLoanLetterPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "The Ultimate Guide to a Personal Loan Settlement Letter Format",
        "description": "Borrowers routinely fall for recovery agent scams where they pay money based on a fake, un-stamped letter. This guide shows exactly what a legally binding One-Time Settlement (OTS) letter looks like and how to verify it.",
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
                "name": "Personal Loan Settlement Letter Format",
                "item": "https://www.credsettle.com/personal-loan-settlement-letter-format"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
                <Script
                    id="article-schema-pl-settlement-letter"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Script
                    id="breadcrumb-schema-pl-settlement-letter"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
                />
                <PersonalLoanLetterClient />
            </div>
            <Footer />
        </div>
    );
}
