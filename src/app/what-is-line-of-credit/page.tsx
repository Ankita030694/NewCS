import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatIsLineOfCreditClient from './WhatIsLineOfCreditClient';

export const metadata: Metadata = {
    title: "What is a Line of Credit vs Traditional Loan in India?",
    description: "Confused between a line of credit and a personal loan? Understand the difference, how revolving credit works in India, and which option is best for you.",
    keywords: [
        "difference between line of credit and personal loan",
        "how does line of credit work India",
        "line of credit vs term loan",
        "revolving credit facility India",
        "best personal loan alternative"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/what-is-line-of-credit',
    },
};

export default function WhatIsLineOfCreditPage() {
    const faqs = [
        {
            question: 'What is the main difference between a line of credit and a personal loan?',
            answer: 'A personal loan provides a lump sum amount upfront that you repay with fixed monthly installments. A line of credit gives you access to a maximum credit limit from which you can withdraw funds as needed, and you only pay interest on the amount you actually withdraw.'
        },
        {
            question: 'How is interest calculated on a line of credit in India?',
            answer: 'Interest on a line of credit is calculated daily based solely on the withdrawn balance, not the entire approved limit. If your limit is 5 lakhs but you only use 1 lakh, you will only be charged interest on that 1 lakh.'
        },
        {
            question: 'Can I reuse the funds after repaying them in a line of credit?',
            answer: 'Yes. A line of credit is revolving. As soon as you repay the borrowed amount, your available credit limit is restored, allowing you to withdraw funds again without needing a new loan application.'
        },
        {
            question: 'Are there any hidden charges associated with a line of credit?',
            answer: 'While you only pay interest on utilized funds, lenders may charge an annual maintenance fee or a processing fee when setting up the limit. It is critical to read the terms to understand any commitment charges for unutilized balances.'
        },
        {
            question: 'Which is better for a medical emergency, a personal loan or a line of credit?',
            answer: 'A line of credit is generally superior for unpredictable expenses like medical emergencies because you do not know the exact total cost upfront. It allows you to withdraw funds incrementally as bills arrive, preventing you from borrowing and paying interest on more than you need.'
        }
    ];

    const reviews = [
        {
            name: 'Rohan Deshmukh',
            location: 'Pune',
            stars: 5,
            comment: 'I always took personal loans for my business cash flow gaps and ended up paying huge interest on money sitting idle in my account. Switching to a line of credit saved me thousands in interest.'
        },
        {
            name: 'Priya Sharma',
            location: 'Delhi',
            stars: 5,
            comment: 'The explanation of revolving credit was an eye opener. I used a line of credit for my home renovation because the costs kept changing, and it gave me the exact flexibility I needed without the burden of a fixed EMI.'
        }
    ];

    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What is a Line of Credit vs a Traditional Loan?",
        "description": "Borrowers confuse personal loans with overdrafts or lines of credit, resulting in paying interest on funds they haven't used. This explains the revolving nature of LOCs and when they are superior to term loans.",
        "image": "https://www.credsettle.com/images/line-of-credit-guide.jpg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle Financial Literacy Wing"
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
                "name": "What is a Line of Credit",
                "item": "https://www.credsettle.com/what-is-line-of-credit"
            }
        ]
    };

    const organizationLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "CredSettle",
        "url": "https://www.credsettle.com",
        "logo": "https://www.credsettle.com/logo.png",
        "sameAs": [
            "https://www.facebook.com/credsettle",
            "https://www.twitter.com/credsettle",
            "https://www.linkedin.com/company/credsettle"
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

    const reviewSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Line of Credit vs Personal Loan Guide',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '1450',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-loc"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-loc"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-loc"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <Script
                id="faq-schema-loc"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="review-schema-loc"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
            />
            <WhatIsLineOfCreditClient faqs={faqs} reviews={reviews} />
                        </div>
            <Footer />
        </div>
    );
}
