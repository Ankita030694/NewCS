import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanAgreementDraftingReviewClient from './LoanAgreementDraftingReviewClient';

export const metadata: Metadata = {
    title: "Loan Agreement Drafting & Review Services in India",
    description: "Professional loan agreement drafting and review services in India. Ensure your loan contracts are legally binding, fair, and RBI compliant. Book a legal review today.",
    keywords: [
        "loan agreement drafting review",
        "legal review of loan agreement India",
        "loan contract drafting lawyer",
        "best lawyer for loan agreement review",
        "RBI compliant loan agreement",
        "loan agreement legal checklist",
        "importance of loan agreement review",
        "drafting business loan agreement"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/loan-agreement-drafting-review',
    },
};

export default function LoanAgreementDraftingReviewPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Professional Loan Agreement Drafting & Review: A Comprehensive 2025 Legal Guide",
        "description": "An in-depth guide on the importance of professional legal drafting and review for loan agreements in India, ensuring protection against unfair terms and regulatory compliance.",
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
                "name": "Loan Agreement Drafting & Review",
                "item": "https://www.credsettle.com/loan-agreement-drafting-review"
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
                id="article-schema-loan-drafting"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-loan-drafting"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-loan-drafting"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <LoanAgreementDraftingReviewClient />
                        </div>
            <Footer />
        </div>
    );
}
