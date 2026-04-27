import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DRTLawyerMumbaiClient from './DRTLawyerMumbaiClient';

export const metadata: Metadata = {
    title: "DRT Lawyer in Mumbai for Loan Recovery (2025)",
    description: "Connect with the best DRT lawyer in Mumbai for loan recovery cases. Expert representation before DRT-I, DRT-II, DRT-III Mumbai. SARFAESI defence, stay orders, and NPA resolution.",
    keywords: [
        "DRT lawyer in Mumbai loan recovery",
        "debt recovery tribunal lawyer Mumbai",
        "DRT advocate Mumbai",
        "best DRT lawyer Mumbai 2025",
        "Mumbai loan recovery lawyer",
        "DRT Mumbai SARFAESI defence",
        "debt recovery tribunal Mumbai proceedings",
        "NPA resolution lawyer Mumbai"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/drt-lawyer-in-mumbai-loan-recovery',
    },
};

export default function DRTLawyerMumbaiPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "DRT Lawyer in Mumbai for Loan Recovery: Complete 2025 Guide to Debt Recovery Tribunal Proceedings",
        "description": "A comprehensive guide on finding the best DRT lawyer in Mumbai for loan recovery, covering DRT procedures, SARFAESI defence, and strategic legal representation before all three Mumbai DRTs.",
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
                "name": "DRT Lawyer in Mumbai Loan Recovery",
                "item": "https://www.credsettle.com/drt-lawyer-in-mumbai-loan-recovery"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-drt-lawyer-mumbai"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-drt-lawyer-mumbai"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <DRTLawyerMumbaiClient />
            <Footer />
        </div>
    );
}
