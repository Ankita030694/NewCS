import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FrozenAccountClient from './FrozenAccountClient';

export const metadata: Metadata = {
    title: "Salary Account Frozen for Loan Default: How to Unfreeze",
    description: "Learn how to stop illegal auto debits and unfreeze your salary account after a loan default. A legal guide to countering the Banker's Right of Lien in India.",
    keywords: [
        "salary account frozen by bank loan default",
        "banker's right of lien",
        "auto debit bounce",
        "unfreeze bank account loan default",
        "stop auto debit for personal loan"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/salary-account-frozen-by-bank-for-loan-default',
    },
};

export default function SalaryAccountFrozenPage() {
    const jsonLdArticle = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Salary Account Frozen by Bank for Loan Default: How to Unfreeze It",
        "description": "A comprehensive guide for borrowers facing a frozen salary account due to personal loan default. Discover legal steps to stop auto debits and secure your livelihood.",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "author": {
            "@type": "Organization",
            "name": "CredSettle Legal Team"
        },
        "datePublished": "2026-07-18",
        "dateModified": "2026-07-18"
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
                "name": "Salary Account Frozen",
                "item": "https://www.credsettle.com/salary-account-frozen-by-bank-for-loan-default"
            }
        ]
    };

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can a bank freeze my salary account without a court order?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, if you have a loan with the same bank where you receive your salary, they can invoke the Banker's Right of Lien (Right of Set-Off) to recover the outstanding EMIs without requiring a court order."
                }
            },
            {
                "@type": "Question",
                "name": "Is it legal for the bank to deduct my entire salary for a loan default?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While banks have the right to set-off, RBI guidelines mandate that borrowers must be left with a minimum subsistence amount to survive. Completely draining an account and leaving zero balance is often considered an unfair banking practice that can be challenged."
                }
            },
            {
                "@type": "Question",
                "name": "How can I stop the auto debit for my personal loan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can formally submit a revocation letter to your bank branch to cancel the NACH or standing instruction. However, if the salary account is with the same lending bank, simply cancelling NACH might not stop them from using their Right of Lien."
                }
            },
            {
                "@type": "Question",
                "name": "What is the fastest way to protect my future income from being frozen?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The fastest and most effective step is to request your HR department to change your salary credit to a completely different, unaffiliated bank where you do not hold any active loans or credit cards."
                }
            },
            {
                "@type": "Question",
                "name": "Can I complain to the RBI Ombudsman if my account is frozen?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, if the bank freezes your account without prior notice or deducts funds beyond the agreed EMI amount without providing you a minimum living allowance, you can file a grievance with the RBI Banking Ombudsman for unfair practices."
                }
            }
        ]
    };

    const reviewLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Bank Account Unfreeze Legal Support",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "3"
        },
        "review": [
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Karan V." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                "reviewBody": "My bank wiped out my entire salary on payday due to a missed personal loan EMI. CredSettle stepped in, filed a legal notice citing RBI guidelines on subsistence, and forced the bank to unfreeze my funds within 48 hours."
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Neha S." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                "reviewBody": "I was terrified when I saw my account balance hit zero. The lawyers explained the Banker's Right of Lien clearly and helped me negotiate a restructuring plan so I could actually afford to live while paying my debt."
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Vikram T." },
                "reviewRating": { "@type": "Rating", "ratingValue": "4.5" },
                "reviewBody": "Excellent advice on changing salary accounts and handling NACH revocation. They saved me from a very stressful financial trap set by my lending bank."
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-salary-frozen"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <Script
                id="breadcrumb-schema-salary-frozen"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="faq-schema-salary-frozen"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
            />
            <Script
                id="review-schema-salary-frozen"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewLd) }}
            />
            <FrozenAccountClient />
                        </div>
            <Footer />
        </div>
    );
}
