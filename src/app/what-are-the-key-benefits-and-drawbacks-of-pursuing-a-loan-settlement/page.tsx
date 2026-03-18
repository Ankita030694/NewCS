import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BenefitsAndDrawbacksClient from './BenefitsAndDrawbacksClient';

export const metadata: Metadata = {
    title: "Key Benefits and Drawbacks of Pursuing a Loan Settlement",
    description: "Explore the comprehensive guide on the key benefits and drawbacks of pursuing a loan settlement. Understand the impact on credit scores, legal options, and whether it is the right choice for financial relief.",
    keywords: [
        "key benefits and drawbacks of pursuing a loan settlement",
        "benefits of loan settlement",
        "drawbacks of loan settlement",
        "loan settlement pros and cons",
        "is loan settlement good",
        "loan settlement credit score impact",
        "debt settlement positive and negative effects"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/what-are-the-key-benefits-and-drawbacks-of-pursuing-a-loan-settlement',
    },
};

export default function BenefitsAndDrawbacksPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What Are the Key Benefits and Drawbacks of Pursuing a Loan Settlement?",
        "description": "An exhaustive analysis of the advantages and disadvantages associated with settling a loan, including financial relief, credit score repercussions, and legal considerations.",
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
        "datePublished": "2025-03-18",
        "dateModified": "2025-03-18"
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
                "name": "Key Benefits and Drawbacks of Loan Settlement",
                "item": "https://www.credsettle.com/what-are-the-key-benefits-and-drawbacks-of-pursuing-a-loan-settlement"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-benefits-drawbacks"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-benefits-drawbacks"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <BenefitsAndDrawbacksClient />
            <Footer />
        </div>
    );
}
