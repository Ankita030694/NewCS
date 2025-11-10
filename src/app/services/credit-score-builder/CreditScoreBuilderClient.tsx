'use client';

import { useEffect, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowTrendUp,
  faCalendarCheck,
  faGaugeHigh,
  faLayerGroup,
  faClockRotateLeft,
  faMagnifyingGlassPlus,
  faFileLines,
  faBug,
  faScaleBalanced,
  faChartLine,
  faPercent,
  faChartColumn,
  faFileSignature,
  faShieldHalved,
  faBuilding,
  faArrowsRotate,
  faUserTie,
  faCube,
  faChartSimple,
  faHandshakeSimple,
  faClipboardCheck,
  faBell,
  faWallet,
  faFolderOpen,
  faBan,
  faSitemap,
  faCircleExclamation,
  faKey,
  faSeedling,
  faMagnifyingGlassChart,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TableOfContents from '@/components/TableOfContents';
import FAQWithSchema from '@/components/FAQWithSchema';
import Script from 'next/script';

export default function CreditScoreBuilderClient() {
  const [isFirefox, setIsFirefox] = useState(false);
  const [headings, setHeadings] = useState<Array<{ id: string; text: string; level: number }>>([]);

  useEffect(() => {
    // Detect Firefox browser
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));

    // Extract headings from the content
    const extractHeadings = () => {
      const headingElements = document.querySelectorAll('h2[id]');
      const extracted: Array<{ id: string; text: string; level: number }> = [];
      headingElements.forEach((el) => {
        const id = el.getAttribute('id');
        const text = el.textContent || '';
        if (id) {
          extracted.push({ id, text, level: 2 });
        }
      });
      setHeadings(extracted);
    };

    // Wait for content to be rendered
    setTimeout(extractHeadings, 100);
  }, []);

  const faqs = [
    {
      question: 'What is a CIBIL credit score and how is it calculated?',
      answer: 'CIBIL credit score is a three-digit number ranging from 300 to 900 that represents your creditworthiness in India. It is calculated by CIBIL (Credit Information Bureau India Limited) based on your credit history, payment behavior, credit utilization, credit mix, and length of credit history. A score above 750 is considered excellent, while scores below 600 may make it difficult to get loans approved. The CIBIL credit score builder focuses on improving all these factors to boost your score.'
    },
    {
      question: 'How can I improve my CIBIL credit score quickly?',
      answer: 'To improve your CIBIL credit score quickly, pay all bills on time, reduce credit card utilization below 30%, avoid multiple loan applications, maintain a good credit mix, and check your credit report regularly for errors. A credit score builder service can help identify specific issues in your credit report and provide a personalized strategy to improve your score. Typically, following these practices consistently can improve your score within 6-12 months.'
    },
    {
      question: 'What is a credit score builder and how does it work?',
      answer: 'A credit score builder is a service that helps you improve your credit score through strategic financial planning, credit report analysis, and personalized improvement strategies. It works by analyzing your credit report, identifying negative factors affecting your score, creating a customized action plan, and providing ongoing guidance to help you build credit responsibly. CredSettle\'s credit score builder service includes credit report analysis, dispute resolution, and credit improvement strategies.'
    },
    {
      question: 'How long does it take to build a good credit score from scratch?',
      answer: 'Building a good credit score from scratch typically takes 6-12 months of consistent responsible credit behavior. This includes making timely payments, maintaining low credit utilization, and establishing a positive credit history. With a credit score builder service, you can potentially see improvements faster by addressing specific issues and following proven strategies. The key is consistency and patience in building credit.'
    },
    {
      question: 'Can I check my CIBIL score for free?',
      answer: 'Yes, you can check your CIBIL credit score for free once a year from the CIBIL website. Additionally, many banks and financial institutions offer free credit score checks to their customers. Regular monitoring of your credit score is important for credit score building, as it helps you track your progress and identify any issues that need to be addressed.'
    },
    {
      question: 'What factors affect my CIBIL credit score negatively?',
      answer: 'Factors that negatively affect your CIBIL credit score include late payments or defaults, high credit utilization (above 30%), multiple loan applications in a short period, having too many credit accounts, outstanding debt, and errors in your credit report. A credit score builder service can help identify and address these factors to improve your score.'
    },
    {
      question: 'How does credit card usage affect my credit score?',
      answer: 'Credit card usage significantly affects your credit score. Maintaining credit utilization below 30% of your credit limit helps build a good credit score. High utilization, missing payments, or maxing out credit cards can negatively impact your score. Using credit cards responsibly and paying bills on time is essential for credit score building. A credit score builder can help you optimize your credit card usage strategy.'
    },
    {
      question: 'Can I improve my credit score after loan settlement?',
      answer: 'Yes, you can improve your credit score after loan settlement. While settlement initially impacts your credit score, you can rebuild it through credit score building strategies such as making timely payments on other accounts, maintaining low credit utilization, diversifying your credit mix, and monitoring your credit report regularly. A credit score builder service can provide a personalized plan to help you recover and improve your credit score post-settlement.'
    }
  ];

  const bodyTextStyle: CSSProperties = {
    color: 'rgba(12, 39, 86, 0.80)',
    fontFamily: 'Poppins',
    lineHeight: '26px'
  };

  const cardTextStyle: CSSProperties = {
    color: 'rgba(12, 39, 86, 0.75)',
    fontFamily: 'Poppins',
    lineHeight: '24px'
  };

  type GuideSection = {
    id: string;
    title: string;
    paragraphs?: ReactNode[];
    bullets?: string[];
    bulletTitle?: string;
    cards?: Array<{ icon: IconDefinition; title: string; description: ReactNode }>;
    lists?: Array<{ title: string; icon: IconDefinition; items: string[] }>;
    callouts?: Array<{ title: string; description: ReactNode; icon: IconDefinition }>;
    steps?: Array<{ label: string; title: string; description: ReactNode }>;
  };

  const introductionParagraphs: ReactNode[] = [
    <>
      Your <strong>CIBIL credit score</strong> is one of the most important financial metrics in India, determining your ability to secure loans, credit cards, and other financial products. Whether you are building credit from scratch, repairing past mistakes, or aiming for elite <strong>creditworthiness</strong>, understanding <strong>credit score building</strong> is essential. This guide explains everything about the <strong>CIBIL credit score builder</strong>, <strong>credit score improvement</strong>, and evidence-backed strategies to strengthen your profile.
    </>,
    <>
      A strong <strong>credit score</strong> unlocks better interest rates, higher credit limits, and greater financial flexibility. With CIBIL scores ranging from <strong>300</strong> to <strong>900</strong>, crossing the <strong>750</strong> threshold signals excellent credit health. The CredSettle approach combines <strong>credit report analysis</strong>, targeted dispute resolution, and disciplined <strong>credit score building</strong> routines to help you reach and sustain that range.
    </>
  ];

  const highlightPoints = [
    'Personalized score recovery blueprints aligned with your financial goals.',
    'RBI-compliant dispute management handled by CredSettle’s legal experts.',
    'Monthly score tracking with proactive adjustments to maintain momentum.'
  ];

  const keyFactorsCards = [
    {
      icon: faCalendarCheck,
      title: 'Payment History • 35%',
      description: (
        <>
          On-time EMI and credit card payments form the backbone of your <strong>CIBIL score</strong>. Missed or delayed payments trigger score drops and stay on record for years, making disciplined repayment the fastest route to improvement.
        </>
      )
    },
    {
      icon: faGaugeHigh,
      title: 'Credit Utilization • 30%',
      description: (
        <>
          Using less than <strong>30%</strong> of total credit limits signals financial stability. Allow balances to hover near limits and lenders assume stress. We coach you to maintain sub-10% utilization for optimal score traction.
        </>
      )
    },
    {
      icon: faLayerGroup,
      title: 'Credit Mix • 15%',
      description: (
        <>
          A healthy blend of revolving credit (cards) and installment loans demonstrates portfolio maturity. We help diversify responsibly so you showcase competence without over-leveraging.
        </>
      )
    },
    {
      icon: faClockRotateLeft,
      title: 'Credit History Length • 15%',
      description: (
        <>
          Older accounts boost average age and prove long-term reliability. Keep legacy credit lines active even with minimal usage to preserve this high-impact metric.
        </>
      )
    },
    {
      icon: faMagnifyingGlassPlus,
      title: 'New Credit Inquiries • 5%',
      description: (
        <>
          Too many hard pulls in quick succession raise red flags. Strategic spacing of applications protects your <strong>CIBIL score</strong> while still giving room to access new credit when truly needed.
        </>
      )
    }
  ];

  const processSteps = [
    {
      label: 'Step 1',
      title: 'Deep-Dive Credit Report Analysis',
      description: (
        <>
          Retrieve the latest CIBIL report, audit every account, and pinpoint derogatory marks, utilization spikes, and score-impacting anomalies. Our experts convert this data into a prioritized action list.
        </>
      )
    },
    {
      label: 'Step 2',
      title: 'Set Measurable Score Targets',
      description: (
        <>
          Define a score goal and time horizon—often a <strong>50–100 point</strong> gain across <strong>6–12 months</strong>. Align strategy with upcoming financial milestones like home loans or balance transfers.
        </>
      )
    },
    {
      label: 'Step 3',
      title: 'Create a Personalized Playbook',
      description: (
        <>
          Outline tactics covering timely repayment routines, utilization restructuring, dispute filings, and credit mix enhancements. Each task is sequenced for maximum score velocity.
        </>
      )
    },
    {
      label: 'Step 4',
      title: 'Execute Credit-Building Actions',
      description: (
        <>
          Automate payments, deploy balance reduction plans, initiate disputes, and deploy responsible new credit where needed. Consistency converts tactics into lasting score gains.
        </>
      )
    },
    {
      label: 'Step 5',
      title: 'Monitor, Measure, and Refine',
      description: (
        <>
          Track score changes monthly, recheck reports quarterly, and adjust actions based on results. Rapid feedback loops ensure momentum and protect against regression.
        </>
      )
    }
  ];

  const reportCards = [
    {
      icon: faFileLines,
      title: 'Know Every Line Item',
      description: (
        <>
          Decode your <strong>CIBIL report</strong>—from account statuses to days past due—so nothing surprises you. Understanding the data is the first safeguard against score erosion.
        </>
      )
    },
    {
      icon: faBug,
      title: 'Spot Reporting Errors',
      description: (
        <>
          Duplicate accounts, incorrect late payment tags, or accounts that are not yours silently depress scores. Regular audits surface these mistakes before they snowball.
        </>
      )
    },
    {
      icon: faScaleBalanced,
      title: 'Dispute with Legal Precision',
      description: (
        <>
          CredSettle drafts RBI-compliant disputes complete with documentation, ensuring bureaus resolve inaccuracies swiftly and permanently.
        </>
      )
    },
    {
      icon: faMagnifyingGlassChart,
      title: 'Monitor Progress Quarterly',
      description: (
        <>
          Schedule report reviews every 90 days to validate corrections, track momentum, and lock in new positive trade lines.
        </>
      )
    }
  ];

  const benefitsCards = [
    {
      icon: faPercent,
      title: 'Preferential Interest Rates',
      description: (
        <>
          Boosting a home loan offer by just <strong>1%</strong> can save ₹50,000–₹1,00,000 over the tenure. High scores unlock these elite lending slabs.
        </>
      )
    },
    {
      icon: faChartColumn,
      title: 'Higher Credit Limits',
      description: (
        <>
          Enjoy expanded credit lines that enhance your utilization ratio while providing greater purchasing flexibility.
        </>
      )
    },
    {
      icon: faFileSignature,
      title: 'Seamless Loan Approvals',
      description: (
        <>
          Strong scores fast-track approvals for personal, auto, and business loans—often with reduced documentation and quicker disbursement.
        </>
      )
    },
    {
      icon: faShieldHalved,
      title: 'Lower Insurance Premiums',
      description: (
        <>
          Insurers increasingly factor credit health into premium calculations. Better scores can convert into tangible yearly savings.
        </>
      )
    },
    {
      icon: faBuilding,
      title: 'Stronger Rental Negotiation Power',
      description: (
        <>
          Landlords and co-living platforms favor applicants with a clean credit track record. Use your score as leverage for better housing options.
        </>
      )
    },
    {
      icon: faArrowsRotate,
      title: 'Emergency Financial Flexibility',
      description: (
        <>
          Secure credit quickly during critical moments—medical emergencies, business opportunities, or travel—without punitive rates.
        </>
      )
    }
  ];

  const selectionCards = [
    {
      icon: faUserTie,
      title: 'Specialized Expertise',
      description: (
        <>
          Choose advisors fluent in <strong>CIBIL methodologies</strong>, RBI regulations, and Indian lender expectations—not generic credit coaches.
        </>
      )
    },
    {
      icon: faCube,
      title: 'Comprehensive Service Suite',
      description: (
        <>
          Ensure support covers analysis, dispute drafting, utilization planning, settlement recovery, and long-term monitoring in one place.
        </>
      )
    },
    {
      icon: faChartSimple,
      title: 'Proven Success Metrics',
      description: (
        <>
          Look for transparent case studies and clear timelines showing actual score lift achieved for Indian borrowers just like you.
        </>
      )
    },
    {
      icon: faHandshakeSimple,
      title: 'Transparent Engagements',
      description: (
        <>
          Avoid aggressive up-front fees or unrealistic promises. CredSettle documents every deliverable, timeline, and escalation path.
        </>
      )
    },
    {
      icon: faClipboardCheck,
      title: 'Customized Playbooks',
      description: (
        <>
          No two credit profiles are identical. Demand individualized action plans that target your specific score suppressors.
        </>
      )
    }
  ];

  const strategyCards = [
    {
      icon: faBell,
      title: 'Automate Every Payment',
      description: (
        <>
          Set up auto-pay or reminders across loans, credit cards, and utilities. One missed EMI can undo months of diligent work.
        </>
      )
    },
    {
      icon: faWallet,
      title: 'Slash Utilization Ratios',
      description: (
        <>
          Aggressively pay down revolving balances mid-cycle and request limit enhancements to keep utilization under <strong>30%</strong>, preferably <strong>10%</strong>.
        </>
      )
    },
    {
      icon: faFolderOpen,
      title: 'Preserve Legacy Accounts',
      description: (
        <>
          Keep long-standing accounts open with minimal activity to preserve average age and showcase credit longevity.
        </>
      )
    },
    {
      icon: faBan,
      title: 'Throttle New Credit Requests',
      description: (
        <>
          Clustered applications create score dips. Space hard inquiries by several months unless a major financing goal is imminent.
        </>
      )
    },
    {
      icon: faSitemap,
      title: 'Balance Your Credit Mix',
      description: (
        <>
          Blend secured and unsecured credit responsibly. Consider secured cards or small-ticket loans to demonstrate diversity without overextending.
        </>
      )
    },
    {
      icon: faCircleExclamation,
      title: 'Dispute Errors Immediately',
      description: (
        <>
          Audit reports quarterly and escalate inaccuracies without delay. Early disputes prevent compounding damage to your score.
        </>
      )
    }
  ];

  const challengeCards = [
    {
      icon: faArrowTrendUp,
      title: 'Starting from a Low Score',
      description: (
        <>
          Focus on perfect payment discipline and utilization control. Documented progress within 90 days builds momentum and confidence.
        </>
      )
    },
    {
      icon: faBug,
      title: 'Correcting Legacy Errors',
      description: (
        <>
          Historic inaccuracies can be stubborn. CredSettle pursues regulator escalation when bureaus or lenders delay rightful corrections.
        </>
      )
    },
    {
      icon: faGaugeHigh,
      title: 'Managing High Utilization',
      description: (
        <>
          Deploy balance transfer loans, structured repayment plans, or debt consolidation to reset utilization ratios sustainably.
        </>
      )
    },
    {
      icon: faSeedling,
      title: 'Limited Credit History',
      description: (
        <>
          Build depth with secured credit cards, small-ticket personal loans, or co-signed facilities that report every month.
        </>
      )
    },
    {
      icon: faKey,
      title: 'Recovering from Past Defaults',
      description: (
        <>
          Closed settlements do not mean game over. Layer fresh positive trade lines, maintain spotless behavior, and document hardship narratives.
        </>
      )
    }
  ];

  const buildScratchSteps = [
    {
      label: 'Step 1',
      title: 'Open a Secured Credit Line',
      description: (
        <>
          Use a secured card or credit-builder loan to create the very first positive repayment cycle without risking overspending.
        </>
      )
    },
    {
      label: 'Step 2',
      title: 'Leverage Trusted Connections',
      description: (
        <>
          Become an authorized user on a family member’s well-managed card. Their positive history begins reflecting on your profile.
        </>
      )
    },
    {
      label: 'Step 3',
      title: 'Borrow Small, Repay Perfectly',
      description: (
        <>
          Take manageable installment loans, repay ahead of schedule, and establish a proven track record within the first 6–12 months.
        </>
      )
    },
    {
      label: 'Step 4',
      title: 'Track Every Payment',
      description: (
        <>
          Log payments digitally and set auto-reminders. Several bureaus now include utility and telecom histories that reward punctuality.
        </>
      )
    },
    {
      label: 'Step 5',
      title: 'Let Time Compound Your Efforts',
      description: (
        <>
          Credit building is a marathon. Stay patient, stay consistent, and watch your score climb steadily as positive history accumulates.
        </>
      )
    }
  ];

  const successCards = [
    {
      icon: faChartLine,
      title: '580 ➜ 750 in 18 Months',
      description: (
        <>
          Strategic disputes, utilization drops from <strong>85%</strong> to <strong>25%</strong>, and automated payments helped our client secure a home loan at premium rates.
        </>
      )
    },
    {
      icon: faScaleBalanced,
      title: 'Defaults to Approval',
      description: (
        <>
          After multiple charge-offs, structured repayments and fresh tradelines lifted a score from <strong>520</strong> to <strong>680</strong>, unlocking personal loan eligibility.
        </>
      )
    },
    {
      icon: faStar,
      title: 'From No History to 720',
      description: (
        <>
          A young professional used secured cards, low utilization, and guided credit diversification to hit a <strong>720</strong> CIBIL score within a year.
        </>
      )
    }
  ];

  const bestPracticeBullets = [
    'Review your CIBIL report monthly or at least every quarter to validate progress and catch issues early.',
    'Automate EMI and credit card payments so one oversight never reverses months of disciplined work.',
    'Track utilization across every card—keep totals below 30%, with 10% as the stretch goal for rapid gains.',
    'Apply for credit only when necessary; cluster-free inquiries protect your score during rebuilding phases.',
    'Partner with trusted professionals when you need tailored strategies, accountability, or dispute support.',
    'Stay patient and consistent—credit score building is cumulative, not instantaneous.'
  ];

  const scamCards = [
    {
      icon: faCircleExclamation,
      title: 'Spot Unrealistic Promises',
      description: (
        <>
          Walk away from anyone guaranteeing overnight improvements, fixed score jumps, or new identities. Credibility is rooted in transparency.
        </>
      )
    },
    {
      icon: faMagnifyingGlassChart,
      title: 'Verify Credentials Thoroughly',
      description: (
        <>
          Check registrations, licenses, reviews, and complaint histories. Trust providers who welcome scrutiny and provide references.
        </>
      )
    },
    {
      icon: faWallet,
      title: 'Understand Every Fee',
      description: (
        <>
          Legitimate services detail pricing structures up front. Avoid opaque contracts, hefty advance payments, or shifting fee schedules.
        </>
      )
    },
    {
      icon: faFileSignature,
      title: 'Insist on Written Agreements',
      description: (
        <>
          Document scope, timelines, and deliverables. Signed agreements protect you if expectations are not met.
        </>
      )
    },
    {
      icon: faStar,
      title: 'Choose Reputed Specialists',
      description: (
        <>
          CredSettle’s RBI-compliant framework and documented success stories offer peace of mind while you rebuild credit responsibly.
        </>
      )
    }
  ];

  const conclusionParagraphs: ReactNode[] = [
    <>
      Strengthening your <strong>CIBIL credit score</strong> is a journey grounded in knowledge, structure, and discipline. Whether you are recovering from financial setbacks, preparing for a major loan, or starting from zero, a guided <strong>credit score building</strong> strategy positions you for lasting success.
    </>,
    <>
      CredSettle’s <strong>credit score builder</strong> methodology combines forensic credit report analysis, proven dispute protocols, utilization engineering, and long-term coaching to deliver sustainable score growth.
    </>,
    <>
      Stay the course—consistent payments, careful credit usage, and vigilant monitoring transform your profile over time. The rewards include better rates, stronger negotiating power, and true financial flexibility.
    </>,
    <>
      Ready to accelerate your <strong>credit score improvement</strong>? Schedule a free consultation with CredSettle. Our legal-financial experts will craft a personalized blueprint that protects your rights and maximizes your score potential.
    </>
  ];

  const guideSections: GuideSection[] = [
    {
      id: 'understanding-cibil-credit-score',
      title: 'Understanding CIBIL Credit Score: A Comprehensive Overview',
      paragraphs: [
        <>
          Your <strong>CIBIL credit score</strong> condenses your repayment behavior, credit mix, and borrowing history into a three-digit verdict ranging from <strong>300</strong> to <strong>900</strong>. Lenders reference it to decide approvals, rates, and limits almost instantly.
        </>,
        <>
          Sustained <strong>credit score building</strong> focuses on disciplined repayment, optimized utilization, and proactive monitoring. Think long-term: unlike a one-time settlement, a strong score requires ongoing, responsible credit behavior.
        </>,
        <>
          CredSettle maps each component influencing your score, translating numbers into a prioritized action plan that fits your financial timeline.
        </>
      ]
    },
    {
      id: 'factors-affecting-credit-score',
      title: 'Factors Affecting Your CIBIL Credit Score',
      paragraphs: [
        <>
          Mastering the five primary rating factors is the fastest path to <strong>credit score improvement</strong>. Each lever can be optimized with targeted habits and guidance.
        </>
      ],
      cards: keyFactorsCards
    },
    {
      id: 'credit-score-building-process',
      title: 'The Credit Score Building Process: Step-by-Step Guide',
      paragraphs: [
        <>
          Successful <strong>credit score building</strong> is systematic. Follow this sequencing to engineer consistent gains and guard against backsliding.
        </>
      ],
      steps: processSteps
    },
    {
      id: 'credit-report-analysis',
      title: 'Credit Report Analysis and Dispute Resolution',
      paragraphs: [
        <>
          Proactive <strong>credit report analysis</strong> prevents quiet errors from derailing your progress. Document everything, escalate strategically, and keep bureaus accountable.
        </>
      ],
      cards: reportCards
    },
    {
      id: 'benefits-of-credit-score-building',
      title: 'Benefits of Credit Score Building: Why It Matters',
      paragraphs: [
        <>
          A formidable <strong>CIBIL score</strong> is more than a number—it is negotiating power, cost savings, and financial freedom rolled into one.
        </>
      ],
      cards: benefitsCards
    },
    {
      id: 'choosing-credit-score-builder',
      title: 'Choosing the Right Credit Score Builder Service',
      paragraphs: [
        <>
          Selecting the right partner determines how smoothly—and legally—your score rebounds. Use these benchmarks before trusting any advisor with your data.
        </>
      ],
      cards: selectionCards
    },
    {
      id: 'credit-score-improvement-strategies',
      title: 'Proven Credit Score Improvement Strategies',
      paragraphs: [
        <>
          Turn these foundational habits into non-negotiables. Together they create compounding score momentum month after month.
        </>
      ],
      cards: strategyCards
    },
    {
      id: 'challenges-solutions',
      title: 'Common Challenges in Credit Score Building and Solutions',
      paragraphs: [
        <>
          Every credit journey carries obstacles. Anticipate the big five roadblocks and deploy targeted remedies before they slow you down.
        </>
      ],
      cards: challengeCards
    },
    {
      id: 'building-credit-from-scratch',
      title: 'Building Credit from Scratch: A Beginner’s Blueprint',
      paragraphs: [
        <>
          New to credit? Follow this structured roadmap to create a spotless foundation the bureaus will reward with steady score gains.
        </>
      ],
      steps: buildScratchSteps
    },
    {
      id: 'success-stories',
      title: 'Credit Score Improvement Success Stories',
      paragraphs: [
        <>
          Real clients, real transformations. These milestones showcase what disciplined execution plus expert guidance makes possible.
        </>
      ],
      cards: successCards
    },
    {
      id: 'tips-best-practices',
      title: 'Credit Score Building Tips and Best Practices',
      paragraphs: [
        <>
          Keep these high-impact reminders front and centre as you sustain your score climb over the months ahead.
        </>
      ],
      bullets: bestPracticeBullets,
      bulletTitle: 'Staying Consistent Pays Off'
    },
    {
      id: 'avoiding-scams',
      title: 'Avoiding Credit Score Building Scams',
      paragraphs: [
        <>
          The credit repair space attracts bad actors. Use this checklist to safeguard your identity, money, and time.
        </>
      ],
      cards: scamCards
    },
    {
      id: 'conclusion',
      title: 'Conclusion: Your Path to Better Credit Starts Today',
      paragraphs: conclusionParagraphs
    }
  ];

  return (
    <>
      <div className="relative min-h-screen bg-white mt-6">
        {/* Background Circle Effect - Chrome/Safari */}
        {!isFirefox && (
          <div
            className="absolute top-0 left-0"
            style={{
              width: '757px',
              height: '757px',
              borderRadius: '757px',
              background: '#007AFF',
              filter: 'blur(400px)',
              WebkitFilter: 'blur(400px)',
              transform: 'translate(-50%, -50%)',
              zIndex: 0,
              opacity: 0.6,
              willChange: 'filter',
              backfaceVisibility: 'hidden'
            }}
          />
        )}

        {/* Firefox-specific blur effect */}
        {isFirefox && (
          <div
            className="absolute top-0 left-0"
            style={{
              width: '757px',
              height: '757px',
              borderRadius: '757px',
              background: 'radial-gradient(circle, rgba(0, 122, 255, 0.4) 0%, rgba(0, 122, 255, 0.2) 30%, rgba(0, 122, 255, 0.1) 60%, transparent 100%)',
              transform: 'translate(-50%, -50%)',
              zIndex: 0,
              opacity: 0.9
            }}
          />
        )}

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="relative z-10" style={{ paddingTop: '100px', paddingLeft: '16.2px', paddingRight: '16.2px' }}>
          <div className="w-full max-w-7xl mx-auto px-4">
            {/* Hero Section: Heading Left, Image Right */}
            <section className="w-full py-6 mb-8">
              <div className="flex items-center justify-between gap-8">
                {/* Left: Heading */}
                <div className="flex-1" style={{ maxWidth: '640px' }}>
                  <h1
                    style={{
                      color: '#0C2756',
                      fontFamily: 'Poppins',
                      fontSize: '45px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: '65px',
                      marginBottom: '20px'
                    }}
                  >
                    Complete Guide to CIBIL Credit Score Builder: Improve Your Credit Score in India
                  </h1>
                  <p
                    style={{
                      color: 'rgba(12, 39, 86, 0.70)',
                      fontFamily: 'Poppins',
                      fontSize: '18px',
                      lineHeight: '28px'
                    }}
                  >
                    Expert insights on credit score improvement, CIBIL score building, credit report analysis, and proven strategies to boost your creditworthiness in India.
                  </p>
                </div>

                {/* Right: Credit Score Image */}
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src="/credit_card_hero.png"
                    alt="Credit Score Builder"
                    style={{
                      width: '100%',
                      maxWidth: '500px',
                      height: 'auto'
                    }}
                  />
                </div>
              </div>
            </section>

            {/* Table of Contents */}
            {headings.length > 0 && (
              <div className="mb-8">
                <TableOfContents headings={headings} />
              </div>
            )}

            {/* Main Content Section */}
            <section className="w-full py-6">
              <div className="w-full max-w-7xl mx-auto px-4">
                <div
                  className="bg-gradient-to-br from-blue-50/40 via-white to-blue-100/20 rounded-3xl p-6 md:p-8 lg:p-12"
                  style={{
                    boxShadow: '0 12px 48px rgba(0, 122, 255, 0.08)',
                    border: '1px solid rgba(0, 122, 255, 0.12)'
                  }}
                >
                  <div className="space-y-6 md:space-y-8">
                    <div>
                      <h2
                        className="text-2xl md:text-3xl lg:text-[32px] font-semibold leading-tight"
                        style={{ color: '#0C2756', fontFamily: 'Poppins', lineHeight: '42px' }}
                      >
                        Master Your CIBIL Credit Score with CredSettle
                      </h2>
                      <div className="mt-4 space-y-4">
                        {introductionParagraphs.map((paragraph, index) => (
                          <p key={index} className="text-sm md:text-base" style={bodyTextStyle}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                  </div>

                    <div className="rounded-2xl border border-blue-100/70 bg-white/80 p-6 md:p-7 shadow-[0px_10px_30px_rgba(0,122,255,0.08)]">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-600">
                          <FontAwesomeIcon icon={faArrowTrendUp} className="h-5 w-5" />
                        </span>
                        <div className="flex-1">
                          <h3
                            className="text-lg md:text-xl font-semibold"
                            style={{ color: '#0C2756', fontFamily: 'Poppins', lineHeight: '28px' }}
                          >
                            CredSettle Credit Score Builder Advantage
                          </h3>
                          <p className="mt-2 text-sm md:text-base" style={cardTextStyle}>
                            We combine legal muscle, data-driven analytics, and disciplined coaching to deliver compounding credit score gains that hold up with every bureau and lender in India.
                          </p>
                          <ul className="mt-4 space-y-2">
                            {highlightPoints.map((point) => (
                              <li key={point} className="flex items-start gap-3">
                                <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-blue-500/80" />
                                <span className="text-sm md:text-base" style={cardTextStyle}>
                                  {point}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 md:mt-12 space-y-12 md:space-y-14">
                    {guideSections.map((section, index) => (
                      <article
                        key={section.id}
                        className="rounded-3xl border border-blue-100/60 bg-white/75 p-6 md:p-7 lg:p-8 shadow-[0px_12px_35px_rgba(0,122,255,0.05)] backdrop-blur-sm"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-base font-semibold text-blue-600">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <div className="flex-1">
                            <h2
                              id={section.id}
                              className="text-xl md:text-2xl font-semibold leading-tight"
                              style={{ color: '#0C2756', fontFamily: 'Poppins', lineHeight: '32px' }}
                            >
                              {section.title}
                  </h2>

                            {section.paragraphs && (
                              <div className="mt-4 space-y-4">
                                {section.paragraphs.map((paragraph, paragraphIndex) => (
                                  <p key={paragraphIndex} className="text-sm md:text-base" style={bodyTextStyle}>
                                    {paragraph}
                                  </p>
                                ))}
                              </div>
                            )}

                            {section.bullets && (
                              <div className="mt-6 rounded-2xl border border-blue-100/70 bg-blue-50/40 p-5 md:p-6">
                                <h3
                                  className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-4"
                                  style={{ fontFamily: 'Poppins', letterSpacing: '0.08em' }}
                                >
                                  {section.bulletTitle ?? 'Key Takeaways'}
                                </h3>
                                <ul className="space-y-3">
                                  {section.bullets.map((bullet) => (
                                    <li key={bullet} className="flex items-start gap-3">
                                      <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/15 text-blue-600">
                                        <FontAwesomeIcon icon={faCircleExclamation} className="h-4 w-4" />
                                      </span>
                                      <span className="flex-1 text-sm md:text-base" style={bodyTextStyle}>
                                        {bullet}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {section.cards && (
                              <div className="mt-6 grid gap-4 md:grid-cols-2 md:gap-6">
                                {section.cards.map((card) => (
                                  <div
                                    key={card.title}
                                    className="h-full rounded-2xl border border-blue-100/70 bg-white p-5 md:p-6 shadow-[0px_8px_25px_rgba(0,122,255,0.05)] transition-shadow duration-200 hover:shadow-[0px_12px_30px_rgba(0,122,255,0.12)]"
                                  >
                                    <div className="flex items-start gap-4">
                                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/12 text-blue-600">
                                        <FontAwesomeIcon icon={card.icon} className="h-5 w-5" />
                                      </span>
                                      <div>
                                        <h3
                                          className="text-base md:text-lg font-semibold"
                                          style={{ color: '#0C2756', fontFamily: 'Poppins', lineHeight: '26px' }}
                                        >
                                          {card.title}
                                        </h3>
                                        <p className="mt-2 text-sm md:text-base" style={cardTextStyle}>
                                          {card.description}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {section.lists && (
                              <div className="mt-6 grid gap-4 md:grid-cols-2">
                                {section.lists.map((list) => (
                                  <div
                                    key={list.title}
                                    className="rounded-2xl border border-blue-100/70 bg-white p-5 md:p-6 shadow-[0px_8px_25px_rgba(0,122,255,0.05)]"
                                  >
                                    <div className="mb-4 flex items-start gap-3">
                                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/12 text-blue-600">
                                        <FontAwesomeIcon icon={list.icon} className="h-5 w-5" />
                                      </span>
                                      <h3
                                        className="text-base font-semibold"
                                        style={{ color: '#0C2756', fontFamily: 'Poppins', lineHeight: '24px' }}
                                      >
                                        {list.title}
                                      </h3>
                                    </div>
                                    <ul className="space-y-3">
                                      {list.items.map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                          <span className="mt-[7px] h-2 w-2 rounded-full bg-blue-500/80" />
                                          <span className="flex-1 text-sm md:text-base" style={cardTextStyle}>
                                            {item}
                                          </span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            )}

                            {section.callouts && (
                              <div className="mt-6 grid gap-4 md:grid-cols-2">
                                {section.callouts.map((callout) => (
                                  <div
                                    key={callout.title}
                                    className="rounded-2xl border border-blue-100/80 bg-gradient-to-br from-blue-500/10 via-white to-blue-100/10 p-5 md:p-6"
                                  >
                                    <div className="flex items-start gap-3">
                                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                                        <FontAwesomeIcon icon={callout.icon} className="h-5 w-5" />
                                      </span>
                                      <div>
                                        <h3
                                          className="text-base font-semibold"
                                          style={{ color: '#0C2756', fontFamily: 'Poppins', lineHeight: '24px' }}
                                        >
                                          {callout.title}
                                        </h3>
                                        <p className="mt-2 text-sm md:text-base" style={cardTextStyle}>
                                          {callout.description}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {section.steps && (
                              <div className="mt-6 space-y-4">
                                {section.steps.map((step) => (
                                  <div
                                    key={step.title}
                                    className="flex flex-col gap-3 rounded-2xl border border-blue-100/70 bg-white p-5 md:p-6 shadow-[0px_8px_25px_rgba(0,122,255,0.05)] md:flex-row md:items-start"
                                  >
                                    <div className="flex h-10 w-24 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold uppercase text-white">
                                      {step.label}
                                    </div>
                                    <div className="flex-1">
                                      <h3
                                        className="text-base md:text-lg font-semibold"
                                        style={{ color: '#0C2756', fontFamily: 'Poppins', lineHeight: '26px' }}
                                      >
                                        {step.title}
                                      </h3>
                                      <p className="mt-2 text-sm md:text-base" style={cardTextStyle}>
                                        {step.description}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="w-full py-12">
              <div className="w-full max-w-7xl mx-auto px-4">
                <div className="flex flex-col items-center gap-8 md:gap-14">
                    <FAQWithSchema
                      faqs={faqs}
                      title="Credit Score Builder FAQs —"
                    />
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-12">
              <div className="w-full max-w-7xl mx-auto px-4">
                <div className="flex flex-col items-center gap-8 md:gap-14">
                  <div
                    className="flex justify-center items-center w-full rounded-xl px-3 py-8 md:py-[63px]"
                    style={{
                      background: 'linear-gradient(180deg, rgba(191, 238, 255, 0.50) 27.61%, #007AFF 100%)',
                      boxShadow: '0 5px 16px 0 rgba(0, 0, 0, 0.15)'
                    }}
                  >
                    <div className="flex flex-col items-center gap-[35px] w-full max-w-[644px]">
                      {/* Text Content */}
                      <div className="flex flex-col items-center gap-[28px] w-full">
                        <h2
                          className="text-center text-[21px] md:text-[28px] leading-[21px] md:leading-[28px] font-normal w-full"
                          style={{ color: '#0C2756' }}
                        >
                          Ready to Improve Your CIBIL Credit Score?
                        </h2>
                        <p
                          className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                          style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                        >
                          Get professional credit score building assistance from CredSettle's expert team. Improve your CIBIL credit score through proven strategies and personalized guidance—start your path to better credit today.
                        </p>
                      </div>

                      {/* CTA Button */}
                      <button
                        className="px-[28px] py-[14px] rounded-xl bg-white transition-opacity duration-200 hover:opacity-90 cursor-pointer"
                        style={{
                          boxShadow: '0 -3px 7px 0 rgba(9, 9, 9, 0.30) inset, 0 3px 7px 0 rgba(9, 9, 9, 0.30) inset'
                        }}
                        onClick={() => window.location.href = '/contact'}
                      >
                        <span className="text-[13px] md:text-[14px] leading-[13px] md:leading-[14px] font-normal" style={{ color: '#0C2756' }}>
                          Get Your Free Consultation
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div style={{ marginTop: '100px' }}>
          <Footer />
        </div>
      </div>
    </>
  );
}

