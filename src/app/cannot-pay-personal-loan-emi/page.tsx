import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CannotPayPersonalLoanEmiClient from './CannotPayPersonalLoanEmiClient';

export const metadata: Metadata = {
    title: "I Cannot Pay My Personal Loan EMI: What Should I Do?",
    description: "Unable to pay your personal loan EMI? Discover your legal rights, how to stop recovery agent harassment, and how to negotiate a debt settlement with your bank.",
    keywords: [
        "Cannot afford personal loan EMI",
        "no money to pay personal loan",
        "financial problems paying loan",
        "I cannot pay my personal loan EMI what should I do",
        "personal loan default consequences",
        "stop recovery agent harassment",
        "personal loan settlement options"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/cannot-pay-personal-loan-emi',
    },
};

export default function CannotPayPersonalLoanEmiPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "I Cannot Pay My Personal Loan EMI: What Should I Do?",
        "description": "Unable to pay your personal loan EMI? Discover your legal rights, how to stop recovery agent harassment, and how to negotiate a debt settlement with your bank.",
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
        "datePublished": "2026-08-12",
        "dateModified": "2026-08-12"
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
                "name": "I Cannot Pay My Personal Loan EMI",
                "item": "https://www.credsettle.com/cannot-pay-personal-loan-emi"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
                <Script
                    id="article-schema-cannot-pay-emi"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Script
                    id="breadcrumb-schema-cannot-pay-emi"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
                />
                <CannotPayPersonalLoanEmiClient />
            </div>
            <Footer />
        </div>
    );
}
