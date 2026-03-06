import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanDefaultRecoveryFreezeDefenseClient from './LoanDefaultRecoveryFreezeDefenseClient';

export const metadata: Metadata = {
    title: 'Loan Default & Recovery Freeze Defense | Expert Legal Protection 2025',
    description: 'Facing loan recovery freeze or harassment? Learn your legal rights under SARFAESI Act, DRT defense strategies, and how to stop illegal bank actions and seizures in India.',
    keywords: 'loan default recovery defense, debt recovery freeze legal help India, SARFAESI Act section 17 defense, illegal NPA classification help, DRT lawyer loan recovery',
    alternates: {
        canonical: 'https://credsettle.com/loan-default-recovery-freeze-defense'
    }
};

export default function LoanDefaultRecoveryFreezeDefensePage() {
    return (
        <main>
            <Navbar />
            <LoanDefaultRecoveryFreezeDefenseClient />
            <Footer />

            {/* Server-side Schema for Article */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Article',
                        'headline': 'Legal Manual: Defending Against Loan Default and Recovery Freeze in 2025',
                        'description': 'A comprehensive guide on legal defense mechanisms for borrowers facing recovery actions, exploring SARFAESI rights, DRT filings, and RBI fair practice codes.',
                        'image': 'https://credsettle.com/images/recovery-freeze-defense.jpg',
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
                        'datePublished': '2025-03-01',
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
                                'name': 'Loan Default Recovery Freeze Defense',
                                'item': 'https://credsettle.com/loan-default-recovery-freeze-defense'
                            }
                        ]
                    })
                }}
            />
        </main>
    );
}
