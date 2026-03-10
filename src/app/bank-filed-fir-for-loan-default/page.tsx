import React from 'react';
import { Metadata } from 'next';
import BankFIROnLoanDefaultClient from './BankFIROnLoanDefaultClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Bank Filed FIR for Loan Default: Legal Defense & Rights 2025',
    description: 'Understand the process of a bank filing an FIR for loan default. Learn about BNS sections, arrest risks, and how to defend against criminal charges for debt.',
    alternates: {
        canonical: 'https://www.credsettle.com/bank-filed-fir-for-loan-default',
    },
    openGraph: {
        title: 'Bank Filed FIR for Loan Default: Legal Defense & Rights 2025',
        description: 'Understand the process of a bank filing an FIR for loan default. Learn about BNS sections, arrest risks, and how to defend against criminal charges for debt.',
        url: 'https://www.credsettle.com/bank-filed-fir-for-loan-default',
        type: 'article',
    },
};

export default function BankFIROnLoanDefaultPage() {
    return (
        <>
            <Navbar />
            <BankFIROnLoanDefaultClient />
            <Footer />
        </>
    );
}
