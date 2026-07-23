import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PersonalLoanSettlementProcessConsequencesClient from './PersonalLoanSettlementProcessConsequencesClient';

export const metadata: Metadata = {
    title: "Personal Loan Settlement Process and Its Long-Term Consequences",
    description: "Learn the step-by-step personal loan settlement process and understand the brutal 7-year aftermath of a 'Settled' status on your CIBIL score.",
    keywords: [
        "personal loan settlement process",
        "consequences of settling personal loan",
        "how to settle personal loan with bank",
        "settled vs closed loan",
        "CIBIL score after settlement",
        "personal loan debt negotiation"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/personal-loan-settlement-process-consequences',
    },
};

export default function PersonalLoanSettlementPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Personal Loan Settlement Process and Its Long-Term Consequences",
        "description": "Settlement seems like an easy escape, but borrowers do not realize it leaves a permanent 'Settled' mark on CIBIL. This page walks through the exact step-by-step negotiation process and the brutal 7-year aftermath on borrowing capacity.",
        "image": "https://www.credsettle.com/images/personal-loan-settlement.jpg",
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
                "name": "Personal Loan Settlement Process",
                "item": "https://www.credsettle.com/personal-loan-settlement-process-consequences"
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
                id="article-schema-pl-settle"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-pl-settle"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-pl-settle"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <PersonalLoanSettlementProcessConsequencesClient />
            <Footer />
        </div>
    );
}
