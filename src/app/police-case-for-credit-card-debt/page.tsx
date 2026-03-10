import React from 'react';
import { Metadata } from 'next';
import PoliceCaseCreditCardClient from './PoliceCaseCreditCardClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Police Case for Credit Card Debt: Can You Be Arrested? 2025 Laws',
    description: 'Learn the truth about police involvement in credit card debt. Discover your rights, how to handle fake police threats, and current Supreme Court rulings on debt defaults.',
    alternates: {
        canonical: 'https://www.credsettle.com/police-case-for-credit-card-debt',
    },
    openGraph: {
        title: 'Police Case for Credit Card Debt: Can You Be Arrested? 2025 Laws',
        description: 'Learn the truth about police involvement in credit card debt. Discover your rights, how to handle fake police threats, and current Supreme Court rulings on debt defaults.',
        url: 'https://www.credsettle.com/police-case-for-credit-card-debt',
        type: 'article',
    },
};

export default function PoliceCaseCreditCardPage() {
    return (
        <>
            <Navbar />
            <PoliceCaseCreditCardClient />
            <Footer />
        </>
    );
}
