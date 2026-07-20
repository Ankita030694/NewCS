import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DrtJurisdictionClient from './DrtJurisdictionClient';

export const metadata: Metadata = {
    title: "DRT Jurisdiction Limit India: Min Amount for Loan Recovery",
    description: "Learn the exact DRT jurisdiction limit in India. Can a bank sue you for a 5 Lakh default? We expose fake recovery threats and explain the 20 Lakh minimum limit.",
    keywords: [
        "drt jurisdiction limit India",
        "minimum amount for drt case",
        "can bank go to drt for 5 lakhs",
        "debt recovery tribunal rules 2026",
        "drt minimum pecuniary limit",
        "fake legal notice personal loan"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/drt-jurisdiction-minimum-limit-loan-recovery',
    },
};

export default function DrtJurisdictionPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "DRT Jurisdiction Limit in India: Can a Bank Sue You for a 5 Lakh Default?",
        "description": "Learn the exact DRT jurisdiction limit in India. Can a bank sue you for a 5 Lakh default? We expose fake recovery threats and explain the 20 Lakh minimum limit.",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "author": {
            "@type": "Person",
            "name": "CredSettle Legal Expert"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": "2025-06-25",
        "dateModified": "2025-06-25"
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
                "name": "DRT Jurisdiction Limit India",
                "item": "https://www.credsettle.com/drt-jurisdiction-minimum-limit-loan-recovery"
            }
        ]
    };

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the minimum amount required to file a case in the DRT?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The minimum pecuniary jurisdiction for the Debt Recovery Tribunal (DRT) is Rs. 20 Lakhs. Any default below this amount cannot be entertained by the tribunal."
                }
            },
            {
                "@type": "Question",
                "name": "Can a bank go to DRT for a 5 Lakh personal loan default?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Because 5 Lakhs is well below the statutory minimum limit of 20 Lakhs, the bank is legally barred from filing a recovery suit in the DRT for this amount."
                }
            },
            {
                "@type": "Question",
                "name": "Why do recovery agents threaten DRT action for small loans?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Recovery agents use the term DRT purely as a psychological scare tactic. They know most borrowers are unaware of the 20 Lakh limit and use the fear of severe tribunal action to force immediate payments."
                }
            },
            {
                "@type": "Question",
                "name": "Where do banks file cases for loans under 20 Lakhs?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For amounts under 20 Lakhs, banks must file a standard recovery suit in a regular civil court, or they may refer the matter to the Lok Adalat for an amicable settlement."
                }
            },
            {
                "@type": "Question",
                "name": "Is a legal notice mentioning DRT for a 3 Lakh loan fake?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, if the legal notice explicitly threatens to file a case in the DRT for a 3 Lakh default, it is a legally unsound bluff. Such notices are often generated in bulk by collection agencies."
                }
            },
            {
                "@type": "Question",
                "name": "Did the government recently change the DRT jurisdiction rules?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, the Central Government raised the minimum limit from 10 Lakhs to 20 Lakhs through a notification, primarily to reduce the massive backlog of small cases burdening the tribunals."
                }
            },
            {
                "@type": "Question",
                "name": "Can multiple small loans be clubbed together to reach the 20 Lakh DRT limit?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Only if multiple loans were taken by the exact same borrower from the exact same bank and the bank chooses to file a single consolidated recovery suit. Otherwise, individual small loans cannot be clubbed."
                }
            }
        ]
    };

    const reviewLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "DRT Jurisdiction Legal Advisory",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "3"
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-drt"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-drt"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="faq-schema-drt"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
            />
            <Script
                id="review-schema-drt"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewLd) }}
            />
            <DrtJurisdictionClient />
            <Footer />
        </div>
    );
}
