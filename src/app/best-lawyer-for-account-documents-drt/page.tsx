import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AccountDocumentsDRTClient from './AccountDocumentsDRTClient';

export const metadata: Metadata = {
    title: "Best Lawyer for Account Documents in DRT Cases (2025)",
    description: "Find the best lawyer for challenging account documents in DRT loan recovery cases. Expert in bank statement analysis, NPA classification disputes, and document-based defence strategies.",
    keywords: [
        "best lawyer for account documents DRT",
        "DRT case bank statement lawyer",
        "account documents DRT loan recovery",
        "bank documents challenge DRT India",
        "DRT account statement dispute lawyer",
        "NPA classification challenge lawyer",
        "bank records DRT defence strategy",
        "best lawyer for DRT account documents 2025"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-account-documents-drt',
    },
};

export default function AccountDocumentsDRTPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyer for Account Documents in DRT Cases: A Complete 2025 Guide to Document-Based Defence",
        "description": "A comprehensive guide on finding the best lawyer who specializes in challenging account documents, bank statements, and NPA classifications in Debt Recovery Tribunal proceedings across India.",
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
        "datePublished": "2025-03-01",
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
                "name": "Best Lawyer for Account Documents DRT",
                "item": "https://www.credsettle.com/best-lawyer-for-account-documents-drt"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-account-documents-drt"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-account-documents-drt"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <AccountDocumentsDRTClient />
            <Footer />
        </div>
    );
}
