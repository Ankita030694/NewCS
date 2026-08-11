import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HowLawyerPanelsHelpClient from './HowLawyerPanelsHelpClient';

export const metadata: Metadata = {
    title: "How Lawyer Panels Help in Negotiating Better Settlement Terms",
    description: "Learn how a specialized lawyer panel uses RBI guidelines and DRT precedents to negotiate massive principal haircuts (up to 50-70%) and secure formal No Dues Certificates.",
    keywords: [
        "lawyer for loan settlement",
        "negotiate settlement with bank",
        "legal debt settlement India",
        "No Dues Certificate lawyer",
        "RBI guidelines loan settlement"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/how-lawyer-panels-help-in-negotiating-better-settlement-terms',
    },
};

export default function HowLawyerPanelsHelpPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How Lawyer Panels Help in Negotiating Better Settlement Terms",
        "description": "Discover why negotiating loan settlements without a lawyer often leads to meager discounts and ruined CIBIL, while expert lawyer panels secure up to 70% haircuts using legal leverage.",
        "image": "https://www.credsettle.com/images/lawyer-panel-negotiation.jpg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle Legal Wing"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": new Date().toISOString().split('T')[0],
        "dateModified": new Date().toISOString().split('T')[0]
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
                "name": "How Lawyer Panels Help Negotiating Settlement",
                "item": "https://www.credsettle.com/how-lawyer-panels-help-in-negotiating-better-settlement-terms"
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can I negotiate a loan settlement with the bank directly?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can, but banks typically offer only minimal discounts to unrepresented borrowers. A lawyer panel uses RBI guidelines and DRT precedents to negotiate much larger principal haircuts."
                }
            },
            {
                "@type": "Question",
                "name": "How much of a discount can a lawyer panel secure?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "With proper legal representation, borrowers facing genuine financial hardship can often secure principal haircuts ranging from 50% to 70%, completely waiving all accumulated interest and penalties."
                }
            },
            {
                "@type": "Question",
                "name": "Will the bank still ruin my CIBIL score if I settle?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A standard settlement marks your CIBIL as 'Settled', which drops your score. However, lawyer panels ensure the settlement terms are structured optimally and monitor the final No Dues Certificate to protect your financial future as much as legally possible."
                }
            },
            {
                "@type": "Question",
                "name": "What is the importance of a No Dues Certificate?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A No Dues Certificate (NDC) is the only legally binding proof that your loan is fully closed. Lawyer panels verify the authenticity of the settlement letter and ensure the bank issues the NDC within the mandated time frame."
                }
            },
            {
                "@type": "Question",
                "name": "Do lawyer panels stop recovery agent harassment?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. The moment a lawyer panel takes over your case, they issue formal legal notices to the bank, effectively shutting down illegal and coercive street recovery tactics."
                }
            }
        ]
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Lawyer Panel Loan Settlement Negotiation",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1250",
            "bestRating": "5",
            "worstRating": "1"
        }
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="review-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
            />
            <HowLawyerPanelsHelpClient />
                        </div>
            <Footer />
        </div>
    );
}
