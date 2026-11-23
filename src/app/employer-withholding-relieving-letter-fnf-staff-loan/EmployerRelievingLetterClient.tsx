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
  BookOpen,
  Building2,
  DollarSign,
  Check,
  Lock,
  Phone,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  Landmark,
  Calendar
} from 'lucide-react';

export default function EmployerRelievingLetterClient() {
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
    { id: 'legal-framework', label: '1. Legal Framework: Relieving Letters' },
    { id: 'staff-vs-bank-loan', label: '2. Staff Loan vs External Bank Loan' },
    { id: 'fnf-protection-matrix', label: '3. F&F, Gratuity & EPF Protection' },
    { id: 'court-judgments', label: '4. High Court & Supreme Court Rulings' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step Exit Recovery SOP' },
    { id: 'original-certificates', label: '7. Original Degrees & Illegal Coercion' },
    { id: 'escalation-matrix', label: '8. 3-Tier Legal Escalation Matrix' },
    { id: 'statutory-timelines', label: '9. Resignation to Payout Timelines' },
    { id: 'special-scenarios', label: '10. Bank Staff, Notice Pay & Layoffs' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can my employer legally withhold my relieving letter for an unpaid staff loan?',
      a: 'Your boss can ask you to pay back a real staff loan when you leave. Still, HR cannot block your career or write false notes on your letter. Once you offer a fair F&F set-off or a written payment plan, you can ask a civil court to order a clean letter.'
    },
    {
      q: 'Can HR deduct my entire final salary to recover a company staff loan?',
      a: 'No. Under Section 18 of the Code on Wages, 2019 (in force from November 21, 2025), a firm can deduct approved loans from pay. Still, total cuts in one pay cycle cannot cross 50 percent of your earned wages.'
    },
    {
      q: 'Within how many days must my employer pay my final earned wages after resignation?',
      a: 'Under Section 17(2) of the Code on Wages, 2019, your firm must pay your earned wages within two working days of your last day at work. A 45-day HR policy cannot override this law for wages.'
    },
    {
      q: 'Can my employer adjust an unpaid staff loan against my statutory gratuity?',
      a: 'No. Under Sections 53 and 56 of the Code on Social Security, 2020, and Supreme Court rulings, a firm cannot cut your gratuity for a normal staff loan. Gratuity is due within 30 days, or else 10 percent simple interest applies.'
    },
    {
      q: 'Can my company block my EPF withdrawal or transfer because of a staff loan?',
      a: 'No. Your EPF money is 100 percent safe from seizure or loan set-off under Section 151 of the Code on Social Security, 2020 (earlier Section 10 of the EPF Act). If HR blocks your exit date, file a claim on the EPFiGMS portal.'
    },
    {
      q: 'Can my employer hold my relieving letter for an external bank personal loan default?',
      a: 'No. A personal loan from an outside bank or NBFC is a private deal between you and that bank. Under RBI Fair Practices rules, banks cannot tell HR to stop your letter or F&F. Your boss has zero right to punish you for an outside bank debt.'
    },
    {
      q: 'Is it legal for HR to keep my original degree or mark sheets as loan security?',
      a: 'No. Keeping your original school marks or degree papers as security for a staff loan is illegal in India. If HR refuses to give them back after a written request, they can face a criminal case under Section 316 of BNS, 2023.'
    },
    {
      q: 'What did the Delhi High Court rule in Vishal Gupta v. L&T Finance Limited?',
      a: 'In Vishal Gupta v. L&T Finance Limited (2009), the Delhi High Court told the firm to give a clean relieving letter right away. The judge said holding back exit papers causes deep harm to a worker who needs to join a new job.'
    },
    {
      q: 'What should I do if I cannot pay the full staff loan balance in one lump sum?',
      a: 'Send a clear email asking HR to share an exact F&F sheet. Offer to adjust legal F&F dues first, then pay the rest in small monthly parts. Save every email as proof of good faith so HR cannot call you absconding.'
    },
    {
      q: 'How does CredSettle help employees facing staff loan and relieving letter disputes?',
      a: 'CredSettle checks your loan ledger and F&F sheet for errors. Our legal team sends strong notices under Indian labour law, settles fair repayment terms with HR or banks, and helps protect your job offer and CIBIL score.'
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
            <Landmark className="w-3.5 h-3.5" />
            <span>Code on Wages, 2019 &amp; Employee Debt Rights in India</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Legal Remedies When HR Holds Relieving Letter for Debt
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Learn what Indian labour laws and courts say when a firm holds your relieving letter or F&amp;F pay for a staff loan. Protect your EPF, gratuity, and next job offer today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Resolve Your Staff Loan Dispute</span>
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
                  <span>Legal Worker Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Backed by the Code on Wages, 2019, Code on Social Security, 2020, and Indian court rulings.
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
                <span>QUICK ANSWER: RELIEVING LETTER &amp; F&amp;F RULES FOR STAFF LOANS</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">HR Cannot Trap Your Career:</strong> A firm can ask you to clear a real staff loan. Still, HR cannot hold your exit papers just to hurt your next job.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">2-Day Pay Rule &amp; 50% Cap:</strong> Under the Code on Wages, 2019 (active since Nov 21, 2025), earned wages are due in 2 working days. Total cuts cannot cross 50% of pay.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">EPF &amp; Gratuity Stay Safe:</strong> Your boss cannot touch your EPF money or gratuity to clear a normal staff loan. Both funds have full shield by law.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Outside Bank Loans Are Private:</strong> HR has zero right to stop your relieving letter or F&amp;F because of a default on an outside bank personal loan.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Original Degrees Are Off-Limits:</strong> Holding your original mark sheets or degree papers for debt is a crime under Section 316 of BNS, 2023.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Legal Framework: Can HR Hold Your Relieving Letter? */}
            <section id="legal-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Indian Labour Codes &amp; Worker Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Legal Framework: Can HR Hold Your Relieving Letter?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many workers in India take a pay advance, festival loan, or staff loan from their firm. When they quit, HR often freezes the relieving letter and Full and Final (F&amp;F) pay until the full balance is paid.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian law keeps two rights apart. One is your right to earn a living. The other is your firm&apos;s right to claim a civil debt. Articles 19(1)(g) and 21 of our Constitution guard your right to work and join a new job.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                No single Indian Act forces a private firm to give a relieving letter on the spot if you break a signed loan deal. Even so, courts do not let firms hold exit papers as a club to bully staff.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In plain words, if you owe a real staff loan, you must pay it back as agreed. At the same time, your boss must use lawful F&amp;F rules or a civil claim, not block your career forever.
              </p>
            </section>

            {/* SECTION 2: Staff Loan vs External Bank Loan: Key Legal Rules */}
            <section id="staff-vs-bank-loan" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Company Loan vs Outside Bank Loan</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Staff Loan vs External Bank Loan: Key Legal Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Before you reply to HR, check who gave you the loan. The law works in a very different way when your boss is the lender versus when an outside bank is the lender.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>Direct Staff Loan:</strong> Your firm gave you money from its own funds, such as a pay advance or a bank-staff home loan. Here, you have a direct deal with your firm. HR can ask to settle the dues at exit, within legal pay caps.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>Outside Bank or NBFC Loan:</strong> You took a loan from a bank or loan app, even through an office tie-up desk. Under RBI Fair Practices rules, that loan is private between you and the lender.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                At times, loan agents call or email HR to shame you into paying. Your firm cannot stop your relieving letter or hold your F&amp;F for an outside bank loan. If a bank calls your HR, report it to the RBI Ombudsman.
              </p>
            </section>

            {/* SECTION 3: F&F Salary, Gratuity & EPF Protection Comparison */}
            <section id="fnf-protection-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Legal Cuts &amp; Protected Funds</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. F&amp;F Salary, Gratuity &amp; EPF Protection Comparison
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                India put the Code on Wages, 2019 and the Code on Social Security, 2020 into force on November 21, 2025. These laws draw a strict line between funds HR can touch and funds that stay safe.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For example, HR can cut approved loans from final pay up to legal limits. However, HR can never seize your EPF or gratuity to clear a normal staff loan. Check the chart below.
              </p>

              {/* Representative Comparison Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">What HR Can &amp; Cannot Hold for a Staff Loan</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Indian Labour Codes (Nov 2025)</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Exit Asset / Benefit</th>
                        <th className="p-3">Can HR Hold or Cut It?</th>
                        <th className="p-3">Indian Law</th>
                        <th className="p-3">Legal Limit &amp; Rule</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Earned Final Wages</td>
                        <td className="p-3 text-amber-600 font-semibold">Part Cut Only</td>
                        <td className="p-3 font-mono text-xs">Code on Wages Sec 17 &amp; 18</td>
                        <td className="p-3">Due in 2 working days. Total cuts capped at 50% of pay.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Provident Fund (EPF)</td>
                        <td className="p-3 text-emerald-700 font-bold">Strictly Banned</td>
                        <td className="p-3 font-mono text-xs">Social Security Code Sec 151</td>
                        <td className="p-3">100% safe from seizure, lien, or employer loan set-off.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Gratuity Payout</td>
                        <td className="p-3 text-emerald-700 font-bold">Strictly Banned</td>
                        <td className="p-3 font-mono text-xs">Social Security Code Sec 53 &amp; 56</td>
                        <td className="p-3">Due in 30 days (+10% yearly interest on delay). No loan cut.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Original Degrees / Marks</td>
                        <td className="p-3 text-rose-700 font-bold">Illegal (Crime)</td>
                        <td className="p-3 font-mono text-xs">BNS Sec 316 &amp; Contract Act</td>
                        <td className="p-3">No boss lien. Keeping originals is criminal breach of trust.</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-medium text-slate-900">
                        <td className="p-3 font-bold">Relieving Letter</td>
                        <td className="p-3 text-[#1886ff] font-bold">No Unfair Hold</td>
                        <td className="p-3 font-mono text-xs">Art. 19(1)(g) &amp; 21; Civil Law</td>
                        <td className="p-3">Must release once fair set-off or EMI plan is in writing.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: High Court & Supreme Court Judgments on Exit Dues */}
            <section id="court-judgments" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Key Court Rulings</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. High Court &amp; Supreme Court Judgments on Exit Dues
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian courts have stopped firms and banks from holding exit letters or seizing exit funds to force loan pay. Citing these key cases in your legal notice often pushes HR to act fast.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Vishal Gupta v. L&amp;T Finance (Delhi HC, 2009)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The firm held back a clean relieving letter and called the exit job abandonment. The Delhi High Court ordered a clean letter at once so the worker could join his new job.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Jaswant Singh Gill v. BCCL (SC, 2007)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court held that internal firm rules cannot take away gratuity rights. Gratuity can be cut only if a worker is fired for proven misconduct under strict legal rules.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Radhey Shyam Gupta v. PNB (SC, 2009)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 60(1)(g) of the CPC, the Supreme Court held that gratuity and pension stay safe from loan seizure. This shield holds even after the cash enters a bank account or FD.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Canara Bank &amp; Central Bank HC Rulings</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Karnataka and Kerala High Courts ruled that banks cannot use a banker&apos;s lien or loan form clauses to cut unpaid staff home or personal loans from a worker&apos;s gratuity.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Relieving Letter &amp; F&amp;F Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual chart sums up your core rights under India&apos;s Labour Codes. Use it to check legal pay limits, payout deadlines, and your four-step legal path.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/employer-withholding-relieving-letter-fnf-staff-loan.jpg"
                    alt="Indian Labour Law Rights When Employer Withholds Relieving Letter or F&F for Staff Loan"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Employee Exit &amp; Debt Protection Framework • Labour Codes Compliant</span>
                  <a
                    href="/images/infographics/employer-withholding-relieving-letter-fnf-staff-loan.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Get Your Relieving Letter Back */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Action Plan</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Get Your Relieving Letter Back
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six clear steps as soon as you resign. A clean paper trail guards your new job offer and stops HR from calling you absconding.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Save Your Loan Sheet &amp; Payslips
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your signed loan paper, EMI history, and payslips before your work email closes. Check the true balance left and spot any unfair exit fees.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Finish Handover &amp; Get Asset Receipts
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Serve your notice period and return your laptop, ID card, and files. Get signed receipts for each item so HR has no other excuse to hold your letter.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Offer a Fair F&amp;F Set-Off or EMI Plan
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Write to HR from your own email and ask for a full F&amp;F breakup. Offer to adjust legal leave pay first, then pay the rest in monthly EMIs or a one-time deal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Protect Your Joining Date at the New Firm
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Share your resignation email, last three payslips, EPF history, and asset receipt with your new HR. Most firms accept these proofs while your formal letter is pending.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Send a Legal Notice to HR &amp; Directors
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If HR still blocks your letter, wages, or gratuity, send a lawyer&apos;s notice. Cite the Code on Wages, Code on Social Security, and the Vishal Gupta case, giving 7 to 15 days to act.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: File Labour, EPFO, or Civil Court Claims
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the firm ignores your notice, file claims with the Labour Commissioner, Gratuity Officer, and EPFiGMS portal. For fast letter release, ask a civil court for an urgent order.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Original Certificates, Bonds & Illegal HR Coercion */}
            <section id="original-certificates" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Common Traps &amp; Illegal HR Tactics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Original Certificates, Bonds &amp; Illegal HR Coercion
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Some firms cross strict legal lines to force loan payback. Know which tactics break the law so you never sign unfair forms under stress.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Keeping Original Degrees &amp; Passports</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bosses have no lien under Section 171 of the Indian Contract Act. Keeping your original mark sheets or degrees for a loan is a crime under Section 316 of BNS, 2023.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>Blank Cheques or Blank Exit Forms</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Never sign blank sheets or give undated security cheques at exit. Misuse of blank cheques often leads to false cheque bounce cases under Section 138 of the NI Act.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>False Background Check Threats</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    HR cannot spread lies of fraud or theft to your new firm during BGV. Calling a civil staff loan &quot;crime&quot; makes the firm liable for civil defamation damages.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Gratuity or EPF Waiver Clauses</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Some exit forms try to let HR cut loans from your gratuity or EPF. Under Indian law, no private form can cancel legal social security shields, so those terms are void.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Legal Escalation: HR to Labour Commissioner */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Official Redressal Paths</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Legal Escalation: HR to Labour Commissioner
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When polite emails fail, move your case up step by step through official legal channels. Each tier solves a clear part of your exit dispute.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Step</th>
                      <th className="p-3">Where to File</th>
                      <th className="p-3">Time Taken</th>
                      <th className="p-3">Relief You Get</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 1: Legal Notice</td>
                      <td className="p-3">HR Head &amp; Company Legal Team</td>
                      <td className="p-3 font-mono">7 to 15 Days</td>
                      <td className="p-3">Gets exact F&amp;F sheet, clean letter, and fair loan terms.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 2: Labour &amp; EPFO</td>
                      <td className="p-3">Labour Office, Gratuity Officer, EPFiGMS</td>
                      <td className="p-3 font-mono">30 to 60 Days</td>
                      <td className="p-3">Gets earned pay, gratuity with 10% interest, and EPF exit date.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Tier 3: Civil / Police</td>
                      <td className="p-3">Civil Court / Local Police Station</td>
                      <td className="p-3 font-mono">Fast / Urgent</td>
                      <td className="p-3">Orders clean relieving letter or returns held original degrees.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Statutory Timelines: Resignation to Full Payout */}
            <section id="statutory-timelines" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Exit Pay Deadlines</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Statutory Timelines: Resignation to Full Payout
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Track these exact legal dates after you resign. Knowing each deadline helps you catch delays early and claim delay interest.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Day / Window</th>
                      <th className="p-3">Stage</th>
                      <th className="p-3">What Employer Must Do</th>
                      <th className="p-3">What You Should Do</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Last Working Day</td>
                      <td className="p-3 font-mono text-[11px]">Exit Handover</td>
                      <td className="p-3">Sign asset return slip and close handover sign-off.</td>
                      <td className="p-3">Save loan ledger, payslips, and quit emails.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Within 2 Working Days</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Wages Due</td>
                      <td className="p-3">Pay earned wages under Code on Wages Sec 17(2) (50% cut cap).</td>
                      <td className="p-3 font-bold text-amber-800">Email HR at once if earned pay is late past Day 2.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Within 30 Days</td>
                      <td className="p-3 font-mono text-[11px]">Gratuity Due</td>
                      <td className="p-3">Pay full gratuity under Social Security Code Sec 56(3).</td>
                      <td className="p-3">Check that no staff loan was cut from gratuity.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 31 Onwards</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Interest Starts</td>
                      <td className="p-3">Firm owes 10% yearly simple interest on late gratuity.</td>
                      <td className="p-3 font-bold text-slate-900">Send legal notice and file Labour &amp; EPFiGMS claims.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Special Cases: Bank Staff, Notice Pay & Layoffs */}
            <section id="special-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Cases: Bank Staff, Notice Pay &amp; Layoffs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Staff loan fights often mix with bank jobs, short notice exits, or job cuts. Here is how Indian law treats these four real cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-[#1886ff]" />
                    Bank &amp; NBFC Staff With Low-Rate Loans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bank staff often hold low-rate home or personal loans. When you leave, the bank usually shifts the loan to normal public rates instead of forcing instant full pay, or lets you transfer it to another bank.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Notice Period Buyout Plus Staff Loan
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you leave early without full notice, HR can claim agreed notice pay along with your loan dues. Ask for one single written sheet so you pay only true net dues.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-indigo-600" />
                    Layoffs or Job Cuts With Active Loan
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your firm lets you go due to cost cuts, HR cannot force instant lump-sum loan pay while holding your exit letter. Ask for an easy EMI plan or partial waiver.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-amber-600" />
                    EPF Exit Date Blocked by Old HR
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your old firm refuses to mark your exit date on the UAN portal over a loan fight, you can mark it yourself online 60 days after the last deposit or file on EPFiGMS.
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
                Frequently Asked Questions: Relieving Letter &amp; Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Get clear, direct answers to common questions Indian workers ask when HR holds exit papers, final pay, gratuity, or EPF over an unpaid loan.
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
                Official Statutory Citations &amp; Legal References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Code on Wages, 2019 (S.O. 5322(E), Nov 21, 2025):</strong> Section 17(2) (2-day final wage pay rule) and Section 18 (50% cap on loan cuts from pay).
                </li>
                <li>
                  <strong>Code on Social Security, 2020 (S.O. 5319(E), Nov 21, 2025):</strong> Sections 53 &amp; 56 (gratuity 30-day rule and 10% delay interest) and Section 151 (EPF safety from seizure).
                </li>
                <li>
                  <strong>Delhi High Court:</strong> Vishal Gupta v. L&amp;T Finance Limited (2009) on clean relieving letters and court orders.
                </li>
                <li>
                  <strong>Supreme Court of India:</strong> Jaswant Singh Gill v. BCCL (2007) and Radhey Shyam Gupta v. PNB (2009) on gratuity and pension safety under Section 60(1)(g) CPC.
                </li>
                <li>
                  <strong>Contract Act &amp; BNS, 2023:</strong> Section 171 Contract Act (no boss lien) and Section 316 BNS (crime for keeping original degrees).
                </li>
                <li>
                  <strong>RBI Fair Practices Code:</strong> Bans outside banks from calling HR or forcing firms to stop exit papers over private loans.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://labour.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Ministry of Labour &amp; Employment</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://epfigms.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>EPFO Grievance Portal (EPFiGMS)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://samadhan.labour.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>SAMADHAN Labour Dispute Portal</span>
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
                    <span>RBI Integrated Ombudsman Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/can-bank-contact-my-employer-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Can Bank Contact Employer?
                  </Link>
                  <Link href="/can-bank-seize-epf-provident-fund-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    EPF &amp; Gratuity Protection
                  </Link>
                  <Link href="/section-60-cpc-assets-property-exempt-from-bank-attachment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 60 CPC Exempt Assets
                  </Link>
                  <Link href="/salary-deduction-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Salary Deduction on Loan Default
                  </Link>
                  <Link href="/salary-account-frozen-by-bank-for-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Salary Account Freeze Defense
                  </Link>
                  <Link href="/can-recovery-agents-visit-my-office" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Recovery Agents at Workplace
                  </Link>
                  <Link href="/background-verification-for-it-job-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    IT Job BGV &amp; Loan Default
                  </Link>
                  <Link href="/corporate-credit-card-default-employee-company-liability" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Corporate Card Exit Liability
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
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
                Expert in Indian bank rules, worker debt rights, and personal loan exits. Helps salaried staff guard their jobs, F&amp;F dues, and credit score.
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
                  EMPLOYEE DEBT &amp; EXIT SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  HR Holding Your Relieving Letter?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team checks your loan and F&amp;F sheet, sends strong legal notices, and settles fair terms so you can join your next job on time.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Legal Case Review
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
                  <span>Labour Law &amp; RBI Compliant • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Assurance</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Clean Exit Papers:</strong> Strong legal notices to get your letter fast.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>EPF &amp; Gratuity Shield:</strong> Stop illegal loan cuts from exit funds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Office Privacy Guard:</strong> Stop outside bank calls to your HR.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Easy Loan Exit:</strong> Set up fair EMI plans or OTS deals.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/can-bank-contact-my-employer-for-loan-recovery"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can Bank Contact Employer for Loan Recovery?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI office privacy rules &rarr;</span>
                </Link>

                <Link
                  href="/can-bank-seize-epf-provident-fund-for-loan-recovery"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can Bank or Employer Seize EPF &amp; Gratuity?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Legal seizure shields &rarr;</span>
                </Link>

                <Link
                  href="/background-verification-for-it-job-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    IT Job Background Check &amp; Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Guard your next job offer &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
