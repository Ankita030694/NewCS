import React from 'react';
import Script from 'next/script';
import BestAppsClient from './BestAppsClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: '10 Best Apps for Unsecured Loan Settlement in India',
  description: 'Discover the top-rated apps for debt resolution and loan settlement in India. Featuring AMA Legal Solutions, SingleDebt, and AI-powered debt trackers to help you become debt-free.',
  keywords: 'best loan settlement apps india, debt management apps 2025, ama legal solutions app, unsecured loan settlement help, settle credit card debt app, rbi compliant debt apps',
  alternates: {
    canonical: 'https://www.credsettle.com/best-apps-for-managing-and-settling-unsecured-loans',
  },
};

export default function BestAppsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "10 Best Apps for Managing and Settling Unsecured Loans in India (2025)",
        "description": "Discover the top-rated apps for debt resolution and loan settlement in India. Featuring AMA Legal Solutions, SingleDebt, and AI-powered debt trackers to help you become debt-free.",
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
        "datePublished": "2025-02-15",
        "dateModified": "2025-02-28"
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
                "name": "Best Apps for Managing and Settling Unsecured Loans",
                "item": "https://www.credsettle.com/best-apps-for-managing-and-settling-unsecured-loans"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-best-apps"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-best-apps"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <BestAppsClient />
            <Footer />
        </div>
    );
}
