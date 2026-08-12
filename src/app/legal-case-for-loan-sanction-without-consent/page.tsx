import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanSanctionWithoutConsentClient from './LoanSanctionWithoutConsentClient';

export const metadata: Metadata = {
    title: 'Legal Case for Loan Sanction Without Consent | Expert Fraud Defense',
    description: 'Was a loan sanctioned without your consent? Learn about your legal rights, RBI Ombudsman complaints, and how to stop unauthorized EMI deductions and fix your credit score.',
    keywords: 'loan sanction without consent, unauthorized loan disbursement India, illegal loan sanction legal action, RBI Ombudsman loan fraud, credit score rectification for fraud',
    alternates: {
        canonical: 'https://www.credsettle.com/legal-case-for-loan-sanction-without-consent'
    }
};

export default function LoanSanctionWithoutConsentPage() {
    const articleLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Legal Manual: Fighting Loan Sanctions Without Consent in India',
        'description': 'A comprehensive legal guide on handling unauthorized loan disbursements, identity theft in lending, and the procedural steps to cancel illegal contracts.',
        'image': 'https://www.credsettle.com/images/unauthorized-loan.jpg',
        'author': {
            '@type': 'Organization',
            'name': 'CredSettle Legal Defense Team'
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'CredSettle',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://www.credsettle.com/logo.png'
            }
        },
        'datePublished': '2025-02-10',
        'dateModified': '2026-03-06'
    };

    const breadcrumbLd = {
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
                'name': 'Legal Case for Loan Sanction Without Consent',
                'item': 'https://www.credsettle.com/legal-case-for-loan-sanction-without-consent'
            }
        ]
    };

    const organizationLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'CredSettle',
        'url': 'https://www.credsettle.com',
        'logo': 'https://www.credsettle.com/logo.png',
        'sameAs': [
            'https://www.facebook.com/credsettle',
            'https://www.twitter.com/credsettle',
            'https://www.linkedin.com/company/credsettle'
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <LoanSanctionWithoutConsentClient />

            {/* Server-side Schema */}
            <script
                id="article-schema-no-consent"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <script
                id="breadcrumb-schema-no-consent"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <script
                id="org-schema-no-consent"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
                        </div>
            <Footer />
        </div>
    );
}
