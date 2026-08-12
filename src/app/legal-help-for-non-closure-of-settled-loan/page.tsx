import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LegalHelpNonClosureClient from './LegalHelpNonClosureClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.credsettle.com/legal-help-for-non-closure-of-settled-loan' },
    title: 'Legal Help for Non-Closure of Settled Loan 2025-26 | RBI Penalty Guidelines',
    description: 'Facing issues with non-closure of settled loan? Understand RBI 2025 guidelines on NOC, ₹5000 daily penalty for document delays, and legal help for CIBIL updates.',
    keywords: 'legal help for non-closure of settled loan, settled loan not closed in CIBIL, NOC delay penalty RBI 2025, how to close settled loan account, braining ombudsman complaint for settled loan',
};

export default function Page() {
    const jsonLd = [
        {
            '@context': 'https://schema.org',
            '@type': 'Article',
            'headline': 'Legal Help for Non-Closure of Settled Loan: A 2025-26 Comprehensive Guide',
            'description': 'A detailed technical guide on legal remedies for borrowers whose loan accounts remain open after settlement, including RBI penalty rules and CIBIL correction procedures.',
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
            'datePublished': '2025-03-07',
            'dateModified': '2026-03-07'
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
                {
                    '@type': 'ListItem',
                    'position': 1,
                    'name': 'Home',
                    'item': 'https://www.credsettle.com/'
                },
                {
                    '@type': 'ListItem',
                    'position': 2,
                    'name': 'Legal Help for Non-Closure of Settled Loan',
                    'item': 'https://www.credsettle.com/legal-help-for-non-closure-of-settled-loan'
                }
            ]
        },
        {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'CredSettle',
            'url': 'https://www.credsettle.com',
            'logo': 'https://www.credsettle.com/logo.png',
            'contactPoint': {
                '@type': 'ContactPoint',
                'telephone': '+91-XXXX-XXXXXX',
                'contactType': 'customer service',
                'areaServed': 'IN',
                'availableLanguage': ['en', 'hi']
            }
        }
    ];

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <LegalHelpNonClosureClient />
                        </div>
            <Footer />
        </div>
    );
}
