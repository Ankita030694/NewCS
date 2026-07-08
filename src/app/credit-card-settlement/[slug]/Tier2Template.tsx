import Link from "next/link";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import StateGrid from "@/components/StateGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Tier2Template({ bankName, slug }: { bankName: string, slug: string }) {
  
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
        "name": `${bankName} Settlement Resolution`,
        "item": `https://www.credsettle.com/credit-card-settlement/${slug}`
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `Resolve ${bankName} Credit Card Defaults with CredSettle`,
    "description": `Falling behind on ${bankName} credit card payments? CredSettle negotiates massive discounts on your behalf, stops collection agents, and finalizes your settlement legally.`,
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
      "name": `Can I secure a settlement with ${bankName} if my account is not yet an NPA?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Typically, private sector banks like ${bankName} demand that an account be completely delinquent for 3 to 6 months before their risk management team approves a formal One-Time Settlement (OTS). Until then, they will only offer temporary restructuring.`
      }
    },
    {
      "@type": "Question",
      "name": `Are ${bankName} recovery agents allowed to visit my office?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `No. Under stringent RBI consumer protection laws updated in 2026, unannounced workplace visits intended to humiliate borrowers are illegal. CredSettle intervenes legally to permanently block these visits.`
      }
    }
    ]
  };

  const tocSections = [
    { id: "debt-spiral", text: `The ${bankName} Debt Spiral`, level: 2 },
    { id: "ots-negotiation", text: `Negotiating OTS with ${bankName}`, level: 2 },
    { id: "stopping-harassment", text: `Stopping Agency Harassment`, level: 2 },
    { id: "state-guidelines", text: `State Legal Guidelines`, level: 2 },
  ];

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Credit Card Settlement", url: "/credit-card-settlement" },
    { name: `${bankName} Settlement`, url: `/credit-card-settlement/${slug}` }
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
            Clear Your <span className="text-blue-600">{bankName}</span> Credit Card Arrears
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Take control of your financial future. CredSettle acts as your legal shield, negotiating heavily discounted settlements directly with {bankName} while putting an immediate end to recovery agent harassment.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Main Content */}
          <article className="lg:w-2/3 prose prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 id="debt-spiral" className="scroll-mt-24 text-3xl font-bold mb-4">The {bankName} Debt Spiral</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Missing payments on a {bankName} credit card triggers a cascade of late fees and penal interest rates that can exceed 40% annually. For borrowers facing genuine financial hardship, catching up becomes mathematically impossible. Rather than suffering in silence or borrowing from unreliable sources, a formal settlement is the most pragmatic approach to closing the account permanently.
            </p>

            <h2 id="ots-negotiation" className="scroll-mt-24 text-3xl font-bold mb-4">Negotiating OTS with {bankName}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              CredSettle's expert negotiators bypass the outsourced collection agencies and communicate directly with {bankName}'s core resolution desk. We present documented proof of your financial distress to secure a One-Time Settlement (OTS). By utilizing our services, borrowers frequently achieve substantial principal waivers, allowing them to close the account for a fraction of the inflated demanded amount.
            </p>

            <h2 id="stopping-harassment" className="scroll-mt-24 text-3xl font-bold mb-4">Stopping Agency Harassment</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The moment you onboard with CredSettle, we issue cease-and-desist communications to {bankName}, invoking your rights under the latest RBI circulars. The central bank has made it abundantly clear that financial institutions are accountable for the behavior of their recovery agents. We ensure your privacy is respected and that you are not subjected to verbal abuse or unauthorized calls to your workplace.
            </p>

            <h2 id="state-guidelines" className="scroll-mt-24 text-3xl font-bold mb-4">State Legal Guidelines</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The legal framework surrounding civil debt recovery varies across the country. Whether it's filing a grievance with local cyber cells or understanding the jurisdiction of regional Debt Recovery Tribunals, knowing your local laws is critical. Select your state below to see how we manage {bankName} settlements in your specific area.
            </p>

            {/* State Grid Component Integration */}
            <StateGrid bankSlug={slug} />

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
                <p className="text-blue-600 text-sm font-semibold mb-4">Consumer Debt Specialist</p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Rahul specializes in consumer debt protection and financial dispute resolution. He helps borrowers secure legally binding settlements and defend against recovery harassment from major institutions.
                </p>
                <Link 
                    href="/contact" 
                    className="inline-block w-full py-3 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
                >
                    Get Free Consultation
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
