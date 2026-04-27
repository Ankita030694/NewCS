import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CollectionCallsClient from './CollectionCallsClient';

export const metadata: Metadata = {
    title: "Dealing with Collection Calls in Debt Settlement (2025)",
    description: "Learn how to handle collection calls and harassment while in a debt settlement program. Expert guide on RBI 2025/2026 guidelines, legal rights, and grievance redressal.",
    keywords: [
        "how to deal with collection calls during debt settlement",
        "RBI recovery agent guidelines 2025",
        "stop harassment from debt collectors India",
        "legal rights against collection calls",
        "recovery agent calling family members law India",
        "collection calls timing RBI India",
        "how to respond to bank collection calls",
        "debt settlement harassment protection"
    ],
    authors: [{ name: "CredSettle Legal Compliance Team" }],
    alternates: {
        canonical: 'https://www.credsettle.com/how-to-deal-with-collection-calls-while-in-a-debt-settlement-program',
    },
};

export default function CollectionCallsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Deal with Collection Calls in Debt Settlement: The 2025 Legal Playbook",
        "description": "A comprehensive 5000+ word manual on managing creditor communication and preventing illegal harassment during the debt settlement process in India.",
        "image": "https://www.credsettle.com/images/collection-calls-guidelines.jpg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/logo.png"
            }
        },
        "datePublished": "2025-02-15",
        "dateModified": "2025-03-16"
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
                "name": "Dealing with Collection Calls Guide",
                "item": "https://www.credsettle.com/how-to-deal-with-collection-calls-while-in-a-debt-settlement-program"
            }
        ]
    };

    const organizationLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "CredSettle",
        "url": "https://www.credsettle.com",
        "logo": "https://www.credsettle.com/logo.png"
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-collection-calls"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-collection-calls"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-collection-calls"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <CollectionCallsClient />
            <Footer />
        </div>
    );
}
