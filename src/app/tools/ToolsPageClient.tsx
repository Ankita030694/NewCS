'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Calculator,
  ShieldAlert,
  CreditCard,
  Scale,
  FileText,
  TrendingUp,
  Percent,
  CheckCircle2,
  Lock,
  ArrowRight,
  Search,
  Sparkles,
  HelpCircle,
  AlertTriangle,
  ChevronDown,
  Building2,
  ShieldCheck,
  CalendarCheck,
  Layers
} from 'lucide-react';

interface ToolItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  badge: 'Live Calculator' | 'Coming Soon';
  description: string;
  metrics: string[];
  href?: string;
  actionText: string;
  isLive: boolean;
  iconName: string;
}

export default function ToolsPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedUpcomingTool, setSelectedUpcomingTool] = useState<ToolItem | null>(null);

  const tools: ToolItem[] = [
    {
      id: 'loan-settlement-calculator',
      title: 'Loan Settlement Calculator',
      category: 'loan-settlement',
      categoryLabel: 'Loan Settlement',
      badge: 'Live Calculator',
      description:
        'Calculate your estimated settlement payout, bank haircut percentage, and net cashflow savings under RBI compromise norms.',
      metrics: ['Payout Estimate', 'Haircut %', 'Net Savings'],
      href: '/tools/loan-settlement-calculator',
      actionText: 'Calculate Settlement',
      isLive: true,
      iconName: 'Calculator',
    },
    {
      id: 'emi-calculator',
      title: 'Loan EMI Calculator',
      category: 'emi-loans',
      categoryLabel: 'EMI & Loans',
      badge: 'Live Calculator',
      description:
        'Calculate monthly installments, total interest costs, and full amortization schedules using standard reducing balance compounding.',
      metrics: ['Monthly EMI', 'Total Interest', 'Amortization Table'],
      href: '/tools/emi-calculator',
      actionText: 'Calculate EMI',
      isLive: true,
      iconName: 'Percent',
    },
    {
      id: 'multiple-loan-calculator',
      title: 'Multiple Loan Debt Calculator',
      category: 'debt-management',
      categoryLabel: 'Debt Management',
      badge: 'Live Calculator',
      description:
        'Combine multiple loans, credit card balances, and EMIs into a single view. Calculate total debt, combined payments, and weighted average interest rate.',
      metrics: ['Total Debt', 'Combined EMI', 'Weighted APR'],
      href: '/tools/multiple-loan-calculator',
      actionText: 'Combine Debts',
      isLive: true,
      iconName: 'Layers',
    },
    {
      id: 'debt-to-income-calculator',
      title: 'Debt-to-Income (DTI) Ratio Calculator',
      category: 'financial-planning',
      categoryLabel: 'Financial Planning',
      badge: 'Live Calculator',
      description:
        'Calculate your Debt-to-Income (DTI) and Indian banking FOIR percentage. Check how recurring debt obligations impact loan eligibility and financial health.',
      metrics: ['Total Debt %', 'Housing DTI', 'FOIR Risk Band'],
      href: '/tools/debt-to-income-calculator',
      actionText: 'Calculate DTI',
      isLive: true,
      iconName: 'Scale',
    },
    {
      id: 'debt-repayment-planner',
      title: 'Debt Repayment Planner',
      category: 'debt-management',
      categoryLabel: 'Debt Management',
      badge: 'Live Calculator',
      description:
        'Create an illustrative repayment timeline with Avalanche or Snowball strategies. Compare interest savings, debt-free target dates, and monthly schedules.',
      metrics: ['Payoff Date', 'Interest Saved', 'Monthly Schedule'],
      href: '/tools/debt-repayment-planner',
      actionText: 'Plan Payoff',
      isLive: true,
      iconName: 'CalendarCheck',
    },
    {
      id: 'settlement-vs-repayment-calculator',
      title: 'Settlement vs Full Repayment Comparison',
      category: 'loan-settlement',
      categoryLabel: 'Loan Settlement',
      badge: 'Live Calculator',
      description:
        'Compare hypothetical settlement costs with structured full repayment. Evaluate nominal cash savings side-by-side with CIBIL score impact and tax implications.',
      metrics: ['Cash Difference', 'CIBIL Impact', 'Amortization Plan'],
      href: '/tools/settlement-vs-repayment-calculator',
      actionText: 'Compare Options',
      isLive: true,
      iconName: 'Scale',
    },
    {
      id: 'credit-card-interest-calculator',
      title: 'Credit Card Interest Calculator',
      category: 'credit-cibil',
      categoryLabel: 'Credit & CIBIL',
      badge: 'Live Calculator',
      description:
        'Estimate how interest, monthly payments, and revolving fees affect your card balance. Model payoff timelines and avoid the perpetual debt trap.',
      metrics: ['Payoff Months', 'Total Interest', 'Payoff Schedule'],
      href: '/tools/credit-card-interest-calculator',
      actionText: 'Calculate Interest',
      isLive: true,
      iconName: 'CreditCard',
    },
  ];

  const categories = useMemo(() => {
    const list = [{ id: 'all', label: 'All Tools' }];
    const seen = new Set<string>();
    for (const tool of tools) {
      if (!seen.has(tool.category)) {
        seen.add(tool.category);
        list.push({ id: tool.category, label: tool.categoryLabel });
      }
    }
    return list;
  }, [tools]);

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesCategory =
        selectedCategory === 'all' || tool.category === selectedCategory;
      const matchesSearch =
        tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const faqs = [
    {
      q: 'Are the financial tools on CredSettle free to use?',
      a: 'Yes. All calculators, DTI estimators, and complaint templates on CredSettle are 100% free with no hidden charges, mandatory login, or commercial obligation.'
    },
    {
      q: 'How accurate are the settlement payout calculations?',
      a: 'Our calculators model real-world RBI compromise settlement guidelines, unbundling 100% of penal fees and applying historical banking haircut ranges (35% to 65%) based on delinquency vintage.'
    },
    {
      q: 'Can I use the RBI harassment complaint generator against any bank or NBFC?',
      a: 'Yes. The complaint tool maps violations directly to the RBI Master Circular on Fair Practices Code, applicable to all scheduled commercial banks, NBFCs, and digital lending apps in India.'
    },
    {
      q: 'Does using these tools impact my credit score or alert my bank?',
      a: 'No. Using our online tools is completely private and runs locally in your browser. No queries are sent to credit bureaus like CIBIL, Equifax, or Experian.'
    }
  ];

  const getToolIcon = (name: string) => {
    switch (name) {
      case 'Calculator':
        return <Calculator className="w-6 h-6 text-[#007AFF]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#007AFF]" />;
      case 'CreditCard':
        return <CreditCard className="w-6 h-6 text-[#007AFF]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-rose-500" />;
      case 'Percent':
        return <Percent className="w-6 h-6 text-amber-500" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-emerald-500" />;
      case 'Scale':
        return <Scale className="w-6 h-6 text-indigo-500" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-blue-500" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-6 h-6 text-cyan-500" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-purple-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-teal-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#007AFF]" />;
    }
  };

  return (
    <main className="relative min-h-screen bg-white">
      {/* Subtle Background Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, #007AFF 0%, rgba(12, 39, 86, 0.1) 60%, transparent 100%)',
          filter: 'blur(120px)',
          zIndex: 0
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#007AFF] text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Financial & Legal Defense Suite</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C2756] tracking-tight mb-4">
            Free Debt Resolution & Legal Protection Tools
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
            Empowering Indian borrowers with transparent settlement calculators, RBI-compliant legal complaint generators, and credit rebuilding roadmaps.
          </p>

          {/* Trust Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="text-xs font-medium text-slate-700">100% Free to Use</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <Lock className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="text-xs font-medium text-slate-700">Private & Secure</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <Scale className="w-4 h-4 text-indigo-600 shrink-0" />
              <span className="text-xs font-medium text-slate-700">RBI Rules Aligned</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="text-xs font-medium text-slate-700">Instant Results</span>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0C2756] mb-6 text-center">
            Explore Debt Settlement Calculators & Legal Tools
          </h2>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-50 p-4 rounded-2xl border border-slate-200">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto" role="tablist" aria-label="Tool Categories">
              {categories.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={selectedCategory === tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${selectedCategory === tab.id
                    ? 'bg-[#007AFF] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search calculators & tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-lg bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#007AFF] text-slate-800"
              />
            </div>
          </div>
        </section>

        {/* Tools Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="group flex flex-col justify-between bg-white rounded-2xl border border-slate-200 hover:border-blue-300 p-6 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Header: Icon + Badges */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-105 transition-transform">
                    {getToolIcon(tool.iconName)}
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${tool.isLive
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-blue-50 text-blue-700 border-blue-200'
                        }`}
                    >
                      {tool.badge}
                    </span>
                    <span className="text-[11px] text-slate-600 font-medium">
                      {tool.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-base sm:text-lg font-bold text-[#0C2756] mb-2 leading-snug group-hover:text-[#007AFF] transition-colors">
                  {tool.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {tool.description}
                </p>

                {/* Metrics Pill List */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {tool.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-100 text-[11px] text-slate-600"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                {tool.isLive && tool.href ? (
                  <Link
                    href={tool.href}
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#007AFF] hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
                  >
                    <span>{tool.actionText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <button
                    onClick={() => setSelectedUpcomingTool(tool)}
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-medium transition-all"
                  >
                    <span>{tool.actionText}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-16 px-4 bg-slate-50 rounded-2xl border border-slate-200 mb-16">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-[#007AFF] flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-6 h-6" />
            </div>
            <p className="text-slate-800 font-semibold mb-1 text-base">New Tools Coming Soon</p>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              Our interactive calculators and tools are currently being updated. The new suite of tools will be published here shortly.
            </p>
          </div>
        )}

        {/* Informative Pillar Section 1 */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0C2756] mb-6 text-center">
            Why Use CredSettle Free Financial Resolution Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#007AFF] flex items-center justify-center font-bold text-lg mb-4">
                1
              </div>
              <h3 className="text-base font-bold text-[#0C2756] mb-2">
                Eliminate Information Asymmetry
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Collection agencies profit from borrower panic. Our calculators isolate core principal balances from inflated 42% APR penalties, giving you empirical leverage before initiating discussions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg mb-4">
                2
              </div>
              <h3 className="text-base font-bold text-[#0C2756] mb-2">
                Enforce Statutory RBI Safeguards
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The Reserve Bank of India strictly regulates debt collection. Our tools help you log exact guideline breaches, prepare formal legal notices, and protect family members from harassment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg mb-4">
                3
              </div>
              <h3 className="text-base font-bold text-[#0C2756] mb-2">
                Plan Sustainable Financial Exits
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Borrowing from fresh credit lines to pay overdue EMIs creates a fatal debt spiral. Our calculators evaluate genuine settlement feasibility, helping you reset liabilities safely and permanently.
              </p>
            </div>
          </div>
        </section>

        {/* Informative Pillar Section 2 */}
        <section className="mb-16 bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0C2756] mb-4">
            How Our Debt Relief Tools Protect Indian Borrowers
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-6">
            Defaulting on unsecured debt in India is legally recognized as a civil commercial dispute, not a criminal offense. Understanding statutory safeguards allows distressed borrowers to defend their dignity while working toward an authorized compromise settlement.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-slate-700">
            <div className="space-y-2">
              <h3 className="font-bold text-[#0C2756] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                RBI Fair Practice Code Compliant
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Lenders cannot contact borrowers before 8:00 AM or after 7:00 PM, nor can agents harass family members, friends, or workplace supervisors under RBI Master Directions.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-[#0C2756] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Section 60 CPC Asset Protection
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The Code of Civil Procedure explicitly exempts necessary family wear, cooking vessels, tools of artisans, pension funds, EPF, and two-thirds of monthly salary from attachment.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-[#0C2756] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Bona Fide Hardship Acknowledgement
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Banks maintain board-approved compromise policies for borrowers experiencing verified financial hardship, allowing write-offs of penal levies and haircuts on principal.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-[#0C2756] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Clear Path to Credit Score Rebuild
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Settling an account eliminates lingering delinquency and stops ongoing Days Past Due (DPD) accumulation, establishing a foundation to restore your CIBIL score within 18 to 24 months.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs Accordion */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0C2756] mb-6 text-center">
            Frequently Asked Questions About Our Tools
          </h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left font-semibold text-[#0C2756] text-sm hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform ${openFaq === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Lead CTA Box */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0C2756] to-[#007AFF] p-8 sm:p-12 text-white text-center shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            Need Expert Legal Representation to Settle Your Debt?
          </h3>
          <p className="text-blue-100 text-xs sm:text-sm max-w-2xl mx-auto mb-6 leading-relaxed">
            While our self-help tools provide instant clarity, negotiating directly with bank recovery teams requires structured legal defense. Speak to CredSettle’s advocates today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-white text-[#0C2756] font-bold text-xs sm:text-sm hover:bg-blue-50 transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <span>Request Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Upcoming Tool Details Modal */}
      {selectedUpcomingTool && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                {selectedUpcomingTool.categoryLabel}
              </span>
              <button
                onClick={() => setSelectedUpcomingTool(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <h3 className="text-xl font-bold text-[#0C2756] mb-3">
              {selectedUpcomingTool.title}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              {selectedUpcomingTool.description}
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Planned Features & Output
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {selectedUpcomingTool.metrics.map((metric, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#007AFF] shrink-0" />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                onClick={() => setSelectedUpcomingTool(null)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#007AFF] hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold text-center transition-colors"
              >
                Speak to a Legal Specialist
              </Link>
              <button
                onClick={() => setSelectedUpcomingTool(null)}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
