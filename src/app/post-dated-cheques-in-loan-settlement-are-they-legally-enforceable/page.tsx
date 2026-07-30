import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PostDatedChequesClient from './PostDatedChequesClient';

export const metadata: Metadata = {
    title: "Post-Dated Cheques in Loan Settlement: Are They Legally Enforceable?",
    description: "Learn about the severe legal risks of handing over blank or post-dated cheques (PDCs) during loan settlement, Section 138 bounce cases, and secure payment methods.",
    keywords: [
        "post dated cheque in loan settlement",
        "Section 138 cheque bounce loan",
        "is blank cheque required for settlement",
        "PDC legal validity in settlement",
        "cheque bounce criminal case",
        "secure loan settlement payment methods"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/post-dated-cheques-in-loan-settlement-are-they-legally-enforceable',
    },
};

export default function PostDatedChequesPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Post-Dated Cheques in Loan Settlement: A Legal Minefield",
        "description": "An in-depth analysis of the massive legal risks associated with giving post-dated cheques as security during a loan settlement and how to protect yourself from Section 138 cases.",
        "image": "https://www.credsettle.com/images/pdc-settlement-legal.jpg",
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
                "name": "Post-Dated Cheques in Loan Settlement",
                "item": "https://www.credsettle.com/post-dated-cheques-in-loan-settlement-are-they-legally-enforceable"
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
        <div className="bg-white min-h-screen font-sans">
            <Navbar />
            <Script
                id="article-schema-pdc"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-pdc"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-pdc"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <PostDatedChequesClient />
            <Footer />
        </div>
    );
}
