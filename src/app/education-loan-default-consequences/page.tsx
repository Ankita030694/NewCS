import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EducationLoanDefaultConsequencesClient from './EducationLoanDefaultConsequencesClient';

export const metadata: Metadata = {
    title: "Education Loan Default Consequences: Will It Ruin Your Career?",
    description: "Understand the civil vs criminal liability of student loan NPA. Learn how government subsidy schemes delay NPA and protect co-borrower parents.",
    keywords: [
        "education loan default consequences",
        "student loan npa impact",
        "education loan settlement India",
        "student loan default criminal charge myth",
        "protect co borrower parents education loan",
        "CSIS subsidy delay NPA",
        "student loan passport confiscation myth"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/education-loan-default-consequences',
    },
};

export default function EducationLoanDefaultConsequencesPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Education Loan Default Consequences: Will It Ruin Your Career?",
        "description": "Understand the civil vs criminal liability of student loan NPA. Learn how government subsidy schemes delay NPA and protect co-borrower parents.",
        "image": "https://www.credsettle.com/images/education-loan-default-lawyer.jpg",
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
        "datePublished": "2025-05-15",
        "dateModified": "2026-05-15"
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
                "name": "Education Loan Default Consequences",
                "item": "https://www.credsettle.com/education-loan-default-consequences"
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
                id="article-schema-edu"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-edu"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-edu"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <EducationLoanDefaultConsequencesClient />
            <Footer />
        </div>
    );
}
