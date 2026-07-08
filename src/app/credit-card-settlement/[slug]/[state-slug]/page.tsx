import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { creditCardBanks } from "@/data/creditCardBanks";
import { statesData } from "@/data/statesData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const params: { slug: string; "state-slug": string }[] = [];
  creditCardBanks.forEach((bank) => {
    statesData.forEach((state) => {
      params.push({ slug: bank.slug, "state-slug": state.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; "state-slug": string }> }) {
  const { slug, "state-slug": stateSlug } = await params;
  const bank = creditCardBanks.find((b) => b.slug === slug);
  const state = statesData.find((s) => s.slug === stateSlug);

  if (!bank || !state) return {};

  return {
    title: `${bank.name} Credit Card Settlement Lawyers in ${state.name} | CredSettle`,
    description: `Facing harassment from ${bank.name} in ${state.name}? CredSettle negotiates credit card settlements legally, leveraging ${state.highCourt} precedents to protect you.`,
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
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
          "text": `Yes. If ${bank.name} agents use abusive language or threats, CredSettle assists you in drafting a formal complaint to the ${state.policeAuthority} for criminal intimidation and extortion.`
        }
      },
      {
        "@type": "Question",
        "name": `What if ${bank.name} sends me a legal notice from a lawyer in ${state.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Most legal notices are automated intimidation tactics. However, they should not be ignored. CredSettle's legal team immediately responds to these notices, citing ${state.highCourt} precedents to force the bank to the negotiation table for a One-Time Settlement (OTS).`
        }
      },
      {
        "@type": "Question",
        "name": `Will my case be transferred to the Debt Recovery Tribunal in ${state.drtLocations}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Unsecured credit card debts almost never reach the threshold required for DRT intervention (₹20 Lakhs). Instead of lengthy litigation in ${state.drtLocations}, ${bank.name} prefers settling out of court—which is exactly what CredSettle negotiates.`
        }
      }
    ]
  };

  const tocSections = [
    { id: "local-harassment", text: `Combating Harassment in ${state.name}`, level: 2 },
    { id: "legal-recourse", text: `Legal Recourse via ${state.policeAuthority}`, level: 2 },
    { id: "settlement-process", text: `The Settlement Process in ${state.name}`, level: 2 },
    { id: "drt-jurisdiction", text: `Understanding DRT Limits`, level: 2 },
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
            Stop <span className="text-blue-600">{bank.name}</span> Recovery Agents in {state.name}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Leverage local consumer protection laws. CredSettle provides the legal intervention needed to halt harassment and secure a massively discounted settlement for your unsecured debt in {state.name}.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Main Content */}
          <article className="lg:w-2/3 prose prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 id="local-harassment" className="scroll-mt-24 text-3xl font-bold mb-4">Combating Harassment in {state.name}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              When residents of {state.name} fall behind on their {bank.name} credit card payments, they are frequently targeted by aggressive third-party collection agencies. These agencies often operate under the false assumption that borrowers are unaware of their regional legal rights. CredSettle acts as your impenetrable legal shield, stepping in to absorb and permanently stop the calls while we negotiate.
            </p>

            <h2 id="legal-recourse" className="scroll-mt-24 text-3xl font-bold mb-4">Legal Recourse via the {state.policeAuthority}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If recovery agents resort to using abusive language, threatening physical harm, or contacting your relatives/employer, they are committing criminal offenses. In {state.name}, we heavily utilize the {state.policeAuthority} to lodge formal complaints. We also send direct legal notices to {bank.name}'s nodal officers, explicitly citing recent {state.highCourt} judgments regarding consumer privacy, effectively ending the harassment overnight.
            </p>

            <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl mb-8">
              <h3 className="font-semibold text-blue-900 mb-2">Did You Know?</h3>
              <p className="text-blue-800 text-sm">
                The {state.highCourt} has repeatedly ruled that banks cannot act as "muscle men" to recover unsecured loans. The relationship between {bank.name} and you is strictly civil.
              </p>
            </div>

            <h2 id="settlement-process" className="scroll-mt-24 text-3xl font-bold mb-4">The Settlement Process in {state.name}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              CredSettle's negotiation strategy revolves around forcing {bank.name} to acknowledge your severe financial distress. Because unsecured credit card debt carries no collateral, {bank.name} faces extreme difficulty recovering the funds legally if you genuinely cannot pay. We navigate the banking hierarchy to secure a One-Time Settlement (OTS), regularly achieving waivers exceeding 50% of the inflated balance.
            </p>

            <h2 id="drt-jurisdiction" className="scroll-mt-24 text-3xl font-bold mb-4">Understanding DRT Limits</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Collection agents often threaten borrowers with immediate action at the Debt Recovery Tribunal in {state.drtLocations}. However, this is largely an empty threat for credit card defaulters. DRTs generally only entertain cases exceeding ₹20 Lakhs. For standard credit card debts, {bank.name} is practically forced to settle out of court. CredSettle uses this leverage to finalize your settlement and obtain your official No Objection Certificate (NOC).
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
                <h3 className="font-bold text-gray-900 text-lg">Rahul Verma</h3>
                <p className="text-blue-600 text-sm font-semibold mb-4">Lead Consumer Advocate</p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Rahul oversees complex settlement cases in {state.name}, ensuring that {bank.name} recovery agents adhere strictly to regional laws and RBI guidelines while securing the best possible financial outcome.
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
