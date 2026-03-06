import { Metadata } from 'next';
import SmeLoanDisputeResolutionClient from './SmeLoanDisputeResolutionClient';

export const metadata: Metadata = {
    title: 'Best Lawyer for SME Loan Dispute Resolution in India | Legal Help for MSMEs',
    description: 'Expert legal defense for SME and MSME loan disputes. We help businesses navigate delayed payments, MSEFC arbitration, and RBI revival frameworks to protect your enterprise.',
    keywords: 'SME loan dispute resolution, MSME loan legal help India, MSEFC arbitration for delayed payments, RBI MSME revival framework, professional SME debt defense',
    alternates: {
        canonical: 'https://credsettle.com/SME-loan-dispute-resolution'
    }
};

export default function SmeLoanDisputeResolutionPage() {
    const articleLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Comprehensive Guide to SME Loan Dispute Resolution in India',
        'description': 'A detailed legal manual for MSMEs facing loan disputes, exploring delayed payments, arbitration mechanisms, and RBI-mandated revival strategies.',
        'image': 'https://credsettle.com/images/sme-dispute.jpg',
        'author': {
            '@type': 'Organization',
            'name': 'CredSettle SME Legal Team'
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'CredSettle',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://credsettle.com/logo.png'
            }
        },
        'datePublished': '2025-01-15',
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
                'item': 'https://credsettle.com/'
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'SME Loan Dispute Resolution',
                'item': 'https://credsettle.com/SME-loan-dispute-resolution'
            }
        ]
    };

    const organizationLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'CredSettle',
        'url': 'https://credsettle.com',
        'logo': 'https://credsettle.com/logo.png',
        'sameAs': [
            'https://www.facebook.com/credsettle',
            'https://www.twitter.com/credsettle',
            'https://www.linkedin.com/company/credsettle'
        ]
    };

    return (
        <main>
            <SmeLoanDisputeResolutionClient />

            {/* Server-side Schema */}
            <script
                id="article-schema-sme"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <script
                id="breadcrumb-schema-sme"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <script
                id="org-schema-sme"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
        </main>
    );
}
