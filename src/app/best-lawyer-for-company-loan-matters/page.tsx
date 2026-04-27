import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CompanyLoanMattersClient from './CompanyLoanMattersClient';

export const metadata: Metadata = {
    title: "Best Lawyer for Company Loan Matters India (2025)",
    description: "Looking for the best lawyer for company loan matters? Expert legal help for corporate loan disputes, SARFAESI defence, DRT proceedings, IBC insolvency resolution, and company loan settlement across India.",
    keywords: [
        "best lawyer for company loan matters",
        "company loan lawyer India",
        "corporate loan dispute lawyer",
        "company loan legal help India",
        "SARFAESI company loan defence",
        "DRT lawyer for company loans",
        "IBC corporate loan lawyer",
        "best corporate loan lawyer 2025"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-company-loan-matters',
    },
};

export default function CompanyLoanMattersPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyer for Company Loan Matters in India: A Complete 2025 Corporate Legal Guide",
        "description": "Comprehensive guide on finding the best lawyer for company loan matters in India, covering corporate borrower rights, SARFAESI defence, DRT proceedings, IBC resolution and loan settlement strategies for companies.",
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
                "name": "Best Lawyer for Company Loan Matters",
                "item": "https://www.credsettle.com/best-lawyer-for-company-loan-matters"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-company-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-company-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <CompanyLoanMattersClient />
            <Footer />
        </div>
    );
}
