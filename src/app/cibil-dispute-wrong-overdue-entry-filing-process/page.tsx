import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CibilDisputeClient from './CibilDisputeClient';

export const metadata: Metadata = {
    title: "CIBIL Dispute: How to Fix Wrong Overdue Entries",
    description: "Paid your loan but the bank reported it as overdue? Discover the exact escalation matrix for filing a formal CIBIL dispute and resolving credit score errors.",
    keywords: [
        "CIBIL dispute resolution process",
        "wrong overdue entry in CIBIL",
        "bank not updating CIBIL score",
        "how to fix CIBIL report errors",
        "Banking Ombudsman CIBIL complaint",
        "credit score repair India"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/cibil-dispute-wrong-overdue-entry-filing-process',
    },
};

export default function CibilDisputePage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "CIBIL Dispute: How to Fix Wrong Overdue Entries",
        "description": "A comprehensive guide providing the exact escalation matrix for filing a formal CIBIL dispute when a bank falsely reports a paid loan as overdue.",
        "image": "https://www.credsettle.com/images/cibil-dispute-resolution.jpg",
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
                "name": "CIBIL Dispute Overdue Entry Process",
                "item": "https://www.credsettle.com/cibil-dispute-wrong-overdue-entry-filing-process"
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
            <CibilDisputeClient />
                        </div>
            <Footer />
        </div>
    );
}
