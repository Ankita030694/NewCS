import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LawyerClient from './LawyerClient';

export const metadata: Metadata = {
    title: "Personal Loan Settlement Lawyer Near Me | CredSettle Advocate",
    description: "Facing a Section 138 cheque bounce or civil recovery notice? A personal loan settlement lawyer near me can neutralize bank threats and negotiate watertight settlements.",
    keywords: [
        "personal loan settlement lawyer near me",
        "advocate for bank loan default",
        "legal help for loan settlement",
        "Section 138 cheque bounce defense",
        "civil recovery notice advocate",
        "bank lawyer negotiation expert",
        "legal representation for settlement"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/personal-loan-settlement-lawyer',
    },
};

export default function LawyerPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Why You Need a Personal Loan Settlement Lawyer for Bank Defaults",
        "description": "Discover why legal representation is crucial when banks issue Section 138 notices and how an advocate for bank loan default can secure a watertight settlement.",
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
        "datePublished": "2025-08-11",
        "dateModified": "2025-08-11"
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
                "name": "Personal Loan Settlement Lawyer",
                "item": "https://www.credsettle.com/personal-loan-settlement-lawyer"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-lawyer"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-lawyer"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <LawyerClient />
                        </div>
            <Footer />
        </div>
    );
}
