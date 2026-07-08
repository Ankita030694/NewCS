import Link from "next/link";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import StateGrid from "@/components/StateGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Tier3Template({ bankName, slug }: { bankName: string, slug: string }) {
  
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
        "name": `${bankName} Settlement Guide`,
        "item": `https://www.credsettle.com/credit-card-settlement/${slug}`
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `Legal Guide to ${bankName} Credit Card Settlement`,
    "description": `Experiencing financial hardship? Learn how to legally settle your ${bankName} credit card debt through CredSettle, avoiding prolonged civil disputes and harassment.`,
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
      "name": `How long does a settlement with ${bankName} take to process?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Once CredSettle initiates negotiations with ${bankName}, the process typically takes 3 to 6 weeks to receive a formal settlement offer, depending on the complexity of your financial hardship documentation.`
      }
    },
    {
      "@type": "Question",
      "name": `Will I get a No Objection Certificate (NOC) from ${bankName}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Yes. After the agreed settlement amount is paid directly to your ${bankName} card account, the bank is legally obligated to issue a formal NOC stating the account is permanently closed with no outstanding dues.`
      }
    }
    ]
  };

  const tocSections = [
    { id: "understanding-default", text: `Understanding a ${bankName} Default`, level: 2 },
    { id: "credsettle-strategy", text: `The CredSettle Settlement Strategy`, level: 2 },
    { id: "protecting-rights", text: `Protecting Your Legal Rights`, level: 2 },
    { id: "regional-impact", text: `Regional Recovery Tactics`, level: 2 },
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
            Comprehensive <span className="text-blue-600">{bankName}</span> Settlement Service
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Navigate the complexities of credit card default safely. CredSettle offers a protected, legally sound pathway to settle your {bankName} debt and regain financial stability.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Main Content */}
          <article className="lg:w-2/3 prose prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 id="understanding-default" className="scroll-mt-24 text-3xl font-bold mb-4">Understanding a {bankName} Default</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              When you default on an unsecured credit card from institutions like {bankName}, the account quickly transitions through internal collections before being assigned to external recovery agencies. These agencies rely heavily on intimidation and the lack of consumer legal awareness to force payments. A structured settlement is a recognized financial mechanism to resolve these non-performing assets amicably.
            </p>

            <h2 id="credsettle-strategy" className="scroll-mt-24 text-3xl font-bold mb-4">The CredSettle Settlement Strategy</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              CredSettle's approach is designed to protect your dignity while securing the best possible financial outcome. We legally represent you in all interactions with {bankName}. By presenting a solid case of financial inability to pay the inflated balance, we compel the bank's resolution officers to agree to a discounted One-Time Settlement, ensuring you only pay a fraction of what is demanded.
            </p>

            <h2 id="protecting-rights" className="scroll-mt-24 text-3xl font-bold mb-4">Protecting Your Legal Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              It is crucial to understand that defaulting on a credit card is a civil breach of contract, not a criminal offense. {bankName} cannot legally threaten you with police action or arrest. CredSettle strictly enforces the RBI's fair practice codes, promptly escalating any instances of agency harassment to the banking ombudsman and relevant cyber crime cells.
            </p>

            <h2 id="regional-impact" className="scroll-mt-24 text-3xl font-bold mb-4">Regional Recovery Tactics</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The enforcement of consumer protection laws varies significantly by state. Local law enforcement responses to unauthorized recovery agent behavior dictate our specific legal maneuvers. Choose your state below to review the specific guidelines and legal precedence we utilize when settling your {bankName} account in your jurisdiction.
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
