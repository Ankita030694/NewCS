import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StartupLoanLegalAdvisoryClient from './StartupLoanLegalAdvisoryClient';

export const metadata: Metadata = {
    title: "Startup Loan Legal Advisory India (2025)",
    description: "Navigate the complexities of startup financing in India. Expert legal advisory on DPIIT recognition, government loan schemes (Mudra, Stand-Up India), and equity funding compliance for 2025.",
    keywords: [
        "startup loan legal advisory India",
        "legal requirements for startup loans 2025",
        "DPIIT recognition benefits",
        "Mudra loan legal documentation",
        "Stand-Up India scheme legal advisor",
        "equity funding legal compliance",
        "startup intellectual property rights India",
        "business registration for startup loans"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/startup-loan-legal-advisory',
    },
};

export default function StartupLoanLegalAdvisoryPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Startup Loan Legal Advisory: The Definitive 2025 Guide for Indian Entrepreneurs",
        "description": "A comprehensive analysis of legal frameworks, documentation requirements, and government schemes available for startups in India, focusing on the 2025 regulatory landscape.",
        "image": "https://www.credsettle.com/images/startup-loan-legal.jpg", // Placeholder URL, matching existing patterns
        "author": {
            "@type": "Organization",
            "name": "CredSettle Legal Team"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": "2025-03-07",
        "dateModified": "2026-03-07"
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
                "name": "Startup Loan Legal Advisory",
                "item": "https://www.credsettle.com/startup-loan-legal-advisory"
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
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-startup"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-startup"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-startup"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <StartupLoanLegalAdvisoryClient />
                        </div>
            <Footer />
        </div>
    );
}
