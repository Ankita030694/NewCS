import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WillBanksBlacklistYouClient from './WillBanksBlacklistYouClient';

export const metadata: Metadata = {
    title: "Will Banks Blacklist You After Loan Settlement?",
    description: "Find out if banks blacklist you after a loan settlement in India. Understand the 'Settled' status on CIBIL, long-term impact on future loans, and how to stay eligible for credit.",
    keywords: [
        "will banks blacklist you after loan settlement",
        "loan settlement blacklist India",
        "CIBIL settled status impact",
        "can I get a loan after settlement",
        "blacklisting by banks for loan default",
        "RBI rules on loan settlement 2025",
        "getting a home loan after settlement",
        "rebuilding credit after settlement"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/will-banks-blacklist-you-after-loan-settlement',
    },
};

export default function WillBanksBlacklistYouPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Will Banks Blacklist You After Loan Settlement? The 2025 Truth Exposed",
        "description": "An exhaustive analysis of the informal blacklisting process in Indian banking after a loan settlement and how borrowers can navigate their way back to creditworthiness.",
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
        "datePublished": "2025-03-12",
        "dateModified": "2025-03-12"
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
                "name": "Will Banks Blacklist You After Loan Settlement",
                "item": "https://www.credsettle.com/will-banks-blacklist-you-after-loan-settlement"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-blacklist"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-blacklist"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <WillBanksBlacklistYouClient />
                        </div>
            <Footer />
        </div>
    );
}
