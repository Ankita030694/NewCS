import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PersonalLoanSettlementClient from './PersonalLoanSettlementClient';

export const metadata: Metadata = {
    title: "Best Personal Loan Settlement Process & Guidelines in India",
    description: "Expert guide on the personal loan settlement process in India. Understand how to settle a personal loan, timelines, guidelines, and legal repercussions.",
    keywords: [
        "personal loan settlement process",
        "how to settle personal loan in India",
        "personal loan settlement guidelines",
        "personal loan debt relief",
        "personal loan settlement legal protection"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/personal-loan-settlement',
    },
};

export default function PersonalLoanSettlementPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "The Ultimate Guide to Personal Loan Settlement in India",
        "description": "Understand the mechanical process of how a personal loan gets closed for a fraction of the principal. Learn about timelines, paperwork, and legal protection.",
        "image": "https://www.credsettle.com/images/personal-loan-settlement.jpg",
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
        "datePublished": "2026-08-11",
        "dateModified": "2026-08-11"
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
                "name": "Personal Loan Settlement",
                "item": "https://www.credsettle.com/personal-loan-settlement"
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
                id="article-schema-pls"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-pls"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-pls"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <PersonalLoanSettlementClient />
            <Footer />
        </div>
    );
}
