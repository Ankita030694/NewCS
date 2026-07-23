import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HowToRegulariseClient from './HowToRegulariseClient';

export const metadata: Metadata = {
    title: "How to Regularise an Overdue Loan Account (NPA to Standard) | CredSettle",
    description: "Learn the legal steps to regularise your loan account and upgrade from NPA to Standard. Discover how to clear overdue arrears for loan accounts under RBI norms.",
    keywords: [
        "regularise loan account",
        "upgrade NPA to standard account",
        "clear overdue arrears for loan",
        "RBI norms on NPA regularisation",
        "how to change NPA to standard",
        "legal process to clear NPA account"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/how-to-regularise-overdue-loan-account-npa-to-standard',
    },
};

export default function HowToRegularisePage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Regularise an Overdue Loan Account: The NPA to Standard Upgrade Guide",
        "description": "A comprehensive, 2500+ word legal guide explaining the process of upgrading an NPA account back to a Standard account by clearing overdue arrears.",
        "image": "https://www.credsettle.com/images/regularise-npa-standard.jpg",
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
        "datePublished": "2025-07-23",
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
                "name": "Regularise Overdue Loan Account",
                "item": "https://www.credsettle.com/how-to-regularise-overdue-loan-account-npa-to-standard"
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What exactly does it mean to regularise a loan account?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To regularise a loan account means to pay the exact amount of critical overdue arrears (all missed EMIs, late payment penalties, and bounce charges). Once these specific arrears are cleared, the bank is legally obligated under RBI guidelines to upgrade your account status from NPA back to a Standard performing asset."
                }
            },
            {
                "@type": "Question",
                "name": "Can I upgrade my NPA to a standard account by paying only one EMI?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Under the stringent RBI guidelines, paying a single EMI or a partial amount is not enough. You must clear the entire overdue arrears for the loan to force the system to reclassify the asset as Standard. Until the full overdue amount is resolved, the account remains trapped in the NPA category."
                }
            },
            {
                "@type": "Question",
                "name": "Does my CIBIL score improve immediately after I clear overdue arrears for a loan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While your account is immediately upgraded in the bank's internal system to Standard, your CIBIL score will show a gradual recovery. The 'Sub-Standard' or 'Doubtful' tag is removed in the next reporting cycle (usually 30 to 45 days). Over the subsequent months of timely payments, your credit score will rebound significantly."
                }
            },
            {
                "@type": "Question",
                "name": "Will regularising the account stop legal recovery actions like SARFAESI notices?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. The moment you clear the overdue arrears and upgrade the NPA to a standard account, the bank loses its legal standing to proceed with harsh recovery measures like SARFAESI Act asset seizure. You regain total control of your pledged collateral as long as future payments remain on track."
                }
            },
            {
                "@type": "Question",
                "name": "What if the bank refuses to reclassify my account after I pay the arrears?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If a bank accepts your full overdue payment but fails to upgrade your status to Standard within a reasonable timeframe, they are violating RBI Master Directions. You have the right to file an official grievance with the RBI Banking Ombudsman, who can penalize the bank and mandate the immediate restoration of your account status."
                }
            }
        ]
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "NPA Regularisation Legal Guidance",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "2150",
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": [
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Suresh Nair"
                },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "reviewBody": "My home loan was declared an NPA and I thought I would lose my house to the SARFAESI notice. CredSettle explained exactly how to calculate the critical arrears. Once I paid that specific amount, the bank had to regularise my loan account. My property is safe and my account is Standard again."
            },
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Priya Sharma"
                },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "reviewBody": "I had no idea that I could upgrade my NPA to a standard account without closing the entire massive principal amount. Clearing just the overdue arrears saved my business from being ruined by aggressive recovery agents. Highly recommend their strategic guidance."
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-regularise"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-regularise"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="faq-schema-regularise"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="review-schema-regularise"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
            />
            <HowToRegulariseClient />
            <Footer />
        </div>
    );
}
