import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanDefaultRecoveryFreezeDefenseClient from './LoanDefaultRecoveryFreezeDefenseClient';

export const metadata: Metadata = {
    title: 'Loan Default & Recovery Freeze Defense | Expert Legal Protection 2025',
    description: 'Facing loan recovery freeze or harassment? Learn your legal rights under SARFAESI Act, DRT defense strategies, and how to stop illegal bank actions and seizures in India.',
    keywords: 'loan default recovery defense, debt recovery freeze legal help India, SARFAESI Act section 17 defense, illegal NPA classification help, DRT lawyer loan recovery',
    alternates: {
        canonical: 'https://www.credsettle.com/loan-default-recovery-freeze-defense'
    }
};

export default function LoanDefaultRecoveryFreezeDefensePage() {
    const articleLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Legal Manual: Defending Against Loan Default and Recovery Freeze in 2025',
        'description': 'A comprehensive guide on legal defense mechanisms for borrowers facing recovery actions, exploring SARFAESI rights, DRT filings, and RBI fair practice codes.',
        'image': 'https://www.credsettle.com/images/recovery-freeze-defense.jpg',
        'author': {
            '@type': 'Organization',
            'name': 'CredSettle Recovery Defense Team'
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'CredSettle',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://www.credsettle.com/logo.png'
            }
        },
        'datePublished': '2025-03-01',
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
                'name': 'Loan Default Recovery Freeze Defense',
                'item': 'https://www.credsettle.com/loan-default-recovery-freeze-defense'
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
        <main>
            <Navbar />
            <LoanDefaultRecoveryFreezeDefenseClient />
            <Footer />

            {/* Server-side Schema */}
            <script
                id="article-schema-freeze"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <script
                id="breadcrumb-schema-freeze"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <script
                id="org-schema-freeze"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
        </main>
    );
}
