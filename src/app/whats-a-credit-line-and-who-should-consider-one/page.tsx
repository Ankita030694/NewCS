import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsACreditLineClient from './WhatsACreditLineClient';

export const metadata: Metadata = {
    title: "What is a Credit Line and Who Should Consider One in India?",
    description: "Discover the line of credit meaning in India, how does a credit line work, and the key differences of personal line of credit vs personal loan for managing unpredictable cash crunches.",
    keywords: [
        "line of credit meaning India",
        "personal line of credit vs personal loan",
        "how does credit line work",
        "credit line advantages",
        "revolving credit facility India"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/whats-a-credit-line-and-who-should-consider-one',
    },
};

export default function WhatsACreditLinePage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What is a Credit Line and Who Should Consider One in India?",
        "description": "Discover the line of credit meaning in India, how does a credit line work, and the key differences of personal line of credit vs personal loan.",
        "image": "https://www.credsettle.com/images/credit-line-guide.jpg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle Financial Advisory"
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
                "name": "What's a Credit Line and Who Should Consider One?",
                "item": "https://www.credsettle.com/whats-a-credit-line-and-who-should-consider-one"
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
                id="article-schema-credit-line"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-credit-line"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-credit-line"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <WhatsACreditLineClient />
            <Footer />
        </div>
    );
}
