import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MudraLoanSettlementClient from './MudraLoanSettlementClient';

export const metadata: Metadata = {
    title: 'Mudra Loan Settlement Legal Help 2025 | SBI PMMY Recovery Defense',
    description: 'Expert legal help for Mudra loan settlement in India. Understand RBI 2025 guidelines for PMMY Tarun Plus settlement, stop recovery harassment, and settle debt legally.',
    keywords: 'mudra loan settlement legal help, sbi mudra loan ots 2025, pmmy loan recovery defense, tarun plus loan settlement india, msme loan legal assistance rbi',
};

export default function Page() {
    const jsonLd = [
        {
            '@context': 'https://schema.org',
            '@type': 'Article',
            'headline': 'Mudra Loan Settlement Legal Help: A 2025-26 Guide to PMMY Debt Resolution',
            'description': 'A comprehensive legal guide on settling Mudra loans under PMMY, exploring RBI MSME settlement norms, recovery defense, and one-time settlement strategies.',
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
                    'name': 'Mudra Loan Settlement Legal Help',
                    'item': 'https://www.credsettle.com/mudra-loan-settlement-legal-help'
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
            <MudraLoanSettlementClient />
                        </div>
            <Footer />
        </div>
    );
}
