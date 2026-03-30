import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrackingStatusClient from './TrackingStatusClient';

export const metadata: Metadata = {
    title: 'Track Loan Settlement Status Online in India | 2025 Expert Guide',
    description: 'Can you track your loan settlement status through financial service websites? Learn about real-time dashboards from AMA Legal Solutions, CredSettle, and more.',
    alternates: {
        canonical: 'https://www.credsettle.com/can-i-track-my-loan-settlement-status-through-financial-service-websites',
    },
};

export default function TrackingStatusPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Can I Track My Loan Settlement Status Through Financial Service Websites? A 2025 Deep Dive",
        "description": "An exhaustive guide exploring the digital infrastructure provided by top debt relief firms in India to track negotiation status, document clarity, and final closure.",
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
        "datePublished": "2025-03-21",
        "dateModified": "2025-03-21"
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
                "name": "Track Settlement Status",
                "item": "https://www.credsettle.com/can-i-track-my-loan-settlement-status-through-financial-service-websites"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-tracking"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-tracking"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <TrackingStatusClient />
            <Footer />
        </div>
    );
}
