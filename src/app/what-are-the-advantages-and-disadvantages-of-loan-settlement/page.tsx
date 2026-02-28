import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdvantagesDisadvantagesClient from './AdvantagesDisadvantagesClient';

export const metadata: Metadata = {
    title: "Advantages and Disadvantages of Loan Settlement in India 2025 | CredSettle",
    description: "Explore the comprehensive pros and cons of loan settlement in India. Understand RBI rules for 2025, impact on CIBIL score, and expert debt relief strategies.",
    keywords: [
        "advantages and disadvantages of loan settlement",
        "pros and cons of debt settlement India",
        "is loan settlement good or bad",
        "loan settlement impact on CIBIL score",
        "RBI 2025 loan settlement guidelines",
        "benefits of one time settlement",
        "disadvantages of settling a loan",
        "loan settlement vs recovery agent harassment"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/what-are-the-advantages-and-disadvantages-of-loan-settlement',
    },
};

export default function AdvantagesDisadvantagesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What are the Advantages and Disadvantages of Loan Settlement? Full 2025 Guide",
        "description": "An exhaustive analysis of the benefits and risks associated with loan settlement in India, focusing on credit score impact and RBI borrower protection rules.",
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
        "datePublished": "2025-02-15",
        "dateModified": "2025-02-28"
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
                "name": "Advantages and Disadvantages of Loan Settlement",
                "item": "https://www.credsettle.com/what-are-the-advantages-and-disadvantages-of-loan-settlement"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen font-sans">
            <Navbar />
            <Script
                id="article-schema-adv-dis"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-adv-dis"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <AdvantagesDisadvantagesClient />
            <Footer />
        </div>
    );
}
