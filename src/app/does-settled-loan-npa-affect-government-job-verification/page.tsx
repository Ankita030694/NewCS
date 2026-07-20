import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GovernmentJobVerificationClient from './GovernmentJobVerificationClient';

export const metadata: Metadata = {
    title: "Does Loan Default Affect Government Job Verification?",
    description: "Learn if a settled loan or NPA impacts police verification for UPSC, SSC, or PSU jobs. We explain civil defaults versus criminal records for candidates.",
    keywords: [
        "does loan default affect government job",
        "cibil score for government job",
        "police verification loan defaulter",
        "does settled loan affect background check",
        "NPA government job verification",
        "civil default vs criminal conviction india"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/does-settled-loan-npa-affect-government-job-verification',
    },
};

export default function GovernmentJobVerificationPage() {
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Does Loan Default Affect Government Job Verification?",
        "description": "Learn if a settled loan or NPA impacts police verification for UPSC, SSC, or PSU jobs. We explain civil defaults versus criminal records for candidates.",
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
        "datePublished": "2025-06-15",
        "dateModified": "2025-06-15"
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
                "name": "Govt Job Police Verification for Defaulters",
                "item": "https://www.credsettle.com/does-settled-loan-npa-affect-government-job-verification"
            }
        ]
    };

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Will a settled education loan fail my UPSC police verification?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. A settled loan is a civil matter. Police verification strictly checks for criminal records, pending FIRs, or court convictions. Financial settlements do not appear in criminal background checks."
                }
            },
            {
                "@type": "Question",
                "name": "Does SBI or other PSUs check CIBIL scores before hiring?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, unlike UPSC or SSC, banking and financial institutions like SBI often check CIBIL scores. A poor score or NPA status might require you to provide a No Dues Certificate or clearance before joining."
                }
            },
            {
                "@type": "Question",
                "name": "Is a loan default considered a criminal offense in India?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Defaulting on a personal or education loan is purely a civil breach of contract. It only becomes criminal if there is proven fraud, forgery, or a Section 138 cheque bounce case filed against you."
                }
            },
            {
                "@type": "Question",
                "name": "Should I mention my NPA status in the police verification form?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Police verification forms ask about criminal cases, arrests, or pending FIRs. They do not ask about your bank loans. Only disclose information that is explicitly requested regarding criminal history."
                }
            },
            {
                "@type": "Question",
                "name": "Can a recovery agent file an FIR that affects my government job?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Recovery agents cannot file FIRs for civil loan defaults. They may threaten to do so, but police do not register FIRs for simple non payment. Only courts can issue warrants for criminal offenses like cheque bounce."
                }
            },
            {
                "@type": "Question",
                "name": "What happens if I settle my loan while applying for SSC CGL?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Settling your loan during the application process is completely safe. It updates your CIBIL to 'Settled' and removes any civil liabilities. It has absolutely zero negative impact on SSC CGL police verification."
                }
            },
            {
                "@type": "Question",
                "name": "Do IT companies conduct different background checks than the government?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, private IT companies conduct comprehensive background checks including address, past employment, and sometimes credit history. Government jobs rely on local police stations to verify criminal antecedents."
                }
            }
        ]
    };

    const reviewLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Government Job Loan Default Legal Advisory",
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
                id="article-schema-govt-job"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
            />
            <Script
                id="breadcrumb-schema-govt-job"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Script
                id="faq-schema-govt-job"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
            />
            <Script
                id="review-schema-govt-job"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewLd) }}
            />
            <GovernmentJobVerificationClient />
            <Footer />
        </div>
    );
}
