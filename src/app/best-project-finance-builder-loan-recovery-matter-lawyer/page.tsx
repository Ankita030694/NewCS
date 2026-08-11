import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectFinanceBuilderClient from './ProjectFinanceBuilderClient';

export const metadata: Metadata = {
    title: "Best Project Finance & Builder Loan Recovery Lawyer",
    description: "Facing builder loan recovery issues? Get specialized legal defence for project finance matters, SARFAESI Act, DRT proceedings, and RERA compliance. Expert debt relief for developers.",
    keywords: [
        "best project finance builder loan recovery matter lawyer",
        "builder loan recovery lawyer India",
        "project finance dispute resolution",
        "SARFAESI act for real estate developers",
        "DRT lawyer for builder loans",
        "RERA vs SARFAESI legal help",
        "IBC 2016 for real estate companies",
        "construction finance recovery defence"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-project-finance-builder-loan-recovery-matter-lawyer',
    },
};

export default function ProjectFinanceBuilderPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Strategic Project Finance and Builder Loan Recovery Defence: A 2025 Legal Guide",
        "description": "A comprehensive analysis of building loan recovery, project finance disputes, and the legal frameworks of SARFAESI, RERA, and IBC in the Indian real estate sector.",
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
        "datePublished": "2025-03-02",
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
                "name": "Project Finance Builder Loan Recovery",
                "item": "https://www.credsettle.com/best-project-finance-builder-loan-recovery-matter-lawyer"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-project-finance"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-project-finance"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <ProjectFinanceBuilderClient />
                        </div>
            <Footer />
        </div>
    );
}
