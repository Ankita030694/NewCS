import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PostLoanSettlementLegalHelpClient from './PostLoanSettlementLegalHelpClient';

export const metadata: Metadata = {
    title: 'Post-Loan Settlement Legal Help | Expert CIBIL & NOC Support 2025',
    description: 'Finished your loan settlement? Ensure your credit score is updated, obtain your NOC, and protect yourself from future harassment with expert legal help in India.',
    keywords: 'post loan settlement legal help, CIBIL update after settlement India, loan settlement NOC legal notice, RBI settlement guidelines 2025, credit score rectification post-debt',
    alternates: {
        canonical: 'https://credsettle.com/post-loan-settlement-legal-help'
    }
};

export default function PostLoanSettlementLegalHelpPage() {
    const articleLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Post-Settlement Manual: Navigating CIBIL, NOC, and Legal Safety in 2025',
        'description': 'A detailed legal guide on what happens after a loan settlement, including credit reporting mandates, securing the No Dues Certificate, and stopping residual harassment.',
        'image': 'https://credsettle.com/images/post-settlement-help.jpg',
        'author': {
            '@type': 'Organization',
            'name': 'CredSettle Post-Settlement Team'
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'CredSettle',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://credsettle.com/logo.png'
            }
        },
        'datePublished': '2025-03-05',
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
                'name': 'Post-Loan Settlement Legal Help',
                'item': 'https://credsettle.com/post-loan-settlement-legal-help'
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
            <Navbar />
            <PostLoanSettlementLegalHelpClient />
            <Footer />

            {/* Server-side Schema */}
            <script
                id="article-schema-post-settle"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <script
                id="breadcrumb-schema-post-settle"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <script
                id="org-schema-post-settle"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
        </main>
    );
}
