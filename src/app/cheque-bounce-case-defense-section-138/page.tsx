import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChequeBounceClient from './ChequeBounceClient';

export const metadata: Metadata = {
    title: "Defending a Cheque Bounce Case (Section 138) in India",
    description: "Learn how to defend against fake Section 138 cheque bounce legal notices for personal loan defaults. Expert legal roadmap for avoiding jail time and handling DRT.",
    keywords: [
        "cheque bounce case section 138",
        "legal notice for loan default",
        "defend cheque bounce case India",
        "lawyer for section 138 case",
        "blank cheque bounce personal loan"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/cheque-bounce-case-defense-section-138',
    },
};

export default function ChequeBouncePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Defending a Cheque Bounce Case (Section 138) for Personal Loan Defaults",
        "description": "A comprehensive legal guide on how to defend against Section 138 notices stemming from misused security cheques in personal loan defaults in India.",
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
                "name": "Defend Cheque Bounce Case",
                "item": "https://www.credsettle.com/cheque-bounce-case-defense-section-138"
            }
        ]
    };

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can I go to jail for a bounced cheque on a personal loan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Under Section 138 of the Negotiable Instruments Act, a cheque bounce is a criminal offense punishable by up to two years in jail. However, if the cheque was given as an undated security cheque and presented without notice, you have a strong legal defense to avoid jail time and seek compounding (settlement)."
                }
            },
            {
                "@type": "Question",
                "name": "What should I do if I receive a 15 day statutory legal notice from the bank?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You must send a formal, legally drafted reply within the 15 day window. Failing to reply implies you admit the debt. Your lawyer will draft a response challenging the validity of the notice and demanding the return of your security cheque."
                }
            },
            {
                "@type": "Question",
                "name": "Can the bank deposit my blank security cheque for the entire outstanding loan amount?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Banks often try to do this, but courts have ruled that a blank cheque filled in later by the bank does not automatically constitute a legally enforceable debt for the entire amount, especially if the borrower was not informed before presentation."
                }
            },
            {
                "@type": "Question",
                "name": "How can I verify if a Lok Adalat summons via WhatsApp is fake?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Fake recovery agencies often send forged legal notices via WhatsApp. Real Lok Adalat summons are issued formally by the State Legal Services Authority, usually via registered post, and bear an official seal and case number verifiable on the eCourts portal."
                }
            },
            {
                "@type": "Question",
                "name": "Is it possible to settle the loan even after a Section 138 case has been filed?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Section 138 cases are compoundable offenses. This means you can negotiate a One Time Settlement (OTS) with the bank at any stage of the trial. Once the settlement is paid, the bank will withdraw the criminal complaint."
                }
            }
        ]
    };

    const reviewLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Legal Defence for Section 138 Cases",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "description": "Specialized legal representation for borrowers facing cheque bounce cases in India.",
        "brand": {
            "@type": "Brand",
            "name": "CredSettle"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "2"
        },
        "review": [
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Vikram Singh"
                },
                "datePublished": "2025-09-12",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                },
                "reviewBody": "I was terrified when I received a summons for a bounced security cheque. The legal team at CredSettle stepped in, secured my bail on the first hearing, and eventually forced the bank to settle the loan out of court for a fraction of the demand."
            },
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Amit Das"
                },
                "datePublished": "2026-03-05",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                },
                "reviewBody": "The bank tried to use a blank cheque I signed 3 years ago to extort money. Thanks to the expert lawyers here, we challenged the legally enforceable debt claim and the case was dismissed. Best DRT lawyers."
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-cheque-bounce"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-cheque-bounce"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="faq-schema-cheque-bounce"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
            />
            <Script
                id="review-schema-cheque-bounce"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewLd) }}
            />
            <ChequeBounceClient />
            <Footer />
        </div>
    );
}
