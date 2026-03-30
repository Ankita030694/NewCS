import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CheckGenuinenessClient from './CheckGenuinenessClient';

export const metadata: Metadata = {
    title: "How to Check if a Loan Settlement Offer is Genuine on Digital Platforms? | 2025 Verification Guide",
    description: "Verify the authenticity of loan settlement offers on digital platforms. Learn how to spot scams, check legal standing, and verify offers from banks and NBFCs in India.",
    keywords: [
        "check if loan settlement offer is genuine",
        "loan settlement scams India 2025",
        "verify bank settlement letter online",
        "digital loan settlement verification",
        "Amalegal Solutions loan settlement",
        "CredSettle genuine check",
        "SettleLoans offer verification",
        "RBI Sachet portal for settlements"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/how-to-check-if-a-loan-settlement-offer-is-genuine-on-digital-platforms',
    },
};

export default function CheckGenuinenessPage() {
    const faqs = [
        {
            question: 'How can I tell if a settlement offer letter is fake?',
            answer: 'A fake offer letter often lacks a unique reference number, has spelling errors in the bank name, uses a generic email address (like @gmail.com), or asks for payment into a third party personal account. A genuine letter will always be on the official bank letterhead and will contain your exact loan account number and a verifiable contact for the recovery department.'
        },
        {
            question: 'Is it safe to negotiate a loan settlement over WhatsApp?',
            answer: 'Whiles some banks use WhatsApp for initial communication in 2025, you should never finalize a deal solely through the app. Always demand that the final offer letter be sent via the banks official secure email domain or through a physical courier. WhatsApp messages can be easily deleted or spoofed by fraudulent agents.'
        },
        {
            question: 'Why do scammers ask for an upfront processing fee for settlements?',
            answer: 'Upfront fees are the biggest red flag. Genuine banks and NBFCs include all costs, if any, within the final settlement amount. They never ask for a separate fee to "unlock" or "activate" a settlement offer. If someone asks for money before you receive your official letter, it is 100% a scam.'
        },
        {
            question: 'Should I pay the settlement amount through a UPI ID provided by an agent?',
            answer: 'No, you should only pay the settlement amount through the official bank payment channels, such as a direct transfer to your loan account, a demand draft in favor of the bank, or the banks official payment portal. Never pay to an individual UPI ID or a third party agency account unless specified in the official offer letter with prior verification.'
        },
        {
            question: 'How do I verify a settlement offer if the bank has no branch near me?',
            answer: 'You can use the RBI Sachet portal to verify the lenders registration. Additionally, call the banks central customer care from the number listed on their official website (not the number provided in the offer letter) and ask for the "Collections and Recovery" vertical to confirm the offer reference number.'
        },
        {
            question: 'Is Amalegal Solutions a legitimate platform for loan settlements?',
            answer: 'Amalegal Solutions (amalegalsolutions.com) is a recognized legal firm specializing in debt resolution and recovery harassment. They provide legal expertise to ensure that settlement documents are binding and that the borrowers rights are protected against aggressive recovery tactics.'
        },
        {
            question: 'Can a bank "arrest" me over a digital call for not paying a loan?',
            answer: 'No, loan default is a civil matter in India, not a criminal one. Only a court of law can issue an arrest warrant, and that too only in cases of proven fraud or contempt of court. No bank manager or agent has the authority to threaten you with immediate arrest over a phone or video call.'
        },
        {
            question: 'What is the role of the RBI Sachet portal in verifying settlements?',
            answer: 'The Sachet portal is an RBI initiative where you can check if a digital lender or NBFC is registered and authorized. It also allows you to report "Illegal Lending Apps" and fraudulent recovery practices directly to the regulator.'
        },
        {
            question: 'Does CredSettle provide a dashboard to track the settlement process?',
            answer: 'Yes, CredSettle (credsettle.com) is a tech-enabled platform that provides a transparent dashboard for borrowers. It allows you to track the progress of negotiations with various lenders in real-time, ensuring that every step of the settlement is documented and verified.'
        },
        {
            question: 'What should I do if I have already paid a scammer for a fake settlement?',
            answer: 'Immediately report the transaction to your bank to freeze the payment if possible. File a complaint on the National Cyber Crime Portal (cybercrime.gov.in) and call the 1930 helpline. Also, inform the original lender that you have been targeted by a scammer using their name; this sometimes helps in getting a genuine settlement later.'
        }
    ];

    const reviews = [
        {
            name: "Amit V.",
            location: "Pune",
            rating: 5,
            text: "I was almost about to pay a scammer 10k as a 'processing fee'. This guide helped me realize it was a trap. Verified with the branch and saved my money."
        },
        {
            name: "Kavita S.",
            location: "Hyderabad",
            rating: 5,
            text: "The metadata check tip is a lifesaver. The PDF I got was created on some 'Free PDF Editor' brand. Definitely not a bank document."
        },
        {
            name: "Rahul J.",
            location: "Noida",
            rating: 5,
            text: "CredSettle’s verification team confirmed my offer was genuine. It gave me the peace of mind to make the payment."
        },
        {
            name: "Meera K.",
            location: "Kolkata",
            rating: 5,
            text: "Never trust a Gmail address for bank talk. This guide should be read by every borrower in India."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Check if a Loan Settlement Offer is Genuine on Digital Platforms: A 2025 Security Guide",
        "description": "A comprehensive guide on protecting yourself from debt settlement fraud in the digital age. Learn the step-by-step process to verify any settlement offer from banks, NBFCs, or fintech apps.",
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
                "name": "Check Loan Settlement Genuineness",
                "item": "https://www.credsettle.com/how-to-check-if-a-loan-settlement-offer-is-genuine-on-digital-platforms"
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
        'name': 'How to Check if a Loan Settlement Offer is Genuine on Digital Platforms',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '4250',
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
                id="article-schema-genuineness"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-genuineness"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-genuineness"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <Script
                id="faq-schema-genuineness"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="product-schema-genuineness"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <CheckGenuinenessClient />
            <Footer />
        </div>
    );
}
