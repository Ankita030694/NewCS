import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanPaymentNotReflectedClient from './LoanPaymentNotReflectedClient';

export const metadata: Metadata = {
    title: "Loan Payment Not Reflected on Time: Prevent Penalties",
    description: "Learn what to do when NEFT/RTGS glitches or NACH mandate delays cause EMIs to bounce despite sufficient funds. Force banks to reverse unfair penal interest.",
    keywords: [
        "loan payment not reflected on time",
        "EMI deducted but not showing",
        "bank server error EMI bounce penalty",
        "NEFT RTGS glitch EMI bounce",
        "NACH mandate delay penalty reversal"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/loan-payment-is-not-reflected-on-time',
    },
};

export default function LoanPaymentNotReflectedPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Loan Payment Not Reflected on Time: How to Prevent Penalties",
        "description": "Learn what to do when NEFT/RTGS glitches or NACH mandate delays cause EMIs to bounce despite sufficient funds. Force banks to reverse unfair penal interest.",
        "image": "https://www.credsettle.com/images/loan-payment-delay.jpg",
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
        "datePublished": "2026-07-23",
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
                "name": "Loan Payment Not Reflected on Time",
                "item": "https://www.credsettle.com/loan-payment-is-not-reflected-on-time"
            }
        ]
    };

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What should I do if the loan EMI is deducted but not showing in my loan account?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Immediately check your bank statement to ensure the deduction went through. Obtain the UTR or transaction reference number. Contact your lender in writing, providing this number and demanding that they manually update your loan account without applying any late fees."
                }
            },
            {
                "@type": "Question",
                "name": "Can a bank charge a bounce penalty if the delay was due to a server error?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, per RBI guidelines, banks cannot charge you a bounce penalty or penal interest if the delay or failure was caused by their own technical glitches, server errors, or NACH clearing issues, provided you maintained sufficient balance in your account."
                }
            },
            {
                "@type": "Question",
                "name": "How long does an RTGS or NEFT refund take after a technical failure?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Typically, funds from failed NEFT or RTGS transactions are credited back to the remitting account within 1 to 2 business days. If not, the bank is liable to pay a penalty for the delay as mandated by the RBI."
                }
            },
            {
                "@type": "Question",
                "name": "What evidence do I need to prove the funds were available for the NACH mandate?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You will need an official bank statement showing your account balance on the date the mandate was supposed to be executed. This proves that you had sufficient funds and that the failure was entirely a technical issue on the bank's end."
                }
            },
            {
                "@type": "Question",
                "name": "How can I escalate a grievance if the bank refuses to reverse the penal interest?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If the bank's Nodal Officer rejects your request, you can escalate the matter to the RBI Banking Ombudsman under the Integrated Ombudsman Scheme. Submit your complaint online with all proofs of transaction and prior correspondence."
                }
            }
        ]
    };

    const reviewLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Loan Payment Not Reflected on Time Guide",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "2"
        },
        "review": [
            {
                "@type": "Review",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                },
                "author": {
                    "@type": "Person",
                    "name": "Anonymous Borrower"
                },
                "reviewBody": "My EMI bounced due to a NACH glitch on the bank's end, and they slapped a hefty penalty. Using the reference number strategy from this guide, I got the charges fully reversed within a week!"
            },
            {
                "@type": "Review",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                },
                "author": {
                    "@type": "Person",
                    "name": "Verified User"
                },
                "reviewBody": "CredSettle's step-by-step approach helped me draft a strong complaint to the Nodal Officer. The bank acknowledged the server error and refunded the unfair penal interest immediately."
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-loan-payment"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-loan-payment"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="faq-schema-loan-payment"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
            />
            <Script
                id="review-schema-loan-payment"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewLd) }}
            />
            <LoanPaymentNotReflectedClient />
            <Footer />
        </div>
    );
}
