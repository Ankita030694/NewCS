import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BestLoanEmiSettlementLawyerClient from './BestLoanEmiSettlementLawyerClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.credsettle.com/best-loan-emi-settlement-lawyer' },
    title: 'Best Loan EMI Settlement Lawyer 2025-26 | Debt Relief Legal Experts',
    description: 'Hire the best loan EMI settlement lawyer in India. Expert legal help for personal loan EMI settlement, credit card debt, and 2026 RBI pre-payment charge ban guidelines.',
    keywords: 'best loan emi settlement lawyer, emi settlement lawyer india, debt relief lawyer for personal loan, credit card settlement legal help, hardship settlement lawyer rbi 2025',
};

export default function Page() {
    const jsonLd = [
        {
            '@context': 'https://schema.org',
            '@type': 'Article',
            'headline': 'Choosing the Best Loan EMI Settlement Lawyer: 2025-26 Strategic Guide',
            'description': 'How to choose the right legal expert for loan EMI settlement, understanding the compromise settlement process, and leveraging 2025 RBI disclosure norms.',
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
                    'name': 'Best Loan EMI Settlement Lawyer',
                    'item': 'https://www.credsettle.com/best-loan-emi-settlement-lawyer'
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
            <BestLoanEmiSettlementLawyerClient />
                        </div>
            <Footer />
        </div>
    );
}
