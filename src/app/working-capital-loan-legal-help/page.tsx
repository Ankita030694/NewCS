import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WorkingCapitalLoanLegalHelpClient from './WorkingCapitalLoanLegalHelpClient';

export const metadata: Metadata = {
    title: "Working Capital Loan Legal Help India 2025 | Regulatory & Documentation Advisory",
    description: "Expert legal assistance for working capital loans in India. Navigate RBI Master Circulars, Cash Credit, Overdraft facilities, and GST-linked financing compliance for 2025.",
    keywords: [
        "working capital loan legal help India",
        "RBI master circular on loans 2025",
        "cash credit vs overdraft legal analysis",
        "working capital documentation requirements",
        "GST-linked business financing 2025",
        "hypothecation of moveable assets legal",
        "working capital loan dispute resolution",
        "CERSAI registration for business loans"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/working-capital-loan-legal-help',
    },
};

export default function WorkingCapitalLoanLegalHelpPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Working Capital Loan Legal Help: The 2025 Guide to Business Liquidity in India",
        "description": "An in-depth legal analysis of working capital financing in India, focusing on regulatory compliance, security documentation, and dispute resolution for 2025.",
        "image": "https://www.credsettle.com/images/working-capital-legal.jpg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle Legal Team"
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
                "name": "Working Capital Loan Legal Help",
                "item": "https://www.credsettle.com/working-capital-loan-legal-help"
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
                id="article-schema-wc"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-wc"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-wc"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <WorkingCapitalLoanLegalHelpClient />
            <Footer />
        </div>
    );
}
