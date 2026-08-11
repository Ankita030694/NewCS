import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PrepayingLoanImpactOnCreditScoreClient from './PrepayingLoanImpactOnCreditScoreClient';

export const metadata: Metadata = {
    title: "Does Prepaying a Loan Improve or Hurt Your Credit Score? (2025)",
    description: "Discover the nuanced algorithm behind loan pre-closure and how early payoff impacts your CIBIL score. Learn how to mitigate temporary score drops when closing a credit line.",
    keywords: [
        "does prepaying loan improve CIBIL score",
        "early loan payoff impact on credit score",
        "CIBIL score after loan pre closure",
        "credit mix algorithm",
        "active credit line closure"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/prepaying-loan-impact-on-credit-score',
    },
};

export default function PrepayingLoanImpactOnCreditScorePage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Does Prepaying a Loan Improve or Hurt Your Credit Score?",
        "description": "Borrowers assume paying off a loan years early instantly boosts their CIBIL score, but many are shocked when their score drops due to closed active credit lines.",
        "image": "https://www.credsettle.com/images/prepaying-loan-credit-score.jpg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle Consumer Protection Wing"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": "2025-03-07",
        "dateModified": "2026-03-07"
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
                "name": "Prepaying Loan Impact on Credit Score",
                "item": "https://www.credsettle.com/prepaying-loan-impact-on-credit-score"
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
                id="article-schema-prepay"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-prepay"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-prepay"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <PrepayingLoanImpactOnCreditScoreClient />
                        </div>
            <Footer />
        </div>
    );
}
