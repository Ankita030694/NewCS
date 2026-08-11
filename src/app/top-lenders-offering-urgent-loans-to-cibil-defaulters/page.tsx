import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TopLendersUrgentLoansClient from './TopLendersUrgentLoansClient';

export const metadata: Metadata = {
    title: "Top Lenders Offering Urgent Loans to CIBIL Defaulters (2026)",
    description: "Discover regulated NBFCs and digital platforms providing urgent loans for CIBIL defaulters using alternate credit scoring. Avoid loan sharks and secure instant cash.",
    keywords: [
        "urgent loan for CIBIL defaulters",
        "NBFC loan for bad credit",
        "instant cash loan low CIBIL",
        "emergency funds bad credit history",
        "loans without CIBIL check India",
        "alternate credit scoring lenders"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/top-lenders-offering-urgent-loans-to-cibil-defaulters',
    },
};

export default function TopLendersUrgentLoansPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Top Lenders Offering Urgent Loans to CIBIL Defaulters",
        "description": "Comprehensive guide highlighting regulated NBFCs and digital lenders providing emergency funds to individuals with a default history through cash-flow based underwriting.",
        "image": "https://www.credsettle.com/images/urgent-loan-cibil-defaulters.jpg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle Financial Advisory"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": "2026-07-30",
        "dateModified": "2026-07-30"
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
                "name": "Urgent Loans for CIBIL Defaulters",
                "item": "https://www.credsettle.com/top-lenders-offering-urgent-loans-to-cibil-defaulters"
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
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-urgent-loans"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-urgent-loans"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-urgent-loans"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <TopLendersUrgentLoansClient />
                        </div>
            <Footer />
        </div>
    );
}
