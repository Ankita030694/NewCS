import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
    title: "Personal Loan Settlement RBI Guidelines 2026: Know Your Rights",
    description: "Is loan settlement legal? Read the latest RBI guidelines on personal loan settlement, NPA classification, and your legal rights against recovery harassment.",
    alternates: {
        canonical: 'https://www.credsettle.com/personal-loan-settlement-rbi-guidelines',
    },
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Personal Loan Settlement RBI Guidelines 2026: Know Your Rights",
        "description": "Is loan settlement legal? Read the latest RBI guidelines on personal loan settlement, NPA classification, and your legal rights against recovery harassment.",
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
                    id="article-schema-personal-loan-settlement-rbi-guidelines"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <ClientPage />
            </div>
            <Footer />
        </div>
    );
}
