import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NbfcRecoveryClient from './NbfcRecoveryClient';

export const metadata: Metadata = {
    title: "How to Stop NBFC Recovery Agent Home Visits in India",
    description: "Learn the exact legal protocols NBFCs like Bajaj Finance must follow for home visits. Stop recovery agent harassment and demand DRA authorization legally.",
    keywords: [
        "nbfc recovery agent home visit",
        "bajaj finance recovery agent harassment",
        "how to stop recovery agents coming home",
        "rbi rules for home visit by bank"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/nbfc-recovery-agent-home-visit-stop',
    },
};

export default function NbfcRecoveryPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "NBFC Recovery Agent Home Visit: How to Legally Stop Them (Bajaj Finance, etc.)",
        "description": "A comprehensive guide for borrowers to understand RBI rules, handle unannounced home visits by NBFC recovery agents, and take legal action against harassment.",
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
                "name": "Stop NBFC Recovery Agents",
                "item": "https://www.credsettle.com/nbfc-recovery-agent-home-visit-stop"
            }
        ]
    };

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can a recovery agent visit my home without prior notice?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, according to the RBI's Fair Practices Code, recovery agents must provide prior notice and mutually agree on a time before visiting your residence. Unannounced visits are a direct violation of regulatory guidelines."
                }
            },
            {
                "@type": "Question",
                "name": "What are the legal visiting hours for recovery agents in India?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The RBI strictly mandates that recovery agents can only contact borrowers, either by phone or in person, between 07:00 AM and 07:00 PM."
                }
            },
            {
                "@type": "Question",
                "name": "What documents should I ask for when an agent arrives at my door?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You must demand to see their official ID card issued by the bank or agency, the specific Authorization Letter for your case, and a valid Debt Recovery Agent (DRA) certificate issued by the Indian Institute of Banking and Finance (IIBF)."
                }
            },
            {
                "@type": "Question",
                "name": "Can I file a police complaint against abusive recovery agents?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, if an agent uses abusive language, threatens violence, or attempts to enter your home forcefully, you can file a criminal complaint for trespassing, criminal intimidation, and extortion under relevant sections of the Indian Penal Code (IPC)."
                }
            },
            {
                "@type": "Question",
                "name": "How can a lawyer help stop NBFC recovery harassment?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A specialized lawyer can issue a formal cease-and-desist notice to the NBFC, route all future communication through the law firm, file complaints with the Banking Ombudsman, and initiate civil suits for damages if the harassment continues."
                }
            }
        ]
    };

    const reviewLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Anti-Harassment Legal Services",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "description": "Legal protection services against illegal recovery agent harassment and unannounced home visits.",
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
                    "name": "Suresh Kumar"
                },
                "datePublished": "2025-10-12",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                },
                "reviewBody": "Agents from a major NBFC were showing up at my office and humiliating me in front of colleagues. The legal notice drafted by CredSettle stopped the visits instantly. They even helped me file a complaint with the RBI."
            },
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Meera Joshi"
                },
                "datePublished": "2026-02-28",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                },
                "reviewBody": "I was terrified to open my front door because of constant unannounced visits. The lawyers here taught me exactly what documents to ask for, which made the fake agents run away. Highly recommend their services."
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-nbfc-recovery"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-nbfc-recovery"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="faq-schema-nbfc-recovery"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
            />
            <Script
                id="review-schema-nbfc-recovery"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewLd) }}
            />
            <NbfcRecoveryClient />
                        </div>
            <Footer />
        </div>
    );
}
