import type { Metadata } from "next";
import PersonalLoanSettlementPageClient from "./PersonalLoanSettlementPageClient";

export const metadata: Metadata = {
  title: "Personal Loan Settlement India | RBI Compliant OTS | CredSettle",
  description: "Expert personal loan settlement services in India. Stop harassment, reduce principal by up to 50%, and get legal closure. 100% RBI compliant process.",
  alternates: {
    canonical: "https://www.credsettle.com/services/personal-loan-settlement",
  },
  openGraph: {
    title: "Personal Loan Settlement India | RBI Compliant OTS | CredSettle",
    description: "Settle personal loans legally with CredSettle. Stop harassment now.",
    url: "https://www.credsettle.com/services/personal-loan-settlement",
    type: "website",
    images: [{ url: "/personalhero.png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PersonalLoanSettlementPage() {
  return <PersonalLoanSettlementPageClient />;
}


