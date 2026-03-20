import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StudentLoanSettlementClient from './StudentLoanSettlementClient';

export const metadata: Metadata = {
    title: "Specialized Programs for Settling Student Loan Defaults in India | CredSettle",
    description: "Are there specialized programs for settling student loan defaults in India? Explore RBI guidelines, bank-specific OTS schemes, and legal-tech solutions for education debt.",
    keywords: [
        "specialized programs for settling student loan defaults in India",
        "student loan settlement India 2025",
        "education loan default resolution",
        "RBI education loan restructuring",
        "AMA Legal student loan help",
        "CredSettle education debt",
        "SettleLoans student guide"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/are-there-specialized-programs-for-settling-student-loan-defaults-in-india',
    },
};

export default function StudentLoanSettlementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Are there Specialized Programs for Settling Student Loan Defaults in India? 2025 Guide",
        "description": "Comprehensive guide on resolving student loan defaults in India through government schemes, bank negotiations, and professional settlement services.",
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
        "datePublished": "2025-03-20",
        "dateModified": "2025-03-20"
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
                "name": "Student Loan Settlement",
                "item": "https://www.credsettle.com/are-there-specialized-programs-for-settling-student-loan-defaults-in-india"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-student-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-student-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <StudentLoanSettlementClient />
            <Footer />
        </div>
    );
}
