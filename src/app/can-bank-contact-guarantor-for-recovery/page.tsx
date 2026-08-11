import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GuarantorRecoveryClient from './GuarantorRecoveryClient';

export const metadata: Metadata = {
    title: "Can the Bank Contact Your Guarantor for Recovery? Legal Rights",
    description: "Understand the concept of co-extensive liability under Section 128 of the Indian Contract Act. Learn if banks can harass a guarantor for loan default and how to stop it.",
    keywords: [
        "bank recovery from guarantor",
        "guarantor liability in loan default",
        "can bank harass guarantor for loan",
        "Section 128 Indian Contract Act guarantor",
        "co-extensive liability of guarantor",
        "stop bank recovery agent guarantor",
        "loan default guarantor rights"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/can-bank-contact-guarantor-for-recovery',
    },
};

export default function GuarantorRecoveryPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Can the Bank Contact Your Guarantor for Recovery? The 2025 Guide",
        "description": "A deep dive into guarantor liability under Section 128 of the Indian Contract Act. Uncover the immediate steps to take if recovery agents show up at your guarantor's door.",
        "image": "https://www.credsettle.com/images/guarantor-liability.jpg",
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
                "name": "Guarantor Liability in Loan Recovery",
                "item": "https://www.credsettle.com/can-bank-contact-guarantor-for-recovery"
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
                id="article-schema-guarantor"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-guarantor"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-guarantor"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <GuarantorRecoveryClient />
                        </div>
            <Footer />
        </div>
    );
}
