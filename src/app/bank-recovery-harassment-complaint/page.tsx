import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BankRecoveryHarassmentComplaintClient from './BankRecoveryHarassmentComplaintClient';

export const metadata: Metadata = {
    title: "Bank Recovery Harassment Complaint | How to File & Win",
    description: "Facing harassment from bank recovery agents? Follow our expert guide to file effective complaints with the Bank, RBI Ombudsman, and Police. Reclaim your rights today.",
    keywords: [
        "bank recovery harassment complaint India",
        "how to file complaint against bank recovery agent",
        "RBI Ombudsman complaint for harassment",
        "police complaint for recovery agent threats",
        "bank recovery agent harassment legal notice",
        "recovery agent harassment compensation India",
        "integrated ombudsman scheme 2026 harassment",
        "FIR against bank recovery agents IPC sections",
        "stop bank harassment legal process",
        "debt recovery harassment grievance redressal"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/bank-recovery-harassment-complaint',
    },
};

export default function BankRecoveryHarassmentComplaintPage() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <BankRecoveryHarassmentComplaintClient />
            <Footer />
        </div>
    );
}
