import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Settle10LakhClient from './Settle10LakhClient';

export const metadata: Metadata = {
    title: "Settle a ₹10 Lakh Personal Loan in India: Legal & Strategy Guide",
    description: "Discover how to safely negotiate a settlement for a ₹10 Lakh unsecured personal loan in India. Learn legal strategies to stop harassment and avoid severe escalation.",
    keywords: [
        "10 lakh personal loan settlement",
        "high value loan default india",
        "how to settle 10 lakh loan",
        "legal action for 10 lakh loan default",
        "stop recovery agents personal loan"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/settle-10-lakh-personal-loan',
    },
};

export default function Settle10LakhPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Settling a ₹10 Lakh Personal Loan in India: A Complete Guide",
        "description": "Navigate the complexities of high-value unsecured debt, avoid legal risks, and structure a successful settlement offer for a 10 lakh loan.",
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
                "name": "Settle ₹10 Lakh Personal Loan",
                "item": "https://www.credsettle.com/settle-10-lakh-personal-loan"
            }
        ]
    };

    const faqs = [
    {
        "question": "At what stage does a \u20b910 Lakh personal loan default become a legal issue?",
        "answer": "Typically, after 90 days of non-payment, the loan is classified as a Non-Performing Asset (NPA). At this point, the bank may initiate legal proceedings, including sending demand notices or invoking arbitration clauses, as high-value loans are prioritized for legal recovery."
    },
    {
        "question": "Can I negotiate a settlement directly with the bank for a 10 Lakh loan?",
        "answer": "Yes, you can approach the bank directly. However, for significant amounts like \u20b910 Lakh, banks often employ experienced negotiators. Having legal representation or using professional platforms ensures you get a fair deal and that all documentation, like the NOC, is legally binding."
    },
    {
        "question": "What percentage of the principal is usually accepted for settling a 10 Lakh loan?",
        "answer": "Settlement percentages vary widely based on your proven financial hardship, the age of the default, and the bank's policies. While some cases settle for 30% to 50% of the principal, it requires substantial negotiation and solid proof of inability to pay."
    },
    {
        "question": "Will settling a 10 Lakh loan ruin my CIBIL score forever?",
        "answer": "A settlement will severely impact your CIBIL score, dropping it significantly and marking the account as 'Settled' rather than 'Closed'. However, it is not permanent. With disciplined financial behavior, like using secured credit cards, you can gradually rebuild your score over several years."
    },
    {
        "question": "How do I stop recovery agents from visiting my office for a large loan default?",
        "answer": "You have the right to privacy and dignity. You can send a formal cease and desist notice to the bank, citing RBI guidelines against harassment. If visits continue, you can file a complaint on the RBI Sachet portal or seek a temporary injunction from a civil court."
    },
    {
        "question": "Are there tax implications on the amount waived in a loan settlement?",
        "answer": "Under Indian tax laws, the amount waived by the bank in a settlement is technically considered a benefit or income. You should consult a tax advisor, as this waived amount might need to be declared under 'Income from Other Sources' during your tax filing."
    },
    {
        "question": "Is an online settlement offer letter for my 10 Lakh loan legally binding?",
        "answer": "An online offer letter is binding if it comes from the bank's official corporate email domain, contains your exact loan details, a unique reference number, and is digitally signed by an authorized officer. Never trust offers from generic email addresses or WhatsApp."
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

    const reviews = [
    {
        "name": "Vikram S.",
        "location": "Mumbai",
        "rating": 5,
        "text": "The insights on the 90-day escalation timeline were spot on. I knew exactly when to start my negotiation for my \u20b910 Lakh loan and managed a 45% settlement. Highly recommended guide."
    },
    {
        "name": "Neha R.",
        "location": "Delhi",
        "rating": 5,
        "text": "I was terrified of agents coming to my office. This guide gave me the legal backing to stop them and negotiate professionally. Thank you for the detailed cost breakdown."
    },
    {
        "name": "Arjun K.",
        "location": "Bangalore",
        "rating": 5,
        "text": "Brilliant breakdown of the tax implications. No one else talks about the tax on the waived amount. A must-read for anyone defaulting on large personal loans."
    }
];

    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Settling a ₹10 Lakh Personal Loan in India Guide',
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
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-10lakh"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-10lakh"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="faq-schema-10lakh"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="product-schema-10lakh"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <Settle10LakhClient />
                        </div>
            <Footer />
        </div>
    );
}
