import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BestLawyerUnsecuredLoanClient from './BestLawyerUnsecuredLoanClient';

export const metadata: Metadata = {
    title: "Best Lawyer for Unsecured Loan Debt Help (2025)",
    description: "Expert legal assistance for unsecured loan disputes, recovery agent harassment, and DRT representation. Negotiate better settlements and protect your rights in India.",
    keywords: [
        "best lawyer for unsecured loan",
        "unsecured loan legal help India",
        "recovery agent harassment lawyer",
        "debt recovery tribunal lawyer",
        "personal loan settlement lawyer",
        "credit card debt legal help",
        "stop bank harassment lawyer",
        "RBI guidelines loan recovery 2025"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-unsecured-loan',
    },
};

export default function BestLawyerUnsecuredLoanPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyer for Unsecured Loan Disputes in India: A Comprehensive 2025 Legal Guide",
        "description": "Navigate the complexities of unsecured loan recovery, stop harassment, and achieve debt relief with expert legal guidance in India.",
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
        "datePublished": "2025-02-15",
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
                "name": "Best Lawyer for Unsecured Loan",
                "item": "https://www.credsettle.com/best-lawyer-for-unsecured-loan"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-unsecured"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-unsecured"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <BestLawyerUnsecuredLoanClient />
            <Footer />
        </div>
    );
}
