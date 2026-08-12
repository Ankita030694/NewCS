import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
    title: "How to Negotiate Personal Loan Settlement with Banks & NBFCs",
    description: "Master the art of personal loan negotiation. Learn proven strategies to talk to bank managers, stop harassment, and legally negotiate a lower payoff amount.",
    alternates: {
        canonical: 'https://www.credsettle.com/negotiate-personal-loan-settlement',
    },
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Negotiate Personal Loan Settlement with Banks & NBFCs",
        "description": "Master the art of personal loan negotiation. Learn proven strategies to talk to bank managers, stop harassment, and legally negotiate a lower payoff amount.",
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
                    id="article-schema-negotiate-personal-loan-settlement"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <ClientPage />
            </div>
            <Footer />
        </div>
    );
}
