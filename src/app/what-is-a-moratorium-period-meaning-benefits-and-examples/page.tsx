import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatIsAMoratoriumPeriodMeaningBenefitsAndExamplesClient from './WhatIsAMoratoriumPeriodMeaningBenefitsAndExamplesClient';

export const metadata: Metadata = {
    title: "What is a Moratorium Period? Meaning, Benefits, and Examples",
    description: "Understand the moratorium period meaning, how loan moratorium works, and the impact of education loan moratorium interest. Don't fall for the hidden costs.",
    keywords: [
        "moratorium period meaning",
        "how does loan moratorium work",
        "education loan moratorium interest",
        "moratorium vs waiver",
        "RBI loan moratorium guidelines",
        "hidden costs of moratorium",
        "moratorium period for personal loans"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/what-is-a-moratorium-period-meaning-benefits-and-examples',
    },
};

export default function WhatIsAMoratoriumPeriodPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What is a Moratorium Period? Meaning, Benefits, and Examples",
        "description": "Borrowers hear the word moratorium and assume it means their loan is completely paused for free. Learn how it actually works and the hidden interest costs.",
        "image": "https://www.credsettle.com/images/moratorium-period-guide.jpg",
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
                "name": "What is a Moratorium Period?",
                "item": "https://www.credsettle.com/what-is-a-moratorium-period-meaning-benefits-and-examples"
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
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-moratorium"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-moratorium"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="org-schema-moratorium"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            <WhatIsAMoratoriumPeriodMeaningBenefitsAndExamplesClient />
            <Footer />
        </div>
    );
}
