import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomerSupportOptionsClient from './CustomerSupportOptionsClient';

export const metadata: Metadata = {
    title: 'Loan Settlement Company Support Options | CredSettle',
    description: 'Explore the various customer support options offered by loan settlement companies in India, including dedicated managers, legal helplines, digital dashboards, and 24/7 assistance.',
    alternates: {
        canonical: 'https://www.credsettle.com/what-customer-support-options-do-loan-settlement-companies-provide',
    },
};

export default function CustomerSupportOptionsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Customer Support Options Provided by Loan Settlement Companies: A 2025 Comprehensive Analysis",
        "description": "A deep dive into the support infrastructure provided by top debt relief firms in India, focusing on client safety, legal protection, and transparent communication.",
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
        "datePublished": "2025-03-21",
        "dateModified": "2025-03-21"
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
                "name": "Customer Support Guide",
                "item": "https://www.credsettle.com/what-customer-support-options-do-loan-settlement-companies-provide"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-support-layout"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-support-layout"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <CustomerSupportOptionsClient />
            <Footer />
        </div>
    );
}
