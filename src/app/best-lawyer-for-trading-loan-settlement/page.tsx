import { Metadata } from 'next';
import TradingLoanSettlementClient from './TradingLoanSettlementClient';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Best Lawyer for Trading Loan Settlement in India',
    description: 'Looking for the best lawyer for trading loan or margin funding settlement in India? Expert legal aid for MTF, LAS, and stock market debt resolution. Stop harassment today.',
    keywords: 'best lawyer for trading loan settlement, margin funding settlement India, trading debt resolution, SEBI ODR portal lawyer, MTF loan settlement, LAS settlement India',
    alternates: {
        canonical: 'https://www.credsettle.com/best-lawyer-for-trading-loan-settlement',
    }
};

export default function BestTradingLoanLawyerPage() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Lawyer for Trading Loan Settlement: Expert Legal Navigation in India 2025",
        "description": "Comprehensive guide on navigating trading loan settlements, margin funding disputes, and legal strategies in India.",
        "image": "https://www.credsettle.com/trading-loan-settlement.jpg",
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
        "datePublished": "2025-01-15T08:00:00+05:30",
        "dateModified": "2025-01-15T08:00:00+05:30"
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
                "name": "Best Lawyer for Trading Loan Settlement",
                "item": "https://www.credsettle.com/best-lawyer-for-trading-loan-settlement"
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10">
            <Script id="article-schema-trading" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema-trading" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <TradingLoanSettlementClient />
                        </div>
            <Footer />
        </div>
    );
}
