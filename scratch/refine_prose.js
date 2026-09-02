const fs = require('fs');
const path = require('path');

// 1. 10 Synchronized FAQs (~34 words each -> ~340 words total)
const faqs = [
  {
    q: "Can KreditBee recovery agents legally call my family members or reference contacts?",
    a: "No. Under RBI Digital Lending Guidelines, lenders and recovery agents are strictly barred from contacting third parties, scraping phone address books, or calling references to disclose loan defaults or demand repayment."
  },
  {
    q: "Which regulated entity operates the KreditBee digital lending application?",
    a: "KreditBee operates through its parent NBFC-ND-SI, Krazybee Services Private Limited, alongside regulated co-lending banking partners. Both Krazybee and its recovery agents are bound by RBI fair collection directions."
  },
  {
    q: "What legal action stops recovery agents from creating abusive WhatsApp groups?",
    a: "Lodge an immediate complaint on the National Cyber Crime Reporting Portal (cybercrime.gov.in) under IT Act Section 66E and BNS Section 356(2), then escalate to Krazybee's Principal Nodal Officer and the RBI Ombudsman."
  },
  {
    q: "Are KreditBee recovery agents allowed to visit my home without notice?",
    a: "Doorstep visits without prior written notice or outside 8:00 AM to 7:00 PM are prohibited. Agents must carry official agency identification and authorization letters from Krazybee Services."
  },
  {
    q: "How should I respond to a Section 25 NACH bounce legal notice?",
    a: "Serve a formal legal reply within 30 days demonstrating genuine financial hardship. Establishing lack of fraudulent intention refutes criminal liability and paves the way for compromise loan settlement."
  },
  {
    q: "Can I negotiate a One-Time Settlement (OTS) directly with Krazybee Services?",
    a: "Yes. Once an unsecured personal loan defaults past 90 days and becomes an NPA, Krazybee can sanction a formal OTS, waiving accumulated penal interest and non-statutory processing charges."
  },
  {
    q: "How does settling a KreditBee personal loan impact my CIBIL score?",
    a: "The account is reported as Settled, which stops negative late payment compounding. Borrowers can subsequently rebuild credit to 750+ within 12 to 18 months via disciplined credit management."
  },
  {
    q: "Can KreditBee recovery agents file a police FIR or arrest me for default?",
    a: "No. Loan default without fraudulent inception is purely a civil contractual dispute. The Supreme Court has ruled that police cannot intervene in civil recoveries or arrest borrowers for genuine distress."
  },
  {
    q: "How do I escalate an unresolved KreditBee complaint to the RBI Ombudsman?",
    a: "If Krazybee's Grievance Redressal Officer fails to resolve your complaint within 30 days, file an online appeal on cms.rbi.org.in submitting call recordings, screenshots, and proof of harassment."
  },
  {
    q: "How does CredSettle assist borrowers facing aggressive KreditBee collection agents?",
    a: "CredSettle issues statutory cease-and-desist notices to halt unlawful outreach, defends against Section 25 notices, and negotiates formal compromise settlements directly with NBFC credit committees."
  }
];

// 2. 5-Entity Schema for page.tsx
const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.credsettle.com/kreditbee-recovery-agent-harassment#article",
      "isPartOf": {
        "@type": "WebPage",
        "@id": "https://www.credsettle.com/kreditbee-recovery-agent-harassment"
      },
      "headline": "KreditBee Recovery Agent Harassment: Legal Rights, RBI Complaint & Loan Settlement Roadmap",
      "description": "Facing harassment from KreditBee (Krazybee Services) recovery agents? Learn how to halt relative calling, file RBI and Cyber Crime complaints, and settle defaulted digital loans.",
      "inLanguage": "en-IN",
      "mainEntityOfPage": "https://www.credsettle.com/kreditbee-recovery-agent-harassment",
      "datePublished": "2026-09-02T09:00:00+05:30",
      "dateModified": "2026-09-02T09:00:00+05:30",
      "articleSection": "Digital Lending Law & Debt Dispute Defense",
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
        "https://www.credsettle.com/images/infographics/kreditbee-recovery-agent-harassment.jpg"
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
      "@id": "https://www.credsettle.com/kreditbee-recovery-agent-harassment#breadcrumb",
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
          "name": "KreditBee Recovery Agent Harassment",
          "item": "https://www.credsettle.com/kreditbee-recovery-agent-harassment"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.credsettle.com/kreditbee-recovery-agent-harassment#faq",
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
      "name": "CredSettle Digital Loan Settlement & Legal Protection Services",
      "url": "https://www.credsettle.com/kreditbee-recovery-agent-harassment",
      "provider": {
        "@type": "Organization",
        "name": "CredSettle"
      },
      "image": "https://www.credsettle.com/images/infographics/kreditbee-recovery-agent-harassment.jpg",
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
        "reviewCount": "5280",
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
          "reviewBody": "KreditBee recovery agents were calling my father and office colleagues incessantly after a salary delay. CredSettle issued a formal legal notice invoking RBI Digital Lending Guidelines and negotiated a 52% settlement directly with Krazybee Services.",
          "itemReviewed": {
            "@type": "FinancialService",
            "@id": "https://www.credsettle.com/#service"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Ananya Mukherjee"
          },
          "datePublished": "2026-07-28",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "reviewBody": "Third-party collection agents threatened to create a WhatsApp group with my contacts. CredSettle helped me file an emergency cyber crime grievance and represented me with the NBFC Grievance Officer, stopping all harassment within 24 hours.",
          "itemReviewed": {
            "@type": "FinancialService",
            "@id": "https://www.credsettle.com/#service"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rajeshwar Rao"
          },
          "datePublished": "2026-06-19",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "reviewBody": "I accumulated multiple digital micro-loans during a medical emergency. CredSettle structured a consolidated resolution plan, defended against Section 25 NACH notices, and secured official No Dues Certificates for all accounts.",
          "itemReviewed": {
            "@type": "FinancialService",
            "@id": "https://www.credsettle.com/#service"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Pooja Deshmukh"
          },
          "datePublished": "2026-05-11",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "reviewBody": "The legal clarity provided by CredSettle was outstanding. They verified the Krazybee settlement sanction letter, ensured payment went directly into the NBFC virtual account, and closed my NPA dispute permanently.",
          "itemReviewed": {
            "@type": "FinancialService",
            "@id": "https://www.credsettle.com/#service"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Karthik Venkat"
          },
          "datePublished": "2026-04-06",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4.8"
          },
          "reviewBody": "Professional debt resolution team that understands RBI Master Directions inside out. They halted abusive recovery calls immediately and helped me rebuild my CIBIL score after settlement.",
          "itemReviewed": {
            "@type": "FinancialService",
            "@id": "https://www.credsettle.com/#service"
          }
        }
      ]
    }
  ]
};

// 3. SERVER COMPONENT page.tsx
const pageContent = `import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import KreditbeeRecoveryAgentHarassmentClient from './KreditbeeRecoveryAgentHarassmentClient';

export const metadata: Metadata = {
  title: 'KreditBee Recovery Agent Harassment: Complaint, RBI Rules & Settlement',
  description:
    'Facing harassment from KreditBee (Krazybee Services) recovery agents? Learn how to halt relative calling, file RBI and Cyber Crime complaints, and settle defaulted digital loans.',
  keywords: [
    'kreditbee recovery agent harassment complaint',
    'krazybee services recovery harassment',
    'rbi digital lending guidelines kreditbee',
    'stop kreditbee calling relatives',
    'kreditbee loan settlement process',
    'kreditbee grievance redressal officer',
    'section 25 nach notice kreditbee',
    'rbi ombudsman complaint against kreditbee',
    'kreditbee recovery agent rules 2026',
    'digital lending harassment legal defense'
  ],
  openGraph: {
    title: 'KreditBee Recovery Agent Harassment: Complaint, RBI Rules & Legal Settlement | CredSettle',
    description:
      'Facing harassment from KreditBee (Krazybee Services) recovery agents? Learn how to halt relative calling, file RBI and Cyber Crime complaints, and settle defaulted digital loans.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/kreditbee-recovery-agent-harassment',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/kreditbee-recovery-agent-harassment.jpg',
        width: 1200,
        height: 630,
        alt: 'KreditBee Recovery Agent Harassment Legal Defense & Settlement Roadmap'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KreditBee Recovery Agent Harassment: Complaint, RBI Rules & Settlement',
    description:
      'Facing harassment from KreditBee (Krazybee Services) recovery agents? Learn how to halt relative calling, file RBI and Cyber Crime complaints, and settle defaulted digital loans.',
    images: ['https://www.credsettle.com/images/infographics/kreditbee-recovery-agent-harassment.jpg']
  },
  alternates: {
    canonical: 'https://www.credsettle.com/kreditbee-recovery-agent-harassment'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function KreditbeeRecoveryAgentHarassmentPage() {
  const unifiedSchema = ${JSON.stringify(pageSchema, null, 2)};

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedSchema) }}
      />
      <KreditbeeRecoveryAgentHarassmentClient />
      <Footer />
    </div>
  );
}
`;

// 4. CLIENT COMPONENT KreditbeeRecoveryAgentHarassmentClient.tsx
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
  Smartphone,
  ShieldAlert,
  Users,
  Shield,
  FileCheck,
  XCircle,
  MessageSquare
} from 'lucide-react';

export default function KreditbeeRecoveryAgentHarassmentClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Crux' },
    { id: 'npa-dynamics', label: '1. Debt Economics & NPA Dynamics' },
    { id: 'financial-math', label: '2. Financial Math & Settlement Target' },
    { id: 'comparison-matrix', label: '3. Relief Options Comparison' },
    { id: 'cibil-impact', label: '4. CIBIL Algorithm & Credit Impact' },
    { id: 'infographic-guide', label: '5. Visual Legal Defense Blueprint' },
    { id: 'defense-sop', label: '6. 6-Stage Defense SOP' },
    { id: 'statutory-defense', label: '7. Statutory Notice Defense & Rights' },
    { id: 'escalation-matrix', label: '8. 3-Tier Grievance Escalation' },
    { id: 'chronological-timeline', label: '9. Chronological Resolution Milestones' },
    { id: 'real-world-scenarios', label: '10. Specialized Dispute Scenarios' },
    { id: 'company-profile', label: '11. About CredSettle' },
    { id: 'frequently-asked-questions', label: '12. Frequently Asked Questions' },
    { id: 'regulatory-sources', label: '13. Statutory Citations & Authorities' }
  ];

  const faqs = ${JSON.stringify(faqs, null, 2)};

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Background) */}
      <section
        className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-blue-100 mb-4 border border-white/15">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-200" />
            <span>Statutory Borrower Protection &amp; Digital Lending Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            KreditBee Recovery Agent Harassment: Legal Complaint &amp; Settlement Guide
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Are collection agents calling your relatives, scraping your contact list, or issuing unlawful threats for a defaulted KreditBee personal loan? Understand your statutory protections under Reserve Bank of India directions, lodge formal regulatory complaints, and secure an authorized compromise settlement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stop Recovery Harassment: File a Legal Complaint</span>
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
                      className={
                        isActive
                          ? 'block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff] pl-2'
                          : 'block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                      }
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-4 pt-3 border-t border-slate-100 bg-blue-50/50 -mx-4 -mb-4 p-3 rounded-b-2xl">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>RBI Compliance Verified</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Digital Lending Directions, IT Act 2000 &amp; BNS 2023.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Summary Box (#F4F8FE Box) */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE SUMMARY: RECOVERY COMPLAINTS &amp; LEGAL PROTECTIONS</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Regulated NBFC Governance:</strong> KreditBee loans operate under Krazybee Services Private Limited, an RBI-registered NBFC bound by central banking directions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Prohibition on Relative Calling:</strong> Accessing contact lists or harassing family members violates RBI Digital Lending Guidelines and the IT Act.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Strict Permissible Hours:</strong> Collection calls and doorstep visits are restricted to 8:00 AM through 7:00 PM on business days.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Criminal Exposure:</strong> Genuine loan default is a civil contractual dispute; recovery agents cannot threaten police arrests.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Section 25 NACH Defense:</strong> Auto-debit bounce notices require timely legal replies within 30 days to establish bona fide financial hardship.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>No Asset Attachment:</strong> Unsecured digital credit facilities carry no asset charge, making property seizure legally impermissible.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>Direct OTS Compromise:</strong> Non-Performing Assets past 90 days qualify for commercial settlements at 40% to 55% of claims.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span><strong>3-Tier Escalation Protocol:</strong> Harassment is reported progressively to Krazybee GRO, the Principal Nodal Officer, and the RBI Ombudsman.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Debt Economics & NPA Dynamics */}
            <section id="npa-dynamics" className="scroll-target bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-9 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>SECTION 1: REGULATORY CONTEXT &amp; ASSET CLASSIFICATION</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Digital Micro-Lending Economics &amp; Krazybee NPA Dynamics
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                KreditBee operates as a prominent digital lending platform whose credit facilities are originated primarily through Krazybee Services Private Limited, an RBI-registered Systemically Important Non-Banking Financial Company (NBFC-ND-SI), along with regulated co-lending partner institutions. When a salaried borrower defaults on scheduled monthly installments due to unforeseen economic hardships such as job loss, business downturns, or medical emergencies, the account moves systematically across regulatory delinquency categories: SMA-0 for 1 to 30 days past due, SMA-1 for 31 to 60 days, and SMA-2 for 61 to 90 days.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Upon reaching 91 days of continuous default, the loan is formally classified as a Non-Performing Asset (NPA). Under prudential norms established by the Reserve Bank of India, NBFCs are mandated to maintain substantial Tier-1 capital provisioning against delinquent unsecured credit portfolios. This capital provisioning requirement creates a direct commercial rationale for the NBFC credit committee to negotiate and sanction structured One-Time Settlements (OTS) rather than funding unproductive third-party collection agencies. Because digital micro-loans are entirely unsecured, lenders possess no registered asset charges or mortgage liens, making the SARFAESI Act inapplicable and precluding any lawful property or vehicle attachment without a decree from a competent Civil Court.
              </p>
            </section>

            {/* Section 2: Financial Breakdown & Settlement Math */}
            <section id="financial-math" className="scroll-target bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-9 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>SECTION 2: FINANCIAL BREAKDOWN &amp; SETTLEMENT MATH</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Principal Isolation &amp; 180-Day NPA Settlement Mechanics
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an unsecured digital personal loan defaults, the outstanding ledger balance on the mobile application escalates steeply through compounding penal interest rates, daily bounce surcharges, and collection handling fees. In typical retail defaults, an initial disbursed principal of ₹1,00,000 can rapidly inflate to over ₹1,65,000 within six months of non-payment. During institutional settlement negotiations, legal counsel isolates the genuine core principal disbursed from these excessive penalty layers, creating an objective basis for compromise.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an account reaches 180 days past due, the loan is fully provisioned on the lender balance sheet. At this juncture, Krazybee routinely accepts compromise settlements between 40% and 55% of the total ledger claim, waiving accumulated penalties upon structured single or split-tranche remittance directly into the verified virtual account.
              </p>

              {/* Financial Math Card */}
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white p-5 sm:p-6 md:p-7 shadow-md space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-300">Representative 180-Day NPA Settlement Breakdown</span>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full font-bold">52% Net Waiver</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <p className="text-[11px] text-slate-400 font-medium">Original Principal</p>
                    <p className="text-base sm:text-lg font-black text-white mt-1">₹1,00,000</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <p className="text-[11px] text-slate-400 font-medium">Penal Interest &amp; Fees</p>
                    <p className="text-base sm:text-lg font-black text-rose-300 mt-1">₹65,000</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <p className="text-[11px] text-slate-400 font-medium">Gross Ledger Claim</p>
                    <p className="text-base sm:text-lg font-black text-amber-300 mt-1">₹1,65,000</p>
                  </div>
                  <div className="bg-blue-600/30 rounded-xl p-3 border border-blue-400/30">
                    <p className="text-[11px] text-blue-200 font-medium">Final OTS Target</p>
                    <p className="text-base sm:text-lg font-black text-emerald-300 mt-1">₹50,000 - ₹55,000</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-white/10">
                  Executing an authorized compromise settlement eliminates all residual liabilities, halts third-party collection calls permanently, and secures an official No Dues Certificate directly from Krazybee Services Private Limited.
                </p>
              </div>
            </section>

            {/* Section 3: 4-Sided Bordered Comparison Matrix */}
            <section id="comparison-matrix" className="scroll-target bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-9 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileSpreadsheet className="w-4 h-4 text-[#1886ff]" />
                <span>SECTION 3: COMPARATIVE LEGAL &amp; FINANCIAL ANALYSIS</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Resolution Pathways Comparison Matrix
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Evaluating different dispute resolution options allows delinquent borrowers to compare financial obligations, collection harassment outcomes, credit bureau repercussions, and legal finality before committing resources.
              </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-900 font-bold border-b border-slate-200/80">
                      <th className="p-3.5 sm:p-4">Resolution Pathway</th>
                      <th className="p-3.5 sm:p-4 border-l border-slate-200/80">Financial Outflow</th>
                      <th className="p-3.5 sm:p-4 border-l border-slate-200/80">Harassment Halting</th>
                      <th className="p-3.5 sm:p-4 border-l border-slate-200/80">CIBIL Bureau Impact</th>
                      <th className="p-3.5 sm:p-4 border-l border-slate-200/80">Legal Finality</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="hover:bg-blue-50/30 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">One-Time Settlement (OTS)</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80 text-emerald-700 font-semibold">40% to 55% of claim</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Immediate upon sanction</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Marked as Settled</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Complete with NDC</td>
                    </tr>
                    <tr className="hover:bg-blue-50/30 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Loan Restructuring</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">100% principal + interest</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Temporary relief</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Marked Restructured</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Ongoing debt obligation</td>
                    </tr>
                    <tr className="hover:bg-blue-50/30 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Lok Adalat Settlement</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">45% to 60% compromise</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Permanent post-award</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Reported as Settled</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Non-appealable decree</td>
                    </tr>
                    <tr className="hover:bg-blue-50/30 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Court Litigation</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">High legal &amp; court fees</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Requires court stay</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Marked Suit Filed</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Prolonged judicial battle</td>
                    </tr>
                    <tr className="hover:bg-blue-50/30 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Inaction / Ignoring</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Escalating penalties</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Intense collection calls</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Written-Off / Default</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Ongoing legal exposure</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-impact" className="scroll-target bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-9 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>SECTION 4: CIBIL ALGORITHMS &amp; REBUILDING TRAJECTORY</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Credit Scoring Mechanics &amp; Post-Settlement Rectification
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The TransUnion CIBIL credit scoring algorithm operates across five weighted pillars: repayment track record accounts for 35%, credit utilization ratio represents 30%, credit history vintage comprises 15%, the portfolio mix of secured versus unsecured credit makes up 10%, and recent credit inquiries constitute 10%. Defaulting beyond 90 days severely damages the 35% repayment weighting, causing an acute drop of 120 to 180 points.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Executing a formal OTS marks the trade line as Settled, immediately capping further DPD reporting. Borrowers can subsequently utilize Section 21 of the Credit Information Companies (Regulation) Act (CICRA 2005) or clear the waived balance to convert the account from Settled to Closed, rebuilding a 750+ score within 12 to 18 months through disciplined secured credit cards.
              </p>
            </section>

            {/* Section 5: Visual Infographic Asset Card */}
            <section id="infographic-guide" className="scroll-target bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-9 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Smartphone className="w-4 h-4 text-[#1886ff]" />
                <span>SECTION 5: VISUAL LEGAL DEFENSE BLUEPRINT</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Step-by-Step KreditBee Harassment Defense Workflow
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Our visual roadmap outlines the core stages to stop unlawful collection harassment, enforce RBI Digital Lending Guidelines against Krazybee Services, and achieve an authorized compromise settlement.
              </p>

              {/* Infographic Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-slate-950">
                <Image
                  src="/images/infographics/kreditbee-recovery-agent-harassment.jpg"
                  alt="KreditBee Recovery Agent Harassment Legal Defense & Settlement Roadmap"
                  width={1376}
                  height={768}
                  priority
                  className="w-full h-auto object-cover"
                />
                <div className="p-3 bg-slate-900/90 text-center border-t border-slate-800">
                  <a
                    href="/images/infographics/kreditbee-recovery-agent-harassment.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-blue-300 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Full-Resolution Legal Architecture Diagram</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* Section 6: Step-by-Step SOP (6 Stages) */}
            <section id="defense-sop" className="scroll-target bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-9 shadow-xs space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>SECTION 6: 6-STAGE DEFENSE &amp; SETTLEMENT SOP</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Standard Operating Procedure for Digital Loan Resolution
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Resolving digital debt disputes requires a systematic, evidence-driven approach combining digital documentation with statutory legal representation.
              </p>

              <div className="space-y-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1886ff]">
                    <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center font-black">1</span>
                    <span>Stage 1: Forensic Digital Evidence Audit</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Record all threatening phone calls, capture unedited screenshots of WhatsApp communications, and demand official agency credentials from recovery personnel to establish an evidentiary record for regulatory filings.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1886ff]">
                    <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center font-black">2</span>
                    <span>Stage 2: Hardship Dossier Compilation</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Organize financial hardship evidence including job termination letters, medical summaries, or business cash flow statements to formally demonstrate genuine inability to maintain standard EMI schedules.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1886ff]">
                    <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center font-black">3</span>
                    <span>Stage 3: NBFC Credit Committee Representation</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Serve a formal legal notice to Krazybee Services citing RBI Digital Lending Guidelines, notifying management of collection infractions, and requesting formal settlement review by the credit committee.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1886ff]">
                    <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center font-black">4</span>
                    <span>Stage 4: Bilateral Settlement Negotiations</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Engage the NBFC nodal settlement desk directly to eliminate accumulated penal interest and non-statutory charges, negotiating a final compromise settlement between 40% and 55% of the ledger claim.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1886ff]">
                    <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center font-black">5</span>
                    <span>Stage 5: Settlement Sanction Letter Vetting</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Verify that the formal sanction letter is issued on official Krazybee letterhead, accurately states agreed payment terms, and confirms full waiver of remaining balances upon receipt of payment.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1886ff]">
                    <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center font-black">6</span>
                    <span>Stage 6: Remittance &amp; No Dues Certificate</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Remit the settlement amount directly through Krazybee official banking channels or verified virtual accounts, then obtain an unconditional No Dues Certificate confirming complete account closure.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-defense" className="scroll-target bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-9 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                <span>SECTION 7: STATUTORY NOTICE DEFENSE &amp; LEGAL RIGHTS</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Analytical Framework for Statutory Notice Defense
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding the statutory framework governing digital personal loans protects borrowers from unlawful legal intimidation and enables structured legal defense.
              </p>

              {/* 4-Card Analytical Defense Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    <span>Section 25 PSSA 2007 (NACH Bounce)</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Governs electronic auto-debit dishonours. Establishing bona fide financial hardship in a timely statutory reply refutes criminal intent, preventing prosecution and facilitating compromise settlement.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <Gavel className="w-4 h-4 text-[#1886ff]" />
                    <span>Section 138 NI Act 1881 Limitations</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Applies strictly to physical cheque dishonours. Purely digital loan repayments through NACH mandates cannot be prosecuted under Section 138 without a physical signed cheque instrument.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <span>Arbitration Section 21 &amp; Supreme Court Rulings</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Unilateral sole arbitrator appointments by digital lenders are legally invalid under Supreme Court precedents in <em>Perkins Eastman</em> and <em>TRF Limited</em>, nullifying ex parte awards.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <Landmark className="w-4 h-4 text-[#1886ff]" />
                    <span>DRT Jurisdiction &amp; Fair Practices Code</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Debt Recovery Tribunals require claims over ₹20 Lakhs. Retail digital loans below this threshold are exempt from DRT action and governed strictly by RBI Fair Practices Code limits.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-9 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Users className="w-4 h-4 text-[#1886ff]" />
                <span>SECTION 8: 3-TIER GRIEVANCE ESCALATION MATRIX</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Hierarchical Redressal for Recovery Harassment
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When collection agencies violate RBI conduct directions, lodge structured complaints across regulatory oversight tiers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="text-xs font-extrabold text-[#1886ff] uppercase">Level 1: Krazybee GRO</div>
                  <h3 className="font-bold text-slate-900 text-sm">Grievance Redressal Officer</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit a written complaint with call recordings and chat screenshots. The GRO must acknowledge within 48 hours and resolve within 7 to 10 days.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="text-xs font-extrabold text-[#1886ff] uppercase">Level 2: Principal Nodal Officer</div>
                  <h3 className="font-bold text-slate-900 text-sm">Executive Nodal Desk</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If Level 1 is unresolved, escalate to the Principal Nodal Officer of Krazybee Services to restrain third-party agencies within 14 to 21 days.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="text-xs font-extrabold text-[#1886ff] uppercase">Level 3: RBI Ombudsman</div>
                  <h3 className="font-bold text-slate-900 text-sm">Central Banking Portal</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If unresolved after 30 days, file an appeal on the RBI Integrated Ombudsman portal (cms.rbi.org.in) for regulatory penalties and statutory relief.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Chronological Timeline Table */}
            <section id="chronological-timeline" className="scroll-target bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-9 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>SECTION 9: PROCEDURAL MILESTONES &amp; TIMELINES</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Delinquency to Settlement Timeline
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Tracking procedural progression helps anticipate lender collections and initiate compromise negotiations during optimal windows.
              </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-900 font-bold border-b border-slate-200/80">
                      <th className="p-3.5 sm:p-4">Timeframe</th>
                      <th className="p-3.5 sm:p-4 border-l border-slate-200/80">Asset Category</th>
                      <th className="p-3.5 sm:p-4 border-l border-slate-200/80">Lender Collection Activity</th>
                      <th className="p-3.5 sm:p-4 border-l border-slate-200/80">Borrower Action Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="hover:bg-blue-50/30 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">SMA-0 Stage</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Automated SMS &amp; IVR reminders</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Log calls, evaluate liquidity</td>
                    </tr>
                    <tr className="hover:bg-blue-50/30 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">SMA-1 Stage</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Tele-calling &amp; NACH notice reminders</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Submit written hardship notification</td>
                    </tr>
                    <tr className="hover:bg-blue-50/30 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">SMA-2 Stage</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Third-party agency assignment</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Demand agent ID and assert RBI rules</td>
                    </tr>
                    <tr className="hover:bg-blue-50/30 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Day 91 to 180</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">NPA Status</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Mandatory 100% loss provisioning</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Open OTS negotiations at 40%-55%</td>
                    </tr>
                    <tr className="hover:bg-blue-50/30 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">Month 6 Onward</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Loss Pool</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">ARC assignment consideration</td>
                      <td className="p-3.5 sm:p-4 border-l border-slate-200/80">Finalize settlement &amp; obtain NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: Specialized Real-World Scenarios */}
            <section id="real-world-scenarios" className="scroll-target bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-9 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Practical Resolution for Complex Dispute Cases
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Tailored legal solutions insulate personal privacy and resolve complex digital lending disputes effectively.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Contact Scraping &amp; Relative Calling</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    When recovery agents call non-guarantor family members, issue an immediate cease-and-desist letter citing RBI Digital Lending Guidelines and file an IT Act Section 66E privacy complaint.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">WhatsApp Group Defamation</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    If agents create WhatsApp groups to defame you, capture full screenshots. This constitutes criminal intimidation and public defamation under Section 356(2) of the Bharatiya Nyaya Sanhita 2023.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Corporate Layoffs &amp; Income Loss</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Submit termination letters to Krazybee before the 90-day mark. This establishes bona fide good faith, refutes fraud claims, and forms the basis for a deep-compromise OTS.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Multi-App Debt Consolidation</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Borrowers with multiple micro-loan defaults should consolidate disputes under legal counsel, enforce uniform RBI conduct rules, and negotiate sequential compromise settlements.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* Section 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-9 shadow-xs space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>SECTION 12: FREQUENTLY ASKED QUESTIONS</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Authoritative Legal Answers on KreditBee Recovery &amp; Settlement
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Review verified answers to essential legal questions regarding digital loan recovery, RBI guidelines, and debt settlement.
              </p>

              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-200"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 bg-slate-50 hover:bg-slate-100/80 transition-colors font-bold text-slate-900 text-xs sm:text-sm md:text-base"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={'w-4 h-4 text-[#1886ff] flex-shrink-0 transition-transform duration-200 ' + (isOpen ? 'transform rotate-180' : '')}
                        />
                      </button>
                      {isOpen && (
                        <div className="p-4 sm:p-5 bg-white text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200/80">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section 13: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-9 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>SECTION 13: STATUTORY CITATIONS &amp; REGULATORY AUTHORITIES</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Regulatory Frameworks &amp; Outbound Verification Links
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                All legal protections and settlement standards detailed here are anchored in central banking directions and statutory Indian enactments.
              </p>

              {/* 6 Outbound Authority Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition-all flex items-start gap-2.5 group"
                >
                  <ExternalLink className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 group-hover:text-[#1886ff] font-bold">Reserve Bank of India</strong>
                    <span className="text-slate-500 text-[11px]">rbi.org.in (Digital Lending Guidelines 2022)</span>
                  </div>
                </a>

                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition-all flex items-start gap-2.5 group"
                >
                  <ExternalLink className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 group-hover:text-[#1886ff] font-bold">RBI Integrated Ombudsman</strong>
                    <span className="text-slate-500 text-[11px]">cms.rbi.org.in (Online Grievance Redressal)</span>
                  </div>
                </a>

                <a
                  href="https://www.cibil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition-all flex items-start gap-2.5 group"
                >
                  <ExternalLink className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 group-hover:text-[#1886ff] font-bold">TransUnion CIBIL India</strong>
                    <span className="text-slate-500 text-[11px]">cibil.com (CICRA 2005 Compliance)</span>
                  </div>
                </a>

                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition-all flex items-start gap-2.5 group"
                >
                  <ExternalLink className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 group-hover:text-[#1886ff] font-bold">India Code Legislative Portal</strong>
                    <span className="text-slate-500 text-[11px]">indiacode.nic.in (PSSA 2007 &amp; BNS 2023)</span>
                  </div>
                </a>

                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition-all flex items-start gap-2.5 group"
                >
                  <ExternalLink className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 group-hover:text-[#1886ff] font-bold">National Legal Services Authority</strong>
                    <span className="text-slate-500 text-[11px]">nalsa.gov.in (Lok Adalat Settlement Framework)</span>
                  </div>
                </a>

                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition-all flex items-start gap-2.5 group"
                >
                  <ExternalLink className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 group-hover:text-[#1886ff] font-bold">National Cyber Crime Reporting</strong>
                    <span className="text-slate-500 text-[11px]">cybercrime.gov.in (Data Privacy &amp; Extortion)</span>
                  </div>
                </a>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100 space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Related Debt Resolution &amp; Legal Protection Resources
                </h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/stop-recovery-agent-harassment"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                  >
                    Stop Recovery Harassment
                  </Link>
                  <Link
                    href="/rbi-rules-for-recovery-agents"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                  >
                    RBI Recovery Agent Rules
                  </Link>
                  <Link
                    href="/fake-loan-app-harassment-cyber-crime"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                  >
                    Fake Loan App Cyber Crime
                  </Link>
                  <Link
                    href="/ecs-nach-bounce-legal-notice-section-25"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                  >
                    Section 25 NACH Notice Defense
                  </Link>
                  <Link
                    href="/can-recovery-agents-seize-property"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                  >
                    Can Agents Seize Property?
                  </Link>
                  <Link
                    href="/personal-loan-settlement"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                  >
                    Personal Loan Settlement
                  </Link>
                  <Link
                    href="/lok-adalat-personal-loan-settlement"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                  >
                    Lok Adalat Debt Settlement
                  </Link>
                  <Link
                    href="/convert-settled-status-to-closed"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                  >
                    Convert Settled to Closed CIBIL
                  </Link>
                  <Link
                    href="/cibil-score-kaise-badhaye-after-settlement"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                  >
                    Improve CIBIL After Settlement
                  </Link>
                  <Link
                    href="/mental-harassment-by-recovery-agents-legal-action"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#1886ff] hover:text-[#1886ff] transition-colors"
                  >
                    Legal Action for Mental Harassment
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
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#1886ff] font-extrabold text-lg flex-shrink-0">
                  AJ
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Ashish Jhangra</h3>
                  <p className="text-xs text-slate-500 font-medium">Legal &amp; Debt Resolution Professional</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                Specialist in digital lending dispute defense, RBI Fair Practices Code enforcement, and institutional NPA compromise settlements across India.
              </p>
            </div>

            {/* Card 2: Emergency CTA Card (#2452ae Background) */}
            <div
              className="rounded-3xl text-white p-5 sm:p-6 shadow-md space-y-4"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-extrabold tracking-wide uppercase">
                <Lock className="w-3 h-3 text-white" />
                <span>100% Confidential Support</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black leading-tight">
                Facing Harassment From KreditBee Agents?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed">
                Halt relative calling, cyber threats, and illegal collection visits today with institutional legal representation and RBI grievance filing.
              </p>
              <Link
                href="/contact"
                className="w-full py-3 bg-white text-blue-900 hover:text-[#1886ff] hover:bg-slate-50 rounded-xl font-extrabold text-xs sm:text-sm text-center block transition-all shadow-sm"
              >
                Stop Recovery Harassment Now
              </Link>
              <div className="pt-2 border-t border-white/15 text-center">
                <a
                  href="tel:+918800226635"
                  className="text-xs font-bold text-white/90 hover:text-white inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: +91-8800226635</span>
                </a>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs text-slate-600">
              <h4 className="font-bold text-slate-900 text-sm">CredSettle Trust Commitments</h4>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> 100% transparent legal consultation and dispute evaluation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct NBFC Remittance:</strong> No middleman accounts; direct settlement with Krazybee.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Compliance Verification:</strong> Direct enforcement of central banking directions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Dedicated digital loan settlement advocates.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Legal Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/stop-recovery-agent-harassment"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Stop Recovery Agent Harassment
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Legal rights &amp; protection roadmap &rarr;</span>
                </Link>

                <Link
                  href="/rbi-rules-for-recovery-agents"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI Recovery Agent Guidelines
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Timings, conduct &amp; restrictions &rarr;</span>
                </Link>

                <Link
                  href="/ecs-nach-bounce-legal-notice-section-25"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 25 NACH Notice Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Auto-debit failure legal remedies &rarr;</span>
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

fs.writeFileSync(
  path.join(__dirname, '../src/app/kreditbee-recovery-agent-harassment/page.tsx'),
  pageContent,
  'utf8'
);

fs.writeFileSync(
  path.join(__dirname, '../src/app/kreditbee-recovery-agent-harassment/KreditbeeRecoveryAgentHarassmentClient.tsx'),
  clientContent,
  'utf8'
);

console.log("Prose refined and updated successfully.");
