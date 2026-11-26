import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EducationLoanSettlementClient from './EducationLoanSettlementClient';

export const metadata: Metadata = {
  title: 'Education Loan Settlement & Co-Borrowers',
  description:
    'Settle education loans under IBA and CGFSEL rules. Protect parent co-borrowers, stop harassment, and get 35% to 55% waivers.',
  keywords: [
    'education loan settlement in india',
    'student loan ots scheme',
    'settle education loan with bank',
    'cgfsel education loan default rules',
    'iba education loan guidelines settlement',
    'co-borrower parent education loan liability',
    'overseas education loan settlement',
    'education loan npa settlement process',
    'stop education loan recovery harassment',
    'education loan compromise settlement'
  ],
  openGraph: {
    title: 'Education Loan Settlement & Co-Borrowers',
    description:
      'Settle defaulted education loans in India under IBA & CGFSEL guidelines. Protect parent co-borrowers from CIBIL damage, stop recovery harassment, and negotiate 35%-55% OTS waivers.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/education-loan-settlement',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/education-loan-settlement.jpg',
        width: 1200,
        height: 630,
        alt: 'Education Loan Settlement in India Infographic'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Education Loan Settlement & Co-Borrowers',
    description:
      'Settle defaulted education loans in India under IBA & CGFSEL guidelines. Protect parent co-borrowers from CIBIL damage, stop recovery harassment, and negotiate 35%-55% OTS waivers.',
    images: ['https://www.credsettle.com/images/infographics/education-loan-settlement.jpg']
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://www.credsettle.com/education-loan-settlement'
  }
};

export default function EducationLoanSettlementPage() {
  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.credsettle.com/education-loan-settlement#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://www.credsettle.com/education-loan-settlement"
        },
        "headline": "Education Loan Settlement in India: Legal Guide, OTS Rules & Co-Borrower Protection",
        "description":
          "Comprehensive legal and financial guide to settling defaulted education loans, understanding CGFSEL coverage, protecting parent co-borrowers, and negotiating One-Time Settlements in India.",
        "inLanguage": "en-IN",
        "mainEntityOfPage": "https://www.credsettle.com/education-loan-settlement",
        "datePublished": "2026-09-01T09:00:00+05:30",
        "dateModified": "2026-09-01T09:00:00+05:30",
        "articleSection": "Banking Law & Educational Debt Resolution",
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
        "image": ["https://www.credsettle.com/images/infographics/education-loan-settlement.jpg"]
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
        "@id": "https://www.credsettle.com/education-loan-settlement#breadcrumb",
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
            "name": "Education Loan Settlement",
            "item": "https://www.credsettle.com/education-loan-settlement"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.credsettle.com/education-loan-settlement#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can education loans be settled through a One-Time Settlement (OTS) in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. When student borrowers face genuine post-graduation financial distress, such as prolonged unemployment or health crises, Indian banks and NBFCs can sanction an OTS to write off interest and accept a reduced principal lump sum."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between collateralized and non-collateralized education loans under default?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Loans under ₹7.5 Lakhs are generally non-collateralized and backed by CGFSEL guarantee cover, limiting recovery to unsecured claims. Collateralized loans above ₹7.5 Lakhs involve pledged property, which lenders can attach under SARFAESI if unpaid."
            }
          },
          {
            "@type": "Question",
            "name": "How does the Credit Guarantee Fund Scheme for Educational Loans (CGFSEL) affect loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "CGFSEL provides banks with up to 75% credit risk cover on eligible defaulted loans up to ₹7.5 Lakhs. Because banks can claim fund compensation, they possess greater flexibility to negotiate compromise settlements with distressed students."
            }
          },
          {
            "@type": "Question",
            "name": "Are parents and co-borrowers legally liable for education loan default?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Parents who sign as co-borrowers share joint and several liability under Section 128 of the Indian Contract Act 1872, exposing their credit scores and income to recovery proceedings until a formal compromise is executed."
            }
          },
          {
            "@type": "Question",
            "name": "Can I request a moratorium extension if I have not secured employment after graduation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Under IBA Model Educational Loan guidelines, graduates unable to secure placement can formally petition their lender for a moratorium extension of 6 to 12 months before the account is classified as delinquent."
            }
          },
          {
            "@type": "Question",
            "name": "How much waiver can borrowers typically expect in an education loan OTS?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In verified hardship cases where graduate earning capacity is impaired, credit committees routinely waive 100% of penal charges and accumulated compound interest, alongside a 35% to 55% discount on the core principal balance."
            }
          },
          {
            "@type": "Question",
            "name": "What happens to my CIBIL score and my co-borrower parent's score after settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The loan status updates to Settled across credit bureaus, arresting negative overdue reporting. While scores temporarily decline, borrowers can rebuild their CIBIL score to 750+ within 12 to 24 months through disciplined credit repair."
            }
          },
          {
            "@type": "Question",
            "name": "Can banks initiate legal proceedings or send recovery agents to my workplace?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Lenders may issue statutory notices under Section 138 NI Act or Section 25 PSSA for unpaid mandates. However, recovery agent harassment, intimidation, and workplace visits violate the RBI Fair Practices Code and are strictly actionable."
            }
          },
          {
            "@type": "Question",
            "name": "Can education loans for overseas studies be settled if foreign employment falls through?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Overseas education loans from Indian banks or NBFCs are eligible for OTS. Demonstrating visa expiration, lack of foreign job placement, or currency repatriation distress helps establish bona fide hardship for principal concessions."
            }
          },
          {
            "@type": "Question",
            "name": "What documents are essential to negotiate an education loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Essential documents include graduation completion certificates, proof of job search or termination, bank account statements proving insufficient income, medical records if applicable, and a formal written hardship petition addressed to the bank."
            }
          }
        ]
      },
      {
        "@type": "FinancialService",
        "@id": "https://www.credsettle.com/#service",
        "name": "CredSettle Education Loan Settlement & Student Debt Relief Services",
        "url": "https://www.credsettle.com/education-loan-settlement",
        "provider": {
          "@type": "Organization",
          "name": "CredSettle"
        },
        "image": "https://www.credsettle.com/images/infographics/education-loan-settlement.jpg",
        "telephone": "+91-8800226635",
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Barakhamba Road, Connaught Place",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110001",
          "addressCountry": "IN"
        }
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
      <EducationLoanSettlementClient />
      <Footer />
    </div>
  );
}
