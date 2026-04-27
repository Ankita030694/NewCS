import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChooseProviderClient from './ChooseProviderClient';

export const metadata: Metadata = {
    title: "Choose a Trustworthy Debt Settlement Provider (2025)",
    description: "Expert tips on selecting a legitimate debt settlement company in India. Check MCA registration, legal expertise, anti-harassment services, and fee transparency 2025.",
    keywords: [
        "how to choose a debt settlement provider",
        "trustworthy debt relief agency India",
        "selecting loan settlement company",
        "debt settlement agency checklist",
        "legit debt settlement companies India",
        "debt relief verification guide",
        "professional debt negotiators"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/how-to-choose-a-trustworthy-debt-settlement-provider',
    },
};

export default function ChooseProviderPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Choose a Trustworthy Debt Settlement Provider in India: The 2025 Definitive Checklist",
        "description": "A comprehensive guide for borrowers to evaluate and choose a reliable debt settlement partner in the Indian financial market.",
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
        "datePublished": "2025-03-16",
        "dateModified": "2025-03-16"
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
                "name": "How to Choose a Trustworthy Debt Settlement Provider",
                "item": "https://www.credsettle.com/how-to-choose-a-trustworthy-debt-settlement-provider"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-choose-provider"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-choose-provider"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <ChooseProviderClient />
            <Footer />
        </div>
    );
}
