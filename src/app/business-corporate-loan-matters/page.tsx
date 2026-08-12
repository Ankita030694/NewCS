import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BusinessCorporateLoanMattersClient from './BusinessCorporateLoanMattersClient';

export const metadata: Metadata = {
    title: 'Business & Corporate Loan Matters | Expert IBC & Debt Recovery 2025',
    description: 'Expert legal support for corporate loan disputes in India. Navigate the IBC Amendment Bill 2025, NCLT insolvency processes, and strategic corporate debt restructuring.',
    keywords: 'business corporate loan matters, corporate debt recovery India, IBC 2025 legal help, NCLT insolvency lawyer, corporate loan restructuring legal support',
    alternates: {
        canonical: 'https://www.credsettle.com/business-corporate-loan-matters'
    }
};

export default function BusinessCorporateLoanMattersPage() {
    const articleLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Corporate Loan Resolution: Navigating IBC, NCLT, and Restructuring in 2025',
        'description': 'A detailed legal manual for businesses and directors facing corporate loan defaults, exploring the 2025 IBC amendments, CIRP strategies, and out-of-court resolutions.',
        'image': 'https://www.credsettle.com/images/corporate-loan-matters.jpg',
        'author': {
            '@type': 'Organization',
            'name': 'CredSettle Corporate Legal Advisory'
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'CredSettle',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://www.credsettle.com/logo.png'
            }
        },
        'datePublished': '2025-06-15',
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
                'name': 'Business Corporate Loan Matters',
                'item': 'https://www.credsettle.com/business-corporate-loan-matters'
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
            <BusinessCorporateLoanMattersClient />
            <Footer />

            {/* Server-side Schema */}
            <script
                id="article-schema-corporate"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <script
                id="breadcrumb-schema-corporate"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <script
                id="org-schema-corporate"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
        </main>
    );
}
