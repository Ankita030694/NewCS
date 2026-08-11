import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LegalImplicationsClient from './LegalImplicationsClient';

export const metadata: Metadata = {
    title: 'Legal Risks of Non-Payment During Debt Settlement (2025)',
    description: 'Understand the legal implications of non-payment during debt settlement in India. Detailed analysis of Section 138, SARFAESI Act, and RBI guidelines on recovery.',
    keywords: 'legal implications of non payment during debt settlement, section 138 cheque bounce, sarfaesi act india, rbi debt recovery guidelines, non payment consequences india',
    alternates: {
        canonical: 'https://www.credsettle.com/are-there-legal-implecations-or-non-payment-during-debt-settlement',
    },
};

export default function LegalImplicationsPage() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Are There Legal Implications for Non-Payment During Debt Settlement?',
        'description': 'A comprehensive 2025 guide exploring the legal risks, borrower rights, and institutional frameworks governing debt default in India.',
        'image': 'https://www.credsettle.com/images/legal-implications-debt.jpg',
        'author': {
            '@type': 'Organization',
            'name': 'CredSettle',
            'url': 'https://www.credsettle.com'
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'CredSettle',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://www.credsettle.com/logo.png'
            }
        },
        'datePublished': '2025-01-20',
        'dateModified': '2025-03-16'
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://www.credsettle.com'
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Legal Implications of Non-Payment',
                'item': 'https://www.credsettle.com/are-there-legal-implecations-or-non-payment-during-debt-settlement'
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <LegalImplicationsClient />
                        </div>
            <Footer />
        </div>
    );
}
