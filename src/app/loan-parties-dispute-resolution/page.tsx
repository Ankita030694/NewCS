import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanPartiesDisputeResolutionClient from './LoanPartiesDisputeResolutionClient';

export const metadata: Metadata = {
    title: 'Loan Parties Dispute Resolution | Expert Legal Help 2025',
    description: 'Resolve disputes between borrowers, co-applicants, and guarantors. Learn about the Arbitration Act 1996, Mediation Act 2023, and modern ways to settle loan disagreements in India.',
    keywords: 'loan parties dispute resolution, multi-party loan agreement litigation, arbitration for loan disputes India, mediation for loans 2025, guarantor vs borrower legal help',
    alternates: {
        canonical: 'https://credsettle.com/loan-parties-dispute-resolution'
    }
};

export default function LoanPartiesDisputeResolutionPage() {
    return (
        <main>
            <Navbar />
            <LoanPartiesDisputeResolutionClient />
            <Footer />

            {/* Server-side Schema for Article */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Article',
                        'headline': 'Resolving Loan Party Disputes: A Comprehensive Legal Roadmap for 2025',
                        'description': 'An expert analysis of the legal mechanisms available to resolve conflicts in multi-party loan agreements, including arbitration, mediation, and judicial proceedings in India.',
                        'image': 'https://credsettle.com/images/loan-parties-dispute.jpg',
                        'author': {
                            '@type': 'Organization',
                            'name': 'CredSettle ADR Specialists'
                        },
                        'publisher': {
                            '@type': 'Organization',
                            'name': 'CredSettle',
                            'logo': {
                                '@type': 'ImageObject',
                                'url': 'https://credsettle.com/logo.png'
                            }
                        },
                        'datePublished': '2025-08-15',
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
                                'name': 'Loan Parties Dispute Resolution',
                                'item': 'https://credsettle.com/loan-parties-dispute-resolution'
                            }
                        ]
                    })
                }}
            />
        </main>
    );
}
