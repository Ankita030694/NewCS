import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
import DebtEvaluationClient from './DebtEvaluationClient';

export const metadata: Metadata = {
    title: 'Free Debt Evaluation from a Settlement Firm (2025)',
    description: 'Get a professional analysis of your debt situation. Learn about eligibility, hardship documentation, and the roadmap to becoming debt-free in India.',
    alternates: {
        canonical: 'https://www.credsettle.com/request-a-free-evaluation-of-my-debt-situation-from-a-settlement-firm',
    },
};

export default function DebtEvaluationPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Request a Free Evaluation of My Debt Situation from a Settlement Firm",
        "description": "A detailed 2025 guide on the process of professional debt assessment, eligibility for settlement, and legal protections for borrowers in India.",
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
                "name": "Free Debt Evaluation",
                "item": "https://www.credsettle.com/request-a-free-evaluation-of-my-debt-situation-from-a-settlement-firm"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-debt-eval"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-debt-eval"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <DebtEvaluationClient />
                        </div>
            <Footer />
        </div>
    );
}
