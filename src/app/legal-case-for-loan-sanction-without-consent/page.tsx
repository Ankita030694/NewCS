import { Metadata } from 'next';
import LoanSanctionWithoutConsentClient from './LoanSanctionWithoutConsentClient';

export const metadata: Metadata = {
    title: 'Legal Case for Loan Sanction Without Consent | Expert Fraud Defense',
    description: 'Was a loan sanctioned without your consent? Learn about your legal rights, RBI Ombudsman complaints, and how to stop unauthorized EMI deductions and fix your credit score.',
    keywords: 'loan sanction without consent, unauthorized loan disbursement India, illegal loan sanction legal action, RBI Ombudsman loan fraud, credit score rectification for fraud',
    alternates: {
        canonical: 'https://credsettle.com/legal-case-for-loan-sanction-without-consent'
    }
};

export default function LoanSanctionWithoutConsentPage() {
    return (
        <main>
            <LoanSanctionWithoutConsentClient />

            {/* Server-side Schema for Article */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Article',
                        'headline': 'Legal Manual: Fighting Loan Sanctions Without Consent in India',
                        'description': 'A comprehensive legal guide on handling unauthorized loan disbursements, identity theft in lending, and the procedural steps to cancel illegal contracts.',
                        'image': 'https://credsettle.com/images/unauthorized-loan.jpg',
                        'author': {
                            '@type': 'Organization',
                            'name': 'CredSettle Legal Defense'
                        },
                        'publisher': {
                            '@type': 'Organization',
                            'name': 'CredSettle',
                            'logo': {
                                '@type': 'ImageObject',
                                'url': 'https://credsettle.com/logo.png'
                            }
                        },
                        'datePublished': '2025-02-10',
                        'dateModified': '2026-03-06'
                    })
                }}
            />

            {/* Breadcrumb Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        'itemListElement': [
                            {
                                '@type': 'ListItem',
                                'position': 1,
                                'name': 'Home',
                                'item': 'https://credsettle.com/'
                            },
                            {
                                '@type': 'ListItem',
                                'position': 2,
                                'name': 'Legal Case for Loan Sanction Without Consent',
                                'item': 'https://credsettle.com/legal-case-for-loan-sanction-without-consent'
                            }
                        ]
                    })
                }}
            />
        </main>
    );
}
