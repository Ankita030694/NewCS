import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ShouldISettleClient from './ShouldISettleClient';

export const metadata: Metadata = {
    title: "Should I Settle or Restructure My Personal Loan?",
    description: "Confused between loan settlement and EMI restructuring? Learn the difference, the impact on your CIBIL score, and which option provides better financial relief.",
    keywords: [
        "Should I settle or restructure my personal loan",
        "Personal loan settlement vs EMI restructuring",
        "reduce personal loan EMI without settlement",
        "CIBIL score impact of loan settlement",
        "loan restructuring India",
        "loan settlement process"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/should-i-settle-or-restructure-personal-loan',
    },
};

export default function ShouldISettlePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Should I Settle or Restructure My Personal Loan?",
        "description": "Confused between loan settlement and EMI restructuring? Learn the difference, the impact on your CIBIL score, and which option provides better financial relief.",
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
                "name": "Should I Settle or Restructure My Personal Loan?",
                "item": "https://www.credsettle.com/should-i-settle-or-restructure-personal-loan"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
                <Script
                    id="article-schema-should-i-settle"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Script
                    id="breadcrumb-schema-should-i-settle"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
                />
                <ShouldISettleClient />
            </div>
            <Footer />
        </div>
    );
}
