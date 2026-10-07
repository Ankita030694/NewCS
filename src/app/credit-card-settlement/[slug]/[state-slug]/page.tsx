import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { creditCardBanks } from "@/data/creditCardBanks";
import { statesData } from "@/data/statesData";
import { notFound } from "next/navigation";
import { getMetaTitlePixelWidth } from "@/lib/seo-utils";

export async function generateStaticParams() {
  const params: { slug: string; "state-slug": string }[] = [];
  creditCardBanks.forEach((bank) => {
    statesData.forEach((state) => {
      params.push({ slug: bank.slug, "state-slug": state.slug });
    });
  });
  return params;
}

function getShortStateName(stateName: string): string {
  if (stateName === 'Dadra and Nagar Haveli and Daman and Diu') return 'DNH & DD';
  if (stateName === 'Andaman and Nicobar Islands') return 'Andaman & Nicobar';
  if (stateName === 'Jammu and Kashmir') return 'Jammu & Kashmir';
  return stateName;
}

function getShortBankName(bankName: string): string {
  if (bankName === 'Jammu & Kashmir Bank') return 'J&K Bank';
  return bankName.replace(/Small Finance Bank/gi, 'SFB').replace(/\s+Bank$/i, '').trim();
}

function getCCStateH1(bankName: string, stateName: string): string {
  const shortState = getShortStateName(stateName);
  const displayState = stateName.length > 20 ? shortState : stateName;
  const p1 = `Stop ${bankName} Recovery Agents in ${displayState}`;
  if (p1.length <= 65) return p1;
  const p2 = `Stop ${bankName} Recovery in ${displayState}`;
  if (p2.length <= 65) return p2;
  const p3 = `${bankName} Settlement in ${displayState}`;
  if (p3.length <= 65) return p3;
  return p3.slice(0, 65);
}

function getCCStateH2(bankName: string, stateName: string): string {
  const shortState = getShortStateName(stateName);
  const displayState = stateName.length > 20 ? shortState : stateName;
  const p1 = `Legal Guide to ${bankName} Settlement in ${displayState}`;
  if (p1.length <= 65) return p1;
  const p2 = `${bankName} Settlement Guide in ${displayState}`;
  if (p2.length <= 65) return p2;
  const p3 = `Settle ${bankName} Card Dues in ${displayState}`;
  if (p3.length <= 65) return p3;
  return p3.slice(0, 65);
}

function getCCStateMetaTitle(bankName: string, stateName: string): string {
  const shortState = getShortStateName(stateName);
  const shortBank = getShortBankName(bankName);
  const brand = 'CredSettle';

  const candidates = [
    `${bankName} Settlement in ${stateName} | ${brand}`,
    `${bankName} Settlement in ${shortState} | ${brand}`,
    `${shortBank} Card Settlement in ${stateName} | ${brand}`,
    `${shortBank} Settlement in ${stateName} | ${brand}`,
    `${shortBank} Card Settlement in ${shortState} | ${brand}`,
    `${shortBank} Settlement in ${shortState} | ${brand}`,
    `${bankName} Settlement in ${shortState}`,
    `${shortBank} Card Settlement in ${shortState}`,
    `${shortBank} Settlement - ${shortState}`
  ];

  for (const cand of candidates) {
    if (cand.length <= 58 && getMetaTitlePixelWidth(cand) <= 550) {
      return cand;
    }
  }

  return `${shortBank} Settlement - ${shortState}`.slice(0, 48);
}

function getCCStateMetaDescription(bankName: string, stateName: string): string {
  const shortState = getShortStateName(stateName);
  const displayState = stateName.length > 20 ? shortState : stateName;

  const candidates = [
    `Facing ${bankName} credit card harassment in ${displayState}? CredSettle provides legal debt resolution & relief. Free consultation.`,
    `Facing ${bankName} credit card debt in ${displayState}? Settle legally under RBI rules with CredSettle. Free consultation.`,
    `Facing ${bankName} credit card harassment in ${shortState}? CredSettle provides legal debt resolution & relief. Free consultation.`,
    `Facing ${bankName} credit card debt in ${shortState}? Settle legally under RBI rules with CredSettle. Free consultation.`,
    `Facing ${bankName} harassment in ${displayState}? Settle credit card debt legally with CredSettle. Free consultation.`,
    `Facing ${bankName} harassment in ${shortState}? Settle credit card debt legally with CredSettle. Free consultation.`,
    `Settle ${bankName} credit card dues in ${displayState} legally with CredSettle. Stop harassment. Free consultation.`,
    `Settle ${bankName} credit card dues in ${shortState} legally with CredSettle. Stop harassment. Free consultation.`
  ];

  for (const c of candidates) {
    if (c.length >= 115 && c.length <= 136) return c;
  }

  for (const c of candidates) {
    if (c.length <= 138) return c;
  }

  return candidates[0].slice(0, 135);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; "state-slug": string }> }) {
  const { slug, "state-slug": stateSlug } = await params;
  const bank = creditCardBanks.find((b) => b.slug === slug);
  const state = statesData.find((s) => s.slug === stateSlug);

  if (!bank || !state) return {};

  const metaTitle = getCCStateMetaTitle(bank.name, state.name);
  const metaDescription = getCCStateMetaDescription(bank.name, state.name);

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://www.credsettle.com/credit-card-settlement/${bank.slug}/${state.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    keywords: [
      `${bank.name} settlement in ${state.name}`,
      `stop ${bank.name} recovery agents in ${state.name}`,
      `legal notice from ${bank.name} in ${state.name}`,
      `${state.name} credit card lawyer`,
      `${state.policeAuthority} complaint against bank`,
      `${state.highCourt} ruling on recovery agents`
    ],
    alternates: {
      canonical: `https://www.credsettle.com/credit-card-settlement/${bank.slug}/${state.slug}`,
    },
  };
}

export default async function BankStateSettlementPage({ params }: { params: Promise<{ slug: string; "state-slug": string }> }) {
  const { slug, "state-slug": stateSlug } = await params;
  const bank = creditCardBanks.find((b) => b.slug === slug);
  const state = statesData.find((s) => s.slug === stateSlug);

  if (!bank || !state) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.credsettle.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Credit Card Settlement",
        "item": "https://www.credsettle.com/credit-card-settlement"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${bank.name} Settlement`,
        "item": `https://www.credsettle.com/credit-card-settlement/${bank.slug}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": `${state.name} Settlement`,
        "item": `https://www.credsettle.com/credit-card-settlement/${bank.slug}/${state.slug}`
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${bank.name} Credit Card Settlement Guide for ${state.name} Residents`,
    "description": `Legal strategy to resolve ${bank.name} credit card defaults effectively in ${state.name} with CredSettle.`,
    "image": "https://www.credsettle.com/credsettle-logo.svg",
    "author": {
      "@type": "Person",
      "name": "Rahul Verma",
      "image": "https://www.credsettle.com/default-user.svg"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CredSettle",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.credsettle.com/credsettle-logo.svg"
      }
    },
    "datePublished": "2026-07-07",
    "dateModified": "2026-07-07"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Can I file a police complaint against ${bank.name} recovery agents in ${state.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes. If ${bank.name} agents use threats or abuse, CredSettle helps you file a formal complaint with the ${state.policeAuthority}. The law strictly protects your right to live with dignity.`
        }
      },
      {
        "@type": "Question",
        "name": `What if ${bank.name} sends me a legal notice from a lawyer in ${state.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Do not panic if you get a legal notice from ${bank.name}. CredSettle legal experts reply to ${bank.name} right away. We cite ${state.highCourt} rules and push the bank to agree to a One-Time Settlement (OTS).`
        }
      },
      {
        "@type": "Question",
        "name": `Will my case be transferred to the Debt Recovery Tribunal in ${state.drtLocations}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Unsecured card dues rarely go to DRT courts in ${state.drtLocations}. DRTs only handle debts above ₹20 Lakhs. For smaller amounts, ${bank.name} settles out of court. CredSettle works directly with the bank to close your card account.`
        }
      }
    ]
  };

  const shortState = getShortStateName(state.name);
  const displayState = state.name.length > 20 ? shortState : state.name;
  const h2Text = getCCStateH2(bank.name, state.name);

  const tocSections = [
    { id: "overview", text: h2Text, level: 2 },
    { id: "local-harassment", text: `Combating ${bank.name} Harassment`, level: 3 },
    { id: "legal-recourse", text: `Legal Recourse in ${displayState}`, level: 3 },
    { id: "settlement-process", text: `${bank.name} Settlement Process`, level: 3 },
    { id: "drt-jurisdiction", text: `DRT Limits & Jurisdiction`, level: 3 },
  ];

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Credit Card Settlement", url: "/credit-card-settlement" },
    { name: bank.name, url: `/credit-card-settlement/${bank.slug}` },
    { name: state.name, url: `/credit-card-settlement/${bank.slug}/${state.slug}` }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="text-center max-w-4xl mx-auto my-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Stop <span className="text-blue-600">{bank.name}</span> Recovery Agents in {displayState}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Know your legal rights in {state.name}. CredSettle helps you stop recovery calls today. We talk to {bank.name} to cut your credit card dues. Settle your debt safely and get a fresh start.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Main Content */}
          <article className="lg:w-2/3 prose prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 id="overview" className="scroll-mt-24 text-3xl font-bold mb-6 text-gray-900 border-b border-gray-100 pb-4">{h2Text}</h2>

            <h3 id="local-harassment" className="scroll-mt-24 text-2xl font-bold mb-4 text-gray-900">Combating {bank.name} Harassment in {displayState}</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Do you face {bank.name} credit card debt in {state.name}? You do not have to face recovery agents alone. Many agents use high pressure on card users. They think borrowers do not know the rules. CredSettle steps in to help you right away. We take over all recovery calls so you get instant relief. Our team handles all talks while we work on your settlement.
            </p>

            <h3 id="legal-recourse" className="scroll-mt-24 text-2xl font-bold mb-4 text-gray-900">Legal Recourse for {bank.name} in {state.name}</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Recovery agents must follow strict rules in {state.name}. They cannot use bad words. They cannot threaten you. They cannot call your family or office. Doing so is illegal. If agents cross the line, we file formal complaints with the {state.policeAuthority}. We also send legal notices to top {bank.name} officers. We cite clear rulings from the {state.highCourt} to protect your privacy and peace of mind.
            </p>

            <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl mb-8">
              <h4 className="font-semibold text-blue-900 mb-2">Did You Know?</h4>
              <p className="text-blue-800 text-sm">
                The {state.highCourt} holds that banks must follow legal paths to recover money. Agents cannot use force or threats. Your card debt with {bank.name} is a civil matter.
              </p>
            </div>

            <h3 id="settlement-process" className="scroll-mt-24 text-2xl font-bold mb-4 text-gray-900">The {bank.name} Settlement Process in {displayState}</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              A One-Time Settlement (OTS) is a safe way to clear your credit card debt. If you face real financial hardship, {bank.name} will agree to a reduced payment. Unsecured card dues have no asset attached. Our team presents your case directly to senior bank managers. We negotiate to waive up to 50% or more of your total card dues. You pay the reduced sum and close the account for good.
            </p>

            <h3 id="drt-jurisdiction" className="scroll-mt-24 text-2xl font-bold mb-4 text-gray-900">DRT Limits for {bank.name} Credit Cards in {displayState}</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Agents may threaten to take you to the Debt Recovery Tribunal in {state.drtLocations}. But DRT courts only take cases above ₹20 Lakhs. Most card dues fall well below this mark. Thus, {bank.name} prefers to settle out of court. CredSettle uses this rule to secure a fast settlement deal. Once you pay, the bank gives you an official No Dues Certificate (NOC).
            </p>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-24 space-y-8">
              <TableOfContents headings={tocSections} />
              
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                <img 
                    src="/default-user.svg" 
                    alt="Rahul Verma - Legal Expert" 
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-white shadow-sm object-cover"
                />
                <p className="font-bold text-gray-900 text-lg">Rahul Verma</p>
                <p className="text-blue-600 text-sm font-semibold mb-4">Lead Consumer Advocate</p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Rahul guides card settlement cases across {state.name}. He ensures that {bank.name} follows all RBI rules. His goal is to stop harassment and help you clear dues at the lowest cost.
                </p>
                <Link 
                    href="/contact" 
                    className="inline-block w-full py-3 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
                >
                    Start Your Settlement
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
