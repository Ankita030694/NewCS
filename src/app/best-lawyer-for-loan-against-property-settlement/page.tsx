import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BestLawyerLAPClient from './BestLawyerLAPClient';

export const metadata: Metadata = {
    title: 'Best Lawyer for Loan Against Property Settlement',
    description: 'Facing a Loan Against Property default? Hire the best lawyer to stop illegal SARFAESI property auctions, secure DRT stay orders, and relentlessly negotiate a highly favorable One-Time Settlement (OTS). Save your real estate today.',
    alternates: {
        canonical: new URL('https://www.credsettle.com/best-lawyer-for-loan-against-property-settlement'),
    },
    openGraph: {
        title: 'Best Lawyer for Loan Against Property Settlement',
        description: 'Facing a Loan Against Property default? Hire the best lawyer to stop illegal SARFAESI property auctions, secure DRT stay orders, and relentlessly negotiate a highly favorable One-Time Settlement (OTS). Save your real estate today.',
        url: 'https://www.credsettle.com/best-lawyer-for-loan-against-property-settlement',
        siteName: 'CredSettle',
        locale: 'en_IN',
        type: 'article',
    }
};

export default function BestLawyerLAPPage() {

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
                'name': 'Best Lawyer for Loan Against Property Settlement',
                'item': 'https://www.credsettle.com/best-lawyer-for-loan-against-property-settlement'
            }
        ]
    };

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Best Lawyer for Loan Against Property Settlement in India',
        'description': 'A comprehensive legal guide on handling Loan Against Property defaults, neutralizing SARFAESI threats, obtaining DRT injunctions, and securing One-Time Settlements (OTS) to protect your assets.',
        'author': {
            '@type': 'Organization',
            'name': 'CredSettle Legal Team',
            'url': 'https://www.credsettle.com/'
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'CredSettle',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://www.credsettle.com/logo.png'
            }
        },
        'datePublished': new Date().toISOString().split('T')[0],
        'dateModified': new Date().toISOString().split('T')[0],
        'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': 'https://www.credsettle.com/best-lawyer-for-loan-against-property-settlement'
        }
    };

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'CredSettle',
        'url': 'https://www.credsettle.com',
        'logo': 'https://www.credsettle.com/logo.png',
        'sameAs': [
            'https://www.facebook.com/credsettle',
            'https://www.twitter.com/credsettle',
            'https://www.linkedin.com/company/credsettle'
        ],
        'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': '+91-9999-999999',
            'contactType': 'customer service',
            'areaServed': 'IN',
            'availableLanguage': 'English'
        }
    };


    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script id="breadcrumb-schema-lap" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="article-schema-lap" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="organization-schema-lap" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

            <BestLawyerLAPClient />
            <Footer />
        </div>
    );
}
