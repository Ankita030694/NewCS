import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BusinessLoanSettlementProcessClient from './BusinessLoanSettlementProcessClient';

export const metadata: Metadata = {
  title: 'Business Loan Settlement Guide: MSME & Commercial OTS',
  description:
    'Master the business loan settlement process in India. Learn MSME OTS procedures, protect personal assets, and get 40% to 60% waivers.',
  keywords: [
    'business loan settlement process in india',
    'unsecured business loan settlement',
    'msme loan ots scheme',
    'business loan settlement rbi guidelines',
    'director guarantee personal liability settlement',
    'sole proprietorship loan settlement',
    'bank one time settlement business loan',
    'business debt compromise letter',
    'msme debt restructuring vs ots',
    'commercial loan settlement procedure'
  ],
  openGraph: {
    title: 'Business Loan Settlement Guide: MSME & Commercial OTS',
    description:
      'Master the business loan settlement process in India. Learn MSME OTS procedures, how to protect personal assets and director guarantees, and negotiate 40%-60% waivers.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/business-loan-settlement-process',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/business-loan-settlement-process.jpg',
        width: 1200,
        height: 630,
        alt: 'Business Loan Settlement Process in India Infographic'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Loan Settlement Guide: MSME & Commercial OTS',
    description:
      'Master the business loan settlement process in India. Learn MSME OTS procedures, how to protect personal assets and director guarantees, and negotiate 40%-60% waivers.',
    images: ['https://www.credsettle.com/images/infographics/business-loan-settlement-process.jpg']
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://www.credsettle.com/business-loan-settlement-process'
  }
};

export default function BusinessLoanSettlementProcessPage() {
  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.credsettle.com/business-loan-settlement-process#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://www.credsettle.com/business-loan-settlement-process"
        },
        "headline": "Business Loan Settlement Process in India: Complete Legal & Financial Guide",
        "description":
          "Comprehensive guide to navigating unsecured business loan settlements, MSME OTS policies, personal guarantee protection, and banking compromise negotiations in India.",
        "inLanguage": "en-IN",
        "mainEntityOfPage": "https://www.credsettle.com/business-loan-settlement-process",
        "datePublished": "2026-08-28T09:00:00+05:30",
        "dateModified": "2026-08-28T09:00:00+05:30",
        "articleSection": "Banking Law & Commercial Debt Resolution",
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
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.credsettle.com/credsettle-logo-black.png"
          }
        },
        "image": ["https://www.credsettle.com/images/infographics/business-loan-settlement-process.jpg"]
      },
      {
        "@type": "Organization",
        "@id": "https://www.credsettle.com/#organization",
        "name": "CredSettle",
        "url": "https://www.credsettle.com",
        "logo": "https://www.credsettle.com/credsettle-logo-black.png",
        "telephone": "+91-8800226635",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Barakhamba Road, Connaught Place",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110001",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://www.facebook.com/credsettle",
          "https://www.twitter.com/credsettle",
          "https://www.linkedin.com/company/credsettle",
          "https://www.instagram.com/credsettle/"
        ],
        "image": "https://www.credsettle.com/credsettle-logo-black.png",
        "priceRange": "₹₹"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.credsettle.com/business-loan-settlement-process#breadcrumb",
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
            "name": "Resources",
            "item": "https://www.credsettle.com/resources"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Business Loan Settlement Process",
            "item": "https://www.credsettle.com/business-loan-settlement-process"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.credsettle.com/business-loan-settlement-process#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the business loan settlement process in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is a formal compromise where a distressed enterprise negotiates with lenders to pay a reduced lump sum, typically 40% to 60% of principal, extinguishing commercial liabilities with an unconditional No Dues Certificate."
            }
          },
          {
            "@type": "Question",
            "name": "How does an MSME loan restructuring differ from an OTS?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "MSME loan restructuring modifies repayment terms by extending tenures while retaining 100% of the principal debt. In contrast, an OTS permanently waives accumulated interest, penal charges, and part of the principal for immediate debt closure."
            }
          },
          {
            "@type": "Question",
            "name": "Are directors personally liable for unsecured business loan defaults?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Directors are liable only if they executed personal guarantees. In private limited entities without personal guarantees, director liability remains legally separated from corporate debt under the Companies Act corporate veil doctrine."
            }
          },
          {
            "@type": "Question",
            "name": "Can a sole proprietor settle business debt without losing personal assets?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Negotiating a structured OTS resolves unsecured commercial liabilities cleanly, preventing lenders from initiating civil execution proceedings against personal residential properties."
            }
          },
          {
            "@type": "Question",
            "name": "What percentage waiver can an enterprise negotiate during an OTS?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Enterprises facing verifiable commercial insolvency typically secure 100% waivers on penal interest and compound levies, plus 35% to 60% waivers on core principal balances depending on credit committee approval."
            }
          },
          {
            "@type": "Question",
            "name": "Can banks initiate insolvency or NCLT proceedings for unsecured business loans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under Section 4 of the Insolvency and Bankruptcy Code (IBC), financial creditors can approach the NCLT only if the corporate default exceeds ₹1 Crore. Smaller MSME debts are handled via civil recovery or DRT."
            }
          },
          {
            "@type": "Question",
            "name": "How does a business loan settlement impact commercial CIBIL rank and director score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The commercial credit report reflects the loan as Settled, temporarily lowering CMR and CIR scores. However, it halts negative DPD escalation, enabling systematic credit repair within 12 to 24 months."
            }
          },
          {
            "@type": "Question",
            "name": "What legal notices do banks issue during business loan defaults?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Lenders commonly issue loan recall notices, Section 138 NI Act notices for security cheques, Section 25 PSSA notices for NACH mandate dishonour, and Section 21 Arbitration invocation notices."
            }
          },
          {
            "@type": "Question",
            "name": "How are personal guarantees discharged after settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The settlement sanction letter must include explicit covenants releasing all personal guarantors under Section 133 of the Indian Contract Act 1872, accompanied by the return of original security cheques."
            }
          },
          {
            "@type": "Question",
            "name": "Can debt sold to an Asset Reconstruction Company (ARC) be settled?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. ARCs acquire stressed business loans at deep discounts under SARFAESI Section 5, making them highly flexible to accept compromise settlements offering 50% to 70% debt waivers."
            }
          }
        ]
      },
      {
        "@type": "FinancialService",
        "@id": "https://www.credsettle.com/#service",
        "name": "CredSettle Business Loan Settlement & Commercial Debt Resolution Services",
        "url": "https://www.credsettle.com/business-loan-settlement-process",
        "provider": {
          "@type": "Organization",
          "name": "CredSettle"
        },
        "image": "https://www.credsettle.com/images/infographics/business-loan-settlement-process.jpg",
        "telephone": "+91-8800226635",
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Barakhamba Road, Connaught Place",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110001",
          "addressCountry": "IN"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "5420",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rajesh Singhal"
            },
            "datePublished": "2026-07-22",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "reviewBody":
              "Our manufacturing enterprise faced severe cash flow stress post raw material inflation, accumulating ₹42 Lakhs across three unsecured business loans. CredSettle represented our case before bank credit committees, structured a solid financial hardship dossier, and closed the entire debt at ₹18.5 Lakhs with zero litigation.",
            "itemReviewed": {
              "@type": "FinancialService",
              "@id": "https://www.credsettle.com/#service"
            }
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sunita Patel"
            },
            "datePublished": "2026-06-15",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "reviewBody":
              "As a sole proprietor running a textile distribution firm, recovery agents were harassing my family and threatening my residential property. CredSettle invoked RBI Fair Practices Code, issued strong legal responses, and settled my ₹28 Lakh NBFC loan for ₹12 Lakhs with complete release of personal guarantees.",
            "itemReviewed": {
              "@type": "FinancialService",
              "@id": "https://www.credsettle.com/#service"
            }
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Anand Kulkarni"
            },
            "datePublished": "2026-05-10",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "reviewBody":
              "When our tech startup lost major enterprise contracts, our unsecured business lines were recalled with inflated penal charges. CredSettle performed a thorough forensic audit of the loan ledger, eliminated ₹9 Lakhs in illegal fees, and negotiated a clean OTS sanction letter.",
            "itemReviewed": {
              "@type": "FinancialService",
              "@id": "https://www.credsettle.com/#service"
            }
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Harpreet Singh Bhasin"
            },
            "datePublished": "2026-04-03",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4.8"
            },
            "reviewBody":
              "CredSettle handled our ARC assigned business loan dispute expertly. The asset reconstruction company was demanding full compound interest, but CredSettle leveraged SARFAESI guidelines to negotiate a 58% discount and returned all original security cheques promptly.",
            "itemReviewed": {
              "@type": "FinancialService",
              "@id": "https://www.credsettle.com/#service"
            }
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Vikram Joshi"
            },
            "datePublished": "2026-02-18",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "reviewBody":
              "Faced Section 138 and Section 25 notices simultaneously for a ₹35 Lakh business line after our primary client defaulted. CredSettle stepped in with strategic legal replies, stopped coercive recovery tactics, and secured an official No Dues Certificate under a transparent OTS plan.",
            "itemReviewed": {
              "@type": "FinancialService",
              "@id": "https://www.credsettle.com/#service"
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
      <BusinessLoanSettlementProcessClient />
      <Footer />
    </div>
  );
}
