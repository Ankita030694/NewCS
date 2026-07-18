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
                  <a href="/loan-settlement-by-bank" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Settlement by Bank</a>
                  <a href="/loan-settlement-by-city" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Settlement by City</a>

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
              <a href="/settle-5-lakh-credit-card-loan" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Settle 5 Lakh Credit Card Loan...</a>
              <a href="/are-there-online-services-that-help-with-loan-settlement-offers" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Online Loan Settlement Services Guide...</a>
              <a href="/can-I-get-a-loan-settlement-quote-instantly-from-online-services-" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Instant Loan Settlement Quote Online...</a>
              <a href="/what-online-tools-can-help-estimate-the-benefits-of-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Estimate Loan Settlement Benefits...</a>
              <a href="/SME-loan-dispute-resolution" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for SME Loan...</a>\n              <a href="/rbi-guidelines-for-recovery-agents-2026" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">RBI Guidelines for Recovery Agents 2026...</a>
              <a href="/nbfc-recovery-agent-home-visit-stop" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Stop NBFC Home Visits...</a>
              <a href="/7-day-loan-app-harassment-morphed-photos" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Stop Fake Loan App Blackmail...</a>
              <a href="/loan-default-crypto-stock-market-loss-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Crypto & Stock Market Loan Default...</a>
              <a href="/are-there-any-government-approved-loan-settlement-services-available-online" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Government-Approved Loan Settlement Services Online...</a>
              <a href="/are-there-legal-implecations-or-non-payment-during-debt-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Legal Risks of Non-Payment During...</a>
              <a href="/are-there-specialized-programs-for-settling-student-loan-defaults-in-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Student Loan Default Settlement Programs...</a>
              <a href="/available-loan-settlement-plans-for-salaried-individuals-via-fintech-apps" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Settlement Plans for Salaried...</a>
              <a href="/bad-loan-recovery-strategy" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Bad Loan Recovery Strategy India...</a>
              <a href="/bajaj-finance-recovery-agent-harassment-home-visit" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Stop Bajaj Finance Recovery Agent...</a>
              <a href="/bank-arbitration-notice-loan" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Bank Arbitration Notice for Loan:...</a>
              <a href="/bank-calling-references-and-family-members" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Bank Calling References & Family...</a>
              <a href="/bank-filed-fir-for-loan-default" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Bank Filed FIR for Loan...</a>
              <a href="/bank-recovery-case-in-court" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Bank Recovery Court Cases: Civil...</a>
              <a href="/bank-recovery-harassment-complaint" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Bank Recovery Harassment Complaint |...</a>
              <a href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Bank Sent Legal Notice for...</a>
              <a href="/best-apps-for-managing-and-settling-unsecured-loans" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Apps for Managing and...</a>
              <a href="/best-check-bounce-lawyer-for-loan-case" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Check Bounce Lawyer for...</a>
              <a href="/best-lawyer-for-MSME-loan-recovery-defence" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for MSME Loan...</a>
              <a href="/best-lawyer-for-MSME-personal-loan" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for MSME Personal...</a>
              <a href="/best-lawyer-for-account-documents-drt" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Account Documents...</a>
              <a href="/best-lawyer-for-arc-loan-assignment-dispute" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for ARC Loan...</a>
              <a href="/best-lawyer-for-bank-harassment-for-loan" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Bank Harassment...</a>
              <a href="/best-lawyer-for-bank-loan-recovery-defence" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Bank Loan...</a>
              <a href="/best-lawyer-for-business-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Business Loan...</a>
              <a href="/best-lawyer-for-car-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Car Loan...</a>
              <a href="/best-lawyer-for-company-loan-matters" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Company Loan...</a>
              <a href="/best-lawyer-for-consortium-loan-recovery-defence" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Consortium Loan Recovery Defence...</a>
              <a href="/best-lawyer-for-documentation-review-of-loan-agreement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Loan Agreement...</a>
              <a href="/best-lawyer-for-drt-case-defence-for-bank-loan-recovery" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for DRT Case...</a>
              <a href="/best-lawyer-for-drt-loan-assignment-dispute-defence-in-drt" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">DRT Loan Assignment Dispute Defence...</a>
              <a href="/best-lawyer-for-education-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Education Loan...</a>
              <a href="/best-lawyer-for-home-loan-check-bounce-case" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Home Loan...</a>
              <a href="/best-lawyer-for-home-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Home Loan...</a>
              <a href="/best-lawyer-for-loan-against-property-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Loan Against...</a>
              <a href="/best-lawyer-for-loan-agreement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Loan Agreement...</a>
              <a href="/best-lawyer-for-loan-and-mortgage-agreements" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Loan and...</a>
              <a href="/best-lawyer-for-loan-contract" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Loan Contracts...</a>
              <a href="/best-lawyer-for-loan-recovery-cases" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Loan Recovery...</a>
              <a href="/best-lawyer-for-loan-recovery-documentation" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Loan Recovery...</a>
              <a href="/best-lawyer-for-loan-settlement-by-drt" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Loan Settlement...</a>
              <a href="/best-lawyer-for-loan-settlement-during-drt" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Loan Settlement...</a>
              <a href="/best-lawyer-for-msme-and-business-loans" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for MSME and...</a>
              <a href="/best-lawyer-for-msme-business-loan-dispute" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for MSME Business...</a>
              <a href="/best-lawyer-for-msme-loan-disputes" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for MSME Loan...</a>
              <a href="/best-lawyer-for-notice-for-default-on-mortgage-or-loan-repayment" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Loan &...</a>
              <a href="/best-lawyer-for-notice-for-loan-default" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Loan Default...</a>
              <a href="/best-lawyer-for-personal-loans" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Personal Loans...</a>
              <a href="/best-lawyer-for-secured-loan-litigation-drt" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Secured Loan...</a>
              <a href="/best-lawyer-for-trading-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Trading Loan...</a>
              <a href="/best-lawyer-for-unsecured-loan" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyer for Unsecured Loan...</a>
              <a href="/best-lawyer-to-challenge-loan-assignment-to-arc" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Lawyer to Challenge Loan Assignment...</a>
              <a href="/best-lawyers-for-bounced-security-check-for-loans-and-credit-card-disputes" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Lawyers for Bounced Security...</a>
              <a href="/best-loan-agreement-arbitration-lawyer" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Loan Agreement Arbitration Lawyer...</a>
              <a href="/best-loan-emi-settlement-lawyer" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Loan EMI Settlement Lawyer...</a>
              <a href="/best-microfinance-loan-settlement-lawyer" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Microfinance Loan Settlement Lawyer...</a>
              <a href="/best-nbfc-loan-settlement-lawyer" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best NBFC Loan Settlement Lawyer...</a>
              <a href="/best-project-finance-builder-loan-recovery-matter-lawyer" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Project Finance & Builder...</a>
              <a href="/business-corporate-loan-matters" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Business & Corporate Loan Matters...</a>
              <a href="/can-I-settle-my-home-loan" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Can I Settle My Home...</a>
              <a href="/can-bank-file-case-for-personal-loan" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Can Bank File Case for...</a>
              <a href="/can-i-convert-settled-to-closed-later" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Can I Convert Settled to...</a>
              <a href="/can-i-go-to-jail-for-loan-default-in-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Can I Go To Jail...</a>
              <a href="/can-i-settle-loan-for-free" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Can I Settle My Loan...</a>
              <a href="/can-i-settle-my-credit-card-dues-using-third-party-loan-settlement-companies" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Settle Credit Card Dues via...</a>
              <a href="/can-i-settle-my-loan-without-a-lawyer" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Can I Settle My Loan...</a>
              <a href="/can-i-track-my-loan-settlement-status-through-financial-service-websites" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Track Loan Settlement Status Online...</a>
              <a href="/can-i-use-online-platforms-to-settle-my-home-loan-faster" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Settle Home Loan Faster via...</a>
              <a href="/can-recovery-agents-abuse-you-legally-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Can Recovery Agents Abuse You...</a>
              <a href="/can-recovery-agents-come-home" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Can Recovery Agents Come Home?...</a>
              <a href="/can-you-get-a-loan-again-after-settling-a-previous-loan" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Get a Loan Again After...</a>
              <a href="/cheque-bounce-case-defense-section-138" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Defending a Cheque Bounce Case...</a>
              <a href="/cheque-bounce-case-in-ahmedabad" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Top Cheque Bounce Case Lawyers...</a>
              <a href="/cheque-bounce-case-in-delhi" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Top Cheque Bounce Case Lawyers...</a>
              <a href="/cheque-bounce-case-in-kolkata" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Top Cheque Bounce Case Lawyers...</a>
              <a href="/cheque-bounce-case-in-noida" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Top Cheque Bounce Case Lawyers...</a>
              <a href="/compare-debt-settlement-fees-and-success-rate" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Debt Settlement Fees and Success...</a>
              <a href="/compare-different-debt-management-and-settlement-programs-available-to-indian-consumers" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Compare Debt Management vs. Settlement...</a>
              <a href="/compare-features-of-loan-settlement-services-offered-by-major-financial-apps" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Compare Feature-Rich Loan Settlement Services...</a>
              <a href="/cred-settle-plan-for-building-debt-free-future-after-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">CredSettle Plan for Building Debt-Free...</a>
              <a href="/cred-settle-support-for-avoiding-aggressive-recovery-practices" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">CredSettle Support for Avoiding Aggressive...</a>
              <a href="/credsettle-reviews-and-comparisons-with-other-credit-card-debt-relief-providers-in-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">CredSettle Reviews & Comparisons...</a>
              <a href="/credsettle-vs-other-debt-settlement-companies-in-india-which-is-more-effective" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">CredSettle vs Other Debt Settlement Companies...</a>
              <a href="/debt-settlement-offers-for-business-loans" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Business Loan Settlement Offers |...</a>
              <a href="/debt-settlement-services-that-work-with-multiple-creditors" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Debt Settlement for Multiple Creditors...</a>
              <a href="/debt-settlement-vs-bankruptcy" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Debt Settlement vs Bankruptcy in...</a>
              <a href="/debt-settlement-vs-debt-consolidation" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Debt Settlement vs Debt Consolidation...</a>
              <a href="/debt-settlement-vs-loan-restructuring-for-credit-card-debt-relief-in-india-which-should-i-choose" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Debt Settlement vs Loan Restructuring...</a>
              <a href="/digital-online-cyber-loan-disputes" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Digital Online & Cyber Loan...</a>
              <a href="/dispute-over-forged-loan-signatures" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Dispute Over Forged Loan Signatures...</a>
              <a href="/do-banks-file-fir-for-credit-card-dues" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Do Banks File FIR for...</a>
              <a href="/does-loan-settlement-affect-cibil" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Does Loan Settlement Affect CIBIL?...</a>
              <a href="/does-settlement-erase-the-debt-completely" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Does Settlement Erase the Debt...</a>
              <a href="/does-settlement-impact-a-co-borrower" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Does Settlement Impact a Co-Borrower?...</a>
              <a href="/drt-lawyer-in-mumbai-loan-recovery" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">DRT Lawyer in Mumbai for...</a>
              <a href="/explain-the-difference-between-a-loan-write-off-and-a-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Difference Between Loan Write-Off and...</a>
              <a href="/find-alternatives-solutions-to-debt-settlement-for-small-debts" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Alternatives to Debt Settlement for...</a>
              <a href="/find-certified-financial-planners-who-specialize-in-debt-restructuring-and-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Certified Financial Planners for Debt...</a>
              <a href="/find-debt-settlement-services-known-for-effective-negotiation" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Debt Settlement Services in...</a>
              <a href="/find-reputable-debt-relief-agencies-specializing-in-unsecured-loans-in-bangalore" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Find Reputable Debt Relief Agencies...</a>
              <a href="/get-a-quote-for-debt-settlement-services-for-my-credit-card-debt" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Get a Quote for Credit...</a>
              <a href="/handle-loan-default-without-panicking" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How to Handle Loan Default...</a>
              <a href="/home-loan-eligibility-after-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Home Loan Eligibility After Loan...</a>
              <a href="/how-can-I-negotiate-a-personal-loan-settlement-with-lenders" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How Can I Negotiate a...</a>
              <a href="/how-can-i-initiate-a-full-and-final-settlement-discussion-with-my-bank" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How to Initiate Full and...</a>
              <a href="/how-do-digital-lending-companies-handle-loan-settlement-requests" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Digital Lending: Loan Settlement Requests...</a>
              <a href="/how-do-i-officially-submit-a-loan-settlement-offer-to-my-lender" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How do I Officially Submit...</a>
              <a href="/how-do-peer-to-peer-lending-platforms-handle-loan-settlements" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How do Peer-to-Peer (P2P) Lending...</a>
              <a href="/how-does-loan-settlement-affect-your-financial-health-in-long-term" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Settlement Impact on Long-Term...</a>
              <a href="/how-does-settling-a-loan-impact-my-cibil-credit-score" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How Does Settling a Loan...</a>
              <a href="/how-long-does-a-debt-settlement-typically-take" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How Long Does Debt Settlement...</a>
              <a href="/how-to-ask-bank-for-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How to Ask Bank for...</a>
              <a href="/how-to-avoid-debt-settlement-scams-in-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Avoid Debt Settlement Scams in...</a>
              <a href="/how-to-check-active-loan-on-your-name-in-india-stepbystep-guide" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How to Check Active Loan...</a>
              <a href="/how-to-choose-a-trustworthy-debt-settlement-provider" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Choose a Trustworthy Debt Settlement...</a>
              <a href="/how-to-deal-with-collection-calls-while-in-a-debt-settlement-program" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Dealing with Collection Calls in...</a>
              <a href="/how-to-find-a-trustworthy-debt-settlement-agency-near-me" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Find a Trustworthy Debt Settlement...</a>
              <a href="/how-to-get-freed-from-debt" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How to Get Freed from...</a>
              <a href="/how-to-handle-recovery-agent-harrasment" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Handle Recovery Harassment: RBI Rules...</a>
              <a href="/how-to-identify-fake-recovery-agents" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How to Identify Fake Recovery...</a>
              <a href="/how-to-initiate-a-loan-settlement-request-through-a-banks-online-portal" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Initiate Loan Settlement via Bank...</a>
              <a href="/how-to-negotiate-a-lower-principal-amount-for-creditors" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Negotiate a Lower Principal for...</a>
              <a href="/how-to-settle-7-days-loan-app" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How to Settle 7-Days Loan...</a>
              <a href="/how-to-settle-loan" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How to Settle Loan Online...</a>
              <a href="/how-to-stop-recovery-agent-harassment" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How to Stop Recovery Agent...</a>
              <a href="/how-to-stop-recovery-agent-home-visit" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How to Stop Recovery Agent...</a>
              <a href="/is-cibil-ruined-forever-after-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Is CIBIL Ruined Forever After...</a>
              <a href="/is-it-possible-to-settle-a-personal-loan-through-mobile-banking-apps" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Settle Personal Loan via Mobile...</a>
              <a href="/is-loan-settlement-a-good-option-for-borrowers" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Is Loan Settlement a Good...</a>
              <a href="/education-loan-default-settlement-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Education Loan Default Settlement...</a>
              <a href="/salary-account-frozen-by-bank-for-loan-default" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Salary Account Frozen by Bank...</a>
              <a href="/nri-personal-loan-settlement-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">NRI Loan Settlement India...</a>
              <a href="/impact-of-loan-settlement-on-cibil-score" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Impact of Loan Settlement on CIBIL...</a>
              <a href="/is-loan-settlement-a-good-option" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Is Loan Settlement a Good...</a>
              <a href="/is-loan-settlement-illegal-in-india-truth" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Is Loan Settlement Illegal in...</a>
              <a href="/is-loan-settlement-in-installments-possible" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Is Loan Settlement in Installments...</a>
              <a href="/legal-action-for-credit-card-default" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Legal Action for Credit Card...</a>
              <a href="/legal-case-for-loan-sanction-without-consent" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Legal Case for Loan Sanction...</a>
              <a href="/legal-help-for-non-closure-of-settled-loan" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Legal Help for Non-Closure of...</a>
              <a href="/legal-notice-for-loan-settlement-harassment" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Legal Notice for Loan Settlement...</a>
              <a href="/loan-agreement-drafting-review" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Agreement Drafting & Review...</a>
              <a href="/loan-default-emi-foreclosure-assistance" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Default & EMI Foreclosure...</a>
              <a href="/loan-default-recovery-freeze-defense" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Default & Recovery Freeze...</a>
              <a href="/loan-parties-dispute-resolution" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Parties Dispute Resolution |...</a>
              <a href="/loan-settlement-by-bank" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Settlement Services | Debt...</a>
              <a href="/loan-settlement-by-city" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Lawyers for Loan Settlement &...</a>
              <a href="/loan-settlement-during-medical-emergency" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Settlement During Medical Emergency...</a>
              <a href="/loan-settlement-for-borrowers-facing-economic-downturn" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Settlement: Economic Downturn Guide...</a>
              <a href="/loan-settlement-for-borrowers-planning-financial-reset" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Settlement for Borrowers Planning...</a>
              <a href="/loan-settlement-for-msme-owners" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Settlement for MSME Owners:...</a>
              <a href="/loan-settlement-for-salaried-people" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Settlement for Salaried People:...</a>
              <a href="/loan-settlement-for-self-employed" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Settlement for Self-Employed &...</a>
              <a href="/loan-settlement-for-startup-founders" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Settlement for Startup Founders...</a>
              <a href="/loan-settlement-for-traders" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Settlement for Traders (2025...</a>
              <a href="/loan-settlement-letter-format-noc-format" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Settlement & NOC Letter...</a>
              <a href="/loan-settlement-process-in-hindi" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Settlement Process in Hindi...</a>
              <a href="/loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Settlement Services | Debt...</a>
              <a href="/mudra-loan-settlement-legal-help" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Mudra Loan Settlement Legal Help...</a>
              <a href="/p2p-crypto-scam-unfreeze-bank-account" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">P2P Crypto Scam: How to...</a>
              <a href="/police-case-for-credit-card-debt" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Police Case for Credit Card...</a>
              <a href="/post-loan-settlement-legal-help" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Post-Loan Settlement Legal Help |...</a>
              <a href="/privacy-policy" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How We Use Your Information</a>
              <a href="/rbi-guidelines-calling-after-7pm" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">RBI Guidelines: Recovery Agent Calling...</a>
              <a href="/rbi-new-recovery-guidelines-july-2026" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">RBI New Recovery Guidelines July...</a>
              <a href="/rbi-rules-for-recovery-agents" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">RBI Rules for Recovery Agents...</a>
              <a href="/rbl-bank-harrasement-home-visit" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Stop RBL Bank Harassment Home...</a>
              <a href="/recovery-agents-calling-family-members-law" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Recovery Agents Calling Family Members:...</a>
              <a href="/recovery-agents-threatening-me-what-to-do" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Recovery Agents Threatening Me? Legal...</a>
              <a href="/request-a-free-evaluation-of-my-debt-situation-from-a-settlement-firm" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Free Debt Evaluation from a...</a>
              <a href="/smart-ways-to-manage-emi-payment" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">15+ Smart Ways to Manage...</a>
              <a href="/startup-loan-legal-advisory" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Startup Loan Legal Advisory India...</a>
              <a href="/support-for-loan-settlement-during-medical-emergencies" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Settlement Support for Medical...</a>
              <a href="/terms-and-conditions" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Terms and Conditions | CredSettle...</a>
              <a href="/top-rated-loan-settlement-consultants-for-small-business-loans" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Top Loan Settlement Consultants for...</a>
              <a href="/understanding-90-day-loan-default-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Understanding 90 Day Loan Default...</a>
              <a href="/what-alternatives-exist-to-loan-settlement-for-managing-overwhelming-debt" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Alternatives to Loan Settlement (2025...</a>
              <a href="/what-alternatives-exist-to-loan-settlement-services-for-debt-relief-online" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Debt Relief Alternatives to Loan...</a>
              <a href="/what-are-the-advantages-and-disadvantages-of-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Pros & Cons of Loan...</a>
              <a href="/what-are-the-best-loan-settlement-services-in-india-for-high-value-debts" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Loan Settlement Services for...</a>
              <a href="/what-are-the-charges-for-loan-settlement-services-by-top-financial-firms" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Charges for Loan Settlement Services...</a>
              <a href="/what-are-the-consequences-of-not-paying-emi" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Consequences of Not Paying EMI...</a>
              <a href="/quick-loan-relief" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Quick Loan Relief...</a>
              <a href="/ots-kya-hota-hai-full-form" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">OTS Kya Hota Hai Full Form...</a>
              <a href="/smfg-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">SMFG Loan Settlement Guide...</a>
              <a href="/stress-free-debt-free" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Stress Free Debt Free Guide...</a>
              <a href="/what-are-the-consumer-protection-laws-related-to-debt-settlement-in-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Consumer Protection Laws for Debt...</a>
              <a href="/what-are-the-eligibility-criteria-for-loan-settlement-programs-by-lending-platforms" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">What are the Eligibility Criteria...</a>
              <a href="/what-are-the-income-tax-implications-of-a-settled-debt-amount" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Income Tax Implications of Settled...</a>
              <a href="/what-are-the-interest-savings-by-settling-loans-early-through-digital-services" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Interest Savings via Early Loan...</a>
              <a href="/what-are-the-legal-risks-associated-with-defaulting-on-a-loan-without-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Legal Risks of Loan Default...</a>
              <a href="/what-are-user-reviews-for-popular-loan-settlement-platforms" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">User Reviews for Loan Settlement...</a>
              <a href="/what-customer-support-options-do-loan-settlement-companies-provide" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Customer Support Options Provided by...</a>
              <a href="/what-documents-are-needed-for-debt-settlement-services" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Documents Needed for Debt Settlement...</a>
              <a href="/what-documents-do-i-need-to-prepare-for-a-loan-settlement-proposal" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Prepare Loan Settlement Proposal Documents...</a>
              <a href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">What is Loan Settlement &...</a>
              <a href="/what-is-minimun-debt-amount-required-for-settlement-programs" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Minimum Debt Amount for Settlement...</a>
              <a href="/what-is-npa" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">What is NPA? Meaning, Types,...</a>
              <a href="/what-is-the-average-timeframe-for-completing-a-loan-settlement-process" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Average Timeframe for Loan Settlement...</a>
              <a href="/what-is-the-best-loan-settlement-company-in-india-for-high-credit-card-balances" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">What is the Best Loan...</a>
              <a href="/what-is-the-best-way-to-negotiate-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Way to Negotiate Loan...</a>
              <a href="/what-is-the-success-rate-of-debt-settlement-programs" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Success Rate of Debt Settlement...</a>
              <a href="/what-kind-of-loans-can-not-be-settled" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">What Kind of Loans Can...</a>
              <a href="/what-percentage-do-banks-accept-in-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Bank Loan Settlement Percentages (2025...</a>
              <a href="/what-steps-should-i-take-before-negotiating-a-loan-settlement-with-my-lender" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Steps Before Negotiating a Loan...</a>
              <a href="/when-should-you-choose-loan-settlement-instead-of-repayment" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">When to Choose Settlement vs...</a>
              <a href="/which-bank-provide-personal-loan-for-cibil-defaulters" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Which Bank Provide Personal Loan...</a>
              <a href="/which-banks-offer-debt-consolidation-loans-for-bad-credit" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Which Banks Offer Debt Consolidation...</a>
              <a href="/which-banks-offer-debt-consolidation-loans-in-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Which Banks Offer Debt Consolidation...</a>
              <a href="/which-companies-offer-loan-settlement-services-in-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Which Companies Offer Loan Settlement...</a>
              <a href="/which-companies-offer-professional-debt-settlement-services-for-personal-loans" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Which Companies Offer Professional Debt...</a>
              <a href="/which-credit-card-debt-relief-services-offer-the-best-settlement-options-in-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Credit Card Debt Relief...</a>
              <a href="/which-loan-settlement-service-offers-the-fastest-resolution-for-personal-loans" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Fastest Loan Settlement Service for...</a>
              <a href="/which-loan-settlement-service-should-i-use-for-settling-multiple-credit-card-debts" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Which Loan Settlement Service Should...</a>
              <a href="/which-professional-services-assist-in-negotiating-loan-settlement-terms" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Professional Services for Loan Negotiation</a>
              <a href="/why-does-my-credit-score-drop-even-though-i-pay-on-time" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Why Does My Credit Score...</a>
              <a href="/will-banks-blacklist-you-after-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Will Banks Blacklist You After...</a>
              <a href="/working-capital-loan-legal-help" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Working Capital Loan Legal Help...</a>
              <a href="/get-contact-details-for-top-rated-debt-resolution-companies-in-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Contact Details for Top-Rated Debt...</a>
              <a href="/what-is-the-best-loan-settlement-company-in-india-for-high-credit-card-balances" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">What is the Best Loan...</a>
              <a href="/recommendations-for-debt-settlement-services-in-india-with-low-processing-fees" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Top Debt Settlement Services in...</a>
              <a href="/loan-settlement-services-vs-debt-consolidation-companies-which-is-better-for-reducing-emi" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Settlement vs Debt Consolidation:...</a>
              <a href="/best-loan-settlement-services-near-me-with-flexible-payment-plans" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Loan Settlement Services Near...</a>
              <a href="/which-loan-settlement-service-should-i-use-for-settling-multiple-credit-card-debts" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Which Loan Settlement Service Should...</a>
              <a href="/best-apps-for-managing-and-settling-unsecured-loans" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Apps for Managing and...</a>
              <a href="/what-are-the-key-benefits-and-drawbacks-of-pursuing-a-loan-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Key Benefits and Drawbacks of...</a>
              <a href="/can-i-settle-a-secured-loan-like-a-home-loan-or-only-unsecured-ones" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Can I Settle a Secured...</a>
              <a href="/what-documents-are-required-for-loan-settlement-with-a-professional-service" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Documents Required for Loan Settlement...</a>
              <a href="/is-it-possible-to-settle-a-personal-loan-through-mobile-banking-apps" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Settle Personal Loan via Mobile...</a>
              <a href="/can-i-track-my-loan-settlement-status-through-financial-service-websites" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Track Loan Settlement Status Online...</a>
              <a href="/how-to-check-if-a-loan-settlement-offer-is-genuine-on-digital-platforms" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Verify Loan Settlement Offers on...</a>
              <a href="/how-do-i-officially-submit-a-loan-settlement-offer-to-my-lender" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How do I Officially Submit a Loan Settlement Offer...</a>
              <a href="/is-it-possible-to-settle-a-joint-loan-and-what-are-the-implications-for-co-borrowers" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Is It Possible to Settle a Joint Loan and What Are the Implications for Co-Borrowers...</a>
              <a href="/how-can-i-initiate-a-full-and-final-settlement-discussion-with-my-bank" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How Can I Initiate a Full and Final Settlement Discussion with My Bank...</a>
              <a href="/steps-to-apply-for-a-loan-settlement-through-a-financial-service-provider" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Steps to Apply for Loan Settlement...</a>
              <a href="/get-a-quote-for-debt-settlement-services-for-my-credit-card-debt" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Get a Quote for Debt Settlement...</a>
              <a href="/how-does-settling-a-loan-impact-my-cibil-credit-score" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Impact of Loan Settlement on CIBIL...</a>
              <a href="/are-there-government-backed-programs-for-debt-relief-in-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Government-Backed Debt Relief India...</a>
              <a href="/best-companies-for-debt-settlement-services-in-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Companies for Debt Settlement...</a>
              <a href="/how-to-negotiate-a-debt-settlement-with-creditors-in-India" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Negotiate Debt Settlement with Creditors...</a>
              <a href="/find-reputable-agencies-that-help-settle-credit-card-debt-in-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Find Reputable Agencies That Help Settle...</a>
              <a href="/what-are-the-pros-and-cons-of-using-a-debt-settlement-company" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">What Are The Pros And Cons...</a>
              <a href="/affordable-debt-settlement-plans-for-salaried-individuals" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Affordable Debt Settlement Plans...</a>
              <a href="/how-do-online-debt-settlement-platforms-work-in-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How Online Debt Settlement Platforms Work...</a>
              <a href="/can-i-settle-credit-card-debt-through-a-debt-settlement-service" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Settle Credit Card Debt via Service...</a>
              <a href="/reviews-of-popular-debt-settlement-services-available-to-indian-consumers" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Reviews of Popular Debt Settlement Services...</a>
              <a href="/how-to-check-if-a-debt-settlement-company-is-legit-and-trustworthy" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Check if Debt Settlement is Legit...</a>
              <a href="/can-i-settle-my-debts-without-using-a-third-party-company" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Settle Debts Without Third-Party...</a>
              <a href="/what-are-the-risks-of-entering-a-debt-settlement-agreement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Risks of Debt Settlement Agreement...</a>
              <a href="/what-questions-should-i-ask-a-debt-settlement-consultant" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Questions to Ask a Debt Consultant...</a>
              <a href="/customer-testimonials-for-debt-settlement-service-providers" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Customer Testimonials for Debt Settlement...</a>
              <a href="/debt-settlement-options-for-freelancers-and-self-employed-individuals" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Debt Settlement for Freelancers...</a>
              <a href="/get-a-free-consultation-for-debt-settlement-options" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Get a Free Consultation for Debt Settlement...</a>
              <a href="/how-to-avoid-scams-in-the-debt-settlement-industry" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How to Avoid Scams in Debt Settlement...</a>
              <a href="/what-is-the-success-rate-of-debt-settlement-programs" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Success Rate of Debt Settlement...</a>
              <a href="/what-are-the-best-apps-to-block-recovery-agent-calls-and-messages" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Apps to Block Recovery Agent Calls...</a>
              <a href="/what-are-my-rights-when-dealing-with-loan-recovery-agents" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">What Are My Rights When Dealing With...</a>
              <a href="/where-to-find-lawyers-specializing-in-consumer-debt-protection" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Where to Find Lawyers Specializing in Consumer Debt Protection...</a>
              <a href="/is-there-any-mobile-software-to-automatically-block-harassment-calls-from-recovery-agents" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Is There Any Mobile Software to Automatically Block Harassment Calls...</a>
              <a href="/how-to-protect-family-members-from-debt-collector-calls" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How to Protect Family Members from Debt Collector Calls...</a>
              <a href="/is-there-a-government-portal-for-debt-collection-complaints" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Government Portal for Debt Collection Complaints...</a>
              <a href="/what-are-the-best-legal-aid-websites-for-recovery-agent-harassment-cases" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Legal Aid Websites for Recovery Agent Harassment...</a>
              <a href="/which-financial-institutions-provide-support-to-stop-recovery-agent-harassment" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Financial Institutions Supporting Borrowers Against Harassment...</a>
              <a href="/how-to-block-recovery-agent-numbers-on-android-and-iphone-devices" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How to Block Recovery Agent Numbers on Android and iPhone...</a>
              <a href="/how-to-document-evidence-of-debt-collector-harassment" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How to Document Evidence of Debt Collector Harassment...</a>
              <a href="/debt-management-services" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Debt Management Services</a>
              <a href="/1-debt-management-services-in-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">#1 Debt Management Services in India</a>
              <a href="/1-loan-settlement-services-in-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">#1 Loan Settlement Services in India</a>
              <a href="/loan-management-services" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Management Services</a>
              <a href="/can-i-waive-off-100-percent-of-my-loan" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Can I Waive Off 100 Percent of My Loan</a>
              <a href="/nri-loan-default-india-settlement-from-abroad" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">NRI Loan Default Settlement from Abroad...</a>
              <a href="/loan-settlement-during-divorce-joint-loan-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Joint Loan Settlement During Divorce...</a>
              <a href="/loan-recovery-after-death-of-borrower-legal-heir-rights-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Recovery After Death in India...</a>
              <a href="/salary-account-frozen-by-bank" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Salary Account Frozen by Bank...</a>
              <a href="/loan-taken-in-spouse-name-without-consent-what-to-do" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Spouse Took Loan Without Consent...</a>
              <a href="/loan-settlement-for-senior-citizens-pension-holders-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Settlement for Senior Citizens...</a>
              <a href="/bank-froze-salary-account-for-loan-default-how-to-get-salary" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Bank Froze Salary Account: How to Get Salary...</a>
              <a href="/loan-settlement-after-crypto-stock-market-loss-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Loan Settlement After Crypto/Stock Market Loss...</a>
              <a href="/credit-card-settlement" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Credit Card Settlement Guide...</a>
              <a href="/credit-card-settlement-hdfc" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">HDFC Credit Card Settlement Guide...</a>
              <a href="/full-form-of-ots" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Full Form of OTS in Banking...</a>
              <a href="/settling-debt-in-india-guide" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Guide to Settling Debt in India...</a>
              <a href="/kya-mai-apna-loan-settle-kr-skta-hu" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Kya Mai Apna Loan Settle Kr Skta Hu...</a>
              <a href="/settlement-of-loan-letter" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Settlement of Loan Letter...</a>
              <a href="/timely-repayment-of-loan-result" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Timely Repayment of Loan Result...</a>
              <a href="/punishment-for-non-payment-of-personal-loan-in-india" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Punishment for Non-Payment of Personal Loan in India...</a>
              <a href="/how-to-settle-a-credit-card-debt" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">How to Settle a Credit Card Debt...</a>
              <a href="/what-is-unsecured-personal-loans" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">What is Unsecured Personal Loans...</a>
              <a href="/what-is-minimum-amount-due-for-credit-card" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">What is Minimum Amount Due...</a>
              <a href="/personal-loan-defaulter-for-10-years" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Personal Loan Defaulter 10 Years...</a>
              <a href="/how-to-negotiate-a-full-and-final-settlement-for-an-overdue-personal-loan" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Full and Final Personal Loan Settlement...</a>
              <a href="/best-financial-advisors-for-debt-settlement-in-major-indian-cities" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Best Financial Advisors for Debt...</a>
              <a href="/which-loan-settlement-companies-offer-the-lowest-fees" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Lowest Fee Loan Settlement Companies...</a>
              <a href="/how-do-loan-settlement-agents-work-through-online-portals" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Online Portals for Loan Settlement...</a>
              <a href="/settle-5-lakh-personal-loan" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Settle 5 Lakh Personal Loan...</a>
              <a href="/recovery-agent-came-to-my-office" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Recovery Agent Came To My Office...</a>
              <a href="/settle-10-lakh-personal-loan" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Settle 10 Lakh Personal Loan...</a>
              <a href="/settle-10-lakh-credit-card-loan" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Settle 10 Lakh Credit Card Loan...</a>
              <a href="/recovery-agent-sending-morphed-images" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Recovery Agent Sending Morphed Images...</a>
              <a href="/bank-employee-threatening-arrest-on-call" className="text-[rgba(12,39,86,0.70)] hover:text-[#0C2756] transition-colors text-xs md:text-sm font-normal leading-tight">Bank Employee Threatening Arrest on Call...</a>
            </div>
           <div className="w-full bg-[rgba(12,39,86,0.20)] h-px mb-4 md:mb-6"></div>

            <p className="text-[rgba(12,39,86,0.70)] text-xs md:text-sm font-normal leading-tight">
              © 2020 CredSettle
            </p>
        </div>
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
