import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BestNbfcLoanSettlementLawyerClient from './BestNbfcLoanSettlementLawyerClient';

export const metadata: Metadata = {
    title: "Best NBFC Loan Settlement Lawyer in India (2025)",
    description: "Connect with the best NBFC loan settlement lawyers in India. Expert legal help to settle your NBFC loans, stop harassment, and achieve a fair one-time settlement (OTS).",
    keywords: [
        "best NBFC loan settlement lawyer",
        "NBFC loan settlement legal help India",
        "lawyer for NBFC debt relief",
        "stop NBFC harassment legal",
        "NBFC one time settlement OTS lawyer",
        "legal expert for NBFC loans",
        "borrower rights against NBFC harassment",
        "NBFC loan settlement process India"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-nbfc-loan-settlement-lawyer',
    },
};

export default function BestNbfcLoanSettlementLawyerPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best NBFC Loan Settlement Lawyer: Expert Legal Guide to Debt Relief in 2025",
        "description": "Comprehensive guide on how professional loan settlement lawyers help borrowers navigate NBFC debt, negotiate fair settlements, and protect their legal rights in India.",
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
        "datePublished": "2025-03-06",
        "dateModified": "2026-03-06"
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
                "name": "Best NBFC Loan Settlement Lawyer",
                "item": "https://www.credsettle.com/best-nbfc-loan-settlement-lawyer"
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
                id="article-schema-nbfc-lawyer"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-nbfc-lawyer"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-nbfc-lawyer"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <BestNbfcLoanSettlementLawyerClient />
            <Footer />
        </div>
    );
}
