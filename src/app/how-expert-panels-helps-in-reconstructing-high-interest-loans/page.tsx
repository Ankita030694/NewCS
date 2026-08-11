import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HowExpertPanelsHelpClient from './HowExpertPanelsHelpClient';

export const metadata: Metadata = {
    title: "How Expert Panels Help in Reconstructing High-Interest Loans",
    description: "Learn how expert legal panels force banks to restructure high-interest 30%+ loans, convert them to low-interest EMIs, and waive penal charges. Debt settlement alternative to bankruptcy.",
    keywords: [
        "loan restructuring lawyers",
        "how to restructure high interest loan",
        "legal panel for debt settlement",
        "high interest loan reconstruction",
        "stop payday loan harassment",
        "credit card debt restructuring"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/how-expert-panels-helps-in-reconstructing-high-interest-loans',
    },
};

export default function HowExpertPanelsHelpPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How Expert Panels Help in Reconstructing High-Interest Loans",
        "description": "Discover how borrowers trapped in 30%+ interest rate loans can use legal experts to restructure debt, convert it to a low-interest EMI, and avoid bankruptcy.",
        "image": "https://www.credsettle.com/images/expert-panel-restructuring.jpg",
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
                "name": "How Expert Panels Help in Reconstructing High-Interest Loans",
                "item": "https://www.credsettle.com/how-expert-panels-helps-in-reconstructing-high-interest-loans"
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
                id="article-schema-expert-panels"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-expert-panels"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-expert-panels"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <HowExpertPanelsHelpClient />
                        </div>
            <Footer />
        </div>
    );
}
