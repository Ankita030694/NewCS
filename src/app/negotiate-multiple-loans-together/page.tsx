import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NegotiateMultipleLoansTogetherClient from './NegotiateMultipleLoansTogetherClient';
import { companyStats } from '@/data/companyStats';
import { testimonials } from '@/data/testimonials';

export const metadata: Metadata = {
    title: "How to Negotiate and Settle Multiple Personal Loans Together",
    description: "Overwhelmed by multiple personal loans? Learn how our legal experts can negotiate with all your lenders simultaneously for a massive debt reduction.",
    keywords: [
        "negotiate multiple loans together",
        "settle multiple personal loans",
        "consolidate loan negotiations",
        "multiple lenders debt relief",
        "debt reduction multiple loans",
        "multiple loans settlement india"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/negotiate-multiple-loans-together',
    },
};

export default function NegotiateMultipleLoansTogetherPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Negotiate and Settle Multiple Personal Loans Together",
        "description": "Overwhelmed by multiple personal loans? Learn how our legal experts can negotiate with all your lenders simultaneously for a massive debt reduction.",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "author": {
            "@type": "Person",
            "name": "Ashish",
            "jobTitle": "Legal and Debt Resolution Professional",
            "url": "https://www.credsettle.com/authors/ashish"
        },
        "reviewedBy": {
            "@type": "Organization",
            "name": "AMA Legal Solutions",
            "description": "Debt Resolution Specialists"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": "2026-08-13",
        "dateModified": "2026-08-13"
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
                "name": "Negotiate Multiple Loans Together",
                "item": "https://www.credsettle.com/negotiate-multiple-loans-together"
            }
        ]
    };

    const faqs = [
        {
            question: "Can I combine multiple personal loans into a single settlement payment?",
            answer: "No, you cannot combine payments. Each bank requires its own settlement agreement and its own direct payment. However, a legal team can coordinate the negotiations so all agreements mature at roughly the same time."
        },
        {
            question: "Will settling multiple loans ruin my CIBIL score permanently?",
            answer: "Settling any loan will drop your score temporarily and mark the account as 'Settled'. However, resolving all defaults simultaneously stops ongoing negative reporting. Your score can begin recovering much faster than if you left the accounts in default."
        },
        {
            question: "How long does it take to settle three or more loans together?",
            answer: "The timeline typically spans three to six months. Different banks have different internal policies regarding when an account becomes eligible for maximum waivers. Patience is required to align these varying timelines."
        },
        {
            question: "Do I have to pay the settlement agency a portion of each loan?",
            answer: "Legitimate agencies charge based on the complexity of the case or a flat retainer fee, not a percentage of the debt upfront. Avoid any firm demanding a huge percentage before delivering official bank settlement letters."
        },
        {
            question: "Can one legal team handle banks, NBFCs, and credit card companies at once?",
            answer: "Yes. An experienced legal team acts as your authorized representative across all financial institutions. This ensures a unified communication strategy and prevents one aggressive lender from derailing your overall financial recovery."
        },
        {
            question: "What if one bank agrees to settle but another refuses?",
            answer: "This is common in the early stages. The team secures the favorable settlement first, then uses that closed file to demonstrate your limited capacity to the remaining holdout banks. Eventually, most lenders recognize the reality of your financial hardship."
        },
        {
            question: "Should I take a new loan to pay off these multiple settlements?",
            answer: "No. Taking new debt to pay off old debt is exactly how borrowers fall into severe financial traps. Settlements must be funded from your savings, liquidation of non-essential assets, or family support."
        },
        {
            question: "Are recovery agents allowed to visit my workplace if I have multiple defaults?",
            answer: "Recovery agents are strictly bound by RBI regulations regardless of how many loans you have. They cannot harass you at your workplace or contact your employer to discuss your debt."
        }
    ];

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

    const reviewSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Multiple Loan Settlement Negotiation Service',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': companyStats.googleRating,
            'reviewCount': companyStats.reviewCount,
            'bestRating': '5',
            'worstRating': '1'
        },
        'review': testimonials.map(review => ({
            '@type': 'Review',
            'author': {
                '@type': 'Person',
                'name': review.authorName
            },
            'datePublished': "2025-01-01",
            'reviewRating': {
                '@type': 'Rating',
                'ratingValue': review.rating,
                'bestRating': '5',
                'worstRating': '1'
            },
            'reviewBody': review.text
        }))
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "CredSettle",
        "url": "https://www.credsettle.com",
        "logo": "https://www.credsettle.com/credsettle-logo.svg",
        "sameAs": [
            "https://www.linkedin.com/company/credsettle",
            "https://www.facebook.com/credsettle"
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
                <Script
                    id="article-schema-multiple-loans"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Script
                    id="breadcrumb-schema-multiple-loans"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
                />
                <Script
                    id="faq-schema-multiple-loans"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
                <Script
                    id="review-schema-multiple-loans"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
                />
                <Script
                    id="organization-schema-multiple-loans"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                />
                <NegotiateMultipleLoansTogetherClient />
            </div>
            <Footer />
        </div>
    );
}
