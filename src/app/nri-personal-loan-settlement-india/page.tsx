import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NRIClient from './NRIClient';

export const metadata: Metadata = {
    title: "Loan Settlement for NRIs: Managing Indian Debt from Abroad",
    description: "Debunking Look Out Circular myths and explaining how NRIs can safely settle personal loans and credit cards in India entirely from abroad.",
    keywords: [
        "nri loan default in India",
        "nri personal loan settlement",
        "look out circular for loan default",
        "can nri be arrested in India for loan",
        "settle Indian credit card from abroad"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/nri-personal-loan-settlement-india',
    },
};

export default function NRILoanSettlementPage() {
    const jsonLdArticle = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Loan Settlement for NRIs: Managing Indian Debt from Abroad",
        "description": "Learn the legal reality of NRI loan defaults in India. We debunk travel ban myths and provide a step by step guide to settling debt remotely.",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "author": {
            "@type": "Organization",
            "name": "CredSettle Legal Team"
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
                "name": "NRI Loan Settlement",
                "item": "https://www.credsettle.com/nri-personal-loan-settlement-india"
            }
        ]
    };

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can an NRI be arrested in India for an unsecured loan default?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Defaulting on an unsecured personal loan or credit card is a civil dispute, not a criminal offense. You cannot be arrested upon landing in India simply for failing to pay a civil debt."
                }
            },
            {
                "@type": "Question",
                "name": "Can banks issue a Look Out Circular (LOC) for a credit card default?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. The Ministry of Home Affairs guidelines explicitly state that LOCs are reserved for cognizable offenses under the IPC, terrorism, or massive financial fraud detrimental to the economic interests of India, not retail loan defaults."
                }
            },
            {
                "@type": "Question",
                "name": "Will my passport be impounded if I visit India?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Banks do not have the authority to impound passports. Only a competent court or the passport authority can impound a passport, and this is exceedingly rare for standard unsecured civil defaults."
                }
            },
            {
                "@type": "Question",
                "name": "How can I settle my Indian credit card from abroad?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can execute a remote loan settlement by granting a specific Power of Attorney (POA) to a trusted legal representative in India who will negotiate with the bank, verify the settlement letter, and collect the No Dues Certificate on your behalf."
                }
            },
            {
                "@type": "Question",
                "name": "Can foreign recovery agents harass me in my country of residence?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Indian banks generally lack the cross border jurisdiction and resources to deploy recovery agents in foreign countries like the US, UK, or UAE for unsecured retail debts. Threats of sending foreign police are entirely fabricated."
                }
            }
        ]
    };

    const reviewLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "NRI Remote Loan Settlement Service",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "3"
        },
        "review": [
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Rajiv M." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                "reviewBody": "I was terrified to visit my sick parents in India because recovery agents threatened to arrest me at the airport for a defaulted credit card. CredSettle debunked the LOC myth and settled the debt remotely for 40%."
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Anita P." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                "reviewBody": "Living in Dubai, it was impossible to deal with the constant harassment from Indian banks. The legal team handled everything via Power of Attorney and secured my No Dues Certificate without me ever having to fly back."
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Sanjay D." },
                "reviewRating": { "@type": "Rating", "ratingValue": "4.8" },
                "reviewBody": "Very professional and transparent. They explained the civil nature of my default and stopped the illegal intimidation tactics immediately. Highly recommended for NRIs."
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-nri-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <Script
                id="breadcrumb-schema-nri-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="faq-schema-nri-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
            />
            <Script
                id="review-schema-nri-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewLd) }}
            />
            <NRIClient />
            <Footer />
        </div>
    );
}
