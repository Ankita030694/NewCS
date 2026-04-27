import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IsLoanSettlementGoodOptionBorrowersClient from './IsLoanSettlementGoodOptionBorrowersClient';

export const metadata: Metadata = {
    title: "Is Loan Settlement a Good Option for Borrowers?",
    description: "Expert analysis on whether loan settlement is a good option for borrowers in India. Explore pros, cons, CIBIL impact, and legal rights under RBI 2025 guidelines.",
    keywords: [
        "is loan settlement a good option for borrowers",
        "loan settlement pros and cons India",
        "benefits of loan settlement for borrowers",
        "disadvantages of loan settlement",
        "loan settlement vs restructuring",
        "RBI loan settlement rules 2025",
        "CIBIL score impact of settlement",
        "is it worth settling a loan"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/is-loan-settlement-a-good-option-for-borrowers',
    },
};

export default function IsLoanSettlementGoodOptionBorrowersPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Is Loan Settlement a Good Option for Borrowers? A Comprehensive 2025 Guide",
        "description": "An in-depth analysis of whether loan settlement is a viable path for debt relief in India, weighing its immediate benefits against long-term credit consequences.",
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
        "datePublished": "2025-03-12",
        "dateModified": "2025-03-12"
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
                "name": "Is Loan Settlement a Good Option for Borrowers",
                "item": "https://www.credsettle.com/is-loan-settlement-a-good-option-for-borrowers"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-borrowers-option"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-borrowers-option"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <IsLoanSettlementGoodOptionBorrowersClient />
            <Footer />
        </div>
    );
}
