import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TimeBarredLoanClient from './TimeBarredLoanClient';

export const metadata: Metadata = {
    title: 'Is a Personal Loan Time-Barred After 3 Years? | Limitation Act',
    description: 'Under the Limitation Act of 1963, bank debts expire after 3 years if no legal action is taken. Learn how to use this loophole to settle time-barred personal loans.',
    alternates: {
        canonical: 'https://www.credsettle.com/personal-loan-time-barred-after-3-years-limitation-act',
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
            "name": "Time-Barred Debts & The Limitation Act",
            "item": "https://www.credsettle.com/personal-loan-time-barred-after-3-years-limitation-act"
        }
    ]
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.credsettle.com/personal-loan-time-barred-after-3-years-limitation-act"
    },
    "headline": "Is a Personal Loan Time-Barred After 3 Years in India?",
    "description": "Under the Limitation Act of 1963, bank debts expire after 3 years if no legal action is taken. Learn how to use this loophole to settle time-barred personal loans.",
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
            "name": "When does a bank loan debt expire in India?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Under the Limitation Act of 1963, an unsecured debt like a personal loan or credit card bill becomes time-barred and legally unenforceable if the lender does not file a recovery suit within 3 years from the date of the last payment or acknowledgement of debt."
            }
        },
        {
            "@type": "Question",
            "name": "What is a time-barred debt?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A time-barred debt is a loan that has passed the 3-year statute of limitations. The bank can no longer use the judicial system (civil courts or DRT) to forcibly recover the money. However, the debt still exists on paper and will continue to negatively impact your CIBIL score."
            }
        },
        {
            "@type": "Question",
            "name": "Can making a small token payment restart the 3-year limitation clock?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, absolutely. This is the biggest trap recovery agents use. If you make even a Rs. 500 token payment, or send an email acknowledging you owe the money, the 3-year limitation clock resets to zero from that exact date, giving the bank the legal right to sue you again."
            }
        },
        {
            "@type": "Question",
            "name": "Can a bank forcefully recover a time-barred debt?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. A bank cannot file a legal suit or attach your properties for a time-barred debt. Recovery agents may still harass you via phone calls, but they have zero legal authority to compel payment through the courts once the limitation period has expired."
            }
        }
    ]
};

export default function TimeBarredLoanPage() {
    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
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
            <TimeBarredLoanClient />
                        </div>
            <Footer />
        </div>
    );
}
