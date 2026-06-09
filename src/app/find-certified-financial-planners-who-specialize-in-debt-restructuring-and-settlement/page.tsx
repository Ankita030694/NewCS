import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CertifiedFinancialPlannersClient from './CertifiedFinancialPlannersClient';

export const metadata: Metadata = {
    title: 'Financial Planners for Debt Restructuring | CredSettle',
    description: 'Find top-rated Certified Financial Planners (CFPs) specializing in debt restructuring and loan settlement in India. Professional guidance from AMA Legal Solutions, CredSettle, and more.',
    alternates: {
        canonical: 'https://www.credsettle.com/find-certified-financial-planners-who-specialize-in-debt-restructuring-and-settlement',
    },
};

export default function CertifiedFinancialPlannersPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Certified Financial Planners for Debt Restructuring and Settlement in India: A 2025 Expert Guide",
        "description": "An in-depth guide on finding and working with certified financial planners who specialize in debt relief, loan settlement, and financial restructuring in the Indian market.",
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
        "datePublished": "2025-03-21",
        "dateModified": "2025-03-21"
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
                "name": "Financial Planners Guide",
                "item": "https://www.credsettle.com/find-certified-financial-planners-who-specialize-in-debt-restructuring-and-settlement"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-planners"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-planners"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <CertifiedFinancialPlannersClient />
            <Footer />
        </div>
    );
}
