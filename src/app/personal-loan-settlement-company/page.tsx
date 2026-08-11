import React from 'react';
import type { Metadata } from 'next';
import PersonalLoanSettlementCompanyClient from './PersonalLoanSettlementCompanyClient';

export const metadata: Metadata = {
    title: 'Top Personal Loan Settlement Company in India | Verified & Genuine',
    description: 'Looking for a verified debt settlement company in India? Discover how genuine loan settlement agencies can help you negotiate with banks, stop harassment, and become debt-free.',
    alternates: {
        canonical: 'https://www.credsettle.com/personal-loan-settlement-company',
    },
    openGraph: {
        title: 'Top Personal Loan Settlement Company in India | Verified & Genuine',
        description: 'Looking for a verified debt settlement company in India? Discover how genuine loan settlement agencies can help you negotiate with banks, stop harassment, and become debt-free.',
        url: 'https://www.credsettle.com/personal-loan-settlement-company',
        siteName: 'CredSettle',
        locale: 'en_IN',
        type: 'article',
    }
};

export default function PersonalLoanSettlementCompanyPage() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'How to Choose the Top Personal Loan Settlement Company in India',
        description: 'A comprehensive guide on selecting verified debt settlement companies in India to safely navigate personal loan defaults without falling for scams.',
        image: 'https://www.credsettle.com/images/personal-loan-settlement-company.jpg',
        author: {
            '@type': 'Organization',
            name: 'CredSettle Legal Team',
            url: 'https://www.credsettle.com/about'
        },
        publisher: {
            '@type': 'Organization',
            name: 'CredSettle',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.credsettle.com/logo.png'
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://www.credsettle.com/personal-loan-settlement-company'
        }
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.credsettle.com'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Top Personal Loan Settlement Company',
                item: 'https://www.credsettle.com/personal-loan-settlement-company'
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <PersonalLoanSettlementCompanyClient />
        </>
    );
}
