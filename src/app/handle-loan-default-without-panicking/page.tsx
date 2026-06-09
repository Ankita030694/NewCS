import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HandleLoanDefaultClient from './HandleLoanDefaultClient';

export const metadata: Metadata = {
    title: 'How to Handle Loan Default Without Panicking | CredSettle',
    description: "Are you facing a loan default? Learn how to handle loan default without panicking. Explore RBI guidelines, your legal rights, and actionable steps to resolve debt in 2025.",
    keywords: [
        "handle loan default without panicking",
        "loan default consequences India",
        "RBI guidelines for recovery agents 2025",
        "borrower rights in India",
        "what happens if I default on a loan",
        "loan settlement process India",
        "stopping recovery agent harassment",
        "legal notice for loan default response"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/handle-loan-default-without-panicking',
    },
};

export default function HandleLoanDefaultPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Handle Loan Default Without Panicking: The Ultimate 2025 Guide",
        "description": "A comprehensive manual for Indian borrowers on managing loan defaults, understanding legal protections, and reaching settlements without losing peace of mind.",
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
        "datePublished": "2025-03-28",
        "dateModified": "2025-03-28"
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
                "name": "Handle Loan Default Without Panicking",
                "item": "https://www.credsettle.com/handle-loan-default-without-panicking"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-handle-default"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-handle-default"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <HandleLoanDefaultClient />
            <Footer />
        </div>
    );
}
