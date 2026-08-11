import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BestLawyerChallengeARCClient from './BestLawyerChallengeARCClient';

export const metadata: Metadata = {
    title: "Lawyer to Challenge Loan Assignment to ARC (2025)",
    description: "Contest improper loan transfers to Asset Reconstruction Companies. Expert legal defense for SARFAESI notices, auction stays, and ARC settlements in India.",
    keywords: [
        "challenge loan assignment to ARC",
        "best lawyer for ARC disputes",
        "SARFAESI Act Section 17 appeal",
        "stay on ARC auction",
        "contest loan transfer to asset reconstruction company",
        "DRT lawyer for ARC cases",
        "illegal loan assignment India",
        "RBI guidelines ARC recovery 2025"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-to-challenge-loan-assignment-to-arc',
    },
};

export default function BestLawyerChallengeARCPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Challenging Loan Assignment to ARC: A Definitive 2025 Legal Defense Guide",
        "description": "Learn how to contest illegal loan transfers to ARCs, defend against SARFAESI actions, and achieve favorable debt resolutions in India.",
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
        "datePublished": "2025-02-20",
        "dateModified": "2025-03-02"
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
                "name": "Challenge ARC Assignment",
                "item": "https://www.credsettle.com/best-lawyer-to-challenge-loan-assignment-to-arc"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-arc"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-arc"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <BestLawyerChallengeARCClient />
                        </div>
            <Footer />
        </div>
    );
}
