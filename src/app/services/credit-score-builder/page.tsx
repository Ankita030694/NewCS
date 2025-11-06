import { Metadata } from 'next';
import CreditScoreBuilderClient from './CreditScoreBuilderClient';

export const metadata: Metadata = {
  title: 'Complete Guide to CIBIL Credit Score Builder: Improve Your Credit Score | CredSettle',
  description: 'Comprehensive guide to CIBIL credit score building in India. Learn about credit score improvement, credit report analysis, credit score builder services, and proven strategies to boost your creditworthiness. Expert insights on CIBIL credit score calculation and credit score building.',
  keywords: 'CIBIL credit score, credit score builder, CIBIL credit score builder, credit score improvement, credit score building, credit report analysis, credit score, CIBIL score, credit score builder service, credit score improvement strategies, credit score building tips, credit score calculator, credit score check, credit score meaning, credit score range, credit score factors, credit score calculation, credit score increase, credit score repair, credit score monitoring, credit score India, credit score improvement India, credit score builder India, CIBIL credit report, credit report analysis, credit report dispute, credit report errors, credit report check, credit utilization, credit utilization ratio, credit history, credit mix, payment history, credit score factors India, credit score improvement tips, credit score building guide, credit score building strategies, credit score improvement services, credit score builder program, credit score improvement plan, credit score building advice, credit score improvement methods, credit score building techniques, credit score improvement tools, credit score builder app, credit score improvement app, credit score monitoring service, credit score tracking, credit score analytics, credit score insights, credit score trends, credit score goals, credit score targets, credit score benchmarks, credit score ranges India, credit score good, credit score excellent, credit score fair, credit score poor, credit score bad, credit score very poor, credit score improvement time, credit score building time, credit score improvement duration, credit score building process, credit score improvement process, credit score building steps, credit score improvement steps, credit score building methods, credit score improvement methods, credit score building tips, credit score improvement tips, credit score building strategies, credit score improvement strategies, credit score building best practices, credit score improvement best practices, credit score building mistakes, credit score improvement mistakes, credit score building challenges, credit score improvement challenges, credit score building solutions, credit score improvement solutions',
  openGraph: {
    title: 'Complete Guide to CIBIL Credit Score Builder: Improve Your Credit Score | CredSettle',
    description: 'Expert guide to CIBIL credit score building in India. Learn about credit score improvement, credit report analysis, credit score builder services, and proven strategies to boost your creditworthiness.',
    type: 'website',
  },
};

export default function CreditScoreBuilderPage() {
  return <CreditScoreBuilderClient />;
}

