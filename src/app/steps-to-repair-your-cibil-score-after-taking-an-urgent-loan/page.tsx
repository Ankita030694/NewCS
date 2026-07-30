import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StepsToRepairCibilClient from './StepsToRepairCibilClient';

export const metadata: Metadata = {
    title: "Steps to Repair Your CIBIL Score After Taking an Urgent Loan",
    description: "Urgent loans damage your CIBIL score. Learn how to fix your CIBIL score fast and repair credit after taking instant personal loans with our step-by-step guide.",
    keywords: [
        "how to improve CIBIL after taking instant loan",
        "fix CIBIL score fast",
        "credit score repair after personal loan",
        "urgent loan CIBIL damage",
        "credit builder loan strategies"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/steps-to-repair-your-cibil-score-after-taking-an-urgent-loan',
    },
};

export default function StepsToRepairCibilPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Steps to Repair Your CIBIL Score After Taking an Urgent Loan",
        "description": "A comprehensive recovery plan to aggressively restore your CIBIL score after taking high-risk, urgent instant loans.",
        "image": "https://www.credsettle.com/images/cibil-repair-guide.jpg",
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
                "name": "Steps to Repair CIBIL",
                "item": "https://www.credsettle.com/steps-to-repair-your-cibil-score-after-taking-an-urgent-loan"
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
            <StepsToRepairCibilClient />
            <Footer />
        </div>
    );
}
