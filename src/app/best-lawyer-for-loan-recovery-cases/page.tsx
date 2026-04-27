import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanRecoveryLawyerClient from './LoanRecoveryLawyerClient';

export const metadata: Metadata = {
    title: 'Best Lawyer for Loan Recovery Cases in India',
    description: 'Looking for the best lawyer for loan recovery cases in India? Our expert advocates specialize in SARFAESI, DRT, IBC, and civil recovery suits. Get time-bound, legal debt recovery today.',
    keywords: 'best lawyer for loan recovery cases, loan recovery lawyer India, debt recovery advocate, SARFAESI Act lawyer, DRT lawyer India, IBC lawyer for recovery, civil recovery suit India, money recovery services, banking lawyer India',
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-loan-recovery-cases',
    },
};

export default function LoanRecoveryLawyerPage() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyer for Loan Recovery Cases in India: A Comprehensive Guide",
        "description": "Expert insights into finding the best lawyer for loan recovery in India. Detailed overview of SARFAESI Act, IBC, DRT procedures, and legal strategies for efficient debt retrieval.",
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
        "datePublished": "2024-05-25",
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
                "name": "Loan Recovery Lawyer",
                "item": "https://www.credsettle.com/best-lawyer-for-loan-recovery-cases"
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
                id="article-schema-recovery"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Script
                id="breadcrumb-schema-recovery"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Script
                id="org-schema-recovery"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <Navbar />
            <LoanRecoveryLawyerClient />
            <Footer />
        </>
    );
}
