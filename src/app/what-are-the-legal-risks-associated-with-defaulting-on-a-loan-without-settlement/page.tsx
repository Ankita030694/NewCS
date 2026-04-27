import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LegalRisksClient from './LegalRisksClient';

export const metadata: Metadata = {
    title: "Legal Risks of Loan Default Without Settlement",
    description: "Understand the severe legal risks associated with defaulting on a loan without settlement in India, including RBI rules, Sections 138 & 25, SARFAESI Act, and more.",
    keywords: [
        "legal risks of loan default India",
        "defaulting on loan without settlement",
        "loan default legal consequences India",
        "Section 138 Negotiable Instruments Act",
        "Section 25 Payment and Settlement Systems Act",
        "SARFAESI Act loan default",
        "DRT loan recovery process",
        "is loan default a criminal offense in India",
        "RBI guidelines for loan recovery agents"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/what-are-the-legal-risks-associated-with-defaulting-on-a-loan-without-settlement',
    },
};

export default function LegalRisksPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What are the Legal Risks Associated with Defaulting on a Loan Without Settlement?",
        "description": "A comprehensive 2025 guide detailing the legal and financial repercussions of loan defaults in India, from civil suits to criminal implications under Sections 138 and 25.",
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
                "name": "Legal Risks of Loan Default",
                "item": "https://www.credsettle.com/what-are-the-legal-risks-associated-with-defaulting-on-a-loan-without-settlement"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-legal-risks"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-legal-risks"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <LegalRisksClient />
            <Footer />
        </div>
    );
}
