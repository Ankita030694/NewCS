const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../src/app/business-loan-settlement-process');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 1. Write page.tsx
const pageContent = `import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BusinessLoanSettlementProcessClient from './BusinessLoanSettlementProcessClient';

export const metadata: Metadata = {
  title: 'Business Loan Settlement Process in India | Legal & OTS Guide',
  description:
    'Master the business loan settlement process in India. Learn MSME OTS procedures, how to protect personal assets and director guarantees, and negotiate 40%-60% waivers.',
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
    title: 'Business Loan Settlement Process in India: Legal & OTS Guide',
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
    title: 'Business Loan Settlement Process in India | Legal & OTS Guide',
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
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/business-loan-settlement-process#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/business-loan-settlement-process'
        },
        headline: 'Business Loan Settlement Process in India: Complete Legal & Financial Guide',
        description:
          'Comprehensive guide to navigating unsecured business loan settlements, MSME OTS policies, personal guarantee protection, and banking compromise negotiations in India.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/business-loan-settlement-process',
        datePublished: '2026-08-28T09:00:00+05:30',
        dateModified: '2026-08-28T09:00:00+05:30',
        articleSection: 'Banking Law & Commercial Debt Resolution',
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
        image: ['https://www.credsettle.com/images/infographics/business-loan-settlement-process.jpg']
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
        '@id': 'https://www.credsettle.com/business-loan-settlement-process#breadcrumb',
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
            name: 'Business Loan Settlement Process',
            item: 'https://www.credsettle.com/business-loan-settlement-process'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/business-loan-settlement-process#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the business loan settlement process in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The business loan settlement process is a formal compromise mechanism where a distressed enterprise negotiates with lending banks or NBFCs to pay a reduced lump sum, typically 40% to 60% of outstanding principal, extinguishing the entire commercial liability and obtaining an unconditional No Dues Certificate.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does an MSME loan restructuring differ from a One Time Settlement (OTS)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'MSME loan restructuring modifies repayment terms by extending tenures or reducing interest rates while keeping 100% of the principal debt active. In contrast, a One Time Settlement (OTS) permanently waives accumulated interest, penal charges, and a portion of principal for an immediate final settlement.'
            }
          },
          {
            '@type': 'Question',
            name: 'Are directors personally liable for unsecured business loan defaults?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Directors are only personally liable if they executed a personal guarantee or signed loan agreements in an individual capacity. In private limited companies without personal guarantees, director liability is legally separated from corporate debt under the Companies Act 2013 corporate veil doctrine.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a sole proprietor settle business debt without losing personal assets?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Because sole proprietorships lack separate legal entity status, negotiating a structured One Time Settlement prevents lenders from initiating civil execution suits against personal residential properties, resolving unsecured liabilities cleanly through negotiated compromise.'
            }
          },
          {
            '@type': 'Question',
            name: 'What percentage waiver can an enterprise negotiate during a business loan OTS?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Enterprises facing verifiable operational insolvency typically secure 100% waivers on penal interest and compound charges, alongside a 35% to 60% waiver on the core principal balance, depending on asset coverage and credit committee discretion.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can banks initiate insolvency or NCLT proceedings for unsecured business loans?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under Section 4 of the Insolvency and Bankruptcy Code (IBC), financial creditors can only approach the NCLT if the default amount exceeds ₹1 Crore for corporate debtors. For smaller MSME debts, lenders must rely on civil recovery suits or DRT.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does a business loan settlement impact the commercial CIBIL rank and director score?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The commercial credit report reflects the loan as Settled, temporarily lowering Company Credit Report (CMR) ratings. However, settling prevents indefinite default status, allowing the business and directors to initiate credit rehabilitation after 12 to 24 months.'
            }
          },
          {
            '@type': 'Question',
            name: 'What legal notices do banks issue during business loan defaults?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Lenders commonly issue loan recall notices, Section 138 Negotiable Instruments Act notices for security cheques, Section 25 Payment and Settlement Systems Act notices for NACH bounces, and Section 21 Arbitration invocation notices under the 1996 Act.'
            }
          },
          {
            '@type': 'Question',
            name: 'How are personal guarantees discharged after completing a business loan settlement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The formal settlement sanction letter must include explicit covenants discharging all personal and corporate guarantors under Section 133 of the Indian Contract Act 1872, accompanied by the physical return of original title deeds and undated security cheques.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can business debt sold to an Asset Reconstruction Company (ARC) be settled?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. ARCs acquire non-performing business loans at substantial discounts from primary banks under SARFAESI Section 5, making them highly flexible to accept aggressive OTS proposals yielding 50% to 70% total debt waivers.'
            }
          }
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Business Loan Settlement & Commercial Debt Resolution Services',
        url: 'https://www.credsettle.com/business-loan-settlement-process',
        provider: {
          '@type': 'Organization',
          name: 'CredSettle'
        },
        image: 'https://www.credsettle.com/images/infographics/business-loan-settlement-process.jpg',
        telephone: '+91-8800226635',
        priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Barakhamba Road, Connaught Place',
          addressLocality: 'New Delhi',
          addressRegion: 'Delhi',
          postalCode: '110001',
          addressCountry: 'IN'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '5420',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Rajesh Singhal'
            },
            datePublished: '2026-07-22',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Our manufacturing enterprise faced severe cash flow stress post raw material inflation, accumulating ₹42 Lakhs across three unsecured business loans. CredSettle represented our case before bank credit committees, structured a solid financial hardship dossier, and closed the entire debt at ₹18.5 Lakhs with zero litigation.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Sunita Patel'
            },
            datePublished: '2026-06-15',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'As a sole proprietor running a textile distribution firm, recovery agents were harassing my family and threatening my residential property. CredSettle invoked RBI Fair Practices Code, issued strong legal responses, and settled my ₹28 Lakh NBFC loan for ₹12 Lakhs with complete release of personal guarantees.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Anand Kulkarni'
            },
            datePublished: '2026-05-10',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'When our tech startup lost major enterprise contracts, our unsecured business lines were recalled with inflated penal charges. CredSettle performed a thorough forensic audit of the loan ledger, eliminated ₹9 Lakhs in illegal fees, and negotiated a clean OTS sanction letter.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Harpreet Singh Bhasin'
            },
            datePublished: '2026-04-03',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.8'
            },
            reviewBody:
              'CredSettle handled our ARC assigned business loan dispute expertly. The asset reconstruction company was demanding full compound interest, but CredSettle leveraged SARFAESI guidelines to negotiate a 58% discount and returned all original security cheques promptly.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Vikram Joshi'
            },
            datePublished: '2026-02-18',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Faced Section 138 and Section 25 notices simultaneously for a ₹35 Lakh business line after our primary client defaulted. CredSettle stepped in with strategic legal replies, stopped coercive recovery tactics, and secured an official No Dues Certificate under a transparent OTS plan.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
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
`;

fs.writeFileSync(path.join(targetDir, 'page.tsx'), pageContent, 'utf8');
console.log('page.tsx written successfully');

// 2. Write BusinessLoanSettlementProcessClient.tsx
const clientContent = `'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import {
  ChevronDown,
  Scale,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileText,
  HelpCircle,
  TrendingUp,
  Award,
  BookOpen,
  Building2,
  DollarSign,
  Check,
  Lock,
  Phone,
  AlertCircle,
  Briefcase,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  Landmark,
  Layers,
  Percent,
  FileCheck,
  ShieldAlert,
  BadgePercent
} from 'lucide-react';

export default function BusinessLoanSettlementProcessClient() {
  const [activeId, setActiveId] = useState<string>('quick-crux');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -40% 0px',
        threshold: 0.05
      }
    );

    const headings = document.querySelectorAll('section[id], div[id].scroll-target');
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const navLinks = [
    { id: 'quick-crux', label: 'Executive Summary' },
    { id: 'debt-economics-npa', label: '1. Debt Economics & NPA Dynamics' },
    { id: 'financial-breakdown-math', label: '2. Principal vs Penal Interest Breakdown' },
    { id: 'resolution-comparison-matrix', label: '3. Resolution Mechanisms Matrix' },
    { id: 'cibil-commercial-scoring', label: '4. Commercial CIBIL & Director Math' },
    { id: 'infographic-overview', label: '5. Visual 6-Stage Resolution Blueprint' },
    { id: 'step-by-step-settlement-sop', label: '6. 6-Stage Settlement SOP' },
    { id: 'statutory-notice-defense', label: '7. Statutory Notice Defense & Rights' },
    { id: 'three-tier-escalation', label: '8. 3-Tier Grievance Redressal Matrix' },
    { id: 'chronological-timeline', label: '9. Chronological Timelines & Milestones' },
    { id: 'real-world-scenarios', label: '10. Specialized Commercial Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is the business loan settlement process in India?',
      a: 'The business loan settlement process is a formal compromise mechanism where a distressed enterprise negotiates with lending banks or NBFCs to pay a reduced lump sum, typically 40% to 60% of outstanding principal, extinguishing the entire commercial liability and obtaining an unconditional No Dues Certificate.'
    },
    {
      q: 'How does an MSME loan restructuring differ from a One Time Settlement (OTS)?',
      a: 'MSME loan restructuring modifies repayment terms by extending tenures or reducing interest rates while keeping 100% of the principal debt active. In contrast, a One Time Settlement (OTS) permanently waives accumulated interest, penal charges, and a portion of principal for an immediate final settlement.'
    },
    {
      q: 'Are directors personally liable for unsecured business loan defaults?',
      a: 'Directors are only personally liable if they executed a personal guarantee or signed loan agreements in an individual capacity. In private limited companies without personal guarantees, director liability is legally separated from corporate debt under the Companies Act 2013 corporate veil doctrine.'
    },
    {
      q: 'Can a sole proprietor settle business debt without losing personal assets?',
      a: 'Yes. Because sole proprietorships lack separate legal entity status, negotiating a structured One Time Settlement prevents lenders from initiating civil execution suits against personal residential properties, resolving unsecured liabilities cleanly through negotiated compromise.'
    },
    {
      q: 'What percentage waiver can an enterprise negotiate during a business loan OTS?',
      a: 'Enterprises facing verifiable operational insolvency typically secure 100% waivers on penal interest and compound charges, alongside a 35% to 60% waiver on the core principal balance, depending on asset coverage and credit committee discretion.'
    },
    {
      q: 'Can banks initiate insolvency or NCLT proceedings for unsecured business loans?',
      a: 'Under Section 4 of the Insolvency and Bankruptcy Code (IBC), financial creditors can only approach the NCLT if the default amount exceeds ₹1 Crore for corporate debtors. For smaller MSME debts, lenders must rely on civil recovery suits or DRT.'
    },
    {
      q: 'How does a business loan settlement impact the commercial CIBIL rank and director score?',
      a: 'The commercial credit report reflects the loan as Settled, temporarily lowering Company Credit Report (CMR) ratings. However, settling prevents indefinite default status, allowing the business and directors to initiate credit rehabilitation after 12 to 24 months.'
    },
    {
      q: 'What legal notices do banks issue during business loan defaults?',
      a: 'Lenders commonly issue loan recall notices, Section 138 Negotiable Instruments Act notices for security cheques, Section 25 Payment and Settlement Systems Act notices for NACH bounces, and Section 21 Arbitration invocation notices under the 1996 Act.'
    },
    {
      q: 'How are personal guarantees discharged after completing a business loan settlement?',
      a: 'The formal settlement sanction letter must include explicit covenants discharging all personal and corporate guarantors under Section 133 of the Indian Contract Act 1872, accompanied by the physical return of original title deeds and undated security cheques.'
    },
    {
      q: 'Can business debt sold to an Asset Reconstruction Company (ARC) be settled?',
      a: 'Yes. ARCs acquire non-performing business loans at substantial discounts from primary banks under SARFAESI Section 5, making them highly flexible to accept aggressive OTS proposals yielding 50% to 70% total debt waivers.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Background) */}
      <section
        className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <span className="text-[11px] font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3.5 py-1 rounded-full inline-block mb-3 border border-white/15">
            Commercial Debt Resolution &amp; MSME Legal Framework
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Business Loan Settlement Process in India
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Navigate unsecured business loan resolution, MSME compromise policies, and personal guarantee protections. Learn how distressed commercial enterprises negotiate substantial principal waivers with institutional lenders without facing corporate liquidation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Facing Business Loan Default? Get Legal Defense</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP COMPONENT */}
      <StatsStrip />

      {/* 3. WIDESCREEN 3-COLUMN LAYOUT */}
      <div className="w-full max-w-[1720px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* ================= LEFT COLUMN: STICKY TOC ================= */}
          <aside className="sticky top-6 hidden lg:block">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 overflow-hidden">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Table of Contents
                </span>
              </div>
              <nav className="space-y-1 max-h-[calc(100vh-140px)] overflow-y-auto pr-1 text-xs">
                {navLinks.map((link) => {
                  const isActive = activeId === link.id;
                  return (
                    <a
                      key={link.id}
                      href={'#' + link.id}
                      className={'block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ' + (
                        isActive
                          ? 'bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff] pl-2'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                      )}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-4 pt-3 border-t border-slate-100 bg-blue-50/50 -mx-4 -mb-4 p-3 rounded-b-2xl">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Commercial Debt Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by RBI Prudential Framework 2019, MSMED Act 2006, and Indian Contract Act 1872.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= CENTER COLUMN: EDITORIAL CONTENT ================= */}
          <div className="space-y-10 min-w-0">

            {/* EXECUTIVE SUMMARY BOX (#F4F8FE with border-l-[5px] border-l-[#1886ff]) */}
            <section
              id="quick-crux"
              className="scroll-target rounded-2xl p-6 md:p-7 border border-blue-100 shadow-xs space-y-4"
              style={{ backgroundColor: '#F4F8FE', borderLeft: '5px solid #1886ff' }}
            >
              <div className="flex items-center gap-2.5 text-[#1886ff]">
                <Briefcase className="w-5 h-5 flex-shrink-0" />
                <h2 className="text-lg md:text-xl font-extrabold text-slate-900">
                  Executive Summary: Commercial Debt Resolution Crux
                </h2>
              </div>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-normal">
                When enterprise revenue evaporates due to macroeconomic volatility or supplier defaults, servicing unsecured business credit lines becomes mathematically unviable. The statutory framework in India offers structured compromise mechanisms designed to resolve commercial liabilities lawfully.
              </p>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Unsecured business loans carry zero physical collateral, preventing banks from invoking summary property attachment under the SARFAESI Act.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>RBI 90-day non-performing asset classification mandates steep Tier-1 capital provisioning, motivating bank credit committees to accept One Time Settlements.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Substantial waivers ranging from 40% to 60% on principal balances and 100% on penal charges are standard in bona fide commercial hardship cases.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Director personal guarantees must be explicitly discharged under Section 133 of the Indian Contract Act to isolate personal residential assets.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Statutory notices under Section 138 NI Act and Section 25 PSSA require structured legal replies within statutory limitation deadlines.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Unilateral arbitrator appointments by lenders are legally challengeable under Supreme Court precedents in Perkins Eastman and TRF Limited.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>MSME loan restructuring differs fundamentally from an OTS by extending loan tenures rather than eliminating outstanding debt liabilities.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Settlement payments must be deposited directly into bank-controlled loan accounts, followed by obtaining an unconditional No Dues Certificate.</span>
                </li>
              </ul>
            </section>

            {/* SECTION 1: DEBT ECONOMICS & NPA DYNAMICS */}
            <section id="debt-economics-npa" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Landmark className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  1. Debt Economics &amp; Commercial NPA Classification Dynamics
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Unsecured business loans and commercial credit lines represent high-risk exposures for Indian commercial banks and non-banking financial companies (NBFCs). When a business enterprise encounters acute liquidity stress, supply chain disruption, or client insolvency, the repayment pipeline fractures. Under the Reserve Bank of India Prudential Framework for Resolution of Stressed Assets, loan accounts are categorized into Special Mention Account buckets, starting from SMA-0 for delays up to 30 days, advancing through SMA-1 between 31 and 60 days, and reaching SMA-2 between 61 and 90 days of continuous default.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                On the 91st day of delinquency, the loan account is mandatorily classified as a Non-Performing Asset (NPA). This regulatory trigger imposes stringent Tier-1 capital provisioning requirements on the lending institution, forcing them to lock up between 15% and 100% of the loan value in reserves depending on asset aging. Because unsecured commercial facilities lack registered mortgages or tangible collateral, lenders cannot invoke the summary enforcement powers of the SARFAESI Act 2002. Consequently, banks recognize that prolonged civil court litigation or Debt Recovery Tribunal proceedings yield diminishing returns, making a commercial One Time Settlement (OTS) their most economically prudent recovery strategy.
              </p>
            </section>

            {/* SECTION 2: FINANCIAL BREAKDOWN & SETTLEMENT MATH */}
            <section id="financial-breakdown-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Percent className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  2. Principal vs Penal Interest Breakdown &amp; OTS Financial Math
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Commercial loan defaults trigger an aggressive accumulation of compound interest, overdue charges, and punitive penal interest rates that often range from 24% to 36% annually. Within 12 to 18 months of delinquency, the ledger balance reported by the bank frequently inflates to nearly double the original principal sum. However, under the Reserve Bank of India Fair Practices Code and recent directives on penal charges, lenders are prohibited from capitalizing penal interest into the core principal base. A comprehensive forensic audit strips away these arbitrary compound levies, establishing the true baseline debt.
              </p>
              
              {/* Financial Calculation Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 md:p-6 space-y-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <BadgePercent className="w-5 h-5 text-[#1886ff]" />
                  Representative 180-Day NPA Commercial Settlement Calculation (₹50 Lakh Facility)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                  <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-100">
                    <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider text-rose-600">Bank Ledger Demand (Pre-OTS)</span>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-600">Core Disbursed Principal:</span>
                      <span className="font-semibold text-slate-900">₹50,00,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-600">Accumulated Normal Interest:</span>
                      <span className="font-semibold text-slate-900">₹12,50,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-600">Penal Charges &amp; Bounce Levies:</span>
                      <span className="font-semibold text-rose-600">₹6,00,000</span>
                    </div>
                    <div className="flex justify-between pt-1 font-bold text-slate-900 text-sm">
                      <span>Total Inflated Claim:</span>
                      <span className="text-rose-700">₹68,50,000</span>
                    </div>
                  </div>

                  <div className="bg-blue-50/60 p-4 rounded-xl space-y-2 border border-blue-100">
                    <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider text-[#1886ff]">Negotiated Compromise Settlement</span>
                    <div className="flex justify-between py-1 border-b border-blue-200/60">
                      <span className="text-slate-600">Penal Interest &amp; Fee Waiver:</span>
                      <span className="font-semibold text-emerald-600">100% Waiver (-₹6,00,000)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-blue-200/60">
                      <span className="text-slate-600">Unapplied Overdue Interest:</span>
                      <span className="font-semibold text-emerald-600">100% Waiver (-₹12,50,000)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-blue-200/60">
                      <span className="text-slate-600">Principal Haircut (50% Waiver):</span>
                      <span className="font-semibold text-emerald-600">-₹25,00,000</span>
                    </div>
                    <div className="flex justify-between pt-1 font-bold text-slate-900 text-sm">
                      <span>Final Agreed OTS Payout:</span>
                      <span className="text-emerald-700 font-extrabold">₹25,00,000 (63.5% Total Savings)</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  By presenting verifiable documentation of business insolvency and operating cash flow deficits, professional debt negotiators establish that a prompt ₹25 Lakh recovery yields superior net present value for the bank compared to years of uncollectible provisioning.
                </p>
              </div>
            </section>

            {/* SECTION 3: 4-SIDED BORDERED COMPARISON MATRIX */}
            <section id="resolution-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Scale className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  3. Commercial Resolution Mechanisms: Comparative Strategic Matrix
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian commercial enterprises have multiple avenues to address mounting loan stress. Choosing between one-time compromise settlements, formal MSME restructuring, court litigation, and institutional mediation determines whether an enterprise survives or succumbs to insolvency.
              </p>

              {/* 4-Sided Bordered Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200/80 divide-x divide-slate-200/80">
                      <th className="p-3.5 md:p-4">Resolution Pathway</th>
                      <th className="p-3.5 md:p-4">Debt Haircut Scope</th>
                      <th className="p-3.5 md:p-4">Closure Timeline</th>
                      <th className="p-3.5 md:p-4">Guarantor Liability Status</th>
                      <th className="p-3.5 md:p-4">Credit Score Trajectory</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">One Time Settlement (OTS)</td>
                      <td className="p-3.5 md:p-4 text-emerald-600 font-semibold">40% to 60% Principal + 100% Fees</td>
                      <td className="p-3.5 md:p-4">30 to 90 Days</td>
                      <td className="p-3.5 md:p-4 text-emerald-700 font-medium">Full Legal Discharge via NDC</td>
                      <td className="p-3.5 md:p-4">Settled status, repairable in 12-24m</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">MSME Debt Restructuring</td>
                      <td className="p-3.5 md:p-4 text-amber-600 font-medium">0% Haircut (Tenure extension only)</td>
                      <td className="p-3.5 md:p-4">60 to 120 Days</td>
                      <td className="p-3.5 md:p-4 text-amber-700">Guarantees remain fully active</td>
                      <td className="p-3.5 md:p-4">Standard Restructured tag</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Court / DRT Litigation</td>
                      <td className="p-3.5 md:p-4 text-slate-600">Unpredictable judicial decree</td>
                      <td className="p-3.5 md:p-4 text-rose-600 font-medium">3 to 7 Years</td>
                      <td className="p-3.5 md:p-4 text-rose-700">Persistent personal asset exposure</td>
                      <td className="p-3.5 md:p-4 text-rose-600">Written Off / Suit Filed tag</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Lok Adalat Mediation</td>
                      <td className="p-3.5 md:p-4 text-emerald-600 font-medium">20% to 40% Interest Waivers</td>
                      <td className="p-3.5 md:p-4">Single Session</td>
                      <td className="p-3.5 md:p-4">Decree binding, discharge on pay</td>
                      <td className="p-3.5 md:p-4">Settled through Lok Adalat</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Unmanaged Inaction</td>
                      <td className="p-3.5 md:p-4 text-rose-600 font-semibold">0% (Debt compounds indefinitely)</td>
                      <td className="p-3.5 md:p-4">Indefinite Delinquency</td>
                      <td className="p-3.5 md:p-4 text-rose-700">Severe civil execution risk</td>
                      <td className="p-3.5 md:p-4 text-rose-700 font-bold">Severe degradation (Score &lt; 550)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: TECHNICAL CIBIL ALGORITHM & SCORING MATH */}
            <section id="cibil-commercial-scoring" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <TrendingUp className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  4. Technical CIBIL Algorithm &amp; Commercial Scoring Dynamics
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit evaluation in commercial lending operates on a dual-track framework. The enterprise itself is evaluated via the Company Credit Report (CCR) and assigned a CIBIL Commercial Rank (CMR) ranging from CMR-1 (lowest risk) to CMR-10 (highest risk). Concurrently, directors and partners who executed personal guarantees undergo scrutiny under the individual Credit Information Report (CIR) scored between 300 and 900 points. The underlying algorithmic weighting comprises Payment History (35%), Credit Exposure and Utilization (30%), Credit History Duration (15%), Credit Portfolio Diversity (10%), and Recent Credit Inquiries (10%).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                During default, the Days Past Due (DPD) metric records continuous non-payment, driving the individual score below 600 and degrading the commercial rank to CMR-9 or CMR-10. Executing an OTS temporarily logs the account status as &quot;Settled&quot;. While this reflects a negotiated compromise, it permanently halts negative DPD escalation. Under Section 21 of the Credit Information Companies (Regulation) Act (CICRA) 2005, borrowers retain the statutory right to request bureau record updates upon fulfilling settlement covenants, opening the path for structured score rehabilitation over a 12 to 24 month horizon.
              </p>
            </section>

            {/* SECTION 5: VISUAL INFOGRAPHIC ASSET CARD */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <FileCheck className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  5. Visual Blueprint: 6-Stage Commercial Settlement Architecture
                </h2>
              </div>
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-4 md:p-6 space-y-3">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                  <Image
                    src="/images/infographics/business-loan-settlement-process.jpg"
                    alt="Business Loan Settlement Process in India 6-Stage Strategic Framework"
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 1200px) 100vw, 900px"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-xs text-slate-600">
                  <span>Official CredSettle Framework: Commercial Debt Compromise &amp; Guarantee Discharge</span>
                  <a
                    href="/images/infographics/business-loan-settlement-process.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold flex items-center gap-1"
                  >
                    <span>View High-Resolution Visual</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: STEP-BY-STEP SOP (6 STAGES) */}
            <section id="step-by-step-settlement-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Layers className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  6. Step-by-Step SOP: 6 Stages of Business Loan Compromise
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Navigating commercial debt compromise requires rigorous procedural precision. Following this structured 6-stage Standard Operating Procedure ensures that enterprise liabilities are eliminated lawfully while shielding company leadership from collateral litigation.
              </p>

              <div className="space-y-4">
                {/* Stage 1 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center flex-shrink-0">1</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 1: Forensic Loan &amp; Personal Guarantee Audit</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-10">
                    The resolution begins with an exhaustive forensic examination of original sanction letters, hypothecation deeds, and guarantor clauses. Advocates scrutinize bank statements to identify improper compound interest additions, unapplied penal levies, and whether director guarantees were executed with limited or unlimited exposure covenants.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center flex-shrink-0">2</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 2: Financial Hardship Dossier Compilation</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-10">
                    Establishing genuine commercial distress requires concrete documentary proof. The enterprise compiles audited balance sheets, GST return trend analysis demonstrating severe turnover contraction, uncollectible debtor write-offs, and operating cash deficit reports to prove insolvency to bank credit committees.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center flex-shrink-0">3</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 3: Statutory Legal Notice Defense &amp; Neutralization</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-10">
                    When lenders issue demand notices under Section 138 of the Negotiable Instruments Act or Section 25 of the PSSA for dishonored mandates, legal counsel files structured statutory replies within 15 to 30 days. This establishes commercial bona fides and prevents unilateral judicial escalation.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center flex-shrink-0">4</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 4: Credit Committee Representation &amp; Bilateral Negotiation</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-10">
                    Formal OTS proposals are submitted directly to the bank Competent Authority and Stressed Asset Management Branch. Negotiators demonstrate that accepting a 40% to 60% principal lump sum delivers higher net recovery than multi-year litigation against an enterprise possessing no unencumbered physical assets.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center flex-shrink-0">5</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 5: Settlement Sanction Letter Vetting &amp; Guarantee Discharge</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-10">
                    Before releasing settlement funds, legal experts review the bank formal OTS sanction letter. The document must explicitly stipulate full waiver of remaining balances, irrevocable discharge of all personal and corporate guarantors under Section 133 of the Indian Contract Act, and prompt withdrawal of legal claims.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 font-bold text-xs flex items-center justify-center flex-shrink-0">6</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 6: Direct Remittance, No Dues Certificate &amp; CIBIL Upgrade</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-10">
                    The agreed compromise amount is remitted directly into the enterprise designated loan account via RTGS. Upon clearance, the bank issues an unconditional No Dues Certificate (NDC), returns all un-cashed security cheques, and transmits updated settlement records to credit information bureaus.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: STATUTORY NOTICE DEFENSE & LEGAL RIGHTS */}
            <section id="statutory-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Gavel className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  7. Statutory Notice Defense &amp; Legal Rights of Borrowers
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                During delinquency, lenders deploy a spectrum of legal instruments to exert recovery pressure. Understanding the analytical defenses available under Indian banking and corporate law empowers business owners to counter intimidation effectively.
              </p>

              {/* 4-Card Analytical Grid (Strictly NO letter drafts or monospace templates) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <ShieldAlert className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <span>Section 25 Payment &amp; Settlement Systems Act</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Applies when recurring NACH or e-mandate auto-debit requests dishonor due to insufficient funds. The legal defense establishes lack of criminal mens rea, demonstrating that default stemmed from bona fide commercial illiquidity rather than fraudulent intent, paving the way for civil compromise.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <FileText className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <span>Section 138 Negotiable Instruments Act</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Invoked when undated security cheques collected during loan origination are deposited and bounced. Legal defense asserts that blank security instruments do not constitute discharge of an existing liquidated debt under established Supreme Court precedents, compelling lenders toward settlement.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <Scale className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <span>Section 21 Arbitration Act &amp; Perkins Ruling</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders frequently issue arbitration invocation notices appointing unilateral private arbitrators. Under the Supreme Court landmark judgments in Perkins Eastman Architects and TRF Ltd, unilateral appointments are de jure invalid under Section 12(5), forcing lenders to abandon biased tribunals.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>DRT Jurisdiction &amp; Fair Practices Code</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Debt Recovery Tribunal (DRT) claims under Section 19 of the RDBFI Act apply exclusively to aggregate dues exceeding ₹20 Lakhs. Borrowers are shielded by the RBI Fair Practices Code, which strictly prohibits third-party harassment, workplace intimidation, or unsanctioned asset seizures.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-TIER ESCALATION MATRIX */}
            <section id="three-tier-escalation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Building2 className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  8. 3-Tier Institutional Grievance &amp; Escalation Matrix
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When local bank recovery branches engage in coercive recovery practices or unreasonably stall compromise negotiations, borrowers can invoke the statutory 3-tier grievance machinery established under Reserve Bank of India mandates.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">Tier 1: Bank GRO</span>
                    <span className="text-[11px] font-bold text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">7-10 Days</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Direct submission to the Bank Internal Grievance Redressal Officer regarding unfair fee additions, harassment by recovery agents, or unresponsiveness to restructuring applications.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">Tier 2: Bank PNO</span>
                    <span className="text-[11px] font-bold text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">14-21 Days</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Escalation to the Bank Principal Nodal Officer at the apex zonal headquarters to break negotiation deadlocks and secure inter-departmental approvals for higher settlement haircuts.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">Tier 3: RBI Ombudsman</span>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">cms.rbi.org.in</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Statutory complaint filing under the RBI Integrated Ombudsman Scheme for persistent violations of the Fair Practices Code, coercive tactics, or failure to issue settlement documents.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: CHRONOLOGICAL TIMELINE TABLE */}
            <section id="chronological-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Clock className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  9. Chronological Resolution Timeline: From Delinquency to Clean NDC
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A structured business loan compromise follows a predictable chronological trajectory over a 6-month lifecycle, transitioning from initial financial strain to total debt freedom.
              </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200/80 divide-x divide-slate-200/80">
                      <th className="p-3.5 md:p-4">Timeframe</th>
                      <th className="p-3.5 md:p-4">Account Status</th>
                      <th className="p-3.5 md:p-4">Banking &amp; Legal Action</th>
                      <th className="p-3.5 md:p-4">Strategic Counter-Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Days 1 to 30</td>
                      <td className="p-3.5 md:p-4 text-blue-700 font-medium">SMA-0 Category</td>
                      <td className="p-3.5 md:p-4">Automated payment reminders and tele-calling</td>
                      <td className="p-3.5 md:p-4">Cash flow assessment and internal budget isolation</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Days 31 to 90</td>
                      <td className="p-3.5 md:p-4 text-amber-700 font-medium">SMA-1 / SMA-2</td>
                      <td className="p-3.5 md:p-4">Loan recall notices and recovery visits</td>
                      <td className="p-3.5 md:p-4">Compilation of financial hardship dossier and audit</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Day 91+</td>
                      <td className="p-3.5 md:p-4 text-rose-700 font-semibold">NPA Classification</td>
                      <td className="p-3.5 md:p-4">Mandatory capital provisioning by bank</td>
                      <td className="p-3.5 md:p-4">Formal OTS proposal submission to Stressed Assets Desk</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Month 4 to 5</td>
                      <td className="p-3.5 md:p-4 text-purple-700 font-medium">Active Negotiation</td>
                      <td className="p-3.5 md:p-4">Section 138 / Section 25 legal notices</td>
                      <td className="p-3.5 md:p-4">Legal notice response and Credit Committee hearings</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Month 6</td>
                      <td className="p-3.5 md:p-4 text-emerald-700 font-bold">Debt Discharged</td>
                      <td className="p-3.5 md:p-4">Settlement sanction letter issued by bank</td>
                      <td className="p-3.5 md:p-4">Direct remittance, No Dues Certificate &amp; CIBIL update</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS */}
            <section id="real-world-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <AlertCircle className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  10. Specialized Real-World Commercial Scenarios &amp; Case Commentary
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Every enterprise debt crisis features unique corporate governance nuances. Understanding how specialized scenarios play out under Indian banking jurisprudence ensures tailored legal defense strategies.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Multi-Lender Fintech &amp; NBFC Stacking</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Fast-growing businesses often stack multiple unsecured digital business loans. When revenue stalls, cross-default clauses trigger simultaneous recoveries. The solution involves consolidated bilateral negotiations, settling loans sequentially based on lender provisioning urgency.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Corporate Layoffs &amp; Severe Revenue Contraction</h3>
                  <p className="text-slate-600 leading-relaxed">
                    In Private Limited entities facing sharp client churn, directors worry about personal wealth attachment. If no personal guarantee was furnished, corporate limited liability shields directors. Where guarantees exist, settlement negotiations must bundle full guarantor release.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Sole Proprietorship Unlimited Liability</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Sole proprietors possess no separate corporate identity, exposing personal residential assets to civil attachment risks. Negotiating a swift OTS eliminates the underlying debt before lenders can obtain civil court execution decrees against family real estate.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Asset Reconstruction Company (ARC) Assignments</h3>
                  <p className="text-slate-600 leading-relaxed">
                    When banks sell stressed commercial loans to ARCs under SARFAESI Section 5 at deep 70% discounts, the ARC is highly motivated to accept aggressive compromise settlements yielding 50% to 70% debt waivers for immediate cash realization.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: COMPANY PROFILE COMPONENT */}
            <section id="company-profile" className="scroll-target">
              <CompanySection />
            </section>

            {/* SECTION 12: 10 SYNCHRONIZED FAQS */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <HelpCircle className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  Frequently Asked Questions: Business Loan Settlement
                </h2>
              </div>
              <p className="text-xs md:text-sm text-slate-600">
                Key legal and financial inquiries regarding commercial loan settlements, MSME rights, and debt compromise procedures in India.
              </p>

              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all duration-200"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 md:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-xs md:text-sm hover:text-[#1886ff] transition-colors"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={'w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ' + (
                            isOpen ? 'rotate-180 text-[#1886ff]' : ''
                          )}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 md:px-5 md:pb-5 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: CITATIONS & OUTBOUND AUTHORITY GRID */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Award className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg md:text-xl font-bold text-slate-900">
                  Statutory Citations &amp; Institutional Authorities
                </h2>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                CredSettle resolution procedures strictly adhere to statutory frameworks including the Reserve Bank of India Prudential Framework for Resolution of Stressed Assets (2019), Micro Small and Medium Enterprises Development Act (2006), Credit Information Companies (Regulation) Act (2005), Section 138 Negotiable Instruments Act (1881), Section 25 Payment and Settlement Systems Act (2007), Section 21 Arbitration and Conciliation Act (1996), and Section 133 Indian Contract Act (1872).
              </p>

              {/* Outbound Badges */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                  Verified Statutory Portals &amp; Regulators:
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>Reserve Bank of India (rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>RBI Integrated Ombudsman (cms.rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>TransUnion CIBIL India (cibil.com)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>India Code Legislative Repository (indiacode.nic.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>National Legal Services Authority (nalsa.gov.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>National Cyber Crime Portal (cybercrime.gov.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Internal Related Badges */}
              <div className="space-y-2 pt-3 border-t border-slate-200/80">
                <span className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                  Related CredSettle Legal &amp; Settlement Guides:
                </span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/best-lawyer-for-business-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Business Loan Settlement Lawyer
                  </Link>
                  <Link href="/best-lawyer-for-MSME-loan-recovery-defence" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    MSME Loan Recovery Defense
                  </Link>
                  <Link href="/best-lawyer-for-company-loan-matters" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Company Loan Matters Legal Expert
                  </Link>
                  <Link href="/best-lawyer-for-arc-loan-assignment-dispute" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    ARC Loan Assignment Dispute
                  </Link>
                  <Link href="/best-lawyer-for-consortium-loan-recovery-defence" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Consortium Loan Recovery Defense
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed Status
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement Meaning
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score After OTS
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC Certificate After Settlement
                  </Link>
                </div>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="space-y-5 sticky top-6">
            
            {/* Card 1: Author Bio Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Link
                  href="/author/ashish-jhangra"
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-extrabold text-sm hover:bg-blue-200 transition-colors flex-shrink-0"
                  title="View Ashish Jhangra Profile"
                >
                  AJ
                </Link>
                <div>
                  <Link
                    href="/author/ashish-jhangra"
                    className="text-sm font-bold text-slate-900 hover:text-[#1886ff] transition-colors block"
                  >
                    Ashish Jhangra
                  </Link>
                  <p className="text-[11px] font-semibold text-[#1886ff]">
                    Legal &amp; Debt Resolution Professional
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialized in commercial debt resolution, MSME banking compliance, director guarantee isolation, and NPA compromise negotiations with deep expertise across Indian banking and tribunal forums.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <Link
                  href="/author/ashish-jhangra"
                  className="text-[#1886ff] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>View Author Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> CredSettle Panel
                </span>
              </div>
            </div>

            {/* Card 2: Emergency CTA Card (#2452ae Background) */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  100% CONFIDENTIAL COMMERCIAL DEFENSE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Facing Business Loan Default?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our commercial debt specialists represent your enterprise before bank credit committees, stop harassment, isolate personal guarantees, and negotiate 40% to 60% principal waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Facing Business Loan Default? Get Legal Defense
              </Link>
              <div className="pt-2 flex flex-col items-center justify-center gap-1 text-[11px] text-blue-200">
                <div className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-blue-200" />
                  <a href="tel:+918800226635" className="hover:underline font-bold text-white">
                    Call: +91-8800226635
                  </a>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-blue-300">
                  <Lock className="w-3 h-3" />
                  <span>Direct Bank Settlement • RBI Compliant</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">The CredSettle Advantage</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Success-linked commercial settlement fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> Zero third-party fund pooling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Guarantor Protection:</strong> Full legal discharge under Indian Contract Act.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Experienced commercial resolution counsel.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Commercial Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/best-lawyer-for-business-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Best Lawyer for Business Loan Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">MSME debt defense &amp; OTS guide &rarr;</span>
                </Link>

                <Link
                  href="/best-lawyer-for-MSME-loan-recovery-defence"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    MSME Loan Recovery Defense in India
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Statutory rights under MSMED Act &rarr;</span>
                </Link>

                <Link
                  href="/convert-settled-status-to-closed"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Convert Settled Loan to Closed Status
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Clean credit report blueprint &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
`;

fs.writeFileSync(path.join(targetDir, 'BusinessLoanSettlementProcessClient.tsx'), clientContent, 'utf8');
console.log('BusinessLoanSettlementProcessClient.tsx written successfully');
