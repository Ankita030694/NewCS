import { Metadata } from 'next';
import Script from 'next/script';
import AggressiveRecoverySupportClient from './AggressiveRecoverySupportClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Avoid Recovery Agent Harassment | CredSettle',
  description: 'Facing aggressive loan recovery? Learn how CredSettle and AMA Legal Solutions help you stop recovery agent harassment, understand RBI 2026 rules, and settle debts with dignity.',
  keywords: 'cred-settle-support-for-avoiding-aggressive-recovery-practices, stop loan recovery harassment, rbi guidelines for recovery agents 2026, debt collection laws india, legal help for loan harassment, loan settlement support, amalegalsolutions',
  alternates: {
    canonical: 'https://www.credsettle.com/cred-settle-support-for-avoiding-aggressive-recovery-practices',
  },
};

export default function AggressiveRecoverySupportPage() {
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
        "name": "Aggressive Recovery Support",
        "item": "https://www.credsettle.com/cred-settle-support-for-avoiding-aggressive-recovery-practices"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "CredSettle Support for Avoiding Aggressive Recovery Practices: A 2026 Legal & Strategic Guide",
    "description": "Definitive guide on stopping illegal recovery tactics, understanding your constitutional rights as a borrower, and leveraging professional mediation to end debt harassment permanently.",
    "author": {
      "@type": "Organization",
      "name": "CredSettle"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CredSettle",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.credsettle.com/credsettle-logo-black.svg"
      }
    },
    "datePublished": "2026-03-28",
    "dateModified": "2026-03-28",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.credsettle.com/cred-settle-support-for-avoiding-aggressive-recovery-practices"
    }
  };

  return (
    <div className="relative min-h-screen bg-white mt-5">
      <Navbar />
            <div className="relative z-10">
      <Script
        id="breadcrumb-schema-recovery"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="article-schema-recovery"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <AggressiveRecoverySupportClient />
                  </div>
            <Footer />
    </div>
  );
}
