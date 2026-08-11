import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DisputeForgedSignaturesClient from './DisputeForgedSignaturesClient';

export const metadata: Metadata = {
    title: 'Dispute Over Forged Loan Signatures | Legal Action Against Loan Fraud',
    description: 'Expert legal defense for forged loan signatures in India. Learn about handwriting experts, FSL reports, IPC 467/468 cases, and how to stop unauthorized EMI deductions.',
    keywords: 'dispute over forged loan signatures, loan fraud legal help india, handwriting expert for forged loan, ipc 467 loan forgery case, fsl report for forged signature',
};

export default function Page() {
    const jsonLd = [
        {
            '@context': 'https://schema.org',
            '@type': 'Article',
            'headline': 'Dispute Over Forged Loan Signatures: Legal Remedies and Defense Strategy',
            'description': 'A detailed technical manual on fighting loan fraud involving forged signatures, exploring handwriting forensic analysis and criminal/civil legal remedies in India.',
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
                    'name': 'Dispute Over Forged Loan Signatures',
                    'item': 'https://www.credsettle.com/dispute-over-forged-loan-signatures'
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
            <DisputeForgedSignaturesClient />
                        </div>
            <Footer />
        </div>
    );
}
