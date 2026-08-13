import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReplyPersonalLoanLegalNoticeClient from './ReplyPersonalLoanLegalNoticeClient';

export const metadata: Metadata = {
    title: "How to Reply to a Personal Loan Legal Notice (Format & Tips)",
    description: "Received a legal notice from your bank for a personal loan default? Learn how to draft a legal reply, stall court action, and negotiate a settlement.",
    keywords: [
        "How to reply to personal loan legal notice",
        "Lawyer for personal loan legal notice",
        "legal notice for personal loan default",
        "can a lawyer respond to loan notice",
        "bank legal notice response",
        "personal loan default legal action",
        "stop bank recovery action"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/reply-personal-loan-legal-notice',
    },
};

export default function ReplyPersonalLoanLegalNoticePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Reply to a Personal Loan Legal Notice (Format & Tips)",
        "description": "Received a legal notice from your bank for a personal loan default? Learn how to draft a legal reply, stall court action, and negotiate a settlement.",
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
        "datePublished": "2026-08-13",
        "dateModified": "2026-08-13"
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
                "name": "How to Reply to a Personal Loan Legal Notice",
                "item": "https://www.credsettle.com/reply-personal-loan-legal-notice"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-legal-notice"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-legal-notice"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <ReplyPersonalLoanLegalNoticeClient />
            </div>
            <Footer />
        </div>
    );
}
