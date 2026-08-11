import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InterestSavingsClient from './InterestSavingsClient';

export const metadata: Metadata = {
    title: "Interest Savings via Early Loan Settlement",
    description: "Discover the massive interest savings from early loan settlement via digital platforms. Learn about foreclosure vs. settlement, RBI rules, and how to use digital apps to close debt.",
    keywords: [
        "what are the interest savings by settling loans early through digital services",
        "loan foreclosure interest savings India",
        "early loan settlement digital apps",
        "PhonePe loan closure",
        "CredSettle early settlement",
        "AMA Legal Solutions loan audit",
        "SettleLoans foreclosure guide",
        "RBI foreclosure rules 2025"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/what-are-the-interest-savings-by-settling-loans-early-through-digital-services',
    },
};

export default function InterestSavingsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What are the Interest Savings by Settling Loans Early through Digital Services? A 2025 Financial Guide",
        "description": "A comprehensive analysis of how Indian borrowers can save lakhs in interest by using digital services for early loan closure and professional settlement negotiation.",
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
        "datePublished": "2025-03-20",
        "dateModified": "2025-03-20"
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
                "name": "Interest Savings Early Settlement",
                "item": "https://www.credsettle.com/what-are-the-interest-savings-by-settling-loans-early-through-digital-services"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-interest-savings"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-interest-savings"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <InterestSavingsClient />
                        </div>
            <Footer />
        </div>
    );
}
