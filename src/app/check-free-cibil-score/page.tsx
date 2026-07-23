import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CheckFreeCibilScoreClient from './CheckFreeCibilScoreClient';

export const metadata: Metadata = {
    title: "Check Free CIBIL Score Official | Free Credit Report RBI Mandate",
    description: "Learn how to check your free CIBIL score accurately without spam. Get your RBI mandated free annual credit report directly from official bureaus without data harvesting.",
    keywords: [
        "check free CIBIL score official",
        "free credit report RBI mandate",
        "check credit score without spam",
        "official CIBIL score download",
        "RBI free credit score guidelines"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/check-free-cibil-score',
    },
};

export default function CheckFreeCibilScorePage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Check Your Free CIBIL Score Accurately (Without Spam)",
        "description": "A comprehensive guide on obtaining your RBI mandated free annual credit report directly from official credit bureaus, avoiding third-party data harvesting.",
        "image": "https://www.credsettle.com/images/check-free-cibil-score.jpg",
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
                "name": "Check Free CIBIL Score",
                "item": "https://www.credsettle.com/check-free-cibil-score"
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
                id="article-schema-cibil"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-cibil"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-cibil"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <CheckFreeCibilScoreClient />
            <Footer />
        </div>
    );
}
