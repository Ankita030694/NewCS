import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PersonalLoanSettlementClient from './PersonalLoanSettlementClient';

export const metadata: Metadata = {
    title: "How to Settle a Personal Loan in India: Step-by-Step Guide 2025",
    description: "Learn how to legally negotiate a personal loan settlement in India. Minimize CIBIL impact, avoid recovery harassment, and reduce debt with our comprehensive guide.",
    keywords: [
        "personal loan settlement",
        "how to settle personal loan in India",
        "personal loan settlement process",
        "CIBIL score after loan settlement",
        "negotiate loan settlement with bank",
        "stop recovery agent harassment",
        "bank accepted settlement percentage"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/personal-loan-settlement',
    },
};

export default function PersonalLoanSettlementPage() {
    const faqs = [
        {
            question: 'What is a personal loan settlement?',
            answer: 'A personal loan settlement is a formal agreement between you and your bank where the bank agrees to accept a lump-sum payment that is lower than the total outstanding due, closing the loan account legally.'
        },
        {
            question: 'Does settling a personal loan affect my CIBIL score?',
            answer: 'Yes, when a loan is settled, the status on your CIBIL report reflects as "Settled" rather than "Closed." This causes a drop in your credit score, usually by 50-75 points, and remains on your record for up to 7 years.'
        },
        {
            question: 'How much percentage discount can I get in a personal loan settlement?',
            answer: 'Banks generally accept a settlement between 40% to 60% of the total outstanding amount, depending on the age of the default, your financial hardship proof, and the banks internal recovery policies for unsecured loans.'
        },
        {
            question: 'Can recovery agents harass me while I am negotiating a settlement?',
            answer: 'No, RBI guidelines strictly prohibit harassment. Once you officially enter into negotiation or submit a hardship letter, recovery agents must adhere to professional conduct. If harassed, you can file a complaint or send a legal notice.'
        },
        {
            question: 'Is a hardship letter mandatory for a settlement?',
            answer: 'While not strictly mandatory by law, a well-drafted hardship letter (proof of job loss, medical emergency, etc.) drastically increases your chances of getting a favorable settlement approved by the bank\'s recovery committee.'
        },
        {
            question: 'Can I settle a personal loan before it becomes an NPA?',
            answer: 'It is very rare for a bank to offer a settlement on a standard asset. Settlements are typically only offered after the loan becomes a Non-Performing Asset (NPA), which usually happens after 90 days of continuous default.'
        },
        {
            question: 'How long does the personal loan settlement process take?',
            answer: 'The process can take anywhere from a few weeks to several months. It involves drafting the proposal, negotiating with the recovery department, obtaining approval from higher authorities, and finally making the payment.'
        }
    ];

    const reviews = [
        {
            name: "Vikas M.",
            location: "Delhi",
            rating: 5,
            text: "This guide gave me the confidence to draft my hardship letter. I managed to settle my 6 Lakh loan for 2.5 Lakhs after I lost my job."
        },
        {
            name: "Pooja S.",
            location: "Mumbai",
            rating: 5,
            text: "Understanding the CIBIL impact was crucial. I opted for settlement to stop the harassment and now I am slowly rebuilding my credit score using a secured card."
        },
        {
            name: "Rajesh K.",
            location: "Chennai",
            rating: 5,
            text: "The step-by-step checklist is perfect. I followed every step and successfully negotiated with the bank without needing an expensive lawyer."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Legally Negotiate a Personal Loan Settlement in India",
        "description": "Learn how to legally and safely negotiate a personal loan settlement in India while minimizing the impact on your CIBIL score and avoiding recovery agent harassment.",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "author": {
            "@type": "Person",
            "name": "Rohan Sharma",
            "image": "https://www.credsettle.comhttps://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": "2025-05-15",
        "dateModified": "2025-05-15"
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
                "name": "Personal Loan Settlement",
                "item": "https://www.credsettle.com/personal-loan-settlement"
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
        'name': 'Personal Loan Settlement Guide',
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
        <main className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
                id="product-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <PersonalLoanSettlementClient />
            <Footer />
        </main>
    );
}
