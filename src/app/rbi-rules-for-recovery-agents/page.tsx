import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RBIRulesClient from './RBIRulesClient';

export const metadata: Metadata = {
    title: "RBI Rules for Recovery Agents 2026: Know Your Rights",
    description: "Understand the strict RBI rules for recovery agents. Learn how to identify illegal recovery tactics and when to take legal action against your bank.",
    keywords: [
        "What are RBI rules for recovery agents",
        "What are my rights against recovery agents",
        "can recovery agents threaten borrowers",
        "RBI guidelines for loan default"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/rbi-rules-for-recovery-agents',
    },
};

export default function RBIRulesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "RBI Rules for Recovery Agents 2026: Know Your Rights",
        "description": "Understand the strict RBI rules for recovery agents. Learn how to identify illegal recovery tactics and when to take legal action against your bank.",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle"
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
                "name": "RBI Rules for Recovery Agents",
                "item": "https://www.credsettle.com/rbi-rules-for-recovery-agents"
            }
        ]
    };

    const faqs = [
        {
            question: "What are the RBI rules for recovery agents?",
            answer: "The RBI rules mandate that recovery agents must be properly trained and verified by banks. They cannot resort to intimidation, verbal abuse, physical violence, or public humiliation. Agents are restricted to contacting borrowers only between 8:00 AM and 7:00 PM, and they must respect the borrower's privacy by not contacting their friends, relatives, or employers regarding the debt."
        },
        {
            question: "What are my rights against recovery agents?",
            answer: "As a borrower, you have the right to be treated with dignity and respect. You have the right to request all communication in writing, the right to privacy, and the right to report any abusive behavior directly to the bank or the RBI Ombudsman. You also have the right to receive a copy of the recovery agency's authorization letter and the agent's identity card."
        },
        {
            question: "Can recovery agents threaten borrowers?",
            answer: "Absolutely not. Threatening borrowers is a severe violation of the Reserve Bank of India guidelines. Agents are strictly prohibited from using any form of threat, whether physical, legal, or emotional. If an agent threatens you with false police cases or violence, you must immediately report this to the local police and the bank."
        },
        {
            question: "What should I do if an agent visits my workplace?",
            answer: "Under the latest RBI guidelines, recovery agents are not allowed to visit your workplace to collect debt or humiliate you in front of colleagues. If this happens, you should document the incident, file a formal complaint with the bank's grievance redressal officer, and consider sending a legal notice to the bank for violating your rights."
        },
        {
            question: "Are banks liable for the actions of their recovery agents?",
            answer: "Yes. The Reserve Bank of India holds banks completely responsible and accountable for the actions of their appointed recovery agents. Banks cannot absolve themselves of responsibility by claiming the agent is a third party. The bank will face strict regulatory penalties for any harassment caused by their agents."
        },
        {
            question: "How do I file a complaint with the RBI Ombudsman?",
            answer: "If your bank fails to resolve your complaint regarding recovery agent harassment within thirty days, you can escalate the matter to the RBI Ombudsman. This can be done online through the official Complaint Management System portal of the Reserve Bank of India, ensuring you attach all evidence such as call recordings and messages."
        },
        {
            question: "Can agents contact my family members?",
            answer: "No. Recovery agents are strictly barred from contacting your family members, friends, or neighbors to discuss your debt. Doing so is a clear breach of your privacy and a violation of the fair practices code mandated by the Reserve Bank of India."
        },
        {
            question: "What times are agents allowed to call?",
            answer: "According to the updated regulatory framework, recovery agents are only permitted to contact you between the hours of 8:00 AM and 7:00 PM. Any calls or visits outside of this window are considered harassment and are legally actionable."
        },
        {
            question: "Do agents need to record their calls?",
            answer: "Yes, many new compliance protocols require banks and their designated agencies to maintain recordings of all recovery calls to ensure transparency and accountability. Borrowers are also encouraged to record their interactions as proof of any potential harassment."
        },
        {
            question: "Can a legal notice stop agent harassment?",
            answer: "Yes. Serving a well drafted legal notice to the bank and the recovery agency through a qualified legal professional is often the most effective way to immediately halt harassment. It forces the bank to acknowledge the violation and instructs their agents to cease unlawful activities immediately."
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
        'name': 'RBI Guidelines Protection Service',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '920',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
                <Script
                    id="article-schema-rbi-rules"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Script
                    id="breadcrumb-schema-rbi-rules"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
                />
                <Script 
                    id="faq-schema-rbi-rules" 
                    type="application/ld+json" 
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} 
                />
                <Script 
                    id="review-schema-rbi-rules" 
                    type="application/ld+json" 
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} 
                />
                <RBIRulesClient />
            </div>
            <Footer />
        </div>
    );
}
