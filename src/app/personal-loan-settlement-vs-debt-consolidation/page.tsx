import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PersonalLoanSettlementVsDebtConsolidationClient from './PersonalLoanSettlementVsDebtConsolidationClient';

export const metadata: Metadata = {
    title: "Personal Loan Settlement vs Debt Consolidation: Which is Better?",
    description: "Should you settle your personal loan or consolidate it? Compare the pros, cons, and CIBIL impact of debt settlement versus debt consolidation in India.",
    keywords: [
        "Personal loan settlement vs debt consolidation",
        "Is loan settlement better than debt consolidation",
        "consolidate multiple personal loans",
        "debt consolidation vs settlement pros and cons",
        "loan settlement CIBIL impact",
        "debt relief options in India",
        "how to get out of debt trap"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/personal-loan-settlement-vs-debt-consolidation',
    },
};

export default function PersonalLoanSettlementVsDebtConsolidationPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Personal Loan Settlement vs Debt Consolidation: Which is Better?",
        "description": "Should you settle your personal loan or consolidate it? Compare the pros, cons, and CIBIL impact of debt settlement versus debt consolidation in India.",
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
        "datePublished": new Date().toISOString().split('T')[0],
        "dateModified": new Date().toISOString().split('T')[0]
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
                "name": "Personal Loan Settlement vs Debt Consolidation",
                "item": "https://www.credsettle.com/personal-loan-settlement-vs-debt-consolidation"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-settlement-vs-consolidation"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-settlement-vs-consolidation"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <PersonalLoanSettlementVsDebtConsolidationClient />
                        </div>
            <Footer />
        </div>
    );
}
