import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import KreditbeeRecoveryAgentHomeVisitClient from './KreditbeeRecoveryAgentHomeVisitClient';

export const metadata: Metadata = {
  title: 'KreditBee Agent Home Visit: RBI 2027 Rules | CredSettle',
  description:
    'Facing a KreditBee recovery agent home visit? Know RBI 1 Jan 2027 agent hours, ID checks, NBFC rights, and ₹3L+ multi-loan settlement steps now.',
  keywords: [
    'kreditbee recovery agent home visit',
    'kreditbee field agent rules',
    'krazybee recovery agent visit',
    'rbi rules for kreditbee recovery agents 2027',
    'kreditbee loan settlement above 3 lakh',
    'kreditbee doorstep recovery rights'
  ],
  openGraph: {
    title: 'KreditBee Agent Home Visit: RBI 2027 Rules | CredSettle',
    description:
      'Facing a KreditBee recovery agent home visit? Know RBI 1 Jan 2027 agent hours, ID checks, NBFC rights, and ₹3L+ multi-loan settlement steps now.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/kreditbee-recovery-agent-home-visit'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KreditBee Agent Home Visit: RBI 2027 Rules | CredSettle',
    description:
      'Facing a KreditBee recovery agent home visit? Know RBI 1 Jan 2027 agent hours, ID checks, NBFC rights, and ₹3L+ multi-loan settlement steps now.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/kreditbee-recovery-agent-home-visit'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function KreditbeeRecoveryAgentHomeVisitPage() {
  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.credsettle.com/kreditbee-recovery-agent-home-visit#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://www.credsettle.com/kreditbee-recovery-agent-home-visit"
        },
        "headline": "KreditBee Recovery Agent Home Visit Rights & Rules",
        "description":
          "Facing a KreditBee recovery agent home visit? Know RBI 1 Jan 2027 agent hours, ID checks, NBFC rights, and ₹3L+ multi-loan settlement steps now.",
        "inLanguage": "en_IN",
        "mainEntityOfPage": "https://www.credsettle.com/kreditbee-recovery-agent-home-visit",
        "datePublished": "2026-11-11T10:00:00+05:30",
        "dateModified": "2026-11-11T10:00:00+05:30",
        "author": {
          "@type": "Person",
          "@id": "https://www.credsettle.com/author/ashish-jhangra#author",
          "name": "Ashish Jhangra",
          "url": "https://www.credsettle.com/author/ashish-jhangra",
          "jobTitle": "Legal & Debt Resolution Professional",
          "worksFor": {
            "@type": "Organization",
            "name": "CredSettle"
          }
        },
        "publisher": {
          "@type": "Organization",
          "name": "CredSettle",
          "url": "https://www.credsettle.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.credsettle.com/credsettle-logo-black.png"
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.credsettle.com/kreditbee-recovery-agent-home-visit#breadcrumb",
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
            "name": "Loan Settlement",
            "item": "https://www.credsettle.com/loan-settlement"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "KreditBee Agent Home Visit Rules",
            "item": "https://www.credsettle.com/kreditbee-recovery-agent-home-visit"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.credsettle.com/kreditbee-recovery-agent-home-visit#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What documents must a KreditBee agent show during a home visit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Any agent visiting your home for a KreditBee loan must show a photo ID card from their agency, a formal authorization letter naming Krazybee Services Pvt Ltd or the exact RBI-registered partner NBFC on your loan, and a copy of the overdue notice."
            }
          },
          {
            "@type": "Question",
            "name": "What hours are legal for a KreditBee home visit from 1 January 2027?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under the RBI Fair Practices Code and the updated RBI recovery agent directions taking effect on 1 January 2027, field visits and recovery calls are allowed strictly between 8:00 AM and 7:00 PM."
            }
          },
          {
            "@type": "Question",
            "name": "Am I legally forced to let a KreditBee agent enter my flat or house?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. A recovery agent is not a police officer or court bailiff. You can speak politely at your main gate or building lobby, check their ID card, and refuse entry inside your home."
            }
          },
          {
            "@type": "Question",
            "name": "Can a KreditBee agent collect cash or personal UPI transfers at my door?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Never pay cash or send money to an agent's personal UPI number. Any valid EMI or settlement payment must be made inside the official KreditBee app or directly to the partner NBFC account printed on your written sanction letter."
            }
          },
          {
            "@type": "Question",
            "name": "Who is the actual regulated lender behind my KreditBee loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "KreditBee acts as a Lending Service Provider (LSP). Your loan sits on the books of its in-house NBFC, Krazybee Services Private Limited, or a co-lending RBI-registered NBFC or bank listed on your Key Fact Statement (KFS)."
            }
          },
          {
            "@type": "Question",
            "name": "Can KreditBee agents shout in front of neighbours or guards?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. RBI Digital Lending Directions and RBI's 1 January 2027 agent rules bar public shaming, shouting in hallways, or telling security guards, neighbours, or family members about your loan."
            }
          },
          {
            "@type": "Question",
            "name": "Where do I report an abusive KreditBee home visit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Record the agent's details, email the Grievance Redressal Officer of Krazybee Services or your KFS partner NBFC, and if unresolved after 30 days, file a complaint on the RBI CMS portal at cms.rbi.org.in."
            }
          },
          {
            "@type": "Question",
            "name": "Does CredSettle take small single KreditBee loans under Rs 3 Lakhs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. If you owe only Rs 15,000 to Rs 80,000 on a single app with no other debt, paying or emailing the NBFC directly is cheaper than hiring a settlement firm. CredSettle assists borrowers whose combined debt across KreditBee, other loan apps, credit cards, and personal loans is Rs 3,00,000 or more."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedSchema) }}
      />
      <KreditbeeRecoveryAgentHomeVisitClient />
      <Footer />
    </div>
  );
}
