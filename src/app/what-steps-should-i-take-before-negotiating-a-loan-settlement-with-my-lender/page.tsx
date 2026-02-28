import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NegotiationStepsClient from './NegotiationStepsClient';

export const metadata: Metadata = {
    title: "What Steps Should I Take Before Negotiating a Loan Settlement? | CredSettle",
    description: "Prepare for loan settlement negotiation in India with our comprehensive guide. Learn about financial audits, hardship letters, RBI 2025 rules, and legal safeguards.",
    keywords: [
        "steps before negotiating loan settlement",
        "how to prepare for debt settlement India",
        "loan settlement negotiation strategy",
        "RBI 2025 settlement guidelines",
        "hardship letter for loan settlement",
        "debt settlement documentation India",
        "negotiating with banks for loan settlement",
        "pre-settlement checklist"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/what-steps-should-i-take-before-negotiating-a-loan-settlement-with-my-lender',
    },
};

export default function NegotiationStepsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What Steps Should I Take Before Negotiating a Loan Settlement with My Lender? The 2025 Strategy",
        "description": "A master guide on the critical preparatory steps required before entering a loan settlement negotiation in India, including documentation, financial audits, and RBI compliance.",
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
        "datePublished": "2025-02-28",
        "dateModified": "2025-02-28"
    };

    const organizationLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "CredSettle",
        "url": "https://www.credsettle.com",
        "logo": "https://www.credsettle.com/credsettle-logo.svg",
        "sameAs": [
            "https://www.facebook.com/credsettle",
            "https://www.twitter.com/credsettle",
            "https://www.linkedin.com/company/credsettle"
        ]
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
                "name": "Steps Before Negotiating Loan Settlement",
                "item": "https://www.credsettle.com/what-steps-should-i-take-before-negotiating-a-loan-settlement-with-my-lender"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen font-sans">
            <Navbar />
            <Script
                id="article-schema-negotiation-steps"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="org-schema-negotiation-steps"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <Script
                id="breadcrumb-schema-negotiation-steps"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <NegotiationStepsClient />
            <Footer />
        </div>
    );
}
