import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactBankingOmbudsmanClient from './ContactBankingOmbudsmanClient';

export const metadata: Metadata = {
    title: "How to Contact the Banking Ombudsman Regarding Harassment Complaints",
    description: "Learn the exact escalation matrix for filing a formal complaint with the RBI Banking Ombudsman to penalize the bank for harassment by recovery agents.",
    keywords: [
        "RBI banking ombudsman complaint online",
        "how to report recovery agent harassment",
        "RBI rules for recovery agents",
        "banking ombudsman complaint procedure",
        "stop recovery agent harassment"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/how-to-contact-the-banking-ombudsman-regarding-harassment-complaints',
    },
};

export default function ContactBankingOmbudsmanPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Contact the Banking Ombudsman Regarding Harassment Complaints",
        "description": "Learn the exact escalation matrix for filing a formal complaint with the RBI Banking Ombudsman to penalize the bank for harassment by recovery agents.",
        "image": "https://www.credsettle.com/images/rbi-ombudsman-complaint.jpg",
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
        "datePublished": "2026-07-30",
        "dateModified": "2026-07-30"
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
                "name": "How to Contact the Banking Ombudsman",
                "item": "https://www.credsettle.com/how-to-contact-the-banking-ombudsman-regarding-harassment-complaints"
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
                id="article-schema-ombudsman"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-ombudsman"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-ombudsman"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <ContactBankingOmbudsmanClient />
                        </div>
            <Footer />
        </div>
    );
}
