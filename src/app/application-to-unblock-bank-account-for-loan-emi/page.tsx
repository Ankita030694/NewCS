import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ApplicationToUnblockBankAccountForLoanEmiClient from './ApplicationToUnblockBankAccountForLoanEmiClient';

export const metadata: Metadata = {
    title: "Unblock Bank Account for Loan EMI (Template & Guide)",
    description: "Learn how to write an application to unblock your bank account frozen for a loan EMI default. Download the exact legal letter template to submit to your bank manager.",
    keywords: [
        "application to unblock bank account",
        "bank frozen account for loan default",
        "unfreeze account letter to bank manager",
        "salary account frozen for EMI",
        "how to unblock account after EMI default",
        "RBI guidelines on account freeze"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/application-to-unblock-bank-account-for-loan-emi',
    },
};

export default function ApplicationToUnblockBankAccountForLoanEmiPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Unblock a Bank Account Frozen for Loan EMI Default",
        "description": "A comprehensive legal guide and exact application letter template to help you unfreeze a salary or savings account that a bank illegally froze for missing a loan EMI.",
        "image": "https://www.credsettle.com/images/unblock-bank-account-loan.jpg",
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
                "name": "Application to Unblock Bank Account for Loan EMI",
                "item": "https://www.credsettle.com/application-to-unblock-bank-account-for-loan-emi"
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
                id="article-schema-unblock"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-unblock"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-unblock"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <ApplicationToUnblockBankAccountForLoanEmiClient />
            <Footer />
        </div>
    );
}
