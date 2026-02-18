import type { Metadata } from "next";
import NBFCLoanSettlementPageClient from "./NBFCLoanSettlementPageClient";

export const metadata: Metadata = {
  title: "NBFC Loan Settlement | Close Debt Legally | CredSettle",
  description: "Expert NBFC loan settlement services. Navigate complex NBFC policies, stop harassment, and secure RBI-compliant OTS with legal protection. Settle for less today.",
  alternates: {
    canonical: "https://www.credsettle.com/services/nbfc-loan-settlement",
  },
  openGraph: {
    title: "NBFC Loan Settlement | Close Debt Legally | CredSettle",
    description: "Expert NBFC loan settlement services. Stop harassment & settle legally.",
    url: "https://www.credsettle.com/services/nbfc-loan-settlement",
    type: "website",
    images: [{ url: "/nbfc_hero.png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NBFCLoanSettlementPage() {
  return <NBFCLoanSettlementPageClient />;
}
