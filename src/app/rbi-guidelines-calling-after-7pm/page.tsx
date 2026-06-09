import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallingGuidelinesClient from './CallingGuidelinesClient';

export const metadata: Metadata = {
    title: 'RBI Recovery Agent Calling Hours | CredSettle',
    description: "Discover the latest RBI guidelines on recovery agent calling hours. Learn why calls after 7 PM are illegal, your rights against harassment, and how to report violations in 2025.",
    keywords: [
        "RBI guidelines calling after 7pm",
        "recovery agent calling hours India",
        "loan recovery agent rules 2025",
        "harassment by recovery agents",
        "RBI rules for debt collection",
        "can recovery agents call at night",
        "report recovery agent harassment",
        "borrower rights against harassment India"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/rbi-guidelines-calling-after-7pm',
    },
};

export default function CallingGuidelinesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "RBI Guidelines on Recovery Agent Calling Hours: Everything You Need to Know About the 7 PM Rule",
        "description": "A comprehensive analysis of the Reserve Bank of India's directives regarding the time and manner in which recovery agents can contact borrowers, focusing on the strict prohibition of calls after 7 PM.",
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
        "datePublished": "2025-03-28",
        "dateModified": "2025-03-28"
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
                "name": "RBI Guidelines for Calling Hours",
                "item": "https://www.credsettle.com/rbi-guidelines-calling-after-7pm"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-calling-hours"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-calling-hours"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <CallingGuidelinesClient />
            <Footer />
        </div>
    );
}
