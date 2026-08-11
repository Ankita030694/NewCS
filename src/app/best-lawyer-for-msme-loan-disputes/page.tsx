import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MSMELoanDisputesClient from './MSMELoanDisputesClient';

export const metadata: Metadata = {
    title: 'Best Lawyer for MSME Loan Disputes in India | Expert Legal Help',
    description: 'Facing MSME loan recovery actions? Get expert legal defense for SARFAESI notices, DRT litigation, and MSMED Act disputes. Settle business debts with dignity.',
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-msme-loan-disputes',
    },
    keywords: [
        'MSME loan dispute lawyer India',
        'MSME Samadhan filing lawyer',
        'SARFAESI Act lawyer for MSME',
        'DRT litigation specialist for small business',
        'MSMED Act 2006 legal expert',
        'best lawyer for ssi loan settlement',
        'defense against bank recovery MSME'
    ],
};

export default function page() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Best Lawyer for MSME Loan Disputes: Protection & Recovery Strategies',
        'description': 'Comprehensive guide for MSMEs to navigate loan disputes, MSMED Act 2006, SARFAESI actions, and debt recovery tribunals in India.',
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
        'datePublished': '2025-03-01',
        'dateModified': '2025-03-01',
        'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': 'https://www.credsettle.com/best-lawyer-for-msme-loan-disputes'
        }
    };

    const breadcrumbSchema = {
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
                'name': 'Best Lawyer for MSME Loan Disputes',
                'item': 'https://www.credsettle.com/best-lawyer-for-msme-loan-disputes'
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="msme-article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="msme-breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <MSMELoanDisputesClient />
                        </div>
            <Footer />
        </div>
    );
}
