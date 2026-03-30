import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BestLawyerHomeLoanClient from './BestLawyerHomeLoanClient';

export const metadata: Metadata = {
    title: "Best Lawyer for Home Loan Settlement in India | Expert Legal Aid 2025",
    description: "Looking for the best lawyer for home loan settlement? Get expert legal aid, strategic negotiation, and protection under RBI 2025 rules and SARFAESI Act. Settle your debt safely.",
    keywords: [
        "best lawyer for home loan settlement",
        "home loan settlement lawyer India",
        "legal aid for debt settlement",
        "SARFAESI Act home loan settlement",
        "RBI home loan settlement rules 2025",
        "debt resolution lawyer India",
        "how to negotiate home loan settlement legal",
        "top banking lawyers for loan settlement"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-home-loan-settlement',
    },
};

export default function BestLawyerHomeLoanPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyer for Home Loan Settlement in India: A Complete 2025 Legal Guide",
        "description": "Expert insights into finding the best legal representation for home loan settlement, understanding your rights under the SARFAESI Act, and navigating RBI’s 2025 debt relief framework.",
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
        "datePublished": "2025-02-28",
        "dateModified": "2025-02-28"
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
                "name": "Best Lawyer for Home Loan Settlement",
                "item": "https://www.credsettle.com/best-lawyer-for-home-loan-settlement"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-home-loan-lawyer"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-home-loan-lawyer"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <BestLawyerHomeLoanClient />
            <Footer />
        </div>
    );
}
