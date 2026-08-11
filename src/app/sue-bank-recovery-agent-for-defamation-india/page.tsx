import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DefamationSuitClient from './DefamationSuitClient';

export const metadata: Metadata = {
    title: 'Can You Sue a Bank or Recovery Agent for Defamation in India?',
    description: 'Learn how to aggressively counter-attack recovery agent harassment. A complete legal guide to filing defamation suits and claiming compensation for mental agony.',
    alternates: {
        canonical: 'https://www.credsettle.com/sue-bank-recovery-agent-for-defamation-india',
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
            "name": "Sue Bank for Harassment & Defamation",
            "item": "https://www.credsettle.com/sue-bank-recovery-agent-for-defamation-india"
        }
    ]
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.credsettle.com/sue-bank-recovery-agent-for-defamation-india"
    },
    "headline": "Can You Sue a Bank or Recovery Agent for Defamation in India?",
    "description": "Learn how to aggressively counter-attack recovery agent harassment. A complete legal guide to filing defamation suits and claiming compensation for mental agony.",
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
            "name": "Can I claim compensation for mental harassment by a bank in India?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Indian consumer courts have consistently ruled that coercive and abusive recovery tactics constitute a deficiency in service. Borrowers can file a consumer court complaint against the bank to claim substantial financial compensation for mental agony."
            }
        },
        {
            "@type": "Question",
            "name": "What evidence do I need to file a defamation suit against recovery agents?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "To win a civil defamation suit, you must provide documented proof of public humiliation. This includes call recordings, abusive WhatsApp messages, emails sent to your employer, and testimonies from neighbors or colleagues who witnessed the harassment."
            }
        },
        {
            "@type": "Question",
            "name": "Is the bank liable for the actions of third-party recovery agencies?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. The Reserve Bank of India (RBI) guidelines explicitly state that banks and NBFCs are held directly responsible for the actions of their authorized third-party recovery agents. You can sue the bank directly for their agent's misconduct."
            }
        },
        {
            "@type": "Question",
            "name": "Should I file a police complaint or a civil suit for harassment?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "You should ideally do both. Filing a police complaint (FIR) under sections like 503 (Criminal Intimidation) creates immediate police pressure, while filing a civil suit or consumer complaint allows you to claim monetary damages for the harm caused to your reputation."
            }
        }
    ]
};

export default function DefamationSuitPage() {
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
            <DefamationSuitClient />
                        </div>
            <Footer />
        </div>
    );
}
