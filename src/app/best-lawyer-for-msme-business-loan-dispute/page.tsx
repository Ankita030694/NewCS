import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MSMEBusinessLoanDisputeClient from './MSMEBusinessLoanDisputeClient';

export const metadata: Metadata = {
    title: "Best Lawyer for MSME Business Loan Disputes (2025)",
    description: "Looking for the best lawyer for MSME business loan dispute? Expert legal help for MSME NPA defence, SARFAESI notices, MSEFC arbitration and bank harassment. Free consultation.",
    keywords: [
        "best lawyer for MSME business loan dispute",
        "MSME business loan dispute lawyer India",
        "MSME loan NPA lawyer",
        "SARFAESI notice MSME lawyer",
        "MSME loan legal help",
        "MSEFC arbitration lawyer",
        "MSME Revival Framework lawyer",
        "best MSME business loan lawyer 2025"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-msme-business-loan-dispute',
    },
};

export default function MSMEBusinessLoanDisputePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyer for MSME Business Loan Dispute in India 2025: A Complete Legal Guide",
        "description": "Comprehensive guide on finding the best lawyer for MSME business loan disputes in India, covering SARFAESI rights, NPA defence, MSEFC proceedings and One-Time Settlement.",
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
                "name": "Best Lawyer for MSME Business Loan Dispute",
                "item": "https://www.credsettle.com/best-lawyer-for-msme-business-loan-dispute"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-msme-dispute"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-msme-dispute"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <MSMEBusinessLoanDisputeClient />
            <Footer />
        </div>
    );
}
