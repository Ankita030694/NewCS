import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GuarantorLiabilityClient from './GuarantorLiabilityClient';

export const metadata: Metadata = {
    title: 'Legal Notice to Loan Guarantor: Are You Liable if Borrower Defaults?',
    description: 'Signed as a loan guarantor and received a legal notice? Understand your co-extensive liability, how banks attach assets, and how to take legal action against the primary borrower.',
    alternates: {
        canonical: 'https://www.credsettle.com/legal-notice-to-loan-guarantor-liability',
    }
};

const breadcrumbSchema = {
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
            "name": "Loan Guarantor Liability",
            "item": "https://www.credsettle.com/legal-notice-to-loan-guarantor-liability"
        }
    ]
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.credsettle.com/legal-notice-to-loan-guarantor-liability"
    },
    "headline": "Legal Notice to Loan Guarantor: Are You Liable if the Primary Borrower Defaults?",
    "description": "Signed as a loan guarantor and received a legal notice? Understand your co-extensive liability, how banks attach assets, and how to take legal action against the primary borrower.",
    "author": {
        "@type": "Person",
        "name": "CredSettle Legal Team"
    },
    "publisher": {
        "@type": "Organization",
        "name": "CredSettle",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.credsettle.com/credsettle-logo-black.svg"
        }
    }
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What happens if the primary borrower defaults on a loan?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "If the primary borrower defaults, the bank will immediately invoke the guarantee clause. Under Indian law, the guarantor's liability is 'co-extensive', meaning the bank can legally demand the entire outstanding amount directly from the guarantor without first exhausting all legal remedies against the primary borrower."
            }
        },
        {
            "@type": "Question",
            "name": "Can a bank attach the assets of a loan guarantor?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. If the debt remains unpaid after legal notices are served, the bank can approach the Debt Recovery Tribunal (DRT) or civil courts to obtain an order to attach and auction the personal assets and properties of the guarantor to recover the dues."
            }
        },
        {
            "@type": "Question",
            "name": "Does being a loan guarantor affect my CIBIL score?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. When the primary borrower misses an EMI or defaults, it negatively impacts both the borrower's and the guarantor's CIBIL score. A severe default by the borrower can ruin the guarantor's credit history, making it impossible for them to secure their own loans."
            }
        },
        {
            "@type": "Question",
            "name": "Can a guarantor take legal action against the primary borrower?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, through the 'Right of Subrogation'. If a guarantor is forced to pay the bank to settle the debt, they legally step into the shoes of the creditor. The guarantor can then file a civil recovery suit against the absconding primary borrower to recover the money they paid."
            }
        }
    ]
};

export default function GuarantorLiabilityPage() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <GuarantorLiabilityClient />
            <Footer />
        </div>
    );
}
