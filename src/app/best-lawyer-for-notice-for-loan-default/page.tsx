import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanDefaultNoticeClient from './LoanDefaultNoticeClient';

export const metadata: Metadata = {
    title: "Best Lawyer for Notice for Loan Default in India 2025 | CredSettle",
    description: "Received a loan default notice from a bank? Find the best lawyer for notice for loan default in India. Expert legal guidance on reply, SARFAESI rights, DRT defence and settlement options.",
    keywords: [
        "best lawyer for notice for loan default",
        "loan default notice reply lawyer India",
        "bank legal notice loan default",
        "SARFAESI notice lawyer",
        "loan default legal help India",
        "how to respond to loan default notice",
        "lawyer for bank notice reply",
        "loan default NPA lawyer 2025"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-notice-for-loan-default',
    },
};

export default function LoanDefaultNoticePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyer for Notice for Loan Default in India 2025: What to Do When the Bank Sends a Notice",
        "description": "Complete legal guide on responding to loan default notices in India, covering SARFAESI rights, legal reply drafting, DRT proceedings and settlement strategies.",
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
                "name": "Best Lawyer for Notice for Loan Default",
                "item": "https://www.credsettle.com/best-lawyer-for-notice-for-loan-default"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-loan-default"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-loan-default"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <LoanDefaultNoticeClient />
            <Footer />
        </div>
    );
}
