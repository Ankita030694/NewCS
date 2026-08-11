import { Metadata } from 'next';
import LoanSettlementDRTClient from './LoanSettlementDRTClient';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Best Lawyer for Loan Settlement During DRT Cases (2025)',
    description: 'Looking for the best lawyer for loan settlement during a DRT case in India? Get expert legal strategies for SARFAESI defense, DRT mediation, and bank negotiations to settle your debt effectively.',
    keywords: 'best lawyer for loan settlement during drt, drt loan settlement lawyer, debt recovery tribunal lawyer india, sarfaesi defense advocate, loan settlement during drt proceedings, debt settlement lawyer india, drt legal help, bank loan settlement expert',
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-loan-settlement-during-drt',
    },
};

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LoanSettlementDRTPage() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Best Lawyer for Loan Settlement During DRT Case: The Strategic Path for Borrowers in India',
        'description': 'A comprehensive guide on finding the best lawyer for loan settlement during a DRT case, covering legal strategies, SARFAESI challenges, and the settlement process in 2025.',
        'image': 'https://www.credsettle.com/images/drt-loan-settlement-guide.jpg',
        'author': {
            '@type': 'Organization',
            'name': 'CredSettle'
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'CredSettle',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://www.credsettle.com/logo.png'
            }
        },
        'datePublished': '2025-01-15',
        'dateModified': '2026-03-02'
    };

    const breadcrumbSchema = {
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
                'name': 'Best Lawyer for Loan Settlement During DRT',
                'item': 'https://www.credsettle.com/best-lawyer-for-loan-settlement-during-drt'
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-drt-settlement"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Script
                id="breadcrumb-schema-drt-settlement"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <LoanSettlementDRTClient />
                        </div>
            <Footer />
        </div>
    );
}
