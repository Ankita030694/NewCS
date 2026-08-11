import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhyEmiPaymentKeepFailingClient from './WhyEmiPaymentKeepFailingClient';

export const metadata: Metadata = {
    title: "Why Does My EMI Payment Keep Failing? (2025 Guide)",
    description: "Diagnose chronic EMI failures, signature mismatches, and defunct NACH mandates. Learn how to switch payment modes without triggering CIBIL drops or accidental defaults.",
    keywords: [
        "why EMI payment keeps failing",
        "NACH mandate failure reasons",
        "auto debit bounce issues",
        "EMI auto debit failed sufficient balance",
        "signature mismatch loan default",
        "how to change EMI payment method online",
        "fix NACH mandate rejection"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/why-emi-payment-keep-failing',
    },
};

export default function WhyEmiPaymentKeepFailingPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Why Does My EMI Payment Keep Failing? (2025 Guide)",
        "description": "Diagnose chronic EMI failures, signature mismatches, and defunct NACH mandates. Learn how to switch payment modes without triggering CIBIL drops.",
        "image": "https://www.credsettle.com/images/emi-payment-failure.jpg",
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
                "name": "Why EMI Payment Keeps Failing",
                "item": "https://www.credsettle.com/why-emi-payment-keep-failing"
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
                id="article-schema-emi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-emi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-emi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <WhyEmiPaymentKeepFailingClient />
                        </div>
            <Footer />
        </div>
    );
}
