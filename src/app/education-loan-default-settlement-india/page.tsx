import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EducationLoanClient from './EducationLoanClient';

export const metadata: Metadata = {
    title: "Education Loan Default in India: Settlement vs Restructuring",
    description: "Learn how to handle education loan defaults in India. Protect co-signers, negotiate moratorium extensions, and understand the impact on a student's career.",
    keywords: [
        "education loan default India",
        "student loan settlement",
        "non payment of education loan consequences",
        "education loan moratorium extension"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/education-loan-default-settlement-india',
    },
};

export default function EducationLoanPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Education Loan Default in India: Settlement vs. Restructuring",
        "description": "A comprehensive guide for graduates and their co-signers on negotiating moratorium extensions, navigating the CSIS scheme, and settling student loans without ruining career prospects.",
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
                "name": "Education Loan Default Solutions",
                "item": "https://www.credsettle.com/education-loan-default-settlement-india"
            }
        ]
    };

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can a student go to jail for defaulting on an education loan in India?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Non-payment of an education loan is a civil matter, not a criminal offense. You cannot be arrested simply for being unable to repay an institutional loan due to unemployment."
                }
            },
            {
                "@type": "Question",
                "name": "How does an education loan default affect my parents?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Because parents are usually mandatory co-signers on education loans, a default severely impacts their CIBIL score. If collateral was provided, the bank can initiate SARFAESI proceedings against their property."
                }
            },
            {
                "@type": "Question",
                "name": "What is the Central Sector Interest Subsidy (CSIS) scheme?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The CSIS scheme provides a full interest subsidy during the moratorium period (course period plus one year) for students from economically weaker sections whose parental income is below specific thresholds."
                }
            },
            {
                "@type": "Question",
                "name": "Can I extend my moratorium period if I haven't found a job?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, many banks allow for an extension of the moratorium period (typically by another 6 months to a year) if you can provide proof of continued unemployment or enrollment in further studies."
                }
            },
            {
                "@type": "Question",
                "name": "Will an education loan settlement ruin my chances of studying abroad later?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, a settlement heavily damages your CIBIL score. If you plan to study abroad later, most international education loan providers will check your credit history and reject applications with a 'Settled' status."
                }
            },
            {
                "@type": "Question",
                "name": "Can background checks by employers see my education loan default?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While employers do not generally pull your CIBIL report for entry-level jobs, many multinational banks and financial institutions do check credit scores during the hiring process. A default could disqualify you from certain finance roles."
                }
            }
        ]
    };

    const reviewLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Education Loan Legal Advisory",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "description": "Legal consultation and negotiation services for graduates and co-signers facing education loan defaults.",
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
                    "name": "Nikhil Sharma"
                },
                "datePublished": "2025-08-14",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                },
                "reviewBody": "I graduated during a hiring freeze and couldn't pay my EMIs. The bank started harassing my retired parents. The lawyers negotiated a 12-month moratorium extension based on unemployment proof, saving our family from immense stress."
            },
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Priya Das"
                },
                "datePublished": "2026-01-22",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                },
                "reviewBody": "My education loan ballooned to an unmanageable amount due to compound interest while I was sick. They helped me negotiate a fair One Time Settlement so I could finally move on with my life without legal threats."
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-education-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-education-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="faq-schema-education-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
            />
            <Script
                id="review-schema-education-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewLd) }}
            />
            <EducationLoanClient />
                        </div>
            <Footer />
        </div>
    );
}
