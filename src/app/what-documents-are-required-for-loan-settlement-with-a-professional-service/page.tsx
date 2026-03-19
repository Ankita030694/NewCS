import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RequiredDocumentsClient from './RequiredDocumentsClient';

export const metadata: Metadata = {
    title: "Required Documents for Loan Settlement in India | 2025 Professional Checklist",
    description: "Discover the essential documents required for a successful loan settlement in India. Detailed checklist for KYC, Hardship Proof, and legal letters.",
    keywords: [
        "documents required for loan settlement",
        "loan settlement document checklist India",
        "KYC for debt settlement",
        "hardship letter for loan settlement",
        "OTS offer letter documents",
        "No Dues Certificate importance",
        "CIBIL report for settlement",
        "bank settlement paperwork"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/what-documents-are-required-for-loan-settlement-with-a-professional-service',
    },
};

export default function RequiredDocumentsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Documents Required for Loan Settlement with a Professional Service in India: The Ultimate 2025 Checklist",
        "description": "A comprehensive guide on every document needed for debt settlement—from KYC and hardship proof to the final No Dues Certificate.",
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
        "datePublished": "2025-03-12",
        "dateModified": "2025-03-19"
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
                "name": "Required Documents for Loan Settlement",
                "item": "https://www.credsettle.com/what-documents-are-required-for-loan-settlement-with-a-professional-service"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-required-documents"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-required-documents"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <RequiredDocumentsClient />
            <Footer />
        </div>
    );
}
