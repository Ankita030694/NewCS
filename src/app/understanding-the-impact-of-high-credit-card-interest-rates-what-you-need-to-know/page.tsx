import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UnderstandingCCInterestClient from './UnderstandingCCInterestClient';

export const metadata: Metadata = {
    title: "Understanding the Impact of High Credit Card Interest Rates: What You Need to Know",
    description: "Consumers carry forward credit card balances paying the Minimum Due, blind to the 36-42% APR compounding daily. Learn credit card interest rate calculation and how to escape credit card debt.",
    keywords: [
        "credit card interest rate calculation",
        "credit card APR explained",
        "how to escape credit card debt",
        "minimum due trap",
        "balance transfer strategies",
        "personal loan for credit card debt"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/understanding-the-impact-of-high-credit-card-interest-rates-what-you-need-to-know',
    },
};

export default function UnderstandingCCInterestPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Understanding the Impact of High Credit Card Interest Rates: What You Need to Know",
        "description": "Break down the brutal math of high credit card interest and discover actionable strategies like balance transfers and personal loans to escape the debt trap.",
        "image": "https://www.credsettle.com/images/credit-card-interest.jpg",
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
        "datePublished": "2026-07-30",
        "dateModified": "2026-07-30"
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
                "name": "Understanding Credit Card Interest",
                "item": "https://www.credsettle.com/understanding-the-impact-of-high-credit-card-interest-rates-what-you-need-to-know"
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
            <UnderstandingCCInterestClient />
                        </div>
            <Footer />
        </div>
    );
}
