import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ARCLoanAssignmentClient from './ARCLoanAssignmentClient';

export const metadata: Metadata = {
    title: "Best Lawyer for ARC Loan Assignment Dispute | Asset Reconstruction Challenge Expert 2025 | CredSettle",
    description: "Find the best lawyer for ARC loan assignment disputes in India. Expert legal defence against Asset Reconstruction Companies, invalid assignment challenges, SARFAESI ARC actions, and borrower rights protection.",
    keywords: [
        "best lawyer for ARC loan assignment dispute",
        "ARC loan assignment dispute lawyer India",
        "asset reconstruction company legal challenge",
        "SARFAESI ARC dispute lawyer India",
        "loan assignment challenge lawyer 2025",
        "ARC debt assignment legal challenge India",
        "best lawyer to challenge ARC loan",
        "asset reconstruction company dispute legal help"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-arc-loan-assignment-dispute',
    },
};

export default function ARCLoanAssignmentPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyer for ARC Loan Assignment Dispute: Complete 2025 Guide to Challenging Asset Reconstruction Company Actions",
        "description": "A comprehensive guide on finding the best lawyer for ARC loan assignment disputes in India, covering SARFAESI defence, invalid assignment challenges, ARC recovery actions, and borrower rights.",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "author": { "@type": "Organization", "name": "CredSettle" },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": { "@type": "ImageObject", "url": "https://www.credsettle.com/credsettle-logo.svg" }
        },
        "datePublished": "2025-03-02",
        "dateModified": "2025-03-02"
    };

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credsettle.com/" },
            { "@type": "ListItem", "position": 2, "name": "Best Lawyer for ARC Loan Assignment Dispute", "item": "https://www.credsettle.com/best-lawyer-for-arc-loan-assignment-dispute" }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script id="article-schema-arc-dispute" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Script id="breadcrumb-schema-arc-dispute" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
            <ARCLoanAssignmentClient />
            <Footer />
        </div>
    );
}
