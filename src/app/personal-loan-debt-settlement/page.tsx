import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PersonalLoanDebtSettlementClient from './PersonalLoanDebtSettlementClient';

export const metadata: Metadata = {
    title: "Personal Loan Debt Settlement India | Write Off Unsecured Debt",
    description: "Learn the financial mechanics of personal loan debt settlement in India. Understand the difference between consolidation and settlement, CIBIL impact, and how to write off personal loan debt legally.",
    keywords: [
        "personal loan debt settlement India",
        "debt relief for personal loans",
        "how to write off personal loan debt",
        "personal loan settlement process",
        "unsecured debt settlement India",
        "CIBIL impact of debt settlement"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/personal-loan-debt-settlement',
    },
};

export default function PersonalLoanDebtSettlementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "A Complete Guide to Personal Loan Debt Settlement in India",
        "description": "Borrowers often confuse debt consolidation with debt settlement. This comprehensive guide clearly defines the financial mechanics of debt settlement for unsecured personal loans, explaining the exact scenarios where banks actually agree to write off the balance.",
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
        "datePublished": "2025-05-20",
        "dateModified": "2025-05-20"
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
                "name": "Personal Loan Debt Settlement",
                "item": "https://www.credsettle.com/personal-loan-debt-settlement"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-personal-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-personal-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <PersonalLoanDebtSettlementClient />
            <Footer />
        </div>
    );
}
