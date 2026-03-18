import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import SettlementStepsClient from './SettlementStepsClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '10 Essential Steps to Apply for a Loan Settlement through a Financial Service Provider (2025 Guide)',
  description: 'A massive 5000+ word ultimate guide on the step-by-step process of applying for loan settlement in India, incorporating latest RBI 2025 guidelines and recovery laws.',
  alternates: {
    canonical: 'https://www.credsettle.com/steps-to-apply-for-a-loan-settlement-through-a-financial-service-provider',
  },
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "10 Essential Steps to Apply for a Loan Settlement through a Financial Service Provider (2025 Guide)",
        "description": "A massive 5000+ word ultimate guide on the step-by-step process of applying for loan settlement in India, incorporating latest RBI 2025 guidelines and recovery laws.",
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
        "datePublished": "2025-02-12",
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
                "name": "Steps to Apply for a Loan Settlement",
                "item": "https://www.credsettle.com/steps-to-apply-for-a-loan-settlement-through-a-financial-service-provider"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-steps"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-steps"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <SettlementStepsClient />
            <Footer />
        </div>
    );
}
