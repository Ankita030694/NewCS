import type { Metadata } from 'next';
import StopRecoveryHarassmentClient from './StopRecoveryHarassmentClient';

export const metadata: Metadata = {
  title: 'How to Stop Recovery Agent Harassment (2026 Guide) | Legal Rights & RBI Rules | CredSettle',
  description:
    'Are recovery agents harassing you or calling family members? Learn how to legally stop collection calls, assert your rights under RBI rules and Bharatiya Nyaya Sanhita, file Ombudsman complaints, and protect your dignity.',
  keywords: [
    'How to stop recovery agent harassment',
    'how to stop personal loan recovery calls',
    'how to handle bank recovery calls',
    'recovery agents threatening me',
    'stop recovery agent calls India',
    'legal action against recovery agents',
    'RBI guidelines for recovery agents 2026',
    'can recovery agents call family',
    'can recovery agents visit workplace',
    'police complaint against recovery agent',
    'RBI Banking Ombudsman harassment complaint',
    'CredSettle debt harassment protection'
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/stop-recovery-agent-harassment',
  },
  openGraph: {
    title: 'How to Stop Recovery Agent Harassment (2026 Legal Guide) | CredSettle',
    description:
      'Know your legal rights against recovery agent harassment. Understand permitted calling hours (8 AM - 7 PM), third-party contact bans, police jurisdiction limits, and step-by-step procedures to file RBI complaints.',
    url: 'https://www.credsettle.com/stop-recovery-agent-harassment',
    type: 'article',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo.svg',
        width: 1200,
        height: 630,
        alt: 'Stop Recovery Agent Harassment - CredSettle Legal Protection Guide'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Stop Recovery Agent Harassment in India — Legal Rights | CredSettle',
    description:
      'Learn how to halt debt collector harassment legally under RBI Master Directives, BNS criminal provisions, and professional legal representation.',
    images: ['https://www.credsettle.com/credsettle-logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
};

export default function StopRecoveryAgentHarassmentPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How to Stop Recovery Agent Harassment: The Master Legal & Borrower Protection Guide 2026',
    'description':
      'Comprehensive legal guide on stopping recovery agent harassment in India. Learn permitted calling hours, restrictions on family contact, workplace visit prohibitions, criminal intimidation remedies under BNS, and RBI Ombudsman complaint procedures.',
    'image': 'https://www.credsettle.com/credsettle-logo.svg',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle Legal Research Desk',
      'url': 'https://www.credsettle.com'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2026-01-15',
    'dateModified': '2026-10-08',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/stop-recovery-agent-harassment'
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.credsettle.com/'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Stop Recovery Agent Harassment',
        'item': 'https://www.credsettle.com/stop-recovery-agent-harassment'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Are recovery agents legally allowed to call me continuously or use abusive language?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. The Reserve Bank of India Master Circular on Recovery Agents strictly forbids persistent auto-dialing, verbal abuse, obscene language, and intimidatory threats. Under Section 351 and 352 of the Bharatiya Nyaya Sanhita (BNS), using vulgar language or threatening bodily injury or reputation is a cognizable criminal offense.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can recovery agents call my relatives, parents, or friends if I default on an unsecured loan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Under Section 29 of the Credit Information Companies (Regulation) Act and RBI Outsourcing Guidelines, debt confidentiality is legally protected. Lenders and their collection agencies are strictly prohibited from contacting third-party family members, friends, or neighbors who are not formal co-borrowers or legal guarantors.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can a recovery agent visit my office or inform my HR manager about my unpaid loan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. RBI directives explicitly bar agents from visiting an employer\'s office or disclosing debt obligations to colleagues or management, unless the borrower has deliberately absconded from their registered residence. Intentionally causing public embarrassment at a place of employment constitutes actionable criminal defamation under Section 356 BNS.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What should I do if a collection agent threatens to send police or have me arrested?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Loan default is purely a civil breach of contract under Indian jurisprudence, not a criminal crime. Police officers have no statutory authority or jurisdiction to arrest individuals for unsecured credit card or personal loan defaults. Collection agents threatening police action commit the offense of impersonation and extortion under Sections 204 and 308 BNS.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What documents must a recovery agent produce before talking to me at my home?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Field recovery agents must furnish three mandatory credentials: (1) A photo identity card issued by the authorized agency, (2) A certified Letter of Authority issued by the bank or NBFC explicitly naming your loan account, and (3) Proof of Debt Recovery Agent (DRA) certification from the Indian Institute of Banking & Finance (IIBF).'
        }
      },
      {
        '@type': 'Question',
        'name': 'Are recovery calls allowed on Sundays, national holidays, or late at night?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Under RBI operational directives, collection calls and field visits are strictly restricted between 08:00 AM and 07:00 PM (IST). Calls before 8 AM or after 7 PM, as well as unannounced visits during times of personal bereavement or family crisis, violate central bank regulations.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can recovery agents legally seize personal property or household items for personal loans?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. Personal loans and credit cards are unsecured credit facilities where no collateral or asset is hypothecated. Recovery agents have zero legal power to seize furniture, vehicles, jewelry, or residential appliances. Confiscating items without a formal judicial execution order from a competent civil court constitutes criminal robbery or extortion.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How does filing a complaint with the RBI Banking Ombudsman help stop harassment?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'If the bank\'s internal Grievance Cell fails to resolve harassment within 30 days, filing a complaint on the RBI Integrated Ombudsman portal (cms.rbi.org.in) triggers formal regulatory scrutiny. The Ombudsman can award compensation up to ₹1,00,000 for mental harassment and loss of dignity, and can penalize the lending institution directly.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can CredSettle stop recovery agent calls legally?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. CredSettle\'s banking litigation advocates serve a formal Legal Representation Notice to the bank under the Advocates Act 1961. This notice informs the lender that legal counsel has been retained, requires all communication to be directed in writing to our legal desk, and warns of criminal and regulatory action if unlawful direct harassment continues.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What should I do if recovery agents continue calling after I have fully paid or settled the loan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'This is a serious deficiency of service and harassment under the Consumer Protection Act 2019. Forward your stamped settlement letter, payment receipt, and No Dues Certificate (NDC) to the bank\'s Principal Nodal Officer. If calls persist, CredSettle can issue an urgent legal notice demanding damages for wrongful recovery.'
        }
      }
    ]
  };

  const legalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    'name': 'CredSettle Recovery Harassment Legal Defense',
    'description':
      'Professional legal advocacy shielding borrowers from illegal recovery agent harassment, filing RBI Ombudsman representations, and negotiating fair banking debt settlements.',
    'url': 'https://www.credsettle.com/stop-recovery-agent-harassment',
    'telephone': '+91-8800226370',
    'areaServed': 'IN',
    'priceRange': '₹₹',
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'IN'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(legalServiceSchema),
        }}
      />
      <StopRecoveryHarassmentClient />
    </>
  );
}
