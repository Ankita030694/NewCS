import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CreditCardPartialPaymentClient from './CreditCardPartialPaymentClient';

export const metadata: Metadata = {
    title: "The Hidden Dangers of Credit Card Partial Payments",
    description: "Learn what happens when you pay a partial credit card bill. Discover the rules of credit card partial payments vs minimum due, and how they affect compounding interest.",
    keywords: [
        "credit card partial payment rules",
        "what happens if you pay partial credit card bill",
        "credit card minimum due vs partial payment",
        "stop credit card compounding interest",
        "settle credit card debt"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/credit-card-partial-payment',
    },
};

export default function CreditCardPartialPaymentPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "The Hidden Dangers of Credit Card Partial Payments",
        "description": "Exposing how banks apply partial payments to principal versus interest and explaining why structured EMI conversion or settlement is vastly superior.",
        "image": "https://www.credsettle.com/images/credit-card-debt.jpg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle Consumer Protection Wing"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": "2026-07-23",
        "dateModified": "2026-07-23"
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
                "name": "Credit Card Partial Payment",
                "item": "https://www.credsettle.com/credit-card-partial-payment"
            }
        ]
    };

    const organizationLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "CredSettle",
        "url": "https://www.credsettle.com",
        "logo": "https://www.credsettle.com/logo.png",
        "sameAs": [
            "https://www.facebook.com/credsettle",
            "https://www.twitter.com/credsettle",
            "https://www.linkedin.com/company/credsettle"
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-cc"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-cc"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-cc"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <CreditCardPartialPaymentClient />
            <Footer />
        </div>
    );
}
