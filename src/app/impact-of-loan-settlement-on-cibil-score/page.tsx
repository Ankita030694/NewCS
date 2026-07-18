import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImpactOfLoanSettlementClient from './ImpactOfLoanSettlementClient';

export const metadata: Metadata = {
    title: "Impact of Loan Settlement on CIBIL Score: The Hidden Cost",
    description: "Understand the exact point drop and long term impact of a loan settlement on your CIBIL score. Learn the difference between closed and settled status.",
    keywords: [
        "impact of loan settlement on cibil score",
        "cibil score after settlement",
        "how to improve cibil after settlement",
        "settled vs closed account cibil"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/impact-of-loan-settlement-on-cibil-score',
    },
};

export default function ImpactOfLoanSettlementPage() {
    const jsonLdArticle = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Impact of Loan Settlement on CIBIL Score: The Hidden Cost of Debt Relief",
        "description": "This page explains exactly how much the score drops, the difference between Closed and Settled, and the actionable steps to rebuild credit post-settlement.",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle Legal Team"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": "2026-07-18",
        "dateModified": "2026-07-18"
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
                "name": "Impact of Loan Settlement on CIBIL Score",
                "item": "https://www.credsettle.com/impact-of-loan-settlement-on-cibil-score"
            }
        ]
    };

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Does a loan settlement completely ruin my CIBIL score forever?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, a loan settlement does not ruin your credit score forever. It remains on your report for up to seven years. With consistent credit building habits, the negative impact diminishes over time."
                }
            },
            {
                "@type": "Question",
                "name": "How many points will my CIBIL score drop after settling a personal loan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "On average, you can expect your CIBIL score to drop by 75 to 100 points immediately after the lender updates the account status to Settled."
                }
            },
            {
                "@type": "Question",
                "name": "Can I convert a Settled status to a Closed status later?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can request the lender for a settlement closure by paying the waived amount. Once the remaining balance is paid, the lender can update the status from Settled to Closed."
                }
            },
            {
                "@type": "Question",
                "name": "Will a Settled status affect my chances of getting a home loan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, traditional banks typically reject home loan applications if there is a recent Settled status in your CIBIL report. You usually need to rebuild your score for two to three years."
                }
            },
            {
                "@type": "Question",
                "name": "How long does a Settled status stay on my CIBIL report in India?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "According to credit bureau reporting guidelines in India, a Settled status will typically remain visible on your credit report for up to seven years."
                }
            },
            {
                "@type": "Question",
                "name": "Is it better to pay the minimum amount due or go for a settlement?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Paying only the minimum due keeps the account active but traps you in high interest cycles. A settlement stops the interest accumulation but damages your score. It depends on your financial capacity."
                }
            },
            {
                "@type": "Question",
                "name": "Can I get a secured credit card immediately after a loan settlement?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, getting a secured credit card backed by a fixed deposit is one of the most effective and accessible ways to start rebuilding your CIBIL score immediately after a settlement."
                }
            }
        ]
    };

    const reviewLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Loan Settlement Services",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "3"
        },
        "review": [
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Rahul Verma" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                "reviewBody": "CredSettle helped me understand the exact impact of loan settlement on my CIBIL score. Their guidance allowed me to rebuild my credit score over two years."
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Sneha Patil" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                "reviewBody": "I was confused about the difference between a closed and settled account. The legal experts at CredSettle explained the long term consequences clearly."
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Arjun Nair" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                "reviewBody": "Excellent service. I settled my personal loan and followed their post settlement timeline to secure a secured credit card and improve my score."
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
            />
            <Script
                id="review-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewLd) }}
            />
            <ImpactOfLoanSettlementClient />
            <Footer />
        </div>
    );
}
