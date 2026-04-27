import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LongTermFinancialHealthClient from './LongTermFinancialHealthClient';

export const metadata: Metadata = {
    title: "Loan Settlement Impact on Long-Term Financial Health",
    description: "Discover the 7-year impact of loan settlement on your financial health. Learn about CIBIL score recovery, future loan eligibility, and RBI 2025 borrower rights.",
    keywords: [
        "how does loan settlement affect financial health",
        "long term impact of loan settlement India",
        "loan settlement 7 year impact",
        "CIBIL score recovery after settlement",
        "RBI 2025 loan settlement rules",
        "getting a home loan after settlement",
        "financial consequences of debt settlement",
        "debt relief vs credit score"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/how-does-loan-settlement-affect-your-financial-health-in-long-term',
    },
};

export default function LongTermFinancialHealthPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How Does Loan Settlement Affect Your Financial Health in the Long Term? The 2025 Reality",
        "description": "An in-depth analysis of the multi-year professional and financial consequences of settling a loan in India, featuring recovery strategies and RBI regulatory insights.",
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
        "datePublished": "2025-02-18",
        "dateModified": "2025-02-28"
    };

    const organizationLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "CredSettle",
        "url": "https://www.credsettle.com",
        "logo": "https://www.credsettle.com/credsettle-logo.svg",
        "sameAs": [
            "https://www.facebook.com/credsettle",
            "https://www.twitter.com/credsettle",
            "https://www.linkedin.com/company/credsettle"
        ]
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
                "name": "Financial Health Impact of Loan Settlement",
                "item": "https://www.credsettle.com/how-does-loan-settlement-affect-your-financial-health-in-long-term"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen font-sans">
            <Navbar />
            <Script
                id="article-schema-health"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="org-schema-health"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <Script
                id="breadcrumb-schema-health"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <LongTermFinancialHealthClient />
            <Footer />
        </div>
    );
}
