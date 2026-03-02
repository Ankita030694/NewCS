import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PersonalLoanClient from './PersonalLoanClient';

export const metadata: Metadata = {
    title: "Best Lawyer for Personal Loans | Expert Debt Defense 2025",
    description: "Expert legal protection for personal loan defaults. Defend against recovery harassment, Section 138 cases, and aggressive bank notices. Top India debt relief experts.",
    keywords: [
        "best lawyer for personal loans",
        "personal loan recovery defence",
        "stop personal loan harassment legal help",
        "Section 138 negotiable instruments act lawyer",
        "personal loan settlement expert",
        "RBI guidelines for personal loan recovery 2025",
        "debt relief for individuals",
        "challenge personal loan recovery in court"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-personal-loans',
    },
};

export default function PersonalLoanPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Personal Loan Legal Defence 2025: A Complete Guide to Borrower Rights",
        "description": "Comprehensive legal analysis of your rights against personal loan recovery, understanding the 2025 RBI Fair Practice Code, and strategic defence against bank litigation.",
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
        "datePublished": "2025-03-02",
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
                "name": "Best Lawyer for Personal Loans",
                "item": "https://www.credsettle.com/best-lawyer-for-personal-loans"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-personal-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-personal-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <PersonalLoanClient />
            <Footer />
        </div>
    );
}
