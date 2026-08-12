import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
    title: "Send Legal Notice to Bank for Recovery Agent Harassment",
    description: "Facing abuse from recovery agents? Learn how to send a legal notice to your bank for personal loan harassment and protect your rights under RBI guidelines.",
    alternates: {
        canonical: 'https://www.credsettle.com/legal-notice-bank-personal-loan-harassment',
    },
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Send Legal Notice to Bank for Recovery Agent Harassment",
        "description": "Facing abuse from recovery agents? Learn how to send a legal notice to your bank for personal loan harassment and protect your rights under RBI guidelines.",
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
                    id="article-schema-legal-notice-bank-personal-loan-harassment"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <ClientPage />
            </div>
            <Footer />
        </div>
    );
}
