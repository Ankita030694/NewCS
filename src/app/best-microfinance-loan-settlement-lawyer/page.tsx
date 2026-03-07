import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MicrofinanceLoanSettlementLawyerClient from './MicrofinanceLoanSettlementLawyerClient';

export const metadata: Metadata = {
    title: "Best Microfinance Loan Settlement Lawyer India 2025 | MFI Debt Relief",
    description: "Expert legal help for microfinance loan settlement in India. Navigate RBI 2024-2025 MFI guidelines, state-specific debt relief laws, and protection from coercive recovery.",
    keywords: [
        "best microfinance loan settlement lawyer India",
        "MFI debt relief legal assistance 2025",
        "RBI microfinance regulatory framework 2024",
        "Karnataka Micro Loan Coercive Action Bill 2025",
        "Bihar MFI Regulation Act 2026",
        "microfinance loan settlement process India",
        "legal protection from MFI harassment",
        "how to settle microfinance loan legally"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-microfinance-loan-settlement-lawyer',
    },
};

export default function MicrofinanceLoanSettlementLawyerPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Microfinance Loan Settlement in India: The 2025 Legal Handbook",
        "description": "Comprehensive guide to microfinance debt resolution in India, focusing on RBI compliance, state-level protections, and legal rights of rural and urban borrowers.",
        "image": "https://www.credsettle.com/images/mfi-settlement-lawyer.jpg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle Consumer Protection Wing"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": "2025-03-07",
        "dateModified": "2026-03-07"
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
                "name": "Best Microfinance Loan Settlement Lawyer",
                "item": "https://www.credsettle.com/best-microfinance-loan-settlement-lawyer"
            }
        ]
    };

    const organizationLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "CredSettle",
        "url": "https://www.credsettle.com",
        "logo": "https://www.credsettle.com/logo.png",
        "sameAs": [
            "https://www.facebook.com/credsettle",
            "https://www.twitter.com/credsettle",
            "https://www.linkedin.com/company/credsettle"
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-mfi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-mfi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-mfi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <MicrofinanceLoanSettlementLawyerClient />
            <Footer />
        </div>
    );
}