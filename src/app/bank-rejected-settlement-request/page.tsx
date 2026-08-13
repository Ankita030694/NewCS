import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BankRejectedSettlementRequestClient from './BankRejectedSettlementRequestClient';

export const metadata: Metadata = {
    title: "Bank Rejected Your Loan Settlement Request? Do This Next",
    description: "Did the bank reject your one-time settlement (OTS) request? Discover expert legal strategies to force the bank back to the negotiation table.",
    keywords: [
        "The bank rejected my settlement request what should I do",
        "Why did bank reject loan settlement",
        "how to negotiate if bank refuses settlement",
        "bank rejected OTS",
        "what happens if one time settlement fails",
        "force bank to accept loan settlement",
        "loan settlement rejection next steps"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/bank-rejected-settlement-request',
    },
};

export default function BankRejectedSettlementRequestPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Bank Rejected Your Loan Settlement Request? Do This Next",
        "description": "Did the bank reject your one-time settlement (OTS) request? Discover expert legal strategies to force the bank back to the negotiation table.",
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
        "datePublished": "2026-08-13",
        "dateModified": "2026-08-13"
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
                "name": "Bank Rejected Settlement Request",
                "item": "https://www.credsettle.com/bank-rejected-settlement-request"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
                <Script
                    id="article-schema-bank-rejected"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Script
                    id="breadcrumb-schema-bank-rejected"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
                />
                <BankRejectedSettlementRequestClient />
            </div>
            <Footer />
        </div>
    );
}
