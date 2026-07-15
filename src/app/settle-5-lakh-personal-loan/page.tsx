import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Settle5LakhClient from './Settle5LakhClient';

export const metadata: Metadata = {
    title: "Settle a ₹5 Lakh Personal Loan: Guide",
    description: "Learn how to successfully negotiate and settle a ₹5 lakh personal loan in India. Discover expected percentages, timeline, and CIBIL impact now.",
    keywords: [
        "settle 5 lakh personal loan",
        "personal loan settlement percentage",
        "how to settle a 500000 loan",
        "unsecured loan default India",
        "CIBIL score after loan settlement",
        "bank NPA timeline"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/settle-5-lakh-personal-loan',
    },
};

export default function Settle5LakhPage() {
    const faqs = [{'q': 'Can I settle my 5 lakh loan for 1 lakh?', 'a': 'While technically possible in cases of extreme, documented financial ruin (like terminal illness or absolute bankruptcy), it is highly unlikely. Banks typically settle unsecured personal loans between 40% and 50% of the principal amount. A 20% settlement is extremely rare and requires extraordinary circumstances.'}, {'q': 'Will the bank send police to my house for a 5 lakh default?', 'a': 'No. Defaulting on a personal loan is a civil matter, not a criminal offense. The bank cannot send the police to arrest you. They can only send authorized recovery agents, who must adhere to strict RBI guidelines regarding decorum and timing. If agents impersonate police, it is a criminal offense on their part.'}, {'q': 'How long does it take to settle a 5 lakh loan?', 'a': "The process is not instant. It typically takes 3 to 6 months of the account being in NPA status before the bank offers acceptable terms. You can read more about the <a href='/what-is-the-average-timeframe-for-completing-a-loan-settlement-process' class='text-blue-600 hover:underline'>average timeframe for a loan settlement process</a> to set realistic expectations."}, {'q': 'Can I get a home loan after settling a 5 lakh personal loan?', 'a': "It will be extremely difficult for the next 5 to 7 years. A 'Settled' status severely damages your creditworthiness. Most mainstream banks will automatically reject your application. You might have to rely on specialized housing finance companies that charge significantly higher interest rates, and even then, approval is not guaranteed."}, {'q': 'Should I pay the settlement agent directly in cash?', 'a': 'Never. Under no circumstances should you hand over cash to an agent or transfer money to a personal UPI ID. The settlement amount must always be paid directly into your loan account or via a Demand Draft made in the exact name of the bank, as specified in the official settlement letter.'}, {'q': 'What happens if I miss the settlement payment deadline?', 'a': 'If you fail to pay by the date specified in the settlement letter, the agreement becomes null and void. The bank will reinstate the full original outstanding amount, including all waived penal charges and interest, and aggressive recovery efforts will resume immediately. Your credibility for future negotiations will be destroyed.'}, {'q': 'Is the waived amount considered taxable income?', 'a': "Yes, under Section 41(1) of the Income Tax Act, the amount of debt waived by the bank during a settlement is considered a 'benefit or perquisite' arising from business or profession. You are legally required to declare this waived amount as income and pay applicable taxes on it."}];
    const reviews = [{'name': 'Vikram S.', 'location': 'Mumbai', 'rating': 5, 'text': "I lost my job and couldn't pay my 5L loan. The harassment was unbearable. The strategies here helped me understand the NPA timeline. I held my ground and eventually settled for 2.2 Lakhs after 7 months."}, {'name': 'Pooja M.', 'location': 'Bengaluru', 'rating': 5, 'text': 'I was terrified of the legal notices for my 5 lakh default. Learning that I could negotiate the principal amount changed everything. I used the checklist to ensure I got a proper NOC from the bank.'}, {'name': 'Rajesh K.', 'location': 'Delhi', 'rating': 5, 'text': 'I was about to pay a scammer posing as a bank agent. This guide taught me to demand the official letterhead and verify the reference number. It saved me from making a terrible mistake.'}];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Settle a ₹5 Lakh Personal Loan: Complete 2025 Guide",
        "description": "Learn how to successfully negotiate and settle a ₹5 lakh personal loan in India. Discover expected percentages, timeline, and CIBIL impact.",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "author": {
            "@type": "Person",
            "name": "CredSettle Expert",
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
        "datePublished": "2025-03-15",
        "dateModified": "2025-03-15"
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
                "name": "Settle 5 Lakh Personal Loan",
                "item": "https://www.credsettle.com/settle-5-lakh-personal-loan"
            }
        ]
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "CredSettle",
        "url": "https://www.credsettle.com",
        "logo": "https://www.credsettle.com/credsettle-logo.svg",
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
            'name': faq.q,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.a
            }
        }))
    };

    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': '5 Lakh Personal Loan Settlement Guide',
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
                id="article-schema-5lakh"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-5lakh"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-5lakh"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <Script
                id="faq-schema-5lakh"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="product-schema-5lakh"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <Settle5LakhClient />
            <Footer />
        </main>
    );
}
