import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
    title: "How to Request a Personal Loan Settlement Offer from Banks",
    description: "Get expert tips on how to approach your bank for a personal loan settlement offer. Learn how to draft the request, negotiate terms, and get debt relief.",
    alternates: {
        canonical: 'https://www.credsettle.com/request-personal-loan-settlement-offer',
    },
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Request a Personal Loan Settlement Offer from Banks",
        "description": "Get expert tips on how to approach your bank for a personal loan settlement offer. Learn how to draft the request, negotiate terms, and get debt relief.",
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
        }
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
                <Script
                    id="article-schema-request-personal-loan-settlement-offer"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <ClientPage />
            </div>
            <Footer />
        </div>
    );
}
