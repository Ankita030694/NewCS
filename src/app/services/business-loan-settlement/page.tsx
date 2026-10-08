import type { Metadata } from 'next';
import BusinessLoanSettlementPageClient from './BusinessLoanSettlementPageClient';

export const metadata: Metadata = {
  title: 'Business Loan Settlement in India (2026 Master Guide) | MSME & SME OTS | CredSettle',
  description:
    'Complete master legal guide to Business Loan Settlement in India. Learn RBI OTS compromise frameworks, MSME debt relief, SARFAESI & DRT defense, personal guarantee protection, CIBIL repair, and step-by-step negotiation.',
  keywords: [
    'business loan settlement',
    'business loan settlement process',
    'MSME loan settlement',
    'SME debt settlement India',
    'business loan OTS scheme',
    'one time settlement business loan',
    'settle unsecured business loan',
    'secured business loan settlement SARFAESI',
    'business loan CIBIL impact',
    'business loan settlement lawyer India',
    'stop business loan recovery agent harassment',
    'CredSettle business loan settlement'
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/services/business-loan-settlement',
  },
  openGraph: {
    title: 'Business Loan Settlement in India — Complete Legal & Financial Guide | CredSettle',
    description:
      'Legally resolve distressed business debt, MSME loans, working capital facilities, and overdrafts through RBI compromise settlements. Shield assets and directors from coercive litigation.',
    url: 'https://www.credsettle.com/services/business-loan-settlement',
    type: 'article',
    images: [
      {
        url: 'https://www.credsettle.com/business_hero.png',
        width: 1200,
        height: 630,
        alt: 'Business Loan Settlement Guide - CredSettle'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Loan Settlement in India — Complete Master Guide | CredSettle',
    description:
      'Step-by-step legal procedure for settling commercial, MSME, and unsecured business loans under RBI compromise rules. Protect promoters, collateral, and company cash flow.',
    images: ['https://www.credsettle.com/business_hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
};

export default function BusinessLoanSettlementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': 'https://www.credsettle.com/services/business-loan-settlement#webpage',
                url: 'https://www.credsettle.com/services/business-loan-settlement',
                name: 'Business Loan Settlement in India — Master Guide & Legal Relief | CredSettle',
                description:
                  'Comprehensive 84-section authority guide on business loan settlement, MSME debt resolution, OTS negotiations, personal guarantee protections, and recovery defense in India.',
                breadcrumb: {
                  '@type': 'BreadcrumbList',
                  itemListElement: [
                    {
                      '@type': 'ListItem',
                      position: 1,
                      name: 'Home',
                      item: 'https://www.credsettle.com',
                    },
                    {
                      '@type': 'ListItem',
                      position: 2,
                      name: 'Services',
                      item: 'https://www.credsettle.com/services',
                    },
                    {
                      '@type': 'ListItem',
                      position: 3,
                      name: 'Business Loan Settlement',
                      item: 'https://www.credsettle.com/services/business-loan-settlement',
                    },
                  ],
                },
              },
              {
                '@type': 'LegalService',
                '@id': 'https://www.credsettle.com/#legalservice',
                name: 'CredSettle Debt Resolution & Legal Services',
                url: 'https://www.credsettle.com',
                logo: 'https://www.credsettle.com/logo.png',
                image: 'https://www.credsettle.com/business_hero.png',
                description:
                  'Specialized corporate and commercial debt resolution, MSME compromise negotiations, SARFAESI defense, and legal advisory across India.',
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'IN',
                },
                priceRange: '₹₹',
                telephone: '+91-8800226444',
                areaServed: {
                  '@type': 'Country',
                  name: 'India',
                },
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://www.credsettle.com/services/business-loan-settlement#faq',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Can secured business loans be settled without losing collateral?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, secured business loans can be settled via One-Time Settlement (OTS) while safeguarding collateral. CredSettle negotiates structured compromise settlements based on realistic net realizable asset values versus forced auction costs, ensuring full lien release and property title document return upon settlement payment.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What paperwork is required for a business loan OTS proposal?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'A formal business loan settlement proposal requires audited balance sheets, P&L statements, GST returns (GSTR-3B/1), 12 months bank statements, cash-flow projections, a detailed Hardship Statement outlining operational or market failure, and an official Board Resolution or proprietor authorization.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How does business loan settlement affect company and director credit scores?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Settling an account reports the loan as "Settled" or "Post-Write-Off Compromise" on commercial bureaus (CIBIL Commercial, CRIF) and personal bureau files of personal guarantors. While this causes a temporary rating reduction, it immediately halts ongoing 90+ DPD defaults and creates a clean zero-balance baseline to rebuild credit within 18 to 36 months.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Are personal guarantors and company directors protected during loan settlement?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. A legally binding settlement agreement and tripartite OTS sanction letter drafted by CredSettle includes explicit covenants discharging personal guarantors, indemnifying directors, and waiving civil recovery or Section 138 NI Act proceedings against promoters.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can multiple business loans from different banks and NBFCs be settled simultaneously?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. CredSettle designs consolidated inter-creditor settlement roadmaps prioritizing high-risk exposures (e.g., SARFAESI-linked mortgages or criminal cheque complaints) while sequencing unsecured cash credit, term loans, and fintech lines to preserve operational liquidity.',
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
      <BusinessLoanSettlementPageClient />
    </>
  );
}
