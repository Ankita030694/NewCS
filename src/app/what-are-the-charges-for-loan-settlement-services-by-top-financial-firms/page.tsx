import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChargesClient from './ChargesClient';

export const metadata: Metadata = {
    title: "Loan Settlement Charges & Fees 2026: Compare Top Firms",
    description: "Compare loan settlement fees and charges across top debt relief firms in India. Learn fee models, hidden costs, and how to maximize your OTS savings.",
    keywords: [
        "charges for loan settlement services by top financial firms",
        "loan settlement company fee comparison",
        "credsettle.com fees",
        "settleloans.in charges",
        "how much does a debt settlement company charge",
        "loan settlement agency fees India",
        "affordable debt relief agencies"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/what-are-the-charges-for-loan-settlement-services-by-top-financial-firms',
    },
};

export default function ChargesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Loan Settlement Charges & Fees 2026: Compare Top Firms",
        "description": "An exhaustive manual detailing exactly how much premier financial and legal debt settlement firms charge, structured around specific industry comparisons and cost-to-benefit calculations.",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "author": {
            "@type": "Person",
            "name": "Ashish Jhangra",
            "url": "https://www.credsettle.com/author/ashish-jhangra",
            "image": "https://www.credsettle.com/ashishjhangra.png",
            "sameAs": [
                "https://www.linkedin.com/in/ashish-jhangra-ab1a54127/"
            ],
            "jobTitle": "Legal & Debt Resolution Professional",
            "worksFor": {
                "@type": "Organization",
                "name": "CredSettle",
                "url": "https://www.credsettle.com"
            }
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": "2025-03-18T08:00:00+05:30",
        "dateModified": new Date().toISOString()
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
                "name": "Charges By Top Firms",
                "item": "https://www.credsettle.com/what-are-the-charges-for-loan-settlement-services-by-top-financial-firms"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-charges"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-charges"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <ChargesClient />
                        </div>
            <Footer />
        </div>
    );
}
