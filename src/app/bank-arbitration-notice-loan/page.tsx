import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BankArbitrationNoticeClient from './BankArbitrationNoticeClient';

export const metadata: Metadata = {
    title: 'Bank Arbitration Notice for Loan: Process, Rights & Legal Defense',
    description: 'Received a bank arbitration notice for an unpaid loan? Learn about the Arbitration Act 1996, your legal rights, how to challenge an arbitrator, and effective defense strategies to resolve debt.',
    keywords: [
        'bank arbitration notice loan',
        'arbitral award for loan default',
        'Arbitration Act 1996 bank recovery',
        'Section 21 notice arbitration',
        'challenging bank arbitrator',
        'ex-parte arbitral award',
        'loan settlement through arbitration',
        'arbitration process in India',
        'debt recovery arbitration defense'
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/bank-arbitration-notice-loan'
    }
};

export default function BankArbitrationNoticePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Bank Arbitration Notice for Loan: Process, Rights & Legal Defense",
        "description": "An exhaustive guide on understanding bank arbitration notices, the Arbitration Act 1996, and borrower defense strategies in India.",
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
                "name": "Bank Arbitration Notice for Loan",
                "item": "https://www.credsettle.com/bank-arbitration-notice-loan"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-arbitration"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-arbitration"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <BankArbitrationNoticeClient />
                        </div>
            <Footer />
        </div>
    );
}
