import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReceiveDocumentsClient from './ReceiveDocumentsClient';

export const metadata: Metadata = {
    title: "Receiving Original Documents After Loan Pre-Closure",
    description: "Learn the RBI rules regarding the return of original property documents after loan closure. Find out about the 30-day mandate and the Rs. 5000 per day penalty.",
    keywords: [
        "original property documents return time",
        "receive documents after loan pre-closure",
        "RBI penalty for delay in returning property papers",
        "loan closure property documents",
        "how to get property papers back from bank",
        "bank lost original property documents",
        "RBI guidelines on return of original property documents"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/receive-documents-after-loan-pre-closure',
    },
};

export default function ReceiveDocumentsPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Receiving Original Documents After Loan Pre-Closure: RBI Rules & Penalties",
        "description": "Learn the exact timeline and rules set by the Reserve Bank of India (RBI) for receiving your original property documents after a loan pre-closure or settlement.",
        "image": "https://www.credsettle.com/images/property-documents-return.jpg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle Legal Operations Wing"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": "2025-08-15",
        "dateModified": "2026-08-15"
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
                "name": "Receive Documents After Loan Pre-Closure",
                "item": "https://www.credsettle.com/receive-documents-after-loan-pre-closure"
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
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-docs"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-docs"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-docs"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <ReceiveDocumentsClient />
            <Footer />
        </div>
    );
}
