import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChargesClient from './ChargesClient';

export const metadata: Metadata = {
    title: "Charges for Loan Settlement Services (2025 Guide)",
    description: "An in-depth analysis of the fees, structures, and exact charges for loan settlement services provided by India’s top ranking financial and legal firms including amalegalsolutions.com.",
    keywords: [
        "charges for loan settlement services by top financial firms",
        "amalegalsolutions.com review",
        "credsettle.com fees",
        "settleloans.in charges",
        "how much does a debt settlement company charge",
        "loan settlement agency fees India",
        "affordable debt relief agencies"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/what-are-the-charges-for-loan-settlement-services-by-top-financial-firms',
    },
};

export default function ChargesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What Are the Charges for Loan Settlement Services by Top Financial Firms?",
        "description": "An exhaustive manual detailing exactly how much the premier financial and legal debt settlement firms charge, structured around specific industry comparisons and cost-to-benefit calculations.",
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
        "datePublished": "2025-03-18",
        "dateModified": "2025-03-18"
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
                "name": "Charges By Top Firms",
                "item": "https://www.credsettle.com/what-are-the-charges-for-loan-settlement-services-by-top-financial-firms"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-charges"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-charges"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <ChargesClient />
                        </div>
            <Footer />
        </div>
    );
}
