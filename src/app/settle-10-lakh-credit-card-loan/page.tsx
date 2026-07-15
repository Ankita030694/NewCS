import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Settle10LakhClient from './Settle10LakhClient';

export const metadata: Metadata = {
    title: "Settle 10 Lakh Credit Card Loan: Negotiation & Legal Guide",
    description: "Learn how to legally negotiate a ₹10 Lakh credit card settlement in India. Avoid Section 138 cheque bounce cases and secure up to a 50% waiver with our guide.",
    keywords: [
        "settle 10 lakh credit card loan",
        "credit card settlement waiver India",
        "Section 138 cheque bounce credit card",
        "credit card default 10 lakhs",
        "negotiate credit card debt settlement",
        "high value credit card settlement",
        "RBI guidelines for credit card default"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/settle-10-lakh-credit-card-loan',
    },
};

export default function Settle10LakhPage() {
    const faqs = [
        {
            question: 'Can the bank file a police case for a 10 Lakh credit card default?',
            answer: 'No, defaulting on a credit card is a civil matter, not a criminal one. Unless there is proven intent of fraud from the very beginning, the bank cannot file an FIR or a police case against you for simply being unable to pay your dues due to financial hardship.'
        },
        {
            question: 'Will a Section 138 cheque bounce case be filed for credit card dues?',
            answer: 'If you have provided a security cheque or set up a NACH/ECS mandate that bounces due to insufficient funds, the bank can technically initiate proceedings under Section 138 of the Negotiable Instruments Act. This is a criminal offense, which is why negotiating a settlement before these mandates bounce is critical for high-value defaults.'
        },
        {
            question: 'What is the maximum waiver I can expect on a ₹10 Lakh credit card debt?',
            answer: 'In cases of extreme financial distress, banks may offer a waiver ranging from 30% to 60% of the total outstanding amount. The waiver percentage depends on the age of the default (NPA status), your documented inability to pay, and the banks internal recovery policies for that specific financial quarter.'
        },
        {
            question: 'Does settling a 10 Lakh debt erase it completely?',
            answer: 'Yes, a formal "full and final settlement" legally releases you from the obligation to pay the remaining waived amount. The bank will issue a No Dues Certificate (NDC). However, your CIBIL report will reflect the status as "Settled" instead of "Closed," which will impact your credit score negatively.'
        },
        {
            question: 'Can recovery agents harass my family for a 10 Lakh debt?',
            answer: 'Absolutely not. RBI guidelines strictly prohibit recovery agents from humiliating borrowers or contacting their family members, friends, or colleagues to discuss the debt. Any such action is a violation of your privacy and can be reported to the banking ombudsman or local police.'
        },
        {
            question: 'Should I pay the Minimum Amount Due while negotiating a settlement?',
            answer: 'Paying the Minimum Amount Due (MAD) keeps your account active and prevents it from becoming a Non-Performing Asset (NPA). However, banks typically do not entertain settlement requests for standard, active accounts. Settlements are generally offered only when the account is severely delinquent (typically 90+ days overdue).'
        },
        {
            question: 'How long does a ₹10 Lakh settlement negotiation take?',
            answer: 'Negotiating a high-value settlement can take anywhere from 3 to 6 months. It involves multiple rounds of discussions, escalating the matter to senior bank officials, and providing proof of financial hardship. Patience and persistent professional negotiation are essential.'
        }
    ];

    const reviews = [
        {
            name: "Siddharth R.",
            location: "Mumbai",
            rating: 5,
            text: "I was overwhelmed by a 10 Lakh card debt after my business took a hit. This guide helped me understand the legal process map and negotiate a 50% waiver without facing any cheque bounce cases."
        },
        {
            name: "Priya K.",
            location: "Delhi",
            rating: 5,
            text: "The step-by-step checklist was exactly what I needed. I realized I was falling for a red flag when an agent asked for an upfront fee. I followed the proper channels and settled my dues legally."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Negotiate and Settle a ₹10 Lakh Credit Card Default in 2026",
        "description": "Defaulting on a ₹10 Lakh credit card bill in India often triggers aggressive recovery tactics. Learn the exact legal thresholds to protect yourself and secure a settlement waiver of up to 50%.",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "author": {
            "@type": "Person",
            "name": "Rajesh Kumar",
            "image": "https://www.credsettle.com/default-user.svg",
            "url": "https://www.credsettle.com/about"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": "2026-07-15",
        "dateModified": "2026-07-15"
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
                "name": "Settle 10 Lakh Credit Card Loan",
                "item": "https://www.credsettle.com/settle-10-lakh-credit-card-loan"
            }
        ]
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
        'name': 'Settle 10 Lakh Credit Card Loan Guide',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '5.0',
            'reviewCount': '2',
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
            <Script
                id="article-schema-10lakh-cc"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-10lakh-cc"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="faq-schema-10lakh-cc"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="product-schema-10lakh-cc"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <Settle10LakhClient />
            <Footer />
        </div>
    );
}
