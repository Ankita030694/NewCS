import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
    title: "How to Settle Multiple Personal Loans & Credit Cards at Once",
    description: "Overwhelmed by multiple personal loans and credit cards? Discover how CredSettle consolidates negotiations to settle multiple debts with one streamlined legal process.",
    alternates: {
        canonical: 'https://www.credsettle.com/settle-multiple-personal-loans',
    },
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Settle Multiple Personal Loans & Credit Cards at Once",
        "description": "Overwhelmed by multiple personal loans and credit cards? Discover how CredSettle consolidates negotiations to settle multiple debts with one streamlined legal process.",
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
                    id="article-schema-settle-multiple-personal-loans"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <ClientPage />
            </div>
            <Footer />
        </div>
    );
}
