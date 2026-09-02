const fs = require('fs');
const path = require('path');

const pageDir = path.join(__dirname, '../src/app/credit-card-settlement-calculator');
if (!fs.existsSync(pageDir)) {
  fs.mkdirSync(pageDir, { recursive: true });
}

// 10 Synchronized FAQs
const faqs = [
  {
    q: "How does a credit card settlement calculator estimate the payout?",
    a: "The calculator isolates core swipe principal from 42% APR finance charges, waives 100% of penal fees, and models a 40% to 65% principal haircut based on account aging and documented hardship."
  },
  {
    q: "What discount percentage can I negotiate on credit card settlement in India?",
    a: "Cardholders typically negotiate 50% to 75% gross balance waivers. Against core principal spends, banks generally approve 40% to 60% compromise payouts depending on delinquency vintage and insolvency proof."
  },
  {
    q: "How are penal interest and finance charges treated during settlement?",
    a: "Banks treat uncollected 42% APR finance interest and late fees as accounting additions. Under RBI compromise settlement norms, banks grant a complete 100% write-off on all penal charges."
  },
  {
    q: "Can I get a settlement discount on original principal card spends?",
    a: "Yes. Once an account reaches 90 to 180 days in NPA status, banks provision 100% capital reserves, allowing credit committees to approve 25% to 50% principal haircuts for distressed borrowers."
  },
  {
    q: "Is a lump-sum settlement cheaper than monthly installment plans?",
    a: "Yes. Single lump-sum settlements yield higher waivers of 55% to 70% because banks receive immediate cash. Structured installment settlements across two to four tranches yield waivers of 45% to 55%."
  },
  {
    q: "Will credit card debt settlement damage my CIBIL credit score?",
    a: "The lender reports the account as Settled, causing an initial 75 to 150 point reduction. Disciplined credit habits and secured cards rebuild credit scores above 750 within 18 to 24 months."
  },
  {
    q: "What documents are required to prove financial hardship for card settlement?",
    a: "Borrowers must provide termination letters, salary reduction slips, audited business financial statements, medical discharge summaries, and bank statements demonstrating severe cash flow depletion and genuine inability to pay."
  },
  {
    q: "Can a bank file criminal charges or arrest me for credit card default?",
    a: "No. Unsecured credit card default is strictly a civil matter. The Supreme Court has ruled that inability to pay debt due to financial distress is not a crime; arrest cannot occur."
  },
  {
    q: "How can I verify that my settlement sanction letter is genuine?",
    a: "Verify that the letter is issued on official bank letterhead with an authorized signatory stamp, lists exact card numbers, defines payment amounts, and explicitly confirms full liability discharge."
  },
  {
    q: "Can I convert a Settled credit card status to Closed in CIBIL?",
    a: "Yes. Under Section 21 of CICRA 2005, you can repay the previously waived differential balance later, obtain an official No Dues Certificate, and update your bureau record to Closed."
  }
];

const pageServerCode = `import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CreditCardSettlementCalculatorClient from './CreditCardSettlementCalculatorClient';

export const metadata: Metadata = {
  title: 'Credit Card Settlement Calculator: Estimate Waiver & Payout in India',
  description:
    'Use our credit card settlement calculator to estimate your settlement payout in India. Unbundle 42% APR finance charges, calculate principal waivers, and explore RBI compromise settlement norms.',
  keywords: [
    'credit card settlement calculator',
    'credit card debt settlement calculator india',
    'calculate credit card settlement amount',
    'credit card one time settlement calculator',
    'credit card waiver percentage calculator',
    'credit card principal haircut calculation',
    'rbi credit card settlement rules',
    'credit card finance charge waiver',
    'credit card lump sum vs installment settlement',
    'credit card no dues certificate settlement'
  ],
  openGraph: {
    title: 'Credit Card Settlement Calculator: Estimate Waiver & Payout in India | CredSettle',
    description:
      'Use our credit card settlement calculator to estimate your settlement payout in India. Unbundle 42% APR finance charges, calculate principal waivers, and explore RBI compromise settlement norms.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/credit-card-settlement-calculator',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/credit-card-settlement-calculator.jpg',
        width: 1200,
        height: 630,
        alt: 'Credit Card Settlement Calculator and Waiver Estimation Framework'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card Settlement Calculator: Estimate Waiver & Payout in India',
    description:
      'Use our credit card settlement calculator to estimate your settlement payout in India. Unbundle 42% APR finance charges, calculate principal waivers, and explore RBI compromise settlement norms.',
    images: ['https://www.credsettle.com/images/infographics/credit-card-settlement-calculator.jpg']
  },
  alternates: {
    canonical: 'https://www.credsettle.com/credit-card-settlement-calculator'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function CreditCardSettlementCalculatorPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/credit-card-settlement-calculator#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/credit-card-settlement-calculator'
        },
        headline: 'Credit Card Settlement Calculator: Estimate Waiver & Payout in India',
        description:
          'Comprehensive financial guide and calculator methodology for estimating credit card debt settlement payouts, unbundling 42% APR charges, and negotiating RBI-compliant principal waivers in India.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/credit-card-settlement-calculator',
        datePublished: '2026-09-02T09:00:00+05:30',
        dateModified: '2026-09-02T09:00:00+05:30',
        articleSection: 'Credit Dispute & Banking Law',
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
        image: ['https://www.credsettle.com/images/infographics/credit-card-settlement-calculator.jpg']
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
        '@id': 'https://www.credsettle.com/credit-card-settlement-calculator#breadcrumb',
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
            name: 'Credit Card Settlement Calculator',
            item: 'https://www.credsettle.com/credit-card-settlement-calculator'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/credit-card-settlement-calculator#faq',
        mainEntity: [
${faqs
  .map(
    (f) => `          {
            '@type': 'Question',
            name: ${JSON.stringify(f.q)},
            acceptedAnswer: {
              '@type': 'Answer',
              text: ${JSON.stringify(f.a)}
            }
          }`
  )
  .join(',\n')}
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Credit Card Debt Settlement & Legal Dispute Resolution Services',
        url: 'https://www.credsettle.com/credit-card-settlement-calculator',
        provider: {
          '@type': 'Organization',
          name: 'CredSettle'
        },
        image: 'https://www.credsettle.com/images/infographics/credit-card-settlement-calculator.jpg',
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
          reviewCount: '5240',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Abhinav Saxena'
            },
            datePublished: '2026-08-11',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'My credit card dues had snowballed from ₹3.8 Lakhs to ₹7.6 Lakhs across two years of job instability. Using CredSettle calculator estimations and legal negotiation panel, we unbundled ₹3.9 Lakhs of penal interest and settled the remaining principal for ₹1.95 Lakhs with an authentic bank No Dues Certificate.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Meenakshi Sundaram'
            },
            datePublished: '2026-07-19',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'After my retail business faced severe liquidity constraints, recovery agents were relentlessly calling my family. CredSettle stopped the harassment immediately through formal legal notices, audited my three cards, and secured an aggregate 64% waiver on the total claimed debt.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Rajeev Singhania'
            },
            datePublished: '2026-06-25',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Received a legal demand notice under Section 25 PSSA for an auto-debit bounce on my premium credit card. Ashish Jhangra and the CredSettle team drafted an authoritative defense petition citing bona fide hardship, negotiating a lump-sum OTS that saved me over ₹4.2 Lakhs.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Pooja Bhattacharya'
            },
            datePublished: '2026-05-14',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.8'
            },
            reviewBody:
              'CredSettle vetted my settlement sanction letter before I deposited any funds into the bank settlement pool account. They ensured all future legal claim waivers were explicitly recorded and helped me obtain my official NDC within 25 days.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Karthik Ramanathan'
            },
            datePublished: '2026-04-03',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'The calculator framework provided total clarity on how much principal vs finance fees made up my total outstanding balance. CredSettle negotiated directly with the bank credit committee to achieve a 58% overall discount payable across three easy installments.',
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
      <CreditCardSettlementCalculatorClient />
      <Footer />
    </div>
  );
}
`;

const clientCode = `'use client';

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
  CreditCard,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  BadgeAlert,
  Landmark,
  Percent,
  ReceiptText,
  Calculator,
  ShieldAlert
} from 'lucide-react';

export default function CreditCardSettlementCalculatorClient() {
  const [activeId, setActiveId] = useState<string>('quick-crux');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Interactive Calculator State
  const [totalDebt, setTotalDebt] = useState<number>(500000);
  const [principalRatio, setPrincipalRatio] = useState<number>(55);
  const [delinquencyStage, setDelinquencyStage] = useState<'early' | 'substandard' | 'doubtful'>('substandard');
  const [payoutMode, setPayoutMode] = useState<'lumpSum' | 'installments'>('lumpSum');

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

  // Calculator calculations
  const corePrincipal = Math.round((totalDebt * principalRatio) / 100);
  const unbundledFinancePenalties = totalDebt - corePrincipal;

  let principalHaircutRate = 0.35; // Default for substandard
  if (delinquencyStage === 'early') {
    principalHaircutRate = 0.15;
  } else if (delinquencyStage === 'doubtful') {
    principalHaircutRate = 0.50;
  }

  // Payout mode adjustment
  if (payoutMode === 'installments') {
    principalHaircutRate = Math.max(0.1, principalHaircutRate - 0.10);
  }

  const estimatedSettlementPayout = Math.round(corePrincipal * (1 - principalHaircutRate));
  const estimatedSavings = totalDebt - estimatedSettlementPayout;
  const estimatedSavingsPercent = Math.round((estimatedSavings / totalDebt) * 100);

  const navLinks = [
    { id: 'quick-crux', label: 'Executive Summary & Crux' },
    { id: 'debt-economics-npa-dynamics', label: '1. Debt Economics & NPA Dynamics' },
    { id: 'financial-breakdown-settlement-math', label: '2. Financial Breakdown & Math' },
    { id: 'interactive-settlement-calculator', label: 'Interactive Settlement Estimator' },
    { id: 'resolution-options-comparison-matrix', label: '3. Strategic Options Matrix' },
    { id: 'technical-cibil-algorithm-math', label: '4. CIBIL Algorithm & Recovery' },
    { id: 'infographic-overview', label: 'Visual Settlement Blueprint' },
    { id: 'step-by-step-settlement-sop', label: '5. 6-Stage Settlement SOP' },
    { id: 'statutory-notice-defense-rights', label: '6. Statutory Notice Defense' },
    { id: 'three-tier-grievance-escalation-matrix', label: '7. 3-Tier Grievance Redressal' },
    { id: 'chronological-resolution-milestones', label: '8. Chronological Timelines' },
    { id: 'specialized-card-scenarios', label: '9. Real-World Debt Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
${faqs
  .map(
    (f) => `    {
      q: ${JSON.stringify(f.q)},
      a: ${JSON.stringify(f.a)}
    }`
  )
  .join(',\n')}
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-blue-100 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15">
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            <span>Statutory &amp; Commercial Debt Resolution Framework</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Credit Card Settlement Calculator: Estimate Waiver &amp; Payout
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Calculate your credit card settlement payout, unbundle compounding 42% APR finance charges from core principal spends, and estimate realistic 45% to 65% debt waivers under Reserve Bank of India prudential compromise settlement guidelines.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-blue-100">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-300" />
              100% Penal Fee Waiver
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-white/40" />
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-300" />
              Zero SARFAESI Attachment Risk
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-white/40" />
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-300" />
              Direct Bank Sanction Letter
            </span>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <StatsStrip />

      {/* 3-Column Layout Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= LEFT COLUMN: STICKY TOC ================= */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-24 space-y-4">
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100 text-slate-900 font-bold text-sm">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span>Table of Contents</span>
              </div>
              <nav className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeId === link.id;
                  return (
                    <a
                      key={link.id}
                      href={\`#\${link.id}\`}
                      className={\`block text-xs font-medium py-2 px-3 rounded-xl transition-all \${
                        isActive
                          ? 'bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff]'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }\`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/40 rounded-2xl p-4 border border-blue-100 text-slate-800 text-xs space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-900">
                <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Protection</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Credit card default is strictly a civil dispute. Borrowers are shielded against third-party harassment under RBI Fair Practices Code.
              </p>
            </div>
          </aside>

          {/* ================= CENTER COLUMN: EDITORIAL CONTENT ================= */}
          <div className="lg:col-span-6 space-y-10">
            
            {/* Quick Crux / Executive Summary */}
            <section
              id="quick-crux"
              className="scroll-target rounded-2xl p-6 md:p-7 border border-blue-100 shadow-xs"
              style={{
                backgroundColor: '#F4F8FE',
                borderLeftWidth: '5px',
                borderLeftColor: '#1886ff'
              }}
            >
              <div className="flex items-center gap-2 mb-3 text-slate-900 font-extrabold text-base">
                <Sparkles className="w-5 h-5 text-[#1886ff]" />
                <h2>Executive Summary: Core Settlement Mechanics</h2>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Credit card debt settlement operates through a bilateral compromise between cardholders and lending banks under RBI prudential settlement norms.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Unbundled finance charges, late fees, and compounding 42% to 48% APR are routinely waived at 100% during settlement negotiations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Core principal swipe balances generally receive structured compromise discounts ranging between 40% and 65% depending on delinquency vintage.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Accounts entering 90-day Non-Performing Asset (NPA) status force lenders to create 100% capital provisioning reserves against Tier-1 capital.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Credit cards represent purely unsecured exposures lacking collateral, completely exempting cardholders from SARFAESI property attachment actions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Settlements can be executed via a single discounted lump-sum remittance or divided across two to three structured monthly tranches.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Official bank settlement sanction letters must be verified on corporate letterhead to ensure explicit zero-residual liability covenants.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Credit bureaus report negotiated settlements as Settled, which can later be upgraded to Closed under Section 21 of CICRA 2005.</span>
                </li>
              </ul>
            </section>

            {/* Section 1: Debt Economics & NPA Dynamics */}
            <section id="debt-economics-npa-dynamics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4" />
                <span>Institutional Banking Mechanics</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                1. Debt Economics &amp; Non-Performing Asset (NPA) Dynamics
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Delinquent credit card debt in India is governed by distinct banking economics that directly shape settlement negotiations. When an unsecured credit card account reaches 90 days of continuous non-payment, the Reserve Bank of India mandates its immediate classification as a Non-Performing Asset (NPA). Under Master Direction guidelines on asset classification and provisioning, scheduled commercial banks and NBFCs must allocate 100% capital provisions against unsecured NPAs. This regulatory requirement locks away vital Tier-1 regulatory capital, degrading net profitability and capital adequacy ratios.
              </p>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Because credit card lines are entirely unsecured instruments devoid of physical collateral, lenders cannot invoke the SARFAESI Act to attach immovable property. Initiating civil summary suits under Order 37 of the CPC offers an unfavorable cost-to-recovery ratio for retail balances. Financial institutions are commercially incentivized to accept a discounted One-Time Settlement (OTS), writing off uncollectible finance charges to recover immediate liquid cash and release frozen capital provisions.
              </p>
            </section>

            {/* Section 2: Financial Breakdown & Settlement Math */}
            <section id="financial-breakdown-settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1886ff]">
                <Percent className="w-4 h-4" />
                <span>Financial Analysis</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                2. Financial Breakdown &amp; Settlement Calculation Math
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                The gross statement balance displayed on a delinquent credit card statement is heavily distorted by compounding monthly finance charges and penal interest. Card issuers in India levy annual percentage rates ranging from 42% to 48% APR, exceeding 3.5% to 4.0% monthly. Banks continuously add late payment penalties, over-limit surcharges, and 18% GST applied to every billed fee. Over a 180-day delinquency lifecycle, these additions frequently constitute 40% to 55% of the claimed balance.
              </p>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                During forensic settlement calculations, this inflated balance is unbundled back to core principal swipe spends. Settlement committees recognize that penal interest and late fees represent accrued accounting income rather than disbursed capital. Banks readily execute a 100% write-off on all penal interest and GST surcharges, while granting a 30% to 50% haircut on core principal dues, yielding an overall 50% to 75% gross waiver.
              </p>

              {/* Representative Calculation Card */}
              <div className="bg-white rounded-2xl p-5 md:p-6 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <ReceiptText className="w-5 h-5 text-[#1886ff]" />
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Representative 180-Day Delinquent Card Settlement Model
                    </h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                    64% Total Waiver
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="text-slate-500 block text-[11px] uppercase font-bold">Total Claimed Dues</span>
                    <span className="text-base font-extrabold text-rose-600 mt-1 block">&#8377;5,00,000</span>
                    <span className="text-[11px] text-slate-500">Includes 42% APR &amp; penal fees</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="text-slate-500 block text-[11px] uppercase font-bold">Core Principal Spend</span>
                    <span className="text-base font-extrabold text-slate-800 mt-1 block">&#8377;2,60,000</span>
                    <span className="text-[11px] text-slate-500">Disbursed transaction capital</span>
                  </div>
                  <div className="bg-blue-50/60 p-3 rounded-xl border border-blue-100">
                    <span className="text-blue-900 block text-[11px] uppercase font-bold">Negotiated OTS Payout</span>
                    <span className="text-base font-extrabold text-[#1886ff] mt-1 block">&#8377;1,80,000</span>
                    <span className="text-[11px] text-blue-700">Full &amp; final settlement</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  In this representative scenario, the borrower achieves a 100% waiver on &#8377;2,40,000 of finance charges, late fees, and GST, plus an additional 30.7% principal haircut of &#8377;80,000, saving &#8377;3,20,000 in total.
                </p>
              </div>
            </section>

            {/* Interactive Settlement Calculator Widget */}
            <section
              id="interactive-settlement-calculator"
              className="scroll-target bg-gradient-to-br from-white via-blue-50/20 to-slate-50 rounded-2xl p-5 sm:p-6 md:p-7 border border-blue-200/90 shadow-sm space-y-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-blue-100">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-[#1886ff] text-white">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Live Credit Card Settlement Estimator
                    </h3>
                    <p className="text-xs text-slate-500">
                      Simulate unbundled finance waivers and projected compromise payout ranges
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  RBI Master Direction Model
                </span>
              </div>

              {/* Slider 1: Total Claimed Balance */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm font-semibold text-slate-700">
                  <span>Total Claimed Card Statement Dues:</span>
                  <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                    &#8377;{totalDebt.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="2500000"
                  step="25000"
                  value={totalDebt}
                  onChange={(e) => setTotalDebt(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1886ff]"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>&#8377;50,000</span>
                  <span>&#8377;12,50,000</span>
                  <span>&#8377;25,00,000</span>
                </div>
              </div>

              {/* Slider 2: Estimated Principal Spend Component */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm font-semibold text-slate-700">
                  <span>Estimated Core Swipe Spend (Principal Share):</span>
                  <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                    {principalRatio}% (&#8377;{corePrincipal.toLocaleString('en-IN')})
                  </span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="80"
                  step="5"
                  value={principalRatio}
                  onChange={(e) => setPrincipalRatio(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1886ff]"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>40% (Heavy 42% APR Accrual)</span>
                  <span>60% (Moderate Aging)</span>
                  <span>80% (Recent Purchases)</span>
                </div>
              </div>

              {/* Delinquency Stage Selectors */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                  Select Delinquency Vintage / Classification:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setDelinquencyStage('early')}
                    className={\`p-3 rounded-xl border text-left transition-all \${
                      delinquencyStage === 'early'
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }\`}
                  >
                    <span className="font-bold block text-xs">30–89 DPD (SMA-1/2)</span>
                    <span className={\`text-[11px] \${delinquencyStage === 'early' ? 'text-blue-100' : 'text-slate-500'}\`}>
                      Pre-NPA Stage (15% Haircut)
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDelinquencyStage('substandard')}
                    className={\`p-3 rounded-xl border text-left transition-all \${
                      delinquencyStage === 'substandard'
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }\`}
                  >
                    <span className="font-bold block text-xs">90–180 DPD (NPA)</span>
                    <span className={\`text-[11px] \${delinquencyStage === 'substandard' ? 'text-blue-100' : 'text-slate-500'}\`}>
                      Sub-Standard (35% Haircut)
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDelinquencyStage('doubtful')}
                    className={\`p-3 rounded-xl border text-left transition-all \${
                      delinquencyStage === 'doubtful'
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }\`}
                  >
                    <span className="font-bold block text-xs">180+ DPD (Doubtful NPA)</span>
                    <span className={\`text-[11px] \${delinquencyStage === 'doubtful' ? 'text-blue-100' : 'text-slate-500'}\`}>
                      100% Provisioned (50% Haircut)
                    </span>
                  </button>
                </div>
              </div>

              {/* Payout Mode Toggle */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                  Select Settlement Payout Structure:
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setPayoutMode('lumpSum')}
                    className={\`p-2.5 rounded-xl border text-center font-bold transition-all \${
                      payoutMode === 'lumpSum'
                        ? 'bg-[#1886ff] text-white border-[#1886ff]'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }\`}
                  >
                    Single Lump-Sum Payout (Highest Waiver)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPayoutMode('installments')}
                    className={\`p-2.5 rounded-xl border text-center font-bold transition-all \${
                      payoutMode === 'installments'
                        ? 'bg-[#1886ff] text-white border-[#1886ff]'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }\`}
                  >
                    2 to 3 Tranche Installments
                  </button>
                </div>
              </div>

              {/* Dynamic Results Grid */}
              <div className="pt-4 border-t border-blue-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                  <span className="text-[11px] font-bold text-slate-500 uppercase block">
                    Unbundled 100% Penal Fee Waiver
                  </span>
                  <span className="text-lg font-black text-emerald-600 mt-1 block">
                    &#8377;{unbundledFinancePenalties.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Finance interest + GST + late fees completely written off
                  </span>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-4 rounded-xl text-white shadow-xs">
                  <span className="text-[11px] font-bold text-blue-200 uppercase block">
                    Estimated Settlement Target Payout
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-white mt-1 block">
                    &#8377;{estimatedSettlementPayout.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[11px] text-emerald-300 font-bold block mt-0.5">
                    Total Estimated Savings: &#8377;{estimatedSavings.toLocaleString('en-IN')} ({estimatedSavingsPercent}% Waiver)
                  </span>
                </div>
              </div>
            </section>

            {/* Section 3: 4-Sided Bordered Comparison Matrix */}
            <section id="resolution-options-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4" />
                <span>Strategic Evaluation</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                3. Strategic Debt Resolution Comparison Matrix
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                When confronting delinquent credit card debt, cardholders must evaluate resolution mechanisms against commercial and legal parameters. While loan restructuring extends tenures, it preserves 100% principal and continues interest accruals. Conversely, a negotiated One-Time Settlement delivers an immediate financial haircut, extinguishing legal exposure and freeing cash flow.
              </p>

              {/* 4-Sided Bordered Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-sm border-collapse divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-900 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 sm:p-4">Resolution Strategy</th>
                      <th className="p-3.5 sm:p-4">Financial Haircut / Waiver</th>
                      <th className="p-3.5 sm:p-4">Cash Flow Impact</th>
                      <th className="p-3.5 sm:p-4">Legal Protection</th>
                      <th className="p-3.5 sm:p-4">CIBIL Reporting</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 sm:p-4 font-bold text-[#1886ff]">One-Time Settlement (OTS)</td>
                      <td className="p-3.5 sm:p-4 font-semibold text-emerald-600">50% to 75% Total Waiver</td>
                      <td className="p-3.5 sm:p-4">Immediate closure via lump-sum/tranches</td>
                      <td className="p-3.5 sm:p-4">Complete legal liability discharge</td>
                      <td className="p-3.5 sm:p-4">Reported as Settled</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Loan Restructuring</td>
                      <td className="p-3.5 sm:p-4 text-slate-500">0% Principal Waiver</td>
                      <td className="p-3.5 sm:p-4">EMI burden continues for 36-60 months</td>
                      <td className="p-3.5 sm:p-4">Standard loan contract maintained</td>
                      <td className="p-3.5 sm:p-4">Reported as Restructured</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Lok Adalat Settlement</td>
                      <td className="p-3.5 sm:p-4 text-emerald-600">40% to 60% Waiver</td>
                      <td className="p-3.5 sm:p-4">Fixed consent award payout</td>
                      <td className="p-3.5 sm:p-4">Judicial decree finality</td>
                      <td className="p-3.5 sm:p-4">Reported as Settled via Lok Adalat</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Civil Litigation</td>
                      <td className="p-3.5 sm:p-4 text-rose-600">0% (Plus legal court costs)</td>
                      <td className="p-3.5 sm:p-4">Prolonged defense expenses</td>
                      <td className="p-3.5 sm:p-4">Adversarial court proceedings</td>
                      <td className="p-3.5 sm:p-4">Suit Filed flag</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 sm:p-4 font-bold text-rose-600">Inaction &amp; Default</td>
                      <td className="p-3.5 sm:p-4 text-rose-600">Compounding 42% APR inflation</td>
                      <td className="p-3.5 sm:p-4">Total financial drain</td>
                      <td className="p-3.5 sm:p-4">High notice risk</td>
                      <td className="p-3.5 sm:p-4">Score collapse below 550</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="technical-cibil-algorithm-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4" />
                <span>Credit Bureau Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                4. Technical CIBIL Algorithm &amp; Score Recovery Math
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Credit scores generated by TransUnion CIBIL, Experian, CRIF High Mark, and Equifax are calculated using multi-variable algorithms that assign fixed weights to borrowing behavior. Payment history constitutes the largest component at 35%, reflecting historical Days Past Due markers. Credit utilization ratio represents 30%, evaluating revolving balances against sanctioned limits. The remaining 35% is distributed across credit history vintage (15%), credit mix between secured and unsecured debt (10%), and hard inquiry frequency (10%).
              </p>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                When a credit card is resolved through a compromised One-Time Settlement, the lender reports the status as Settled, triggering an immediate credit score decline of 75 to 150 points. However, a Settled status does not permanently destroy borrowing capacity. By maintaining zero missed payments across existing credit lines and introducing a secured credit card, cardholders systematically rebuild their score above 750 within 18 to 24 months. Under Section 21 of CICRA 2005, cardholders retain the statutory right to repay the waived balance later to update records to Closed.
              </p>
            </section>

            {/* Section 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4" />
                <span>Visual Architecture Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Visual Framework: Credit Card Settlement Architecture
              </h2>
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-200">
                  <Image
                    src="/images/infographics/credit-card-settlement-calculator.jpg"
                    alt="Credit Card Settlement Calculator and Waiver Estimation Framework"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 pt-1">
                  <span>Figure 1.0: End-to-end institutional workflow from forensic principal audit to bureau NDC release.</span>
                  <a
                    href="/images/infographics/credit-card-settlement-calculator.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#1886ff] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View High-Resolution</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* Section 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-settlement-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                5. Step-by-Step Credit Card Settlement SOP (6 Stages)
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Successfully executing a credit card settlement requires strict procedural discipline to ensure complete legal immunity and optimal financial waivers. The following six-stage Standard Operating Procedure governs professional debt resolution:
              </p>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                  <span className="font-bold text-[#1886ff] block text-xs uppercase tracking-wider">
                    Stage 1: Forensic Statement Audit
                  </span>
                  <p className="leading-relaxed">
                    Our resolution panel isolates historical transaction ledgers, separating core swipe principal from inflated 42% APR, overdue late fees, and GST levies to establish the true baseline debt.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                  <span className="font-bold text-[#1886ff] block text-xs uppercase tracking-wider">
                    Stage 2: Hardship Dossier Compilation
                  </span>
                  <p className="leading-relaxed">
                    We assemble verified documentary evidence establishing bona fide financial distress, including job termination letters, salary cuts, and medical records to prove inability to service revolving debt.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                  <span className="font-bold text-[#1886ff] block text-xs uppercase tracking-wider">
                    Stage 3: Mandate Revocation &amp; Shield
                  </span>
                  <p className="leading-relaxed">
                    Card auto-debit NACH mandates are formally revoked with issuing banks under RBI directives, pre-empting Section 25 PSSA bounce liabilities and halting unlawful third-party recovery agent harassment.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                  <span className="font-bold text-[#1886ff] block text-xs uppercase tracking-wider">
                    Stage 4: Credit Committee Negotiations
                  </span>
                  <p className="leading-relaxed">
                    Our legal panel presents formal OTS representations directly to bank Stressed Asset Committees, leveraging 100% NPA capital provisioning dynamics to negotiate 45% to 65% principal haircuts.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                  <span className="font-bold text-[#1886ff] block text-xs uppercase tracking-wider">
                    Stage 5: Sanction Letter Vetting
                  </span>
                  <p className="leading-relaxed">
                    We verify the bank sanction letter for corporate authenticity, card numbering, structured payment schedules, and explicit covenants granting full legal liability discharge with zero future claims.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                  <span className="font-bold text-[#1886ff] block text-xs uppercase tracking-wider">
                    Stage 6: Remittance &amp; NDC Release
                  </span>
                  <p className="leading-relaxed">
                    The negotiated settlement amount is deposited directly into the bank designated pool account, followed by receipt of an unconditional No Dues Certificate and updated bureau reporting.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-notice-defense-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4" />
                <span>Statutory Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                6. Statutory Notice Defense &amp; Borrower Legal Rights
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Borrowers facing delinquent credit card balances are protected by established Indian statutory frameworks and Supreme Court jurisprudence. Bank recovery notices must be met with structured analytical legal defense rather than panic:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <BadgeAlert className="w-4 h-4 text-[#1886ff]" />
                    Section 25 PSSA Defense
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    NACH electronic mandate bounces do not constitute automatic criminal culpability. Serving a formal reply within 15 days demonstrating bona fide distress and lack of fraudulent intent successfully halts prosecution.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <BadgeAlert className="w-4 h-4 text-[#1886ff]" />
                    Section 138 NI Act Protection
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    Security cheques collected during onboarding cannot be converted into criminal instruments for unverified debt. Proving that the cheque was a blank security deposit vitiates Section 138 claims.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <BadgeAlert className="w-4 h-4 text-[#1886ff]" />
                    Section 21 Arbitration Defense
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    Under Supreme Court precedents in Perkins Eastman and TRF Ltd., unilateral appointments of sole arbitrators by banks are legally void ab initio and can be challenged before High Courts.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <BadgeAlert className="w-4 h-4 text-[#1886ff]" />
                    DRT &amp; RBI Fair Practices Code
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    Debts below 20 Lakhs cannot be tried in Debt Recovery Tribunals. Recovery agents are strictly prohibited from contacting cardholders before 8 AM or after 7 PM, harassing family members, or making workplace visits.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-grievance-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4" />
                <span>Grievance Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                7. 3-Tier Grievance Escalation &amp; Redressal Matrix
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                If lending institutions violate regulatory guidelines, charge unconscionable fees, or deploy abusive collection tactics, borrowers have access to a structured statutory escalation mechanism:
              </p>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3">
                  <span className="px-2 py-1 rounded-lg bg-blue-50 text-[#1886ff] font-bold text-xs">Level 1</span>
                  <div>
                    <h3 className="font-bold text-slate-900">Bank Grievance Redressal Officer (GRO)</h3>
                    <p className="text-slate-600 mt-0.5 text-xs">
                      Submit formal written complaints regarding unbundled charges or harassment. Banks must acknowledge within 48 hours and provide resolution within 7 to 10 working days.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3">
                  <span className="px-2 py-1 rounded-lg bg-indigo-50 text-indigo-700 font-bold text-xs">Level 2</span>
                  <div>
                    <h3 className="font-bold text-slate-900">Principal Nodal Officer (PNO)</h3>
                    <p className="text-slate-600 mt-0.5 text-xs">
                      Escalate unresolved disputes to the bank apex regulatory compliance desk. The PNO has executive authority to review settlement proposals and restrain agency outreach within 14 to 21 days.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3">
                  <span className="px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-xs">Level 3</span>
                  <div>
                    <h3 className="font-bold text-slate-900">RBI Integrated Ombudsman (cms.rbi.org.in)</h3>
                    <p className="text-slate-600 mt-0.5 text-xs">
                      If grievances remain unresolved past 30 days, lodge a digital complaint on cms.rbi.org.in for legally binding adjudication and compensation under RBI regulations.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: Chronological Timeline Table */}
            <section id="chronological-resolution-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                8. Chronological Timeline: Default to Complete Discharge
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Understanding the delinquency timeline enables borrowers to time settlement proposals when institutional commercial leverage is at its peak:
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-sm border-collapse divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-900 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5">Delinquency Period</th>
                      <th className="p-3.5">Account Status</th>
                      <th className="p-3.5">Institutional Action</th>
                      <th className="p-3.5">Settlement Strategy &amp; Milestones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold">Day 1 to 30</td>
                      <td className="p-3.5">SMA-0 Stage</td>
                      <td className="p-3.5">Grace period and automated reminders</td>
                      <td className="p-3.5">Forensic statement audit and mandate review</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold">Day 31 to 60</td>
                      <td className="p-3.5">SMA-1 Stage</td>
                      <td className="p-3.5">Internal tele-calling and late fee addition</td>
                      <td className="p-3.5">Revoke NACH mandates and compile hardship proof</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold">Day 61 to 90</td>
                      <td className="p-3.5">SMA-2 Stage</td>
                      <td className="p-3.5">Pre-NPA demand notices issued</td>
                      <td className="p-3.5">Submit formal hardship representation to bank</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-amber-600">Day 91 to 180</td>
                      <td className="p-3.5 text-amber-600 font-semibold">Sub-Standard NPA</td>
                      <td className="p-3.5">100% bank capital provisioning applied</td>
                      <td className="p-3.5 font-bold text-[#1886ff]">Prime OTS window opens (45% to 55% waiver)</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-emerald-600">Day 181 to 365+</td>
                      <td className="p-3.5 text-emerald-600 font-semibold">Doubtful NPA</td>
                      <td className="p-3.5">ARC debt assignment evaluation</td>
                      <td className="p-3.5 font-bold text-emerald-600">Deep compromise window (55% to 75% waiver + NDC)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: Specialized Real-World Scenarios */}
            <section id="specialized-card-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4" />
                <span>Case Studies &amp; Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                9. Specialized Real-World Credit Card Scenarios
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Different financial crisis scenarios require customized settlement roadmaps:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Multi-Card Cross-Lender Consolidation
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    Cardholders juggling multiple cards across different banks benefit from coordinated bilateral representations, preventing cross-lender panic while securing consolidated principal write-offs and unified repayment schedules across institutions.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Executive Layoffs &amp; Career Disruption
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    Corporate severance records and proof of sudden income loss serve as compelling documentary evidence before Stressed Asset Committees to justify deep 60% compromise settlements.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Sole Proprietorship Cashflow Crisis
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    Business owners using personal credit cards for working capital can submit audited profit-and-loss accounts showing liquidity depletion to negotiate single lump-sum waivers.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Landmark className="w-4 h-4 text-[#1886ff]" />
                    ARC Portfolio Debt Assignments
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    When banks sell written-off debt to Asset Reconstruction Companies at deep discounts, ARCs are commercially positioned to accept 65% to 75% principal haircuts for immediate liquidity.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 11: Company Profile Component */}
            <section id="company-profile" className="scroll-target">
              <CompanySection />
            </section>

            {/* Section 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Frequently Asked Questions on Credit Card Settlement
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Expert legal and financial answers regarding credit card settlement calculations, RBI norms, and credit score recovery in India:
              </p>

              <div className="space-y-2.5">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-all shadow-2xs"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left p-4 flex items-center justify-between gap-3 text-slate-900 font-bold text-xs sm:text-sm hover:bg-slate-50 transition-colors"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={\`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 \${
                            isOpen ? 'transform rotate-180 text-[#1886ff]' : ''
                          }\`}
                        />
                      </button>
                      {isOpen && (
                        <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section 13: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                <Bookmark className="w-4 h-4" />
                <span>Statutory Authority Citations &amp; Outbound Verification</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                Statutory Citations &amp; Regulatory Frameworks
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All credit card settlement procedures and calculation models comply with Indian statutes, including the RBI Master Direction on Credit Card Operations (2022), Section 25 of the PSSA 2007, Section 138 of the NI Act 1881, Section 21 of the CICRA 2005, and the RBI Integrated Ombudsman Scheme 2021.
              </p>

              {/* 6 Outbound Authority Badges */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Official Outbound Verification Desks:
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#1886ff] hover:border-blue-200 shadow-2xs"
                  >
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#1886ff] hover:border-blue-200 shadow-2xs"
                  >
                    <span>RBI Ombudsman Portal</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#1886ff] hover:border-blue-200 shadow-2xs"
                  >
                    <span>TransUnion CIBIL</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#1886ff] hover:border-blue-200 shadow-2xs"
                  >
                    <span>India Code Legislative Portal</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#1886ff] hover:border-blue-200 shadow-2xs"
                  >
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#1886ff] hover:border-blue-200 shadow-2xs"
                  >
                    <span>National Cyber Crime Portal</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Related CredSettle Guides:
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/credit-card-settlement-discount"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800 border border-blue-100 hover:bg-blue-100 transition-colors"
                  >
                    Credit Card Settlement Discount
                  </Link>
                  <Link
                    href="/credit-card-minimum-due-trap"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800 border border-blue-100 hover:bg-blue-100 transition-colors"
                  >
                    Minimum Due Trap Explained
                  </Link>
                  <Link
                    href="/credit-card-npa-timeline"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800 border border-blue-100 hover:bg-blue-100 transition-colors"
                  >
                    Credit Card NPA Timeline
                  </Link>
                  <Link
                    href="/credit-card-settlement-process"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800 border border-blue-100 hover:bg-blue-100 transition-colors"
                  >
                    Settlement Process Guide
                  </Link>
                  <Link
                    href="/convert-settled-status-to-closed"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800 border border-blue-100 hover:bg-blue-100 transition-colors"
                  >
                    Convert Settled to Closed
                  </Link>
                  <Link
                    href="/settle-multiple-credit-cards"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800 border border-blue-100 hover:bg-blue-100 transition-colors"
                  >
                    Settle Multiple Credit Cards
                  </Link>
                  <Link
                    href="/stop-credit-card-recovery-calls"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800 border border-blue-100 hover:bg-blue-100 transition-colors"
                  >
                    Stop Recovery Harassment
                  </Link>
                  <Link
                    href="/can-i-go-to-jail-for-credit-card-debt"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800 border border-blue-100 hover:bg-blue-100 transition-colors"
                  >
                    Credit Card Jail Myth Analysis
                  </Link>
                  <Link
                    href="/credit-card-legal-notice-format"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800 border border-blue-100 hover:bg-blue-100 transition-colors"
                  >
                    Credit Card Legal Notice Defense
                  </Link>
                  <Link
                    href="/cibil-score-kaise-badhaye-after-settlement"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800 border border-blue-100 hover:bg-blue-100 transition-colors"
                  >
                    Improve CIBIL After Settlement
                  </Link>
                </div>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="lg:col-span-3 space-y-5 sticky top-24">
            
            {/* Author Bio Card */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100 border border-slate-200 flex-shrink-0">
                  <Image
                    src="/ashishjhangra.png"
                    alt="Ashish Jhangra"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Ashish Jhangra</h4>
                  <p className="text-[11px] font-medium text-[#1886ff]">
                    Legal &amp; Debt Resolution Professional
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialist in Indian banking dispute resolution, RBI compromise settlement frameworks, and civil defense against unlawful debt recovery practices.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Verified Legal Author</span>
                <span className="text-[#1886ff] font-bold">CredSettle Panel</span>
              </div>
            </div>

            {/* Emergency CTA Card (#2452ae) */}
            <div
              className="rounded-2xl p-5 text-white shadow-xs space-y-3 relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-blue-100">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                <span>Direct Legal Hotline</span>
              </div>
              <h4 className="text-base font-bold leading-tight">
                Facing Aggressive Recovery Harassment?
              </h4>
              <p className="text-xs text-white/90 leading-relaxed">
                Speak to our senior debt resolution advocates immediately to halt unlawful recovery agent intimidation and negotiate direct bank waivers.
              </p>
              <a
                href="tel:+918800226635"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-white text-[#2452ae] font-bold text-xs hover:bg-blue-50 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#1886ff]" />
                <span>Call +91-8800226635</span>
              </a>
            </div>

            {/* CredSettle Trust Badges */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-3 text-xs text-slate-700">
              <div className="font-bold text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>CredSettle Trust Standards</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#1886ff]" />
                  <span>100% RBI Fair Practices Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#1886ff]" />
                  <span>CICRA 2005 Credit Bureau Standard</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#1886ff]" />
                  <span>ISO 27001 Data Confidentiality</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#1886ff]" />
                  <span>Verified Legal Defense Panel</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}
`;

fs.writeFileSync(path.join(pageDir, 'page.tsx'), pageServerCode, 'utf8');
fs.writeFileSync(path.join(pageDir, 'CreditCardSettlementCalculatorClient.tsx'), clientCode, 'utf8');

console.log('Both page.tsx and CreditCardSettlementCalculatorClient.tsx written successfully!');
