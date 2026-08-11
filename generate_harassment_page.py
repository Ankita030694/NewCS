import os

app_dir = "/Users/piyushmishra/Desktop/NEWCS/NewCS/src/app/personal-loan-recovery-harassment"
os.makedirs(app_dir, exist_ok=True)

page_tsx_content = """import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PersonalLoanRecoveryHarassmentClient from './PersonalLoanRecoveryHarassmentClient';

export const metadata: Metadata = {
    title: "Stop Personal Loan Recovery Harassment | RBI Rules & Complaints",
    description: "Learn how to stop personal loan recovery harassment immediately. Know RBI rules for loan recovery agents, file a complaint against bank recovery agents, and protect yourself.",
    keywords: [
        "stop personal loan recovery harassment",
        "RBI rules for loan recovery agents",
        "complaint against bank recovery agents",
        "how to stop loan recovery agent harassment",
        "banking ombudsman complaint recovery agent",
        "cease and desist letter to bank",
        "illegal recovery agent tactics"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/personal-loan-recovery-harassment',
    },
};

export default function PersonalLoanRecoveryHarassmentPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Stop Personal Loan Recovery Harassment: RBI Rules and Action Plan",
        "description": "An immediate action plan to stop illegal harassment by third party recovery agents, including drafting a cease and desist letter and filing a Banking Ombudsman complaint.",
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
                "name": "Stop Personal Loan Recovery Harassment",
                "item": "https://www.credsettle.com/personal-loan-recovery-harassment"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-harassment"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-harassment"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <PersonalLoanRecoveryHarassmentClient />
            <Footer />
        </div>
    );
}
"""

with open(os.path.join(app_dir, "page.tsx"), "w") as f:
    f.write(page_tsx_content)

print("page.tsx created.")
