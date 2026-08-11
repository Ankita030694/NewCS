import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CanIPayExtraEmiClient from './CanIPayExtraEmiClient';

export const metadata: Metadata = {
    title: "Can I Pay Extra EMI for Personal Loan? | Part-Payment Guide",
    description: "Learn the mechanical difference between advance EMI and part-payment. Find out how to correctly use your bonus to pay extra EMI on your personal loan and save on interest.",
    keywords: [
        "pay extra EMI personal loan",
        "how to make advance EMI payment",
        "benefits of paying extra EMI",
        "personal loan part payment",
        "bonus personal loan payment",
        "advance EMI versus part payment",
        "reduce personal loan principal",
        "save interest on personal loan"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/can-i-pay-extra-emi-for-personal-loan',
    },
};

export default function CanIPayExtraEmiPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Can You Pay an Extra EMI Towards Your Personal Loan?",
        "description": "A comprehensive guide explaining the difference between an advance EMI and a part-payment, and how salaried employees can effectively use their bonus to reduce personal loan debt.",
        "image": "https://www.credsettle.com/images/extra-emi-personal-loan.jpg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle Financial Advisory"
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
                "name": "Can I Pay Extra EMI for Personal Loan",
                "item": "https://www.credsettle.com/can-i-pay-extra-emi-for-personal-loan"
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
                id="article-schema-extra-emi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-extra-emi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-extra-emi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <CanIPayExtraEmiClient />
                        </div>
            <Footer />
        </div>
    );
}
