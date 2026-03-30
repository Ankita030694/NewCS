import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JointLoanSettlementClient from './JointLoanSettlementClient';

export const metadata: Metadata = {
    title: "Is it Possible to Settle a Joint Loan? Implications for Co-Borrowers | CredSettle",
    description: "Learn if you can settle a joint loan in India and the critical implications for co-borrowers. Discover joint liability rules, CIBIL impact, and 2025 RBI guidelines.",
    keywords: [
        "settle joint loan India",
        "joint loan settlement co-borrower implications",
        "joint and several liability India",
        "settling loan with co-applicant",
        "impact of joint loan settlement on credit score",
        "RBI rules for joint loan settlement 2025",
        "can one co-borrower settle a loan",
        "joint loan default consequences India"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/is-it-possible-to-settle-a-joint-loan-and-what-are-the-implications-for-co-borrowers',
    },
};

export default function JointLoanSettlementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Is it Possible to Settle a Joint Loan? Comprehensive Guide for Co-Borrowers in 2025",
        "description": "An in-depth exploration of joint loan settlement processes in India, covering legal liabilities, credit score risks, and expert negotiation strategies for co-applicants.",
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
        "datePublished": "2025-03-23",
        "dateModified": "2025-03-23"
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
                "name": "Joint Loan Settlement implications",
                "item": "https://www.credsettle.com/is-it-possible-to-settle-a-joint-loan-and-what-are-the-implications-for-co-borrowers"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-joint-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-joint-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <JointLoanSettlementClient />
            <Footer />
        </div>
    );
}
