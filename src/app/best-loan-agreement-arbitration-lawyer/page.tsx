import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanArbitrationClient from './LoanArbitrationClient';

export const metadata: Metadata = {
    title: "Best Loan Agreement Arbitration Lawyer | Expert Legal ADR 2025",
    description: "Facing loan arbitration? Get expert legal representation for arbitration notices, Section 9 interim relief, and challenging arbitral awards. Professional ADR for loan disputes.",
    keywords: [
        "best loan agreement arbitration lawyer",
        "loan arbitration notice legal help",
        "Section 9 arbitration act interim relief",
        "Section 34 challenge to arbitral award",
        "arbitration in bank loan agreements India",
        "best lawyer for arbitration dispute resolution",
        "how to stop arbitration recovery India",
        "debt arbitration expert lawyer"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-loan-agreement-arbitration-lawyer',
    },
};

export default function LoanArbitrationPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Mastering Loan Agreement Arbitration: A Comprehensive 2025 Legal Guide",
        "description": "An exhaustive guide on the arbitration process in Indian loan agreements, covering legal rights, interim measures, and strategies for successful dispute resolution.",
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
        "datePublished": "2025-03-02",
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
                "name": "Loan Agreement Arbitration",
                "item": "https://www.credsettle.com/best-loan-agreement-arbitration-lawyer"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-loan-arbitration"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-loan-arbitration"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <LoanArbitrationClient />
            <Footer />
        </div>
    );
}
