import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DRTLoanAssignmentDisputeClient from './DRTLoanAssignmentDisputeClient';

export const metadata: Metadata = {
    title: "DRT Loan Assignment Dispute Defence Lawyer (2025)",
    description: "Looking for the best lawyer for DRT loan assignment dispute defence? Get expert legal help to challenge loan assignment to ARC, fight SARFAESI notices and defend your rights in DRT proceedings across India.",
    keywords: [
        "best lawyer for DRT loan assignment dispute defence in DRT",
        "DRT loan assignment dispute lawyer India",
        "loan assignment to ARC lawyer",
        "challenge loan assignment DRT",
        "SARFAESI loan assignment defence lawyer",
        "DRT defence lawyer for bank loan assignment",
        "best DRT lawyer for loan assignment 2025",
        "loan assignment dispute legal help India"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-drt-loan-assignment-dispute-defence-in-drt',
    },
};

export default function DRTLoanAssignmentDisputePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyer for DRT Loan Assignment Dispute Defence in DRT: A Complete 2025 Legal Guide",
        "description": "Comprehensive guide on finding the best lawyer for DRT loan assignment dispute defence in India, covering borrower rights, ARC assignment challenges, SARFAESI defence and DRT proceedings.",
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
                "name": "Best Lawyer for DRT Loan Assignment Dispute Defence in DRT",
                "item": "https://www.credsettle.com/best-lawyer-for-drt-loan-assignment-dispute-defence-in-drt"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-drt-assignment"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-drt-assignment"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <DRTLoanAssignmentDisputeClient />
                        </div>
            <Footer />
        </div>
    );
}
