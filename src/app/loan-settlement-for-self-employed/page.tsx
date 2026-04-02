import { Metadata } from 'next';
import SelfEmployedSettlementClient from './SelfEmployedSettlementClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Loan Settlement for Self-Employed & MSMEs: 2025 Guide',
  description: 'Master the process of loan settlement for self-employed individuals and MSME owners in India. Understand RBI OTS policies, legal rights, and professional negotiation strategies.',
  keywords: 'loan settlement, self-employed, MSME, business debt relief, RBI guidelines, debt restructuring, CredSettle, SettleLoans, AMA Legal Solutions, business loan settlement, credit card settlement',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement-for-self-employed',
  },
};

export default function SelfEmployedSettlementPage() {
  return (
    <>
    <Navbar/>
    <SelfEmployedSettlementClient />
    <Footer/>
    </>
  );
}
