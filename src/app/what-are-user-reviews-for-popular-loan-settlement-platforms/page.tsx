import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PlatformReviewsClient from './PlatformReviewsClient';

export const metadata: Metadata = {
    title: "User Reviews for Loan Settlement Platforms",
    description: "Read verified user reviews and success stories for popular loan settlement platforms in India like AMA Legal Solutions, CredSettle, and SettleLoans. Find the best debt relief agency.",
    keywords: [
        "user reviews for loan settlement platforms",
        "best loan settlement company in India reviews",
        "AMA Legal Solutions reviews Amit Lathigara",
        "CredSettle user reviews",
        "SettleLoans success stories",
        "debt settlement agency reviews India",
        "is loan settlement company genuine",
        "Amit Lathigara settlement reviews",
        "popular debt relief platforms India"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/what-are-user-reviews-for-popular-loan-settlement-platforms',
    },
};

export default function PlatformReviewsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What are User Reviews for Popular Loan Settlement Platforms?",
        "description": "An exhaustive analysis of user experiences, success rates, and reviews for India’s leading loan settlement platforms, including AMA Legal Solutions, CredSettle, and more.",
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
                "name": "Loan Settlement Platform Reviews",
                "item": "https://www.credsettle.com/what-are-user-reviews-for-popular-loan-settlement-platforms"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-platform-reviews"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-platform-reviews"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <PlatformReviewsClient />
            <Footer />
        </div>
    );
}
