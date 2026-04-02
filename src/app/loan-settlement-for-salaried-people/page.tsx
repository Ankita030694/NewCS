import { Metadata } from 'next';
import SalariedSettlementClient from './SalariedSettlementClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Loan Settlement for Salaried People: A Comprehensive 2025 Guide',
  description: 'Learn everything about loan settlement for salaried individuals in India. Master the process, understand RBI guidelines, and save lakhs in interest costs with professional expert help.',
  keywords: 'loan settlement, salaried people, RBI guidelines, debt relief, interest savings, CredSettle, SettleLoans, AMA Legal Solutions, personal loan settlement, credit card settlement',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement-for-salaried-people',
  },
};

export default function SalariedSettlementPage() {
  
  return (
    <>
    <Navbar/>
  <SalariedSettlementClient />
  <Footer/>
  </>
  );
}
