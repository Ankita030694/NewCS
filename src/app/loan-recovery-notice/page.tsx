import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanRecoveryNoticeClient from './LoanRecoveryNoticeClient';

export const metadata: Metadata = {
    title: "Loan Recovery Notice Received: What It Means & How to Respond",
    description: "Received a loan recovery notice from your bank? Don't panic. Learn the difference between a demand letter and a court summons, and get a legal reply format.",
    keywords: [
        "loan recovery notice format",
        "legal notice for bank loan default",
        "how to reply to loan recovery letter",
        "bank recovery notice",
        "demand notice vs summons"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/loan-recovery-notice',
    },
};

export default function LoanRecoveryNoticePage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Loan Recovery Notice Received: What Does It Mean and How to Respond?",
        "description": "A comprehensive legal guide on handling bank loan recovery notices, understanding the difference from court summons, and drafting a proper legal response.",
        "image": "https://www.credsettle.com/images/loan-recovery-notice.jpg",
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
                "name": "Loan Recovery Notice Guide",
                "item": "https://www.credsettle.com/loan-recovery-notice"
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is a loan recovery notice the same as a court summons?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. A loan recovery notice is simply a formal demand letter from the bank or a collection agency asking you to clear your dues. A court summons is issued by a judge and requires your presence or a lawyer's presence in a court of law."
                }
            },
            {
                "@type": "Question",
                "name": "What happens if I ignore a legal notice for bank loan default?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ignoring the notice gives the bank a clear path to initiate further legal action, such as filing a civil recovery suit, declaring the account an NPA, or in the case of secured loans, initiating SARFAESI proceedings. A timely, well-drafted reply can stall these actions."
                }
            },
            {
                "@type": "Question",
                "name": "How many days do I have to reply to a loan recovery letter?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Typically, the notice itself will stipulate a timeframe, usually 7, 14, or 30 days. For specific statutory notices like a Section 13(2) SARFAESI notice, you have exactly 60 days to respond or clear the dues, but replying within 30 days is highly recommended."
                }
            },
            {
                "@type": "Question",
                "name": "Can I use the recovery notice as an opportunity to settle the loan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, absolutely. Receiving a notice often means the bank is ready to escalate, but they would still prefer to recover money without court fees. Replying with a valid hardship explanation and a structured settlement offer is a very effective strategy."
                }
            },
            {
                "@type": "Question",
                "name": "Do I need a lawyer to reply to a bank recovery notice?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While you can draft a reply yourself, it is highly recommended to have a lawyer review it. A poorly worded reply might accidentally admit to liabilities you could otherwise negotiate or waive off. A lawyer ensures your rights are protected."
                }
            }
        ]
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Loan Recovery Notice Defense Services",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "2150",
            "bestRating": "5",
            "worstRating": "1"
        }
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="review-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
            />
            <LoanRecoveryNoticeClient />
                        </div>
            <Footer />
        </div>
    );
}
