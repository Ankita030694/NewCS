import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RecoveryAgentClient from './RecoveryAgentClient';

export const metadata: Metadata = {
    title: "Can Recovery Agents Visit Your Home or Office in India?",
    description: "If a bank recovery agent visits your home or office, you have legal rights. Learn what agents can and cannot do under RBI guidelines.",
    keywords: [
        "recovery agent visiting my home",
        "recovery agent visiting my workplace",
        "bank recovery agent calling my family",
        "can recovery agents contact relatives",
        "RBI guidelines for recovery agents",
        "stop recovery agent harassment",
        "legal rights against loan recovery"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/recovery-agent-visiting-home-workplace',
    },
};

export default function RecoveryAgentPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Can Recovery Agents Visit Your Home or Office in India?",
        "description": "If a bank recovery agent visits your home or office, you have legal rights. Learn what agents can and cannot do under RBI guidelines.",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": "2025-03-16",
        "dateModified": "2025-03-16"
    };

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.credsettle.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Recovery Agent Visiting Home or Workplace",
                "item": "https://www.credsettle.com/recovery-agent-visiting-home-workplace"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
                <Script
                    id="article-schema-recovery-agent"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Script
                    id="breadcrumb-schema-recovery-agent"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
                />
                <RecoveryAgentClient />
            </div>
            <Footer />
        </div>
    );
}
