import type { Metadata } from 'next';
import CheckBounceLawyerClient from './CheckBounceLawyerClient';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Best Check Bounce Lawyer for Loan Case in India | CredSettle',
    description: 'Facing a Section 138 NI Act case? Find the best check bounce lawyer for loan cases in India. Expert legal defense, debt recovery, and 5000+ words of legal guidance.',
    keywords: 'best check bounce lawyer for loan case, Section 138 NI Act lawyer, cheque bounce legal notice, debt recovery lawyer India, check bounce case defense',
};

export default function CheckBounceLawyerPage() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Check Bounce Lawyer for Loan Case - Comprehensive Legal Guide",
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
        "datePublished": "2024-03-20",
        "dateModified": "2024-03-20",
        "description": "A deep dive into Section 138 of the Negotiable Instruments Act, legal procedures for check bounce in loan cases, and how to find the best legal representation."
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
                "name": "Check Bounce Lawyer",
                "item": "https://www.credsettle.com/best-check-bounce-lawyer-for-loan-case"
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
            "telephone": "+91-8800226635",
            "contactType": "customer service"
        }
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Script
                id="organization-schema-bounce"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <CheckBounceLawyerClient />
                        </div>
            <Footer />
        </div>
    );
}
