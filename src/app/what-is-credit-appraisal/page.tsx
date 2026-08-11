import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatIsCreditAppraisalClient from './WhatIsCreditAppraisalClient';

export const metadata: Metadata = {
    title: "What is a Credit Appraisal Process? | Bank Loan Underwriting",
    description: "Business owners get rejected for loans repeatedly without understanding why. Demystify the underwriter's desk, and learn how banks evaluate the 5 C's of credit.",
    keywords: [
        "what is credit appraisal process",
        "how bank evaluates loan application",
        "loan underwriting process India",
        "credit appraisal process in banks",
        "5 C's of credit evaluation"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/what-is-credit-appraisal',
    },
};

export default function WhatIsCreditAppraisalPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What is a Credit Appraisal Process?",
        "description": "Business owners get rejected for loans repeatedly without understanding why. Demystify the underwriter's desk, and learn how banks evaluate the 5 C's of credit.",
        "image": "https://www.credsettle.com/images/credit-appraisal-process.jpg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle Financial Research Wing"
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
                "name": "What is a Credit Appraisal Process?",
                "item": "https://www.credsettle.com/what-is-credit-appraisal"
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
                id="article-schema-appraisal"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-appraisal"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-appraisal"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <WhatIsCreditAppraisalClient />
                        </div>
            <Footer />
        </div>
    );
}
