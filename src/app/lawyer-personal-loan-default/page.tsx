import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LawyerPersonalLoanDefaultClient from './LawyerPersonalLoanDefaultClient';

export const metadata: Metadata = {
    title: "Hire a Lawyer for Personal Loan Default & Debt Settlement",
    description: "Facing a personal loan default? Hire specialized debt settlement lawyers in India to negotiate with banks, stop harassment, and reduce your loan burden.",
    keywords: [
        "Lawyer for personal loan default",
        "Legal help for personal loan default",
        "lawyer to negotiate with bank",
        "debt settlement lawyer India"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/lawyer-personal-loan-default',
    },
};

export default function LawyerPersonalLoanDefaultPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Hire a Lawyer for Personal Loan Default & Debt Settlement",
        "description": "Facing a personal loan default? Hire specialized debt settlement lawyers in India to negotiate with banks, stop harassment, and reduce your loan burden.",
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
        "datePublished": "2024-08-13",
        "dateModified": "2024-08-13"
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
                "name": "Lawyer for Personal Loan Default",
                "item": "https://www.credsettle.com/lawyer-personal-loan-default"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
                <Script
                    id="article-schema-lawyer-default"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Script
                    id="breadcrumb-schema-lawyer-default"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
                />
                <LawyerPersonalLoanDefaultClient />
            </div>
            <Footer />
        </div>
    );
}
