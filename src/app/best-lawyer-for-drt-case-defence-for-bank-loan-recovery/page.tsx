import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DRTDefenceClient from './DRTDefenceClient';

export const metadata: Metadata = {
    title: "Best Lawyer for DRT Case Defence for Bank Loan Recovery 2025 | CredSettle",
    description: "Expert legal defence for DRT cases and SARFAESI Act notices. Hire the best lawyers for bank loan recovery disputes, NPA settlement, and Debt Recovery Tribunal litigation in India.",
    keywords: [
        "best lawyer for drt case defence for bank loan recovery",
        "DRT case defence lawyer India",
        "SARFAESI Act legal notice reply",
        "Debt Recovery Tribunal advocate",
        "bank loan recovery defence lawyer",
        "NPA legal settlement expert",
        "DRT litigation strategy",
        "SARFAESI Section 13(2) notice reply",
        "SARFAESI Section 13(4) possession notice challenge",
        "DRAT appeal lawyer"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-drt-case-defence-for-bank-loan-recovery',
    },
};

export default function DRTDefencePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyer for DRT Case Defence for Bank Loan Recovery: A Comprehensive 2025 Legal Guide",
        "description": "Defend your assets against bank recovery actions under SARFAESI Act and DRT. Learn about procedural irregularities, legal defences, and how to hire the best DRT lawyer in India.",
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
        "datePublished": "2025-02-15",
        "dateModified": "2025-03-02"
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
                "name": "DRT Case Defence",
                "item": "https://www.credsettle.com/best-lawyer-for-drt-case-defence-for-bank-loan-recovery"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-drt-defence"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                strategy="afterInteractive"
            />
            <Script
                id="breadcrumb-schema-drt-defence"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
                strategy="afterInteractive"
            />
            <DRTDefenceClient />
            <Footer />
        </div>
    );
}
