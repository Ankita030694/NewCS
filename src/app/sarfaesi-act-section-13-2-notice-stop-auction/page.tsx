import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SarfaesiAuctionClient from './SarfaesiAuctionClient';

export const metadata: Metadata = {
    title: "SARFAESI Act Section 13(2) Notice: Stop Bank Auction",
    description: "Received a SARFAESI Act Section 13(2) notice? Learn how to stop bank property auctions, file 13(3A) objections, and secure DRT stay orders for your home loan.",
    keywords: [
        "sarfaesi act notice section 13(2)",
        "stop bank auction property India",
        "lap loan default legal action",
        "home loan npa recovery process",
        "sarfaesi act stay order",
        "drt securitization application section 17"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/sarfaesi-act-section-13-2-notice-stop-auction',
    },
};

export default function SarfaesiAuctionPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "SARFAESI Act Section 13(2) Notice: How to Stop Bank from Auctioning Property",
        "description": "Received a SARFAESI Act Section 13(2) notice? Learn how to stop bank property auctions, file 13(3A) objections, and secure DRT stay orders for your home loan.",
        "image": "https://www.credsettle.com/credsettle-logo.svg",
        "author": {
            "@type": "Person",
            "name": "CredSettle Legal Expert"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo.svg"
            }
        },
        "datePublished": "2025-06-20",
        "dateModified": "2025-06-20"
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
                "name": "SARFAESI Act Property Auction Defence",
                "item": "https://www.credsettle.com/sarfaesi-act-section-13-2-notice-stop-auction"
            }
        ]
    };

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is a Section 13(2) notice under the SARFAESI Act?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is a formal demand notice issued by a bank after your home loan or LAP becomes an NPA. It gives you a strict 60 day timeline to clear the entire outstanding debt before they initiate property possession."
                }
            },
            {
                "@type": "Question",
                "name": "Can the bank immediately sell my house after 60 days?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. After the 60 day period expires, the bank must first issue a possession notice under Section 13(4). They must also publish this notice in two newspapers before they can physically auction the property."
                }
            },
            {
                "@type": "Question",
                "name": "How can I stop the bank from auctioning my property?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can file a detailed objection under Section 13(3A) within the 60 days. If the bank proceeds to Section 13(4) possession, you can immediately file a Securitization Application in the DRT under Section 17 to get a stay order."
                }
            },
            {
                "@type": "Question",
                "name": "What happens if the bank does not reply to my 13(3A) objection?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "By law, the bank must reply to your 13(3A) objection within 15 days. If they fail to reply or provide vague reasons, their subsequent possession actions become legally flawed and are easily challenged in the DRT."
                }
            },
            {
                "@type": "Question",
                "name": "Can I approach a civil court to get a stay order on the auction?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Under Section 34 of the SARFAESI Act, civil courts are strictly barred from interfering in SARFAESI matters. You must approach the Debt Recovery Tribunal (DRT) to seek legal relief."
                }
            },
            {
                "@type": "Question",
                "name": "Is it possible to negotiate a settlement after receiving a 13(2) notice?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Banks often prefer negotiated settlements over lengthy DRT litigation. You can offer a One Time Settlement (OTS) or a restructuring plan even after the notice has been issued."
                }
            },
            {
                "@type": "Question",
                "name": "Do I have to deposit money in the DRT to file an appeal?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, you do not need to deposit a percentage of the debt just to file a Section 17 application in the DRT. However, if you appeal a DRT order in the DRAT, a mandatory pre-deposit of 25 to 50 percent is required."
                }
            }
        ]
    };

    const reviewLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "SARFAESI Act Property Defence Advisory",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "3"
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-sarfaesi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-sarfaesi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="faq-schema-sarfaesi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
            />
            <Script
                id="review-schema-sarfaesi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewLd) }}
            />
            <SarfaesiAuctionClient />
            <Footer />
        </div>
    );
}
