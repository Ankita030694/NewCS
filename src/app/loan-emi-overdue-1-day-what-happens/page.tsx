import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanEmiOverdueOneDayClient from './LoanEmiOverdueOneDayClient';

export const metadata: Metadata = {
    title: "Loan EMI Overdue by 1 Day: What Actually Happens? (2026)",
    description: "Missed an EMI by one day? Understand the true CIBIL impact, loan grace periods in India, and how to avoid the predatory payday loan trap.",
    keywords: [
        "loan EMI overdue 1 day",
        "missed EMI by one day CIBIL impact",
        "loan grace period in India",
        "DPD reporting days past due",
        "overdue EMI recovery process",
        "what happens if I miss loan EMI by 24 hours"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/loan-emi-overdue-1-day-what-happens',
    },
};

export default function LoanEmiOverdueOneDayPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Loan EMI Overdue by 1 Day: What Actually Happens?",
        "description": "A comprehensive guide on what happens when your loan EMI is overdue by 24 hours, the difference between grace periods and DPD, and how to manage the situation without panic borrowing.",
        "image": "https://www.credsettle.com/images/emi-overdue-1-day.jpg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle Financial Advisory"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": "2026-07-23",
        "dateModified": "2026-07-23"
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
                "name": "Loan EMI Overdue 1 Day What Happens",
                "item": "https://www.credsettle.com/loan-emi-overdue-1-day-what-happens"
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
                id="article-schema-emi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-emi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-emi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <LoanEmiOverdueOneDayClient />
                        </div>
            <Footer />
        </div>
    );
}
