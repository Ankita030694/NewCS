import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - CredSettle | Get Free Consultation for Loan Settlement",
  description: "Contact CredSettle for free consultation on loan settlement. Get expert help with credit card, personal loan, business loan settlement. Call +91 8800226635 or email info@credsettle.com",
  keywords: [
    "contact CredSettle",
    "loan settlement consultation",
    "debt settlement help",
    "loan settlement contact",
    "debt resolution consultation",
    "CredSettle contact number"
  ],
  openGraph: {
    title: "Contact Us - CredSettle | Get Free Consultation for Loan Settlement",
    description: "Contact CredSettle for free consultation on loan settlement. Get expert help with credit card, personal loan, business loan settlement.",
    url: "https://www.credsettle.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - CredSettle | Get Free Consultation for Loan Settlement",
    description: "Contact CredSettle for free consultation on loan settlement. Get expert help with debt settlement.",
  },
  alternates: {
    canonical: "https://www.credsettle.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}




