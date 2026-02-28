import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CarLoanLawyerClient from './CarLoanLawyerClient';

export const metadata: Metadata = {
    title: 'Best Lawyer for Car Loan Settlement in India | Experts 2025',
    description: 'Stop vehicle repossession and recovery agent harassment. Get expert legal aid for car loan settlement under RBI rules 2025. Secure OTS and protect your rights.',
    keywords: [
        "best lawyer for car loan settlement",
        "car loan settlement lawyer India",
        "legal help for car loan default",
        "stop car repossession legaly India",
        "RBI car loan settlement rules 2025",
        "car loan recovery agent harassment help",
        "section 138 car loan case lawyer",
        "one time settlement for car loan"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-car-loan-settlement',
    },
};

export default function CarLoanSettlementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyer for Car Loan Settlement in India: Expert Legal Guide 2025",
        "description": "Comprehensive guide on finding the best legal representation for car loan settlement, avoiding illegal vehicle repossession, and understanding borrower rights in India.",
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
        "datePublished": "2025-02-28",
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
                "name": "Best Lawyer for Car Loan Settlement",
                "item": "https://www.credsettle.com/best-lawyer-for-car-loan-settlement"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-car-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-car-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <CarLoanLawyerClient />
            <Footer />
        </div>
    );
}
