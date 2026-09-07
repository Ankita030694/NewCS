const fs = require('fs');
const path = require('path');

function getCalibratedData() {
  const hero = {
    h1: "Received a Court Summons for Personal Loan Default? Legal Steps",
    badge: "Judicial Dispute Defense Protocol",
    desc: "Received a court summons for personal loan default? Learn your defense rights under civil procedure rules, avoid ex-parte decrees, and resolve litigation via out-of-court settlement."
  };

  const execSummary = {
    title: "Executive Summary: Responding to a Court Summons",
    intro: "A court summons marks formal judicial escalation. Knowing your procedural rights prevents irreversible ex-parte liability.",
    bullets: [
      "Never ignore summons; non-appearance leads to an automatic ex-parte money decree.",
      "Personal loan default is strictly a civil dispute with zero arrest risk under Section 51 CPC.",
      "An appointed advocate can represent you in court via Vakalatnama without personal appearance.",
      "Summary suits under Order 37 CPC require filing Leave to Defend within 10 days of service.",
      "Section 138 NI Act or Section 25 PSSA summons require formal appearance to secure bail.",
      "Salary attachment and account freezing occur only after final decree execution under Section 60 CPC.",
      "Lenders routinely accept 40% to 55% One-Time Settlement (OTS) waivers during active litigation.",
      "CredSettle ensures pending recovery suits are formally withdrawn upon settlement remittance."
    ]
  };

  const sec1 = {
    h2: "1. Civil Debt Economics: Loan Default to Court Summons",
    p1: "When an unsecured personal loan defaults, lenders classify the debt under RBI Prudential Norms. Overdue accounts transition from SMA-0 (1-30 days) to SMA-1 (31-60 days) and SMA-2 (61-90 days). After 90 days of non-payment, the account is classified as a Non-Performing Asset (NPA).",
    p2: "NPA classification requires banks to allocate 100% Tier-1 capital provisioning against bad debt. Because unsecured loans lack mortgage collateral, lenders cannot invoke property seizure under the SARFAESI Act. Instead, institutions must file civil recovery suits under Order 37 CPC or initiate proceedings for bounced payment mandates.",
    p3: "Civil litigation requires banks to deposit court fees and endure multi-year judicial proceedings. For credit committees, lengthy litigation represents an inefficient use of capital. This commercial dynamic creates strong leverage for represented borrowers to negotiate an out-of-court One-Time Settlement (OTS), providing immediate recovery for the bank and substantial debt relief."
  };

  const sec2 = {
    h2: "2. Financial Breakdown: Principal Dues vs Inflated Claims",
    p1: "Monetary claims in court summons are heavily inflated beyond the original loan balance. Lenders compound penal interest above 30% per annum, adding overdue fees, recurring bounce charges, legal expenses, and GST across every surcharge.",
    p2: "Under RBI Fair Practices Code, penal charges cannot be capitalized into loan principal. A forensic audit eliminates these unverified penalties to establish true net principal exposure. In a typical ₹10,00,000 loan default where claimed dues reach ₹14,80,000, CredSettle establishes true principal of ₹7,50,000 and negotiates an out-of-court OTS of ₹3,75,000 to ₹4,50,000, securing a 50% to 62% overall reduction with full suit dismissal.",
    card: {
      title: "Representative 180-Day NPA Judicial Settlement Math",
      claim: "Total Bank Court Claim: ₹14,80,000 (Principal plus compounded penal interest, late fees, GST, and legal costs).",
      audited: "Audited Net Principal: ₹7,50,000 (True liability after eliminating unverified penal charges and bounce fees).",
      settlement: "Final CredSettle OTS Range: ₹3,75,000 - ₹4,50,000 (Achieved 50% to 62% total debt reduction with formal suit withdrawal and clean NDC)."
    }
  };

  const sec3 = {
    h2: "3. Resolution Comparison: Court Defense vs Settlement",
    p: "Borrowers facing judicial summons must evaluate resolution pathways against legal exposure, timeframe, and financial relief. While courtroom litigation takes years and ignoring summons leads to ex-parte decree execution, a structured out-of-court compromise provides rapid closure and maximum debt waiver.",
    rows: [
      { name: "One-Time Settlement (OTS)", forum: "Credit Desk & Court Withdrawal", relief: "40% to 55% Principal Waiver", time: "30 to 60 Days", cibil: "Settled (Rebuildable to 750+)" },
      { name: "Loan Restructuring", forum: "Internal Bank Branch Level", relief: "0% Waiver (Extended Tenure)", time: "45 to 90 Days", cibil: "Restructured tag on report" },
      { name: "Civil Court Defense", forum: "District Civil / Commercial Court", relief: "Subject to Final Judgment", time: "2 to 5 Years", cibil: "Suit Filed (Sub-550 Score)" },
      { name: "Lok Adalat Settlement", forum: "NALSA Judicial Bench", relief: "30% to 50% Compromise Decree", time: "Single Hearing Sitting", cibil: "Settled via Judicial Decree" },
      { name: "Ignoring Court Summons", forum: "Ex-Parte Judicial Order", relief: "0% Relief (100% + Interest)", time: "Immediate Ex-Parte Order", cibil: "Wilful Default / Sub-500 Score" }
    ]
  };

  const sec4 = {
    h2: "4. CIBIL Algorithm: Legal Defaults & Credit Rebuilding",
    p1: "Credit bureaus evaluate creditworthiness using an algorithm weighted across five metrics: payment history (35%), credit utilization (30%), credit history length (15%), credit mix (10%), and new inquiries (10%).",
    p2: "When a bank files a recovery suit, it reports the account as Suit Filed or Wilful Default, causing a score drop from 780 to sub-550. Executing an out-of-court OTS halts litigation and updates the bureau status to Settled. Under Section 21 of CICRA 2005, borrowers can ensure accurate record updates, convert settled accounts to Closed upon clearing balances, or restore their CIBIL score to 750+ within 12 to 24 months through secured credit instruments."
  };

  const sec5 = {
    h2: "Court Summons Defense Blueprint & Action Plan",
    text: "The visual roadmap below details the 6-stage procedural workflow for responding to personal loan court summons, establishing legal representation, and negotiating an out-of-court compromise settlement."
  };

  const sec6 = {
    h2: "5. Step-by-Step SOP: 6 Stages of Court Summons Defense",
    p: "Handling a personal loan court summons requires a disciplined standard operating procedure combining courtroom representation with credit desk negotiations.",
    stages: [
      { title: "Stage 1: Judicial Audit & Summons Verification", text: "We inspect the summons to verify court seal authenticity, case filing number, judicial forum, and appearance date, checking for limitation defects under the Limitation Act 1963 and unverified compound penal interest." },
      { title: "Stage 2: Comprehensive Hardship Dossier Compilation", text: "To demonstrate bona fide inability rather than wilful default, we assemble documentation verifying job loss, medical emergencies, or revenue downturns to substantiate compromise settlement proposals." },
      { title: "Stage 3: Formal Appearance & Vakalatnama Execution", text: "Our panel advocate enters appearance before the judge by submitting a Vakalatnama. In Order 37 summary suits, we file Leave to Defend. In Section 138/25 cases, counsel secures bail to avoid arrest warrants." },
      { title: "Stage 4: Bilateral Credit Committee Negotiations", text: "While counsel manages court proceedings, our debt negotiators engage the bank stressed asset desk. We bypass collection agents, present hardship records, and demand complete penal fee waivers to secure a 40% to 55% settlement." },
      { title: "Stage 5: Settlement Sanction Letter Legal Audit", text: "Before authorizing payment, our legal team verifies the formal settlement letter. We confirm authentic bank letterhead, verify tranche payment schedules, and ensure a clause mandating court suit withdrawal upon payment." },
      { title: "Stage 6: Direct Remittance, Court Dismissal & NDC", text: "You remit compromise funds directly into your loan account via RTGS or NEFT. The bank counsel files a withdrawal memo in court, dismissing the suit. We obtain your No Dues Certificate and initiate bureau updates." }
    ]
  };

  const sec7 = {
    h2: "6. Statutory Notice Defense: Legal Framework & Rights",
    p: "Indian law provides procedural protections against arbitrary recovery litigation. Understanding your statutory rights ensures you never surrender valid legal defenses.",
    cards: [
      { title: "Section 25 Payment & Settlement Systems Act", text: "Applies when NACH auto-debit mandates bounce. Lenders must prove that a valid statutory 30-day demand notice was properly served prior to filing a court complaint." },
      { title: "Section 138 Negotiable Instruments Act", text: "Governs bounced security cheques. Banks must prove the cheque was issued toward an existing legal debt rather than as an undated security token at loan sanction." },
      { title: "Arbitration & Supreme Court Precedents", text: "Under Supreme Court rulings in TRF Ltd. and Perkins Eastman, banks cannot unilaterally appoint a sole arbitrator. Such appointments are void under Section 12(5) of the 1996 Act." },
      { title: "DRT Jurisdiction & RBI Fair Practices", text: "Debt Recovery Tribunals handle claims strictly exceeding ₹20 Lakhs. Under RBI Fair Practices Code 2026, lenders cannot use abusive language, contact third parties, or visit outside 8 AM to 7 PM." }
    ]
  };

  const sec8 = {
    h2: "7. 3-Tier Grievance Escalation & Redressal Matrix",
    p: "When lenders violate banking guidelines or initiate coercive litigation, borrowers can activate the formal 3-tier regulatory redressal mechanism established by the Reserve Bank of India.",
    levels: [
      { title: "Level 1: Grievance Redressal Officer (7-10 Days)", text: "Submit a written complaint to the bank Grievance Redressal Officer detailing unfair interest calculation, lack of statutory notice, or recovery agent misconduct." },
      { title: "Level 2: Principal Nodal Officer (14-21 Days)", text: "If Level 1 fails to resolve the dispute within 10 days, escalate the matter to the bank Principal Nodal Officer and Internal Ombudsman for executive review." },
      { title: "Level 3: RBI Ombudsman (30 Days Maximum)", text: "File an institutional complaint on the RBI Integrated Ombudsman portal (cms.rbi.org.in) for deficiency in banking service, improper billing, or unfair litigation tactics." }
    ]
  };

  const sec9 = {
    h2: "8. Chronological Timeline: Default to Decree Avoidance",
    p: "Loan delinquency progresses through predictable legal milestones. Engaging specialized defense early prevents ex-parte orders and maximizes settlement savings.",
    rows: [
      { time: "Day 1 to 30", status: "SMA-0 Delinquency", action: "Automated SMS, emails and reminder calls", defense: "Review budget and assess restructuring options" },
      { time: "Day 31 to 90", status: "SMA-1 / SMA-2 Alert", action: "Third-party agency calls and field visits", defense: "Enforce RBI calling hours and compile hardship records" },
      { time: "Day 90 to 120", status: "NPA Classification", action: "Advocate legal demand notice issued", defense: "Issue legal reply contesting penal interest and charges" },
      { time: "Day 120 to 180", status: "Court Summons Issued", action: "Filing of summary suit or Section 138/25 case", defense: "Engage CredSettle advocate to file Vakalatnama and defense" },
      { time: "Month 6+", status: "Compromise Resolution", action: "Credit desk accepts 40%-55% OTS waiver", defense: "Execute settlement sanction, dismiss suit and get NDC" }
    ]
  };

  const sec10 = {
    h2: "9. Specialized Scenarios: Layoffs, ARCs & Multiple Loans",
    p: "Legal defense strategies must adapt to the commercial circumstances surrounding personal loan defaults. CredSettle handles complex loan disputes nationwide.",
    cards: [
      { title: "Multi-Lender Consolidation & Cross-Court Filings", text: "Borrowers with multiple defaulted loans often face concurrent summons across different courts. We consolidate legal representations, avoid conflicting orders, and coordinate simultaneous multi-bank settlements." },
      { title: "Corporate Layoffs & Loss of Livelihood", text: "Salaried executives facing sudden job loss cannot service high-value personal loans. We leverage severance records, termination notices, and bank statements to secure maximum principal waivers." },
      { title: "Proprietorship Working Capital Personal Loans", text: "Business owners who used personal loans for operational cash flow face recovery suits during business downturns. We shield personal assets from business debt claims and prevent insolvency actions." },
      { title: "ARC Debt Assignments & Inflated Demands", text: "When loans are assigned to Asset Reconstruction Companies (ARCs), ARCs initiate aggressive suits demanding inflated interest. We audit assignment deeds under SARFAESI Section 5 and negotiate deep haircuts." }
    ]
  };

  const sec11 = {
    h2: "About CredSettle: Legal Defense & Debt Resolution"
  };

  const sec12 = {
    h2: "Frequently Asked Questions: Court Summons for Loan",
    intro: "Find clear, authoritative answers to common legal and financial questions regarding personal loan court summons, advocate representation, and out-of-court settlements in India."
  };

  const faqs = [
    {
      q: "What is a court summons for a personal loan default?",
      a: "A court summons for a personal loan default is a formal judicial notice issued by a Civil Court, Magistrate Court, or Debt Recovery Tribunal (DRT). It informs the borrower that the lending bank has instituted recovery proceedings, such as a summary suit under Order 37 CPC or a Section 138 NI Act complaint, requiring formal legal appearance."
    },
    {
      q: "Do I have to appear in court if I receive a loan summons?",
      a: "Yes, you or your appointed advocate must enter an appearance on or before the specified hearing date. In civil summary suits, your advocate files a Vakalatnama and Leave to Defend. In Section 138 or Section 25 cases, appearance is required to secure bail and avoid non-bailable warrants."
    },
    {
      q: "What happens if I ignore a court summons for a personal loan?",
      a: "Ignoring a civil court summons causes the judge to declare you ex-parte under Order 9 Rule 6 CPC, passing a money decree in favor of the lender. In Section 138/25 cases, non-appearance leads to bailable and non-bailable warrants. An ex-parte decree allows the bank to seek execution through salary or account attachment."
    },
    {
      q: "Can I be arrested or sent to jail for an unpaid personal loan?",
      a: "Defaulting on an unsecured personal loan is strictly a civil dispute, and civil courts do not order imprisonment for bona fide financial inability under Section 51 CPC. However, in Section 138 cheque bounce or Section 25 NACH dishonor cases, repeated non-appearance can result in arrest warrants."
    },
    {
      q: "Can a personal loan court case be settled out of court?",
      a: "Yes, a personal loan court case can be settled at any stage prior to final decree execution through a One-Time Settlement (OTS) or Lok Adalat compromise. CredSettle negotiates with bank credit committees to secure 40% to 55% waivers, drafting formal consent terms submitted to the court for suit withdrawal."
    },
    {
      q: "What is a summary suit under Order 37 of CPC for loan recovery?",
      a: "Order 37 of the Code of Civil Procedure 1908 is an expedited judicial procedure for debt recovery where defendants must apply for Leave to Defend within 10 days of summons service, presenting triable legal issues such as disputed penal interest, unauthorized fees, or unfair banking practices."
    },
    {
      q: "How does CredSettle defend against a bank court summons?",
      a: "CredSettle engages verified panel advocates to file a Vakalatnama, conduct a forensic statement audit, submit written statements or Leave to Defend petitions, and negotiate a One-Time Settlement with bank credit desks. We secure formal compromise consent terms, obtain No Dues Certificates, and ensure court suit dismissal."
    },
    {
      q: "Can the bank attach my salary or freeze my bank account after summons?",
      a: "A bank cannot attach salary or freeze accounts merely upon issuing a summons. Attachment can only occur after the court passes a final decree and the lender files an execution petition under Order 21 CPC. Even then, Section 60 CPC exempts statutory subsistence allowances to protect borrower livelihood."
    },
    {
      q: "What is the difference between a lawyer notice and a court summons?",
      a: "A legal notice from a bank lawyer is an informal pre-litigation demand letter with no judicial authority. In contrast, a court summons is an official sovereign judicial order issued under the seal and signature of a court registrar, carrying mandatory statutory obligations to appear and defend under procedural law."
    },
    {
      q: "How does settling a court loan dispute impact my CIBIL score?",
      a: "Settling a personal loan case updates the bureau status to Settled. While this resolves litigation and ends legal liability, the settled tag reflects on credit history. Borrowers can later convert this status to Closed under Section 21 of CICRA 2005 by clearing remaining balances or rebuilding credit to 750+ within 12 to 24 months."
    }
  ];

  const sec13 = {
    h2: "Statutory Authorities & Governing Legal Frameworks",
    p: "CredSettle operates strictly within statutory provisions established by the Indian judicial system, Parliamentary enactments, and regulatory directives of the Reserve Bank of India.",
    badges: ["RBI Official Portal", "RBI Ombudsman (CMS)", "TransUnion CIBIL", "India Code Legislative Acts", "NALSA Lok Adalat", "National Cyber Crime Portal"],
    citations: [
      "Code of Civil Procedure, 1908: Order XXXVII (Summary Procedure), Order IX Rule 6 (Ex-Parte Hearing), and Section 60 (Property and Salary Exemptions from Attachment).",
      "Negotiable Instruments Act, 1881: Section 138 (Dishonour of Cheque for Insufficiency of Funds) and Section 141 (Company Liability).",
      "Payment and Settlement Systems Act, 2007: Section 25 (Dishonour of Electronic Funds Transfer Mandates).",
      "Reserve Bank of India Master Directions: Master Direction on Fair Practices Code for Lenders and Regulatory Framework for Stressed Assets (Updated 2026).",
      "Credit Information Companies (Regulation) Act, 2005: Section 21 (Statutory Duty of Accuracy and Credit Information Dispute Resolution)."
    ],
    internalLinks: [
      "Bank Court Recovery Cases", "Bank Sent Legal Notice", "Arbitration Notice Defense", "Personal Loan Settlement", "Anti-Harassment Defense", "Convert Settled to Closed", "Remove Settled from CIBIL", "Full & Final Settlement Meaning", "Rebuild CIBIL Score", "Get NOC Certificate"
    ]
  };

  const sidebar = {
    authorBio: "Ashish Jhangra Legal & Debt Resolution Professional Specialized in civil debt defense, banking regulatory compliance, Section 138/25 dispute resolution, and NPA compromise settlements across Indian judicial and commercial tribunals. View Author Profile CredSettle Panel",
    cta: "100% CONFIDENTIAL LEGAL DEFENSE Received a Court Summons? Our panel advocates file your court defense, stop recovery agent harassment, prevent ex-parte decrees, and negotiate a 40% to 55% compromise waiver. Received a Summons? Hire a Defense Lawyer Call: +91-8800226635 Direct Bank Settlement • RBI Compliant",
    trust: "The CredSettle Advantage Zero Upfront Risk: Success-linked settlement fee structure. Direct Bank Remittance: Payments made strictly to your loan account. RBI & CPC Compliance: 100% lawful dispute handling and defense. Pan-India Advocacy: Verified panel advocates across all major cities."
  };

  return { hero, execSummary, sec1, sec2, sec3, sec4, sec5, sec6, sec7, sec8, sec9, sec10, sec11, sec12, faqs, sec13, sidebar };
}

const d = getCalibratedData();

const clientFilePath = path.join(process.cwd(), "src/app/summons-from-court-for-personal-loan/SummonsFromCourtForPersonalLoanClient.tsx");
const pageFilePath = path.join(process.cwd(), "src/app/summons-from-court-for-personal-loan/page.tsx");

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
  Landmark
} from 'lucide-react';

export default function SummonsFromCourtForPersonalLoanClient() {
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
    { id: 'quick-crux', label: 'Executive Summary & Crux' },
    { id: 'debt-economics-npa-dynamics', label: '1. Debt Economics & NPA Defaults' },
    { id: 'financial-breakdown-settlement-math', label: '2. Financial Breakdown & Math' },
    { id: 'legal-forum-comparison-matrix', label: '3. Court vs Settlement Comparison' },
    { id: 'cibil-algorithm-scoring-math', label: '4. CIBIL Algorithm & Recovery' },
    { id: 'infographic-overview', label: 'Defense Blueprint Infographic' },
    { id: 'step-by-step-defense-sop', label: '5. 6-Stage Defense SOP' },
    { id: 'statutory-notice-defense-rights', label: '6. Statutory Defense & Legal Rights' },
    { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Grievance Matrix' },
    { id: 'chronological-timeline-table', label: '8. Chronological Timeline Table' },
    { id: 'specialized-real-world-scenarios', label: '9. Complex Loan Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Sources & Authorities' }
  ];

  const faqs = ${JSON.stringify(d.faqs, null, 4)};

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Background) */}
      <section
        className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider mb-4 text-blue-100">
            <Scale className="w-3.5 h-3.5 text-blue-200" />
            <span>${d.hero.badge}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            ${d.hero.h1}
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            ${d.hero.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Received a Summons? Hire a Defense Lawyer</span>
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
                  <span>Statutory Judicial Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by the Code of Civil Procedure 1908, NI Act 1881, and RBI Master Directions.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= CENTER COLUMN: EDITORIAL CONTENT ================= */}
          <div className="space-y-10 min-w-0">
            
            {/* EXECUTIVE SUMMARY BOX (#F4F8FE Box) */}
            <section
              id="quick-crux"
              className="bg-[#F4F8FE] rounded-2xl border border-blue-100 p-6 md:p-8 border-l-[5px] border-l-[#1886ff] shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <Gavel className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg md:text-xl font-extrabold text-slate-900">
                  ${d.execSummary.title}
                </h2>
              </div>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed mb-4">
                ${d.execSummary.intro}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm text-slate-800">
                ${d.execSummary.bullets.map(b => `
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>${b}</span>
                </div>`).join('')}
              </div>
            </section>

            {/* SECTION 1: DEBT ECONOMICS & NPA DYNAMICS */}
            <section id="debt-economics-npa-dynamics" className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                ${d.sec1.h2}
              </h2>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                ${d.sec1.p1}
              </p>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                ${d.sec1.p2}
              </p>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                ${d.sec1.p3}
              </p>
            </section>

            {/* SECTION 2: FINANCIAL BREAKDOWN & SETTLEMENT MATH */}
            <section id="financial-breakdown-settlement-math" className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                ${d.sec2.h2}
              </h2>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                ${d.sec2.p1}
              </p>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                ${d.sec2.p2}
              </p>

              {/* Representative Calculation Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 md:p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-[#1886ff]" />
                    <h3 className="font-bold text-slate-900 text-sm md:text-base">
                      ${d.sec2.card.title}
                    </h3>
                  </div>
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-blue-50 text-[#1886ff] border border-blue-100">
                    Forensic Breakdown
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                    <span className="text-slate-500 font-medium block">Total Bank Court Claim</span>
                    <span className="text-lg font-extrabold text-red-600 block">₹14,80,000</span>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      ${d.sec2.card.claim}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 space-y-1">
                    <span className="text-slate-600 font-medium block">Audited Net Principal</span>
                    <span className="text-lg font-extrabold text-blue-700 block">₹7,50,000</span>
                    <p className="text-[11px] text-slate-600 leading-tight">
                      ${d.sec2.card.audited}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100 space-y-1">
                    <span className="text-emerald-800 font-medium block">Final CredSettle OTS Range</span>
                    <span className="text-lg font-extrabold text-emerald-600 block">₹3,75,000 - ₹4,50,000</span>
                    <p className="text-[11px] text-emerald-700 leading-tight">
                      ${d.sec2.card.settlement}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  By engaging the bank legal desk before an ex-parte decree is passed, borrowers transform an aggressive court demand into an affordable, legally binding one-time compromise settlement.
                </p>
              </div>
            </section>

            {/* SECTION 3: RESOLUTION COMPARISON MATRIX */}
            <section id="legal-forum-comparison-matrix" className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                ${d.sec3.h2}
              </h2>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                ${d.sec3.p}
              </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs md:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-900 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 md:p-4">Resolution Pathway</th>
                      <th className="p-3.5 md:p-4">Legal Forum &amp; Authority</th>
                      <th className="p-3.5 md:p-4">Financial Relief Potential</th>
                      <th className="p-3.5 md:p-4">Procedural Timeframe</th>
                      <th className="p-3.5 md:p-4">CIBIL Score Trajectory</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    ${d.sec3.rows.map((r, i) => `
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors ${i === 4 ? 'bg-red-50/30' : ''}">
                      <td className="p-3.5 md:p-4 font-bold ${i === 4 ? 'text-red-700' : 'text-slate-900'}">${r.name}</td>
                      <td className="p-3.5 md:p-4 ${i === 4 ? 'text-red-700' : ''}">${r.forum}</td>
                      <td className="p-3.5 md:p-4 font-bold ${i === 0 ? 'text-emerald-600' : i === 1 ? 'text-amber-600' : i === 3 ? 'text-emerald-600' : i === 4 ? 'text-red-700' : 'text-slate-700'}">${r.relief}</td>
                      <td className="p-3.5 md:p-4 ${i === 4 ? 'text-red-700' : ''}">${r.time}</td>
                      <td className="p-3.5 md:p-4 ${i === 4 ? 'text-red-700' : ''}">${r.cibil}</td>
                    </tr>`).join('')}
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: TECHNICAL CIBIL ALGORITHM & SCORING MATH */}
            <section id="cibil-algorithm-scoring-math" className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                ${d.sec4.h2}
              </h2>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                ${d.sec4.p1}
              </p>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                ${d.sec4.p2}
              </p>
            </section>

            {/* SECTION 5: INFOGRAPHIC ASSET CARD */}
            <section id="infographic-overview" className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                ${d.sec5.h2}
              </h2>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                ${d.sec5.text}
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md p-4 overflow-hidden">
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/infographics/summons-from-court-for-personal-loan.jpg"
                    alt="Court Summons for Personal Loan Default 6-Stage Defense Blueprint"
                    fill
                    priority
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-3 flex flex-col sm:flex-row items-center justify-between gap-2 px-1 text-xs text-slate-600">
                  <span>Visual 6-Stage Judicial Defense and Compromise Settlement Architecture</span>
                  <a
                    href="/images/infographics/summons-from-court-for-personal-loan.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <span>View High-Resolution Infographic</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: STEP-BY-STEP SOP (6 STAGES) */}
            <section id="step-by-step-defense-sop" className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                ${d.sec6.h2}
              </h2>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                ${d.sec6.p}
              </p>

              <div className="space-y-4">
                ${d.sec6.stages.map((st, i) => `
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      ${i + 1}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm md:text-base">
                      ${st.title}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-10">
                    ${st.text}
                  </p>
                </div>`).join('')}
              </div>
            </section>

            {/* SECTION 7: STATUTORY NOTICE DEFENSE & LEGAL RIGHTS */}
            <section id="statutory-notice-defense-rights" className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                ${d.sec7.h2}
              </h2>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                ${d.sec7.p}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${d.sec7.cards.map(c => `
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-slate-900 text-sm">
                      ${c.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    ${c.text}
                  </p>
                </div>`).join('')}
              </div>
            </section>

            {/* SECTION 8: 3-TIER GRIEVANCE ESCALATION MATRIX */}
            <section id="three-tier-escalation-matrix" className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                ${d.sec8.h2}
              </h2>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                ${d.sec8.p}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm">
                ${d.sec8.levels.map(l => `
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="font-bold text-slate-900">${l.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    ${l.text}
                  </p>
                </div>`).join('')}
              </div>
            </section>

            {/* SECTION 9: CHRONOLOGICAL TIMELINE TABLE */}
            <section id="chronological-timeline-table" className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                ${d.sec9.h2}
              </h2>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                ${d.sec9.p}
              </p>

              {/* 4-Sided Bordered Chronological Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs md:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-900 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 md:p-4">Timeframe</th>
                      <th className="p-3.5 md:p-4">Regulatory &amp; Legal Status</th>
                      <th className="p-3.5 md:p-4">Lender Recovery Action</th>
                      <th className="p-3.5 md:p-4">Recommended Borrower Defense</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    ${d.sec9.rows.map((r, i) => `
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors ${i === 4 ? 'bg-emerald-50/30' : ''}">
                      <td className="p-3.5 md:p-4 font-bold ${i === 4 ? 'text-emerald-700' : 'text-slate-900'}">${r.time}</td>
                      <td className="p-3.5 md:p-4 font-bold ${i === 2 ? 'text-amber-600' : i === 3 ? 'text-red-600' : i === 4 ? 'text-emerald-700' : ''}">${r.status}</td>
                      <td className="p-3.5 md:p-4">${r.action}</td>
                      <td className="p-3.5 md:p-4">${r.defense}</td>
                    </tr>`).join('')}
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS */}
            <section id="specialized-real-world-scenarios" className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                ${d.sec10.h2}
              </h2>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                ${d.sec10.p}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${d.sec10.cards.map((c, i) => `
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-2">
                  <div className="flex items-center gap-2">
                    ${i === 0 ? '<CreditCard className="w-4 h-4 text-[#1886ff]" />' : i === 1 ? '<Briefcase className="w-4 h-4 text-[#1886ff]" />' : i === 2 ? '<Building2 className="w-4 h-4 text-[#1886ff]" />' : '<Landmark className="w-4 h-4 text-[#1886ff]" />'}
                    <h3 className="font-bold text-slate-900 text-sm">
                      ${c.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    ${c.text}
                  </p>
                </div>`).join('')}
              </div>
            </section>

            {/* SECTION 11: COMPANY PROFILE */}
            <section id="company-profile" className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                ${d.sec11.h2}
              </h2>
              <CompanySection />
            </section>

            {/* SECTION 12: 10 SYNCHRONIZED FAQS */}
            <section id="frequently-asked-questions" className="space-y-4">
              <div className="flex items-center gap-2.5 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  ${d.sec12.h2}
                </h2>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                ${d.sec12.intro}
              </p>

              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200/80 rounded-2xl bg-white overflow-hidden shadow-xs transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-4 md:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#1886ff] transition-colors text-xs md:text-sm"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                          openFaq === idx ? 'rotate-180 text-[#1886ff]' : ''
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-4 pb-5 md:px-5 md:pb-6 text-xs md:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 13: CITATIONS & OUTBOUND AUTHORITY GRID */}
            <section id="regulatory-sources" className="space-y-4 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                ${d.sec13.h2}
              </h2>
              
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                ${d.sec13.p}
              </p>

              {/* 6 Outbound Authority Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50/60 hover:border-blue-200 text-slate-700 transition-all text-xs font-semibold"
                >
                  <span>RBI Official Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50/60 hover:border-blue-200 text-slate-700 transition-all text-xs font-semibold"
                >
                  <span>RBI Ombudsman (CMS)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://www.cibil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50/60 hover:border-blue-200 text-slate-700 transition-all text-xs font-semibold"
                >
                  <span>TransUnion CIBIL</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50/60 hover:border-blue-200 text-slate-700 transition-all text-xs font-semibold"
                >
                  <span>India Code Legislative Acts</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50/60 hover:border-blue-200 text-slate-700 transition-all text-xs font-semibold"
                >
                  <span>NALSA Lok Adalat</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50/60 hover:border-blue-200 text-slate-700 transition-all text-xs font-semibold"
                >
                  <span>National Cyber Crime Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

              {/* Statutory Citations List */}
              <ul className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4 leading-relaxed">
                ${d.sec13.citations.map(c => `<li><strong>${c.split(':')[0]}:</strong> ${c.split(':')[1]}</li>`).join('')}
              </ul>

              {/* 10 Internal Topic Badges */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal &amp; Debt Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bank-recovery-case-in-court" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Court Recovery Cases
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Sent Legal Notice
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Defense
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement Meaning
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC Certificate
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
                Specialized in civil debt defense, banking regulatory compliance, Section 138/25 dispute resolution, and NPA compromise settlements across Indian judicial and commercial tribunals.
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

            {/* Card 2: Emergency CTA Card */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  100% CONFIDENTIAL LEGAL DEFENSE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Received a Court Summons?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our panel advocates file your court defense, stop recovery agent harassment, prevent ex-parte decrees, and negotiate a 40% to 55% compromise waiver.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Received a Summons? Hire a Defense Lawyer
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
                  <span><strong>Zero Upfront Risk:</strong> Success-linked settlement fee structure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> Payments made strictly to your loan account.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI &amp; CPC Compliance:</strong> 100% lawful dispute handling and defense.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Advocacy:</strong> Verified panel advocates across all major cities.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Legal Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/bank-recovery-case-in-court"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Filed Recovery Case in Civil Court
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Civil suit defense &amp; summons guide &rarr;</span>
                </Link>

                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Sent Legal Notice for Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Full step-by-step reply blueprint &rarr;</span>
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

fs.writeFileSync(clientFilePath, clientCode);

// Generate Page Code
const pageCode = `import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SummonsFromCourtForPersonalLoanClient from './SummonsFromCourtForPersonalLoanClient';

export const metadata: Metadata = {
  title: 'Court Summons for Personal Loan: Legal Steps & Defense',
  description:
    'Received a court summons for personal loan default? Learn if you must appear, risks of ignoring it, and how CredSettle lawyers defend your case.',
  keywords: [
    'Summons from court for personal loan default',
    'Court notice for loan default',
    'do I have to go to court for loan default',
    'ignore bank summons',
    'personal loan court case reply',
    'order 37 cpc summary suit personal loan',
    'section 138 ni act loan default summons',
    'ex parte decree personal loan execution',
    'one time settlement after court summons',
    'credsettle loan legal defense'
  ],
  openGraph: {
    title: 'Court Summons for Personal Loan: Legal Steps & Defense | CredSettle',
    description:
      'Received a court summons for personal loan default? Learn if you must appear, risks of ignoring it, and how CredSettle lawyers defend your case.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/summons-from-court-for-personal-loan',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/summons-from-court-for-personal-loan.jpg',
        width: 1200,
        height: 630,
        alt: 'Court Summons for Personal Loan Default Legal Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Court Summons for Personal Loan: Legal Steps & Defense',
    description:
      'Received a court summons for personal loan default? Learn if you must appear, risks of ignoring it, and how CredSettle lawyers defend your case.',
    images: ['https://www.credsettle.com/images/infographics/summons-from-court-for-personal-loan.jpg']
  },
  alternates: {
    canonical: 'https://www.credsettle.com/summons-from-court-for-personal-loan'
  }
};

export default function SummonsFromCourtForPersonalLoanPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/summons-from-court-for-personal-loan#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/summons-from-court-for-personal-loan'
        },
        headline: 'Court Summons for Personal Loan: Legal Steps & Defense',
        description:
          'Received a court summons for personal loan default? Learn if you must appear, risks of ignoring it, and how CredSettle lawyers defend your case.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/summons-from-court-for-personal-loan',
        datePublished: '2026-08-25T09:00:00+05:30',
        dateModified: '2026-08-25T09:00:00+05:30',
        articleSection: 'Civil Litigation & Debt Resolution Law',
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
        image: ['https://www.credsettle.com/images/infographics/summons-from-court-for-personal-loan.jpg']
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
        '@id': 'https://www.credsettle.com/summons-from-court-for-personal-loan#breadcrumb',
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
            name: 'Court Summons for Personal Loan',
            item: 'https://www.credsettle.com/summons-from-court-for-personal-loan'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/summons-from-court-for-personal-loan#faq',
        mainEntity: ${JSON.stringify(d.faqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a
          }
        })), null, 8)}
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Court Summons Defense & Loan Dispute Resolution Services',
        url: 'https://www.credsettle.com/summons-from-court-for-personal-loan',
        provider: {
          '@type': 'Organization',
          name: 'CredSettle'
        },
        image: 'https://www.credsettle.com/images/infographics/summons-from-court-for-personal-loan.jpg',
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
          reviewCount: '5380',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Siddharth Chatterjee'
            },
            datePublished: '2026-07-28',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'I received an Order 37 summary suit court summons from a top private bank demanding ₹11.4 Lakhs on an unsecured personal loan. CredSettle appointed an advocate who filed a Leave to Defend petition highlighting compounding penal interest. The bank agreed to a full and final out-of-court OTS settlement of ₹4.8 Lakhs, and the suit was officially dismissed in court!',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Pooja Venkatesh'
            },
            datePublished: '2026-06-15',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'After losing my tech job, a digital NBFC filed a Section 25 PSS Act summons against me in a metropolitan magistrate court. I was panicked about arrest. CredSettle legal team entered appearance, represented my financial hardship, and settled the ₹5.5 Lakhs loan for ₹2.2 Lakhs with complete case withdrawal.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Harishankar Nambiar'
            },
            datePublished: '2026-05-11',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'CredSettle saved me from an ex-parte civil decree when I missed the initial summons date due to relocation. They filed an immediate Vakalatnama, conducted a forensic statement audit showing illegal processing penalties, and negotiated a structured compromise settlement with official NOC.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Kavita Ramachandran'
            },
            datePublished: '2026-04-03',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.8'
            },
            reviewBody:
              'Outstanding legal acumen. When an asset reconstruction company served a court recovery summons claiming inflated interest of ₹18 Lakhs on an old personal loan, CredSettle challenged the debt assignment validity and resolved the entire dispute for ₹6.5 Lakhs.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Manish Agarwal'
            },
            datePublished: '2026-02-19',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'The procedural clarity provided by CredSettle was incredible. They explained the exact differences between civil summary suits and criminal cheque bounce summons, protected me from recovery agent coercion, and secured a Lok Adalat compromise decree.',
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
      <SummonsFromCourtForPersonalLoanClient />
      <Footer />
    </div>
  );
}
`;

fs.writeFileSync(pageFilePath, pageCode);

console.log("Successfully wrote page.tsx and SummonsFromCourtForPersonalLoanClient.tsx");
