import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BestBusinessLoanClient from './BestBusinessLoanClient';

export const metadata: Metadata = {
    title: "Best Lawyer for Business Loan Settlement in India",
    description: "Connect with the best lawyer for business loan settlement. Expert legal aid for MSMEs, SARFAESI defense, and RBI 2026 compliant debt resolution. Protect your company today.",
    keywords: [
        "best lawyer for business loan settlement",
        "business loan settlement lawyer India",
        "MSME debt settlement legal help",
        "SARFAESI act business loan defense",
        "RBI business loan settlement rules 2026",
        "commercial debt resolution expert"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-business-loan-settlement',
    },
};

export default function BestBusinessLoanPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyer for Business Loan Settlement in India: 2026 Legal Masterclass",
        "description": "Comprehensive guide to finding the best business debt lawyers, understanding MSME rights, and leveraging RBI 2026 rules for loan compromise.",
        "author": { "@type": "Organization", "name": "CredSettle" },
        "datePublished": "2026-02-28",
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": { "@type": "ImageObject", "url": "https://www.credsettle.com/logo.png" }
        }
    };

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credsettle.com/" },
            { "@type": "ListItem", "position": 2, "name": "Best Lawyer for Business Loan Settlement", "item": "https://www.credsettle.com/best-lawyer-for-business-loan-settlement" }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
            <BestBusinessLoanClient />
            <Footer />
        </div>
    );
}
