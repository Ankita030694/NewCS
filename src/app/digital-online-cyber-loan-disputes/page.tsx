import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DigitalOnlineCyberLoanDisputesClient from './DigitalOnlineCyberLoanDisputesClient';

export const metadata: Metadata = {
    title: 'Digital Online & Cyber Loan Disputes | Legal Defense 2025',
    description: 'Victim of digital loan fraud or illegal app harassment? Learn your rights under RBI 2025 guidelines, file cybercrime FIRs, and protect your privacy from predatory lenders.',
    keywords: 'digital loan disputes India, cyber loan fraud legal help, RBI digital lending guidelines 2025, stop illegal loan app harassment, cybercrime FIR loan app',
    alternates: {
        canonical: 'https://credsettle.com/digital-online-cyber-loan-disputes'
    }
};

export default function DigitalOnlineCyberLoanDisputesPage() {
    return (
        <main>
            <Navbar />
            <DigitalOnlineCyberLoanDisputesClient />
            <Footer />

            {/* Server-side Schema for Article */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Article',
                        'headline': 'Defending Against Digital & Cyber Loan Frauds: A 2025 Legal Guide',
                        'description': 'Comprehensive manual for borrowers facing disputes with digital lending apps, exploring RBI regulatory protection, cybercrime reporting, and privacy laws.',
                        'image': 'https://credsettle.com/images/cyber-loan-dispute.jpg',
                        'author': {
                            '@type': 'Organization',
                            'name': 'CredSettle Cyber Legal Team'
                        },
                        'publisher': {
                            '@type': 'Organization',
                            'name': 'CredSettle',
                            'logo': {
                                '@type': 'ImageObject',
                                'url': 'https://credsettle.com/logo.png'
                            }
                        },
                        'datePublished': '2025-05-10',
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
                                'name': 'Digital Online Cyber Loan Disputes',
                                'item': 'https://credsettle.com/digital-online-cyber-loan-disputes'
                            }
                        ]
                    })
                }}
            />
        </main>
    );
}
