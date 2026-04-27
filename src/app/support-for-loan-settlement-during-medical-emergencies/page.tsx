import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MedicalEmergencySettlementClient from './MedicalEmergencySettlementClient';

export const metadata: Metadata = {
    title: "Loan Settlement Support: Medical Emergencies (2025)",
    description: "Understand your rights and options for loan settlement during medical emergencies in India. Explore RBI guidelines, legal safeguards, and step-by-step relief strategies.",
    keywords: [
        "support for loan settlement during medical emergencies",
        "loan settlement for medical hardship India",
        "RBI guidelines for medical emergency loan settlement",
        "reduced EMI during medical crisis",
        "how to settle loans when hospitalized",
        "medical debt relief laws India",
        "legal rights of borrowers in medical distress",
        "hardship letter for medical loan settlement"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/support-for-loan-settlement-during-medical-emergencies',
    },
};

export default function MedicalEmergencySettlementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Comprehensive Guide to Support for Loan Settlement During Medical Emergencies",
        "description": "An exhaustive analysis of legal protections, RBI mandates, and practical steps to navigate loan settlements and debt relief during severe medical crises in India.",
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
        "datePublished": "2025-03-27",
        "dateModified": "2025-03-27"
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
                "name": "Support for Loan Settlement During Medical Emergencies",
                "item": "https://www.credsettle.com/support-for-loan-settlement-during-medical-emergencies"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-medical-emergency"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-medical-emergency"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <MedicalEmergencySettlementClient />
            <Footer />
        </div>
    );
}
