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
  Landmark,
  UserX,
  HeartPulse
} from 'lucide-react';

export default function CivilPrisonLoanDefaultClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Legal Crux' },
    { id: 'legal-reality', label: '1. Legal Reality: Civil Debt vs Criminal Offense' },
    { id: 'order-21-rule-37', label: '2. Order 21 Rule 37 CPC: Show Cause Notice' },
    { id: 'supreme-court-precedent', label: '3. Supreme Court Ruling: Jolly George Case' },
    { id: 'section-51-cpc', label: '4. Section 51 CPC: Willful Evasion vs Means' },
    { id: 'statutory-immunity-matrix', label: '5. Statutory Immunity & Exemption Matrix' },
    { id: 'visual-blueprint', label: '6. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '7. Step-by-Step SOP: 6-Stage Defense' },
    { id: 'harassment-defense', label: '8. Illegal Harassment: Police & BNS Defenses' },
    { id: 'procedural-timeline', label: '9. Procedural Timeline: Default to Court' },
    { id: 'specialized-scenarios', label: '10. Specialized Scenarios: Women & Health' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank directly send me to civil prison for personal loan or credit card default?',
      a: 'No. Loan default is a civil dispute, not a crime. Under Indian law and Supreme Court rulings, banks have zero authority to arrest borrowers. Detention in civil prison can only be ordered by a competent civil court after a final money decree is passed, and only if willful evasion with sufficient means is proven.'
    },
    {
      q: 'What does a notice under Order 21 Rule 37 CPC mean?',
      a: 'An Order 21 Rule 37 notice is merely a show-cause notice issued by an execution court. It directs the judgment-debtor to appear and explain why they should not be committed to civil prison. It is not an arrest warrant. You simply need to appear through counsel and demonstrate your financial inability to pay.'
    },
    {
      q: 'What did the Supreme Court rule in Jolly George Varghese v. Bank of Cochin?',
      a: 'The Supreme Court ruled that jailing an impoverished debtor who lacks the means to pay violates Article 21 of the Indian Constitution. The court held that civil imprisonment requires proof of dishonest evasion, fraudulent transfer, or bad faith refusal despite having the financial ability to satisfy the decree.'
    },
    {
      q: 'Can women borrowers be arrested or detained in civil prison for loan default?',
      a: 'No. Section 56 of the Code of Civil Procedure (CPC), 1908 enacts an absolute statutory prohibition. Civil courts cannot order the arrest or detention of any woman in execution of a decree for the payment of money under any circumstance.'
    },
    {
      q: 'Can recovery agents threaten me with arrest warrants or police raids?',
      a: 'No. Recovery agents have zero judicial power. Threatening borrowers with arrest, jail, or police raids is illegal under the RBI Fair Practices Code and constitutes criminal intimidation under Sections 351 and 352 of the Bharatiya Nyaya Sanhita (BNS), 2023.'
    },
    {
      q: 'What is the subsistence allowance rule under Order 21 Rule 39 CPC?',
      a: 'Under Order 21 Rule 39 CPC, the decree-holder bank must pay a monthly maintenance allowance into court in advance to cover the judgment-debtor living expenses in civil prison. If the bank fails to deposit this allowance, the court must release the debtor immediately.'
    },
    {
      q: 'What is the maximum period a person can be detained in civil prison under CPC?',
      a: 'Under Section 58 of the CPC, if the decree amount exceeds ₹5,000, detention cannot exceed three months. For amounts between ₹2,000 and ₹5,000, the maximum limit is six weeks. If the decree is below ₹2,000, no detention can be ordered. Civil detention does not wipe out the debt.'
    },
    {
      q: 'Does filing personal insolvency under Section 94 IBC stop civil execution and arrest?',
      a: 'Yes. When an individual debtor files an insolvency petition under Section 94 of the Insolvency and Bankruptcy Code (IBC), an automatic interim moratorium comes into force under Section 96. This legally stays all pending civil suits, execution proceedings, and arrest notices across India.'
    },
    {
      q: 'What should I do if I receive an Order 21 Rule 37 court notice?',
      a: 'Never ignore the notice. Engage legal counsel to file an affidavit of assets and income under Order 21 Rule 41. Present evidence of your genuine financial distress, job loss, or medical bills. Simultaneously, initiate structured One-Time Settlement (OTS) negotiations to close the loan.'
    },
    {
      q: 'How does CredSettle assist borrowers facing Order 21 Rule 37 notices and bank harassment?',
      a: 'CredSettle provides complete legal defense against aggressive collection agencies, files replies to show-cause notices, invokes Supreme Court precedents, and negotiates directly with bank stressed asset committees for a 50% to 75% compromise waiver.'
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>Borrower Constitutional Protections &amp; Civil Debt Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Can Bank Send You to Civil Prison for Loan Default?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            An authoritative legal guide on Order 21 Rule 37 CPC, Section 51, and Supreme Court protections for loan defaulters in India. Discover why inability to pay is not a crime, how courts treat lack of means, and how to stop fake arrest threats.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect Your Legal Rights</span>
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
                  <span>Article 21 &amp; CPC Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under Order 21 Rule 37 CPC, Section 51 proviso, and landmark Supreme Court rulings.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* EXECUTIVE SUMMARY BOX (#F4F8FE Box) */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: CIVIL PRISON LAWS FOR LOAN DEFAULTERS IN INDIA</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Loan Default Is Not a Crime:</strong> Defaulting on an unsecured personal loan, credit card, or business loan is purely a civil contractual dispute. Banks have zero legal power to arrest you.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Order 21 Rule 37 Is Not an Arrest Warrant:</strong> This rule only empowers the execution court to issue a show-cause notice. It gives the borrower an opportunity to explain their genuine financial distress.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Supreme Court Landmark Precedent:</strong> In Jolly George Varghese v. Bank of Cochin, the Supreme Court ruled that jailing a person due to poverty violates Article 21 of the Constitution.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Complete Immunity for Women:</strong> Section 56 of the CPC strictly forbids the arrest or civil detention of women in execution of any money decree.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Recovery Agent Threats Are Criminal:</strong> Third-party collection agents issuing fake arrest notices or threatening jail commit criminal intimidation under BNS Section 351.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Legal Reality: Civil Debt vs Criminal Offense */}
            <section id="legal-reality" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Constitutional Rights &amp; Civil Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Legal Reality: Can You Be Jailed for Loan Default?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When borrowers default on unsecured loans or credit cards, debt collection agencies frequently resort to unlawful intimidation. One of their most common tactics is threatening borrowers with immediate police arrest or civil imprisonment. Many recovery agents falsely claim that a magistrate will send police to your home to take you to jail.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Indian law, simple failure to repay a loan is not a criminal offense. Loan default is a breach of a civil contract. Neither a commercial bank, a non-banking financial company (NBFC), nor a recovery agency has the legal authority to issue arrest warrants or send a borrower to prison.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In India, debt recovery must follow statutory civil procedures. The Indian Constitution safeguards personal liberty under Article 21. Unless there is evidence of criminal fraud, intentional forgery, or dishonored cheques under Section 138 of the Negotiable Instruments Act, debt recovery remains strictly confined to civil court proceedings.
              </p>
            </section>

            {/* SECTION 2: Order 21 Rule 37 CPC: Show Cause Notice Explained */}
            <section id="order-21-rule-37" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Law &amp; Civil Court Execution</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Order 21 Rule 37 CPC: Show Cause Notice Explained
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Order 21 of the Code of Civil Procedure (CPC), 1908 governs the execution of decrees and orders passed by civil courts. When a lender files a summary suit under Order 37 or an ordinary money suit and obtains a final money decree, the lender becomes a decree-holder. The borrower becomes a judgment-debtor.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Order 21 Rule 37 CPC, before any warrant of arrest can be considered against a judgment-debtor, the court must issue a show-cause notice. This notice directs the debtor to appear in court and explain why they should not be committed to civil prison.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This notice is not an arrest warrant. It is a mandatory judicial opportunity for the borrower to present their side of the case. The borrower can appear through an advocate and demonstrate genuine financial difficulties, medical emergencies, or loss of employment.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Ledger Audit &amp; Court Execution Defense</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹15 Lakh Execution Claim</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Court Decree / Asset Component</th>
                        <th className="p-3">Bank Execution Claim</th>
                        <th className="p-3">Statutory Legal Immunity Status</th>
                        <th className="p-3 text-right">Protected Balance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Total Decreed Debt Claim</td>
                        <td className="p-3 text-rose-600 font-bold">₹15,00,000</td>
                        <td className="p-3 text-blue-600 font-semibold">Civil Money Decree: Subject to CPC Execution</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹4,50,000 (Target OTS Deal)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Borrower Liquid Disposable Assets</td>
                        <td className="p-3">₹45,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">Section 51 Proviso: Demonstrates Lack of Means</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹45,000 (Exempt from Prison)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Necessary Wearing Apparel &amp; Tools</td>
                        <td className="p-3">₹1,20,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">Section 60(1) CPC: 100% Non-Attachable</td>
                        <td className="p-3 text-right font-bold text-emerald-700">Fully Protected by Law</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Civil Detention Risk Assessment</td>
                        <td className="p-3 text-slate-900">Bank Detention Request</td>
                        <td className="p-3 text-emerald-700">Dismissed under Jolly George Varghese Precedent</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">Zero Prison Risk</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Supreme Court Ruling: Jolly George Varghese Case */}
            <section id="supreme-court-precedent" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Supreme Court of India Jurisprudence</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Supreme Court Ruling: Jolly George Varghese Case
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The definitive judicial authority on civil imprisonment for debt default is the landmark Supreme Court decision in <em>Jolly George Varghese &amp; Anr. v. The Bank of Cochin (1980) 2 SCC 360</em>. The bench was led by the eminent jurist Justice V.R. Krishna Iyer.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In this case, a commercial bank sought the arrest and detention of an indebted borrower who could not satisfy a civil money decree. The Supreme Court delivered an emphatic ruling protecting the fundamental rights of debtors. The court held that to cast a person into prison because of their poverty is a direct violation of Article 21 of the Constitution.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Supreme Court integrated Article 11 of the International Covenant on Civil and Political Rights (ICCPR) into domestic constitutional law. Article 11 states that no one shall be imprisoned merely on the ground of inability to fulfill a contractual obligation. The court ruled that simple inability to pay is never grounds for detention.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Justice Krishna Iyer observed that there must be an element of bad faith, fraudulent concealment, or contumacious refusal. If a debtor has no current means to pay due to business misfortune, job loss, or illness, sending them to prison is unconstitutional.
              </p>
            </section>

            {/* SECTION 4: Section 51 CPC: Willful Evasion vs Lack of Means */}
            <section id="section-51-cpc" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Test &amp; Judicial Discretion</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Section 51 CPC: Willful Evasion vs Lack of Means
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 51 of the Code of Civil Procedure sets strict statutory limits on a court power to enforce a money decree through civil detention. The court cannot order imprisonment mechanically. Section 51 contains an explicit proviso that requires a detailed judicial inquiry.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Before committing any judgment-debtor to prison, the execution judge must record written reasons confirming one of the following two statutory conditions:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Test 1: Sufficient Means With Bad Faith Refusal</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank must prove that the debtor has the actual financial means to pay the decree, but willfully and dishonestly refuses to pay.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Test 2: Fraudulent Concealment or Absconding</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank must prove that the debtor dishonestly transferred, concealed, or removed property, or absconded from the jurisdiction to defeat the decree.
                  </p>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The burden of proof rests entirely on the creditor bank. If the bank fails to prove that the borrower has hidden wealth or dishonest intent, the court must reject the prayer for civil imprisonment.
              </p>
            </section>

            {/* SECTION 5: Statutory Immunity Matrix: Civil Prison Exemptions */}
            <section id="statutory-immunity-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Exemption Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Statutory Immunity Matrix: Civil Prison Exemptions
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Code of Civil Procedure provides comprehensive statutory exemptions that shield borrowers from civil arrest. Understanding these protections helps you counter illegal threats from collection agencies.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Borrower Category / Situation</th>
                      <th className="p-3">Governing Legal Provision</th>
                      <th className="p-3">Civil Detention Immunity</th>
                      <th className="p-3">Legal Condition &amp; Rights</th>
                      <th className="p-3">Recommended Legal Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Women Borrowers &amp; Guarantors</td>
                      <td className="p-3">Section 56 CPC</td>
                      <td className="p-3 text-emerald-600 font-semibold">100% Absolute Prohibition</td>
                      <td className="p-3">No woman can be detained for a money decree.</td>
                      <td className="p-3">File police FIR if agents threaten a woman.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Debtors Lacking Financial Means</td>
                      <td className="p-3">Section 51 CPC Proviso</td>
                      <td className="p-3 text-emerald-600 font-semibold">Complete Legal Immunity</td>
                      <td className="p-3">Poverty and business losses protect against detention.</td>
                      <td className="p-3">Submit affidavit of income and liabilities.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Non-Payment of Subsistence Allowance</td>
                      <td className="p-3">Order 21 Rule 39 CPC</td>
                      <td className="p-3 text-emerald-600 font-semibold">Mandatory Immediate Release</td>
                      <td className="p-3">Bank must pay monthly maintenance in advance.</td>
                      <td className="p-3">Demand immediate discharge if bank defaults.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Decree Value Under ₹2,000</td>
                      <td className="p-3">Section 58(1A) CPC</td>
                      <td className="p-3 text-emerald-600 font-semibold">Total Exemption from Prison</td>
                      <td className="p-3">No civil detention permitted for small debts.</td>
                      <td className="p-3">Dismiss execution application at threshold.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Debtors with Serious Illness</td>
                      <td className="p-3">Section 59 CPC</td>
                      <td className="p-3 text-emerald-600 font-semibold">Statutory Medical Release</td>
                      <td className="p-3">Court may cancel warrant or order release on illness.</td>
                      <td className="p-3">Furnish medical certificates and treatment records.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Applicants Under IBC Insolvency</td>
                      <td className="p-3">Section 94 &amp; 96 IBC</td>
                      <td className="p-3 text-emerald-600 font-semibold">Automatic Interim Moratorium</td>
                      <td className="p-3">Stays all legal suits and execution notices.</td>
                      <td className="p-3">Serve Section 96 interim order on execution court.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 6: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Visual Blueprint: Order 21 Rule 37 Procedure Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This comprehensive visual roadmap illustrates the legal framework governing civil detention, showing why loan default is a civil dispute and how statutory defenses protect borrowers.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/can-bank-send-you-to-civil-prison-for-loan-default-order-21-rule-37-cpc.jpg"
                    alt="Civil Prison for Loan Default Order 21 Rule 37 CPC Rules"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Civil Debt Protection Framework • Order 21 Rule 37 CPC Compliant</span>
                  <a
                    href="/images/infographics/can-bank-send-you-to-civil-prison-for-loan-default-order-21-rule-37-cpc.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>View High-Resolution Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 7: Step-by-Step SOP: 6-Stage Civil Notice Defense */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Step-by-Step SOP: 6-Stage Civil Notice Defense
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you receive a court notice or legal communication referencing Order 21 Rule 37 CPC, follow this systematic six-stage protocol to ensure complete legal safety and resolve your loan.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Verify Authenticity of the Notice
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check if the notice is an authentic court document with a valid court seal, case number, and CNR number. Many recovery agencies forge notices on WhatsApp to simulate court summonses.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Enter Formal Appearance Through Counsel
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Never ignore an authentic court notice. Instruct an experienced civil advocate to file a Vakalatnama in the execution court on your behalf before the scheduled hearing date.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Submit Affidavit of Means and Hardship
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under Order 21 Rule 41 CPC, file an affidavit disclosing your true financial condition. Attach termination letters, medical diagnosis reports, and bank statements showing lack of disposable income.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Invoke Jolly George Varghese &amp; Section 51
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Present the binding Supreme Court ruling in your written reply. Emphasize that detention requires proof of contumacious evasion with means, which the bank cannot establish.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Demand Compliance with Subsistence Rules
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Remind the court of Order 21 Rule 39 CPC. If the bank fails to deposit monthly prison maintenance costs in advance, the court cannot order detention.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Negotiate One-Time Settlement (OTS)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Use the execution stage to propose an amicable compromise settlement. Banks readily agree to waive penal charges and accept a 50% to 75% haircut to avoid protracted enforcement.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Illegal Agent Harassment: Police & BNS Defenses */}
            <section id="harassment-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Defenses &amp; Borrower Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Illegal Agent Harassment: Police &amp; BNS Defenses
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When third-party recovery agents send threatening voice notes or claim they will bring the police to arrest you, they are committing serious criminal offenses. You have strong protections under Indian penal statutes and regulatory codes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Sections 351 &amp; 352 BNS (Criminal Intimidation)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Threatening a borrower with unlawful arrest or social humiliation constitutes criminal intimidation under the Bharatiya Nyaya Sanhita, 2023, punishable with imprisonment.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Section 318 BNS (Cheating via Fake Warrants)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Creating counterfeit court warrants or masquerading as police officers to recover money is an offense of cheating and forgery under the Bharatiya Nyaya Sanhita.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>RBI Fair Practices Code Mandate</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI guidelines strictly prohibit recovery agents from using abusive language, threatening physical violence, or contacting borrowers outside authorized hours (8 AM to 7 PM).
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Police Circulars on Civil Matters</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Police stations have explicit standing orders not to entertain debt recovery complaints from banks. The police cannot detain or harass any citizen for loan default.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline Table */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Default to Execution Court
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the multi-year timeline of civil debt recovery helps borrowers see through recovery agent bluffs and take strategic legal action at the right stage.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Recovery Phase</th>
                      <th className="p-3">Estimated Timeframe</th>
                      <th className="p-3">Bank Judicial Action</th>
                      <th className="p-3">Borrower Rights &amp; Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Pre-NPA &amp; NPA Phase</td>
                      <td className="p-3 font-mono text-[11px]">Day 1 to 90</td>
                      <td className="p-3">Reminder calls, SMS notices, and formal overdue intimations.</td>
                      <td className="p-3">Request moratorium or restructure debt before NPA tagging.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Legal Notice Phase</td>
                      <td className="p-3 font-mono text-[11px]">Day 91 to 180</td>
                      <td className="p-3">Advocate demand notice issued under Section 138 or civil debt.</td>
                      <td className="p-3">Reply through counsel disputing penal charges and proposing OTS.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Civil Suit Trial Phase</td>
                      <td className="p-3 font-mono text-[11px]">Year 1 to 3</td>
                      <td className="p-3">Bank files Order 37 summary suit or ordinary recovery suit.</td>
                      <td className="p-3">File written statement, contest claims, and seek leave to defend.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Final Decree Passed</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Year 2 to 4</td>
                      <td className="p-3">Civil judge issues money decree against borrower.</td>
                      <td className="p-3">Lodge appeal in High Court or approach bank for compromise.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Order 21 Rule 37 Notice</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Execution Stage</td>
                      <td className="p-3">Bank files execution petition; court issues show-cause notice.</td>
                      <td className="p-3 font-bold text-slate-900">Demonstrate lack of means under Section 51; settle debt via OTS.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Compromise Resolution</td>
                      <td className="p-3 font-mono text-[11px]">30 to 60 Days</td>
                      <td className="p-3">Court records compromise settlement and full satisfaction.</td>
                      <td className="p-3">Receive official No Dues Certificate and clean court discharge.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Senior Citizens &amp; Illness
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian civil procedural law contains compassionate provisions for vulnerable debtors, senior citizens, and people facing severe medical crises.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserX className="w-4 h-4 text-[#1886ff]" />
                    Absolute Protection for Women (Section 56 CPC)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 56 of the CPC, women cannot be arrested or detained in civil prison for money decrees. Any recovery agent threatening a female borrower or homemaker with jail commits an illegal act.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-emerald-600" />
                    Medical Infirmity &amp; Severe Illness (Section 59 CPC)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 59 of the CPC empowers the court to cancel an arrest warrant or release a debtor from prison if they suffer from serious illness or medical infirmity requiring ongoing healthcare.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-indigo-600" />
                    Interim Moratorium Under Section 96 IBC
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When an individual debtor files an insolvency petition under Section 94 of the Insolvency and Bankruptcy Code, Section 96 imposes an automatic interim moratorium staying all execution suits nationwide.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Guarantors &amp; Third-Party Co-Borrowers
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    While a guarantor liability is co-extensive under Section 128 of the Contract Act, a guarantor enjoys identical protections under Section 51 CPC and Jolly George Varghese if they lack independent means.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Direct Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Civil Prison &amp; CPC Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal guidance addressing critical questions regarding civil imprisonment, Order 21 Rule 37 notices, recovery agent arrest threats, and debtor rights under Indian law.
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="border border-slate-200/80 rounded-2xl bg-white overflow-hidden shadow-2xs transition-all duration-200"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                            isOpen ? 'rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          <p className="pt-3">{faq.a}</p>
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
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Statutory Citations: Order 21 CPC &amp; Legal Precedents
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Code of Civil Procedure, 1908 (CPC):</strong> Order 21 Rule 37, Discretionary Power to Permit Judgment-Debtor to Show Cause Against Detention in Prison.
                </li>
                <li>
                  <strong>Code of Civil Procedure, 1908 (CPC):</strong> Section 51, Proviso on Execution by Detention and Mandatory Requirement of Willful Evasion with Means.
                </li>
                <li>
                  <strong>Code of Civil Procedure, 1908 (CPC):</strong> Section 56, Absolute Prohibition of Arrest or Detention of Women in Execution of Money Decrees.
                </li>
                <li>
                  <strong>Code of Civil Procedure, 1908 (CPC):</strong> Order 21 Rule 39 &amp; Section 58, Subsistence Allowance Rules and Maximum Limits on Civil Detention.
                </li>
                <li>
                  <strong>Supreme Court of India Precedent:</strong> Jolly George Varghese &amp; Anr. v. The Bank of Cochin (1980) 2 SCC 360, Article 21 Protection for Debtors.
                </li>
                <li>
                  <strong>Constitution of India:</strong> Article 21, Protection of Life and Personal Liberty and Reading of Article 11 ICCPR.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Judicial Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://main.sci.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Supreme Court of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://ecourts.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>eCourts Services Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 12 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/can-bank-file-section-420-cheating-case-for-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 420 Loan Default Rules
                  </Link>
                  <Link href="/section-60-cpc-assets-property-exempt-from-bank-attachment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 60 CPC Exempt Assets
                  </Link>
                  <Link href="/summons-from-court-for-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Court Summons for Personal Loan
                  </Link>
                  <Link href="/police-summons-for-loan-default-rights-against-illegal-interference" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Police Summons Loan Default
                  </Link>
                  <Link href="/personal-insolvency-section-94-ibc-interim-moratorium" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 94 IBC Moratorium
                  </Link>
                  <Link href="/can-bank-seize-epf-provident-fund-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    EPF Seizure Immunity
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Agent Guidelines
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/garnishee-order-bank-account-freeze-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Garnishee Order Defense
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate
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
                Specialist in civil procedural defense, Order 21 execution hearings, debtor human rights under Article 21, and structured bank debt resolution under Reserve Bank of India compromise settlement guidelines.
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

            {/* Card 2: Emergency CTA Card (#2452ae background) */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  CONFIDENTIAL LEGAL SHIELD
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Facing Order 21 Rule 37 or Jail Threats?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior legal resolution specialists stop unlawful arrest intimidation, invoke Supreme Court protections under Article 21, and negotiate up to 75% loan settlement waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Protect Your Liberty Now
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
                  <span>Statutory Protection • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Shield</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Civil Arrest:</strong> 100% enforcement of Supreme Court rights.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Police Harassment Defense:</strong> Anti-intimidation legal notice protection.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Affidavit of Means Support:</strong> Expert filing under Order 21 Rule 41.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official Bank Closure:</strong> Guaranteed No Dues Certificate.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/can-bank-file-section-420-cheating-case-for-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 420 Loan Default Rules
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Cheating case defense guide &rarr;</span>
                </Link>

                <Link
                  href="/section-60-cpc-assets-property-exempt-from-bank-attachment"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 60 CPC Non-Attachable Assets
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Exempt asset legal protection &rarr;</span>
                </Link>

                <Link
                  href="/summons-from-court-for-personal-loan"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Court Summons for Personal Loan
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Civil court summons defense &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
