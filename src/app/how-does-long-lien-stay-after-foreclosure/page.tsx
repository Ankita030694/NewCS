import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HowDoesLongLienStayClient from './HowDoesLongLienStayClient';

export const metadata: Metadata = {
    title: "How Long Does a Lien Stay After Loan Foreclosure? (2025)",
    description: "Discover the legal timelines for hypothecation cancellation, bank NOC validity, and steps to remove a lien at the RTO or property registrar after loan foreclosure.",
    keywords: [
        "lien removal after loan foreclosure",
        "how long does bank take to remove lien",
        "hypothecation cancellation timeline",
        "car loan hypothecation removal RTO",
        "bank NOC validity for loan closure",
        "release deed for property loan"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/how-does-long-lien-stay-after-foreclosure',
    },
};

export default function HowDoesLongLienStayAfterForeclosurePage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How Long Does a Lien Stay After Loan Foreclosure?",
        "description": "A legally precise guide on the timeline for hypothecation cancellation, dealing with bank delays in issuing NOCs, and RTO or Registrar removal processes.",
        "image": "https://www.credsettle.com/images/lien-removal-process.jpg",
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
        "datePublished": "2025-07-23",
        "dateModified": "2025-07-23"
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
                "name": "How Long Does a Lien Stay After Loan Foreclosure?",
                "item": "https://www.credsettle.com/how-does-long-lien-stay-after-foreclosure"
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
                id="article-schema-lien"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-lien"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-lien"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <HowDoesLongLienStayClient />
            <Footer />
        </div>
    );
}
