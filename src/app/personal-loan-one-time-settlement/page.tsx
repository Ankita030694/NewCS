import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
    title: "Personal Loan One Time Settlement (OTS) Calculator & Guide",
    description: "Looking for a one-time settlement (OTS) for your personal loan? Learn how to negotiate up to 50% waiver with banks and legally close your loan account.",
    alternates: {
        canonical: 'https://www.credsettle.com/personal-loan-one-time-settlement',
    },
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Personal Loan One Time Settlement (OTS) Calculator & Guide",
        "description": "Looking for a one-time settlement (OTS) for your personal loan? Learn how to negotiate up to 50% waiver with banks and legally close your loan account.",
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
                    id="article-schema-personal-loan-one-time-settlement"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <ClientPage />
            </div>
            <Footer />
        </div>
    );
}
