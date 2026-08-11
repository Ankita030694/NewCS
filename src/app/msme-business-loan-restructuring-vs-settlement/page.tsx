import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MsmeRestructuringClient from './MsmeRestructuringClient';

export const metadata: Metadata = {
    title: "MSME Business Loan Restructuring vs Settlement in India",
    description: "Learn the critical differences between MSME loan restructuring and One Time Settlement (OTS). Save your business from NPA status and preserve commercial credit.",
    keywords: [
        "msme loan restructuring",
        "business loan settlement India",
        "one time settlement ots scheme",
        "msme NPA resolution",
        "how to settle business loan"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/msme-business-loan-restructuring-vs-settlement',
    },
};

export default function MsmeRestructuringPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "MSME Business Loan Restructuring vs. Settlement: Saving Your Company",
        "description": "A comprehensive guide for Indian MSMEs on choosing between loan restructuring and One Time Settlement (OTS) to resolve working capital defaults and NPA classifications.",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "author": {
            "@type": "Person",
            "name": "Anuj Bhiya"
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
                "name": "MSME Restructuring vs Settlement",
                "item": "https://www.credsettle.com/msme-business-loan-restructuring-vs-settlement"
            }
        ]
    };

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the difference between MSME loan restructuring and settlement?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Restructuring involves modifying the terms of your existing loan (like extending tenure or reducing interest) to make EMIs affordable, allowing you to repay the full principal and keep a clean credit score. Settlement (OTS) means paying a negotiated lump sum that is less than the total outstanding to close the account, which negatively impacts your commercial CIBIL score."
                }
            },
            {
                "@type": "Question",
                "name": "Can an MSME account be restructured after it becomes an NPA?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Generally, banks prefer restructuring before an account is classified as a Non-Performing Asset (NPA). However, under specific RBI frameworks for stressed MSMEs, restructuring can sometimes be negotiated even after NPA classification, provided the business shows viability."
                }
            },
            {
                "@type": "Question",
                "name": "How does a loan settlement affect my company's ability to get future loans?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A loan settlement significantly damages your Company Credit Report (CMR) and personal CIBIL score, marking the account as 'Settled'. This makes it extremely difficult to secure institutional credit for your business for several years."
                }
            },
            {
                "@type": "Question",
                "name": "Are MSMEs protected from SARFAESI Act proceedings during restructuring?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, once a formal restructuring plan is submitted and accepted by the lending consortium, recovery actions under the SARFAESI Act are typically put on hold to allow the business to rehabilitate."
                }
            },
            {
                "@type": "Question",
                "name": "What documents are required to apply for MSME loan restructuring?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You will need a detailed restructuring proposal (Resolution Plan), projected cash flows, audited balance sheets, proof of MSME registration (Udyam), and a justification for the financial distress."
                }
            },
            {
                "@type": "Question",
                "name": "Is it possible to negotiate an OTS without closing down the business?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, it is entirely possible. An OTS simply settles the debt with the specific bank. You can continue operating your business using internal accruals or alternative non-institutional funding sources, though institutional borrowing will be restricted."
                }
            }
        ]
    };

    const reviewLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "MSME Loan Restructuring and Settlement Services",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "description": "Expert legal and financial advisory for MSMEs facing working capital defaults and NPA classification.",
        "brand": {
            "@type": "Brand",
            "name": "CredSettle"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "2"
        },
        "review": [
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Rajesh Mehta"
                },
                "datePublished": "2025-11-20",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                },
                "reviewBody": "We thought our manufacturing unit was doomed when the bank issued an NPA notice. CredSettle guided us through the RBI restructuring framework, saving our factory from SARFAESI auction and reducing our EMIs by 40%."
            },
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Sunita Aggarwal"
                },
                "datePublished": "2026-04-15",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                },
                "reviewBody": "Our retail business took a massive hit, and we couldn't service our CC limit. The legal team helped us negotiate an OTS that saved us over 50 lakhs, allowing us to pivot the business without the bank breathing down our necks."
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-msme-restructuring"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-msme-restructuring"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="faq-schema-msme-restructuring"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
            />
            <Script
                id="review-schema-msme-restructuring"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewLd) }}
            />
            <MsmeRestructuringClient />
                        </div>
            <Footer />
        </div>
    );
}
