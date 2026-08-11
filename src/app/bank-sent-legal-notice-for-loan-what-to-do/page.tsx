import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LegalNoticeWhatToDoClient from './LegalNoticeWhatToDoClient';

export const metadata: Metadata = {
    title: "Bank Sent Legal Notice for Loan - What to Do?",
    description: "Received a legal notice for a bank loan? Learn what to do when a bank sends a legal notice and if a bank can file a case for a personal loan in India. Read expert legal advice for borrowers.",
    keywords: [
        "Bank sent legal notice for loan what to do",
        "Can bank file case for personal loan",
        "received legal notice for loan default India",
        "personal loan recovery process in India",
        "how to respond to bank legal notice",
        "Section 138 NI Act personal loan",
        "Summary Suit for money recovery",
        "bank legal action for unsecured loan",
        "can bank send bouncers for recovery",
        "legal rights of loan defaulters in India"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/bank-sent-legal-notice-for-loan-what-to-do',
    },
};

export default function LegalNoticeWhatToDoPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Bank Sent Legal Notice for Loan: Comprehensive Guide on What to Do and Legal Rights",
        "description": "An exhaustive guide on handling bank legal notices for personal loan defaults in India, explaining the civil suit process, Section 138, and borrower protections.",
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
                "name": "Bank Sent Legal Notice for Loan - What to Do",
                "item": "https://www.credsettle.com/bank-sent-legal-notice-for-loan-what-to-do"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-legal-notice"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-legal-notice"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <LegalNoticeWhatToDoClient />
                        </div>
            <Footer />
        </div>
    );
}
