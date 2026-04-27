import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BestLawyerLoanMortgageClient from './BestLawyerLoanMortgageClient';

export const metadata: Metadata = {
    title: "Best Lawyer for Loan and Mortgage Agreements India",
    description: "Hire the absolute best lawyer for loan and mortgage agreements in India. We provide expert drafting, rigorous legal review, SARFAESI defense, and property due diligence to protect your financial assets.",
    keywords: [
        "best lawyer for loan and mortgage agreements",
        "loan agreement drafting lawyer",
        "mortgage lawyer near me",
        "SARFAESI act lawyer",
        "property due diligence lawyer",
        "DRT lawyer for loan disputes",
        "commercial loan agreement review",
        "banking lawyer in India"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-loan-and-mortgage-agreements',
    },
};

export default function BestLawyerLoanMortgagePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyer for Loan and Mortgage Agreements: A Comprehensive 2025 Legal Guide",
        "description": "An exhaustive analysis of why hiring specialized legal counsel for drafting and reviewing banking contracts is the ultimate defense against predatory lending and illegal foreclosures in India.",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle Legal Advisors"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": "2025-02-10",
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
                "name": "Best Lawyer for Loan and Mortgage Agreements",
                "item": "https://www.credsettle.com/best-lawyer-for-loan-and-mortgage-agreements"
            }
        ]
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "CredSettle",
        "url": "https://www.credsettle.com",
        "logo": "https://www.credsettle.com/credsettle-logo.svg",
        "sameAs": [
            "https://www.facebook.com/credsettle",
            "https://www.twitter.com/credsettle",
            "https://www.linkedin.com/company/credsettle"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9999-999999",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": "English"
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-mortgage-law"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-mortgage-law"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-mortgage-law"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <BestLawyerLoanMortgageClient />
            <Footer />
        </div>
    );
}
