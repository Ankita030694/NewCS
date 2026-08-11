import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MedicalEmergencyClient from './MedicalEmergencyClient';

export const metadata: Metadata = {
    title: "Loan Settlement During Medical Emergencies: Compassionate Grounds",
    description: "Learn how to formally request a bank moratorium or deep loan settlement on compassionate grounds using your medical records and RBI guidelines.",
    keywords: [
        "loan settlement medical emergency",
        "unable to pay emi due to medical reasons",
        "compassionate grounds loan waiver India",
        "bank moratorium for illness"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/loan-settlement-during-medical-emergency',
    },
};

export default function MedicalEmergencyPage() {
    const jsonLdArticle = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Loan Settlement During Medical Emergencies: How to Request Compassionate Grounds",
        "description": "A comprehensive guide on leveraging banking regulations to formally request a moratorium or deep loan settlement on compassionate grounds during a medical crisis.",
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
                "name": "Medical Emergency Loan Settlement",
                "item": "https://www.credsettle.com/loan-settlement-during-medical-emergency"
            }
        ]
    };

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can I stop paying my EMI if I have a severe medical emergency?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You cannot simply stop paying without consequences. However, you can formally request a temporary moratorium or restructured payment plan from the Grievance Redressal Officer based on compassionate grounds."
                }
            },
            {
                "@type": "Question",
                "name": "What documents do banks require to prove a medical emergency?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Banks require verified hospital admission records, discharge summaries, detailed medical bills, and a doctor's certificate explicitly stating the patient's inability to work or the severe financial drain caused by the treatment."
                }
            },
            {
                "@type": "Question",
                "name": "Will the bank waive my loan entirely if I have cancer or a critical illness?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Complete loan waivers are exceedingly rare. However, banks are highly likely to offer a deep settlement haircut (waiving all interest, penalties, and a portion of the principal) if faced with verified critical illness documentation."
                }
            },
            {
                "@type": "Question",
                "name": "Do recovery agents have the right to visit me in the hospital?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely not. RBI guidelines strictly prohibit recovery agents from engaging in any behavior that causes public humiliation or harassment, including visiting hospitals or contacting relatives regarding the debt."
                }
            },
            {
                "@type": "Question",
                "name": "Who should I contact at the bank regarding a medical hardship application?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Do not deal with third party recovery agents. Submit your hardship letter and medical evidence directly to the Principal Nodal Officer or the Grievance Redressal Officer (GRO) of the bank."
                }
            }
        ]
    };

    const reviewLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Medical Hardship Loan Settlement Assistance",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "3"
        },
        "review": [
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Deepak R." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                "reviewBody": "When my father was in the ICU, recovery agents kept calling non stop. The legal team drafted a strong compassionate grounds letter to the GRO, halting the harassment instantly and settling the debt for a fraction of the cost."
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Meera K." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                "reviewBody": "I lost my income due to a severe accident. CredSettle helped me submit my medical records to the bank and secured a 6 month moratorium followed by a very reasonable settlement. True lifesavers."
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Amit B." },
                "reviewRating": { "@type": "Rating", "ratingValue": "4.8" },
                "reviewBody": "Excellent guidance on how to format the hardship letter and which specific medical documents the bank's credit team needs to approve a deep discount."
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-medical-emergency"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <Script
                id="breadcrumb-schema-medical-emergency"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="faq-schema-medical-emergency"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
            />
            <Script
                id="review-schema-medical-emergency"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewLd) }}
            />
            <MedicalEmergencyClient />
                        </div>
            <Footer />
        </div>
    );
}
