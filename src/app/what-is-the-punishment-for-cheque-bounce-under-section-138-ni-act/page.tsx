import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PunishmentChequeBounceSection138Client from './PunishmentChequeBounceSection138Client';

export const metadata: Metadata = {
    title: "What is the Punishment for Cheque Bounce Under Section 138 NI Act? (2026 Guide)",
    description: "Understand the legal nuances of Section 138 NI Act. Learn why cheque bounce is a bailable offense, the 15-day statutory notice timeline, and your protection rights.",
    keywords: [
        "section 138 cheque bounce punishment",
        "jail for cheque bounce India",
        "NI act section 138 bailable or non bailable",
        "cheque bounce notice period",
        "legal defense against recovery agents",
        "settlement cheque bounce consequences"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/what-is-the-punishment-for-cheque-bounce-under-section-138-ni-act',
    },
};

export default function PunishmentChequeBounceSection138Page() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What is the Punishment for Cheque Bounce Under Section 138 NI Act?",
        "description": "When a settlement cheque bounces, borrowers are often threatened with immediate arrest. Discover the truth about Section 138, statutory notice periods, and how to defend yourself legally.",
        "image": "https://www.credsettle.com/images/section-138-legal-defense.jpg",
        "author": {
            "@type": "Organization",
            "name": "CredSettle Consumer Protection Wing"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": "2026-07-30",
        "dateModified": "2026-07-30"
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
                "name": "Punishment for Cheque Bounce Under Section 138",
                "item": "https://www.credsettle.com/what-is-the-punishment-for-cheque-bounce-under-section-138-ni-act"
            }
        ]
    };

    const organizationLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "CredSettle",
        "url": "https://www.credsettle.com",
        "logo": "https://www.credsettle.com/logo.png",
        "sameAs": [
            "https://www.facebook.com/credsettle",
            "https://www.twitter.com/credsettle",
            "https://www.linkedin.com/company/credsettle"
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-sec138"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-sec138"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-sec138"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <PunishmentChequeBounceSection138Client />
                        </div>
            <Footer />
        </div>
    );
}
