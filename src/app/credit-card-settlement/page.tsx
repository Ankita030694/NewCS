import React from 'react';
import { Metadata } from 'next';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CreditCardSettlementClient from './CreditCardSettlementClient';

export const metadata: Metadata = {
    title: "Credit Card Settlement in India: Legal & Secure Guide",
    description: "Learn how to legally navigate credit card settlement in India. Discover when banks agree to settle, avoid common scams, and protect your financial future.",
    keywords: [
        "credit card settlement India",
        "settle credit card debt",
        "RBI guidelines for credit card settlement",
        "credit card settlement scam",
        "how to settle credit card loan",
        "credit card default settlement",
        "CIBIL score after settlement",
        "legal notice for credit card"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/credit-card-settlement',
    },
};

export default function CreditCardSettlementPage() {
    const faqs = [
        {
            question: "Is credit card settlement legally binding in India?",
            answer: "Yes, once a formal settlement offer is issued by the bank and you make the agreed payment, it becomes a legally binding contract. The bank cannot legally pursue you for the waived amount later, provided you have a valid No Dues Certificate (NDC)."
        },
        {
            question: "How long does a credit card default take to settle?",
            answer: "Banks typically consider a settlement only after the account is classified as a Non-Performing Asset (NPA), which usually happens after 90 to 120 days of non-payment. Quick 7-day settlement offers are generally fraudulent."
        },
        {
            question: "Can I settle a credit card debt for 20% of the principal?",
            answer: "While some extreme hardship cases might see deep discounts, most banks settle for 40% to 60% of the total outstanding amount, which includes late fees and interest. Unrealistic promises of 10% or 20% are common tactics used by scammers."
        },
        {
            question: "Will settling my credit card debt ruin my CIBIL score forever?",
            answer: "A settlement will drop your score significantly and reflect as 'Settled' on your report for up to 7 years. However, it is not ruined forever. You can rebuild your credit slowly over the next 24 to 36 months by using secured credit products."
        },
        {
            question: "Can recovery agents harass my family for my credit card debt?",
            answer: "No, the RBI guidelines strictly prohibit recovery agents from harassing family members, visiting at odd hours (before 8 AM or after 7 PM), or using abusive language. You have the right to file a police complaint against such behavior."
        },
        {
            question: "Should I stop paying minimum dues to force a settlement?",
            answer: "Intentionally defaulting to force a settlement is highly risky. It damages your credit score, incurs massive penalty charges, and exposes you to potential legal notices from the bank. Settlement should only be a last resort for genuine financial hardship."
        },
        {
            question: "Do I have to pay taxes on the waived amount of a settled credit card?",
            answer: "In India, the waived portion of a personal loan or credit card debt is generally not treated as taxable income for salaried individuals under current income tax laws, but it's always advisable to consult a tax professional for complex business related debts."
        }
    ];

    const reviews = [
        {
            name: "Priya S.",
            location: "Mumbai",
            rating: 5,
            text: "This page helped me identify a fake settlement agency that was demanding money upfront. I negotiated directly with my bank and closed my card."
        },
        {
            name: "Rajesh K.",
            location: "Delhi",
            rating: 5,
            text: "I was terrified of the recovery calls. Understanding the RBI guidelines gave me the confidence to handle the agents legally."
        },
        {
            name: "Sneha V.",
            location: "Chennai",
            rating: 5,
            text: "The step by step guide is brilliant. I followed it and finally got my NOC after 6 months of stress."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Credit Card Settlement in India: Legal & Secure Guide",
        "description": "Learn how to legally navigate credit card settlement in India. Discover when banks agree to settle, avoid common scams, and protect your financial future.",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "author": {
            "@type": "Person",
            "name": "Rahul Verma",
            "image": "https://www.credsettle.com/default-user.svg"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": "2026-05-15",
        "dateModified": "2026-07-07"
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
                "name": "Credit Card Settlement",
                "item": "https://www.credsettle.com/credit-card-settlement"
            }
        ]
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "CredSettle",
        "url": "https://www.credsettle.com",
        "logo": "https://www.credsettle.com/credsettle-logo.svg",
        "sameAs": [
            "https://www.facebook.com/credsettle",
            "https://www.twitter.com/credsettle",
            "https://www.linkedin.com/company/credsettle"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-XXXX-XXXXXX",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": "English"
        }
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.answer
            }
        }))
    };

    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Credit Card Settlement in India: Legal & Secure Guide',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '3',
            'bestRating': '5',
            'worstRating': '1'
        },
        'review': reviews.map(review => ({
            '@type': 'Review',
            'author': {
                '@type': 'Person',
                'name': review.name
            },
            'reviewRating': {
                '@type': 'Rating',
                'ratingValue': review.rating.toString()
            },
            'reviewBody': review.text
        }))
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <CreditCardSettlementClient />
            <Footer />
        </div>
    );
}
