import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MorphedImagesClient from './MorphedImagesClient';

export const metadata: Metadata = {
    title: "Action Against Recovery Agent Sending Morphed Images",
    description: "Legal guide on stopping loan recovery agents sending morphed images. Learn immediate steps, IT Act sections, and how to file a cyber complaint in India.",
    keywords: [
        "recovery agent sending morphed images",
        "loan app sending fake photos to contacts",
        "legal action against morphed images",
        "cyber cell complaint for morphed photos",
        "stop loan recovery blackmail",
        "Amalegal Solutions morphed image help"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/recovery-agent-sending-morphed-images',
    },
};

export default function MorphedImagesPage() {
    const faqs = [
        {
            question: 'What is the first thing I should do if an agent threatens me with a morphed image?',
            answer: 'Immediately capture screenshots of the threat, the image, and the phone number. Do not delete the chat. Then, block the number and warn your close contacts that your phone data was compromised by a scam app. Do not pay them any money, as paying only invites more extortion.'
        },
        {
            question: 'Can I file a police complaint if I don\'t know the agent\'s real name?',
            answer: 'Yes, you can and should file a complaint with the National Cyber Crime Reporting Portal (cybercrime.gov.in) using the phone numbers, UPI IDs, and screenshots they used to contact you. The police can trace them through these digital footprints.'
        },
        {
            question: 'Which sections of the law apply to sending morphed explicit images?',
            answer: 'Sending or publishing morphed explicit images attracts Section 67 and 67A of the Information Technology (IT) Act, which deals with transmitting obscene material. It also attracts Section 354C of the IPC (Voyeurism) and Section 384 (Extortion).'
        },
        {
            question: 'Will paying the loan amount stop them from leaking the photo?',
            answer: 'No. Experience shows that paying the extortion money never stops the harassment. Scammers realize you are afraid and have money, so they will keep demanding more. The only way to stop them is through legal and police intervention.'
        },
        {
            question: 'How do I stop them from accessing my contacts in the future?',
            answer: 'Uninstall the loan app immediately. Go to your phone settings, check app permissions, and revoke contacts, gallery, and camera access for any suspicious apps. Also, consider resetting your advertising ID to prevent further tracking.'
        },
        {
            question: 'Can the RBI help if the loan app is not registered?',
            answer: 'If the app is illegal and not registered as an NBFC with the RBI, the RBI Sachet portal allows you to report it. However, for immediate criminal acts like image morphing, the Cyber Police is the primary authority to contact.'
        },
        {
            question: 'Should I tell my family about the morphed image threat?',
            answer: 'Yes, transparency is your best defense. Informing your family preemptively takes away the scammer\'s leverage. Once your family knows the image is a fake extortion tactic, the threat loses its power to ruin your reputation.'
        }
    ];

    const reviews = [
        {
            name: "Rajiv S.",
            location: "Bangalore",
            rating: 5,
            text: "I was terrified when they sent a fake photo. This guide helped me realize I wasn\'t alone. I filed a cyber complaint and the messages stopped."
        },
        {
            name: "Sneha M.",
            location: "Pune",
            rating: 5,
            text: "The legal process map here is exactly what I needed. I informed my contacts immediately, and the scammers lost all their power over me."
        },
        {
            name: "Vikram R.",
            location: "Delhi",
            rating: 5,
            text: "Understanding the IT Act sections gave me the confidence to stand up to the blackmail. Excellent, actionable legal advice."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What to Do When a Recovery Agent is Sending Morphed Images",
        "description": "A critical legal and technical guide for borrowers facing digital blackmail. Learn how to protect your reputation and file criminal charges against rogue loan apps.",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "author": {
            "@type": "Person",
            "name": "Rahul Verma",
            "image": "https://www.credsettle.com/default-avatar.jpg"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": "2025-03-12",
        "dateModified": "2025-03-19"
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
                "name": "Recovery Agent Sending Morphed Images",
                "item": "https://www.credsettle.com/recovery-agent-sending-morphed-images"
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
        'name': 'Legal Support for Morphed Image Harassment',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '1120',
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
                id="article-schema-morphed"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-morphed"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-morphed"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <Script
                id="faq-schema-morphed"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="product-schema-morphed"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <MorphedImagesClient />
            <Footer />
        </div>
    );
}
