import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LostJobClient from './LostJobClient';

export const metadata: Metadata = {
    title: "Lost Job & Cannot Pay Personal Loan? Legal Steps to Take",
    description: "Lost your job and can't pay your personal loan EMI? Learn how to handle bank recovery agents, protect your assets, and legally negotiate a debt settlement.",
    keywords: [
        "I lost my job and cannot pay my personal loan",
        "job loss loan default",
        "unemployed cannot pay EMI",
        "loan settlement after losing job",
        "how to deal with collection calls",
        "protect assets during unemployment",
        "negotiate debt settlement India"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/lost-job-cannot-pay-personal-loan',
    },
};

export default function LostJobPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Lost Job & Cannot Pay Personal Loan? Legal Steps to Take",
        "description": "Lost your job and can't pay your personal loan EMI? Learn how to handle bank recovery agents, protect your assets, and legally negotiate a debt settlement.",
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
                "name": "Lost Job Cannot Pay Personal Loan",
                "item": "https://www.credsettle.com/lost-job-cannot-pay-personal-loan"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-lost-job"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-lost-job"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <LostJobClient />
            </div>
            <Footer />
        </div>
    );
}
