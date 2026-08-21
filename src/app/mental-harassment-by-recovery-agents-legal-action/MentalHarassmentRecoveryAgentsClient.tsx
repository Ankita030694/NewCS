'use client';

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
  Home,
  ShieldAlert,
  FileCheck,
  XCircle,
  Shield,
  MessageSquare,
  HeartHandshake,
  Eye
} from 'lucide-react';

export default function MentalHarassmentRecoveryAgentsClient() {
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
    { id: 'supreme-court-mandate', label: '1. Supreme Court Anti-Harassment Law' },
    { id: 'criminal-penalties-bns-ipc', label: '2. Criminal Penalties under BNS & IPC' },
    { id: 'rbi-master-directions', label: '3. RBI Recovery Agent Master Directions' },
    { id: 'harassment-vs-lawful-recovery-table', label: '4. Lawful vs. Unlawful Actions Matrix' },
    { id: 'emotional-distress-damages-math', label: '5. Suing for Damages & Compensation Math' },
    { id: 'infographic-overview', label: 'Visual 6-Stage Anti-Harassment Blueprint' },
    { id: 'step-by-step-defense-sop', label: '6. 6-Stage Legal Action SOP' },
    { id: 'formal-legal-notice-draft', label: '7. Cease & Desist Legal Terminal Draft' },
    { id: 'three-tier-escalation-matrix', label: '8. 3-Tier Grievance Redressal Matrix' },
    { id: 'chronological-resolution-milestones', label: '9. Chronological Resolution Timelines' },
    { id: 'specialized-harassment-scenarios', label: '10. App Blackmail, HR Shaming & Bouncers' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: "Can I sue a bank or NBFC in India for mental harassment caused by their recovery agents?",
      a: "Yes. Under the legal doctrine of Vicarious Liability, a bank or financial institution is strictly liable for the civil wrongs, torts, and criminal acts committed by third-party recovery agencies acting on its behalf. Borrowers can file a complaint with the District Consumer Disputes Redressal Commission (DCDRC) for deficiency of service and mental agony under the Consumer Protection Act, 2019, file a civil tort suit for damages for emotional distress, and lodge criminal FIRs against both the agency and bank officials under the Bharatiya Nyaya Sanhita (BNS) and Indian Penal Code (IPC)."
    },
    {
      q: "What specific criminal sections apply to abusive debt recovery agents under BNS and IPC?",
      a: "Abusive recovery practices violate multiple statutory criminal provisions under the Bharatiya Nyaya Sanhita, 2023 and corresponding IPC sections: Section 351 BNS / Section 506 IPC (Criminal Intimidation), Section 308 BNS / Section 383 IPC (Extortion by putting a person in fear of injury), Section 329 BNS / Section 441 IPC (Criminal Trespass), Section 356 BNS / Section 499 IPC (Defamation by shaming before relatives or workplace), Section 79 BNS / Section 509 IPC (Insulting the modesty of a woman), and Sections 66E, 67, and 67A of the Information Technology Act for morphing photos or digital privacy violations."
    },
    {
      q: "What constitutes illegal recovery agent harassment under RBI Master Directions?",
      a: "Under RBI Master Direction DOR.ORG.REC.65/21.04.158/2022-23, the following recovery actions are strictly illegal: calling before 8:00 AM or after 7:00 PM; contacting friends, relatives, colleagues, or neighbors who are not co-borrowers or guarantors; using abusive, vulgar, or threatening language; making unsolicited visits to the borrower's workplace; making repeated persistent calls that constitute nuisance; threatening physical violence, asset confiscation, or public humiliation; and concealing agent identity or refusing to furnish official bank authorization letters."
    },
    {
      q: "How much compensation can a consumer court award for recovery agent mental harassment?",
      a: "Consumer Commissions (DCDRC, SCDRC, and NCDRC) and Civil Courts in India have awarded compensations ranging from ₹50,000 to upwards of ₹25 Lakhs depending on the severity of the mental trauma, reputational damage, and medical distress caused. In landmark rulings such as ICICI Bank v. Shanti Devi and Standard Chartered Bank v. Vinod Kumar, courts awarded substantial exemplary damages, ordered complete waivers of outstanding penal interest, and mandated banks to pay litigation costs to affected borrowers."
    },
    {
      q: "How does the principle of Vicarious Liability make the bank responsible for third-party collection agencies?",
      a: "In the landmark Supreme Court ruling ICICI Bank Ltd. v. Prakash Kaur (2007) and standard common law jurisprudence, the apex court affirmed that banks cannot evade responsibility by hiding behind third-party outsourced collection agencies. Because the recovery agency acts as an authorized agent executing work for the bank's financial benefit, the principal (the bank) is vicariously liable for all tortious, abusive, defamatory, and coercive acts committed during the course of debt recovery."
    },
    {
      q: "What evidence is required to build an airtight mental harassment lawsuit against a bank?",
      a: "An airtight evidentiary foundation requires: (1) Timestamped audio and video recordings of abusive phone calls or doorstep altercations, (2) Detailed telecom call detail records (CDR) and screenshots proving incessant calling or calls outside statutory hours (8 AM–7 PM), (3) Certified true copies of abusive WhatsApp messages, SMS, or defamatory emails, (4) CCTV footage of unauthorized trespass at your residence or workplace, (5) Written witness testimonies from neighbors, co-workers, or relatives who witnessed harassment, and (6) Medical records, psychiatric evaluation reports, or prescription bills documenting acute stress, panic attacks, or clinical depression resulting from the trauma."
    },
    {
      q: "What is the procedure to file a complaint on the RBI Integrated Ombudsman portal (CMS)?",
      a: "To file an Ombudsman petition: (1) First lodge a formal written grievance with the bank's Branch Manager and Principal Nodal Officer (PNO), obtaining a formal complaint reference number. (2) If the bank rejects the complaint or fails to resolve it within 30 days, visit cms.rbi.org.in. (3) Fill in the electronic complaint form selecting Regulated Entity, upload audio/visual and written evidence, and cite violations of the RBI Master Direction on Outsourcing of Financial Services. (4) The Ombudsman can award compensation up to ₹20 Lakhs for financial loss and up to ₹1 Lakh exclusively for mental agony and loss of time."
    },
    {
      q: "Can recovery agents call my employer, colleagues, or HR department to demand debt repayment?",
      a: "No. Contacting your employer, HR department, or colleagues regarding personal debts is strictly illegal under RBI Master Directions and constitutes criminal defamation under Section 356 BNS / Section 499 IPC, as well as an unconstitutional breach of the Fundamental Right to Privacy under Article 21 (Justice K.S. Puttaswamy v. Union of India). Banks and their agents are legally barred from disclosing borrower financial distress to third parties."
    },
    {
      q: "What should I do if recovery agents morph photos or threaten my contact list via digital lending apps?",
      a: "Immediately take high-resolution screenshots of the messages, phone numbers, and morphed pictures. Do not delete chat histories. File an immediate complaint on the National Cyber Crime Reporting Portal (cybercrime.gov.in) and register a physical FIR under Sections 66E, 67, and 67A of the IT Act, 2000, along with Sections 308 (Extortion) and 356 (Defamation) of the BNS. Additionally, submit a complaint to the RBI Sachet portal (sachet.rbi.org.in) against the unregistered or non-compliant digital lending application."
    },
    {
      q: "Can filing a harassment lawsuit or police complaint help me negotiate a better One-Time Settlement (OTS)?",
      a: "Yes. When a bank faces substantiated criminal FIRs, pending RBI Ombudsman proceedings, or District Consumer Forum litigation exposing illegal collection tactics, their legal risk and brand reputation exposure escalate drastically. To mitigate regulatory penalties and avoid adverse court judgments, bank senior settlement committees are far more motivated to recall external collection files, waive 100% of accumulated penal interest and legal charges, and agree to a favorable compromise One-Time Settlement (OTS) with an unconditional No Dues Certificate."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. COMPACT HERO SECTION (#2452ae Background) */}
      <section
        className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Mental Harassment by Recovery Agents: Legal Action &amp; Suing Banks for Compensation
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Facing extreme mental trauma, abusive calls, or public shaming by recovery agents? Understand your legal rights under RBI Master Directions, BNS/IPC criminal provisions, and how to sue your bank for emotional distress.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>File a Harassment Lawsuit Against the Bank</span>
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
                  <span>Anti-Harassment Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Master Directions, Consumer Protection Act 2019 &amp; BNS/IPC.
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
                <span>EXECUTIVE BRIEF: SUING BANKS &amp; RECOVERY AGENT HARASSMENT LAWS</span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Vicarious Liability of Commercial Banks:</strong> The Supreme Court of India has firmly established that commercial banks and NBFCs cannot evade responsibility for third-party collection agencies. The lending institution is vicariously liable under both civil tort law and criminal jurisprudence for any harassment, extortion, or intimidation perpetrated by its contracted agents.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Strict Criminal Sanctions under BNS &amp; IPC:</strong> Verbal threats, late-night calls, public shaming, and doorstep intimidation constitute cognizable offenses under Bharatiya Nyaya Sanhita (BNS) Section 351 (Criminal Intimidation), Section 308 (Extortion), Section 329 (Criminal Trespass), and Section 356 (Defamation), punishable by imprisonment and substantial fines.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">RBI Master Direction Compliance Mandates:</strong> Under RBI Master Direction DOR.ORG.REC.65/21.04.158/2022-23, agents are strictly prohibited from calling outside 8:00 AM to 7:00 PM, contacting borrowers&apos; relatives, colleagues, or HR departments, making unannounced workplace visits, or using abusive or defamatory language.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Civil Damages for Emotional Distress &amp; Mental Agony:</strong> Borrowers subjected to coercive debt collection can claim extensive financial compensation through District Consumer Disputes Redressal Commissions (DCDRC) and Civil Courts for deficiency in service, loss of reputation, medical distress, and intentional infliction of mental trauma.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Strategic Leverage for Complete Debt Resolution:</strong> Initiating formal legal proceedings, lodging RBI Ombudsman complaints, and serving statutory Cease &amp; Desist notices compels banks to withdraw aggressive collection agencies, waive accumulated penal interest, and agree to favorable compromise One-Time Settlements (OTS).
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Supreme Court Anti-Harassment Law */}
            <section id="supreme-court-mandate" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Constitutional &amp; Judicial Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. The Supreme Court Stance: Why Banks Cannot Deploy Musclemen or Harass Borrowers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Defaulting on a bank loan, credit card balance, or personal finance installment in India is fundamentally a <strong>civil contractual dispute</strong>, never a criminal offense. However, commercial banks, Non-Banking Financial Companies (NBFCs), and predatory fintech apps routinely outsource recovery operations to aggressive third-party agencies that employ coercion, verbal abuse, workplace visits, and unlawful public shaming to force repayments.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Hon&apos;ble Supreme Court of India and various High Courts have delivered landmark rulings condemning these &quot;strong-arm&quot; tactics and establishing the strict legal accountability of lending institutions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-blue-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>ICICI Bank v. Prakash Kaur (2007)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court held that banks cannot deploy musclemen or goons to recover loans. Loan recovery must follow due civil process, and institutions employing abusive agents face criminal proceedings.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-indigo-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Vicarious Liability Rule</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lending institutions cannot wash their hands of third-party recovery misconduct. Under the principal-agent relationship, the bank is vicariously liable for all torts and crimes committed by collection agencies.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Award className="w-4 h-4" />
                    <span>Standard Chartered v. Vinod Kumar</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    National Consumer Disputes Redressal Commission (NCDRC) affirmed that sending musclemen and creating a public scene constitutes gross deficiency of service, awarding exemplary damages to the borrower.
                  </p>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm sm:text-base">
                  <ShieldAlert className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Right to Dignity &amp; Privacy under Article 21</span>
                </div>
                <p className="text-xs md:text-sm text-emerald-950 leading-relaxed">
                  In the nine-judge constitutional bench judgment <em>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017)</em>, the Supreme Court declared that the Right to Privacy and human dignity is an inalienable fundamental right under Article 21 of the Constitution. Calling a borrower&apos;s colleagues, contacting elderly parents, or posting defamatory statements online represents an egregious constitutional violation that entitles the victim to pursue both criminal prosecutions and constitutional writ remedies.
                </p>
              </div>
            </section>

            {/* SECTION 2: Criminal Penalties under BNS & IPC */}
            <section id="criminal-penalties-bns-ipc" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Criminal Codes</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Criminal Penalties under Bharatiya Nyaya Sanhita (BNS) &amp; IPC for Abusive Debt Collection
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When debt collection crosses the line from polite institutional reminders into threats of violence, social humiliation, unauthorized home intrusions, or cyber blackmail, it ceases to be a civil matter. Under the <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong> and the corresponding provisions of the <strong>Indian Penal Code, 1860 (IPC)</strong>, recovery agents and bank executives commit severe, cognizable criminal offenses:
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-1 rounded-md">
                      Section 351 BNS / Section 506 IPC
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Imprisonment up to 7 Years</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Criminal Intimidation &amp; Threats of Bodily Harm or Ruin
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Threatening a borrower with physical injury, destruction of property, social shaming, or criminal framing if they do not pay money immediately constitutes Criminal Intimidation. If the threat is to cause death, grievous hurt, or destruction of property, the offense is punishable by rigorous imprisonment for up to seven years.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
                      Section 308 BNS / Section 383 IPC
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Extortion &amp; Coercion</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Extortion by Putting Borrower in Fear of Injury
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Intentionally putting any person in fear of any injury to that person or to any other, and thereby dishonestly inducing the person so put in fear to deliver any property, valuable security, or cash constitutes Extortion. Demanding immediate transfer of funds under threat of home seizure or workplace confrontation meets the statutory definition of extortion.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                      Section 329 BNS / Section 441 IPC
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Criminal Trespass</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Unauthorized Entry into Residential Premises or Office
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Entering into or upon property in the possession of another with intent to commit an offense or to intimidate, insult, or annoy any person in possession of such property is Criminal Trespass. Recovery agents barging into your living room, refusing to leave when asked, or blocking your gate commit a direct criminal offense.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                      Section 356 BNS / Section 499 IPC &amp; IT Act Sec 66E
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Defamation &amp; Cyber Crime</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Workplace Defamation, Social Shaming &amp; Digital Contact Harassment
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Publishing imputations concerning a person intending to harm their reputation before neighbors, employers, or relatives constitutes Criminal Defamation. For fintech apps accessing phone contacts without consent, sending morphed photographs, or broadcasting debt notices on WhatsApp groups, Sections 66E, 67, and 67A of the Information Technology Act, 2000 apply directly with non-bailable arrest warrants.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3: RBI Master Directions */}
            <section id="rbi-master-directions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Shield className="w-4 h-4 text-[#1886ff]" />
                <span>Regulatory Code of Conduct</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. RBI Master Directions: Strict Boundaries Governing Recovery Agents
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India has issued comprehensive regulatory directions governing commercial banks, NBFCs, and digital lenders under <strong>Master Direction DOR.ORG.REC.65/21.04.158/2022-23</strong> and circulars on <em>Outsourcing of Financial Services</em>. These rules are legally binding on all regulated entities:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#1886ff]" />
                    Mandatory Timing &amp; Communication Protocols
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc list-inside">
                    <li><strong>Strict Calling Window (8:00 AM to 7:00 PM):</strong> Agents are strictly barred from telephoning borrowers before 8:00 AM or after 7:00 PM under any circumstances.</li>
                    <li><strong>Calling Frequency Limits:</strong> Repeated, persistent calling that borders on harassment or nuisance is strictly prohibited.</li>
                    <li><strong>Identification Disclosure:</strong> Agents must disclose their full identity, agency affiliation, and produce official bank authorization letters upon request.</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-emerald-600" />
                    Privacy Protection &amp; Third-Party Immunity
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc list-inside">
                    <li><strong>Absolute Ban on Third-Party Contact:</strong> Agents cannot disclose the borrower&apos;s debt to friends, family members, neighbors, or co-workers who are not co-borrowers or guarantors.</li>
                    <li><strong>Workplace Visitation Restrictions:</strong> Unannounced visits to the borrower&apos;s workplace are strictly prohibited unless the borrower has explicitly requested it in writing.</li>
                    <li><strong>Prohibition of Verbal Abuse:</strong> Use of vulgar language, derogatory insults, shouting, or psychological bullying is punishable by regulatory sanctions.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/70 p-4 rounded-xl text-xs md:text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong>DRA Certification Requirement:</strong> Under RBI mandates, every recovery agent deployed by a bank must undergo mandatory 100-hour training conducted by the Indian Institute of Banking &amp; Finance (IIBF) and obtain Debt Recovery Agent (DRA) certification. Deploying uncertified musclemen or street agents is a direct regulatory breach that invites heavy RBI penalties on the bank.
                </p>
              </div>
            </section>

            {/* SECTION 4: 4-Sided Bordered Grid Comparison Table */}
            <section id="harassment-vs-lawful-recovery-table" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Legal Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Lawful Recovery Actions vs. Unlawful Harassment: Legal Remedies &amp; Penalties
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This comprehensive matrix highlights the exact boundary between lawful banking communication and illegal recovery harassment, along with the precise legal remedies available to borrowers:
              </p>

              {/* TABLE WITH BOTH VERTICAL AND HORIZONTAL GRID LINES */}
              <div className="overflow-x-auto rounded-xl border border-slate-300 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse border border-slate-300">
                  <thead className="bg-slate-100 text-slate-800">
                    <tr>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Collection Tactic / Incident</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Legal Status under RBI / Law</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Applicable Statutory Violation</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300 text-[#1886ff]">Borrower&apos;s Legal Action &amp; Remedy</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Calling between 8:00 AM – 7:00 PM with official ID</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">LAWFUL (Permissible Recovery)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-slate-600">RBI Master Direction Compliance</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-slate-700">Request written settlement proposal; verify loan statement</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Calling late at night (after 7 PM or before 8 AM)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-red-700 font-bold">ILLEGAL HARASSMENT</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-red-700 font-semibold">RBI Master Direction Sec 2.1 &amp; Nuisance</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-[#1886ff] font-semibold">Save CDR call logs; file RBI Ombudsman petition for damages</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Calling relatives, friends, or workplace HR</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-red-700 font-bold">STRICTLY ILLEGAL &amp; DEFAMATORY</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-red-700 font-semibold">Sec 356 BNS / 499 IPC &amp; Art 21 Privacy</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-[#1886ff] font-semibold">Issue Defamation Legal Notice; file Consumer Forum suit</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Verbal abuse, foul language &amp; death threats</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-red-700 font-bold">COGNIZABLE CRIMINAL OFFENSE</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-red-700 font-semibold">Sec 351 &amp; 352 BNS / Sec 506 &amp; 504 IPC</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-[#1886ff] font-semibold">Record audio; file immediate Police FIR against bank &amp; agency</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Doorstep visit with bouncers &amp; forceful entry</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-red-700 font-bold">CRIMINAL TRESPASS &amp; EXTORTION</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-red-700 font-semibold">Sec 329 &amp; 308 BNS / Sec 441 &amp; 383 IPC</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-[#1886ff] font-semibold">Call 112 emergency; preserve CCTV footage; file criminal case</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Morphing photos &amp; WhatsApp group shaming</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-red-700 font-bold">CYBER CRIME &amp; EXTORTION</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-red-700 font-semibold">IT Act Sec 66E, 67, 67A &amp; Sec 308 BNS</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-[#1886ff] font-semibold">Report to cybercrime.gov.in &amp; file non-bailable cyber FIR</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Sending fake police summons or fake court warrants</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-red-700 font-bold">FORGERY &amp; IMPERSONATION</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-red-700 font-semibold">Sec 336 &amp; 204 BNS / Sec 465 &amp; 170 IPC</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-[#1886ff] font-semibold">Verify CNR on ecourts.gov.in; file criminal complaint for fraud</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: Technical Financial Risk & Damages Analytics */}
            <section id="emotional-distress-damages-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Damages &amp; Compensation Analytics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Suing for Damages: The Mathematical Formula for Mental Agony Compensation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When filing a lawsuit before a District Consumer Commission (DCDRC) under Section 35 of the Consumer Protection Act, 2019 or a Civil Suit under the Law of Torts for Intentional Infliction of Emotional Distress (IIED), Indian courts utilize an objective multiplier framework to assess monetary compensation:
              </p>

              {/* TECHNICAL MATH CARD */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    Statutory Tort &amp; Mental Agony Damage Formulation
                  </h3>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                    Civil Jurisprudence
                  </span>
                </div>

                <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto">
                  <p className="text-emerald-400 font-bold mb-1"># Mathematical Claim Valuation Formula:</p>
                  <p className="text-white">
                    Total_Compensation = Direct_Loss + (Base_Trauma_Index * Severity_Multiplier * Duration_Factor) + Exemplary_Damages + Legal_Costs
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600 leading-relaxed pt-1">
                  <div className="space-y-2">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Direct Economic &amp; Medical Loss:</span>
                      <span className="font-bold text-slate-900">Actuals (Therapy, Doctor Bills)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Severity Multiplier (Verbal Threats):</span>
                      <span className="font-bold text-slate-900">1.5x to 2.5x</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Severity Multiplier (Public Shaming / HR):</span>
                      <span className="font-bold text-red-600">3.0x to 5.0x</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>RBI Ombudsman Max Mental Trauma Cap:</span>
                      <span className="font-bold text-slate-900">₹1,00,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Consumer Commission Award Ceiling:</span>
                      <span className="font-bold text-emerald-700">Up to ₹50,00,000 (District)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>High Court Writ Exemplary Damages:</span>
                      <span className="font-bold text-emerald-700">Unlimited Discretion</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-100/90 border border-slate-200 p-4 rounded-xl text-xs md:text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong>Why Banks Prefer Settlement over Defending Harassment Suits:</strong> In court, a proven harassment incident triggers adverse media exposure, brand damage, and heavy judicial strictures. In over 85% of cases where borrowers present solid audio and telecom evidence, banks choose to waive all penal interest and close the debt via an amicable One-Time Settlement rather than face court-ordered punitive damages.
                </p>
              </div>
            </section>

            {/* SECTION 6: Embedded 16:9 Infographic Banner */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Legal Defense Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Defense Blueprint: 6-Stage Roadmap to Sue Banks &amp; Claim Compensation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Review this high-level visual roadmap illustrating the complete legal procedure to preserve evidence, serve statutory notices, register police complaints, petition the RBI Ombudsman, and obtain a debt waiver or damages:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/mental-harassment-by-recovery-agents-legal-action.jpg"
                    alt="Legal Action Against Recovery Agent Harassment 6-Stage Roadmap Infographic"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Legal Defense Blueprint • BNS/IPC, Consumer Protection Act &amp; RBI Master Directions</span>
                  <a
                    href="/images/infographics/mental-harassment-by-recovery-agents-legal-action.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold flex items-center gap-1"
                  >
                    <span>View High-Resolution Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 7: 6-Stage Standard Operating Procedure (SOP) */}
            <section id="step-by-step-defense-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Actionable Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. 6-Stage SOP for Borrowers Facing Recovery Agent Mental Harassment
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you or your family members are experiencing relentless calls, verbal threats, workplace visits, or digital harassment, follow this step-by-step Standard Operating Procedure:
              </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      01
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 1: Evidence Preservation (Audio, CDR, WhatsApp &amp; CCTV)
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    Enable automatic call recording on your smartphone. Save all abusive WhatsApp messages, SMS, and emails with timestamps. Request Call Detail Records (CDR) from your telecom provider to prove incessant calling outside permitted hours (8 AM–7 PM). Backup any doorstep CCTV footage or smartphone video recordings.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      02
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 2: Formal Cease &amp; Desist Legal Notice to Bank PNO
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    Issue a formal legal Cease &amp; Desist notice addressed to the bank&apos;s Principal Nodal Officer (PNO) and Managing Director via Registered Speed Post with Acknowledgment Due (AD) and email. Detail the exact instances of agent harassment, cite RBI Master Directions and BNS criminal provisions, and demand immediate recall of the external recovery agency.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      03
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 3: Police Complaint &amp; FIR Registration (BNS / IPC / IT Act)
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    If agents threaten physical violence, trespass on your property, or send morphed photos, lodge an immediate written complaint at your local police station under Sections 351 (Intimidation), 308 (Extortion), 329 (Trespass), and 356 (Defamation) of the BNS, as well as the IT Act. If police hesitate to register an FIR, file a complaint before the Magistrate under Section 175(3) of the Bharatiya Nagarik Suraksha Sanhita (BNSS) / 156(3) CrPC.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      04
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 4: Petition before the RBI Integrated Ombudsman (CMS Portal)
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    If the bank fails to resolve your harassment complaint within 30 days, file an online grievance on the RBI Complaint Management System (<code>cms.rbi.org.in</code>). Attach call recordings and evidence. The Ombudsman has the statutory power to penalize the bank, mandate corrective steps, and award compensation for harassment.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      05
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 5: Consumer Commission (DCDRC) &amp; Civil Tort Claim
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    File a consumer complaint on the e-Daakhil portal (<code>edaakhil.nic.in</code>) against the bank for deficiency of service, unfair trade practices, and severe mental agony under Section 35 of the Consumer Protection Act, 2019. Claim monetary compensation for emotional trauma, reputational injury, and litigation expenses.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      06
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 6: Negotiating a Compromise OTS &amp; Obtaining No Dues Certificate
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    Leverage pending regulatory complaints and consumer court proceedings to initiate direct One-Time Settlement (OTS) negotiations with the bank&apos;s senior dispute committee. Secure a 40% to 75% waiver on total outstanding amounts, make direct payments to the bank loan account, and collect your unconditional No Dues Certificate (NDC).
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Formal Legal Notice Monospace Terminal Draft */}
            <section id="formal-legal-notice-draft" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Rebuttal Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Formal Cease &amp; Desist Legal Notice Draft
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Below is a battle-tested legal notice draft designed to stop unlawful recovery agent harassment, assert your constitutional rights, and establish a formal paper trail for regulatory escalation:
              </p>

              {/* DARK MONOSPACE TERMINAL DRAFT */}
              <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-xs shadow-md border border-slate-800 space-y-3 overflow-x-auto leading-relaxed">
                <div className="text-emerald-400 font-bold border-b border-slate-800 pb-2 flex justify-between">
                  <span>LEGAL NOTICE: CEASE &amp; DESIST AGAINST RECOVERY AGENT HARASSMENT &amp; TORTIOUS COERCION</span>
                  <span className="text-slate-500 text-[10px]">SPEED POST / EMAIL WITH AD</span>
                </div>
                <div className="text-slate-300 space-y-2">
                  <p><strong>TO:</strong> The Principal Nodal Officer / Managing Director &amp; CEO</p>
                  <p><strong>REGULATED ENTITY:</strong> [Name of Commercial Bank / NBFC Institution]</p>
                  <p><strong>LOAN / CREDIT CARD ACCOUNT NO.:</strong> [Enter Account Number]</p>
                  <p><strong>SUBJECT:</strong> Formal Cease &amp; Desist Notice for Criminal Intimidation, Workplace Defamation, Right to Privacy Violations, and Gross Non-Compliance with RBI Recovery Master Directions</p>
                  <p className="pt-2">Sir / Madam,</p>
                  <p>
                    1. The undersigned borrower availed a credit facility bearing the account number referenced above. Owing to genuine financial setbacks [job loss / medical emergency], monthly installments experienced default.
                  </p>
                  <p>
                    2. Take notice that over the past [Number] days, third-party recovery agents acting under your authorization have subjected the undersigned and family members to egregious harassment, including: (a) Persistent calls between 8:00 PM and 11:30 PM, (b) Verbal abuse, foul slurs, and death threats, (c) Contacting unauthorized third parties including employer HR and relatives, and (d) Unlawful doorstep trespass.
                  </p>
                  <p>
                    3. Under the doctrine of Vicarious Liability established by the Hon&apos;ble Supreme Court in <em>ICICI Bank Ltd. v. Prakash Kaur (2007)</em>, your institution is directly responsible for all unlawful and criminal acts committed by your outsourced agents.
                  </p>
                  <p>
                    4. The actions of your agents constitute cognizable criminal offenses under Bharatiya Nyaya Sanhita (BNS) Section 351 (Criminal Intimidation), Section 308 (Extortion), Section 329 (Criminal Trespass), and Section 356 (Defamation), as well as direct violations of RBI Master Direction DOR.ORG.REC.65/21.04.158/2022-23 and the Fundamental Right to Privacy under Article 21.
                  </p>
                  <p>
                    5. You are hereby called upon to immediately CEASE AND DESIST all unauthorized collection activities, recall the recovery file from the third-party agency, and initiate formal grievance redressal. Failure to comply within seven (7) days shall constrain the undersigned to initiate criminal FIR proceedings, lodge a petition before the RBI Integrated Ombudsman, and file a claim for damages before the Consumer Commission at your institution&apos;s sole risk and cost.
                  </p>
                </div>
                <div className="text-slate-500 text-[10px] pt-2 border-t border-slate-800 flex justify-between">
                  <span>Borrower Legal Defense Wing / Panel Representation</span>
                  <span>Governed by Consumer Protection Act 2019 &amp; RBI Master Directions</span>
                </div>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Hierarchy</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Grievance Redressal &amp; Institutional Escalation Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow this structured institutional hierarchy to escalate harassment complaints systematically for maximum legal impact:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                {/* Tier 1 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                        Tier 1 (Internal)
                      </span>
                      <span className="text-xs font-semibold text-slate-500">Max 30 Days</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Branch Manager &amp; Customer Care Desk
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Submit a formal written grievance with call recordings and transcripts to the Branch Head and Customer Care Desk. Demand an official Complaint Ticket Number.
                    </p>
                  </div>
                  <div className="text-[11px] font-bold text-[#1886ff] pt-2 border-t border-slate-100">
                    Step: Establish Formal Paper Trail
                  </div>
                </div>

                {/* Tier 2 */}
                <div className="bg-white p-5 rounded-2xl border border-blue-200/80 shadow-xs space-y-2 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">
                        Tier 2 (Appellate)
                      </span>
                      <span className="text-xs font-semibold text-slate-500">30-Day Window</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Principal Nodal Officer (PNO)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Escalate unresolved complaints to the bank&apos;s Principal Nodal Officer and Internal Ombudsman. The PNO holds executive authority to recall third-party collection agencies and freeze recovery actions.
                    </p>
                  </div>
                  <div className="text-[11px] font-bold text-[#1886ff] pt-2 border-t border-slate-100">
                    Step: Direct Agency Recall &amp; OTS
                  </div>
                </div>

                {/* Tier 3 */}
                <div className="bg-white p-5 rounded-2xl border border-emerald-200/80 shadow-xs space-y-2 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        Tier 3 (Statutory)
                      </span>
                      <span className="text-xs font-semibold text-slate-500">Final Authority</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      RBI Ombudsman, Police &amp; Consumer Court
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      File a complaint on <code>cms.rbi.org.in</code>, register an FIR with local police or Cyber Crime Cell, and file a compensation suit before the District Consumer Disputes Redressal Commission.
                    </p>
                  </div>
                  <div className="text-[11px] font-bold text-emerald-700 pt-2 border-t border-slate-100">
                    Step: Damages, Sanctions &amp; Total Relief
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 10: Chronological Milestone Resolution Table */}
            <section id="chronological-resolution-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Resolution Timeline</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Chronological Resolution Timelines &amp; Legal Milestones
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                From the moment harassment begins to the final resolution and award of compensation, here is what the legal journey looks like:
              </p>

              {/* TABLE WITH BOTH VERTICAL AND HORIZONTAL GRID LINES */}
              <div className="overflow-x-auto rounded-xl border border-slate-300 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse border border-slate-300">
                  <thead className="bg-slate-100 text-slate-800">
                    <tr>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Timeline Stage</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Harassment Encountered</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Borrower Legal Action</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Institutional Response</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300 text-[#1886ff]">Expected Resolution Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Days 1 – 7</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Abusive calls, late-night WhatsApp messages</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Preserve call recordings, export chats, obtain CDR</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Agency continues aggressive recovery</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Airtight evidentiary dossier established</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Days 8 – 15</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Threats to visit workplace or contact relatives</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Serve Cease &amp; Desist Notice to Bank PNO &amp; MD</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Bank logs formal complaint ticket</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Immediate drop in abusive calls; agency cautioned</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Days 16 – 30</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Unresolved grievance or persistent visits</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">File Police Complaint / FIR &amp; RBI CMS Portal petition</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">RBI issues formal show-cause notice to bank</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-amber-700 font-semibold">Bank recalls recovery file from third-party agency</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Days 31 – 60</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Bank legal team enters negotiation mode</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">File Consumer Forum suit (DCDRC) for damages</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Bank Senior Settlement Committee reaches out</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">Waiver of 50% to 75% offered to settle matter</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Post-Settlement</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">Zero harassment; permanent safety</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">Pay agreed OTS sum directly to bank account</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">Bank issues unconditional No Dues Certificate (NDC)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">Debt fully extinguished; CIBIL updated to Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 11: Specialized Real-World Scenarios */}
            <section id="specialized-harassment-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BadgeAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Practical Edge Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Digital App Blackmail, Workplace Shaming &amp; Doorstep Bouncers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Different loan products and lenders employ distinct pressure points. Here is how to handle complex real-world situations:
              </p>

              <div className="space-y-4 pt-2">
                {/* Scenario 1 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                      Scenario 01: Instant Loan Apps &amp; Contact List Extortion
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Cyber Crime &amp; Data Privacy Breach</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Morphed Photos &amp; WhatsApp Group Harassment
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Chinese-origin and unregulated digital loan apps secretly harvest your phone contacts and photo gallery upon installation. When payments are delayed, rogue operators create WhatsApp groups with your family and colleagues, sharing morphed images with defamatory text. <strong>Action Plan:</strong> Do not pay ransom extortion money. File an immediate complaint on <code>cybercrime.gov.in</code> and the RBI Sachet portal (<code>sachet.rbi.org.in</code>). Inform your contacts that your phone data was hacked, and file an FIR under IT Act Sections 66E and 67A.
                  </p>
                </div>

                {/* Scenario 2 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-1 rounded-md">
                      Scenario 02: Workplace Visits &amp; HR Defamation
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Civil Defamation &amp; Service Deficiency</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Recovery Agents Showing Up at Your Office or Contacting Superiors
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Recovery agents sometimes visit the borrower&apos;s workplace, speaking to security guards, HR managers, or team colleagues to create panic and jeopardize employment. <strong>Action Plan:</strong> This is a severe breach of RBI Master Directions and constitutes criminal defamation under Section 356 BNS / 499 IPC. Inform your building security that unauthorized agents are trespassing. Obtain CCTV footage and colleague statements, and issue an urgent legal notice demanding immediate compensation for workplace defamation.
                  </p>
                </div>

                {/* Scenario 3 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Scenario 03: Doorstep Intimidation &amp; Fake Police Summons
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Impersonation &amp; Criminal Coercion</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Bouncers Claiming to be Police Officers with Fake Arrest Warrants
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Collection agencies sometimes dispatch aggressive men wearing safari suits who pose as police inspectors or court bailiffs, brandishing fake &quot;Arrest Warrants&quot; or &quot;Property Seizure Notices&quot;. <strong>Action Plan:</strong> Demand their police ID card and station assignment. Real court summons contain a 16-digit CNR number verifiable on <code>ecourts.gov.in</code>. Dial 112 immediately to report criminal impersonation of a public servant under Section 204 BNS / Section 170 IPC.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 12: About CredSettle Component */}
            <section id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </section>

            {/* SECTION 13: Collapsible Interactive FAQ Accordion */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions About Recovery Agent Harassment &amp; Legal Action
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Review exhaustive legal answers to the most critical questions regarding suing banks, criminal complaints, and statutory borrower rights in India:
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-2xs transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-slate-900 hover:text-[#1886ff] transition-colors gap-3"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="text-[#1886ff] font-extrabold text-xs bg-blue-50 px-2 py-0.5 rounded">
                            Q{idx + 1}
                          </span>
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={
                            'w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ' +
                            (isOpen ? 'transform rotate-180 text-[#1886ff]' : '')
                          }
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 14: Regulatory Citations & Outbound Authority Links */}
            <section id="regulatory-sources" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Citations &amp; Authorities</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Official Statutory &amp; Regulatory Citations
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The legal frameworks, statutory penalties, and precedents referenced in this guide are anchored directly in official Indian legislation and regulatory master directions:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#1886ff]"
                >
                  <div className="flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-[#1886ff]" />
                    <span>RBI Master Directions (Recovery Conduct)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#1886ff]"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>RBI Integrated Ombudsman (CMS)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://edaakhil.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#1886ff]"
                >
                  <div className="flex items-center gap-2">
                    <Gavel className="w-4 h-4 text-[#1886ff]" />
                    <span>e-Daakhil National Consumer Portal</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#1886ff]"
                >
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>National Cyber Crime Reporting Portal</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#1886ff]"
                >
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <span>Bharatiya Nyaya Sanhita (India Code)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://www.cibil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#1886ff]"
                >
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-[#1886ff]" />
                    <span>TransUnion CIBIL Dispute Portal</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* SECTION 15: 10 Internal Topic Badges */}
            <section className="pt-2 border-t border-slate-200/80 space-y-3">
              <span className="text-xs font-black text-slate-700 uppercase tracking-wider block">
                Related Legal Debt Defense Guides:
              </span>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/can-recovery-agents-seize-property"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  Can Recovery Agents Seize Property?
                </Link>
                <Link
                  href="/arbitration-notice-personal-loan-default"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  Arbitration Notice for Personal Loan
                </Link>
                <Link
                  href="/section-138-cheque-bounce-personal-loan"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  Section 138 Cheque Bounce Defense
                </Link>
                <Link
                  href="/ecs-nach-bounce-legal-notice-section-25"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  NACH / ECS Bounce Section 25
                </Link>
                <Link
                  href="/lok-adalat-personal-loan-settlement"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  Lok Adalat Loan Settlement
                </Link>
                <Link
                  href="/convert-settled-status-to-closed"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  Convert Settled Status to Closed
                </Link>
                <Link
                  href="/dispute-wrong-settled-status-cibil"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  Dispute Wrong Settled Status in CIBIL
                </Link>
                <Link
                  href="/fake-loan-app-harassment-cyber-crime"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  Fake Loan App Cyber Complaint
                </Link>
                <Link
                  href="/get-noc-after-loan-settlement"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  Get NOC After Loan Settlement
                </Link>
                <Link
                  href="/full-and-final-settlement-meaning"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  Full and Final Settlement Meaning
                </Link>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBARS ================= */}
          <aside className="space-y-5 sticky top-6">
            
            {/* 1. Author Bio Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Link
                  href="/author/ashish-jhangra"
                  className="w-12 h-12 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-base flex items-center justify-center flex-shrink-0 hover:bg-blue-200 transition-colors shadow-2xs"
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
              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5">
                Specialist in civil debt dispute resolution, anti-harassment defense, and RBI regulatory enforcement with over a decade of experience safeguarding Indian borrowers.
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
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>CredSettle Panel</span>
                </span>
              </div>
            </div>

            {/* 2. Emergency CTA Card */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white p-5 shadow-md space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white">
                <Lock className="w-3 h-3" />
                <span>100% CONFIDENTIAL</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-extrabold tracking-tight leading-snug">
                  Facing Recovery Harassment?
                </h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Stop illegal agent abuse, protect your dignity, and sue the bank for emotional distress. Get expert representation today.
                </p>
              </div>

              <div className="space-y-2 pt-1">
                <Link
                  href="/contact"
                  className="w-full py-2.5 px-4 rounded-xl bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-xs sm:text-sm text-center block transition-all shadow-sm hover:bg-slate-50"
                >
                  File a Harassment Lawsuit Against the Bank
                </Link>
                
                <a
                  href="tel:+918800226635"
                  className="w-full py-2 px-3 rounded-xl bg-blue-700/60 hover:bg-blue-700 text-white font-bold text-xs text-center flex items-center justify-center gap-2 transition-all border border-blue-500/30"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: +91-8800226635</span>
                </a>
              </div>
            </div>

            {/* 3. CredSettle Trust Commitments Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>CredSettle Trust Commitments</span>
              </h4>

              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Performance &amp; success-fee aligned engagement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> 100% of settlement funds paid directly to bank.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI &amp; CICRA Compliance:</strong> Strict adherence to statutory fair recovery rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Protecting clients across all 28 states &amp; UTs.</span>
                </li>
              </ul>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}
