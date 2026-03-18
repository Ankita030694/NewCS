import CibilImpactClient from './CibilImpactClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'How Does Settling a Loan Impact My CIBIL Credit Score? (2025 Guide)',
  description: 'Understand the deep impact of loan settlement on your CIBIL score. Learn how to recover your credit health, RBI 2025 rules, and the difference between closed and settled.',
  keywords: 'loan settlement cibil impact, credit score after settlement, how to improve cibil after settlement, rbi credit reporting rules 2025, settled vs closed loan, cibil score recovery',
};

export default function CibilImpactPage() {
    return (
        <>
            <Navbar />
            <CibilImpactClient />
            <Footer />
        </>
    );
}
