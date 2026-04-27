import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import BouncedSecurityCheckClient from './BouncedSecurityCheckClient';

export const metadata: Metadata = {
    title: 'Best Lawyers for Bounced Security Check for Loans',
    description: 'Facing a Section 138 NI Act case for a bounced security cheque? Get expert legal defense for loan and credit card disputes in India. Learn your rights and defenses for 2025.',
    keywords: 'best lawyer for bounced security check, Section 138 NI Act defense, security cheque bounce credit card, loan security cheque legal notice, cheque bounce lawyer India, credit card dispute lawyer',
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyers-for-bounced-security-check-for-loans-and-credit-card-disputes',
    },
};

export default function BouncedSecurityCheckPage() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyers for Bounced Security Check for Loans and Credit Card Disputes",
        "description": "Comprehensive legal guide on defending Section 138 NI Act cases involving security cheques for loans and credit cards in India, updated for 2025.",
        "image": "https://www.credsettle.com/images/cheque-bounce-defence.jpg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/logo.png"
            }
        },
        "datePublished": "2026-03-02",
        "dateModified": "2026-03-02",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.credsettle.com/best-lawyers-for-bounced-security-check-for-loans-and-credit-card-disputes"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.credsettle.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Bounced Security Check Legal Defence",
                "item": "https://www.credsettle.com/best-lawyers-for-bounced-security-check-for-loans-and-credit-card-disputes"
            }
        ]
    };

    return (
        <>
            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <BouncedSecurityCheckClient />
        </>
    );
}
