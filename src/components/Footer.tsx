import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="w-full bg-[#EFF7FF] pt-8 md:pt-[60px] px-4 md:px-[50px] pb-0 mb-0 rounded-t-[20px] md:rounded-t-[40px] overflow-hidden overflow-x-hidden max-w-full">
      <div className="w-full max-w-7xl mx-auto">
        <div className="bg-white rounded-[15px] md:rounded-[30px] border border-[rgba(12,39,86,0.20)] shadow-[0_0_23.5px_0_rgba(0,0,0,0.10)] p-6 md:p-10 lg:p-[40px]">
          <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12 lg:gap-[60px] mb-8 md:mb-12 lg:mb-[45px]">
            <div className="flex flex-col gap-4 md:gap-5 w-full lg:max-w-[350px]">
              <img src="/credsettle-logo-black.svg" alt="CredSettle Logo" className="w-20 md:w-24 lg:w-[110px] h-auto" />
              <p className="text-[rgba(12,39,86,0.70)] text-xs md:text-sm leading-relaxed font-normal">
                Settle your loans and credit card debt easily with CredSettle. Get debt relief, loan waivers & protection from harassment by recovery agents in India.
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <a href="https://www.linkedin.com/company/credsettle/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-[#0C2756] w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:opacity-70 transition-opacity"
                  />
                </a>
                <a href="https://www.facebook.com/people/CredSettle/61572589389799/">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-[#0C2756] w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:opacity-70 transition-opacity"
                  />
                </a>
                <a href="https://www.instagram.com/credsettle/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-[#0C2756] w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:opacity-70 transition-opacity"
                  />
                </a>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row gap-8 md:gap-12 lg:gap-[60px] w-full lg:w-auto">
              <div className="flex flex-col gap-4 md:gap-5 min-w-0 sm:min-w-[90px]">
                <h3 className="text-[#0C2756] text-sm md:text-base font-bold leading-tight">
                  Company
                </h3>
                <div className="flex flex-col gap-2 md:gap-3">
                  <a href="/about" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">About Us</a>
                  <a href="/services" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Services</a>
                  <a href="/contact" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Contact Us</a>
                  <a href="/resources" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Resources</a>
                  <a href="/loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Settlement</a>

                </div>
              </div>

              <div className="flex flex-col gap-4 md:gap-5 min-w-0 sm:min-w-[180px]">
                <h3 className="text-[#0C2756] text-sm md:text-base font-bold leading-tight">
                  Services
                </h3>
                <div className="flex flex-col gap-2 md:gap-3">
                  <a href="/services/personal-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Personal Loan</a>
                  <a href="/services/credit-card-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Credit Card</a>
                  <a href="/services/business-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Business Loan</a>
                  <a href="/services/car-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Car Loan</a>
                  <a href="/services/anti-harassment" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Anti Harassment</a>
                  <a href="/services/credit-score-builder" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Credit Score Improvement</a>
                </div>
              </div>

              <div className="flex flex-col gap-4 md:gap-5 min-w-0 sm:min-w-[200px]">
                <h3 className="text-[#0C2756] text-sm md:text-base font-bold leading-tight">
                  Contact
                </h3>

                <div className="flex flex-col gap-2 md:gap-3">
                  <a href="https://maps.app.goo.gl/Uqcz1TTYyiqjcQC7A" target="_blank" rel="noopener noreferrer">
                    <p className="text-[rgba(12,39,86,0.70)] text-xs md:text-sm font-normal leading-relaxed hover:text-[#0C2756] transition-colors">
                      4th Floor, 2493AP, Block G, Sushant Lok 2, Sector 57, Gurugram, Haryana 122001
                    </p>
                  </a>

                  <a href="/terms-and-conditions" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Terms & Conditions</a>
                  <a href="/privacy-policy" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Privacy Policy</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-5 mb-8 border-t border-[rgba(12,39,86,0.10)] pt-8">
            <h3 className="text-[#0C2756] text-sm md:text-base font-bold leading-tight">
              Queries
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-2">
              <a href="/cheque-bounce-case-in-kolkata" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Cheque Bounce Case in Kolkata</a>
              <a href="/cheque-bounce-case-in-ahmedabad" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Cheque Bounce Case in Ahmedabad</a>
              <a href="/cheque-bounce-case-in-delhi" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Cheque Bounce Case in Delhi</a>
              <a href="/cheque-bounce-case-in-noida" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Cheque Bounce Case in Noida</a>
              <a href="/how-to-handle-recovery-agent-harrasment" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How to Handle Recovery Agent Harassment</a>
              <a href="/bank-calling-references-and-family-members" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Bank Calling References & Family Members</a>
              <a href="/can-i-settle-loan-for-free" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Can I Settle Loan for Free</a>
              <a href="/can-I-settle-my-home-loan" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Can I Settle My Home Loan</a>
              <a href="/what-kind-of-loans-can-not-be-settled" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">What Kind of Loans Can Not Be Settled</a>
              <a href="/what-are-the-consequences-of-not-paying-emi" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Consequences of Not Paying EMI</a>
              <a href="/best-lawyer-for-loan-agreement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Loan Agreement</a>
              <a href="/best-lawyer-for-trading-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Trading Loan Settlement</a>
              <a href="/best-lawyer-for-msme-loan-disputes" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for MSME Loan Disputes</a>
              <a href="/what-is-the-best-way-to-negotiate-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">What is the Best Way to Negotiate Loan Settlement</a>
              <a href="/how-to-ask-bank-for-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How to Ask Bank for Settlement</a>
              <a href="/how-to-handle-recovery-agent-harrasment" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How to Handle Recovery Agent Harassment</a>
              <a href="/how-to-stop-recovery-agent-home-visit" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How to Stop Recovery Agent Home Visit</a>
              <a href="/how-to-stop-recovery-agent-harassment" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How to Stop Recovery Agent Harassment</a>
              <a href="/does-loan-settlement-affect-cibil" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Does Loan Settlement Affect CIBIL</a>
              <a href="/is-loan-settlement-a-good-option" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Is Loan Settlement a Good Option</a>
              <a href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">What is Loan Settlement and How Does it Work in India</a>
              <a href="/what-are-the-advantages-and-disadvantages-of-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Advantages and Disadvantages of Loan Settlement</a>
              <a href="/how-does-loan-settlement-affect-your-financial-health-in-long-term" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Long-Term Impact of Loan Settlement</a>
              <a href="/bajaj-finance-recovery-agent-harassment-home-visit" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Bajaj Finance Recovery Agent Harassment Home Visit</a>
              <a href="/rbl-bank-harrasement-home-visit" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">RBL Bank Harassment Home Visit</a>
              <a href="/what-steps-should-i-take-before-negotiating-a-loan-settlement-with-my-lender" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Steps Before Negotiating Loan Settlement</a>
              <a href="/best-lawyer-for-home-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Home Loan Settlement</a>
              <a href="/best-check-bounce-lawyer-for-loan-case" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Check Bounce Lawyer for Loan Case</a>
              <a href="/best-lawyer-for-loan-contract" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Loan Contract</a>
              <a href="/best-lawyer-for-bank-harassment-for-loan" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Bank Harassment</a>
              <a href="/best-lawyer-for-loan-recovery-cases" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Loan Recovery Cases</a>
              <a href="/best-lawyer-for-loan-and-mortgage-agreements" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Loan and Mortgage Agreements</a>
              <a href="/best-lawyer-for-education-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Education Loan Settlement</a>
              <a href="/best-lawyer-for-loan-against-property-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Loan Against Property Settlement</a>
              <a href="/best-lawyer-for-business-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Business Loan Settlement</a>
              <a href="/best-lawyer-for-car-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Car Loan Settlement</a>
              <a href="/best-lawyer-for-secured-loan-litigation-drt" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Secured Loan Litigation DRT</a>
              <a href="/best-lawyer-for-unsecured-loan" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Unsecured Loan</a>
              <a href="/best-lawyer-to-challenge-loan-assignment-to-arc" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer to Challenge ARC Assignment</a>
              <a href="/best-lawyer-for-MSME-loan-recovery-defence" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for MSME Loan Recovery Defence</a>
              <a href="/best-lawyer-for-MSME-personal-loan" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for MSME Personal Loan</a>
              <a href="/best-lawyer-for-personal-loans" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Personal Loans</a>
              <a href="/best-lawyers-for-bounced-security-check-for-loans-and-credit-card-disputes" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Bounced Security Check</a>
              <a href="/best-lawyer-for-bank-loan-recovery-defence" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Bank Loan Recovery Defence</a>
              <a href="/best-lawyer-for-drt-case-defence-for-bank-loan-recovery" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for DRT Case Defence</a>
              <a href="/best-lawyer-for-loan-settlement-during-drt" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Loan Settlement During DRT</a>
              <a href="/best-project-finance-builder-loan-recovery-matter-lawyer" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Project Finance Builder Loan Recovery Lawyer</a>
              <a href="/best-loan-agreement-arbitration-lawyer" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Loan Agreement Arbitration Lawyer</a>
              <a href="/best-lawyer-for-home-loan-check-bounce-case" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Home Loan Check Bounce Case</a>
              <a href="/drt-lawyer-in-mumbai-loan-recovery" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">DRT Lawyer in Mumbai Loan Recovery</a>
              <a href="/best-lawyer-for-account-documents-drt" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Account Documents DRT</a>
              <a href="/best-lawyer-for-arc-loan-assignment-dispute" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for ARC Loan Assignment Dispute</a>
              <a href="/best-lawyer-for-loan-recovery-documentation" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Loan Recovery Documentation</a>
              <a href="/best-lawyer-for-documentation-review-of-loan-agreement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Documentation Review of Loan Agreement</a>
              <a href="/best-lawyer-for-msme-business-loan-dispute" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for MSME Business Loan Dispute</a>
              <a href="/best-lawyer-for-loan-settlement-by-drt" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Loan Settlement by DRT</a>
              <a href="/best-lawyer-for-notice-for-loan-default" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Notice for Loan Default</a>
              <a href="/best-lawyer-for-drt-loan-assignment-dispute-defence-in-drt" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for DRT Loan Assignment Dispute Defence</a>
              <a href="/best-lawyer-for-msme-and-business-loans" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for MSME and Business Loans</a>
              <a href="/best-lawyer-for-company-loan-matters" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Company Loan Matters</a>
              <a href="/best-lawyer-for-notice-for-default-on-mortgage-or-loan-repayment" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Notice for Default on Mortgage</a>
              <a href="/best-lawyer-for-consortium-loan-recovery-defence" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Consortium Loan Recovery Defence</a>
              <a href="/loan-agreement-drafting-review" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Agreement Drafting & Review</a>
              <a href="/best-nbfc-loan-settlement-lawyer" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best NBFC Loan Settlement Lawyer</a>
              <a href="/SME-loan-dispute-resolution" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">SME Loan Dispute Resolution</a>
              <a href="/legal-case-for-loan-sanction-without-consent" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Sanction Without Consent Case</a>
              <a href="/loan-default-recovery-freeze-defense" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Default Recovery Freeze Defense</a>
              <a href="/post-loan-settlement-legal-help" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Post-Loan Settlement Legal Help</a>
              <a href="/digital-online-cyber-loan-disputes" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Digital & Cyber Loan Disputes</a>
              <a href="/business-corporate-loan-matters" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Business & Corporate Loan Matters</a>
              <a href="/loan-default-emi-foreclosure-assistance" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Foreclosure & EMI Assistance</a>
              <a href="/loan-parties-dispute-resolution" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Parties Dispute Resolution</a>
              <a href="/startup-loan-legal-advisory" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Startup Loan Legal Advisory</a>
              <a href="/working-capital-loan-legal-help" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Working Capital Loan Legal Help</a>
              <a href="/bad-loan-recovery-strategy" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Bad Loan Recovery Strategy</a>
              <a href="/best-microfinance-loan-settlement-lawyer" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Microfinance Loan Settlement Lawyer</a>
              <a href="/legal-help-for-non-closure-of-settled-loan" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Legal Help for Non-Closure of Settled Loan</a>
              <a href="/best-loan-emi-settlement-lawyer" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Loan EMI Settlement Lawyer</a>
              <a href="/mudra-loan-settlement-legal-help" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Mudra Loan Settlement Legal Help</a>
              <a href="/dispute-over-forged-loan-signatures" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Dispute Over Forged Loan Signatures</a>
              <a href="/rbi-new-recovery-guidelines-july-2026" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">RBI Recovery Guidelines July 2026</a>
              <a href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Bank Sent Legal Notice - What to Do</a>
              <a href="/can-bank-file-case-for-personal-loan" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Can Bank File Case for Personal Loan</a>
              <a href="/legal-action-for-credit-card-default" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Legal Action for Credit Card Default</a>
              <a href="/bank-arbitration-notice-loan" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Bank Arbitration Notice for Loan</a>
              <a href="/bank-recovery-case-in-court" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Bank Recovery Case in Court</a>
              <a href="/recovery-agents-threatening-me-what-to-do" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Recovery Agents Threatening Me</a>
              <a href="/bank-recovery-harassment-complaint" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Bank Recovery Harassment Complaint</a>
              <a href="/rbi-rules-for-recovery-agents" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">RBI Rules for Recovery Agents</a>
              <a href="/can-recovery-agents-come-home" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Can Recovery Agents Come Home</a>
              <a href="/recovery-agents-calling-family-members-law" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Recovery Agents Calling Family Law</a>
              <a href="/can-i-go-to-jail-for-loan-default-in-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Can I Go to Jail for Loan Default?</a>
              <a href="/police-case-for-credit-card-debt" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Police Case for Credit Card Debt</a>
              <a href="/bank-filed-fir-for-loan-default" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Bank Filed FIR for Loan Default</a>
              <a href="/is-loan-settlement-a-good-option-for-borrowers" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Is Loan Settlement a Good Option for Borrowers</a>
              <a href="/will-banks-blacklist-you-after-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Will Banks Blacklist You After Loan Settlement</a>
              <a href="/can-you-get-a-loan-again-after-settling-a-previous-loan" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Can You Get a Loan Again After Settling a Previous Loan</a>
              <a href="/when-should-you-choose-loan-settlement-instead-of-repayment" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">When to Choose Settlement Instead of Repayment</a>
              <a href="/what-questions-should-i-ask-a-debt-settlement-consultant" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Questions for Debt Consultants</a>
              <a href="/debt-settlement-services-that-work-with-multiple-creditors" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Multi-Creditor Debt Services</a>
              <a href="/what-percentage-do-banks-accept-in-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">What Percentage Do Banks Accept in Loan Settlement</a>
              <a href="/what-is-minimun-debt-amount-required-for-settlement-programs" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Minimum Debt for Settlement</a>
              <a href="/debt-settlement-offers-for-business-loans" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Business Loan Settlement Offers</a>
               <a href="/are-there-legal-implecations-or-non-payment-during-debt-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Legal Implications of Non-Payment</a>
               <a href="/how-long-does-a-debt-settlement-typically-take" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Debt Settlement Timeline</a>
               <a href="/compare-debt-settlement-fees-and-success-rate" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Compare Fees & Success Rate</a>
               <a href="/how-to-avoid-debt-settlement-scams-in-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Avoid Settlement Scams</a>
               <a href="/how-to-choose-a-trustworthy-debt-settlement-provider" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Choosing a Trustworthy Provider</a>
               <a href="/how-to-find-a-trustworthy-debt-settlement-agency-near-me" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Finding Agencies Near Me</a>
                <a href="/what-is-the-success-rate-of-debt-settlement-programs" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Success Rate of Debt Settlement</a>
                <a href="/what-documents-are-needed-for-debt-settlement-services" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">What Documents are Needed</a>
                <a href="/debt-settlement-vs-bankruptcy" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Debt Settlement vs Bankruptcy</a>
               <a href="/how-to-deal-with-collection-calls-while-in-a-debt-settlement-program" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Dealing with Collection Calls</a>
               <a href="/find-alternatives-solutions-to-debt-settlement-for-small-debts" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Alternatives for Small Debts</a>
               <a href="/what-are-the-consumer-protection-laws-related-to-debt-settlement-in-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Consumer Protection Laws</a>
               <a href="/debt-settlement-vs-debt-consolidation" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Settlement vs Consolidation</a>
               <a href="/how-to-negotiate-a-lower-principal-amount-for-creditors" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Negotiate Lower Principal</a>
                <a href="/how-can-I-negotiate-a-personal-loan-settlement-with-lenders" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Negotiate Personal Loan Settlement</a>
                <a href="/which-companies-offer-loan-settlement-services-in-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Settlement Companies India</a>
                <a href="/how-does-settling-a-loan-impact-my-cibil-credit-score" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Impact of Settling a Loan on CIBIL Score</a>
                <a href="/best-apps-for-managing-and-settling-unsecured-loans" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Apps for Managing and Settling Unsecured Loans</a>
                <a href="/which-companies-offer-professional-debt-settlement-services-for-personal-loans" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Professional Debt Settlement Services for Personal Loans</a>
                <a href="/steps-to-apply-for-a-loan-settlement-through-a-financial-service-provider" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Steps to Apply for a Loan Settlement</a>
                <a href="/what-are-the-key-benefits-and-drawbacks-of-pursuing-a-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Key Benefits and Drawbacks of Loan Settlement</a>
                <a href="/find-reputable-debt-relief-agencies-specializing-in-unsecured-loans-in-bangalore" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Debt Relief Agencies in Bangalore</a>
               <a href="/can-i-use-online-platforms-to-settle-my-home-loan-faster" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Settle Home Loan Faster Online</a>
               <a href="/what-are-the-charges-for-loan-settlement-services-by-top-financial-firms" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Charges by Top Financial Firms</a>
               <a href="/what-documents-do-i-need-to-prepare-for-a-loan-settlement-proposal" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Documents Needed for Settlement Proposal</a>
               <a href="/how-to-check-if-a-loan-settlement-offer-is-genuine-on-digital-platforms" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Check for Genuine Settlement Offer</a>
               <a href="/how-can-i-initiate-a-full-and-final-settlement-discussion-with-my-bank" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Initiate Full and Final Settlement</a>
               <a href="/top-rated-loan-settlement-consultants-for-small-business-loans" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Top Business Loan Consultants</a>
               <a href="/compare-different-debt-management-and-settlement-programs-available-to-indian-consumers" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Compare Debt Management & Settlement</a>
               <a href="/how-do-digital-lending-companies-handle-loan-settlement-requests" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Digital Lending Settlements</a>
               <a href="/what-are-the-income-tax-implications-of-a-settled-debt-amount" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Income Tax Implications of Settled Debt</a>
                <a href="/what-documents-are-required-for-loan-settlement-with-a-professional-service" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Documents Required for Loan Settlement</a>
                 <a href="/can-i-settle-a-secured-loan-like-a-home-loan-or-only-unsecured-ones" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Secured vs Unsecured Settlement</a>
                 <a href="/is-it-possible-to-settle-a-personal-loan-through-mobile-banking-apps" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Mobile App Settlements</a>
                  <a href="/find-debt-settlement-services-known-for-effective-negotiation" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Effective Negotiation Services</a>
                  <a href="/compare-features-of-loan-settlement-services-offered-by-major-financial-apps" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Compare Settlement Apps</a>
                  <a href="/where-can-i-locate-government-approved-consumer-credit-counseling-services-in-chennai" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Chennai Credit Counseling</a>
                  <a href="/how-to-get-the-best-settlement-deal-on-a-vehicle-loan-using-online-services" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Vehicle Loan Settlement Deal</a>
                  <a href="/what-are-the-legal-risks-associated-with-defaulting-on-a-loan-without-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Legal Risks of Loan Default</a>
                  <a href="/what-are-user-reviews-for-popular-loan-settlement-platforms" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">User Reviews of Settlement Platforms</a>
                  <a href="/can-i-settle-my-credit-card-dues-using-third-party-loan-settlement-companies" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Settle Credit Card Dues via Third-Party</a>
                  <a href="/what-alternatives-exist-to-loan-settlement-for-managing-overwhelming-debt" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Alternatives to Loan Settlement</a>
                  <a href="/are-there-any-government-approved-loan-settlement-services-available-online" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Government Approved Settlement</a>
                  <a href="/request-a-free-evaluation-of-my-debt-situation-from-a-settlement-firm" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Free Debt Evaluation</a>
                  <a href="/are-there-specialized-programs-for-settling-student-loan-defaults-in-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Student Loan Defaults</a>
                  <a href="/available-loan-settlement-plans-for-salaried-individuals-via-fintech-apps" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Salaried Individuals Plans</a>
                  <a href="/what-are-the-interest-savings-by-settling-loans-early-through-digital-services" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Interest Savings by Settling Loans Early</a>
                  <a href="/which-professional-services-assist-in-negotiating-loan-settlement-terms" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Negotiating Loan Settlement Terms</a>
                  <a href="/what-is-the-average-timeframe-for-completing-a-loan-settlement-process" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Average Timeframe for Loan Settlement</a>
                  <a href="/how-to-initiate-a-loan-settlement-request-through-a-banks-online-portal" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Initiate Loan Settlement via Online Portal</a>
                  <a href="/find-certified-financial-planners-who-specialize-in-debt-restructuring-and-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Certified Financial Planners Guide</a>
                  <a href="/what-customer-support-options-do-loan-settlement-companies-provide" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Customer Support Options Guide</a>
                  <a href="/explain-the-difference-between-a-loan-write-off-and-a-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Write-Off vs Settlement Guide</a>
                  <a href="/can-i-track-my-loan-settlement-status-through-financial-service-websites" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Track Settlement Status Online</a>

              </div>
          </div>

          <div className="w-full bg-[rgba(12,39,86,0.20)] h-px mb-4 md:mb-6"></div>

          <p className="text-[rgba(12,39,86,0.70)] text-xs md:text-sm font-normal leading-tight">
            © 2020 CredSettle
          </p>
        </div>
      </div>

      <div className="w-full mt-4 md:mt-8 mb-0 pb-0 relative overflow-hidden">
        <h2
          className="text-center text-[clamp(58px,16vw,350px)] font-normal leading-none -mb-5 md:-mb-12 lg:-mb-[50px] overflow-hidden whitespace-normal break-words w-full max-w-full mx-auto px-4 select-none"
          style={{
            background: 'linear-gradient(180deg, #007AFF 0%, #EFF7FF 72.39%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'block',
            height: 'auto',
            position: 'relative',
            bottom: 0,
            wordBreak: 'break-word',
            overflowWrap: 'anywhere',
            overflow: 'hidden'
          }}
        >
          CredSettle
        </h2>
      </div>
    </footer>
  );
}
