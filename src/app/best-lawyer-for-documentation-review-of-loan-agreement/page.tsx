import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanAgreementDocReviewClient from './LoanAgreementDocReviewClient';

export const metadata: Metadata = {
    title: "Best Lawyer for Loan Agreement Document Review (2025)",
    description: "Find the best lawyer for documentation review of loan agreements in India. Expert legal analysis of hidden clauses, arbitration terms, interest conditions, and RBI compliance checks before signing.",
    keywords: [
        "best lawyer for documentation review loan agreement",
        "loan agreement review lawyer India",
        "legal review of loan documents India",
        "loan agreement clause analysis lawyer",
        "hidden clauses loan agreement India",
        "RBI compliance loan agreement lawyer",
        "loan contract review specialist 2025",
        "loan agreement arbitration clause lawyer"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-documentation-review-of-loan-agreement',
    },
};

export default function LoanAgreementDocReviewPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyer for Documentation Review of Loan Agreement: A Complete 2025 Guide to Protecting Your Rights",
        "description": "A comprehensive guide on getting expert legal review of loan agreements in India, covering identification of predatory clauses, RBI guideline compliance, arbitration terms, and borrower protection.",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "author": { "@type": "Organization", "name": "CredSettle" },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": { "@type": "ImageObject", "url": "https://www.credsettle.com/credsettle-logo.svg" }
        },
        "datePublished": "2025-03-02",
        "dateModified": "2025-03-02"
    };

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credsettle.com/" },
            { "@type": "ListItem", "position": 2, "name": "Best Lawyer for Documentation Review of Loan Agreement", "item": "https://www.credsettle.com/best-lawyer-for-documentation-review-of-loan-agreement" }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script id="article-schema-loan-agreement-review" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Script id="breadcrumb-schema-loan-agreement-review" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
            <LoanAgreementDocReviewClient />
            <Footer />
        </div>
    );
}
