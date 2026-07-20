import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WrittenOffClient from './WrittenOffClient';

export const metadata: Metadata = {
    title: "Loan Written-Off vs Settled in India: Which is Worse?",
    description: "Did your bank write off your loan? Learn why a write-off does not mean debt forgiveness, how it destroys your CIBIL score, and why a settlement is safer.",
    keywords: [
        "loan written off vs settled",
        "what does written off mean in cibil",
        "can bank recover written off loan",
        "write off loan settlement"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/loan-written-off-vs-settled-cibil-impact',
    },
};

export default function WrittenOffPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Loan Written-Off vs. Settled: What is the Difference and Which is Worse?",
        "description": "A deep dive into the dangerous misconception that a loan write-off means debt forgiveness. Learn the legal and CIBIL impact differences between written-off and settled statuses.",
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
        "datePublished": "2026-07-20",
        "dateModified": "2026-07-20"
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
                "name": "Write-Offs vs Settlements",
                "item": "https://www.credsettle.com/loan-written-off-vs-settled-cibil-impact"
            }
        ]
    };

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What does a 'Written Off' status mean on my CIBIL report?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It means the bank has internally removed your loan from its active balance sheet because you haven't paid for over 180 days. It does NOT mean the bank has forgiven the debt."
                }
            },
            {
                "@type": "Question",
                "name": "Can the bank still sue me if the loan is written off?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, absolutely. A write-off is purely an accounting procedure. The bank retains the full legal right to pursue civil suits, DRT cases, or use recovery agents to collect the debt."
                }
            },
            {
                "@type": "Question",
                "name": "Which is worse for my CIBIL score: Written-Off or Settled?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Both severely damage your score, but a 'Written-Off' status is generally worse. It indicates a total failure to engage with the bank, whereas 'Settled' shows you at least made an effort to close the liability."
                }
            },
            {
                "@type": "Question",
                "name": "Can I negotiate a settlement after my loan has been written off?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. In fact, this is often the best time to negotiate a One-Time Settlement (OTS), as the bank has already provisioned for the loss and may accept a much larger discount on the principal."
                }
            },
            {
                "@type": "Question",
                "name": "Do I get an NOC after a write-off?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. You only receive a No Objection Certificate (NOC) after you successfully complete a formal settlement agreement and pay the agreed-upon amount."
                }
            }
        ]
    };

    const reviewLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Written-Off Account Resolution",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "description": "Legal advisory to convert dangerous written-off debt into formal, legally closed settlements.",
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
                    "name": "Karan Malhotra"
                },
                "datePublished": "2025-07-22",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                },
                "reviewBody": "I thought my credit card debt was gone when my CIBIL showed it as written off. A year later, a legal notice arrived. The lawyers here helped me convert that dangerous write-off into a formal settlement with an NOC."
            },
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Neha Gupta"
                },
                "datePublished": "2026-01-14",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                },
                "reviewBody": "My CIBIL was stuck at 500 for years due to a 'Written-Off' personal loan. I couldn't get a home loan. The team negotiated a post-write-off settlement for me, legally closing the account so I could start rebuilding my credit."
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-written-off"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-written-off"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="faq-schema-written-off"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
            />
            <Script
                id="review-schema-written-off"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewLd) }}
            />
            <WrittenOffClient />
            <Footer />
        </div>
    );
}
