import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BestLawyerLoanAgreementClient from './BestLawyerLoanAgreementClient';

export const metadata: Metadata = {
    title: "Best Lawyer for Loan Agreement Drafting & Vetting India | CredSettle",
    description: "Looking for the best lawyer for loan agreement? Get expert legal drafting and vetting services for business, personal, and secured loans. 100% legally sound & protected.",
    keywords: [
        "best lawyer for loan agreement",
        "loan agreement drafting lawyer India",
        "legal vetting of loan documents",
        "loan agreement review lawyer",
        "banking and finance lawyer India",
        "drafting business loan agreement",
        "personal loan agreement legal advice",
        "loan contract lawyer"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-loan-agreement',
    },
};

export default function BestLawyerLoanAgreementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyer for Loan Agreement: Expert Drafting and Vetting Services in India",
        "description": "Comprehensive guide on choosing the best lawyer for loan agreement drafting and vetting. Protect your interests with legally sound contracts.",
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
        "dateModified": "2025-03-01"
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
                "name": "Best Lawyer for Loan Agreement",
                "item": "https://www.credsettle.com/best-lawyer-for-loan-agreement"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-loan-agreement"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-loan-agreement"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <BestLawyerLoanAgreementClient />
            <Footer />
        </div>
    );
}
