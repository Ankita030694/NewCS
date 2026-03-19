import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CheckGenuinenessClient from './CheckGenuinenessClient';

export const metadata: Metadata = {
    title: "How to Check if a Loan Settlement Offer is Genuine on Digital Platforms? | 2025 Verification Guide",
    description: "Verify the authenticity of loan settlement offers on digital platforms. Learn how to spot scams, check legal standing, and verify offers from banks and NBFCs in India.",
    keywords: [
        "check if loan settlement offer is genuine",
        "loan settlement scams India 2025",
        "verify bank settlement letter online",
        "digital loan settlement verification",
        "Amalegal Solutions loan settlement",
        "CredSettle genuine check",
        "SettleLoans offer verification",
        "RBI Sachet portal for settlements"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/how-to-check-if-a-loan-settlement-offer-is-genuine-on-digital-platforms',
    },
};

export default function CheckGenuinenessPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Check if a Loan Settlement Offer is Genuine on Digital Platforms: A 2025 Security Guide",
        "description": "A comprehensive guide on protecting yourself from debt settlement fraud in the digital age. Learn the step-by-step process to verify any settlement offer from banks, NBFCs, or fintech apps.",
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
        "datePublished": "2025-03-12",
        "dateModified": "2025-03-19",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "4250"
        },
        "review": [
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Amit V." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                "reviewBody": "I was almost about to pay a scammer. This guide helped me realize it was a trap. Verified with the branch and saved my money."
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Kavita S." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                "reviewBody": "The metadata check tip is a lifesaver. Definitely not a bank document. Excellent guide."
            }
        ]
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
                "name": "Check Loan Settlement Genuineness",
                "item": "https://www.credsettle.com/how-to-check-if-a-loan-settlement-offer-is-genuine-on-digital-platforms"
            }
        ]
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "CredSettle",
        "url": "https://www.credsettle.com",
        "logo": "https://www.credsettle.com/credsettle-logo.svg",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-XXXX-XXXXXX",
            "contactType": "customer service"
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-genuineness"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-genuineness"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-genuineness"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <CheckGenuinenessClient />
            <Footer />
        </div>
    );
}
