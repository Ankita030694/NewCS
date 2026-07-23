import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanOverdueNachBounceClient from './LoanOverdueNachBounceClient';

export const metadata: Metadata = {
    title: "Loan Overdue Due to NACH Bounce: Immediate Steps to Take",
    description: "A NACH bounce can trigger Section 25 criminal notices and severe penalties. Learn the immediate 48-hour steps to clear manual EMI payments before bank legal escalation.",
    keywords: [
        "loan overdue NACH bounce",
        "Section 25 NACH dishonour",
        "manual EMI payment after bounce",
        "NACH bounce legal notice",
        "how to clear overdue EMI",
        "Section 25 Payment and Settlement Systems Act",
        "prevent criminal notice for loan default"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/loan-overdue-nach-bounce-immediate-steps',
    },
};

export default function LoanOverdueNachBouncePage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Loan Overdue Due to NACH Bounce: Immediate Steps to Take",
        "description": "Navigate the critical 48-hour window after a NACH bounce to prevent Section 25 criminal notices by making manual EMI payments.",
        "image": "https://www.credsettle.com/images/nach-bounce-steps.jpg",
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
                "name": "Loan Overdue NACH Bounce Immediate Steps",
                "item": "https://www.credsettle.com/loan-overdue-nach-bounce-immediate-steps"
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
                id="article-schema-nach"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-nach"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-nach"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <LoanOverdueNachBounceClient />
            <Footer />
        </div>
    );
}
