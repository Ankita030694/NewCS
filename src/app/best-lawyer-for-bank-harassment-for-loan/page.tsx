import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BankHarassmentLawyerClient from './BankHarassmentLawyerClient';

export const metadata: Metadata = {
    title: 'Best Lawyer for Bank Harassment for Loan in India',
    description: 'Facing bank harassment for loan default? Get expert legal help from the best lawyers for bank harassment in India. Stop recovery agent threats, file RBI complaints, and protect your rights today.',
    keywords: 'best lawyer for bank harassment for loan, bank harassment lawyer India, stop recovery agent harassment, RBI guidelines for recovery agents, legal help for loan default harassment, stop bank harassment India',
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-bank-harassment-for-loan',
    },
};

export default function BankHarassmentLawyerPage() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyer for Bank Harassment for Loan in India: Stop Illegal Recovery",
        "description": "Comprehensive guide on dealing with bank harassment for loan defaults in India, legal remedies, and finding the best lawyers to protect borrower rights.",
        "author": {
            "@type": "Organization",
            "name": "CredSettle"
        },
        "publisher": {
            "@type": "Organization",
            "name": "CredSettle",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.credsettle.com/logo.png"
            }
        },
        "datePublished": "2024-05-20",
        "dateModified": "2025-02-28"
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
                "name": "Bank Harassment Lawyer",
                "item": "https://www.credsettle.com/best-lawyer-for-bank-harassment-for-loan"
            }
        ]
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "CredSettle",
        "url": "https://www.credsettle.com",
        "logo": "https://www.credsettle.com/logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-XXXX-XXXXXX",
            "contactType": "customer service"
        }
    };

    return (
        <>
            <Script
                id="article-schema-harassment"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Script
                id="breadcrumb-schema-harassment"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Script
                id="org-schema-harassment"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <Navbar />
            <BankHarassmentLawyerClient />
            <Footer />
        </>
    );
}
