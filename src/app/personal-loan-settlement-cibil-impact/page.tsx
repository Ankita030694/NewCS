import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PersonalLoanSettlementCibilImpactClient from './PersonalLoanSettlementCibilImpactClient';

export const metadata: Metadata = {
    title: "Does Personal Loan Settlement Affect CIBIL Forever? 2025 Guide",
    description: "Discover the exact loan settlement CIBIL impact. Learn the critical difference between settled status and active default, and how to rebuild your credit score.",
    keywords: [
        "does personal loan settlement affect CIBIL",
        "loan settlement CIBIL impact",
        "remove settled status from CIBIL",
        "credit score rebuild strategy",
        "settled vs active default status"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/personal-loan-settlement-cibil-impact',
    },
};

export default function PersonalLoanSettlementCibilImpactPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Does Personal Loan Settlement Affect CIBIL Forever? The Absolute Truth",
        "description": "A comprehensive guide analyzing the exact loan settlement CIBIL impact, dismantling common myths, and providing a proven post settlement credit rebuild strategy.",
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
        "datePublished": "2025-03-16",
        "dateModified": "2025-03-16"
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
                "name": "Personal Loan Settlement CIBIL Impact",
                "item": "https://www.credsettle.com/personal-loan-settlement-cibil-impact"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-cibil-impact"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-cibil-impact"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <PersonalLoanSettlementCibilImpactClient />
                        </div>
            <Footer />
        </div>
    );
}
