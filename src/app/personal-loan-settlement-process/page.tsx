import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
    title: "How Does Personal Loan Settlement Work? Step-by-Step Process",
    description: "Understand the complete personal loan settlement process in India. Learn how to negotiate with banks, legally settle your debt, and secure your NOC certificate.",
    alternates: {
        canonical: 'https://www.credsettle.com/personal-loan-settlement-process',
    },
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How Does Personal Loan Settlement Work? Step-by-Step Process",
        "description": "Understand the complete personal loan settlement process in India. Learn how to negotiate with banks, legally settle your debt, and secure your NOC certificate.",
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
                    id="article-schema-personal-loan-settlement-process"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <ClientPage />
            </div>
            <Footer />
        </div>
    );
}
