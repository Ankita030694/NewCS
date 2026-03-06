import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanDefaultEmiForeclosureAssistanceClient from './LoanDefaultEmiForeclosureAssistanceClient';

export const metadata: Metadata = {
    title: 'Loan Default & EMI Foreclosure Assistance | Legal Defense 2025',
    description: 'Stop home loan foreclosure and save your property. Learn about SARFAESI Act rights, Sec 13(2) and 13(4) notices, and expert DRT defense strategies to prevent auctions in India.',
    keywords: 'loan default EMI assistance, foreclosure legal help India, SARFAESI Act notice defense, save home from loan auction, DRT lawyer for foreclosure',
    alternates: {
        canonical: 'https://credsettle.com/loan-default-emi-foreclosure-assistance'
    }
};

export default function LoanDefaultEmiForeclosureAssistancePage() {
    return (
        <main>
            <Navbar />
            <LoanDefaultEmiForeclosureAssistanceClient />
            <Footer />

            {/* Server-side Schema for Article */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Article',
                        'headline': 'Foreclosure Defense Manual: Managing Home Loan Defaults and SARFAESI Actions in 2025',
                        'description': 'A high-level legal guide for homeowners facing EMI defaults and foreclosure auctions, detailing procedural rights, DRT appeals, and debt restructuring solutions.',
                        'image': 'https://credsettle.com/images/foreclosure-assistance.jpg',
                        'author': {
                            '@type': 'Organization',
                            'name': 'CredSettle Foreclosure Defense Team'
                        },
                        'publisher': {
                            '@type': 'Organization',
                            'name': 'CredSettle',
                            'logo': {
                                '@type': 'ImageObject',
                                'url': 'https://credsettle.com/logo.png'
                            }
                        },
                        'datePublished': '2025-07-20',
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
                                'name': 'Loan Default EMI Foreclosure Assistance',
                                'item': 'https://credsettle.com/loan-default-emi-foreclosure-assistance'
                            }
                        ]
                    })
                }}
            />
        </main>
    );
}
