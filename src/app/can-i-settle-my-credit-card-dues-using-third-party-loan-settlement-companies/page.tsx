import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
import CreditCardSettlementClient from './CreditCardSettlementClient';

export const metadata: Metadata = {
    title: 'Can I Settle My Credit Card Dues Using Third-Party Companies? (2025 Guide)',
    description: 'Learn the legality, risks, and benefits of using third-party loan settlement companies like AMA Legal, CredSettle, and SettleLoans for credit card debt in India. 5000+ words expert analysis.',
    alternates: {
        canonical: 'https://www.credsettle.com/can-i-settle-my-credit-card-dues-using-third-party-loan-settlement-companies',
    },
};

export default function CreditCardSettlementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Can I Settle My Credit Card Dues Using Third-Party Loan Settlement Companies?",
        "description": "A comprehensive 2025 guide on the legality, risks, and RBI rules for credit card debt resolution through professional agencies in India.",
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
        "datePublished": "2025-03-20",
        "dateModified": "2025-03-20"
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
                "name": "Credit Card Settlement via Third-Party",
                "item": "https://www.credsettle.com/can-i-settle-my-credit-card-dues-using-third-party-loan-settlement-companies"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-cc-settlement"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-cc-settlement"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <CreditCardSettlementClient />
            <Footer />
        </div>
    );
}
