import os

slug = "negotiate-personal-loan-settlement"
base_dir = f"/Users/piyushmishra/Desktop/NEWCS/NewCS/src/app/{slug}"
os.makedirs(base_dir, exist_ok=True)

page_content = """import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NegotiatePersonalLoanSettlementClient from './NegotiatePersonalLoanSettlementClient';

export const metadata: Metadata = {
    title: "How to Negotiate Personal Loan Settlement with Banks & NBFCs",
    description: "Master the art of personal loan negotiation. Learn proven strategies to talk to bank managers, stop harassment, and legally negotiate a lower payoff amount.",
    keywords: [
        "negotiate personal loan settlement",
        "how to negotiate with bank for loan settlement",
        "personal loan negotiation tips",
        "reduce loan burden",
        "stop recovery harassment",
        "NBFC loan settlement"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/negotiate-personal-loan-settlement',
    },
};

export default function NegotiatePersonalLoanSettlementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Negotiate Personal Loan Settlement with Banks & NBFCs",
        "description": "Master the art of personal loan negotiation. Learn proven strategies to talk to bank managers, stop harassment, and legally negotiate a lower payoff amount.",
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
        "datePublished": "2025-08-12",
        "dateModified": "2025-08-12"
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
                "name": "Negotiate Personal Loan Settlement",
                "item": "https://www.credsettle.com/negotiate-personal-loan-settlement"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
                <Script
                    id="article-schema-negotiate-pl"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Script
                    id="breadcrumb-schema-negotiate-pl"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
                />
                <NegotiatePersonalLoanSettlementClient />
            </div>
            <Footer />
        </div>
    );
}
"""

with open(f"{base_dir}/page.tsx", "w") as f:
    f.write(page_content)
