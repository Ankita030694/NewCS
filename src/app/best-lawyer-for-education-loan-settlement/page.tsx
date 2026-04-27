import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BestLawyerEducationLoanClient from './BestLawyerEducationLoanClient';

export const metadata: Metadata = {
    title: "Best Lawyer for Education Loan Settlement India",
    description: "Hire the absolute best lawyer for education loan settlement in India. We stop recovery harassment, negotiate OTS, protect parents/co-borrowers, and handle DRT notices related to student debt.",
    keywords: [
        "best lawyer for education loan settlement",
        "student loan settlement lawyer",
        "SARFAESI act education loan",
        "stop education loan harassment",
        "OTS for education loan",
        "co-borrower education loan liability",
        "education loan NPA settlement lawyer"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-education-loan-settlement',
    },
};

export default function BestLawyerEducationLoanPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyer for Education Loan Settlement: Strategic Defense Against Student Debt",
        "description": "An exhaustive analysis detailing why hiring specialized legal counsel for education loan settlement is mandatory to stop harassment, secure a favorable OTS, and protect family assets in India.",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle Legal Advisors"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": "2025-02-12",
        "dateModified": "2025-02-28"
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
                "name": "Best Lawyer for Education Loan Settlement",
                "item": "https://www.credsettle.com/best-lawyer-for-education-loan-settlement"
            }
        ]
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "CredSettle",
        "url": "https://www.credsettle.com",
        "logo": "https://www.credsettle.com/credsettle-logo.svg",
        "sameAs": [
            "https://www.facebook.com/credsettle",
            "https://www.twitter.com/credsettle",
            "https://www.linkedin.com/company/credsettle"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9999-999999",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": "English"
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-education-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-education-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-education-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <BestLawyerEducationLoanClient />
            <Footer />
        </div>
    );
}
