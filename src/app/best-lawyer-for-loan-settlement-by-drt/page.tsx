import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DRTLoanSettlementClient from './DRTLoanSettlementClient';

export const metadata: Metadata = {
    title: "Best Lawyer for Loan Settlement by DRT (2025)",
    description: "Find the best lawyer for loan settlement by DRT (Debt Recovery Tribunal) in India. Expert legal help for OTS negotiation, DRT defence, DRAT appeals and bank loan settlements.",
    keywords: [
        "best lawyer for loan settlement by DRT",
        "DRT loan settlement lawyer India",
        "Debt Recovery Tribunal loan settlement",
        "OTS negotiation DRT lawyer",
        "best DRT lawyer India 2025",
        "loan settlement during DRT proceedings",
        "DRT DRAT appeal lawyer",
        "loan settlement bank negotiation lawyer"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-loan-settlement-by-drt',
    },
};

export default function DRTLoanSettlementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyer for Loan Settlement by DRT in India 2025: A Complete Guide",
        "description": "Comprehensive guide on finding the best lawyer for loan settlement proceedings in the Debt Recovery Tribunal, covering OTS strategy, DRT defence, and DRAT appeals.",
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
                "name": "Best Lawyer for Loan Settlement by DRT",
                "item": "https://www.credsettle.com/best-lawyer-for-loan-settlement-by-drt"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-drt-settlement"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-drt-settlement"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <DRTLoanSettlementClient />
                        </div>
            <Footer />
        </div>
    );
}
