import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Settle20LakhPersonalLoanClient from './Settle20LakhPersonalLoanClient';

export const metadata: Metadata = {
    title: "Settle Your ₹20 Lakh Personal Loan (Process & Negotiation)",
    description: "Have an outstanding personal loan of ₹20 Lakhs? High-value loan defaults require strategic legal defense. Learn how to negotiate a massive waiver today.",
    keywords: [
        "20 lakh personal loan settlement",
        "high value loan settlement India",
        "settle 20 lakh personal loan",
        "personal loan settlement process",
        "debt relief for high value loans"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/settle-20-lakh-personal-loan',
    },
};

export default function Settle20LakhPersonalLoanPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Settle Your ₹20 Lakh Personal Loan (Process & Negotiation)",
        "description": "Have an outstanding personal loan of ₹20 Lakhs? High-value loan defaults require strategic legal defense. Learn how to negotiate a massive waiver today.",
        "image": "https://www.credsettle.com/images/settle-20-lakh-loan.jpg",
        "author": {
            "@type": "Person",
            "name": "Ashish"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": "2026-08-17",
        "dateModified": "2026-08-17"
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
                "name": "Settle 20 Lakh Personal Loan",
                "item": "https://www.credsettle.com/settle-20-lakh-personal-loan"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
                <Script
                    id="article-schema-20lakh"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
                />
                <Script
                    id="breadcrumb-schema-20lakh"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
                />
                <Settle20LakhPersonalLoanClient />
            </div>
            <Footer />
        </div>
    );
}
