import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, Phone, Globe, Lock } from 'lucide-react';

export default function CompanySection() {
  const solutions = [
    { title: 'Settle Unsecured Loans', href: '/loan-settlement' },
    { title: 'Convert Settled to Closed', href: '/convert-settled-status-to-closed' },
    { title: 'Credit Card Relief', href: '/services/credit-card-settlement' },
    { title: 'Anti-Harassment Defense', href: '/services/anti-harassment' },
    { title: 'Personal Loan Resolution', href: '/services/personal-loan-settlement' },
    { title: 'MSME Debt Defense', href: '/services/business-loan-settlement' }
  ];

  return (
    <div className="rounded-2xl border border-blue-200/90 bg-gradient-to-br from-white via-blue-50/20 to-slate-50 p-4 sm:p-5 md:p-6 shadow-xs text-slate-800">
      {/* Top Header: CredSettle Logo & Trust Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-blue-100">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/credsettle-logo-black.svg"
              alt="CredSettle"
              className="h-6 sm:h-7 w-auto object-contain"
            />
          </Link>
          <span className="hidden sm:inline-block w-px h-5 bg-slate-200" />
          <span className="text-[11px] font-black uppercase tracking-wider text-[#0C2756] bg-blue-500/10 text-[#007AFF] px-2 py-0.5 rounded-md">
            Legal Debt Dispute Authority
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>CICRA 2005 &amp; RBI Compliant</span>
        </div>
      </div>

      {/* Compact Description */}
      <div className="my-3.5 text-xs sm:text-sm leading-relaxed text-slate-600">
        <p>
          <strong className="text-[#0C2756]">CredSettle</strong> (
          <a href="https://www.credsettle.com" className="text-[#007AFF] hover:underline font-semibold">
            credsettle.com
          </a>
          ) is India&apos;s premier debt settlement, loan dispute resolution, and legal protection platform. Operating strictly under the <strong>RBI Fair Practices Code</strong> and <strong>CICRA 2005</strong>, our advocate panel negotiates directly with Bank Principal Nodal Officers to eliminate waived differentials, obtain unconditional No Dues Certificates (NDC), and upgrade credit bureau records from <em>&quot;Settled&quot;</em> to <em>&quot;Closed&quot;</em>.
        </p>
      </div>

      {/* Compact Solutions Chips */}
      <div className="pt-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-black text-[#0C2756] uppercase tracking-wider">
            Institutional Resolution Programs:
          </span>
          <span className="text-[10px] text-slate-500 flex items-center gap-1">
            <Lock className="w-3 h-3 text-emerald-600" /> Success-Fee Model
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {solutions.map((sol, idx) => (
            <Link
              key={idx}
              href={sol.href}
              className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#007AFF] hover:bg-blue-50/50 transition-all text-xs font-semibold text-slate-700 hover:text-[#007AFF] shadow-2xs group"
            >
              <span className="truncate">{sol.title}</span>
              <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-[#007AFF] transition-colors flex-shrink-0 ml-1" />
            </Link>
          ))}
        </div>
      </div>

      {/* Ultra-compact Footer Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 mt-3.5 pt-3 border-t border-slate-200/80 text-[11px] text-slate-500">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <Phone className="w-3 h-3 text-[#007AFF]" />
            <a href="tel:+918800226635" className="font-bold text-slate-700 hover:text-[#007AFF]">
              +91-8800226635
            </a>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Globe className="w-3 h-3 text-[#007AFF]" />
            <a href="https://www.credsettle.com" className="font-semibold text-slate-700 hover:text-[#007AFF]">
              credsettle.com
            </a>
          </span>
        </div>
        <span className="text-[10px] text-slate-400">Headquarters: Connaught Place, New Delhi</span>
      </div>
    </div>
  );
}
