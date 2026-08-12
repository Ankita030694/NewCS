import os

base_dir = "/Users/piyushmishra/Desktop/NEWCS/NewCS/src/app/what-happens-after-missing-personal-loan-emi"
os.makedirs(base_dir, exist_ok=True)

page_tsx = """import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatHappensMissingEmiClient from './WhatHappensMissingEmiClient';

export const metadata: Metadata = {
    title: "What Happens After Missing a Personal Loan EMI? (2026 Guide)",
    description: "Missed a personal loan EMI? Understand the consequences, from penal interest to recovery calls, and learn how to legally resolve a loan default in India.",
    keywords: [
        "What happens after missing personal loan EMI?",
        "What happens after 1 missed EMI",
        "penal interest on missed EMI",
        "missed EMI consequences",
        "personal loan default India",
        "loan settlement"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/what-happens-after-missing-personal-loan-emi',
    },
};

export default function WhatHappensMissingEmiPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What Happens After Missing a Personal Loan EMI? (2026 Guide)",
        "description": "Missed a personal loan EMI? Understand the consequences, from penal interest to recovery calls, and learn how to legally resolve a loan default in India.",
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
        "datePublished": "2026-08-12",
        "dateModified": "2026-08-12"
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
                "name": "What Happens After Missing a Personal Loan EMI",
                "item": "https://www.credsettle.com/what-happens-after-missing-personal-loan-emi"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema-missing-emi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-missing-emi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <WhatHappensMissingEmiClient />
                        </div>
            <Footer />
        </div>
    );
}
"""

with open(f"{base_dir}/page.tsx", "w") as f:
    f.write(page_tsx)
