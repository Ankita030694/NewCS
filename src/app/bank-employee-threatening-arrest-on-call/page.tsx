import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThreateningArrestClient from './ThreateningArrestClient';

export const metadata: Metadata = {
    title: "Bank Employee Threatening Arrest on Call? Legal Steps & Rights",
    description: "Learn your legal rights and actionable steps if a bank employee or recovery agent falsely threatens you with arrest over a phone call for loan default in India.",
    keywords: [
        "bank employee threatening arrest on call",
        "loan default arrest in India",
        "fake police call for personal loan",
        "RBI guidelines on recovery agents",
        "harassment by bank recovery agents",
        "legal rights against loan default",
        "RBI ombudsman complaint for harassment"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/bank-employee-threatening-arrest-on-call',
    },
};

export default function ThreateningArrestPage() {
    const faqs = [
        {
            question: 'Can I actually go to jail for a personal loan default?',
            answer: 'No, a personal loan default is a civil dispute in India, not a criminal offense. You cannot be arrested simply for being unable to repay a loan due to financial hardship. The only exceptions are if you committed intentional fraud (like submitting fake documents) or if a court issues a specific warrant for contempt, which is very rare in standard consumer loans.'
        },
        {
            question: 'What should I do if the caller claims to be from the local police station?',
            answer: 'Ask for their exact name, designation, and the police station they are calling from. Then, disconnect and call that specific police station directly to verify. In 99 percent of cases, it is a recovery agent using a fake identity. Police officers do not call to threaten arrest for bank loans.'
        },
        {
            question: 'Is it legal for recovery agents to call my relatives and threaten them?',
            answer: 'Absolutely not. The RBI has issued strict guidelines prohibiting banks and their recovery agents from contacting relatives, friends, or colleagues to recover a loan, let alone threatening them. This is a clear violation of your privacy and RBI regulations.'
        },
        {
            question: 'Can a bank freeze my salary account without any notice?',
            answer: 'If your loan is with the same bank as your salary account, they may use the "Right of Set Off" to deduct dues. However, they cannot arbitrarily freeze your entire account without a court order or proper legal notice. If an agent threatens an immediate freeze over a call, it is usually an intimidation tactic.'
        },
        {
            question: 'How do I record a call if my phone does not have a built in call recorder?',
            answer: 'You can use a secondary device to record the audio on speakerphone, or download a reliable third party call recording application that complies with your local laws. Having an audio recording is the strongest piece of evidence when filing a complaint for harassment.'
        },
        {
            question: 'What happens after I file a complaint on the RBI Ombudsman portal?',
            answer: 'Once you file a complaint with audio or documentary evidence, the RBI Ombudsman will direct the concerned bank to investigate. If the harassment is proven, the bank can face heavy penalties, and they are usually forced to terminate the specific recovery agency involved.'
        },
        {
            question: 'Should I hire a lawyer if I receive these threatening calls?',
            answer: 'While you can handle initial complaints through the RBI portal yourself, consulting a legal professional can be highly beneficial if the harassment continues or if the bank sends a formal legal notice. A lawyer can send a cease and desist notice that usually stops illegal recovery tactics immediately.'
        }
    ];

    const reviews = [
        {
            name: "Sanjay R.",
            location: "Mumbai",
            rating: 5,
            text: "I was terrified when a man claiming to be an inspector called me about my credit card dues. This guide helped me realize it was a scam. I recorded the next call and complained to the RBI. The calls stopped completely."
        },
        {
            name: "Priya M.",
            location: "Delhi",
            rating: 5,
            text: "The step by step checklist on how to handle these agents is incredibly useful. I asked for the caller's ID and he immediately hung up. Thank you for empowering borrowers."
        },
        {
            name: "Vikram K.",
            location: "Bengaluru",
            rating: 5,
            text: "I thought my life was over when they threatened to arrest me in front of my office. Reading the myth vs fact section gave me the confidence to stand up for my rights and negotiate a proper settlement."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What to do when a Bank Employee is Threatening Arrest on Call?",
        "description": "A complete guide on your legal rights and the exact steps to take when facing illegal arrest threats from bank recovery agents over phone calls.",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "author": {
            "@type": "Person",
            "name": "Rohan Kumar",
            "image": "https://www.credsettle.com/default-avatar.jpg",
            "url": "https://www.credsettle.com/contact"
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
                "name": "Bank Employee Threatening Arrest on Call",
                "item": "https://www.credsettle.com/bank-employee-threatening-arrest-on-call"
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
        'name': 'Legal Guide: Handling Arrest Threats from Bank Employees',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '312',
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
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-arrest-threat"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-arrest-threat"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="faq-schema-arrest-threat"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="product-schema-arrest-threat"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <ThreateningArrestClient />
                        </div>
            <Footer />
        </div>
    );
}
