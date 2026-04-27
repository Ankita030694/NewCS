import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BankRecoveryCaseClient from './BankRecoveryCaseClient';

export const metadata: Metadata = {
    title: 'Bank Recovery Court Cases: Civil Suits & Borrower Rights',
    description: 'Facing a bank recovery case in civil court? Understand the difference between regular suits and Order 37 summary suits, learn about Leave to Defend, and discover your legal rights against recovery litigation.',
    keywords: [
        'bank recovery case in court',
        'civil suit for debt recovery India',
        'Order 37 CPC summary suit bank',
        'leave to defend bank case',
        'bank legal notice court process',
        'debt recovery tribunal DRT process',
        'attachment of property for bank loan',
        'borrower rights in recovery litigation',
        'SARFAESI vs civil suit'
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/bank-recovery-case-in-court'
    }
};

export default function BankRecoveryCasePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Bank Recovery Case in Court: Civil Suits, Order 37 & Borrower Rights",
        "description": "An exhaustive guide on navigating bank recovery cases in Indian civil courts, explaining legal procedures and borrower defenses.",
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
                "name": "Bank Recovery Case in Court",
                "item": "https://www.credsettle.com/bank-recovery-case-in-court"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-recovery-case"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-recovery-case"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <BankRecoveryCaseClient />
            <Footer />
        </div>
    );
}
