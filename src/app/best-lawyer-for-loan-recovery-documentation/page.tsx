import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanRecoveryDocumentationClient from './LoanRecoveryDocumentationClient';

export const metadata: Metadata = {
    title: "Best Lawyer for Loan Recovery Documentation (2025)",
    description: "Find the best lawyer for loan recovery documentation in India. Expert preparation of DRT applications, SARFAESI notices, recovery affidavits, and all legal documents for bank loan recovery proceedings.",
    keywords: [
        "best lawyer for loan recovery documentation",
        "loan recovery documentation lawyer India",
        "DRT application documentation expert",
        "SARFAESI recovery documentation lawyer",
        "bank loan recovery legal documents",
        "loan recovery affidavit specialist India",
        "legal documentation for loan recovery 2025",
        "bank debt recovery documents lawyer"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-loan-recovery-documentation',
    },
};

export default function LoanRecoveryDocumentationPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyer for Loan Recovery Documentation: Complete 2025 Guide for Banks and Borrowers",
        "description": "A comprehensive guide on finding the best lawyer for loan recovery documentation in India, covering DRT applications, SARFAESI documentation, bank recovery affidavits, and legal notice preparation.",
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
            { "@type": "ListItem", "position": 2, "name": "Best Lawyer for Loan Recovery Documentation", "item": "https://www.credsettle.com/best-lawyer-for-loan-recovery-documentation" }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script id="article-schema-loan-recovery-docs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Script id="breadcrumb-schema-loan-recovery-docs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
            <LoanRecoveryDocumentationClient />
            <Footer />
        </div>
    );
}
