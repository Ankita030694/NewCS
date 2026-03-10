import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CanBankFileCaseClient from './CanBankFileCaseClient';

export const metadata: Metadata = {
    title: "Can Bank File Case for Personal Loan in India? | Legal Action & Recovery Rights",
    description: "Wondering if a bank can file a case for a personal loan default in India? Discover the legal recovery process, civil suits, Section 138 NI Act, and your rights as a borrower.",
    keywords: [
        "can bank file case for personal loan",
        "personal loan recovery process in India",
        "legal action for personal loan default",
        "can bank send bouncers for personal loan",
        "Section 138 NI Act for personal loan",
        "civil suit for personal loan recovery",
        "summary suit under order 37 for personal loan",
        "personal loan default consequences",
        "can bank attach assets for personal loan",
        "bank legal notice for personal loan default"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/can-bank-file-case-for-personal-loan',
    },
};

export default function CanBankFileCasePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Can Bank File Case for Personal Loan? A Complete Guide to Legal Recovery in India",
        "description": "An in-depth analysis of the legal steps banks take for personal loan recovery, including civil suits, criminal charges for cheque bounce, and borrower protections.",
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
        "datePublished": "2026-03-10",
        "dateModified": "2026-03-10"
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
                "name": "Can Bank File Case for Personal Loan",
                "item": "https://www.credsettle.com/can-bank-file-case-for-personal-loan"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-personal-loan-case"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-personal-loan-case"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <CanBankFileCaseClient />
            <Footer />
        </div>
    );
}
