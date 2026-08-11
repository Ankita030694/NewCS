import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MSMEBusinessLoansClient from './MSMEBusinessLoansClient';

export const metadata: Metadata = {
    title: "Best Lawyer for MSME and Business Loans in India",
    description: "Looking for the best lawyer for MSME and business loans? Get expert legal help for MSME loan disputes, SARFAESI defence, MSEFC arbitration, DRT proceedings and business loan settlement across India.",
    keywords: [
        "best lawyer for MSME and business loans",
        "MSME business loan lawyer India",
        "business loan dispute lawyer",
        "MSME loan legal help India",
        "SARFAESI MSME defence lawyer",
        "DRT lawyer for business loans",
        "MSEFC arbitration lawyer India",
        "best business loan lawyer 2025"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-msme-and-business-loans',
    },
};

export default function MSMEBusinessLoansPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyer for MSME and Business Loans in India: A Complete 2025 Legal Guide",
        "description": "Comprehensive guide on finding the best lawyer for MSME and business loan disputes in India, covering borrower rights, SARFAESI defence, MSEFC proceedings, DRT cases and settlement strategies.",
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
        "dateModified": "2026-03-02"
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
                "name": "Best Lawyer for MSME and Business Loans",
                "item": "https://www.credsettle.com/best-lawyer-for-msme-and-business-loans"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-msme-loans"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-msme-loans"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <MSMEBusinessLoansClient />
                        </div>
            <Footer />
        </div>
    );
}
