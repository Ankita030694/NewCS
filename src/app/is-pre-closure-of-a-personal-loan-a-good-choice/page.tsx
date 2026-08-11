import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IsPreclosureGoodChoiceClient from './IsPreclosureGoodChoiceClient';

export const metadata: Metadata = {
    title: "Is Pre Closure of a Personal Loan Actually a Good Choice?",
    description: "Discover the hidden disadvantages of foreclosing a personal loan. Explore the pre closure vs investment mathematical comparison to protect your wealth.",
    keywords: [
        "should I pre close personal loan",
        "pre closure vs investment",
        "disadvantages of foreclosing personal loan",
        "personal loan foreclosure charges",
        "partial prepayment personal loan",
        "cibil score impact loan pre closure"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/is-pre-closure-of-a-personal-loan-a-good-choice',
    },
};

export default function IsPreclosureGoodChoicePage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Is Pre Closure of a Personal Loan Actually a Good Choice?",
        "description": "A deep dive into the financial implications of pre closing a personal loan vs investing the surplus cash, including hidden foreclosure penalties.",
        "image": "https://www.credsettle.com/images/pre-closure-vs-investment.jpg",
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
                "name": "Is Pre Closure of a Personal Loan Actually a Good Choice?",
                "item": "https://www.credsettle.com/is-pre-closure-of-a-personal-loan-a-good-choice"
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
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-preclosure"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-preclosure"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-preclosure"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <IsPreclosureGoodChoiceClient />
                        </div>
            <Footer />
        </div>
    );
}
