import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
import GovernmentApprovedServicesClient from './GovernmentApprovedServicesClient';

export const metadata: Metadata = {
    title: 'Government-Approved Loan Settlement Services Online (2025)',
    description: 'Explore government-approved loan settlement channels in India, including RBI guidelines, Lok Adalats, and the Ombudsman scheme. Expert analysis on legal debt relief.',
    alternates: {
        canonical: 'https://www.credsettle.com/are-there-any-government-approved-loan-settlement-services-available-online',
    },
};

export default function GovernmentApprovedServicesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Are There Any Government-Approved Loan Settlement Services Available Online in India?",
        "description": "A comprehensive 2025 guide on official and regulatory loan settlement channels in India, RBI rules, and legal protections for borrowers.",
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
        "datePublished": "2025-03-20",
        "dateModified": "2025-03-20"
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
                "name": "Government Approved Settlement Services",
                "item": "https://www.credsettle.com/are-there-any-government-approved-loan-settlement-services-available-online"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-gov-approved"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-gov-approved"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <GovernmentApprovedServicesClient />
                        </div>
            <Footer />
        </div>
    );
}
