import React from 'react';
import { Metadata } from 'next';
import RBIRulesClient from './RBIRulesClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'RBI Rules for Recovery Agents 2025: Rights & Guidelines',
    description: 'Comprehensive guide to RBI rules for recovery agents in 2025. Learn about legal contact timings, prohibited practices, privacy rights, and how to stop harassment.',
    alternates: {
        canonical: 'https://www.credsettle.com/rbi-rules-for-recovery-agents',
    },
    openGraph: {
        title: 'RBI Rules for Recovery Agents 2025: Rights & Guidelines',
        description: 'Comprehensive guide to RBI rules for recovery agents in 2025. Learn about legal contact timings, prohibited practices, privacy rights, and how to stop harassment.',
        url: 'https://www.credsettle.com/rbi-rules-for-recovery-agents',
        type: 'article',
    },
};

export default function RBIRulesPage() {
    return (
        <>
            <Navbar />
            <RBIRulesClient />
            <Footer />
        </>
    );
}
