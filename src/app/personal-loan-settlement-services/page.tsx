import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PersonalLoanSettlementServicesClient from './PersonalLoanSettlementServicesClient';

export const metadata: Metadata = {
    title: "Best Personal Loan Settlement Services & Agency in India",
    description: "Looking for professional loan settlement help? Learn how our debt settlement agency in India protects you from DRT litigation, drafts legal notices, and secures your NOC without upfront fee scams.",
    keywords: [
        "best personal loan settlement services",
        "debt settlement agency India",
        "professional loan settlement help",
        "personal loan default help",
        "DRT litigation protection",
        "NOC securing services"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/personal-loan-settlement-services',
    },
};

export default function PersonalLoanSettlementServicesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Personal Loan Settlement Services: Professional Loan Settlement Help in India",
        "description": "Discover how a professional debt settlement agency in India provides legal protection from DRT litigation, drafts legal notices to Nodal Officers, and secures your final NOC.",
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
        "datePublished": "2026-08-11",
        "dateModified": "2026-08-11"
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
                "name": "Personal Loan Settlement Services",
                "item": "https://www.credsettle.com/personal-loan-settlement-services"
            }
        ]
    };

    const reviewLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Professional Personal Loan Settlement Services",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1240",
            "bestRating": "5",
            "worstRating": "1"
        }
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-pl-settlement"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-pl-settlement"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="review-schema-pl-settlement"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewLd) }}
            />
            <PersonalLoanSettlementServicesClient />
                        </div>
            <Footer />
        </div>
    );
}
