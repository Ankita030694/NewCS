import type { Metadata } from 'next';
import LoanContractLawyerClient from './LoanContractLawyerClient';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Best Lawyer for Loan Contract in India | Expert Legal Review & Drafting',
    description: 'Looking for the best lawyer for loan contract review or drafting in India? Get expert legal advice on loan agreements, Section 138, and borrower rights. 5000+ words of legal guidance.',
    keywords: 'best lawyer for loan contract, loan agreement lawyer India, loan document review, legal advice for loan contracts, Section 138 NI Act lawyer, bank loan contract expert',
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-loan-contract',
    },
};

export default function LoanContractLawyerPage() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyer for Loan Contract: A Comprehensive Guide to Legal Security",
        "image": "https://www.credsettle.com/credsettle-logo-black.png",
        "author": {
            "@type": "Organization",
            "name": "CredSettle"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/credsettle-logo-black.png"
            }
        },
        "datePublished": "2024-03-25",
        "dateModified": "2024-03-25",
        "description": "Navigate the complexities of loan contracts in India with expert legal insights. Learn about essential clauses, borrower rights, and how to find the best legal representation."
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.credsettle.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Loan Contract Lawyer",
                "item": "https://www.credsettle.com/best-lawyer-for-loan-contract"
            }
        ]
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "CredSettle",
        "url": "https://www.credsettle.com",
        "logo": "https://www.credsettle.com/credsettle-logo-black.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-XXXXXXXXXX",
            "contactType": "customer service"
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Script
                id="breadcrumb-schema-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Script
                id="organization-schema-loan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <LoanContractLawyerClient />
            <Footer />
        </div>
    );
}
