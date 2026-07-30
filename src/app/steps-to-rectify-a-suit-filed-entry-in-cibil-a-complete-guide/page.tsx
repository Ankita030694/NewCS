import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StepsToRectifyASuitFiledEntryInCibilACompleteGuideClient from './StepsToRectifyASuitFiledEntryInCibilACompleteGuideClient';

export const metadata: Metadata = {
    title: "Steps to Rectify a Suit Filed Entry in CIBIL: A Complete Guide",
    description: "A 'Suit Filed' entry in CIBIL is a financial death sentence, completely blocking future loans. Learn the legal steps to force the bank to remove the 'Suit Filed' tag post-settlement.",
    keywords: [
        "suit filed CIBIL meaning",
        "how to remove suit filed from CIBIL",
        "CIBIL dispute for suit filed"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/steps-to-rectify-a-suit-filed-entry-in-cibil-a-complete-guide',
    },
};

export default function StepsToRectifyASuitFiledEntryInCibilPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Steps to Rectify a Suit Filed Entry in CIBIL: A Complete Guide",
        "description": "A 'Suit Filed' entry in CIBIL is a financial death sentence, completely blocking future loans. Learn the legal steps to force the bank to remove the 'Suit Filed' tag post-settlement.",
        "image": "https://www.credsettle.com/images/cibil-suit-filed-rectification.jpg",
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
                "name": "Steps to Rectify a Suit Filed Entry in CIBIL: A Complete Guide",
                "item": "https://www.credsettle.com/steps-to-rectify-a-suit-filed-entry-in-cibil-a-complete-guide"
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
        <div className="bg-white min-h-screen font-sans">
            <Navbar />
            <Script
                id="article-schema-suit-filed"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-suit-filed"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-suit-filed"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <StepsToRectifyASuitFiledEntryInCibilACompleteGuideClient />
            <Footer />
        </div>
    );
}
