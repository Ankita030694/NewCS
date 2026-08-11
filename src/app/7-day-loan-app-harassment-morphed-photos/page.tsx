import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SevenDayLoanClient from './SevenDayLoanClient';

export const metadata: Metadata = {
    title: '7 Day Loan App Harassment: Fake Morphed Photos & Cyber Complaint',
    description: 'Stop fake loan app blackmail. A critical guide on handling morphed photos, blocking 7-day loan app harassment, and filing an immediate cybercrime complaint (1930).',
    alternates: {
        canonical: 'https://www.credsettle.com/7-day-loan-app-harassment-morphed-photos',
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
            "name": "7 Day Loan App Harassment",
            "item": "https://www.credsettle.com/7-day-loan-app-harassment-morphed-photos"
        }
    ]
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.credsettle.com/7-day-loan-app-harassment-morphed-photos"
    },
    "headline": "7 Day Loan App Harassment: Stop Fake Morphed Photos & Blackmail",
    "description": "Stop fake loan app blackmail. A critical guide on handling morphed photos, blocking 7-day loan app harassment, and filing an immediate cybercrime complaint (1930).",
    "author": {
        "@type": "Person",
        "name": "Anuj Bhiya"
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
            "name": "What should I do if a 7-day loan app is threatening me with morphed photos?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Immediately stop paying any extortion money. Inform your family and close contacts that your phone has been hacked, delete the app, format your phone, and register a complaint on the National Cyber Crime Reporting Portal (1930)."
            }
        },
        {
            "@type": "Question",
            "name": "Are these 7-day loan apps legal in India?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, the vast majority of 7-day loan apps are completely illegal, unauthorized, and operate without an RBI license. They function purely as cyber-extortion syndicates."
            }
        },
        {
            "@type": "Question",
            "name": "Will paying the extortion amount stop the harassment?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Never. Paying the extortion amount identifies you as a compliant victim, leading to increased demands and continuous blackmail. The only way out is to refuse payment completely and take legal action."
            }
        },
        {
            "@type": "Question",
            "name": "How do I file a cybercrime complaint against a fake loan app?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can file a complaint immediately by calling the national cybercrime helpline 1930 or by registering a case online at cybercrime.gov.in with screenshots of the threats and transaction details."
            }
        }
    ]
};

export default function SevenDayLoanPage() {
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
            <SevenDayLoanClient />
                        </div>
            <Footer />
        </div>
    );
}
