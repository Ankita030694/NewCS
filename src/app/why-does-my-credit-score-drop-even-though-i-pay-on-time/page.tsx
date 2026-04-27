import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CreditScoreDropClient from './CreditScoreDropClient';

export const metadata: Metadata = {
    title: "Why Does My Credit Score Drop Even If I Pay on Time?",
    description: "Confused why your credit score is dropping despite making timely payments? Discover the hidden reasons including CUR, hard inquiries, and errors on your CIBIL report.",
    keywords: [
        "why does my credit score drop even though i pay on time",
        "credit score dropping despite on time payments",
        "CIBIL score drop reasons India",
        "credit utilization ratio impact",
        "hard inquiries and credit score",
        "errors on credit report India",
        "how to improve credit score after drop",
        "amalegal solutions credit help",
        "credsettle credit repair"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/why-does-my-credit-score-drop-even-though-i-pay-on-time',
    },
};

export default function CreditScoreDropPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Why Does My Credit Score Drop Even Though I Pay on Time? A Comprehensive 2026 Analysis",
        "description": "An exhaustive guide exploring the complex factors that cause credit score fluctuations in India, even for disciplined borrowers who never miss a payment.",
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
        "datePublished": "2026-03-28",
        "dateModified": "2026-03-28"
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
                "name": "Why Does My Credit Score Drop Even Though I Pay on Time",
                "item": "https://www.credsettle.com/why-does-my-credit-score-drop-even-though-i-pay-on-time"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen font-sans">
            <Navbar />
            <Script
                id="article-schema-score-drop"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-score-drop"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <CreditScoreDropClient />
            <Footer />
        </div>
    );
}
