import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ShouldIStopPayingEmiClient from './ShouldIStopPayingEmiClient';

export const metadata: Metadata = {
    title: "Should You Stop Paying EMI to Get a Loan Settlement?",
    description: "Thinking about intentionally stopping your EMIs to force a loan settlement? Understand the severe risks, CIBIL impact, and legal consequences first.",
    keywords: [
        "Should I stop paying EMI to get a settlement",
        "Stop paying EMI to settle loan",
        "is it safe to negotiate personal loan settlement",
        "default on purpose for loan settlement",
        "EMI bounce for settlement",
        "consequences of stopping EMI intentionally",
        "CIBIL impact of stopping EMI"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/should-i-stop-paying-emi-for-settlement',
    },
};

export default function ShouldIStopPayingEmiPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Should You Stop Paying EMI to Get a Loan Settlement?",
        "description": "Thinking about intentionally stopping your EMIs to force a loan settlement? Understand the severe risks, CIBIL impact, and legal consequences first.",
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
        "datePublished": new Date().toISOString().split('T')[0],
        "dateModified": new Date().toISOString().split('T')[0]
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
                "name": "Should I Stop Paying EMI for Settlement",
                "item": "https://www.credsettle.com/should-i-stop-paying-emi-for-settlement"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
                <Script
                    id="article-schema-stop-emi"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Script
                    id="breadcrumb-schema-stop-emi"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
                />
                <ShouldIStopPayingEmiClient />
            </div>
            <Footer />
        </div>
    );
}
