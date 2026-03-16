import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SettlementTimelineClient from './SettlementTimelineClient';

export const metadata: Metadata = {
    title: 'How Long Does Debt Settlement Take? | 2025 Timeline Analysis',
    description: 'Discover the typical timeline for debt settlement in India. Learn about the 2-4 month procedural window, bank vs NBFC speed, and factors affecting resolution speed.',
    keywords: 'how long does debt settlement typically take, debt settlement timeline india, loan settlement duration, bank settlement speed vs nbfc, debt resolution stages',
    alternates: {
        canonical: 'https://www.credsettle.com/how-long-does-a-debt-settlement-typically-take',
    },
};

export default function SettlementTimelinePage() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'How Long Does a Debt Settlement Typically Take? (2025 Roadmap)',
        'description': 'A detailed analysis of the stages, institutional delays, and success factors that define the duration of a loan settlement in the Indian banking system.',
        'image': 'https://www.credsettle.com/images/settlement-timeline.jpg',
        'author': {
            '@type': 'Organization',
            'name': 'CredSettle',
            'url': 'https://www.credsettle.com'
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'CredSettle',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://www.credsettle.com/logo.png'
            }
        },
        'datePublished': '2025-01-22',
        'dateModified': '2025-03-16'
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://www.credsettle.com'
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Debt Settlement Timeline',
                'item': 'https://www.credsettle.com/how-long-does-a-debt-settlement-typically-take'
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <SettlementTimelineClient />
            <Footer />
        </div>
    );
}
