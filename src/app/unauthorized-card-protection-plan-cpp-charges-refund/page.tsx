import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UnauthorizedCppRefundClient from './UnauthorizedCppRefundClient';

export const metadata: Metadata = {
  title: 'Unauthorized Card Protection Plan (CPP) Charge Refund',
  description:
    'Claim a full refund for unauthorized Card Protection Plan (CPP) charges on your credit card under RBI rules. Stop unfair fees & settle with CredSettle.',
  keywords: [
    'unauthorized card protection plan cpp charges credit card refund',
    'cpp charges refund credit card india',
    'how to cancel card protection plan cpp',
    'rbi rules unauthorized cpp charges',
    'cpp assistance india refund complaint',
    'credit card mis selling cpp refund rbi ombudsman',
    'irdai free look period card protection plan',
    'reverse cpp charges overdue credit card',
    'credit card bundled insurance refund india',
    'credsettle cpp charge refund help'
  ],
  openGraph: {
    title: 'Unauthorized Card Protection Plan (CPP) Charge Refund',
    description:
      'Claim a full refund for unauthorized Card Protection Plan (CPP) charges on your credit card under RBI rules. Stop unfair fees & settle with CredSettle.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/unauthorized-card-protection-plan-cpp-charges-refund',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/unauthorized-card-protection-plan-cpp-charges-refund.jpg',
        width: 1200,
        height: 675,
        alt: 'Unauthorized Card Protection Plan CPP Charge Refund Process Under RBI Rules'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unauthorized Card Protection Plan (CPP) Charge Refund',
    description:
      'Claim a full refund for unauthorized Card Protection Plan (CPP) charges on your credit card under RBI rules. Stop unfair fees & settle with CredSettle.',
    images: [
      'https://www.credsettle.com/images/infographics/unauthorized-card-protection-plan-cpp-charges-refund.jpg'
    ]
  },
  alternates: {
    canonical: 'https://www.credsettle.com/unauthorized-card-protection-plan-cpp-charges-refund'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function UnauthorizedCppRefundPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/unauthorized-card-protection-plan-cpp-charges-refund#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/unauthorized-card-protection-plan-cpp-charges-refund'
        },
        headline: 'Unauthorized Card Protection Plan (CPP) Charge Refund',
        description:
          'Claim a full refund for unauthorized Card Protection Plan (CPP) charges on your credit card under RBI rules. Stop unfair fees & settle with CredSettle.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/unauthorized-card-protection-plan-cpp-charges-refund',
        datePublished: '2026-11-21T15:53:00+05:30',
        dateModified: '2026-11-21T15:53:00+05:30',
        articleSection: 'Credit Card Compliance & Consumer Protection',
        author: {
          '@type': 'Person',
          '@id': 'https://www.credsettle.com/author/ashish-jhangra#author',
          name: 'Ashish Jhangra',
          url: 'https://www.credsettle.com/author/ashish-jhangra',
          jobTitle: 'Legal & Debt Resolution Professional',
          worksFor: {
            '@type': 'Organization',
            name: 'CredSettle'
          }
        },
        publisher: {
          '@type': 'Organization',
          name: 'CredSettle',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.credsettle.com/credsettle-logo-black.png'
          }
        },
        image: [
          'https://www.credsettle.com/images/infographics/unauthorized-card-protection-plan-cpp-charges-refund.jpg'
        ]
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.credsettle.com/#organization',
        name: 'CredSettle',
        url: 'https://www.credsettle.com',
        logo: 'https://www.credsettle.com/credsettle-logo-black.png',
        telephone: '+91-8800226635',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Barakhamba Road, Connaught Place',
          addressLocality: 'New Delhi',
          addressRegion: 'Delhi',
          postalCode: '110001',
          addressCountry: 'IN'
        },
        sameAs: [
          'https://www.facebook.com/credsettle',
          'https://www.twitter.com/credsettle',
          'https://www.linkedin.com/company/credsettle',
          'https://www.instagram.com/credsettle/'
        ],
        image: 'https://www.credsettle.com/credsettle-logo-black.png',
        priceRange: '₹₹'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.credsettle.com/unauthorized-card-protection-plan-cpp-charges-refund#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.credsettle.com/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Resources',
            item: 'https://www.credsettle.com/resources'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Unauthorized CPP Charge Refund',
            item: 'https://www.credsettle.com/unauthorized-card-protection-plan-cpp-charges-refund'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/unauthorized-card-protection-plan-cpp-charges-refund#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is a Card Protection Plan (CPP) charge on a credit card?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A Card Protection Plan (CPP) is a paid add-on service or bundled protection cover sold by banks or third-party partners. It claims to help block lost cards or cover fraud, but banks often bill it without clear customer consent.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank charge a CPP fee without my explicit consent?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Under the RBI Credit Card Master Directions, 2022, card-issuers cannot bundle insurance or add-on services using pre-ticked boxes. They must take your prior, explicit, and separate consent, backed by multi-factor authentication for digital sign-ups.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I get a refund for an unauthorized CPP charge after 30 days?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Even if 30 days have passed, you can demand a full refund if the bank or CPP vendor cannot produce valid proof of explicit consent, a verified Pre-Issuance Verification Call (PIVC), or an OTP-authenticated e-mandate.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does the IRDAI 30-day free-look period apply to bundled CPP plans?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If your CPP includes an insurance policy, IRDAI rules give you a 30-day free-look period starting from the date you receive the policy document. The insurer must refund your premium within 7 days after deducting only stamp duty and proportionate risk cover.'
            }
          },
          {
            '@type': 'Question',
            name: 'Must the bank also reverse interest, GST, and late fees caused by CPP?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. If an unauthorized CPP charge pushed your card over its limit or added to an unpaid balance, the bank must reverse the principal fee along with all resulting 18% GST, revolving interest, late fees, and overlimit charges.'
            }
          },
          {
            '@type': 'Question',
            name: 'How do I stop automatic annual renewals of a CPP subscription?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under RBI e-mandate rules, banks must send a pre-debit alert at least 24 hours before charging a recurring fee. You can log in to your bank card portal or send a written email to revoke the e-mandate and block future renewals.'
            }
          },
          {
            '@type': 'Question',
            name: 'What if the bank blames a third-party telemarketer for mis-selling CPP?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A bank cannot escape responsibility by blaming a third-party vendor. Because the charge was billed onto your credit card account, the card-issuer bears vicarious liability and must prove valid consent or reverse the debit.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can an unpaid CPP fee damage my CIBIL score or block my settlement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Unpaid CPP fees show up as overdue dues and can trigger Days Past Due (DPD) marks on your CIBIL report. Before signing a One-Time Settlement (OTS), you should dispute and remove unauthorized CPP fees from your ledger.'
            }
          },
          {
            '@type': 'Question',
            name: 'Where do I escalate if the bank refuses to refund my CPP charge?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'First write to the Bank Grievance Redressal Officer and Principal Nodal Officer. If unresolved after 30 days, file a complaint on the RBI Integrated Ombudsman portal at cms.rbi.org.in, on IRDAI Bima Bharosa, or on the e-Jagriti consumer portal.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does CredSettle help reverse mis-sold CPP charges on overdue cards?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CredSettle audits your credit card statements, drafts formal RBI-compliant dispute notices demanding consent proof, escalates unresolved cases to the RBI Ombudsman, removes inflated CPP interest and GST, and negotiates clean debt settlements.'
            }
          }
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Debt Settlement & Banking Legal Advisory Services',
        url: 'https://www.credsettle.com',
        telephone: '+91-8800226635',
        priceRange: '₹₹'
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
      <UnauthorizedCppRefundClient />
      <Footer />
    </div>
  );
}
