import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HowToCheckYourLoanStatusClient from './HowToCheckYourLoanStatusClient';

export const metadata: Metadata = {
    title: "How to Check Your Loan Status Without Visiting the Bank",
    description: "Borrowers waste hours standing in bank queues just to check if their loan was approved or disbursed. Learn how to track loan status without branch visit using net banking, WhatsApp, and PAN.",
    keywords: [
        "check loan application status online",
        "how to track loan status without branch visit",
        "personal loan status by PAN",
        "loan approval check online",
        "bypass bank queue for loan status"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/how-to-check-your-loan-status-without-visiting-the-bank',
    },
};

export default function HowToCheckYourLoanStatusPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Check Your Loan Status Without Visiting the Bank",
        "description": "A definitive guide to bypass the physical branch entirely using net banking, WhatsApp banking, PAN-based soft pulls, and customer care IVR systems to check your loan application status online.",
        "image": "https://www.credsettle.com/images/loan-status-online.jpg",
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
        "datePublished": "2025-05-10",
        "dateModified": "2026-05-10"
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
                "name": "How to Check Your Loan Status Without Visiting the Bank",
                "item": "https://www.credsettle.com/how-to-check-your-loan-status-without-visiting-the-bank"
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
                id="article-schema-loan-status"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-loan-status"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-loan-status"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <HowToCheckYourLoanStatusClient />
            <Footer />
        </div>
    );
}
