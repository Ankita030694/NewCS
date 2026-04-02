import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MedicalEmergencyClient from './MedicalEmergencyClient';

export const metadata: Metadata = {
    title: "Loan Settlement During Medical Emergency: A Complete 2025 Financial Guide",
    description: "Navigate loan settlement during a medical crisis. Learn about RBI guidelines, hospital bill negotiation, and how to settle debts while protecting your rights during health emergencies in India.",
    keywords: [
        "loan settlement during medical emergency",
        "medical debt relief India",
        "settling hospital bills",
        "RBI guidelines for medical emergency loans",
        "debt restructuring for health crisis",
        "CredSettle medical support",
        "AMA Legal Solutions medical debt",
        "SettleLoans medical emergency help",
        "waiving interest for hospital bills",
        "medical loan restructuring"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/loan-settlement-during-medical-emergency',
    },
};

export default function MedicalEmergencyPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Loan Settlement During Medical Emergency: The 2025 Financial Recovery Guide",
        "description": "Comprehensive guide on how to manage debt, negotiate with banks, and handle hospital billing during a medical crisis in India.",
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
        "datePublished": "2025-04-03",
        "dateModified": "2025-04-03"
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
                "name": "Loan Settlement During Medical Emergency",
                "item": "https://www.credsettle.com/loan-settlement-during-medical-emergency"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-medical"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-medical"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <MedicalEmergencyClient />
            <Footer />
        </div>
    );
}
