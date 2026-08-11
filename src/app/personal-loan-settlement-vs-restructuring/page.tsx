import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PersonalLoanClient from './PersonalLoanClient';

export const metadata: Metadata = {
    title: "Personal Loan Settlement vs Restructuring | Which is Better?",
    description: "Confused between personal loan settlement vs restructuring? Learn how to reduce personal loan EMI, understand the impact on CIBIL, and decide if you should settle or restructure your loan.",
    keywords: [
        "personal loan settlement vs restructuring",
        "reduce personal loan EMI",
        "should I settle or restructure my loan",
        "personal loan settlement",
        "loan restructuring meaning",
        "settle personal loan or reduce EMI"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/personal-loan-settlement-vs-restructuring',
    },
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Personal Loan Settlement vs Restructuring: A Complete Guide",
        "description": "Understand the critical differences between a personal loan settlement and loan restructuring to make the right financial choice for your debt relief.",
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
        "datePublished": "2025-03-16",
        "dateModified": "2025-03-16"
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
                "name": "Personal Loan Settlement vs Restructuring",
                "item": "https://www.credsettle.com/personal-loan-settlement-vs-restructuring"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-pl"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-pl"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <PersonalLoanClient />
            <Footer />
        </div>
    );
}
