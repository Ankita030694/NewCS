import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MultipleLoanClient from './MultipleLoanClient';

export const metadata: Metadata = {
    title: "How to Settle Multiple Personal Loans | Consolidated Negotiation",
    description: "Learn how to settle multiple personal loans simultaneously. Discover the difference between debt consolidation vs settlement and how to negotiate multiple loans with banks effectively.",
    keywords: [
        "how to settle multiple personal loans",
        "debt consolidation vs settlement",
        "negotiate multiple loans with banks",
        "multiple personal loan settlement",
        "consolidated negotiation for loans",
        "settling fintech apps and banks"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/multiple-personal-loan-settlement',
    },
};

export default function MultiplePersonalLoanPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Settle Multiple Personal Loans Simultaneously",
        "description": "A comprehensive guide on managing and settling multiple personal loans across traditional banks and fintech apps using the Consolidated Negotiation strategy.",
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
                "name": "Multiple Personal Loan Settlement",
                "item": "https://www.credsettle.com/multiple-personal-loan-settlement"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
                <Script
                    id="article-schema-multiple-loans"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Script
                    id="breadcrumb-schema-multiple-loans"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
                />
                <MultipleLoanClient />
            </div>
            <Footer />
        </div>
    );
}
