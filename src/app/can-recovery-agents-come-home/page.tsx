import React from 'react';
import { Metadata } from 'next';
import CanRecoveryAgentsHomeClient from './CanRecoveryAgentsHomeClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Can Recovery Agents Come Home? Legal Rights & Trespass Laws',
    description: 'Explore your legal rights regarding recovery agent home visits. Learn about trespassing laws in India, the right to refuse entry, and how to protect your privacy.',
    alternates: {
        canonical: 'https://www.credsettle.com/can-recovery-agents-come-home',
    },
    openGraph: {
        title: 'Can Recovery Agents Come Home? Legal Rights & Trespass Laws',
        description: 'Explore your legal rights regarding recovery agent home visits. Learn about trespassing laws in India, the right to refuse entry, and how to protect your privacy.',
        url: 'https://www.credsettle.com/can-recovery-agents-come-home',
        type: 'article',
    },
};

export default function CanRecoveryAgentsHomePage() {
    return (
        <>
            <Navbar />
            <CanRecoveryAgentsHomeClient />
            <Footer />
        </>
    );
}
