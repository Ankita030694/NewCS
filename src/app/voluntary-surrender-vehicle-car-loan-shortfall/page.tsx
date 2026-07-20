import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VoluntarySurrenderClient from './VoluntarySurrenderClient';

export const metadata: Metadata = {
    title: 'Voluntary Surrender of Vehicle for Car Loan Default | The Shortfall Trap',
    description: 'Thinking of giving your financed car back to the bank to clear your debt? Learn about the dangerous "shortfall" trap, auction losses, and how to protect yourself legally.',
    alternates: {
        canonical: 'https://www.credsettle.com/voluntary-surrender-vehicle-car-loan-shortfall',
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
            "name": "Voluntary Surrender Shortfall",
            "item": "https://www.credsettle.com/voluntary-surrender-vehicle-car-loan-shortfall"
        }
    ]
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.credsettle.com/voluntary-surrender-vehicle-car-loan-shortfall"
    },
    "headline": "Voluntary Surrender of Vehicle for Car Loan Default: What is the Shortfall?",
    "description": "Thinking of giving your financed car back to the bank to clear your debt? Learn about the dangerous 'shortfall' trap, auction losses, and how to protect yourself legally.",
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
            "name": "What happens if I return my financed car to the bank in India?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Returning the car (voluntary surrender) does NOT automatically clear your loan. The bank will auction the vehicle, usually at a massive loss. They will then apply the auction proceeds to your loan balance and send you a legal notice demanding payment for the remaining unpaid amount, known as the 'shortfall'."
            }
        },
        {
            "@type": "Question",
            "name": "What is a car loan shortfall?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A shortfall is the difference between your total outstanding loan balance (including penalties and repo charges) and the amount the bank recovers by auctioning your surrendered car. Because banks auction cars at distress prices, the shortfall is often hundreds of thousands of rupees."
            }
        },
        {
            "@type": "Question",
            "name": "Can the bank sue me for the shortfall after I voluntarily surrender the car?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, absolutely. The bank retains the legal right to file a civil recovery suit or approach the Debt Recovery Tribunal (DRT) to attach your other personal assets (like your salary or house) to recover the shortfall amount. Voluntarily giving up the keys does not revoke this right."
            }
        },
        {
            "@type": "Question",
            "name": "How can I avoid the shortfall trap when surrendering my car?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Never surrender the keys without a legally drafted, pre-negotiated 'Full and Final Settlement' agreement in writing. This legal document must explicitly state that the bank accepts the vehicle as complete payment for the debt and waives their right to pursue you for any future shortfall."
            }
        }
    ]
};

export default function VoluntarySurrenderPage() {
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
            <VoluntarySurrenderClient />
            <Footer />
        </div>
    );
}
