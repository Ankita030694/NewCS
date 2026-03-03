import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NoticeDefaultMortgageClient from './NoticeDefaultMortgageClient';

export const metadata: Metadata = {
    title: "Best Lawyer for Notice for Default on Mortgage or Loan Repayment in India 2025 | CredSettle",
    description: "Received a Section 13(2) SARFAESI notice or a loan default notice? Get expert legal help for mortgage default notices, loan repayment disputes, and SARFAESI defence in India.",
    keywords: [
        "best lawyer for notice for default on mortgage",
        "loan repayment default notice lawyer",
        "SARFAESI Section 13(2) notice reply lawyer",
        "mortgage default legal help India",
        "best lawyer for bank notice relief",
        "loan default legal notice reply",
        "mortgage repayment dispute lawyer",
        "DRT lawyer for mortgage default"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-notice-for-default-on-mortgage-or-loan-repayment',
    },
};

export default function NoticeDefaultMortgagePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyer for Notice for Default on Mortgage or Loan Repayment: A 2025 Legal Guide",
        "description": "Comprehensive guide on handling legal notices for mortgage or loan repayment defaults in India. Learn about SARFAESI Section 13(2) notices, your rights as a borrower, and how to draft an effective legal reply.",
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
                "name": "Notice for Default on Mortgage or Loan Repayment",
                "item": "https://www.credsettle.com/best-lawyer-for-notice-for-default-on-mortgage-or-loan-repayment"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-mortgage-notice"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-mortgage-notice"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <NoticeDefaultMortgageClient />
            <Footer />
        </div>
    );
}
