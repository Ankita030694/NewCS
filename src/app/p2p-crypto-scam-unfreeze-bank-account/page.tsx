import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import P2PCryptoScamClient from './P2PCryptoScamClient';

export const metadata: Metadata = {
    title: 'Unfreeze Bank Account After P2P Crypto Scam | CredSettle',
    description: "Your bank account frozen due to a P2P crypto scam? Learn how to unfreeze it, navigate Section 91 CrPC/BNSS notices, and clear your name with our 2025 expert guide.",
    keywords: [
        "p2p crypto scam unfreeze bank account",
        "how to unfreeze bank account for crypto p2p in india",
        "section 91 crpc bank account freeze",
        "bnss 2023 bank account freeze",
        "p2p usdt scam india bank freeze",
        "cyber cell node officer contact for bank freeze",
        "unfreeze bank account after p2p scam india",
        "how to get noc from cyber cell for frozen account",
        "lien amount removal bank account india",
        "p2p crypto trading legal issues india 2025"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/p2p-crypto-scam-unfreeze-bank-account',
    },
};

export default function P2PCryptoScamPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Recovering from P2P Crypto Scams: A Step-by-Step Guide to Unfreezing Your Bank Account in India",
        "description": "An exhaustive manual for P2P crypto traders whose bank accounts have been frozen by cybercrime authorities, detailing legal procedures under CrPC and BNSS.",
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
        "datePublished": "2025-03-27",
        "dateModified": "2025-03-27"
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
                "name": "P2P Crypto Scam Unfreeze Bank Account",
                "item": "https://www.credsettle.com/p2p-crypto-scam-unfreeze-bank-account"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-p2p-scam"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-p2p-scam"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <P2PCryptoScamClient />
            <Footer />
        </div>
    );
}
