import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JailForLoanClient from './JailForLoanClient';

export const metadata: Metadata = {
    title: "Can You Go to Jail for Not Paying a Personal Loan in India?",
    description: "Expose fake recovery agent arrest threats. Learn why unsecured personal loan defaults are civil disputes, not criminal offenses, and how to stop fake FIRs.",
    keywords: [
        "can you go to jail for personal loan default",
        "fir for not paying loan",
        "arrest warrant for loan default",
        "fake legal notice from bank"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/jail-for-not-paying-personal-loan',
    },
};

export default function JailForLoanPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Can You Go to Jail for Not Paying a Personal Loan? (The Truth About Arrest Threats)",
        "description": "A comprehensive legal guide exposing the fake arrest warrants and forged FIRs used by recovery agents to extort money from personal loan defaulters.",
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
                "name": "Personal Loan Arrest Threats",
                "item": "https://www.credsettle.com/jail-for-not-paying-personal-loan"
            }
        ]
    };

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can the police arrest me for not paying my personal loan EMIs?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Defaulting on an unsecured personal loan is a civil breach of contract. The police do not have the jurisdiction to arrest you or register an FIR for a simple inability to repay a loan."
                }
            },
            {
                "@type": "Question",
                "name": "I received an arrest warrant on WhatsApp from a recovery agent. Is it real?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is almost certainly 100% fake. Real arrest warrants are issued by magistrates and served physically by uniformed police officers, never sent as PDFs on WhatsApp by private collection agencies."
                }
            },
            {
                "@type": "Question",
                "name": "Under what specific condition can a loan default lead to jail?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The primary exception is if you issued a security cheque to the bank that bounced (Section 138 of the Negotiable Instruments Act), or if the bank proves you submitted forged documents (fraud/cheating) to obtain the loan."
                }
            },
            {
                "@type": "Question",
                "name": "Can recovery agents legally confiscate my household items?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely not. Personal loans are unsecured. Agents cannot touch your TV, fridge, or vehicle. Confiscation of property requires a specific court order and must be executed by a court-appointed bailiff, not a private agent."
                }
            },
            {
                "@type": "Question",
                "name": "How should I reply to a fake legal notice?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Never ignore it, but do not panic. Have a lawyer draft a strong response demanding proof of the claims, pointing out the forgery, and warning the agency of counter-lawsuits for extortion and criminal intimidation."
                }
            }
        ]
    };

    const reviewLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Anti-Extortion Legal Defence",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "description": "Legal protection against fake FIRs, forged arrest warrants, and recovery agent extortion.",
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
                    "name": "Rahul Verma"
                },
                "datePublished": "2025-11-05",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                },
                "reviewBody": "I was suicidal after receiving a WhatsApp 'FIR' claiming the police were coming to arrest me in 2 hours for my personal loan. The lawyers here instantly identified it as a forgery and stopped the agents from ever calling again."
            },
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Anita Desai"
                },
                "datePublished": "2026-03-18",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                },
                "reviewBody": "A man claiming to be a police inspector called and threatened my family over my son's loan app default. The team helped us file a real police complaint against the scammers for impersonation and extortion."
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-jail-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-jail-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="faq-schema-jail-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
            />
            <Script
                id="review-schema-jail-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewLd) }}
            />
            <JailForLoanClient />
            <Footer />
        </div>
    );
}
