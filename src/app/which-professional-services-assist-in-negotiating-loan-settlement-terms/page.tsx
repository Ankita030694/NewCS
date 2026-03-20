import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProfessionalServicesClient from './ProfessionalServicesClient';

export const metadata: Metadata = {
    title: "Which Professional Services Assist in Negotiating Loan Settlement Terms? | CredSettle",
    description: "Expert guide on professional services for loan settlement in India. Learn how legal consultants and debt settlement firms negotiate terms, stop harassment, and reduce debt.",
    keywords: [
        "which professional services assist in negotiating loan settlement terms",
        "professional loan settlement services India",
        "debt negotiation services",
        "AMA Legal Solutions loan settlement",
        "CredSettle debt relief",
        "SettleLoans services",
        "legal help for loan default",
        "how to negotiate loan settlement with bank"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/which-professional-services-assist-in-negotiating-loan-settlement-terms',
    },
};

export default function ProfessionalServicesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Which Professional Services Assist in Negotiating Loan Settlement Terms? A Comprehensive 2025 Guide",
        "description": "An in-depth look at the professional services that help Indian borrowers negotiate loan settlements, including legal experts, specialized firms, and digital platforms.",
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
                "name": "Professional Services for Loan Settlement",
                "item": "https://www.credsettle.com/which-professional-services-assist-in-negotiating-loan-settlement-terms"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-prof-services"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-prof-services"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <ProfessionalServicesClient />
            <Footer />
        </div>
    );
}
