import type { Metadata } from 'next';
import RBIRulesClient from './RBIRulesClient';

export const metadata: Metadata = {
  title: 'RBI Rules for Recovery Agents in India (2026 Guide) | Borrower Legal Rights & Protection | CredSettle',
  description:
    'Comprehensive legal guide on RBI rules for loan recovery agents in India. Learn permitted calling hours (8 AM - 7 PM), restrictions on home visits, illegal threats, police jurisdiction, and how to file RBI Ombudsman complaints.',
  keywords: [
    'RBI rules for recovery agents',
    'recovery agent harassment RBI guidelines',
    'can recovery agents call family members',
    'permitted calling hours for recovery agents',
    'can recovery agents visit home or workplace',
    'how to stop recovery agent harassment',
    'RBI guidelines for credit card recovery',
    'RBI recovery agent complaint online',
    'RBI Banking Ombudsman recovery complaint',
    'bank liability for recovery agent misconduct',
    'CredSettle debt harassment protection'
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/rbi-rules-for-recovery-agents',
  },
  openGraph: {
    title: 'RBI Rules for Recovery Agents in India (2026) — Complete Legal Rights Guide | CredSettle',
    description:
      'Know your legal rights under RBI Master Directives against recovery agent harassment. Understand permitted calling hours, restrictions on family contact, bank vicarious liability, and police remedies.',
    url: 'https://www.credsettle.com/rbi-rules-for-recovery-agents',
    type: 'article',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo.svg',
        width: 1200,
        height: 630,
        alt: 'RBI Rules for Recovery Agents - CredSettle Legal Guide'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RBI Rules for Recovery Agents in India — Legal Rights & Protections | CredSettle',
    description:
      'Learn how to halt debt collector harassment legally under RBI Master Directives, BNS penal provisions, and the RBI Integrated Ombudsman Scheme.',
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

export default function RBIRulesPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'RBI Rules for Recovery Agents in India: The Master Legal & Statutory Guide 2026',
    'description':
      'An exhaustive, authoritative legal handbook detailing the Reserve Bank of India directives, Supreme Court rulings, and statutory borrower protections against debt collection misconduct in India.',
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
    'datePublished': '2026-01-15T09:00:00+05:30',
    'dateModified': '2026-10-08T14:30:00+05:30',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/rbi-rules-for-recovery-agents'
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
        'name': 'RBI Rules for Recovery Agents',
        'item': 'https://www.credsettle.com/rbi-rules-for-recovery-agents'
      }
    ]
  };

  const recoveryFaqs = [
    {
      question: 'Are bank recovery agents legally allowed to call me before 8:00 AM or after 7:00 PM?',
      answer: 'No. The Reserve Bank of India Master Circular on Recovery Agents in Banks strictly mandates that all recovery-related calls must occur strictly between 08:00 AM and 07:00 PM (IST). Calling before 8 AM or after 7 PM is an express regulatory violation for which the bank can be penalized by the RBI Banking Ombudsman.'
    },
    {
      question: 'Can a recovery agent contact my parents, spouse, or siblings regarding my personal loan or credit card?',
      answer: 'Under RBI fair practice codes and credit confidentiality regulations, debt liability is strictly between the borrower and the lender. Recovery agents are legally forbidden from contacting non-guarantor family members, disclosing outstanding balances to them, or demanding that they clear your debts.'
    },
    {
      question: 'What documents must a recovery agent show when visiting my residence?',
      answer: 'An agent visiting your home must show an institutional photo identity card issued by the collection agency, a valid Letter of Authority executed on bank letterhead specifying your account, and proof of Debt Recovery Agent (DRA) certification issued by the Indian Institute of Banking & Finance (IIBF). If they fail to produce these, you may refuse interaction and report criminal trespass.'
    },
    {
      question: 'Can recovery agents get me arrested or send police to my home for an unpaid loan?',
      answer: 'No. Unsecured loan or credit card default due to genuine financial distress is purely a civil contractual matter under Indian law. Police officers have no jurisdiction or statutory authority to intervene in bank debt recovery, and recovery agents who impersonate police or threaten arrest commit a serious penal offense under Section 204 of the Bharatiya Nyaya Sanhita.'
    },
    {
      question: 'Can a bank recovery agent visit my office or workplace?',
      answer: 'Under RBI directives, agents are strictly discouraged from visiting a borrower\'s place of employment. It is permissible only if the borrower has refused all contact at their residential address or cannot be traced. Agents are strictly prohibited from causing public scenes, informing colleagues, or speaking to HR departments.'
    },
    {
      question: 'Can recovery agents take away my vehicle, furniture, or jewelry for an unsecured loan?',
      answer: 'No. Unsecured loans and credit cards do not carry any asset mortgage or pledge. Recovery agents have zero legal right to confiscate personal property. Forcible seizure of personal items without a formal judicial court decree amounts to criminal robbery and extortion under Section 308/383 BNS.'
    },
    {
      question: 'Is it legal for me to record calls with recovery agents in India?',
      answer: 'Yes, 100% legal. Recording a conversation in which you are a participant is fully permissible under Indian evidence law and admissible as electronic evidence under Bharatiya Sakshya Adhiniyam, 2023. These recordings provide decisive proof when lodging complaints with the Banking Ombudsman or local police.'
    },
    {
      question: 'What should I do if a recovery agent uses abusive or threatening language?',
      answer: 'Do not abuse them back. Maintain composure, record the call, note down the agent\'s phone number and the exact time, and file an immediate written complaint to the bank\'s Principal Nodal Officer citing Section 351/352 of Bharatiya Nyaya Sanhita (criminal intimidation). If the threat involves physical violence, dial 112 to register a police complaint.'
    },
    {
      question: 'Can banks be held responsible if an outsourced third-party agency misbehaves?',
      answer: 'Yes. The Reserve Bank of India holds lending institutions vicariously liable for all actions of their outsourced collection agents. The Supreme Court in ICICI Bank v. Shanti Devi Sharma established that banks cannot employ musclemen and are directly culpable for any harassment committed by their agents.'
    },
    {
      question: 'How long does a bank have to resolve a recovery agent harassment complaint?',
      answer: 'Under RBI customer service regulations, the bank has a statutory timeline of 30 days from the date of complaint receipt to conduct an internal inquiry and provide a formal written resolution. If they fail to reply or reject your complaint, you can immediately escalate to the RBI Integrated Ombudsman on cms.rbi.org.in.'
    },
    {
      question: 'How much compensation can the RBI Ombudsman award for recovery harassment?',
      answer: 'Under the Reserve Bank - Integrated Ombudsman Scheme, the Ombudsman has the statutory power to award up to ₹1,00,000 to the complainant for mental agony, loss of time, and harassment, in addition to ordering compensation of up to ₹20,00,000 for any direct financial loss caused by the lender\'s misconduct.'
    },
    {
      question: 'Can digital lending apps access my phone contact list or photo gallery to recover loans?',
      answer: 'Absolutely not. Under the RBI Digital Lending Guidelines of September 2022, lending apps are strictly prohibited from accessing mobile contact lists, media galleries, call logs, or device files. Harassing contacts or circulating morphed images constitutes cyber extortion punishable under Sections 66E and 67 of the Information Technology Act.'
    },
    {
      question: 'What is a Letter of Authority and why is it mandatory for field agents?',
      answer: 'A Letter of Authority is an official legal docket executed by an authorized bank officer assigning a specific delinquent account to an empaneled agency. It prevents unauthorized imposters, rogue recovery freelancers, or scam telecallers from extorting money from vulnerable citizens.'
    },
    {
      question: 'Can I instruct the bank to communicate only with my lawyer or legal representative?',
      answer: 'Yes. Under the Advocates Act of 1961, every citizen has the constitutional right to be represented by an advocate. When CredSettle\'s banking advocates issue a formal Legal Representation Notice, the bank and its collection agencies are legally required to route all communications through our legal desk.'
    },
    {
      question: 'What happens if a bank repeatedly violates RBI recovery guidelines?',
      answer: 'The Reserve Bank of India has the power under paragraph 2.6 of the Master Circular to impose a complete operational ban prohibiting the bank from engaging recovery agents in that geographical area for a specified period, alongside issuing multi-crore regulatory fines.'
    },
    {
      question: 'Can a recovery agent demand payment via their personal UPI ID or cash?',
      answer: 'Never pay money into a personal UPI ID, mobile wallet, or cash without a system-generated bank receipt. Legitimate debt repayments must be made directly into your registered loan account number or through the bank\'s official payment portal.'
    },
    {
      question: 'What is the role of the Indian Institute of Banking & Finance (IIBF) in recovery?',
      answer: 'The IIBF administers the mandatory Debt Recovery Agent (DRA) certificate examination following 100 hours of training in legal rules, borrower dignity, and ethical recovery practices. An agent who has not cleared the IIBF DRA exam cannot lawfully be deployed for field debt recovery.'
    },
    {
      question: 'How does CredSettle protect borrowers against recovery agent harassment?',
      answer: 'CredSettle\'s senior banking litigation advocates step in to safeguard your legal rights. We issue formal Representation Notices under the Advocates Act, establish direct communication with bank grievance nodal officers, file RBI Ombudsman and police complaints when necessary, and transition aggressive recovery disputes toward honorable, structured debt settlement.'
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': recoveryFaqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  const legalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    'name': 'CredSettle Borrower Rights & Debt Harassment Defense',
    'description':
      'Professional legal advocacy shielding borrowers from illegal recovery agent harassment, filing RBI Ombudsman representations, and negotiating fair banking debt settlements.',
    'url': 'https://www.credsettle.com/rbi-rules-for-recovery-agents',
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
      <RBIRulesClient />
    </>
  );
}
