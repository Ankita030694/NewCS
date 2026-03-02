import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeLoanCheckBounceClient from './HomeLoanCheckBounceClient';

export const metadata: Metadata = {
    title: "Best Lawyer for Home Loan Cheque Bounce Case | Section 138 NI Act Defence 2025 | CredSettle",
    description: "Find the best lawyer for home loan cheque bounce cases in India. Expert legal defence under Section 138 NI Act, strategic representation, and proven results. Protect your rights today.",
    keywords: [
        "best lawyer for home loan check bounce case",
        "home loan cheque bounce lawyer India",
        "section 138 NI Act home loan defence",
        "cheque bounce case lawyer",
        "home loan cheque dishonour legal help",
        "NI Act section 138 defence strategy India",
        "best cheque bounce case lawyer 2025",
        "home loan recovery cheque bounce case"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-home-loan-check-bounce-case',
    },
};

export default function HomeLoanCheckBouncePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyer for Home Loan Cheque Bounce Case: A Complete 2025 Legal Guide",
        "description": "A comprehensive guide on finding the best lawyer for home loan cheque bounce cases in India, covering Section 138 NI Act defence strategies, legal rights, and expert representation.",
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
                "name": "Best Lawyer for Home Loan Cheque Bounce Case",
                "item": "https://www.credsettle.com/best-lawyer-for-home-loan-check-bounce-case"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-home-loan-cheque-bounce"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-home-loan-cheque-bounce"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <HomeLoanCheckBounceClient />
            <Footer />
        </div>
    );
}
