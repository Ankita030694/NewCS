import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanPartialPaymentClient from './LoanPartialPaymentClient';

export const metadata: Metadata = {
    title: "Loan Partial Payment Rules: When Does It Make Financial Sense?",
    description: "Strategic guide on personal loan part payment rules, avoiding 2-3% part-payment fees, and navigating bank caps on partial prepayments.",
    keywords: [
        "personal loan part payment rules",
        "is it good to make partial payment on loan",
        "loan part payment calculator",
        "bank caps on partial prepayments",
        "loan part-payment fees"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/loan-partial-payment',
    },
};

export default function LoanPartialPaymentPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Loan Partial Payment Rules: When Does It Make Financial Sense?",
        "description": "Strategic guide on personal loan part payment rules, avoiding 2-3% part-payment fees, and navigating bank caps on partial prepayments.",
        "image": "https://www.credsettle.com/images/loan-partial-payment.jpg",
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
        "datePublished": "2026-07-23",
        "dateModified": "2026-07-23"
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
                "name": "Loan Partial Payment Rules",
                "item": "https://www.credsettle.com/loan-partial-payment"
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
                id="article-schema-partial-payment"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-partial-payment"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-partial-payment"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <LoanPartialPaymentClient />
                        </div>
            <Footer />
        </div>
    );
}
