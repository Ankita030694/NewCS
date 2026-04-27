import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CreditCardDefaultLegalActionClient from './CreditCardDefaultLegalActionClient';

export const metadata: Metadata = {
    title: "Legal Action for Credit Card Default in India",
    description: "What legal action can banks take for credit card default in India? Learn about the recovery process, CIBIL impact, arbitration, and your rights against harassment.",
    keywords: [
        "legal action for credit card default India",
        "credit card recovery process in India",
        "can bank file criminal case for credit card",
        "credit card default consequences",
        "arbitration for credit card settlement",
        "how to stop credit card harassment",
        "CIBIL score impact credit card default",
        "credit card debt collection rules 2026",
        "maximum legal interest on credit card",
        "bank legal notice for credit card"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/legal-action-for-credit-card-default',
    },
};

export default function CreditCardDefaultLegalActionPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Legal Action for Credit Card Default: A Complete Roadmap for Borrowers in India",
        "description": "An exhaustive guide on handling credit card debt recovery, legal notices, and the settlement process in the Indian banking system.",
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
        "datePublished": "2026-03-10",
        "dateModified": "2026-03-10"
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
                "name": "Legal Action for Credit Card Default",
                "item": "https://www.credsettle.com/legal-action-for-credit-card-default"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-credit-card-legal"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-credit-card-legal"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <CreditCardDefaultLegalActionClient />
            <Footer />
        </div>
    );
}
