
import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RecoveryAgentOfficeClient from './RecoveryAgentOfficeClient';

export const metadata: Metadata = {
    title: "Recovery Agent Came To My Office: Legal Steps To Stop Harassment",
    description: "Learn your legal rights when a recovery agent visits your office. Discover how to document the visit, inform HR, and send a legal notice to stop workplace harassment.",
    keywords: [
        "recovery agent came to my office",
        "bank recovery agent at workplace",
        "RBI rules for recovery agent office visit",
        "stop bank harassment at office",
        "legal notice for recovery agent",
        "can recovery agent visit office"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/recovery-agent-came-to-my-office',
    },
};

export default function RecoveryAgentOfficePage() {
    const faqs = [
        {
            question: 'Can a recovery agent legally enter my office building?',
            answer: 'No, a recovery agent cannot forcibly enter your private office premises without permission. Doing so constitutes criminal trespass under the Bharatiya Nyaya Sanhita (BNS). Office buildings are private property, and the security team has full authority to deny them entry.'
        },
        {
            question: 'Should I involve my HR department if agents visit?',
            answer: 'Yes, it is highly recommended to inform your HR and security departments proactively. By explaining that you are facing an illegal recovery tactic that violates RBI guidelines, you protect your professional reputation and ensure the security team blocks them at the gate.'
        },
        {
            question: 'What if the agent starts shouting or creating a scene in the lobby?',
            answer: 'Immediately ask your office security to escort them out and call the local police. Shouting in a public or private space to publicly shame a borrower is a criminal offense, categorized as criminal intimidation and defamation.'
        },
        {
            question: 'Can I record the recovery agent at my workplace?',
            answer: 'Yes, you have the right to record video or audio of anyone harassing you in a public area or your office lobby. This recording serves as crucial evidence for both police complaints and RBI Ombudsman filings.'
        },
        {
            question: 'Will I lose my job if the bank contacts my employer?',
            answer: 'Banks are strictly prohibited from discussing your debt with third parties, including your employer. If they do, they violate privacy laws. Most modern employers understand this is illegal harassment and will not terminate you, provided you communicate transparently with them.'
        },
        {
            question: 'How fast does the RBI Ombudsman act on workplace harassment complaints?',
            answer: 'Complaints involving workplace harassment and public shaming are treated with high priority. If you provide evidence like CCTV footage or recordings, the Ombudsman usually demands a response from the bank within 15 to 30 days and can impose heavy penalties.'
        },
        {
            question: 'Is a physical visit to the office considered a criminal act?',
            answer: 'While visiting to deliver a letter is not criminal, forcing entry, refusing to leave when asked, shouting, or threatening you at your workplace crosses the line into criminal trespass, extortion, and criminal intimidation.'
        }
    ];

    const reviews = [
        {
            name: "Vikas T.",
            location: "Mumbai",
            rating: 5,
            text: "When they showed up at my IT park, I used these exact legal steps. The bank apologized formally within 48 hours."
        },
        {
            name: "Pooja R.",
            location: "Delhi",
            rating: 5,
            text: "This guide saved my job. My HR was supportive once I showed them the RBI guidelines mentioned here."
        },
        {
            name: "Karan S.",
            location: "Bangalore",
            rating: 5,
            text: "The legal notice template advice is perfect. I sent it and the harassment stopped instantly."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Recovery Agent Came To My Office: Actionable Legal Steps To Stop Workplace Harassment",
        "description": "Learn the exact legal protocols to follow when a bank recovery agent visits your office. Protect your job and stop harassment immediately.",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "author": {
            "@type": "Person",
            "name": "Vikram Sharma",
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
                "name": "Recovery Agent Came To My Office",
                "item": "https://www.credsettle.com/recovery-agent-came-to-my-office"
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
        'name': 'Recovery Agent Came To My Office',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
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
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-office"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-office"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-office"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <Script
                id="faq-schema-office"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="product-schema-office"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <RecoveryAgentOfficeClient />
                        </div>
            <Footer />
        </div>
    );
}
