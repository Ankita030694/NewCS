import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HowToImproveCibilScoreClient from './HowToImproveCibilScoreClient';

export const metadata: Metadata = {
    title: "How to Improve Your CIBIL Score After a Loan Default",
    description: "Expert strategies to rebuild your credit score after an NPA settlement. Discover advanced techniques like FD-backed secured cards and strategic micro-loans.",
    keywords: [
        "how to improve CIBIL score after settlement",
        "rebuild credit score after default",
        "fix CIBIL score fast",
        "post NPA credit repair",
        "FD backed secured credit cards",
        "strategic micro loans for CIBIL"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/how-to-improve-cibil-score',
    },
};

export default function HowToImproveCibilScorePage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Improve Your CIBIL Score After a Loan Default",
        "description": "Expert strategies to rebuild your credit score after an NPA settlement. Discover advanced techniques like FD-backed secured cards and strategic micro-loans.",
        "image": "https://www.credsettle.com/images/improve-cibil-score.jpg",
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
        "datePublished": "2025-03-07",
        "dateModified": "2026-03-07"
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
                "name": "How to Improve CIBIL Score",
                "item": "https://www.credsettle.com/how-to-improve-cibil-score"
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
            <HowToImproveCibilScoreClient />
                        </div>
            <Footer />
        </div>
    );
}
