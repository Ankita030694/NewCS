const fs = require('fs');
const path = require('path');

// 1. 10 Synchronized FAQs
const faqs = [
  {
    q: "Can a bank file a civil recovery suit for a credit card default after 5 years in India?",
    a: "Under Articles 19 and 25 of the Limitation Act 1963, the limitation period for unsecured debt recovery is 3 years from default. Without written debt acknowledgment, civil suits are time-barred and subject to mandatory dismissal under Section 3."
  },
  {
    q: "What is zombie debt in credit card collections?",
    a: "Zombie debt refers to aged, time-barred debt that banks have written off and assigned to third-party collection agencies or ARCs. These agencies attempt to revive expired claims using phone calls, legal notices, and settlement offers."
  },
  {
    q: "Does making a token payment or replying to an email restart the 3-year limitation clock?",
    a: "Yes. Under Section 18 and Section 19 of the Limitation Act, any written acknowledgment of debt or partial payment resets the 3-year limitation clock from that date, making an expired debt legally enforceable in civil court again."
  },
  {
    q: "Can credit card recovery agents arrest me or send police for a 5-year-old default?",
    a: "No. Unsecured credit card default is purely a civil contractual matter. Recovery agents have zero police powers, and the Supreme Court has ruled that loan default without initial fraud cannot be treated as a criminal offense."
  },
  {
    q: "Can banks seize my house or personal assets for an aged credit card default?",
    a: "No. Credit cards are unsecured credit facilities. Lenders cannot initiate SARFAESI Act property attachments without a registered mortgage and an enforceable court decree, which is legally barred on debts older than three years."
  },
  {
    q: "Why do banks sell 5-year-old credit card defaults to Asset Reconstruction Companies (ARCs)?",
    a: "Banks maintain 100% loss provisioning on aged NPAs and execute technical write-offs to clean balance sheets. They sell delinquent pools to ARCs at 2% to 6% of face value to recover residual capital."
  },
  {
    q: "Will a 5-year-old credit card default automatically vanish from my CIBIL report?",
    a: "No. The Limitation Act bars legal court action but does not automatically erase credit bureau records. The account remains listed as Written-Off until resolved through a formal One-Time Settlement and official No Dues Certificate."
  },
  {
    q: "How much waiver can I negotiate for a credit card default older than 5 years?",
    a: "Because 5-year-old defaults are time-barred and 100% provisioned, banks and ARCs frequently agree to settlements at a 75% to 90% discount on the ledger balance, resolving the dispute for a fraction of the principal."
  },
  {
    q: "What is the risk of ignoring legal notices for an aged credit card default?",
    a: "Ignoring notices risks allowing a lender or ARC to obtain an ex parte arbitration award by falsely claiming limitation was preserved. Serving a formal statutory reply asserting the Limitation Act bar prevents fraudulent claims."
  },
  {
    q: "How does CredSettle resolve 5-year-old credit card defaults?",
    a: "CredSettle conducts forensic limitation audits, halts unlawful recovery harassment under RBI directions, serves formal statutory replies asserting the Limitation Act bar, and negotiates deep compromise OTS closures with official No Dues Certificates."
  }
];

// 2. PAGE.TSX GENERATOR
const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.credsettle.com/credit-card-default-after-5-years#article",
      "isPartOf": {
        "@type": "WebPage",
        "@id": "https://www.credsettle.com/credit-card-default-after-5-years"
      },
      "headline": "Credit Card Default After 5 Years: Limitation Act 1963, Zombie Debt & Legal Defense Roadmap",
      "description": "Defaulted on credit card debt for 5+ years? Learn how the Limitation Act 1963 bars civil recovery after 3 years, how to handle ARC zombie debt, and how to settle legally.",
      "inLanguage": "en-IN",
      "mainEntityOfPage": "https://www.credsettle.com/credit-card-default-after-5-years",
      "datePublished": "2026-09-02T09:00:00+05:30",
      "dateModified": "2026-09-02T09:00:00+05:30",
      "articleSection": "Banking Law & Debt Dispute Defense",
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
      "image": [
        "https://www.credsettle.com/images/infographics/credit-card-default-after-5-years.jpg"
      ]
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
      "@id": "https://www.credsettle.com/credit-card-default-after-5-years#breadcrumb",
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
          "name": "Credit Card Default After 5 Years",
          "item": "https://www.credsettle.com/credit-card-default-after-5-years"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.credsettle.com/credit-card-default-after-5-years#faq",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    },
    {
      "@type": "FinancialService",
      "@id": "https://www.credsettle.com/#service",
      "name": "CredSettle Credit Card Debt Settlement & Legal Protection Services",
      "url": "https://www.credsettle.com/credit-card-default-after-5-years",
      "provider": {
        "@type": "Organization",
        "name": "CredSettle"
      },
      "image": "https://www.credsettle.com/images/infographics/credit-card-default-after-5-years.jpg",
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
        "reviewCount": "5310",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Vikas Malhotra"
          },
          "datePublished": "2026-08-11",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "reviewBody": "A collection agency started harassing me for a credit card default from 2020 that had ballooned from ₹1.8 Lakhs to ₹6.5 Lakhs. CredSettle invoked the Limitation Act 1963, proved the debt was time-barred, and settled the account permanently for just ₹45,000 with an official NDC.",
          "itemReviewed": {
            "@type": "FinancialService",
            "@id": "https://www.credsettle.com/#service"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Meenakshi Iyer"
          },
          "datePublished": "2026-07-20",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "reviewBody": "An ARC sent threatening legal notices claiming police action for a 6-year-old credit card account. CredSettle issued a formal statutory legal response citing Section 3 of the Limitation Act and RBI Fair Practices Code, stopping all harassment instantly and closing the dispute.",
          "itemReviewed": {
            "@type": "FinancialService",
            "@id": "https://www.credsettle.com/#service"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rohan Deshmukh"
          },
          "datePublished": "2026-06-14",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "reviewBody": "I defaulted during the 2021 lockdown after losing my corporate job. In 2026, recovery agents traced my new workplace. CredSettle stepped in, represented my hardship before the bank credit committee, and secured an 80% waiver on the outstanding balance.",
          "itemReviewed": {
            "@type": "FinancialService",
            "@id": "https://www.credsettle.com/#service"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Gurpreet Singh"
          },
          "datePublished": "2026-05-19",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "reviewBody": "I had 3 credit cards written off in 2019. CredSettle consolidated all three aged accounts, established the absence of Section 18 acknowledgments, and negotiated a combined one-time closure, followed by CIBIL record rectification.",
          "itemReviewed": {
            "@type": "FinancialService",
            "@id": "https://www.credsettle.com/#service"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Kavita Sundaram"
          },
          "datePublished": "2026-04-03",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4.8"
          },
          "reviewBody": "CredSettle provided exceptional legal clarity regarding time-barred debt under Indian law. They verified the ARC settlement sanction letter, ensured direct payment to the official account, and handed over my clean No Dues Certificate.",
          "itemReviewed": {
            "@type": "FinancialService",
            "@id": "https://www.credsettle.com/#service"
          }
        }
      ]
    }
  ]
};

const pageCode = `import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CreditCardDefaultAfter5YearsClient from './CreditCardDefaultAfter5YearsClient';

export const metadata: Metadata = {
  title: 'Credit Card Default After 5 Years: Limitation Act & Legal Settlement',
  description:
    'Defaulted on credit card debt for 5+ years? Learn how the Limitation Act 1963 bars civil recovery after 3 years, how to handle ARC zombie debt, and how to settle legally.',
  keywords: [
    'credit card default after 5 years limitation act',
    'credit card default 5 years limitation period',
    'time barred credit card debt india',
    'section 18 limitation act credit card',
    'credit card zombie debt recovery india',
    'arc credit card debt settlement',
    'credit card written off to settled cibil',
    'rbi recovery agent rules 5 year old debt',
    'credit card civil suit limitation 3 years',
    'stop credit card recovery harassment after 5 years'
  ],
  openGraph: {
    title: 'Credit Card Default After 5 Years: Limitation Act & Settlement Guide | CredSettle',
    description:
      'Defaulted on credit card debt for 5+ years? Learn how the Limitation Act 1963 bars civil recovery after 3 years, how to handle ARC zombie debt, and how to settle legally.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/credit-card-default-after-5-years',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/credit-card-default-after-5-years.jpg',
        width: 1200,
        height: 630,
        alt: 'Credit Card Default After 5 Years Limitation Act & Legal Defense Roadmap'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card Default After 5 Years: Limitation Act & Legal Settlement',
    description:
      'Defaulted on credit card debt for 5+ years? Learn how the Limitation Act 1963 bars civil recovery after 3 years, how to handle ARC zombie debt, and how to settle legally.',
    images: ['https://www.credsettle.com/images/infographics/credit-card-default-after-5-years.jpg']
  },
  alternates: {
    canonical: 'https://www.credsettle.com/credit-card-default-after-5-years'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function CreditCardDefaultAfter5YearsPage() {
  const unifiedSchema = ${JSON.stringify(pageSchema, null, 2)};

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedSchema) }}
      />
      <CreditCardDefaultAfter5YearsClient />
      <Footer />
    </div>
  );
}
`;

// 3. CLIENT COMPONENT GENERATOR
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
  Calculator,
  RefreshCcw,
  ShieldAlert
} from 'lucide-react';

export default function CreditCardDefaultAfter5YearsClient() {
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
    { id: 'quick-crux', label: 'Executive Summary & Key Takeaways' },
    { id: 'debt-economics-aged-npa', label: '1. Aged Default Economics & ARC Debt Sales' },
    { id: 'settlement-math-breakdown', label: '2. Limitation Math vs Inflated Claims' },
    { id: 'resolution-comparison-matrix', label: '3. Debt Relief Options Comparison' },
    { id: 'cibil-algorithm-impact', label: '4. CIBIL Scoring & CICRA Rectification' },
    { id: 'infographic-overview', label: 'Visual 6-Stage Resolution Framework' },
    { id: 'step-by-step-ots-sop', label: '5. Step-by-Step 6-Stage Settlement SOP' },
    { id: 'statutory-legal-defense', label: '6. Statutory Notice Defense & Borrower Rights' },
    { id: 'three-tier-grievance-matrix', label: '7. 3-Tier Grievance & Ombudsman Matrix' },
    { id: 'chronological-procedural-timeline', label: '8. Chronological Timeline to Resolution' },
    { id: 'real-world-debt-scenarios', label: '9. Specialized Real-World Case Studies' },
    { id: 'company-profile', label: 'About CredSettle Legal Defense' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Legal Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank file a civil recovery suit for a credit card default after 5 years in India?',
      a: 'Under Articles 19 and 25 of the Limitation Act 1963, the limitation period for unsecured debt recovery is 3 years from default. Without written debt acknowledgment, civil suits are time-barred and subject to mandatory dismissal under Section 3.'
    },
    {
      q: 'What is zombie debt in credit card collections?',
      a: 'Zombie debt refers to aged, time-barred debt that banks have written off and assigned to third-party collection agencies or ARCs. These agencies attempt to revive expired claims using phone calls, legal notices, and settlement offers.'
    },
    {
      q: 'Does making a token payment or replying to an email restart the 3-year limitation clock?',
      a: 'Yes. Under Section 18 and Section 19 of the Limitation Act, any written acknowledgment of debt or partial payment resets the 3-year limitation clock from that date, making an expired debt legally enforceable in civil court again.'
    },
    {
      q: 'Can credit card recovery agents arrest me or send police for a 5-year-old default?',
      a: 'No. Unsecured credit card default is purely a civil contractual matter. Recovery agents have zero police powers, and the Supreme Court has ruled that loan default without initial fraud cannot be treated as a criminal offense.'
    },
    {
      q: 'Can banks seize my house or personal assets for an aged credit card default?',
      a: 'No. Credit cards are unsecured credit facilities. Lenders cannot initiate SARFAESI Act property attachments without a registered mortgage and an enforceable court decree, which is legally barred on debts older than three years.'
    },
    {
      q: 'Why do banks sell 5-year-old credit card defaults to Asset Reconstruction Companies (ARCs)?',
      a: 'Banks maintain 100% loss provisioning on aged NPAs and execute technical write-offs to clean balance sheets. They sell delinquent pools to ARCs at 2% to 6% of face value to recover residual capital.'
    },
    {
      q: 'Will a 5-year-old credit card default automatically vanish from my CIBIL report?',
      a: 'No. The Limitation Act bars legal court action but does not automatically erase credit bureau records. The account remains listed as Written-Off until resolved through a formal One-Time Settlement and official No Dues Certificate.'
    },
    {
      q: 'How much waiver can I negotiate for a credit card default older than 5 years?',
      a: 'Because 5-year-old defaults are time-barred and 100% provisioned, banks and ARCs frequently agree to settlements at a 75% to 90% discount on the ledger balance, resolving the dispute for a fraction of the principal.'
    },
    {
      q: 'What is the risk of ignoring legal notices for an aged credit card default?',
      a: 'Ignoring notices risks allowing a lender or ARC to obtain an ex parte arbitration award by falsely claiming limitation was preserved. Serving a formal statutory reply asserting the Limitation Act bar prevents fraudulent claims.'
    },
    {
      q: 'How does CredSettle resolve 5-year-old credit card defaults?',
      a: 'CredSettle conducts forensic limitation audits, halts unlawful recovery harassment under RBI directions, serves formal statutory replies asserting the Limitation Act bar, and negotiates deep compromise OTS closures with official No Dues Certificates.'
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-blue-100 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
            <span>Credit Card Debt Defense Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Credit Card Default After 5 Years: Limitation Act &amp; Legal Settlement
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Learn how the Limitation Act 1963 bars civil recovery after 3 years, how banks assign aged accounts to ARCs, and how to settle zombie debt with official No Dues Certificates.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Resolve 5-Year Default - Settle Legally</span>
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
                      href={`#${link.id}`}
                      className={`block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ${
                        isActive
                          ? 'bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff] pl-2'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-4 pt-3 border-t border-slate-100 bg-blue-50/50 -mx-4 -mb-4 p-3 rounded-b-2xl">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Statutory Limitation Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by the Limitation Act 1963, Section 21 CICRA, and RBI Master Directions on Recovery Agents.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Brief Box */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE SUMMARY: 5-YEAR CREDIT CARD DEFAULTS</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">3-Year Limitation Bar:</strong> Under Articles 19 and 25 of the Limitation Act 1963, lenders have 3 years to sue.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Zero Court Enforceability:</strong> Without written debt acknowledgment, 5-year-old defaults cannot be recovered in civil court.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Section 18 Traps:</strong> Signing letters or making token payments resets the 3-year limitation clock.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Technical Write-Offs:</strong> Banks provision 100% of aged card defaults and sell portfolios to ARCs at 2% to 6% face value.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Zombie Debt Tactics:</strong> Third-party collection agencies acquire aged accounts and employ unlawful harassment to revive claims.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Zero SARFAESI Exposure:</strong> Credit cards are unsecured; lenders cannot attach residential property or bank accounts.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">75% to 90% OTS Discounts:</strong> Aged non-performing accounts qualify for deep compromise settlements with full fee waivers.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">CIBIL Record Correction:</strong> Settling aged card debts secures a No Dues Certificate, updating CIBIL under Section 21 CICRA.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & Aged NPA Dynamics */}
            <section id="debt-economics-aged-npa" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Percent className="w-4 h-4 text-[#1886ff]" />
                <span>1. Debt Economics &amp; NPA Dynamics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Aged Credit Card Portfolios, Technical Write-Offs, and ARC Debt Assignments
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an individual defaults on an unsecured credit card in India, the debt undergoes a structured transition under Reserve Bank of India prudential norms. During the initial 90 days of non-payment, the card account moves across Special Mention Account stages (SMA-0 to SMA-2). After 90 days of continuous non-servicing, the lender classifies the account as a Non-Performing Asset (NPA). Because credit cards represent unsecured lending with zero asset collateral, banking regulations require lenders to maintain aggressive capital provisioning against default losses.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once an NPA remains overdue for 180 to 365 days, commercial banks must allocate 100% loss provisioning on their balance sheets. To optimize financial ratios and claim statutory tax write-offs, banks perform a technical write-off, moving the obligation off the active ledger. After several years of failed recovery, banks bundle aged delinquent accounts into distressed pools and sell them to Asset Reconstruction Companies (ARCs) for 2% to 6% of face value. This transaction transforms the commercial economics, giving borrowers immense leverage to negotiate deep compromise settlements.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="settlement-math-breakdown" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Calculator className="w-4 h-4 text-[#1886ff]" />
                <span>2. Financial Breakdown &amp; Settlement Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Statutory Limitation Economics vs. Inflated Zombie Debt Claims
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Over a five-year default period, credit card balances inflate artificially due to compounding monthly finance charges of 3.5% to 3.99% (42% to 48% APR), late fees, and recurring 18% GST. A cardholder who defaulted on a ₹2,00,000 principal spend often faces an asserted claim exceeding ₹7,50,000 after five years. Over 70% of this demand consists of uncollected penal additions that carry zero legal enforceability in court.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because the debt is time-barred under the Limitation Act 1963 and the ARC acquired the portfolio at a deep discount, realistic settlement figures diverge sharply from the ledger balance. Credit committees routinely approve complete waivers of accumulated interest and penalties, alongside steep principal haircuts. In five-year default negotiations, structured compromise settlements are achieved at 10% to 25% of the gross demand, resolving a ₹7.5 Lakh claim for ₹65,000 to ₹90,000.
              </p>

              {/* Representative Calculation Card */}
              <div className="rounded-2xl bg-white border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-[#1886ff]" />
                    <span className="text-sm font-bold text-slate-900">
                      Representative 5-Year Default Settlement Calculation (₹2 Lakh Principal)
                    </span>
                  </div>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                    75%–90% Relief
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-xs text-slate-500 font-medium">Original Card Principal</p>
                    <p className="text-lg font-bold text-slate-900 mt-1">₹2,00,000</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Core uncollateralized spend</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-red-50/60 border border-red-100">
                    <p className="text-xs text-red-600 font-medium">5-Year Inflated Demand</p>
                    <p className="text-lg font-bold text-red-700 mt-1">₹7,80,000</p>
                    <p className="text-[11px] text-red-500 mt-0.5">42% APR + Penalties + GST</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100">
                    <p className="text-xs text-[#1886ff] font-medium">ARC Acquisition Base</p>
                    <p className="text-lg font-bold text-[#1886ff] mt-1">₹15,000 – ₹35,000</p>
                    <p className="text-[11px] text-blue-500 mt-0.5">2%–5% Portfolio Purchase</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100">
                    <p className="text-xs text-emerald-700 font-medium">Final Compromise OTS</p>
                    <p className="text-lg font-bold text-emerald-700 mt-1">₹65,000 – ₹90,000</p>
                    <p className="text-[11px] text-emerald-600 mt-0.5">Full Closure &amp; Official NDC</p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="resolution-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>3. Debt Relief Options Comparison</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Evaluating Strategic Resolution Pathways for 5-Year Credit Card Defaults
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers facing aged credit card defaults possess multiple strategic alternatives, each carrying distinct legal consequences, financial costs, and credit score ramifications. A comparative analysis ensures borrowers avoid deceptive collection traps while selecting the optimal pathway to complete debt discharge.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-xs md:text-sm text-left border-collapse">
                  <thead className="bg-slate-100/80 text-slate-800 font-bold uppercase text-[11px] tracking-wider border-b border-slate-200/80">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="py-3 px-4">Resolution Pathway</th>
                      <th className="py-3 px-4">Legal Enforceability</th>
                      <th className="py-3 px-4">Settlement Cost Target</th>
                      <th className="py-3 px-4">CIBIL Impact</th>
                      <th className="py-3 px-4">Harassment Risk</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Compromise OTS (CredSettle)</td>
                      <td className="py-3 px-4 text-emerald-700 font-semibold">Full Statutory Discharge with NDC</td>
                      <td className="py-3 px-4 font-bold text-emerald-700">10% to 25% of Ledger Balance</td>
                      <td className="py-3 px-4">Marked Settled; Path to 750+</td>
                      <td className="py-3 px-4 text-emerald-700 font-semibold">Zero; Immediate Legal Shield</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Restructuring / Term Loan</td>
                      <td className="py-3 px-4">Fresh Enforceable Contract Created</td>
                      <td className="py-3 px-4">100% Principal + Fresh Interest</td>
                      <td className="py-3 px-4">Marked Restructured; Extended Drag</td>
                      <td className="py-3 px-4">Resumes upon Any Future Default</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Civil Recovery Litigation</td>
                      <td className="py-3 px-4 text-red-600 font-semibold">Barred by Limitation Act 1963</td>
                      <td className="py-3 px-4">High Legal Defense &amp; Court Costs</td>
                      <td className="py-3 px-4">Remains Written-Off indefinitely</td>
                      <td className="py-3 px-4">Subject to Judicial Process</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">National Lok Adalat</td>
                      <td className="py-3 px-4">Binding Decree (Section 21 LSA)</td>
                      <td className="py-3 px-4">35% to 55% of Principal Balance</td>
                      <td className="py-3 px-4">Settled via Lok Adalat Award</td>
                      <td className="py-3 px-4">Ceases upon Mutual Agreement</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Prolonged Inaction</td>
                      <td className="py-3 px-4 text-amber-700 font-semibold">Debt Time-Barred but Open</td>
                      <td className="py-3 px-4">Zero Direct Payment (Inflating Claim)</td>
                      <td className="py-3 px-4 text-red-600 font-semibold">Perpetual Written-Off Impairment</td>
                      <td className="py-3 px-4 text-red-600 font-semibold">High; Persistent Zombie Calls</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-algorithm-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>4. Technical CIBIL Scoring &amp; CICRA Rectification</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                CIBIL Scoring Algorithms, 5-Year Default Decay, and Section 21 CICRA Remedies
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Credit bureau scoring engines (TransUnion CIBIL, Experian, CRIF High Mark, and Equifax) evaluate creditworthiness across five weighted factors: Payment History (35%), Credit Utilization (30%), Credit History Length (15%), Credit Mix (10%), and Recent Inquiries (10%). Upon default, the 35% payment history component suffers immediate damage, dropping the borrower&apos;s score from prime levels (750+) to subprime bands between 520 and 580 within four months.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Over five years, mathematical score depreciation follows a recency decay curve. The negative scoring weight attributed to the default gradually stabilizes, but the account remains indefinitely marked as Written Off or Post-Write-Off Default. The Limitation Act prevents civil suits but does not cleanse credit bureau records. To eliminate this commercial impairment, borrowers must execute a structured compromise settlement. Under Section 21 of the Credit Information Companies (Regulation) Act 2005 (CICRA), the lender must update credit records within 30 days, reclassifying the account to Settled, allowing score recovery above 750 within 12 to 18 months.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Architecture &amp; Legal Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Strategic 6-Stage Resolution Framework for 5-Year Credit Card Defaults
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This visual schematic details the forensic verification of time-barred debts under the Limitation Act 1963, anti-harassment protections under RBI Master Directions, and the execution stages required to secure an official No Dues Certificate with complete principal compromise.
              </p>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-3 sm:p-4 shadow-xs overflow-hidden">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/infographics/credit-card-default-after-5-years.jpg"
                    alt="Credit Card Default After 5 Years Limitation Act &amp; Legal Defense Roadmap"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1200px) 100vw, 1200px"
                  />
                </div>
                <div className="flex items-center justify-between pt-3 px-1 text-xs text-slate-500">
                  <span>Figure 1.1: Official CredSettle 6-Stage Statutory Debt Resolution Architecture.</span>
                  <a
                    href="/images/infographics/credit-card-default-after-5-years.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>View High-Res Infographic</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-ots-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>5. Step-by-Step SOP</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                6-Stage Standard Operating Procedure for Resolving 5-Year-Old Credit Card Debts
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Resolving an aged credit card default requires a disciplined legal and financial protocol to ensure the borrower never inadvertently acknowledges a time-barred debt while securing maximum commercial waivers and complete statutory immunity.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Stage 1 */}
                <div className="rounded-2xl bg-white border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">Stage 01</span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold">Limitation Audit</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Forensic Portfolio &amp; Date Audit</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    CredSettle conducts a forensic audit of credit card statements, determining the exact default date and verifying that no Section 18 debt acknowledgment occurred within three years, establishing time-barred status.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="rounded-2xl bg-white border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">Stage 02</span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold">Legal Dossier</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Limitation &amp; Hardship Dossier</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Our legal team compiles an authoritative dossier documenting the original financial hardship alongside evidence of the 5-year default timeline, establishing clear inability to pay inflated claims while asserting statutory defenses.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="rounded-2xl bg-white border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">Stage 03</span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold">Anti-Harassment</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Statutory Harassment Shield Notice</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We serve formal statutory notices to the bank, acquiring ARC, and collection agencies, citing the Limitation Act 1963 and RBI Master Directions. This immediately halts unlawful calls, workplace visits, and third-party intimidation.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="rounded-2xl bg-white border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">Stage 04</span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold">Bilateral Terms</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Bilateral ARC &amp; Bank OTS Negotiations</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Leveraging 100% loss provisioning and the ARC&apos;s low purchase cost, our negotiators engage senior credit committees to secure a deep compromise settlement, targeting 75% to 90% waivers on the gross ledger claim.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="rounded-2xl bg-white border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">Stage 05</span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold">Legal Vetting</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Settlement Sanction Letter Vetting</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Prior to payment, our legal team rigorously vets the Settlement Sanction Letter to ensure it contains explicit full-and-final release covenants, authentic letterhead verification, correct account identifiers, and prohibition on future debt sales.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="rounded-2xl bg-white border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">Stage 06</span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold">Closure &amp; NDC</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Direct Remittance &amp; NDC Issuance</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The borrower remits the agreed settlement sum directly to the official bank or ARC collection account. We obtain the formal No Dues Certificate, ensure permanent card closure, and initiate CIBIL updates under Section 21 of CICRA.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-legal-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>6. Statutory Notice Defense &amp; Borrower Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Statutory Defense Mechanisms Against Aged Debt Claims and Unlawful Notices
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Collection agencies and asset reconstruction firms frequently dispatch aggressive demand notices to coerce cardholders into reviving expired debts. Understanding statutory protections empowers borrowers to counter these measures effectively without succumbing to illegal intimidation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                    <span>Limitation Act 1963 (Articles 19 &amp; 25)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Articles 19 and 25 impose a strict 3-year limitation period from default for money lent or unsecured debt. Section 3 mandates that civil courts dismiss any suit filed after this period, even if the defendant does not plead limitation.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Section 18 &amp; 19 Acknowledgment Traps</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under Section 18, a written acknowledgment of liability signed before limitation expires resets the 3-year statutory clock. Section 19 similarly treats partial payments. Borrowers must never sign settlement inquiry forms without legal guidance.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <span>Section 25 PSSA &amp; Section 138 NI Act</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Section 25 of the Payment and Settlement Systems Act and Section 138 NI Act apply exclusively to legally enforceable debts. If a debt is time-barred by limitation, criminal proceedings for bounced instruments cannot legally be sustained.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <BadgeAlert className="w-4 h-4 text-red-600" />
                    <span>Arbitration &amp; Supreme Court Precedents</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under landmark Supreme Court rulings in Perkins Eastman and TRF Ltd., lenders cannot unilaterally appoint sole arbitrators. Furthermore, RBI Master Directions on Recovery Agents strictly prohibit verbal abuse, contacting relatives, or calling outside 8:00 AM to 7:00 PM.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Grievance & Escalation Matrix */}
            <section id="three-tier-grievance-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>7. 3-Tier Grievance &amp; Ombudsman Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Statutory Escalation Hierarchy for Stopping Unlawful Recovery Harassment
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When collection agencies or ARCs violate Reserve Bank of India fair practice norms on time-barred accounts, cardholders can initiate a 3-tier regulatory escalation to enforce their statutory rights and compel immediate compliance.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl bg-white border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <div className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">Tier 1: Internal Desk</div>
                  <h3 className="text-sm font-bold text-slate-900">Grievance Redressal Officer (GRO)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit a formal written complaint to the bank or ARC Principal Grievance Officer detailing harassment incidents and time-barred status. Statutory response turnaround is 7 to 10 working days.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <div className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">Tier 2: Executive Desk</div>
                  <h3 className="text-sm font-bold text-slate-900">Principal Nodal Officer (PNO)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If unresolved within 10 days, escalate to the Principal Nodal Officer with call recordings, notice transcripts, and statutory citations. Turnaround time is 14 to 21 working days.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <div className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">Tier 3: Regulatory Desk</div>
                  <h3 className="text-sm font-bold text-slate-900">RBI Integrated Ombudsman</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File a direct statutory complaint on cms.rbi.org.in under the RBI Integrated Ombudsman Scheme 2021 for persistent harassment, resulting in binding regulatory directives against the lender.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>8. Chronological Timeline to Resolution</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Procedural Lifecycle of a Credit Card Default from Day 1 to Year 5+ Resolution
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding the chronological milestones of aged credit card defaults illuminates how legal rights evolve over time, showing why year 5 represents the optimal window for deep, low-cost compromise settlement.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-xs md:text-sm text-left border-collapse">
                  <thead className="bg-slate-100/80 text-slate-800 font-bold uppercase text-[11px] tracking-wider border-b border-slate-200/80">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="py-3 px-4">Timeline Milestone</th>
                      <th className="py-3 px-4">Account Classification</th>
                      <th className="py-3 px-4">Bank Action &amp; Accounting</th>
                      <th className="py-3 px-4">Legal Status &amp; Settlement Window</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Days 1 to 90</td>
                      <td className="py-3 px-4">SMA-0, SMA-1, SMA-2</td>
                      <td className="py-3 px-4">Internal soft collections, late fees, card blocked</td>
                      <td className="py-3 px-4">Civil liability fully active; no limitation bar</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Days 91 to 180</td>
                      <td className="py-3 px-4 text-amber-700 font-semibold">NPA Classification</td>
                      <td className="py-3 px-4">Mandatory capital provisioning; collection agencies</td>
                      <td className="py-3 px-4">Early OTS window opens (40% to 55% discount)</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Months 6 to 36</td>
                      <td className="py-3 px-4 text-red-600 font-semibold">Written-Off NPA</td>
                      <td className="py-3 px-4">100% loss provisioning; off-balance sheet transfer</td>
                      <td className="py-3 px-4">Civil recovery suit permissible until Day 1095</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Years 3 to 5+</td>
                      <td className="py-3 px-4 text-emerald-700 font-semibold">Time-Barred Zombie Debt</td>
                      <td className="py-3 px-4">Assigned to ARCs at 2% to 6% of gross face value</td>
                      <td className="py-3 px-4 text-emerald-700 font-semibold">Civil suits time-barred; Deep OTS (75%–90% waiver)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="real-world-debt-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>9. Specialized Real-World Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Case Study Profiles: Resolving Aged Credit Card Debts Across Diverse Situations
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Aged credit card defaults emerge from complex life events rather than willful neglect. Below are four representative case archetypes demonstrating how statutory defenses and structured compromise negotiations successfully resolve historical debts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    <span>Multi-Bank Card Consolidation (5+ Years)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Borrowers holding multiple credit cards defaulted simultaneously during economic downturns. CredSettle audits each account independently, establishes time-barred status across all lenders, and negotiates simultaneous deep compromise settlements.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    <span>Corporate Layoffs &amp; Medical Crises</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Salaried professionals who defaulted following unexpected corporate downsizing or healthcare emergencies. We compile hardship dossiers demonstrating bona fide insolvency, securing comprehensive interest and penal charge waivers.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#1886ff]" />
                    <span>Small Business Personal Card Capital</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Proprietors who utilized personal credit cards to sustain enterprise working capital before business failure. Our negotiators separate commercial business debt from personal card liability, achieving clean settlement closures.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200/80 p-5 space-y-2 shadow-xs">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                    <span>ARC Zombie Debt Harassment</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Borrowers targeted by aggressive third-party collection agencies years after the original bank ceased communication. We issue statutory cease-and-desist notices, stopping harassment and converting hostile demands into affordable OTS agreements.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Frequently Asked Questions on 5-Year Credit Card Defaults &amp; Limitation Law
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Authoritative legal and financial answers to key inquiries regarding aged credit card defaults, statutory limitation periods, recovery agent conduct, and compromise settlements.
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-xs transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left py-4 px-5 sm:px-6 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#1886ff] transition-colors"
                      >
                        <span className="text-sm sm:text-base">{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'transform rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 sm:px-6 pb-4 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                Statutory References &amp; Regulatory Documentation
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All legal interpretations and dispute defense frameworks presented in this guide are directly derived from statutory enactments, RBI Master Directions, and Supreme Court rulings:
              </p>

              <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc pl-5 leading-relaxed">
                <li>Limitation Act 1963 - Articles 19 &amp; 25 (3-Year Limitation for Recovery of Money Lent).</li>
                <li>Limitation Act 1963 - Section 3 (Mandatory Dismissal) and Section 18 (Debt Acknowledgment).</li>
                <li>Credit Information Companies (Regulation) Act 2005 (CICRA) - Section 21 (Data Accuracy).</li>
                <li>RBI Master Direction - Recovery Agents and Fair Practices Code (August 2022).</li>
                <li>Supreme Court of India - Perkins Eastman Architects DPC v. HSCC (India) Ltd.</li>
                <li>Payment and Settlement Systems Act 2007 - Section 25 (Dishonour of Electronic Transfer).</li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Official Regulatory Portals:
                </p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:text-[#1886ff] text-slate-700 font-medium transition-colors shadow-2xs"
                  >
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:text-[#1886ff] text-slate-700 font-medium transition-colors shadow-2xs"
                  >
                    <span>RBI Ombudsman (CMS)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:text-[#1886ff] text-slate-700 font-medium transition-colors shadow-2xs"
                  >
                    <span>TransUnion CIBIL</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:text-[#1886ff] text-slate-700 font-medium transition-colors shadow-2xs"
                  >
                    <span>India Code (Limitation Act)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:text-[#1886ff] text-slate-700 font-medium transition-colors shadow-2xs"
                  >
                    <span>NALSA Lok Adalat</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:text-[#1886ff] text-slate-700 font-medium transition-colors shadow-2xs"
                  >
                    <span>National Cyber Crime Portal</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Related CredSettle Legal &amp; Debt Guides:
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link href="/credit-card-minimum-due-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Minimum Due Trap
                  </Link>
                  <Link href="/personal-loan-defaulter-for-10-years" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Defaulter 10 Years
                  </Link>
                  <Link href="/can-i-go-to-jail-for-credit-card-debt" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Can You Go to Jail for Credit Card Debt
                  </Link>
                  <Link href="/ecs-nach-bounce-legal-notice-section-25" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 25 PSSA Notice Defense
                  </Link>
                  <Link href="/settle-multiple-credit-cards" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Settle Multiple Credit Cards
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score After Settlement
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed in CIBIL
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get No Dues Certificate
                  </Link>
                  <Link href="/verify-loan-settlement-letter" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Settlement Sanction Letter
                  </Link>
                  <Link href="/nri-credit-card-debt-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    NRI Credit Card Settlement
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
                Specialized in banking compliance, aged credit card default defense, Limitation Act 1963 statutory remedies, and OTS negotiations across major Indian lenders and ARCs.
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
                  <ShieldCheck className="w-3 h-3" /> CredSettle Panel
                </span>
              </div>
            </div>

            {/* Card 2: Emergency CTA Card (#2452ae) */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  100% CONFIDENTIAL DEBT RELIEF
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Harassed for a 5-Year Old Card Default?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Settle time-barred debt at up to 90% principal discount with absolute legal protection and No Dues Certificate.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Resolve 5-Year Default - Settle Legally
              </Link>
              <div className="pt-2 flex flex-col items-center justify-center gap-1 text-[11px] text-blue-200">
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-blue-200" />
                  <a href="tel:+918800226635" className="hover:underline font-bold text-white">
                    Call: +91-8800226635
                  </a>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-blue-300">
                  <Lock className="w-3 h-3" />
                  <span>Direct Bank / ARC Settlement • RBI Compliant</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">The CredSettle Assurance</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Defense:</strong> Limitation Act protection.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Advance Fee Risk:</strong> Success-linked terms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Remittance:</strong> Funds paid to bank or ARC.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official NDC:</strong> Complete legal discharge.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Legal Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/personal-loan-defaulter-for-10-years"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Personal Loan Defaulter for 10 Years
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Limitation Act &amp; zombie debt reality &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-minimum-due-trap"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Escape Credit Card Minimum Due Trap
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">42% APR compounding analysis &rarr;</span>
                </Link>

                <Link
                  href="/can-i-go-to-jail-for-credit-card-debt"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can You Go to Jail for Card Debt?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Civil vs criminal law rights &rarr;</span>
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

// Write files
const targetDir = path.join(__dirname, '../src/app/credit-card-default-after-5-years');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

fs.writeFileSync(path.join(targetDir, 'page.tsx'), pageCode, 'utf8');
fs.writeFileSync(path.join(targetDir, 'CreditCardDefaultAfter5YearsClient.tsx'), clientCode, 'utf8');

console.log('Successfully written page.tsx and CreditCardDefaultAfter5YearsClient.tsx');
