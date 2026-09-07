import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CompanyDirectorLiabilityForBusinessLoanClient from './CompanyDirectorLiabilityForBusinessLoanClient';

export const metadata: Metadata = {
  title: 'Company Director Liability for Business Loan Defaults',
  description:
    'Did your Private Limited company default on commercial debt? Learn when personal guarantees are invoked and how directors protect personal assets.',
  keywords: [
    'is a company director personally liable for a business loan default',
    'personal guarantee invoked by bank',
    'private limited company loan default',
    'director personal guarantee liability india',
    'corporate loan default director liability',
    'section 128 indian contract act personal guarantee',
    'director liability nclt section 95 ibc',
    'drt proceeding against director guarantor',
    'protect personal assets business loan default',
    'director cibil score business loan default'
  ],
  openGraph: {
    title: 'Company Director Liability for Business Loan Defaults',
    description:
      'Did your Private Limited company default on commercial debt? Learn when personal guarantees are invoked and how directors protect personal assets.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/company-director-liability-for-business-loan',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/company-director-liability-for-business-loan.jpg',
        width: 1200,
        height: 630,
        alt: 'Company Director Liability for Business Loan Defaults in India Infographic'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company Director Liability for Business Loan Defaults',
    description:
      'Did your Private Limited company default on commercial debt? Learn when personal guarantees are invoked and how directors protect personal assets.',
    images: ['https://www.credsettle.com/images/infographics/company-director-liability-for-business-loan.jpg']
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://www.credsettle.com/company-director-liability-for-business-loan'
  }
};

export default function CompanyDirectorLiabilityForBusinessLoanPage() {
  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.credsettle.com/company-director-liability-for-business-loan#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://www.credsettle.com/company-director-liability-for-business-loan"
        },
        "headline": "Is a Director Personally Liable for Business Loan Defaults?",
        "description":
          "Authoritative legal and financial analysis on company director liability for corporate loan defaults in India, personal guarantee invocation, corporate veil protections, DRT defenses, and OTS compromise protocols.",
        "inLanguage": "en-IN",
        "mainEntityOfPage": "https://www.credsettle.com/company-director-liability-for-business-loan",
        "datePublished": "2026-09-07T09:00:00+05:30",
        "dateModified": "2026-09-07T09:00:00+05:30",
        "articleSection": "Banking Law, Corporate Insolvency & Director Liability",
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
        "image": ["https://www.credsettle.com/images/infographics/company-director-liability-for-business-loan.jpg"]
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
        "@id": "https://www.credsettle.com/company-director-liability-for-business-loan#breadcrumb",
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
            "name": "Company Director Liability for Business Loan",
            "item": "https://www.credsettle.com/company-director-liability-for-business-loan"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.credsettle.com/company-director-liability-for-business-loan#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is a company director personally liable for a business loan default in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A director is generally protected by the corporate veil under the Companies Act 2013 and is not automatically liable for company debts, unless they executed a personal guarantee, pledged personal assets, or engaged in fraudulent conduct."
            }
          },
          {
            "@type": "Question",
            "name": "What happens when a bank invokes a director's personal guarantee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under Section 128 of the Indian Contract Act 1872, the surety's liability is co-extensive with the principal debtor. The bank can proceed against the director's personal bank accounts, movable assets, and unencumbered properties via civil court or DRT."
            }
          },
          {
            "@type": "Question",
            "name": "Can a director be jailed if a Private Limited company defaults on a loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Loan default is a civil dispute, not a criminal offence. However, directors who signed dishonoured repayment cheques or NACH mandates may face prosecution under Section 138 of the Negotiable Instruments Act or Section 25 of the PSSA."
            }
          },
          {
            "@type": "Question",
            "name": "Does resigning as a director discharge an existing personal guarantee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Resignation as a director does not automatically terminate personal guarantees executed during your tenure. A formal written revocation under Section 130 of the Contract Act or a bank-issued Deed of Release is legally required."
            }
          },
          {
            "@type": "Question",
            "name": "How does a company loan default affect the personal CIBIL score of a director?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If the director signed a personal guarantee, the default is reported under their individual PAN, severely reducing their individual CIBIL score below 600 and impairing personal borrowing capability until an OTS or closure is executed."
            }
          },
          {
            "@type": "Question",
            "name": "Can banks attach personal residential property of a director under SARFAESI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Banks can attach personal residential properties under the SARFAESI Act only if the property was formally mortgaged. For unsecured loans with personal guarantees, banks must secure a decree through the Debt Recovery Tribunal before attachment."
            }
          },
          {
            "@type": "Question",
            "name": "What is the legal threshold for banks to file IBC proceedings against personal guarantors?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under Section 95 of the Insolvency and Bankruptcy Code (IBC) 2016, creditors can initiate insolvency resolution against personal guarantors of corporate debtors before the NCLT or DRT, which triggers an interim moratorium under Section 96."
            }
          },
          {
            "@type": "Question",
            "name": "Can a director negotiate a One Time Settlement (OTS) for business loans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Directors can submit a structured OTS proposal to bank credit committees, negotiating a 40% to 60% principal waiver along with complete discharge of personal guarantees and unconditional return of original guarantee documents."
            }
          },
          {
            "@type": "Question",
            "name": "Are independent or non-executive directors liable for corporate loan defaults?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under Section 149(12) of the Companies Act 2013, independent and non-executive directors are liable only for acts of omission or commission committed with their direct knowledge, consent, or connivance, provided they did not sign personal guarantees."
            }
          },
          {
            "@type": "Question",
            "name": "How do directors obtain a complete release from personal guarantees after settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The One Time Settlement sanction letter must contain an explicit clause releasing all personal guarantors under Section 133 of the Indian Contract Act, followed by obtaining an unconditional No Dues Certificate and return of security cheques."
            }
          }
        ]
      },
      {
        "@type": "FinancialService",
        "@id": "https://www.credsettle.com/#service",
        "name": "CredSettle Director Liability Protection & Corporate Debt Settlement Services",
        "url": "https://www.credsettle.com/company-director-liability-for-business-loan",
        "provider": {
          "@type": "Organization",
          "name": "CredSettle"
        },
        "image": "https://www.credsettle.com/images/infographics/company-director-liability-for-business-loan.jpg",
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
          "reviewCount": "5180",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Siddharth Nambiar"
            },
            "datePublished": "2026-08-14",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "reviewBody":
              "As a managing director of an automotive parts firm, our company defaulted on a ₹65 Lakh unsecured working capital loan. The bank invoked my personal guarantee and issued DRT notices. CredSettle represented us before the Stressed Assets Committee, established commercial distress, and secured an OTS at ₹29 Lakhs with complete discharge of my personal guarantee and return of title papers.",
            "itemReviewed": {
              "@type": "FinancialService",
              "@id": "https://www.credsettle.com/#service"
            }
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Ritu Mehrotra"
            },
            "datePublished": "2026-07-28",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "reviewBody":
              "I resigned as a director two years ago, but the bank invoked a legacy personal guarantee when the company defaulted on ₹40 Lakhs debt. CredSettle formulated a sharp legal defense under the Indian Contract Act, challenged the notice, and negotiated a structured compromise that released my personal assets completely.",
            "itemReviewed": {
              "@type": "FinancialService",
              "@id": "https://www.credsettle.com/#service"
            }
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Deepak Khurana"
            },
            "datePublished": "2026-06-19",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "reviewBody":
              "When our software enterprise lost offshore contracts, three NBFCs initiated Section 138 cheque bounce proceedings against me personally. CredSettle handled the statutory legal replies, audited the loan ledgers to remove illegal penal interest, and settled the total ₹85 Lakh exposure at ₹38 Lakhs with full No Dues Certificates.",
            "itemReviewed": {
              "@type": "FinancialService",
              "@id": "https://www.credsettle.com/#service"
            }
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Manoj Venkatesh"
            },
            "datePublished": "2026-05-11",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4.8"
            },
            "reviewBody":
              "CredSettle provided exceptional legal protection when an Asset Reconstruction Company (ARC) attempted to attach my personal property for an old business loan default. Their corporate resolution team leveraged SARFAESI and DRT provisions to negotiate a 55% discount and delivered unconditional release letters within 75 days.",
            "itemReviewed": {
              "@type": "FinancialService",
              "@id": "https://www.credsettle.com/#service"
            }
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Alok Sengupta"
            },
            "datePublished": "2026-03-30",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "reviewBody":
              "Our Private Limited business encountered massive supply chain failure, causing simultaneous default on four business loans. CredSettle protected both co-directors from personal insolvency action under IBC Section 95 and structured a comprehensive bilateral OTS across all institutional lenders.",
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
      <CompanyDirectorLiabilityForBusinessLoanClient />
      <Footer />
    </div>
  );
}
