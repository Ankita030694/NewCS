import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ExperianCreditHistoryClient from './ExperianCreditHistoryClient';

export const metadata: Metadata = {
    title: "Experian Credit History Check vs CIBIL | Why Banks Reject Loans",
    description: "Understand the key differences between CIBIL and Experian credit history. Find out why banks reject loans when your Experian score is lower than your CIBIL score.",
    keywords: [
        "Experian credit history check",
        "difference between CIBIL and Experian",
        "why is Experian score lower than CIBIL",
        "Experian credit report analysis",
        "CIBIL vs Experian which is better",
        "how to improve Experian credit score",
        "bank loan rejected due to low Experian",
        "check Experian credit history online"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/experian-credit-history',
    },
};

export default function ExperianCreditHistoryPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Understanding Your Experian Credit History vs CIBIL: The Bank Risk Algorithm",
        "description": "Borrowers get confused when their bank rejects a loan because their Experian score is low, even though their CIBIL is fine. This page explains the multi-bureau system in India.",
        "image": "https://www.credsettle.com/images/experian-vs-cibil.jpg",
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
        "datePublished": "2026-07-23",
        "dateModified": "2026-07-23"
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
                "name": "Experian Credit History vs CIBIL",
                "item": "https://www.credsettle.com/experian-credit-history"
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
                id="article-schema-experian"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-experian"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-experian"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <ExperianCreditHistoryClient />
            <Footer />
        </div>
    );
}
