import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
    title: "How to Reduce Your Personal Loan Outstanding Amount Legally",
    description: "Struggling with high EMIs? Learn how to legally reduce your personal loan outstanding principal and interest through RBI-compliant settlement programs.",
    alternates: {
        canonical: 'https://www.credsettle.com/reduce-personal-loan-outstanding-amount',
    },
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Reduce Your Personal Loan Outstanding Amount Legally",
        "description": "Struggling with high EMIs? Learn how to legally reduce your personal loan outstanding principal and interest through RBI-compliant settlement programs.",
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
                    id="article-schema-reduce-personal-loan-outstanding-amount"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <ClientPage />
            </div>
            <Footer />
        </div>
    );
}
