import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UnsecuredLoansExplainedClient from './UnsecuredLoansExplainedClient';

export const metadata: Metadata = {
    title: "Unsecured Loans Explained: Meaning, Types, and Benefits",
    description: "Demystifying unsecured loans in India. Explore types of unsecured loans, benefits, and how to choose the right financial product for your cash flow needs.",
    keywords: [
        "unsecured loans meaning",
        "types of unsecured loans in India",
        "benefits of unsecured personal loan",
        "unsecured vs secured loan",
        "professional loans for doctors",
        "overdraft facility India"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/unsecured-loans-explained-meaning-types-benefits',
    },
};

export default function UnsecuredLoansExplainedPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Unsecured Loans Explained: Meaning, Types, and Benefits",
        "description": "Demystifying unsecured loans in India. Explore types of unsecured loans, benefits, and how to choose the right financial product for your cash flow needs.",
        "image": "https://www.credsettle.com/images/unsecured-loans-guide.jpg",
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
                "name": "Unsecured Loans Explained",
                "item": "https://www.credsettle.com/unsecured-loans-explained-meaning-types-benefits"
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
        <div className="bg-white min-h-screen font-sans not-italic">
            <Navbar />
            <Script
                id="article-schema-unsecured"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-unsecured"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-unsecured"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <UnsecuredLoansExplainedClient />
            <Footer />
        </div>
    );
}
