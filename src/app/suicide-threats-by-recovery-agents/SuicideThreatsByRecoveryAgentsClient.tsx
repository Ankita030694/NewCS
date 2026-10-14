'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import { ChevronDown, Scale, ExternalLink, ShieldCheck, CheckCircle2, FileText, HelpCircle, TrendingUp, Award, BookOpen, Building2, Check, Phone, Briefcase, Bookmark, ArrowRight, Clock, Sparkles, Gavel, BadgeAlert, Landmark, ShieldAlert, Smartphone, Users } from 'lucide-react';
export default function SuicideThreatsByRecoveryAgentsClient() {
    const [activeId, setActiveId] = useState<string>('quick-crux');
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        }, {
            rootMargin: '-100px 0px -40% 0px',
            threshold: 0.05
        });
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
        { id: 'debt-distress-and-criminality', label: '1. Distress & Criminality' },
        { id: 'statutory-provisions-intimidation-abetment', label: '2. BNS & Abetment Laws' },
        { id: 'permissible-vs-unlawful-recovery-matrix', label: '3. Legal vs Illegal Matrix' },
        { id: 'digital-loan-apps-and-cyber-blackmail', label: '4. Loan Apps & Blackmail' },
        { id: 'infographic-overview', label: 'Visual Protection Protocol' },
        { id: 'step-by-step-protection-sop', label: '5. 6-Stage Defense SOP' },
        { id: 'rbi-fair-practices-and-supreme-court-precedents', label: '6. RBI Codes & Precedents' },
        { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Escalation Matrix' },
        { id: 'chronological-resolution-timeline', label: '8. Chronological Milestones' },
        { id: 'specialized-harassment-scenarios', label: '9. Specialized Scenarios' },
        { id: 'company-profile', label: 'About CredSettle' },
        { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
        { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
    ];
    const faqs = [
        {
            q: 'What should I do immediately if recovery agent harassment is pushing me to severe mental distress or suicide?',
            a: "fast prioritize your safety and call emergency police helpline 112 or national emergency lines. Understand that loan default is purely a civil dispute in India and never a crime. Do not take any drastic steps. File an fast complaint at your local police station under Section 351 (penal threaten) and Section 308 (Extortion) of the Bharatiya Nyaya Sanhita (BNS). Contact CredSettle to place an fast legal buffer between you and the lenders."
        },
        {
            q: 'Can recovery agents or bank managers be arrested if their harassment drives someone to suicide?',
            a: "Yes. Under Section 108 of the Bharatiya Nyaya Sanhita. 2023 (formerly Section 306 of the Indian Penal Code). Abetment of suicide is a non-bailable. Cognizable crime punishable by up to 10 years of rigorous imprisonment. If claims agents. firm directors. Bank claims managers engage in persistent threaten. Humiliation. Threats that drive a clients to suicide. Police can arrest and prosecute all individuals in the claims chain."
        },
        {
            q: 'How do I file an FIR against recovery agents for extreme mental harassment?',
            a: "Visit your nearest police station and submit a written complaint detailing the threats. Attaching call recordings. WhatsApp messages. Abusive audio. Agent phone numbers. Request the Station House head (SHO) to register an FIR under Section 351 BNS (penal threaten). Section 308 BNS (Extortion). Section 352 BNS (Intentional Insult). If the local police hesitate. Submit the complaint to the District Superintendent of Police (SP) or file a Section 175(3) BNSS petition before the Magistrate."
        },
        {
            q: 'What legal actions can be taken against 7-day illegal loan apps blackmailing with morphed photos?',
            a: "fast file a cybercrime complaint on the National Cyber Crime Reporting Portal (cybercrime.gov.in) or call helpline 1930. These predatory apps operate illegally without RBI licenses. Circulating morphed or private photos constitutes severe penal offenses under Sections 67 and 67A of the Information Technology Act. 2000. Section 354C IPC / Section 77 BNS (Voyeurism & Extortion). Never pay extortion demands. Warn your contacts. report the app to Google Play Store."
        },
        {
            q: 'Are bank recovery agents legally allowed to visit my home or workplace and shout?',
            a: "No. The Reserve Bank of India (RBI) Fair Practices Code strictly prohibits claims agents from visiting before 8:00 AM or after 7:00 PM. Using abusive language. Humiliating clients publicly. Disclosing debt details to family. Neighbors. employers. Unannounced harsh visits or workplace disturbances violate your fundamental Right to Privacy under Article 21 of the Constitution and constitute penal trespass."
        },
        {
            q: 'Can a bank or recovery agent send me to jail for defaulting on an unsecured loan?',
            a: "No. In India. Inability to repay an clean own loan. Credit card balance. Firm loan is strictly a civil dispute governed by the Indian Contract Act. 1872. The Supreme Court has repeatedly held that money default is not a crime and cannot result in jail time. Even in cases involving cheque bounce (Section 138 NI Act) or NACH dishonor (Section 25 PSSA). These are bailable quasi-penal steps where jail is not automatic."
        },
        {
            q: 'Can recovery agents call my relatives, parents, or friends regarding my debt?',
            a: "No. RBI Master Directives strictly bar lenders and their outsourced firms from contacting references. Parents. Spouses. Acquaintances for debt calls. Any unlawful contact or threats of third parties violates RBI guidelines and own data safety norms. Providing solid legal grounds for filing an fast complaint with the Banking RBI officer and the Cyber Crime Cell."
        },
        {
            q: 'How does CredSettle protect borrowers from ongoing recovery agent harassment?',
            a: "CredSettle issues formal legal representation notices to all your lenders. Demanding an fast cessation of all direct agent calls. Home visits. Third-party contacts. By stepping in as your legal dispute relief partner. We redirect all creditor contacts to our team. File bank complaints against non-compliant agents. Settle a structured. Affordable One-Time closure (OTS) with full debt closure."
        },
        {
            q: 'How do I escalate recovery agent harassment to the Reserve Bank of India (RBI)?',
            a: "First. Lodge a formal written complaint with the bank's main sum Nodal head (PNO). If the bank fails to resolve the threats within 30 days or provides an unsatisfactory reply. Escalate the matter to the RBI Integrated RBI officer via the online portal (cms.rbi.org.in). The RBI officer possesses legal powers to penalize banks. Award compensation for mental agony. Order disciplinary action against errant claims firms."
        },
        {
            q: 'Can I settle my defaulted loans and get a No Dues Certificate after severe harassment?',
            a: "Yes. Once threats is halted through legal action. You can settle a One-Time closure (OTS) straight with the bank's Credit board or during National Lok Adalat steps. Lenders routinely waive 40% to 65% of the total unpaid dues. This includes penal rates and accumulated charges. Upon payment of the settled amount. The bank issues a by law binding No Dues letter (NDC) to close the loan account permanently."
        }
    ];
    return (<main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Background) */}
      <section className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center" style={{ backgroundColor: '#2452ae' }}>
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none"/>
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
            <ShieldAlert className="w-3.5 h-3.5 text-blue-200"/>
            <span>Criminal Intimidation &amp; Police Protection Protocol.</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Stop Extreme Recovery Agent Harassment &amp; Intimidation
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed"> If severe claims threats has pushed you to acute distress. Remember that loan default is purely a civil dispute. Driving a clients to suicide is a serious crime. Secure fast police safety. Halt agent abuse. enforce your rights. </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2">
              <span>Get Immediate Legal Protection.</span>
              <ArrowRight className="w-4 h-4"/>
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
                <BookOpen className="w-4 h-4 text-[#1886ff]"/>
                <span className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Table of Contents.
                </span>
              </div>
              <nav className="space-y-1 max-h-[calc(100vh-140px)] overflow-y-auto pr-1 text-xs">
                {navLinks.map((link) => {
            const isActive = activeId === link.id;
            return (<a key={link.id} href={`#${link.id}`} className={`group flex items-center justify-between px-3 py-2 rounded-xl transition-all font-medium leading-snug ${isActive
                    ? 'bg-blue-50 text-[#1886ff] font-bold shadow-2xs'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}>
                      <span className="truncate mr-2">{link.label}</span>
                      <ChevronDown className={`w-3 h-3 flex-shrink-0 transition-transform ${isActive ? '-rotate-90 text-[#1886ff]' : 'opacity-0 group-hover:opacity-40'}`}/>
                    </a>);
        })}
              </nav>
            </div>
          </aside>

          {/* ================= CENTER COLUMN: EDITORIAL CONTENT ================= */}
          <article className="space-y-8 md:space-y-10 min-w-0">
            
            {/* EXECUTIVE SUMMARY BOX */}
            <div id="quick-crux" className="scroll-target rounded-2xl p-5 md:p-6 bg-[#F4F8FE] border-l-[5px] border-l-[#1886ff] border border-blue-100/80 shadow-xs">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-blue-100">
                <ShieldCheck className="w-5 h-5 text-[#1886ff]"/>
                <p className="text-base sm:text-lg font-bold text-slate-900"> Executive Brief: Emergency Defense Against Extreme threats. </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/>
                  <span>Debt default is strictly a civil breach; suicide incitement is a felony.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/>
                  <span>Immediate FIR under Section 351 (Intimidation) &amp; Section 308 (Extortion) BNS.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/>
                  <span>Criminal prosecution of recovery agencies and bank officials under Section 108 BNS.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/>
                  <span>Total prohibition on contacting family or employers under RBI Fair Practices.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/>
                  <span>Cyber cell prosecution for morphed media under Section 67/67A IT Act.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/>
                  <span>Emergency police intervention via Dial 112 &amp; Cyber Helpline 1930.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/>
                  <span>Formal legal representation to redirect all creditor communications to counsel.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/>
                  <span>Permanent debt closure via Lok Adalat with 40% to 65% principal waivers.</span>
                </div>
              </div>
            </div>

            {/* SECTION 1: DEBT DISTRESS & CRIMINALITY OF AGGRESSIVE COLLECTIONS */}
            <section id="debt-distress-and-criminality" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Scale className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  1. Debt Distress &amp; Criminality of Aggressive Collections
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700"> When money hardship interrupts loan payments. Lenders mark accounts as Non-Performing Assets (NPAs) after 90 days of default. To recover capital. Banks and NBFCs often assign portfolios to third-party calls firms that operate on harsh commission models. These firms often deploy untrained staff who resort to abusive phone calls. Doorstep threaten. Public humiliation. Social threats. </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700"> Under Indian law. Debt default is strictly a civil contract dispute governed by the Indian Contract Act. 1872. It is never a crime. inability to pay cannot result in arrest. When claims agents use sustained mental pressure or threats that drive a clients to suicidal despair. Their conduct enters the domain of penal law. The Supreme Court has repeatedly affirmed that lenders and their agents hold no immunity for coercive claims methods that violate human dignity. </p>
            </section>

            {/* SECTION 2: STATUTORY PROVISIONS: CRIMINAL INTIMIDATION & ABETMENT */}
            <section id="statutory-provisions-intimidation-abetment" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Gavel className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  2. Statutory Provisions: Criminal Intimidation &amp; Abetment
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700"> The Bharatiya Nyaya Sanhita. 2023 (BNS) provides strong penal remedies against claims abuse. Threatening real harm. Reputation damage. home seizure constitutes penal threaten under Section 351 BNS (formerly Sections 503/506 IPC). Demanding fast funds under duress constitutes Extortion under Section 308 BNS (formerly Sections 383/384 IPC). </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700"> Where relentless threats drives an individual to contemplate ending their life. Police can invoke Section 108 BNS (Abetment of Suicide) and Section 61 BNS (penal Conspiracy). Under these rules. Field agents. Calls firm managers. Supervising bank executives can be named as co-accused in a non-bailable FIR. Additionally. Section 329 BNS penalizes house trespass. Section 352 BNS punishes intentional insult. </p>
            </section>

            {/* SECTION 3: 4-SIDED BORDERED COMPARISON MATRIX */}
            <section id="permissible-vs-unlawful-recovery-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Scale className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  3. Comparative Matrix: Permissible Recovery vs Unlawful Abuse
                </h2>
              </div>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-800 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="px-3.5 py-3 font-extrabold text-[#0C2756]">Action / Parameter.</th>
                      <th className="px-3.5 py-3 text-emerald-800">Permissible Bank Conduct.</th>
                      <th className="px-3.5 py-3 text-rose-700">Unlawful Harassment.</th>
                      <th className="px-3.5 py-3">Applicable Statute.</th>
                      <th className="px-3.5 py-3">Immediate Remedy.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700 font-normal">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="px-3.5 py-2.5 font-bold text-slate-900">Calling Hours</td>
                      <td className="px-3.5 py-2.5">Between 8:00 AM and 7:00 PM only.</td>
                      <td className="px-3.5 py-2.5 text-rose-700 font-semibold">Late-night or repeated early calls.</td>
                      <td className="px-3.5 py-2.5">RBI Fair Practices Code.</td>
                      <td className="px-3.5 py-2.5">Call logs &amp. PNO complaint.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 bg-blue-50/30 hover:bg-blue-50/50">
                      <td className="px-3.5 py-2.5 font-bold text-[#1886ff]">Third-Party Contact.</td>
                      <td className="px-3.5 py-2.5">Only direct clients or co-clients.</td>
                      <td className="px-3.5 py-2.5 text-rose-700 font-semibold">Calling parents. Friends. Employers.</td>
                      <td className="px-3.5 py-2.5">Article 21 &amp. RBI Directives.</td>
                      <td className="px-3.5 py-2.5">Cease-and-desist notice.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="px-3.5 py-2.5 font-bold text-slate-900">Doorstep Visits</td>
                      <td className="px-3.5 py-2.5">Authorized visits with ID and notice.</td>
                      <td className="px-3.5 py-2.5 text-rose-700 font-semibold">Forced entry. Shouting. Mobbing.</td>
                      <td className="px-3.5 py-2.5">Sec 329 BNS (Trespass).</td>
                      <td className="px-3.5 py-2.5">Dial 112 &amp. Police PCR call.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="px-3.5 py-2.5 font-bold text-slate-900">Verbal Conduct</td>
                      <td className="px-3.5 py-2.5">experts, polite language.</td>
                      <td className="px-3.5 py-2.5 text-rose-700 font-semibold">Abuse. Death threats. Suicide nudging.</td>
                      <td className="px-3.5 py-2.5">Sec 351 / 108 BNS.</td>
                      <td className="px-3.5 py-2.5">Police FIR for threaten.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="px-3.5 py-2.5 font-bold text-slate-900">Digital Media</td>
                      <td className="px-3.5 py-2.5">Standard payment reminder emails.</td>
                      <td className="px-3.5 py-2.5 text-rose-700 font-semibold">Morphed photos. WhatsApp spam.</td>
                      <td className="px-3.5 py-2.5">Sec 67/67A IT Act. 2000.</td>
                      <td className="px-3.5 py-2.5">National Cyber Portal (1930).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: DIGITAL LOAN APPS: CONTACT HACKING & CYBER BLACKMAIL */}
            <section id="digital-loan-apps-and-cyber-blackmail" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Smartphone className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  4. Digital Loan Apps: Contact Hacking &amp; Cyber Blackmail
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700"> unlawful 7-day mobile lending applications operate outside RBI rules. Upon installation. They siphon contacts. Private gallery images. location data. Within days of loan payout. Cyber syndicates initiate extortion by circulating morphed images and false messages to relatives and colleagues. </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700"> Paying extortion demands never stops the blackmail. clients must fast file a cybercrime complaint via helpline 1930 or cybercrime.gov.in. Under Sections 67 and 67A of the IT Act. Section 77 BNS (Voyeurism). Section 308 BNS (Extortion). Police can freeze mule bank accounts and initiate penal prosecution against app operators. </p>
            </section>

            {/* SECTION 5: INFOGRAPHIC CARD */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Sparkles className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  Infographic: Emergency Protocol for Harassment Protection
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700"> This visual defense protocol outlines the six key stages from digital evidence calls and police FIR filing to RBI escalation and final OTS loan closure. </p>

              <div className="rounded-2xl border border-slate-200/90 overflow-hidden bg-slate-900 shadow-md">
                <div className="relative aspect-video w-full bg-slate-950">
                  <Image src="/images/infographics/suicide-threats-by-recovery-agents.jpg" alt="Emergency Legal and Police Protection Protocol Against Recovery Harassment" fill priority sizes="(max-width: 1200px) 100vw, 900px" className="object-cover"/>
                </div>
                <div className="p-3.5 bg-slate-900 text-slate-300 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span>Figure 1: CredSettle 6-Stage Emergency Harassment Defense &amp; Police Protection Protocol.</span>
                  <a href="/images/infographics/suicide-threats-by-recovery-agents.jpg" target="_blank" rel="noopener noreferrer" className="text-[#1886ff] hover:underline font-semibold inline-flex items-center gap-1">
                    <span>View High-Res Infographic.</span>
                    <ExternalLink className="w-3 h-3"/>
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: STEP-BY-STEP SOP (6 STAGES) */}
            <section id="step-by-step-protection-sop" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Award className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  5. Step-by-Step SOP: Emergency Legal &amp; Police Protection
                </h2>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-xs">01</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 1: Digital Evidence Preservation</h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600"> Record all abusive calls. Archive WhatsApp chats. Screenshot threats. Log agent phone numbers to establish admissible online evidence under Section 63 of Bharatiya Sakshya Adhiniyam. 2023. </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-xs">02</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 2: Emergency Police Complaint &amp. FIR</h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600"> Submit a written complaint to the local SHO requesting an FIR under Section 351 BNS (penal threaten). Section 308 BNS (Extortion). Section 352 BNS for fast police action. </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-xs">03</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 3: Legal Cease-and-Desist Notice</h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600"> CredSettle issues a formal notice to the lender MD and collections head. Demanding an fast stop to unlawful visits and routing all contacts through legal counsel. </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-xs">04</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 4: Bank PNO &amp. RBI RBI officer Escalation</h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600"> Lodge legal grievances with the bank main sum Nodal head and escalate to the RBI Integrated RBI officer (cms.rbi.org.in) citing Fair Practices Code violations for RBI fines. </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-xs">05</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 5: Court safety &amp. Magistrate Orders</h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600"> If police inaction occurs. File a Section 175(3) BNSS application before the Magistrate or seek High Court writ directions under Article 226 for thorough police safety. </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1886ff] font-extrabold flex items-center justify-center text-xs">06</span>
                    <h3 className="text-base font-bold text-slate-900">Stage 6: deal OTS &amp. Full Closure</h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600"> With threats halted. CredSettle negotiates a structured One-Time closure (OTS). Securing a 40% to 65% main sum waiver and an unconditional No Dues letter. </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: RBI FAIR PRACTICES CODE & KEY SUPREME COURT PRECEDENTS */}
            <section id="rbi-fair-practices-and-supreme-court-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Landmark className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  6. RBI Fair Practices Code &amp; Key Supreme Court Precedents
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Landmark className="w-4 h-4 text-[#1886ff]"/>
                    <span>1. RBI Master Directions on Recovery.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> Strictly forbids calls outside 8:00 AM to 7:00 PM. Abusive words. Family threats. persistent nuisance. Agents must carry valid bank approval and identification cards. </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Gavel className="w-4 h-4 text-emerald-600"/>
                    <span>2. Supreme Court in ICICI Bank v. Prakash Kaur.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> The Supreme Court held that banks cannot use musclemen for debt calls and established that lending institutions are vicariously liable for penal acts of their agents. </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-blue-600"/>
                    <span>3. Abetment Rulings (Section 108 BNS).</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> Courts have affirmed that continuous. Intolerable threats driving a clients to suicide constitutes abetment. Making calls agents and managers liable for arrest. </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Scale className="w-4 h-4 text-purple-600"/>
                    <span>4. Article 21: Right to Life &amp; Dignity.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> The Constitution guarantees every citizen the right to live with dignity and privacy. trade loan default does not permit mental threaten or threats. </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-TIER INSTITUTIONAL ESCALATION & LAW ENFORCEMENT MATRIX */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <TrendingUp className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  7. 3-Tier Institutional Escalation &amp; Law Enforcement Matrix
                </h2>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">Level 1: Local Police Station FIR &amp; Cyber Cell (1930).</span>
                    <span className="px-2 py-0.5 rounded-md bg-rose-100 text-rose-700 font-bold text-xs">Immediate (24 Hours).</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed"> Lodge a written complaint or Zero FIR under Sections 351 and 308 BNS for penal threaten and extortion. Concurrently report morphing or digital threats to cybercrime.gov.in. </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">Level 2: Bank Principal Nodal Officer (PNO) Redressal.</span>
                    <span className="px-2 py-0.5 rounded-md bg-blue-100 text-[#1886ff] font-bold text-xs">Statutory (7 to 14 Days).</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed"> Submit a formal legal complaint with call records to the bank PNO. Who is required under RBI rules to investigate misconduct and halt errant calls firms. </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">Level 3: RBI Ombudsman &amp; Section 175(3) BNSS Court Petition.</span>
                    <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-700 font-bold text-xs">Judicial / Regulatory Stage.</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed"> Escalate unresolved matters to the RBI RBI officer for money compensation. If police fail to act on your FIR. File a Section 175(3) BNSS petition before the Magistrate. </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: CHRONOLOGICAL TIMELINE TABLE */}
            <section id="chronological-resolution-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Clock className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  8. Chronological Timeline: Crisis Response to Resolution
                </h2>
              </div>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-800 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="px-3.5 py-3 font-extrabold text-[#0C2756]">Timeline Phase</th>
                      <th className="px-3.5 py-3">Crisis / Procedural Stage.</th>
                      <th className="px-3.5 py-3">Recovery / Regulatory Status.</th>
                      <th className="px-3.5 py-3">CredSettle Protection Actions.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700 font-normal">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="px-3.5 py-2.5 font-bold text-slate-900">Day 1 (0. 24 Hours).</td>
                      <td className="px-3.5 py-2.5">Acute Distress &amp. Threats.</td>
                      <td className="px-3.5 py-2.5 text-rose-700 font-semibold">Abusive calls. Doorstep threaten.</td>
                      <td className="px-3.5 py-2.5">Evidence audit. Dial 112 / 1930 reporting.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="px-3.5 py-2.5 font-bold text-slate-900">Day 2 to 7</td>
                      <td className="px-3.5 py-2.5">Legal Notice &amp. Police FIR.</td>
                      <td className="px-3.5 py-2.5">Bank notified of penal complaints.</td>
                      <td className="px-3.5 py-2.5">Issue formal cease-and-desist notice to lender MD.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="px-3.5 py-2.5 font-bold text-slate-900">Day 8 to 30</td>
                      <td className="px-3.5 py-2.5">RBI Redressal.</td>
                      <td className="px-3.5 py-2.5">claims firm halted.</td>
                      <td className="px-3.5 py-2.5">Escalate to RBI RBI officer &amp. Banking Nodal head.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 bg-blue-50/30 hover:bg-blue-50/50">
                      <td className="px-3.5 py-2.5 font-bold text-[#1886ff]">Month 2 to 3</td>
                      <td className="px-3.5 py-2.5">Bilateral closure Talks.</td>
                      <td className="px-3.5 py-2.5 text-blue-900 font-semibold">Bank shifts to deal mode.</td>
                      <td className="px-3.5 py-2.5">Credit board representation for waiver terms.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="px-3.5 py-2.5 font-bold text-emerald-800">Month 3 to 6</td>
                      <td className="px-3.5 py-2.5">OTS Execution &amp. Closure.</td>
                      <td className="px-3.5 py-2.5 text-emerald-700 font-bold">Total debt extinguished.</td>
                      <td className="px-3.5 py-2.5">Lok Adalat order. No Dues letter &amp. CIBIL update.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS */}
            <section id="specialized-harassment-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Briefcase className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  9. Real-World Scenarios: Complex Debt Harassment Defense
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Building2 className="w-4 h-4 text-[#1886ff]"/>
                    <span>Multi-Lender Coordinated Pressure.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> clients with multiple defaulted cards and loans face calls from dozens of firms. CredSettle consolidates creditor files and issues blanket legal representation notices to halt multi-lender threats. </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Briefcase className="w-4 h-4 text-emerald-600"/>
                    <span>Workplace Harassment &amp; Defamation.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> Agents calling office receptionists or contacting HR violate privacy norms. We serve legal notices citing tortious interference and Section 356 BNS (slander) to fast cease workplace contact. </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Users className="w-4 h-4 text-purple-600"/>
                    <span>Elderly Parents &amp; Family Harassment.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> When agents threaten senior citizen parents. We file police complaints under the Senior Citizens Act. 2007. Section 351 BNS. Obtaining protective restraining orders. </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Smartphone className="w-4 h-4 text-amber-600"/>
                    <span>Illegal Instant Loan App Extortion.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> For victims of predatory apps threatening contact leaks. We manage cyber defense with the National Cyber Crime Cell. Securing contact privacy and stopping unlawful extortion. </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: COMPANY PROFILE */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 SYNCHRONIZED FAQS */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <HelpCircle className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  Frequently Asked Questions: Extreme Harassment Defense
                </h2>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (<div key={idx} className="border border-slate-200/90 rounded-2xl overflow-hidden bg-white shadow-2xs transition-all">
                      <button onClick={() => toggleFaq(idx)} className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors text-xs sm:text-sm">
                        <span className="leading-snug">{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 text-[#1886ff] flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}/>
                      </button>
                      {isOpen && (<div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                          <p>{faq.a}</p>
                        </div>)}
                    </div>);
        })}
              </div>
            </section>

            {/* SECTION 13: CITATIONS & OUTBOUND AUTHORITY GRID */}
            <section id="regulatory-sources" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Bookmark className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  Statutory Citations &amp; Regulatory Authority References
                </h2>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-3 text-xs sm:text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Key Governing Statutes &amp. Judicial Precedents Cited:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs">
                  <li><strong>Section 108 &amp. 61. Bharatiya Nyaya Sanhita. 2023:</strong> Abetment of suicide and penal conspiracy fines against coercive lenders.</li>
                  <li><strong>Section 351. 308 &amp. 352. Bharatiya Nyaya Sanhita. 2023:</strong> Offenses of penal threaten. Extortion. intentional insult.</li>
                  <li><strong>Section 67 &amp. 67A. Information Technology Act. 2000:</strong> Strict penal risk for transmitting obscene or morphed digital material.</li>
                  <li><strong>Reserve Bank of India Master Circular on Loan claims:</strong> Restrictions on calling hours. Conduct. third-party interactions.</li>
                  <li><strong>ICICI Bank Ltd. v. Prakash Kaur (2007) 2 SCC 711:</strong> Supreme Court directive prohibiting strong-arm claims methods by banks.</li>
                  <li><strong>Article 21. Constitution of India:</strong> Fundamental Right to Life. Dignity. own Privacy.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-600">valid Government &amp. RBI Portals:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between group shadow-2xs">
                    <span className="font-semibold truncate">Reserve Bank of India.</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1886ff]"/>
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between group shadow-2xs">
                    <span className="font-semibold truncate">RBI Integrated Ombudsman.</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1886ff]"/>
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between group shadow-2xs">
                    <span className="font-semibold truncate">National Cyber Crime Portal.</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1886ff]"/>
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between group shadow-2xs">
                    <span className="font-semibold truncate">India Code Legislative Portal.</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1886ff]"/>
                  </a>
                  <a href="https://services.ecourts.gov.in" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between group shadow-2xs">
                    <span className="font-semibold truncate">e-Courts Judicial Portal.</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1886ff]"/>
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-[#1886ff] hover:text-[#1886ff] transition-all flex items-center justify-between group shadow-2xs">
                    <span className="font-semibold truncate">National Legal Services (NALSA).</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1886ff]"/>
                  </a>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-600">Related Legal safety Guides on CredSettle:</p>
                <div className="flex flex-wrap gap-1.5">
                  {[
            { title: 'Stop Recovery Harassment', href: '/how-to-stop-recovery-agent-harassment' },
            { title: 'Bank FIR on Loan Default', href: '/bank-filed-fir-for-loan-default' },
            { title: '7-Day Loan App Harassment', href: '/7-day-loan-app-harassment-morphed-photos' },
            { title: 'Can Bank Call Relatives', href: '/can-bank-call-relatives-for-loan-recovery' },
            { title: 'Can You Go to Jail for Debt', href: '/can-i-go-to-jail-for-credit-card-debt' },
            { title: 'Bailable Warrant Defense', href: '/bailable-warrant-for-loan-default' },
            { title: 'Personal Loan Settlement', href: '/personal-loan-settlement' },
            { title: 'Lok Adalat Loan Settlement', href: '/lok-adalat-personal-loan-settlement' }
        ].map((guide, idx) => (<Link key={idx} href={guide.href} className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] text-xs font-medium border border-slate-200/80 transition-all">
                      {guide.title}
                    </Link>))}
                </div>
              </div>
            </section>
          </article>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="space-y-5 sticky top-6">
            
            {/* AUTHOR BIO CARD */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 sm:p-5 space-y-3 text-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-[#1886ff] text-white font-extrabold flex items-center justify-center text-base border-2 border-blue-200 flex-shrink-0 shadow-2xs">
                  AJ
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Ashish Jhangra</p>
                  <p className="text-[11px] font-semibold text-[#1886ff]"> Legal &amp. Debt relief experts. </p>
                  <p className="text-[10px] text-slate-500">CredSettle Research Head.</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5"> Specialist in banking dispute defense. Clients civil liberties safety. penal threaten defense. bank debt deal closures under RBI Prudential Frameworks. </p>
            </div>

            {/* EMERGENCY CTA CARD (#2452ae) */}
            <div className="rounded-2xl p-4 sm:p-5 text-white shadow-md space-y-3" style={{ backgroundColor: '#2452ae' }}>
              <div className="flex items-center gap-2">
                <BadgeAlert className="w-5 h-5 text-amber-300 animate-pulse"/>
                <span className="text-xs font-black uppercase tracking-wider text-blue-100">
                  Emergency Defense Desk.
                </span>
              </div>
              <p className="text-base font-extrabold leading-snug"> Facing Extreme claims threats? </p>
              <p className="text-xs text-white/90 leading-relaxed"> Connect fast with CredSettle for emergency police complaint drafting. Legal cease-and-desist action. full creditor dispute relief. </p>
              <div className="pt-1 space-y-2">
                <a href="tel:+918800226635" className="w-full py-2.5 px-4 rounded-xl bg-white text-blue-900 font-extrabold text-xs flex items-center justify-center gap-2 hover:bg-slate-50 transition-all shadow-xs">
                  <Phone className="w-3.5 h-3.5 text-[#1886ff]"/>
                  <span>Call: +91-8800226635.</span>
                </a>
                <Link href="/contact" className="w-full py-2 px-4 rounded-xl bg-blue-600/40 hover:bg-blue-600/60 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all border border-white/20">
                  <span>Request Urgent Protection.</span>
                  <ArrowRight className="w-3 h-3"/>
                </Link>
              </div>
            </div>

            {/* TRUST BADGES */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 space-y-2.5 text-xs text-slate-700">
              <div className="flex items-center gap-2 text-slate-900 font-bold pb-1.5 border-b border-slate-100">
                <ShieldCheck className="w-4 h-4 text-emerald-600"/>
                <span>CredSettle Protection Standards.</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0"/>
                <span>100% Confidential Crisis Consultations.</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0"/>
                <span>Immediate Legal Cease &amp; Desist Notices.</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0"/>
                <span>Pan-India Police &amp; Cyber Cell Advocacy.</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0"/>
                <span>RBI Fair Practices Code Enforcement.</span>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>);
}
