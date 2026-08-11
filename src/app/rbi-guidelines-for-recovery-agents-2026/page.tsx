import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RbiGuidelinesClient from './RbiGuidelinesClient';

export const metadata: Metadata = {
    title: "RBI Guidelines for Recovery Agents 2026",
    description: "Know your legal rights under RBI guidelines for recovery agents 2026. Stop harassment and file police complaints against illegal recovery practices.",
    keywords: [
        "rbi guidelines for recovery agents 2026",
        "stop recovery agent harassment",
        "legal rights of defaulters in India",
        "police complaint against recovery agents"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/rbi-guidelines-for-recovery-agents-2026',
    },
};

export default function RbiGuidelinesPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "RBI Guidelines for Recovery Agents 2026",
        "description": "Know your legal rights under RBI guidelines for recovery agents 2026. Stop harassment and file police complaints against illegal recovery practices.",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "author": {
            "@type": "Person",
            "name": "Anuj Bhiya",
            "image": "https://www.credsettle.com/anujbhiya.png"
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
                "name": "RBI Guidelines for Recovery Agents",
                "item": "https://www.credsettle.com/rbi-guidelines-for-recovery-agents-2026"
            }
        ]
    };

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What are the new RBI guidelines for recovery agents in 2026?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The updated RBI guidelines for 2026 strictly regulate contact hours, forbidding calls or visits before 8:00 AM or after 7:00 PM. They also explicitly outlaw any form of intimidation, public humiliation, or contacting the borrower's friends and family members."
                }
            },
            {
                "@type": "Question",
                "name": "Can a recovery agent visit my office under the new rules?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. The 2026 guidelines prohibit recovery agents from visiting a borrower's workplace or causing any public embarrassment. All communication must be restricted to the registered residential address and must be conducted respectfully."
                }
            },
            {
                "@type": "Question",
                "name": "How do I file a police complaint against recovery agents?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can file a formal FIR at your local police station under IPC Section 503 (Criminal Intimidation) and Section 506 (Punishment for Criminal Intimidation). It is highly recommended to present audio recordings, WhatsApp messages, or call logs as evidence of harassment."
                }
            },
            {
                "@type": "Question",
                "name": "Can banks use third-party agencies for loan recovery?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, banks can employ third-party recovery agencies, but they remain strictly liable for the actions of these agents. The bank is responsible for ensuring the agents comply entirely with RBI directives."
                }
            },
            {
                "@type": "Question",
                "name": "What should I do if a recovery agent calls my relatives?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Calling relatives is a severe breach of data privacy and RBI regulations. You should immediately send a legal notice to the bank's grievance redressal officer and escalate the matter to the RBI Ombudsman if the bank fails to act within thirty days."
                }
            },
            {
                "@type": "Question",
                "name": "Are there specific protections for unsecured loan defaulters?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, unsecured loan defaulters have the exact same rights against harassment as secured loan defaulters. The nature of the loan does not give the lender or their agents the right to bypass the established legal code of conduct."
                }
            },
            {
                "@type": "Question",
                "name": "Can recovery agents seize my property without court orders?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely not. Seizing property requires a legal mandate, typically initiated through the SARFAESI Act, which involves formal notices and specific timelines. Recovery agents do not have the legal authority to arbitrarily seize assets."
                }
            }
        ]
    };

    const reviewLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Legal Defence Against Recovery Agent Harassment",
        "description": "Expert legal services to stop illegal recovery agent harassment and file complaints under RBI guidelines.",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "3"
        }
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-rbi-guidelines"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-rbi-guidelines"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="faq-schema-rbi-guidelines"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
            />
            <Script
                id="review-schema-rbi-guidelines"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewLd) }}
            />
            <RbiGuidelinesClient />
                        </div>
            <Footer />
        </div>
    );
}
