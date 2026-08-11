import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NegotiationLowerPrincipalClient from './NegotiationLowerPrincipalClient';

export const metadata: Metadata = {
    title: "Negotiate a Lower Principal for Creditors (2025)",
    description: "Master the art of negotiating a lower principal amount for debt settlement in India. Expert strategies for 2025, RBI rules, letter templates, and CIBIL impact reduction.",
    keywords: [
        "how to negotiate lower principal amount for creditors",
        "negotiate debt settlement principal reduction india",
        "how to negotiate with banks for loan settlement",
        "debt negotiation letter template india",
        "lower principal amount for credit card debt",
        "one time settlement negotiation tactics",
        "rbi guidelines for principal reduction settlements",
        "debt settlement expert negotiation tips"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/how-to-negotiate-a-lower-principal-amount-for-creditors',
    },
};

export default function NegotiationLowerPrincipalPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Mastering the Negotiation: How to Secure a Lower Principal Amount for Your Creditors in 2025",
        "description": "A comprehensive 5000-word guide for Indian borrowers on the exact legal and psychological tactics to negotiate a massive principal reduction in loan settlements.",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle Negotiation Experts"
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
                "name": "How to Negotiate a Lower Principal Amount",
                "item": "https://www.credsettle.com/how-to-negotiate-a-lower-principal-amount-for-creditors"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-negotiation-guide"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-negotiation-guide"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <NegotiationLowerPrincipalClient />
                        </div>
            <Footer />
        </div>
    );
}
